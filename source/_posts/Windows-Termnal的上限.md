---
title: "Windows Termnal的上限"
date: 2024-07-13 21:54:44
updated: 2025-02-01 08:53:47
categories:
  - Doc
tags:
  - 教程
---
### OVERVIEW

# WindowsTerminal

简称 wt, 一款由微软开发的 windows 终端，相对于 windows 上的其他我认为它有着更好的操作界面以及更直白的选项卡，体现于目前主流的终端模拟器所没有的用选项卡改配置，以及流畅的 gui 动画，还有高（好吧一点都不高）可定制性.  
在 Win11 上它的表现尤其突出，  
配合窗口圆角以及专注模式可以实现无边框的沉浸式圆角窗口，同时高版本的 powershell 所提供的现代化终端体验丰富了其华丽外衣下的空洞内在，  
使用 Startship 之后更是锦上添花般地给予了我极好的终端体验，  
常言道，*美化是第一生产力*，  
你的效率取决于你有多喜欢这件事，那么有一个漂亮的终端就能极大提升你写程序的效率。

### 配置文件

```json
{
    "$help": "https://aka.ms/terminal-documentation",
    "$schema": "https://aka.ms/terminal-profiles-schema",
    "actions": 
    [
        {
            "command": 
            {
                "action": "copy",
                "singleLine": false
            },
            "keys": "ctrl+c"
        },
        {
            "command": "paste",
            "keys": "ctrl+v"
        },
        {
            "command": "find",
            "keys": "ctrl+shift+f"
        },
        {
            "command": 
            {
                "action": "splitPane",
                "split": "auto",
                "splitMode": "duplicate"
            },
            "keys": "alt+shift+d"
        }
    ],
    "alwaysShowTabs": true,
    "autoHideWindow": false,
    "copyFormatting": "none",
    "copyOnSelect": false,
    "defaultProfile": "{a3a2e83a-884a-5379-baa8-16f193a13b21}",
    "initialPosition": ",",
    "launchMode": "focus",
    "newTabMenu": 
    [
        {
            "type": "remainingProfiles"
        }
    ],
    "profiles": 
    {
        "defaults": 
        {
            "colorScheme": "One Half Dark",
            "font": 
            {
                "face": "JetBrainsMono Nerd Font"
            },
            "padding": "0",
            "scrollbarState": "hidden",
            "useAcrylic": true
        },
        "list": 
        [
            {
                "backgroundImage": null,
                "colorScheme": "Tango Dark",
                "commandline": "%SystemRoot%\\System32\\WindowsPowerShell\\v1.0\\powershell.exe",
                "elevate": false,
                "font": 
                {
                    "face": "JetBrainsMono Nerd Font"
                },
                "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
                "hidden": false,
                "name": "Windows PowerShell",
                "opacity": 100,
                "useAcrylic": true
            },
            {
                "commandline": "%SystemRoot%\\System32\\cmd.exe",
                "guid": "{0caa0dad-35be-5f56-a8ff-afceeeaa6101}",
                "hidden": false,
                "name": "\u547d\u4ee4\u63d0\u793a\u7b26"
            },
            {
                "guid": "{b453ae62-4e3d-5e58-b989-0a998ec441b8}",
                "hidden": false,
                "name": "Azure Cloud Shell",
                "source": "Windows.Terminal.Azure"
            },
            {
                "backgroundImage": "C:\\Users\\Administrator\\Pictures\\wallhaven-6d1zll.png",
                "backgroundImageOpacity": 0.32,
                "colorScheme": "One Half Dark",
                "elevate": false,
                "font": 
                {
                    "face": "JetBrainsMono Nerd Font",
                    "weight": "normal"
                },
                "guid": "{574e775e-4f2a-5b96-ac1e-a2962a402336}",
                "hidden": false,
                "name": "PowerShell",
                "opacity": 28,
                "padding": "10",
                "source": "Windows.Terminal.PowershellCore",
                "useAcrylic": true
            },
            {
                "commandline": "C:\\Program Files\\PowerShell\\7\\pwsh.exe",
                "guid": "{8bade937-f532-4212-becc-869f67b2b732}",
                "hidden": false,
                "name": "Profile 5"
            },
            {
                "guid": "{a5a97cb8-8961-5535-816d-772efe0c6a3f}",
                "hidden": false,
                "name": "Arch",
                "source": "Windows.Terminal.Wsl"
            },
            {
                "backgroundImage": "E:\\3284904010\\preview.gif",
                "backgroundImageOpacity": 0.33,
                "cursorShape": "bar",
                "experimental.retroTerminalEffect": false,
                "font": 
                {
                    "face": "CaskaydiaCove Nerd Font",
                    "size": 13.0
                },
                "guid": "{a3a2e83a-884a-5379-baa8-16f193a13b21}",
                "hidden": false,
                "name": "PowerShell 7 Preview",
                "opacity": 42,
                "padding": "10",
                "source": "Windows.Terminal.PowershellCore"
            }
        ]
    },
    "schemes": 
    [
        {
            "background": "#0C0C0C",
            "black": "#0C0C0C",
            "blue": "#0037DA",
            "brightBlack": "#767676",
            "brightBlue": "#3B78FF",
            "brightCyan": "#61D6D6",
            "brightGreen": "#16C60C",
            "brightPurple": "#B4009E",
            "brightRed": "#E74856",
            "brightWhite": "#F2F2F2",
            "brightYellow": "#F9F1A5",
            "cursorColor": "#FFFFFF",
            "cyan": "#3A96DD",
            "foreground": "#CCCCCC",
            "green": "#13A10E",
            "name": "Campbell",
            "purple": "#881798",
            "red": "#C50F1F",
            "selectionBackground": "#FFFFFF",
            "white": "#CCCCCC",
            "yellow": "#C19C00"
        },
        {
            "background": "#012456",
            "black": "#0C0C0C",
            "blue": "#0037DA",
            "brightBlack": "#767676",
            "brightBlue": "#3B78FF",
            "brightCyan": "#61D6D6",
            "brightGreen": "#16C60C",
            "brightPurple": "#B4009E",
            "brightRed": "#E74856",
            "brightWhite": "#F2F2F2",
            "brightYellow": "#F9F1A5",
            "cursorColor": "#FFFFFF",
            "cyan": "#3A96DD",
            "foreground": "#CCCCCC",
            "green": "#13A10E",
            "name": "Campbell Powershell",
            "purple": "#881798",
            "red": "#C50F1F",
            "selectionBackground": "#FFFFFF",
            "white": "#CCCCCC",
            "yellow": "#C19C00"
        },
        {
            "background": "#282C34",
            "black": "#282C34",
            "blue": "#61AFEF",
            "brightBlack": "#5A6374",
            "brightBlue": "#61AFEF",
            "brightCyan": "#56B6C2",
            "brightGreen": "#98C379",
            "brightPurple": "#C678DD",
            "brightRed": "#E06C75",
            "brightWhite": "#DCDFE4",
            "brightYellow": "#E5C07B",
            "cursorColor": "#FFFFFF",
            "cyan": "#56B6C2",
            "foreground": "#DCDFE4",
            "green": "#98C379",
            "name": "One Half Dark",
            "purple": "#C678DD",
            "red": "#E06C75",
            "selectionBackground": "#FFFFFF",
            "white": "#DCDFE4",
            "yellow": "#E5C07B"
        },
        {
            "background": "#FAFAFA",
            "black": "#383A42",
            "blue": "#0184BC",
            "brightBlack": "#4F525D",
            "brightBlue": "#61AFEF",
            "brightCyan": "#56B5C1",
            "brightGreen": "#98C379",
            "brightPurple": "#C577DD",
            "brightRed": "#DF6C75",
            "brightWhite": "#FFFFFF",
            "brightYellow": "#E4C07A",
            "cursorColor": "#4F525D",
            "cyan": "#0997B3",
            "foreground": "#383A42",
            "green": "#50A14F",
            "name": "One Half Light",
            "purple": "#A626A4",
            "red": "#E45649",
            "selectionBackground": "#FFFFFF",
            "white": "#FAFAFA",
            "yellow": "#C18301"
        },
        {
            "background": "#002B36",
            "black": "#002B36",
            "blue": "#268BD2",
            "brightBlack": "#073642",
            "brightBlue": "#839496",
            "brightCyan": "#93A1A1",
            "brightGreen": "#586E75",
            "brightPurple": "#6C71C4",
            "brightRed": "#CB4B16",
            "brightWhite": "#FDF6E3",
            "brightYellow": "#657B83",
            "cursorColor": "#FFFFFF",
            "cyan": "#2AA198",
            "foreground": "#839496",
            "green": "#859900",
            "name": "Solarized Dark",
            "purple": "#D33682",
            "red": "#DC322F",
            "selectionBackground": "#FFFFFF",
            "white": "#EEE8D5",
            "yellow": "#B58900"
        },
        {
            "background": "#FDF6E3",
            "black": "#002B36",
            "blue": "#268BD2",
            "brightBlack": "#073642",
            "brightBlue": "#839496",
            "brightCyan": "#93A1A1",
            "brightGreen": "#586E75",
            "brightPurple": "#6C71C4",
            "brightRed": "#CB4B16",
            "brightWhite": "#FDF6E3",
            "brightYellow": "#657B83",
            "cursorColor": "#002B36",
            "cyan": "#2AA198",
            "foreground": "#657B83",
            "green": "#859900",
            "name": "Solarized Light",
            "purple": "#D33682",
            "red": "#DC322F",
            "selectionBackground": "#FFFFFF",
            "white": "#EEE8D5",
            "yellow": "#B58900"
        },
        {
            "background": "#000000",
            "black": "#000000",
            "blue": "#3465A4",
            "brightBlack": "#555753",
            "brightBlue": "#729FCF",
            "brightCyan": "#34E2E2",
            "brightGreen": "#8AE234",
            "brightPurple": "#AD7FA8",
            "brightRed": "#EF2929",
            "brightWhite": "#EEEEEC",
            "brightYellow": "#FCE94F",
            "cursorColor": "#FFFFFF",
            "cyan": "#06989A",
            "foreground": "#D3D7CF",
            "green": "#4E9A06",
            "name": "Tango Dark",
            "purple": "#75507B",
            "red": "#CC0000",
            "selectionBackground": "#FFFFFF",
            "white": "#D3D7CF",
            "yellow": "#C4A000"
        },
        {
            "background": "#FFFFFF",
            "black": "#000000",
            "blue": "#3465A4",
            "brightBlack": "#555753",
            "brightBlue": "#729FCF",
            "brightCyan": "#34E2E2",
            "brightGreen": "#8AE234",
            "brightPurple": "#AD7FA8",
            "brightRed": "#EF2929",
            "brightWhite": "#EEEEEC",
            "brightYellow": "#FCE94F",
            "cursorColor": "#000000",
            "cyan": "#06989A",
            "foreground": "#555753",
            "green": "#4E9A06",
            "name": "Tango Light",
            "purple": "#75507B",
            "red": "#CC0000",
            "selectionBackground": "#FFFFFF",
            "white": "#D3D7CF",
            "yellow": "#C4A000"
        },
        {
            "background": "#000000",
            "black": "#000000",
            "blue": "#000080",
            "brightBlack": "#808080",
            "brightBlue": "#0000FF",
            "brightCyan": "#00FFFF",
            "brightGreen": "#00FF00",
            "brightPurple": "#FF00FF",
            "brightRed": "#FF0000",
            "brightWhite": "#FFFFFF",
            "brightYellow": "#FFFF00",
            "cursorColor": "#FFFFFF",
            "cyan": "#008080",
            "foreground": "#C0C0C0",
            "green": "#008000",
            "name": "Vintage",
            "purple": "#800080",
            "red": "#800000",
            "selectionBackground": "#FFFFFF",
            "white": "#C0C0C0",
            "yellow": "#808000"
        }
    ],
    "showTabsInTitlebar": true,
    "themes": [],
    "useAcrylicInTabRow": true
}
```

