(function () {
    'use strict';

    const API_BASE = (window.LOVE_PROJECT_API_BASE || 'https://api.sz-hrhb.com').replace(/\/$/, '');
    const API_URL = API_BASE + '/v1/love-project/comments';
    const PIN_KEY = 'love-project-comment-pin';
    const commentsByMemory = new Map();
    const panelsByMemory = new Map();

    function getSavedPin() {
        try { return sessionStorage.getItem(PIN_KEY) || ''; } catch (_) { return ''; }
    }

    function savePin(pin) {
        try { sessionStorage.setItem(PIN_KEY, pin); } catch (_) { /* session storage may be unavailable */ }
    }

    async function readError(response) {
        try {
            const body = await response.json();
            return body.error?.message || body.message || '请求失败';
        } catch (_) {
            return '请求失败 (' + response.status + ')';
        }
    }

    function createPanel(memoryId) {
        const section = document.createElement('section');
        section.className = 'love-comments';
        section.setAttribute('aria-label', '这条回忆的评论');

        const heading = document.createElement('div');
        heading.className = 'love-comments-heading';
        const title = document.createElement('h4');
        title.textContent = '💬 留下回声';
        const count = document.createElement('span');
        count.className = 'love-comments-count';
        heading.append(title, count);

        const status = document.createElement('p');
        status.className = 'love-comments-status';
        status.setAttribute('aria-live', 'polite');

        const list = document.createElement('div');
        list.className = 'love-comments-list';

        const form = document.createElement('form');
        form.className = 'love-comments-form';
        const author = document.createElement('select');
        author.className = 'love-comments-author';
        author.setAttribute('aria-label', '评论者');
        [['小叶', '🌿 小叶'], ['CC', '🐻 CC']].forEach(([value, label]) => {
            const option = document.createElement('option');
            option.value = value;
            option.textContent = label;
            author.appendChild(option);
        });

        const text = document.createElement('textarea');
        text.className = 'love-comments-input';
        text.placeholder = '写下这段回忆里的悄悄话…';
        text.maxLength = 2000;
        text.rows = 3;
        text.required = true;
        text.setAttribute('aria-label', '评论内容');

        const submit = document.createElement('button');
        submit.className = 'love-comments-submit';
        submit.type = 'submit';
        submit.textContent = '发出回声';
        form.append(author, text, submit);
        section.append(heading, list, status, form);

        const panel = { section, list, count, status, form };
        const panels = panelsByMemory.get(memoryId) || [];
        panels.push(panel);
        panelsByMemory.set(memoryId, panels);

        form.addEventListener('submit', async (event) => {
            event.preventDefault();
            const value = text.value.trim();
            if (!value) return;

            submit.disabled = true;
            status.textContent = '发送中…';
            try {
                let pin = getSavedPin();
                if (!pin) {
                    pin = window.prompt('请输入双方共用的评论 PIN：') || '';
                    if (!pin) {
                        status.textContent = '已取消发送';
                        return;
                    }
                }

                let response = await postComment(memoryId, author.value, value, pin);
                if (response.status === 401) {
                    savePin('');
                    pin = window.prompt('PIN 不正确或已失效，请重新输入：') || '';
                    if (!pin) {
                        status.textContent = '已取消发送';
                        return;
                    }
                    response = await postComment(memoryId, author.value, value, pin);
                }
                if (!response.ok) throw new Error(await readError(response));

                savePin(pin);
                const body = await response.json();
                const comments = commentsByMemory.get(memoryId) || [];
                comments.push(body.comment);
                commentsByMemory.set(memoryId, comments);
                text.value = '';
                renderMemory(memoryId);
                status.textContent = '评论已发送';
            } catch (error) {
                status.textContent = error.message || '发送失败，请稍后重试';
            } finally {
                submit.disabled = false;
            }
        });

        return section;
    }

    function postComment(memoryId, author, text, pin) {
        return fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Love-Project-Pin': pin
            },
            body: JSON.stringify({ memory_id: memoryId, author, text })
        });
    }

    function formatTime(value) {
        const date = new Date(value);
        if (Number.isNaN(date.getTime())) return '';
        return new Intl.DateTimeFormat('zh-CN', {
            year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'
        }).format(date);
    }

    function renderMemory(memoryId) {
        const comments = commentsByMemory.get(memoryId) || [];
        (panelsByMemory.get(memoryId) || []).forEach((panel) => {
            panel.list.replaceChildren();
            panel.count.textContent = comments.length ? String(comments.length) : '';
            if (!comments.length) {
                const empty = document.createElement('p');
                empty.className = 'love-comments-empty';
                empty.textContent = '这段回忆还没有留言，来留下第一句吧。';
                panel.list.appendChild(empty);
                return;
            }
            comments.forEach((comment) => {
                const article = document.createElement('article');
                article.className = 'love-comment';
                const meta = document.createElement('div');
                meta.className = 'love-comment-meta';
                const author = document.createElement('strong');
                author.textContent = comment.author;
                const time = document.createElement('time');
                time.dateTime = comment.created_at;
                time.textContent = formatTime(comment.created_at);
                meta.append(author, time);
                const content = document.createElement('p');
                content.textContent = comment.text;
                article.append(meta, content);
                panel.list.appendChild(article);
            });
        });
    }

    async function loadComments() {
        const nodes = document.querySelectorAll('[data-memory-id]');
        const memoryIds = new Set();
        nodes.forEach((node) => {
            const memoryId = node.dataset.memoryId;
            if (!memoryId) return;
            memoryIds.add(memoryId);
            const panel = createPanel(memoryId);
            const target = node.classList.contains('timeline-item')
                ? node.querySelector('.timeline-card')
                : node;
            const pageNumber = target.querySelector('.page-number');
            if (pageNumber) target.insertBefore(panel, pageNumber);
            else target.appendChild(panel);
        });

        if (!memoryIds.size) return;
        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error(await readError(response));
            const body = await response.json();
            (body.comments || []).forEach((comment) => {
                const comments = commentsByMemory.get(String(comment.memory_id)) || [];
                comments.push(comment);
                commentsByMemory.set(String(comment.memory_id), comments);
            });
            memoryIds.forEach(renderMemory);
        } catch (_) {
            document.querySelectorAll('.love-comments-status').forEach((status) => {
                status.textContent = '评论暂时无法加载，请稍后再试。';
            });
        }
    }

    document.addEventListener('DOMContentLoaded', loadComments);
})();
