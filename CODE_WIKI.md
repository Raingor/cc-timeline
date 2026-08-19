# 📖 Love Project · Code Wiki

> 情侣纪念日纪念网站 · 哆啦A梦主题时间轴 + 复古精装纪念册
> 技术栈:纯 HTML + CSS + JavaScript(无框架、无构建系统)

---

## 目录

- [一、项目概述](#一项目概述)
- [二、整体架构](#二整体架构)
- [三、目录结构](#三目录结构)
- [四、模块详解](#四模块详解)
  - [4.1 时间轴视图(Timeline View)](#41-时间轴视图timeline-view)
  - [4.2 纪念册视图(Book View)](#42-纪念册视图book-view)
  - [4.3 资源目录(images)](#43-资源目录images)
- [五、数据结构](#五数据结构)
- [六、关键函数与对象说明](#六关键函数与对象说明)
  - [6.1 main.js 函数清单](#61-mainjs-函数清单)
  - [6.2 book.js 的 BookEngine 对象](#62-bookjs-的-bookengine-对象)
- [七、依赖关系](#七依赖关系)
- [八、运行方式](#八运行方式)
- [九、关键技术实现要点](#九关键技术实现要点)
- [十、扩展与维护指南](#十扩展与维护指南)

---

## 一、项目概述

这是一个献给用户与女朋友 CC 的情侣纪念日网站,记录两人从相遇至今的每一个重要时刻。项目以「哆啦A梦任意门」为核心意象,采用纯原生 Web 技术实现,无需任何构建步骤,浏览器直接打开即可运行。

项目包含两个独立的展示视图,共享同一套回忆数据(`timelineData`),但渲染形式与视觉风格完全不同:

| 视图 | 入口文件 | 视觉风格 | 交互方式 |
|------|---------|---------|---------|
| **时间轴** | `index.html` | 哆啦A梦蓝白红 + 浮动装饰 | 垂直滚动 + 月份筛选 |
| **纪念册** | `book.html` | 复古精装书 + 鎏金装订 | 翻页动画 + 目录跳转 |

两个视图各自独立运行,数据在各自 JS 文件中各保留一份副本(未做共享),因此新增回忆时需同步修改两处。

---

## 二、整体架构

```
┌──────────────────────────────────────────────────────────┐
│                    Love Project 仓库                      │
├──────────────────────────────────────────────────────────┤
│                                                          │
│   ┌──────────── 时间轴视图 (Timeline View) ───────────┐ │
│   │  index.html ─→ css/style.css ─→ js/main.js        │ │
│   │  (哆啦A梦主题 · 垂直滚动时间轴)                    │ │
│   └───────────────────────────────────────────────────┘ │
│                         ↕ 共享 timelineData 数据结构     │
│   ┌──────────── 纪念册视图 (Book View) ───────────────┐ │
│   │  book.html ─→ css/book.css ─→ js/book.js          │ │
│   │  (复古精装书 · 翻页动画)                          │ │
│   └───────────────────────────────────────────────────┘ │
│                         ↕                               │
│   ┌──────────── 资源层 (images/) ─────────────────────┐ │
│   │  webp/jpeg 照片 · 哆啦A梦形象图                    │ │
│   └───────────────────────────────────────────────────┘ │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### 架构特征

1. **零依赖纯前端**:无 npm、无打包工具、无框架运行时,仅引入 Google Fonts CDN。
2. **视图分离**:两个 HTML 各自完整自包含,可独立部署与访问。
3. **数据即代码**:`timelineData` 直接内嵌于 JS,无后端、无数据库。
4. **原生 API 驱动**:`IntersectionObserver`(滚动动画/懒加载)、`MutationObserver`(动态绑定)、CSS `@keyframes`(翻页动画)等。

---

## 三、目录结构

```
love-project/
├── index.html              # 时间轴主页面(哆啦A梦主题)
├── book.html               # 纪念册翻页页面(复古精装书)
├── AGENTS.md               # AI Agent 指南(项目约定)
├── .gitignore              # 忽略 .DS_Store / 日志 / docs/ / session-*.md
│
├── css/
│   ├── style.css           # 时间轴样式(1039 行,含响应式)
│   └── book.css            # 纪念册样式(1452 行,含翻页动画)
│
├── js/
│   ├── main.js             # 时间轴数据 + 渲染逻辑(约 1279 行)
│   └── book.js             # 纪念册数据 + BookEngine(约 1168 行)
│
└── images/                 # 所有照片与形象资源
    ├── doraemon.webp       # 哆啦A梦形象图(Hero 用)
    ├── doraemon.png
    ├── 3_28_*.webp         # 按日期命名的回忆照片
    ├── 4_*.webp
    ├── 5_*.webp
    ├── 6_*/                # 按事件分组的子目录(如 6_13_14/)
    ├── 7_*/
    ├── 8_8_*.webp          # 生日专题
    └── IMG_*.jpeg/webp     # 未重命名的原始照片
```

> **命名约定**:照片按 `月_日_描述.webp` 命名;事件多图可放入 `月_日/` 子目录。所有新增图片需转为 **webp** 格式(见 [AGENTS.md](file:///Users/raingor_ye/wwwroot/CC/love-project/AGENTS.md))。

---

## 四、模块详解

### 4.1 时间轴视图(Timeline View)

由 [index.html](file:///Users/raingor_ye/wwwroot/CC/love-project/index.html)、[css/style.css](file:///Users/raingor_ye/wwwroot/CC/love-project/css/style.css)、[js/main.js](file:///Users/raingor_ye/wwwroot/CC/love-project/js/main.js) 组成。

#### 页面结构(自顶向下)

| 区块 | HTML 元素 | 职责 |
|------|----------|------|
| 飘浮装饰 | `.floating-decorations` | 全屏 emoji 装饰,`float-deco` 动画 |
| 月份导航 | `.month-nav`(sticky) | 3–8 月筛选按钮,滚动时显示阴影 |
| Hero 顶部 | `.hero` | 哆啦A梦形象 + 标题 + 天数计数器 + 波浪 SVG |
| 时间轴主体 | `.timeline` + `.timeline-item` | 按月分组,左右交替布局,圆点 + 卡片 |
| 回到顶部 | `.back-to-top` | 滚动 400px 后浮现 |
| 页脚 | `.footer` | 角色 emoji + 心跳动画 |
| 灯箱 | `.lightbox` | 全屏图片查看 + 前后导航 |

#### 视觉系统

CSS 变量定义于 `:root`,核心配色:

- 哆啦蓝 `--dora-blue: #06B6D4`(主色)
- 哆啦红 `--dora-red: #E53935`(特殊纪念日高亮)
- 哆啦金 `--dora-gold: #FFD700`(强调色)
- 背景色 `--dora-bg: #F0F9FF`

字体:`ZCOOL KuaiLe`(标题,display)+ `Noto Sans SC`(正文,body),通过 Google Fonts 加载。

#### 响应式断点

- `@media (max-width: 768px)`:时间轴由左右双列改为左侧单列,圆点统一左移;图片网格改 2 列。
- `@media (max-width: 480px)`:进一步缩小标题与按钮。
- `@media (prefers-reduced-motion: reduce)`:关闭动画,适配无障碍。

---

### 4.2 纪念册视图(Book View)

由 [book.html](file:///Users/raingor_ye/wwwroot/CC/love-project/book.html)、[css/book.css](file:///Users/raingor_ye/wwwroot/CC/love-project/css/book.css)、[js/book.js](file:///Users/raingor_ye/wwwroot/CC/love-project/js/book.js) 组成,独立于主站。

#### 页面结构

| 区块 | HTML 元素 | 职责 |
|------|----------|------|
| 背景装饰 | `.book-bg` + `.bookshelf` | 模糊光球 + 书架金色装饰线 |
| 书容器 | `.book-container` | 精装书主体,含书脊与页边鎏金 |
| 书脊 | `.book-spine` | 左侧勃艮第红装订 + 鎏金圆点 |
| 页面区 | `.book-pages` + `.page` | 封面 + 内容页 + 封底(绝对定位叠加) |
| 翻页角 | `.page-corner` | 鼠标悬停显示的可点击翻页角 |
| 控件 | `.book-controls` | 上一页/下一页/页码/目录按钮 |
| 进度条 | `.reading-progress` | 鎏金渐变进度填充 |
| 目录面板 | `.toc-overlay` + `.toc-panel` | 右侧滑入,按月分组 |
| 灯箱 | `.lb-overlay` | 全屏图片查看 |

#### 视觉系统(与时间轴完全不同)

- 装订色 `--binding-dark: #3D1A2E`(深勃艮第)
- 鎏金 `--gold: #C9A96E`
- 羊皮纸页底 `--page-bg: #F5F0E6`
- 暗背景 `--bg-dark: #1E0F0A`

字体:`Playfair Display`(西文标题)+ `Noto Serif SC`(中文正文)+ `Ma Shan Zheng`(手写体封面)。

#### 翻页动画核心

通过 4 个 `@keyframes` 实现 3D 翻书效果(`perspective(1200px) rotateY(...)`):

- `flipInNext` / `flipInPrev`:目标页翻入
- `flipOutNext` / `flipOutPrev`:当前页翻出

动画时长 0.5–0.6s,配合 `transform-origin` 控制翻页轴心。

---

### 4.3 资源目录(images)

照片按回忆条目组织,支持两种命名:

1. **平铺命名**:`月_日_描述.webp`(如 `5_2_jm_1.webp`)
2. **子目录分组**:`月_日/IMG_xxxx.webp`(如 `6_13_14/IMG_4221.webp`)

混合存在 `.webp`、`.jpeg`、`.jpg`、`.JPG` 多种格式;按 [AGENTS.md](file:///Users/raingor_ye/wwwroot/CC/love-project/AGENTS.md) 约定,新增图片应统一转 webp。

---

## 五、数据结构

两个视图共享同一数据结构 `timelineData`,但分别在各自 JS 中各保留一份副本。

### timelineData 条目结构

```javascript
{
    id: 9,                          // 唯一 ID(number 或 string,如 '20b')
    date: '2026年4月11日',          // 中文日期字符串(支持 "2026年4月" 无日的形式)
    title: '表白',                   // 条目标题
    content: '描述文字...',          // 正文(支持 \n 换行,white-space: pre-line)
    images: ['images/4_11_confession.webp'],  // 图片路径数组,无图则 []
    special: true                   // 是否为特殊纪念日(红色高亮 / 特辑页)
}
```

### 字段说明

| 字段 | 类型 | 必填 | 作用 |
|------|------|------|------|
| `id` | `number \| string` | 是 | 唯一标识,允许非数字(如 `'20b'`) |
| `date` | `string` | 是 | 中文日期,需含"月"字以供 `extractMonth` 解析 |
| `title` | `string` | 是 | 卡片/页面标题 |
| `content` | `string` | 是 | 正文,支持 `\n` 多段 |
| `images` | `string[]` | 是 | 图片路径数组,空数组表示无图 |
| `special` | `boolean` | 否 | `true` 时:时间轴红点脉冲 / 纪念册特辑页 |

### 日期解析规则

`extractMonth` 使用正则 `/(\d+)月/` 提取月份数字;`parseDateForSort`(仅 main.js)支持 `年月日` 与 `年月` 两种格式,用于排序。因此 `date` 字段必须包含"月"字。

---

## 六、关键函数与对象说明

### 6.1 main.js 函数清单

[main.js](file:///Users/raingor_ye/wwwroot/CC/love-project/js/main.js) 采用全局函数 + 全局变量组织,无模块封装。

#### 工具函数

| 函数 | 位置 | 说明 |
|------|------|------|
| `extractMonth(dateStr)` | [L845](file:///Users/raingor_ye/wwwroot/CC/love-project/js/main.js#L845) | 从日期字符串提取月份数字 |
| `parseDateForSort(dateStr)` | [L851](file:///Users/raingor_ye/wwwroot/CC/love-project/js/main.js#L851) | 中文日期 → Date 对象,支持年月日/年月 |
| `getMonthEmoji(month)` | [L865](file:///Users/raingor_ye/wwwroot/CC/love-project/js/main.js#L865) | 月份 → emoji(🌸🌿☀️💕🌙🎂) |
| `getMonthName(month)` | [L871](file:///Users/raingor_ye/wwwroot/CC/love-project/js/main.js#L871) | 月份 → 中文名(三月·初遇) |

#### 渲染与交互

| 函数 | 位置 | 说明 |
|------|------|------|
| `renderTimeline()` | [L898](file:///Users/raingor_ye/wwwroot/CC/love-project/js/main.js#L898) | **核心**:按月分组渲染整个时间轴 HTML |
| `collectAllImages()` | [L990](file:///Users/raingor_ye/wwwroot/CC/love-project/js/main.js#L990) | 扁平化所有图片路径,供灯箱导航 |
| `bindImageClicks()` | [L1003](file:///Users/raingor_ye/wwwroot/CC/love-project/js/main.js#L1003) | 绑定图片点击 → 灯箱;用 MutationObserver 处理懒加载后的动态绑定 |
| `openLightbox(src)` | [L1027](file:///Users/raingor_ye/wwwroot/CC/love-project/js/main.js#L1027) | 打开灯箱,定位索引,预加载邻图 |
| `closeLightbox()` | [L1044](file:///Users/raingor_ye/wwwroot/CC/love-project/js/main.js#L1044) | 关闭灯箱,恢复滚动 |
| `navigateLightbox(direction)` | [L1051](file:///Users/raingor_ye/wwwroot/CC/love-project/js/main.js#L1051) | 灯箱前后导航(循环) |
| `preloadAdjacent(idx)` | [L1077](file:///Users/raingor_ye/wwwroot/CC/love-project/js/main.js#L1077) | 用 `<link rel="preload">` 预加载前后图 |
| `initScrollAnimation()` | [L1146](file:///Users/raingor_ye/wwwroot/CC/love-project/js/main.js#L1146) | IntersectionObserver 实现进入视口淡入,带错开延迟 |
| `initLazyLoad()` | [L1176](file:///Users/raingor_ye/wwwroot/CC/love-project/js/main.js#L1176) | 图片懒加载,加载完成后绑定点击 |
| `updateDaysCounter()` | [L1224](file:///Users/raingor_ye/wwwroot/CC/love-project/js/main.js#L1224) | 计算相遇/在一起天数(基准 2026-03-24 / 2026-04-11) |
| `initBackToTop()` | [L1241](file:///Users/raingor_ye/wwwroot/CC/love-project/js/main.js#L1241) | 滚动 400px 显示回到顶部按钮 |
| `initMonthNavShadow()` | [L1259](file:///Users/raingor_ye/wwwroot/CC/love-project/js/main.js#L1259) | 月份导航条滚动阴影 |

#### 全局状态

```javascript
let lightboxState = {
    allImages: [],     // 所有图片扁平数组 {src, title}
    currentIndex: -1,   // 当前灯箱索引
};
```

#### 入口

```javascript
document.addEventListener('DOMContentLoaded', () => {
    updateDaysCounter();
    renderTimeline();
    initBackToTop();
    initMonthNavShadow();
});
```

---

### 6.2 book.js 的 BookEngine 对象

[book.js](file:///Users/raingor_ye/wwwroot/CC/love-project/js/book.js) 使用 IIFE + 单例对象 `BookEngine` 组织,所有方法挂在该对象上。

#### 状态字段

```javascript
var BookEngine = {
    data: [],              // timelineData 引用
    currentPage: 0,        // 当前页索引(0=封面)
    totalPages: 0,         // 总页数 = 1(封面) + data.length + 1(封底)
    isAnimating: false,    // 翻页动画锁
    pages: [],             // 所有 .page DOM 元素数组
    allImages: [],         // 所有图片扁平数组
    lightboxIndex: -1,     // 灯箱当前索引
    el: { /* DOM 缓存 */ } // 所有交互元素的引用
};
```

#### 方法清单

| 方法 | 位置 | 说明 |
|------|------|------|
| `init()` | [L690](file:///Users/raingor_ye/wwwroot/CC/love-project/js/book.js#L690) | 准备数据、缓存 DOM、计算总页数、渲染、绑定事件、显示首页 |
| `renderAllPages()` | [L735](file:///Users/raingor_ye/wwwroot/CC/love-project/js/book.js#L735) | 渲染封面 + 所有数据页 + 封底,缓存 pages DOM |
| `renderTOC()` | [L799](file:///Users/raingor_ye/wwwroot/CC/love-project/js/book.js#L799) | 按月分组渲染目录,绑定点击跳转 |
| `goToPage(target, animate)` | [L864](file:///Users/raingor_ye/wwwroot/CC/love-project/js/book.js#L864) | **核心翻页**:管理动画锁、3D 翻页 keyframes、完成后更新 UI |
| `updateUI()` | [L937](file:///Users/raingor_ye/wwwroot/CC/love-project/js/book.js#L937) | 更新页码、按钮 disabled、进度条、目录高亮 |
| `updateCorners()` | [L966](file:///Users/raingor_ye/wwwroot/CC/love-project/js/book.js#L966) | 首尾页隐藏对应翻页角 |
| `lazyLoadImages(pageEl)` | [L978](file:///Users/raingor_ye/wwwroot/CC/love-project/js/book.js#L978) | 翻入页面后加载该页图片,绑定点击 |
| `openLightbox(src)` | [L1014](file:///Users/raingor_ye/wwwroot/CC/love-project/js/book.js#L1014) | 灯箱打开 |
| `closeLightbox()` | [L1031](file:///Users/raingor_ye/wwwroot/CC/love-project/js/book.js#L1031) | 灯箱关闭 |
| `navigateLightbox(dir)` | [L1038](file:///Users/raingor_ye/wwwroot/CC/love-project/js/book.js#L1038) | 灯箱循环导航 |
| `openTOC()` / `closeTOC()` | [L1055](file:///Users/raingor_ye/wwwroot/CC/love-project/js/book.js#L1055) | 目录侧滑面板开关 |
| `bindEvents()` | [L1081](file:///Users/raingor_ye/wwwroot/CC/love-project/js/book.js#L1081) | 绑定按钮、键盘、触摸滑动、目录、灯箱事件 |

#### 工具函数(IIFE 内私有)

| 函数 | 位置 | 说明 |
|------|------|------|
| `extractMonth(dateStr)` | [L617](file:///Users/raingor_ye/wwwroot/CC/love-project/js/book.js#L617) | 同 main.js |
| `getMonthEmoji(month)` | [L622](file:///Users/raingor_ye/wwwroot/CC/love-project/js/book.js#L622) | 月份 → emoji(此处 7 月为 🎆) |
| `getMonthName(month)` | [L627](file:///Users/raingor_ye/wwwroot/CC/love-project/js/book.js#L627) | 月份 → 中文名(此处 7 月为「七月·绚烂」) |
| `getMonthIndex(month)` | [L632](file:///Users/raingor_ye/wwwroot/CC/love-project/js/book.js#L632) | 月份 → 序号映射 |
| `collectAllImages(data)` | [L638](file:///Users/raingor_ye/wwwroot/CC/love-project/js/book.js#L638) | 扁平化图片数组 |

#### 入口

```javascript
document.addEventListener('DOMContentLoaded', function () {
    BookEngine.init();
});
```

---

## 七、依赖关系

### 外部依赖

| 依赖 | 来源 | 用途 |
|------|------|------|
| Google Fonts(`fonts.googleapis.com`) | CDN | ZCOOL KuaiLe / Noto Sans SC / Playfair Display / Noto Serif SC / Ma Shan Zheng |

**无任何 JS 库依赖**(无 jQuery、无 React、无构建工具)。

### 文件内依赖

#### 时间轴视图

```
index.html
  ├── css/style.css      (样式)
  └── js/main.js         (数据 + 逻辑)
        └── images/*     (照片资源,路径写死在 timelineData)
```

#### 纪念册视图

```
book.html
  ├── css/book.css       (样式)
  └── js/book.js         (数据 + 逻辑)
        └── images/*     (照片资源,路径写死在 timelineData)
```

### 数据耦合点

`timelineData` 在 [main.js](file:///Users/raingor_ye/wwwroot/CC/love-project/js/main.js#L9) 与 [book.js](file:///Users/raingor_ye/wwwroot/CC/love-project/js/book.js#L11) 中**各存一份副本**,内容应保持一致。新增回忆时需同步两处(见 [扩展指南](#十扩展与维护指南))。

### 浏览器 API 依赖

- `IntersectionObserver`(滚动动画、懒加载)
- `MutationObserver`(动态绑定懒加载图片点击)
- `Element.closest` / `dataset`
- CSS `backdrop-filter`、`mix-blend-mode`、`perspective`/`rotateY`
- Touch Events(移动端翻页)

---

## 八、运行方式

### 本地运行

无需任何构建,直接用浏览器打开 HTML 文件即可:

```bash
# 方式 1:直接双击打开
open index.html    # 时间轴视图
open book.html     # 纪念册视图

# 方式 2:启动本地静态服务器(推荐,避免 file:// 协议限制)
python3 -m http.server 8000
# 然后访问 http://localhost:8000/ 或 http://localhost:8000/book.html
```

### 部署

静态托管即可,无特殊要求:

- 将整个 `love-project/` 目录上传至任意静态服务器(Nginx / Apache / Vercel / GitHub Pages)。
- 确保 `images/` 目录与 HTML/CSS/JS 的相对路径不变。

### 访问入口

- 时间轴:`/index.html`(或站点根路径)
- 纪念册:`/book.html`

两个视图之间目前**无内置跳转链接**,需手动切换 URL。

---

## 九、关键技术实现要点

### 1. 滚动触发淡入动画(main.js)

`initScrollAnimation` 使用 `IntersectionObserver`,进入视口后按同级索引错开延迟(每项 50ms,上限 300ms)添加 `.visible` 类,实现逐条浮现的瀑布感。

### 2. 图片懒加载(main.js / book.js)

- main.js:`IntersectionObserver` 监听 `img.lazy`,`rootMargin: 150px` 预加载,加载完成后隐藏 spinner 占位。
- book.js:在 `goToPage` 翻入完成后调用 `lazyLoadImages`,只加载当前页图片,避免一次性加载全部。

### 3. 灯箱与图片导航

两个视图都实现「全图集合」灯箱:

- `collectAllImages` 将所有条目图片扁平化为 `{src, title}` 数组。
- 点击任意图 → `findIndex` 定位 → 可循环前后导航,并预加载邻图(main.js 用 `<link rel="preload">`)。
- 键盘支持:`Esc` 关闭,`←/→` 切换。

### 4. 3D 翻页动画(book.js + book.css)

核心思路:所有 `.page` 绝对定位叠加,仅 `.active` 可见。翻页时:

1. 加锁 `isAnimating = true`,防止动画期间重复触发。
2. 当前页加 `animating-out-*` 类(翻出),目标页加 `animating-in-*` 类(翻入)。
3. `perspective(1200px) rotateY(±25deg)` 产生 3D 翻书效果。
4. `setTimeout(onComplete, 550)` 动画结束后切换 `.active`、解锁、懒加载新页。

### 5. 月份筛选(main.js)

点击月份按钮 → 给不符合的 `.timeline-item` 加 `.filtered-out`(display:none),同时隐藏对应 `.month-group-title`。筛选后重新观察可见项以触发动画。

### 6. 触摸滑动翻页(book.js)

`touchstart`/`touchend` 记录 X 坐标,差值 > 50px 触发翻页,适配移动端。

### 7. 天数计数器(main.js)

以硬编码基准日期 `2026-03-24`(相遇)、`2026-04-11`(在一起)计算至当天的天数,显示在 Hero 区。

---

## 十、扩展与维护指南

### 新增一条回忆

1. 在 [main.js](file:///Users/raingor_ye/wwwroot/CC/love-project/js/main.js#L9) 的 `timelineData` 数组追加条目,遵循 [数据结构](#五数据结构)。
2. **同步**在 [book.js](file:///Users/raingor_ye/wwwroot/CC/love-project/js/book.js#L11) 的 `timelineData` 追加相同条目(注意:book.js 的 content 为纯文本,不带 emoji)。
3. 将照片放入 `images/`,按命名约定(`月_日_描述.webp`)。
4. 照片需转为 **webp** 格式(项目约定)。

### 修改配色

- 时间轴:编辑 [style.css](file:///Users/raingor_ye/wwwroot/CC/love-project/css/style.css#L8) 的 `:root` 变量。
- 纪念册:编辑 [book.css](file:///Users/raingor_ye/wwwroot/CC/love-project/css/book.css#L8) 的 `:root` 变量。

### 修改月份导航

[main.js#L27-L34](file:///Users/raingor_ye/wwwroot/CC/love-project/index.html#L27-L34) 在 [index.html](file:///Users/raingor_ye/wwwroot/CC/love-project/index.html) 的 `.month-nav` 中增删按钮,并在 `getMonthEmoji` / `getMonthName` 中补充映射。

### 注意事项

- **数据一致性**:两份 `timelineData` 需手动同步,改一处勿忘另一处。
- **图片路径**:均为相对路径 `images/...`,移动文件时需同步更新。
- **日期格式**:`date` 必须含"月"字,否则 `extractMonth` 返回 null,该条目会落入未知月份分组。
- **特殊纪念日**:`special: true` 在时间轴表现为红点脉冲 + 红色卡片;在纪念册表现为「特别篇」封面式页面。

---

*本文档基于仓库当前状态自动生成,如代码有改动请同步更新。*
