import{H as W,L as _,M as S,U as j,a as D,c as f,f as q,g as P,h as $,i as I,k as C,m as w,o as U,q as k,s as O}from"./chunk-UVM4NJPM.js";import{a as F}from"./chunk-2O4F2KMB.js";import{a as v}from"./chunk-XKPLOGBT.js";v();var ae=(t,o,c,u)=>{let s,m="none";switch(o){case 0:s={opacity:[1,0]};break;case 1:s={opacity:[0,1]},m="block";break;case"bounceUpIn":s={begin(i){C(t,"block")},translateY:[{value:-60,duration:200},{value:10,duration:200},{value:-5,duration:200},{value:0,duration:200}],opacity:[0,1]},m="block";break;case"shrinkIn":s={begin(i){C(t,"block")},scale:[{value:1.1,duration:300},{value:1,duration:200}],opacity:1},m="block";break;case"slideRightIn":s={begin(i){C(t,"block")},translateX:["100%","0%"],opacity:[0,1]},m="block";break;case"slideRightOut":s={translateX:["0%","100%"],opacity:[1,0]};break;default:s=o,m=o.display;break}F(Object.assign({targets:t,duration:200,easing:"linear",begin(){u&&u()},complete(){C(t,m),c&&c()}},s)).play()},E=(t,o,c)=>{F({targets:typeof o=="number"&&typeof t!="number"?t.parentNode:document.scrollingElement,duration:500,easing:"easeInOutQuad",scrollTop:o||(typeof t=="number"?t:t?$(t)+document.documentElement.scrollTop-W:0),complete(){c&&c()}}).play()};v();v();var y={set(t,o){localStorage.setItem(t,o)},get(t){return localStorage.getItem(t)},del(t){localStorage.removeItem(t)}};var X=t=>{if(!t)return;let o=f(O,"div",{innerHTML:t,className:"tip"});setTimeout(()=>{o.addClass("hide"),setTimeout(()=>{O.removeChild(o)},300)},3e3)},pe=()=>{w.auto_scroll&&y.set(S,String(U.y))},me=t=>{let o=window.location.hash,c=null;if(_){y.del(S);return}o?c=document.querySelector(decodeURI(o)):c=w.auto_scroll?parseInt(y.get(S)):0,c&&(E(c),j(1)),t&&o&&!_&&(E(c),j(1))},he=(t,o)=>{navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(t).then(()=>{o&&o(!0)},()=>{o&&o(!1)}):(console.error("Too old browser, clipborad API not supported."),o&&o(!1))};v();v();var R=()=>{let t;D.each("div.tab",o=>{if(o.getAttribute("data-ready"))return;let c=o.getAttribute("data-id"),u=o.getAttribute("data-title"),s=document.getElementById(c);s?t=!1:(s=document.createElement("div"),s.className="tabs",s.id=c,s.innerHTML='<div class="show-btn"></div>',s.querySelector(".show-btn").addEventListener("click",()=>{E(s)}),o.parentNode.insertBefore(s,o),t=!0);let m=s.querySelector(".nav ul");m||(m=f(s,"div",{className:"nav",innerHTML:"<ul></ul>"}).querySelector("ul"));let i=f(m,"li",{innerHTML:u});t&&(i.addClass("active"),o.addClass("active")),i.addEventListener("click",l=>{let x=l.currentTarget;s.find(".active").forEach(b=>{b.removeClass("active")}),o.addClass("active"),x.addClass("active")}),s.appendChild(o),o.setAttribute("data-ready",String(!0))})};var A=null,B=/mobile/i.test(window.navigator.userAgent),ke=(t,o)=>{let c={el:{},create(){t.player.options.btns&&t.player.options.btns.forEach(e=>{c.el[e]||(c.el[e]=f(t,"div",{className:e+" btn",onclick(a){t.player.fetch().then(()=>{t.player.options.events[e](a)})}}))})}},u={el:null,btns:{mode:void 0,volume:void 0},step:"next",create:()=>{if(!t.player.options.controls)return;let e=u;t.player.options.controls.forEach(a=>{if(e.btns[a])return;let r={onclick(p){e.events[a]?e.events[a](p):t.player.options.events[a](p)}};switch(a){case"volume":r.className=" "+(i.muted?"off":"on"),r.innerHTML='<div class="bar"></div>',r["on"+h.nameMap.dragStart]=e.events.volume,r.onclick=null;break;case"mode":r.className=" "+t.player.options.mode;break;default:r.className="";break}r.className=a+r.className+" btn",e.btns[a]=f(e.el,"div",r)}),e.btns.volume.bar=e.btns.volume.querySelector(".bar")},events:{mode(e){switch(t.player.options.mode){case"loop":t.player.options.mode="random";break;case"random":t.player.options.mode="order";break;default:t.player.options.mode="loop"}u.btns.mode.className="mode "+t.player.options.mode+" btn",y.set("_PlayerMode",t.player.options.mode)},volume(e){e.preventDefault();let a=e.currentTarget,r=!1,p=d=>{d.preventDefault(),t.player.volume(u.percent(d,a)),r=!0},n=d=>{d.preventDefault(),a.removeEventListener(h.nameMap.dragEnd,n),a.removeEventListener(h.nameMap.dragMove,p),r?(t.player.muted(),t.player.volume(u.percent(d,a))):i.muted?(t.player.muted(),t.player.volume(i.volume)):(t.player.muted("muted"),u.update(0))};a.addEventListener(h.nameMap.dragMove,p),a.addEventListener(h.nameMap.dragEnd,n)},backward(e){u.step="prev",t.player.mode()},forward(e){u.step="next",t.player.mode()}},update(e){u.btns.volume.className="volume "+(!i.muted&&e>0?"on":"off")+" btn",q(u.btns.volume.bar,Math.floor(e*100)+"%")},percent(e,a){let r=((e.clientX||e.changedTouches[0].clientX)-I(a))/P(a);return r=Math.max(r,0),Math.min(r,1)}},s={el:null,bar:null,create(){let e=l.current().el;e&&(s.el&&(s.el.parentNode.removeClass("current").removeEventListener(h.nameMap.dragStart,s.drag),s.el.remove()),s.el=f(e,"div",{className:"progress"}),s.el.setAttribute("data-dtime",h.secondToTime(0)),s.bar=f(s.el,"div",{className:"bar"}),e.addClass("current"),e.addEventListener(h.nameMap.dragStart,s.drag),l.scroll())},update(e){q(s.bar,Math.floor(e*100)+"%"),s.el.setAttribute("data-ptime",h.secondToTime(e*i.duration))},seeking(e){e?s.el.addClass("seeking"):s.el.removeClass("seeking")},percent(e,a){let r=((e.clientX||e.changedTouches[0].clientX)-I(a))/P(a);return r=Math.max(r,0),Math.min(r,1)},drag(e){e.preventDefault();let a=l.current().el,r=n=>{n.preventDefault();let d=s.percent(n,a);s.update(d),H.update(d*i.duration)},p=n=>{n.preventDefault(),a.removeEventListener(h.nameMap.dragEnd,p),a.removeEventListener(h.nameMap.dragMove,r);let d=s.percent(n,a);s.update(d),t.player.seek(d*i.duration),i.disableTimeupdate=!1,s.seeking(!1)};i.disableTimeupdate=!0,s.seeking(!0),a.addEventListener(h.nameMap.dragMove,r),a.addEventListener(h.nameMap.dragEnd,p)}},m={el:null,create(){let e=l.current();m.el.innerHTML='<div class="cover"><div class="disc"><img src="'+e.cover+'" class="blur"  alt="music cover"/></div></div><div class="info"><h4 class="title">'+e.name+"</h4><span>"+e.artist+'</span><div class="lrc"></div></div>',m.el.querySelector(".cover").addEventListener("click",t.player.options.events["play-pause"]),H.create(m.el.querySelector(".lrc"))}},i,l={el:null,data:[],index:-1,errnum:0,add:(e,a)=>{a.forEach(r=>{r.group=e,r.name=r.name||r.title||"Meida name",r.artist=r.artist||r.author||"Anonymous",r.cover=r.cover||r.pic,r.type=r.type||"normal",l.data.push(r)})},clear(){l.data=[],l.el.innerHTML="",l.index!==-1&&(l.index=-1,t.player.fetch())},create(){let e=l.el;l.data.map((a,r)=>{if(a.el)return null;let p="list-"+t.player._id+"-"+a.group,n=document.getElementById(p);return n||(n=f(e,"div",{id:p,className:t.player.group?"tab":"",innerHTML:"<ol></ol>"}),t.player.group&&(n.setAttribute("data-title",t.player.options.rawList[a.group].title),n.setAttribute("data-id",t.player._id))),a.el=f(n.querySelector("ol"),"li",{title:a.name+" - "+a.artist,innerHTML:'<span class="info"><span>'+a.name+"</span><span>"+a.artist+"</span></span>",onclick(d){let T=d.currentTarget;if(l.index===r&&s.el){i.paused?t.player.play():t.player.seek(i.duration*s.percent(d,T));return}t.player.switch(r),t.player.play()}}),a}),R()},current(){return this.data[this.index]},scroll(){let e=this.current(),a=this.el.querySelector("li.active");a&&a.removeClass("active");let r=this.el.querySelector(".tab.active");return r&&r.removeClass("active"),a=this.el.querySelectorAll(".nav li")[e.group],a&&a.addClass("active"),r=this.el.querySelectorAll(".tab")[e.group],r&&r.addClass("active"),E(e.el,e.el.offsetTop),this},title(){if(i.paused)return;let e=this.current();document.title="Now Playing..."+e.name+" - "+e.artist+" | "+k},error(){let e=this.current();e.el.removeClass("current").addClass("error"),e.error=!0,this.errnum++}},x={el:null,create(){this.el||(this.el=f(t,"div",{className:"player-info",innerHTML:(t.player.options.type==="audio"?'<div class="preview"></div>':"")+'<div class="controller"></div><div class="playlist"></div>'},"after"),m.el=this.el.querySelector(".preview"),l.el=this.el.querySelector(".playlist"),u.el=this.el.querySelector(".controller"))},hide(){let e=this.el;e.addClass("hide"),window.setTimeout(()=>{e.removeClass("show hide")},300)}},b={type:"audio",mode:"random",btns:["play-pause","music"],controls:["mode","backward","play-pause","forward","volume"],events:{"play-pause"(e){i.paused?t.player.play():t.player.pause()},music(e){x.el.hasClass("show")?x.hide():(x.el.addClass("show"),l.scroll().title())}}},h={random(e){return Math.floor(Math.random()*e)},parse(e){let a=[];return[["music.163.com.*song.*id=(\\d+)","netease","song"],["music.163.com.*album.*id=(\\d+)","netease","album"],["music.163.com.*artist.*id=(\\d+)","netease","artist"],["music.163.com.*playlist.*id=(\\d+)","netease","playlist"],["music.163.com.*discover/toplist.*id=(\\d+)","netease","playlist"],["y.qq.com.*song/(\\w+)(.html)?","tencent","song"],["y.qq.com.*album/(\\w+)(.html)?","tencent","album"],["y.qq.com.*singer/(\\w+)(.html)?","tencent","artist"],["y.qq.com.*playsquare/(\\w+)(.html)?","tencent","playlist"],["y.qq.com.*playlist/(\\w+)(.html)?","tencent","playlist"],["xiami.com.*song/(\\w+)","xiami","song"],["xiami.com.*album/(\\w+)","xiami","album"],["xiami.com.*artist/(\\w+)","xiami","artist"],["xiami.com.*collect/(\\w+)","xiami","playlist"]].forEach(r=>{let n=new RegExp(r[0]).exec(e);n!==null&&(a=[r[1],r[2],n[1]])}),a},fetch(e){let a=[];return new Promise((r,p)=>{e.forEach(n=>{let d=h.parse(n);if(d[0]){let T=JSON.stringify(d),M=y.get(T);M?(a.push(...JSON.parse(M)),r(a)):fetch(`${w.playerAPI}/meting/?server=`+d[0]+"&type="+d[1]+"&id="+d[2]+"&r="+Math.random()).then(g=>g.json()).then(g=>{y.set(T,JSON.stringify(g)),a.push(...g),r(a)}).catch(g=>{})}else a.push(n),r(a)})})},secondToTime(e){let a=d=>isNaN(d)?"00":d<10?"0"+d:""+d,r=Math.floor(e/3600),p=Math.floor((e-r*3600)/60),n=Math.floor(e-r*3600-p*60);return(r>0?[r,p,n]:[p,n]).map(a).join(":")},nameMap:{dragStart:B?"touchstart":"mousedown",dragMove:B?"touchmove":"mousemove",dragEnd:B?"touchend":"mouseup"}};i=null,t.player={_id:h.random(999999),group:!0,load(e){let a="";e&&e.length>0?this.options.rawList!==e&&(this.options.rawList=e,l.clear(),this.fetch()):(a="none",this.pause());for(let r in c.el)C(c.el[r],a);return this},fetch(){return new Promise((e,a)=>{if(l.data.length>0)e(!1);else if(this.options.rawList){let r=[];this.options.rawList.forEach((p,n)=>{r.push(new Promise((d,T)=>{let M=n,g;p.list?(this.group=!0,g=p.list):(M=0,this.group=!1,g=[p]),h.fetch(g).then(L=>{l.add(M,L),d(0)})}))}),Promise.all(r).then(()=>{e(!0)})}}).then(e=>{e&&(l.create(),u.create(),this.mode())})},mode(){let e=l.data.length;if(!e||l.errnum===e)return;let a=u.step==="next"?1:-1,r=()=>{let n=l.index+a;(n>e||n<0)&&(n=u.step==="next"?0:e-1),l.index=n},p=()=>{let n=h.random(e);l.index!==n?l.index=n:r()};switch(this.options.mode){case"random":p();break;case"order":r();break;case"loop":u.step&&r(),l.index===-1&&p();break}this.init()},switch(e){typeof e=="number"&&e!==l.index&&l.current()&&!l.current().error&&(l.index=e,this.init())},init(){let e=l.current();if(!e||e.error){this.mode();return}let a=!1;i.paused||(a=!0,this.stop()),i.setAttribute("src",e.url),i.setAttribute("title",e.name+" - "+e.artist),this.volume(y.get("_PlayerVolume")||"0.7"),this.muted(y.get("_PlayerMuted")),s.create(),this.options.type==="audio"&&m.create(),a===!0&&this.play()},play(){if(A&&A.player.pause(),l.current().error){this.mode();return}i.play().then(()=>{l.scroll()}).catch(e=>{})},pause(){i.pause(),document.title=k},stop(){i.pause(),i.currentTime=0,document.title=k},seek(e){e=Math.max(e,0),e=Math.min(e,i.duration),i.currentTime=e,s.update(e/i.duration)},muted(e){e==="muted"?(i.muted=e,y.set("_PlayerMuted",e),u.update(0)):(y.del("_PlayerMuted"),i.muted=!1,u.update(i.volume))},volume(e){isNaN(e)||(u.update(e),y.set("_PlayerVolume",e),i.volume=e)},mini(){x.hide()}};let H={el:null,data:null,index:0,create(e){let a=l.index,r=l.current().lrc,p=n=>{if(a!==l.index)return;this.data=this.parse(n);let d="";this.data.forEach((T,M)=>{d+="<p"+(M===0?' class="current"':"")+">"+T[1]+"</p>"}),this.el=f(e,"div",{className:"inner",innerHTML:d},"replace"),this.index=0};r.startsWith("http")?this.fetch(r,p):p(r)},update(e){if(this.data&&(this.index>this.data.length-1||e<this.data[this.index][0]||!this.data[this.index+1]||e>=this.data[this.index+1][0])){for(let a=0;a<this.data.length;a++)if(e>=this.data[a][0]&&(!this.data[a+1]||e<this.data[a+1][0])){this.index=a;let r=-(this.index-1);this.el.style.transform="translateY("+r+"rem)",this.el.getElementsByClassName("current")[0].removeClass("current"),this.el.getElementsByTagName("p")[a].addClass("current")}}},parse(e){if(e){e=e.replace(/([^\]^\n])\[/g,(n,d)=>d+`
[`);let a=e.split(`
`),r=[],p=a.length;for(let n=0;n<p;n++){let d=a[n].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g),T=a[n].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g,"").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g,"").trim();if(d){let M=d.length;for(let g=0;g<M;g++){let L=/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(d[g]),V=L[1]*60,Q=parseInt(L[2]),z=L[4]?parseInt(L[4])/((L[4]+"").length===2?100:1e3):0,K=V+Q+z;r.push([K,T])}}}return r=r.filter(n=>n[1]),r.sort((n,d)=>n[0]-d[0]),r}else return[]},fetch(e,a){fetch(e).then(r=>r.text()).then(r=>{a(r)}).catch(r=>{})}},Y={onerror(){l.error(),t.player.mode()},ondurationchange(){i.duration!==1&&s.el.setAttribute("data-dtime",h.secondToTime(i.duration))},onloadedmetadata(){t.player.seek(0),s.el.setAttribute("data-dtime",h.secondToTime(i.duration))},onplay(){t.parentNode.addClass("playing"),X(this.getAttribute("title")),A=t},onpause(){t.parentNode.removeClass("playing"),A=null},ontimeupdate(){this.disableTimeupdate||(s.update(this.currentTime/this.duration),H.update(this.currentTime))},onended(e){t.player.mode(),t.player.play()}};return(e=>{t.player.created||(t.player.options=Object.assign(b,e),t.player.options.mode=y.get("_PlayerMode")||t.player.options.mode,c.create(),i=f(t,t.player.options.type,Y),x.create(),t.parentNode.addClass(t.player.options.type),t.player.created=!0)})(o),t};v();var G=(t,o,c,u)=>{if(u)c();else{let s=document.createElement("script");s.onload=function(m,i){(i||!s.readyState)&&(console.log("abort!"),s.onload=null,s=void 0,!i&&c&&setTimeout(c,0))},s.src=t,s.integrity=o,s.crossOrigin="anonymous",document.head.appendChild(s)}},He=t=>{let{text:o,parentNode:c,id:u,className:s,type:m,src:i,dataset:l}=t,x=o||t.textContent||t.innerHTML||"";c.removeChild(t);let b=document.createElement("script");u&&(b.id=u),s&&(b.className=s),m&&(b.type=m),i&&(b.src=i,b.async=!1),l.pjax!==void 0&&(b.dataset.pjax=""),x!==""&&b.appendChild(document.createTextNode(x)),c.appendChild(b)};v();var J=(t,o)=>{let c=w[t][o].url;return c.startsWith("https")?c:c.startsWith("http")?(console.warn(`Upgrade vendor ${t}/${o} to HTTPS, Please use HTTPS url instead of HTTP url.`),c.replace("http","https")):`/${c}`},je=(t,o,c)=>{LOCAL[t]&&G(J("js",t),w.js[t].sri,o||function(){window[t]=!0},c||window[t])},Fe=(t,o)=>{if(!window["css"+t]&&LOCAL[t]){let c={rel:"stylesheet",href:J("css",t)},u=w.css[t];u.local||(c.integrity=u.sri,c.crossOrigin="anonymous"),f(document.head,"link",c),window["css"+t]=!0}};export{ae as a,E as b,y as c,X as d,pe as e,me as f,he as g,R as h,ke as i,He as j,je as k,Fe as l};
/*! For license information please see chunk-UX2IFAVH.js.LEGAL.txt */
