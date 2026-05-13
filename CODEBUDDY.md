# CODEBUDDY.md

This file provides guidance to CodeBuddy Code when working with code in this repository.

## 项目概述

这是一个情侣纪念日时间轴网站，献给用户和女朋友CC。采用纯 HTML + CSS + JS 技术栈，无框架、无构建系统。

## 快速开始

直接用浏览器打开 `index.html` 即可运行，无需任何构建步骤。

## 内容管理

编辑 `js/main.js` 中的 `timelineData` 数组来管理纪念日内容：

```javascript
{
    id: 1,
    date: '2023年9月1日',
    title: '相遇',
    content: '描述文字...',
    images: ['images/photo.jpg'], // 无图片则留空数组 []
    special: true // 特殊纪念日（红色高亮）
}
```

## 文件结构

```
/love-project
├── index.html       # 主页面
├── css/style.css    # 样式（哆啦A梦蓝白红配色）
├── js/main.js       # 时间轴数据和交互逻辑
└── images/          # 用户照片目录
```

## 技术细节

- **样式**: CSS变量定义在 `:root`，哆啦蓝 `#06B6D4`、红色 `#E53935`
- **交互**: Intersection Observer 实现滚动动画，灯箱用原生 JS 实现
- **响应式**: 768px 断点，移动端时间轴居中单列布局
- **资源**: 每次上传图片都要自动转换成webp格式
