!function(){var o=-1e3,n=-200,t=document.getElementsByClassName("gallery__frame"),e=Array.from(t),a=[];window.onscroll=function(){var t=document.documentElement.scrollTop,c=n-t;n=t,e.forEach((function(n,t){a.push(t*o+o),a[t]+=-5.5*c;var s=e[t],u="translateZ(".concat(a[t],"px)"),r=a[t]<Math.abs(o)/1.8?1:0;s.setAttribute("style","transform: ".concat(u,"; opacity: ").concat(r))}))},window.scrollTo(0,1);var c=document.querySelector(".soundbutton"),s=document.querySelector(".audio");c.addEventListener("click",(function(o){c.classList.toggle("paused"),s.paused?s.play():s.pause()})),window.onfocus=function(){c.classList.contains("paused")?s.pause():s.play()},window.onblur=function(){s.pause()}}();
//# sourceMappingURL=index.8d7c72fb.js.map
