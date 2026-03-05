# 运营日历 Operations Calendar

[![Deploy to GitHub Pages](https://github.com/NN54945/operations-calendar/actions/workflows/deploy.yml/badge.svg)](https://github.com/NN54945/operations-calendar/actions/workflows/deploy.yml)

---

## 🌐 在线访问地址

> **https://NN54945.github.io/operations-calendar/**

点击上方链接即可在浏览器中查看运行效果。

---

## 🚀 如何启用 GitHub Pages（首次部署）

如果页面尚未上线，请按照以下步骤操作：

1. 打开仓库页面：https://github.com/NN54945/operations-calendar
2. 点击顶部的 **Settings（设置）** 选项卡
3. 在左侧菜单找到 **Pages**
4. 在 **Build and deployment → Source** 下拉菜单中选择 **GitHub Actions**
5. 保存后，将代码合并（或推送）到 `main` 分支
6. GitHub Actions 会自动构建并部署，完成后访问上方地址即可看到效果

> 💡 也可以在 [Actions 页面](https://github.com/NN54945/operations-calendar/actions/workflows/deploy.yml) 手动触发部署（点击 **Run workflow**）。

---

## 功能

- 月份日历视图，展示运营活动
- 按活动类型、状态筛选
- 关键字搜索
- 响应式布局，支持折叠侧边栏

## 本地开发

```bash
npm install
npm run dev
```

浏览器访问 http://localhost:5173/operations-calendar/ 即可预览。

## 构建

```bash
npm run build
```

## 部署原理

推送到 `main` 分支后，`.github/workflows/deploy.yml` 中的 GitHub Actions 工作流会自动：

1. 安装依赖
2. 运行 `npm run build` 生成静态文件
3. 将 `dist/` 目录发布到 GitHub Pages

