# Test Italy - Vue3 + Nuxt + Tailwind CSS 项目

这是一个基于 Vue 3、Nuxt 3 和 Tailwind CSS 构建的现代化 Web 前端项目模板。

## 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **Nuxt 3** - 基于 Vue 3 的全栈框架
- **Tailwind CSS** - 实用优先的 CSS 框架

## 功能特性

- ✅ 服务端渲染 (SSR)
- ✅ 静态站点生成 (SSG)
- ✅ 自动代码分割
- ✅ 响应式设计
- ✅ 现代化 UI 组件

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

启动开发服务器：

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

### 生成静态站点

```bash
npm run generate
```

## 项目结构

```
.
├── assets/          # 静态资源文件
│   └── css/        # 全局样式文件
├── components/      # Vue 组件
├── layouts/         # 布局组件
├── pages/           # 页面文件（自动路由）
├── public/          # 公共静态文件
├── nuxt.config.ts   # Nuxt 配置文件
├── tailwind.config.js # Tailwind CSS 配置
└── package.json     # 项目依赖配置
```

## 开发指南

### 添加新页面

在 `pages/` 目录下创建 `.vue` 文件，Nuxt 会自动生成路由。

### 添加新组件

在 `components/` 目录下创建组件，可以在任何地方直接使用，无需手动导入。

### 自定义布局

在 `layouts/` 目录下创建布局文件，然后在页面中使用 `definePageMeta` 指定布局。

## 许可证

MIT

