---
title: "使用已录入恋爱足迹网页的NFC芯片给女朋友一个小惊喜"
date: 2024-06-30 17:46:13
updated: 2025-02-01 08:53:55
categories:
  - Doc
tags:
  - 教程
---
# 对！我谈恋爱了！

这个事已经过了近两个月了.  
为了充分运用个人特长给 lyx 一个意想不到的惊喜，也是受到小区门禁系统的启发.  
我想到了在 NFC 卡内录入一个有我们两个的恋爱足迹的小网页，藏在我事先给她织好的围巾里面，当她把手机靠近就能直接打开这个网页.  
现场实录.mp4 👇

## 关于 NFC

需要 NFC 芯片，pdd 上有很多相关商品，挑便宜的买就行，价格基本是 1-2 块一张，买的越多越便宜，我只买了一个，假设你觉得自己没把握可以多买几个.

### 写入软件

安卓可以用 **NFC TOOLS PRO**  
我是苹果所以一开始找了很久，推荐使用 **NFC Reader And Write**  
找到写入软件下载安装后还得确保你的手机**可以使用 NFC**  
不然没法写入，写入的过程大概就是扫描后直接添加 url 记录，很简单。

## 关于恋爱足迹页

这个叫足迹我觉得不太稳妥，叫恋爱计时器 & 留言系统会比较好。  
[足迹页面](http://jorryjo.wiki/Love-Story/index.html)  
使用传统 html 三件套 + 一点点的 php  
其实也没多复杂主要由两大块组成

### 计时系统

这个跟我之前做的那个微信机器人的倒计时一样，换个语法

```javascript
<script>
        function timer() {
            var start = new Date(2024, 05, 03, 19, 14, 00); 
            var t = new Date() - start;
            var h = ~~(t / 1000 / 60 / 60 % 24);
            if (h < 10) {
                h = "0" + h;
            }
            var m = ~~(t / 1000 / 60 % 60);
            if (m < 10) {
                m = "0" + m;
            }

            var s = ~~(t / 1000 % 60);
            if (s < 10) {
                s = "0" + s;
            }
            document.getElementById('d').innerHTML = ~~(t / 1000 / 60 / 60 / 24);
            document.getElementById('h').innerHTML = h;
            document.getElementById('m').innerHTML = m;
            document.getElementById('s').innerHTML = s;
        }
        timer();
        setInterval(timer, 1000);
    </script>
```

### 评论系统

评论系统用的是 [Valine](%22https://valine.js.org/%22)  
一个无后端的免费开源评论系统，考虑到本站用的是 gisgus，所以我一开始想的是也用 gisgus 但是对于一个面向大众的网页，用 github 账号登陆还是太不友好了，所以我换成了 Valine  
官方有很详细的文档

## 关于围巾

![一开始在宿舍里面织,10点织到1点才织了几厘米](http://all.jorryjo.wiki/first.jpg)  
![慢慢就上道了](http://all.jorryjo.wiki/then.jpg)  
![成品](http://all.jorryjo.wiki/final.jpg)  
你们可能会觉得我大夏天送她围巾很有病，其实一开始我也是这样觉得的，但是她不是只能有一条，织围巾也不是什么很难的事，重要的是耐心，每天回宿舍的时候就织一织  
广大富康楼 2 楼好哥们都是看着我一点一点织出来的，你们应该也知道没什么难的，  
织围巾就是一个重复的过程，把一个步骤重复一百多遍二百遍而已，只要你觉得我想这么做那么织围巾这个过程的本身，其实比下这个决定来得简单的多。  
最后你们也可以拿手机去蹭一蹭她围巾上的小熊图案，有兴趣还可以给我们留个言，整条围巾本身只是我力所能及地给她的一个小礼物，而留言区里真挚的祝福才更大的礼物，谢谢你们！  
[点这里留言](https://jorryjo.wiki/Love-Story/index.html "刘雨萱 喜欢你")
