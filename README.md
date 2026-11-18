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

## 七、本机环境（2026-11-18 起：Node / npm / hexo 已装好）

项目现在就放在 **`E:\hexo-blog`**，运行时在 **`E:\nodejs`**（便携版，不写系统盘也不要点下一步）。

| 东西 | 位置 / 版本 |
| --- | --- |
| Node.js | `E:\nodejs\node.exe`，v24.22.3 LTS |
| npm | `E:\nodejs\npm.cmd`，11.19.1（全局目录就是 `E:\nodejs`） |
| hexo 命令 | `E:\nodejs\hexo.cmd`（全局装的 hexo-cli 4.3.2，项目内仍是 hexo 7.3.0） |
| npm 源 | 已设为 `https://registry.npmmirror.com` |

已写入**用户 PATH**（`E:\nodejs` + `%APPDATA%\npm`），所以只要**新开一个** PowerShell / CMD / Windows Terminal 就能直接用：

```powershell
cd E:\hexo-blog
hexo server            # 本地预览 http://localhost:4000
hexo clean             # 清缓存（改配置没生效时先跑这个）
hexo generate          # 只生成到 public/
hexo deploy            # 推到 master 上线
```

装依赖（一般不用重装）：

```powershell
cd E:\hexo-blog
npm install --ignore-scripts            # 必须 --ignore-scripts
cd themes\shokax
npm install --ignore-scripts --legacy-peer-deps
```

- **为什么 `--ignore-scripts`**：这个依赖树里有 puppeteer（会去 Google 下载 Chrome，国内直接卡死）和 deasync（要 MSVC 编译）。跳过脚本不影响本站构建，hexo-util 需要的 `highlight_alias.json` 包内自带。
- **为什么主题要 `--legacy-peer-deps`**：主题自带 eslint 9，而 `eslint-config-standard@17` 只认 eslint 8，npm 会报 ERESOLVE，pnpm 不管但 npm 会罢工。
- **GitHub 直连不通**：push 要带代理 `git -c http.proxy=http://127.0.0.1:7897 push`；`hexo deploy` 先设 `$env:http_proxy` / `$env:https_proxy` 为 `http://127.0.0.1:7897`。凭证在 Windows 凭据管理器（`git:https://JorryOline@github.com`），不用输密码。
- 旧的 `pnpm-lock.yaml` 还留着（当初是用 DSH 自带 pnpm 装的），现在以 `package-lock.json` 为准，两者共存无影响。

## 八、看板娘（Live2D）

- 组件：**oh-my-live2d 0.19.3**，脚本自托管在 `source/js/live2d/oml2d.min.js`（约 1MB，不依赖 CDN 存活）。
- 注入点：`themes/shokax/layout/_partials/layout.pug` 的 body 末尾，由 `if theme.live2d.enable` 包着，另加了三行 CSS（气泡贴边、手机端隐藏）。
- 全部开关在 `_config.shokax.yml` 的 `live2d:` 块：`enable / script / dockedPosition / mobileDisplay / primaryColor / models[] / tips / menus / statusBar`。
- **换模型只改一行**：`live2d.models[0].path`。模型地址规律：

  ```text
  https://cdn.jsdelivr.net/npm/live2d-widget-model-<名字>@1.0.5/assets/<名字>.model.json
  ```

  `<名字>` 可取：shizuku、koharu、haru、haruto、miku、unitychan、tororo、hijiki、wanko、z16、tsumiki、izumi、epsilon2_1（文件名是 `Epsilon2.1.model.json`）、chitose、nico…
- 已验证：`hexo generate` 正常；本地 `hexo server` 打开首页，右下角出现模型，`#oml2d-stage` 300×420，鼠标移上去出现小菜单。
- 之前自己装的 `hexo-helper-live2d` 已卸载——它会在 body 末尾再注入一套老的 `L2Dwidget`，两套同时跑会互相打架。
- 模型预览工具在 `E:\live2d-preview\`：双击 `gallery.html` 可逐个切换看效果（不参与构建，也不在仓库里）。
