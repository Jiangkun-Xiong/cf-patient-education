# 囊性纤维化患者教育网站

**莱斯特大学 · Year D 英国学习阶段 · Respiratory Module 课程作业**

[项目介绍页](https://jiangkun-xiong.github.io/cf-patient-education/) · [访问 Wix 原站](https://1976076128.wixsite.com/cystic015/what-is-cf) · [原站首页](https://1976076128.wixsite.com/cystic015) · [English README](README.md) · [个人作品集](https://jiangkun-xiong.github.io/#projects)

这是我在重庆医科大学—莱斯特大学联合培养项目的 **Year D 英国学习阶段（2025–2026 学年）**，为莱斯特大学 **Respiratory Module（呼吸模块）** 制作的囊性纤维化患者信息网站。

网站最初使用 **Wix** 制作和发布。本仓库用于介绍这项课程作品，并为后续逐步用代码重建网站建立基础。

## 课程与作业背景

| 项目 | 说明 |
| --- | --- |
| 作者 | 熊江坤 Jiangkun Xiong |
| 所在学校 | University of Leicester，英国莱斯特大学 |
| 培养项目 | CQMU–University of Leicester 联合培养项目；BSc (Hons) Clinical Sciences |
| 学习阶段 | Year D，2025–2026 学年在英国学习期间 |
| 所属课程 | Respiratory Module，沿用原网站页脚的课程标注 |
| 作业内容 | 围绕囊性纤维化制作患者信息／健康教育网站 |
| 初始制作平台 | Wix |
| 目前仓库状态 | 项目说明、原站链接、可运行的项目介绍页及后续开发框架 |

“患者信息网站作业”是对作业形式的描述。正式课程编号和作业原始标题，后续可依据课程 assessment brief 补充。

## 这个作品展示什么

这项作业将呼吸系统疾病的课程学习转化为面向患者及家属的信息网站，主要关注：

- 如何将医学信息整理为容易理解的内容；
- 如何根据读者需求组织疾病介绍、症状、管理和生活支持等页面；
- 如何结合文字、教育视频及参考来源呈现信息；
- 如何建立清晰的导航，帮助读者找到需要的内容。

原站共有八个主要页面：首页、什么是 CF、症状、诱因与感染预防、疾病管理、何时寻求帮助、与疾病共处、参考文献。具体原站链接见 [页面目录](content/README.md)。

## 从 Wix 逐步转向 GitHub Pages

我的计划是保留 Wix 原版作为最初的课程成果，随着编程水平提升，逐步学习使用 **HTML、CSS 和 JavaScript** 重建网站，把源码和修改记录保存在 GitHub，并通过 **GitHub Pages** 发布。

| 阶段 | 具体内容 | 状态 |
| --- | --- | --- |
| 项目展示 | 写清课程背景、提供 Wix 原站链接 | 已准备 |
| 基础框架 | 项目介绍页、共享样式、中英文切换、内容目录 | 已准备 |
| 第一页重建 | 优先用代码实现 “What is CF?” 页面 | 计划中 |
| 逐页扩展 | 迁入其他页面，完善手机端导航与内容呈现 | 计划中 |
| 持续改进 | 检查可访问性、引用和链接；按需要引入构建工具 | 长期目标 |

目前 `docs/index.html` 是可运行的**项目介绍页**，各主题入口跳转至 Wix 原页面。后续的新页面路径已在 [site-map.json](content/site-map.json) 中规划，迁移状态均有单独记录。

对于你所说的“GitHub 上的编译网站”，这里更具体的目标是“**用代码开发、通过 GitHub Pages 发布的网站**”。初期静态 HTML 不需要编译；未来若使用静态网站生成器，再加入相应构建流程。

## 从哪里开始修改

| 想修改的内容 | 对应文件 |
| --- | --- |
| 仓库首页英文介绍 | [README.md](README.md) |
| 仓库中文介绍 | 本文件 |
| 项目介绍网页 | [docs/index.html](docs/index.html) |
| 网页颜色、字体和排版 | [docs/assets/css/style.css](docs/assets/css/style.css) |
| 中英文切换 | [docs/assets/js/main.js](docs/assets/js/main.js) |
| 页面名称、原站链接及未来路径 | [content/site-map.json](content/site-map.json) |
| 开发顺序 | [planning/roadmap.md](planning/roadmap.md) |
| 本地预览与 GitHub Pages 发布 | [planning/migration-guide.md](planning/migration-guide.md) |
| 原版网站截图 | [assets/screenshots/](assets/screenshots/README.md) |

直接用浏览器打开 `docs/index.html` 即可预览。当前框架无需安装 npm 依赖。GitHub Pages 已启用，发布目录为 `main` 分支下的 `/docs`；[项目介绍页](https://jiangkun-xiong.github.io/cf-patient-education/) 可直接访问。

这是一项学生教育课程作品。原站中引用的图片、视频和资料保留各自来源标注。
