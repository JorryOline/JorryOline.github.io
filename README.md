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
4. 关掉没用到的主题模块（选项卡 / 题目 / 可见度监听）
5. 修掉 404 的微信收款码请求
6. `url` 从 `http://example.com` 改成真实域名（feed / canonical 终于对了）

## 五、音乐播放模块（2026-11-18 加回）

主题自带一套播放器（不是 APlayer），在 `_config.shokax.yml` 里两处开关：

```yaml
modules:
  player: true          # 打开播放器模块
playerAPI: "https://api.injahow.cn"   # Meting API，负责把歌单链接换成可播放的音频
audio:
  - https://music.163.com/#/playlist?id=2670875868   # 你的「喜欢的音乐」
```

- 表现：页面右下角出现 ▶ 按钮，点一下开始随机播放；页面往下滚后工具栏贴底，会出现 🎵 按钮，点开是完整面板（封面、歌词、上一首/下一首、音量、播放列表）。面板标题会变成「Now Playing...」。
- **平铺写法**：`audio:` 下直接列多个链接（歌单/单曲/专辑/歌手都支持）会合并成一条播放列表；写成 `- title: xxx` + `list:` 才是分组标签，但分组标签依赖 `modules.tabs`，本站已关，别用分组。
- **单曲/专辑/歌手**同样可用：`/song?id=xxx`、`/album?id=xxx`、`/artist?id=xxx`。
- **已知限制**：Meting 走的是匿名接口，**网易云 VIP/版权曲只能试听 30–45 秒**（返回的 mp3 只有 400–700KB）。免费曲目是完整时长。介意的话有两条路：
  1. 换成自己服务器上能直链的 mp3：把文件丢进 `source/music/`，`audio:` 里写完整 URL（如 `https://jorryoline.github.io/music/xxx.mp3`），不再经过 Meting。
  2. 自己部署一个带 cookie 的 Meting-API（Vercel），把 `playerAPI` 换掉。
- 想改歌单就改那个 `id=2670875868`；想少加载点数据就换成小歌单（600+ 首的列表每次首次打开会拉约 180KB JSON，之后走 localStorage 缓存）。

## 六、顺手修的一个坑：界面语言变回中文

还原时 `_config.yml` 写的是 `language: zh-cn`（小写），但主题的 `languages/` 里是 `zh-CN.yml`。Hexo 的 i18n 大小写敏感，匹配不上就掉到兜底语言，整站 UI 会变成**日文**（記事のリスト / ポスト / ホーム）。改成 `language: zh-CN` 后正常。如果你以后又看到日文标签，先查这一行。

## 七、在这台机器上怎么构建（没有系统 Node）

这台机器没装 node/npm，用的是 DSH 自带的：

```powershell
$nodeDir = "D:\dsh\DSH NEXT\resources\runtime\x64\primary-runtime\dependencies\node\bin"
$env:PATH = "$nodeDir;$env:PATH"          # esbuild / hexo-util 的 postinstall 会调 node，必须先加 PATH
$pnpm = "D:\dsh\DSH NEXT\resources\runtime\x64\primary-runtime\dependencies\pnpm\bin\pnpm.mjs"
& "$nodeDir\node.exe" $pnpm install --registry=https://registry.npmmirror.com     # 根目录与 themes/shokax 各跑一次
& "$nodeDir\node.exe" .\node_modules\hexo-cli\bin\hexo clean
& "$nodeDir\node.exe" .\node_modules\hexo-cli\bin\hexo generate
& "$nodeDir\node.exe" .\node_modules\hexo-cli\bin\hexo server -p 4000
```

- `pnpm install` 会因 `hexo-util postinstall: 'npm' is not recognized` 报 exit 1，**可以忽略**（它要 build 的 `highlight_alias.json` 包里自带）。同理 `ERR_PNPM_IGNORED_BUILDS` 也只是警告。
- GitHub 直连不通，**git 走代理**：`git -c http.proxy=http://127.0.0.1:7897 push`；`hexo deploy` 靠 `$env:http_proxy/$env:https_proxy` 生效。
- 凭证在 Windows 凭据管理器里（`git:https://JorryOline@github.com`），push 不需要手动输密码。
- `pnpm-lock.yaml` 是这次 pnpm 装出来的，`package-lock.json` 是原来 npm 的，两个同时留着没影响。



