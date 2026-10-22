# JorryJo 的博客源码（从线上站点恢复）

线上地址：https://jorryoline.github.io
技术栈：**Hexo 7.3.0 + hexo-theme-shokaX 0.4.17**（原以为是 shoka，实际是它的二次开发版 shokaX）

## 一、这份源码是怎么来的

本地文件丢失后，仓库 `JorryOline/JorryOline.github.io` 里**只有 hexo 生成后的静态产物**（`master` 分支，`main` 分支只有一个 README），没有 `source/` 源码。所以是从线上已发布的 HTML 反推回来的：

| 内容 | 还原方式 |
| --- | --- |
| 6 篇文章正文 | 抓取线上每个文章页的 `<div class="body md">` → HTML 转 Markdown（代码块还原成带语言的 ``` 围栏） |
| 标题 / 日期 / 更新时间 | 页面 `<title>` 与 `<time itemprop="dateCreated datePublished">` |
| 分类 / 标签 | 首页卡片的分类链接 + `feed.json` 的 tags |
| 站点配置 `_config.yml` | 从 `<title>`、meta description、feed、permalink 结构反推 |
| 主题配置 `_config.shokax.yml` | 页面里注入的 `LOCAL` 配置对象、社交链接、页脚、主题默认值比对 |
| 图片 | 从线上 `/assets/` 下载（原始大图仍留在本工作区的 `mirror/assets/`） |

还原后做了逐篇校验：6 篇文章渲染出的正文与线上页面**文本完全一致**，DOM 节点数基本一致（代码块结构已对齐 Prism 行号输出）。

## 二、怎么用

```bash
cd blog
npm install                 # 已装好依赖时跳过
npx hexo clean && npx hexo generate   # 生成到 public/
npx hexo server                      # 本地预览 http://localhost:4000
npx hexo deploy                      # 推到 JorryOline/JorryOline.github.io 的 master 分支
```

注意两点：
1. 这个仓库的 GitHub Pages 来源是 **master 分支**（`main` 分支是空的），`hexo deploy` 已按 master 配好。
2. 主题放在 `themes/shokax/`（vendored），魔改直接改这个目录；升级主题重新下载覆盖即可。

## 三、已知待补的东西

- **文章里的图片还是坏的**：`WeChatRobot折腾记` 3 张、`使用已录入恋爱足迹网页的NFC芯片…` 3 张，原图指向 `http://all.jorryjo.wiki/...`，现在这台服务器返回 502。Markdown 里保留了原链接，需重新上传后改成本地路径。
- **微信收款码缺失**：线上引用 `/assets/wechatpay.png` 但仓库里没有这个文件（一直 404），配置里已注释掉，补图后打开 `_config.shokax.yml` 里 reward 那行即可。
- **评论系统**：线上 waline 的 `serverURL` 是空的（评论根本加载不出来），已关闭。有后端后填 `serverURL` 并把 `enable` 改回 `true`。
- **Algolia 搜索**：线上没找到可用的 appId/apiKey 配置，保持默认关闭。

## 四、为提速做的改动（详见工作区里的 `提速说明.md`）

1. 首页头图 9.5MB PNG → 压缩后的 JPEG（**这是访问慢的主因**）
2. 去掉 Google Fonts 外链，改用系统字体栈
3. 关掉没有后端的 waline 评论（省 186KB JS + 2 个 CSS）
4. 关掉没用到的主题模块（音乐播放器 / 选项卡 / 题目 / 可见度监听）
5. 修掉 404 的微信收款码请求
6. `url` 从 `http://example.com` 改成真实域名（feed / canonical 终于对了）