## Nvchad

一个现代化的 nvim 配置，有优美的 UI 和完备的写码功能  
[官网]('https://nvchad.com/')  
唯一不好的地方就是第一次接触这个配置的哥们可能不太能明白该怎么修改配置，  
其实主要就是在 lua 文件夹下的 *chadrc.lua* (用来改 ui) 文件和主文件夹下的 init.lua 文件  
我将自己的这两个文件贴出供各位参考

#### init.lua

```lua
vim.g.base46_cache = vim.fn.stdpath "data" .. "/nvchad/base46/"
vim.g.mapleader = " "
--require('lua.custom.init')
-- bootstrap lazy and all plugins
local lazypath = vim.fn.stdpath "data" .. "/lazy/lazy.nvim"
if not vim.loop.fs_stat(lazypath) then
  local repo = "https://github.com/folke/lazy.nvim.git"
  vim.fn.system { "git", "clone", "--filter=blob:none", repo, "--branch=stable", lazypath }
end

vim.opt.rtp:prepend(lazypath)
local lazy_config = require "configs.lazy"

-- load plugins
require("lazy").setup({
  {
    "NvChad/NvChad",
    lazy = false,
    branch = "v2.5",
    import = "nvchad.plugins",
    config = function()
      require "options"
    end,
  },

  { import = "plugins" },
}, lazy_config)

-- load theme
dofile(vim.g.base46_cache .. "defaults")
dofile(vim.g.base46_cache .. "statusline")

require "nvchad.autocmds"
vim.schedule(function()
  require "mappings"
end)

if vim.g.neovide then
    -- Put anything you want to happen only in Neovide here
    vim.g.neovide_cursor_vfx_mode = "railgun"
    vim.g.neovide_cursor_vfx_mode = "wireframe"
    vim.g.neovide_cursor_vfx_mode = "sonicboom"
    vim.g.neovide_cursor_vfx_mode = "ripple"

    vim.g.neovide_refresh_rate = 75
    
    vim.g.neovide_scale_factor = 0.8
	-- Helper function for transparency formatting
local alpha = function()
  return string.format("%x", math.floor(255 * vim.g.transparency or 0.8))
end
-- g:neovide_transparency should be 0 if you want to unify transparency of content and title bar.
vim.g.neovide_transparency = 0.9
vim.g.transparency = 0.8
vim.g.neovide_background_color = "#0f1117" .. alpha()

    --vim.o.guifont = "JetBrainsMono Nerd Font Mono Bold:h14" -- text below applies for VimScript
vim.o.guifont = "CaskaydiaCove Nerd Font Mono" -- text below applies for VimScript
vim.g.neovide_fullscreen = true
end

-- local function setupTM()
--   vim.cmd('hi Normal guibg=NONE ctermbg=NONE')
--   vim.cmd('Nvdash')
-- end
-- setupTM()
```

#### chadrc.lua

```lua
-- This file  needs to have same structure as nvconfig.lua 
-- https://github.com/NvChad/NvChad/blob/v2.5/lua/nvconfig.lua

---@type ChadrcConfig
local M = {}

M.ui = {
	theme_toggle = {"solarized_osaka", "dark_horizon" },
  theme = "solarized_osaka",
  transparency = 'true',
  statusline = {
    theme = "minimal",
    separator_style = "default"
  },
  tabufline = {
    enabled = true,
    lazyload = false,
  },
  nvdash = {
    load_on_startup = true,
    header = {
      [[                                                                       ]],
      [[       ████ ██████           █████      ██                     ]],
      [[      ███████████             █████                             ]],
      [[      █████████ ███████████████████ ███   ███████████   ]],
      [[     █████████  ███    █████████████ █████ ██████████████   ]],
      [[    █████████ ██████████ █████████ █████ █████ ████ █████   ]],
      [[  ███████████ ███    ███ █████████ █████ █████ ████ █████  ]],
      [[ ██████  █████████████████████ ████ █████ █████ ████ ██████ ]],
  },
	-- hl_override = {
	-- 	Comment = { italic = true },
	-- 	["@comment"] = { italic = true },
	-- },

  },
}

return M
```
