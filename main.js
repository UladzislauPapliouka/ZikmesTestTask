!function(){"use strict";var t,i={957:function(t,i,n){n(682);var o=function(){function t(){var t=this;this.notification=document.createElement("div"),this.icon=document.createElement("i"),this.paragraph=document.createElement("p"),this.notification.addEventListener("animationend",(function(){t.clearNotification()}))}return t.prototype.createErrorNotification=function(){this.notification.classList.add("alert"),this.notification.classList.add("error"),this.icon.classList.add("fa-solid"),this.icon.classList.add("fa-triangle-exclamation")},t.prototype.createSuccessNotification=function(){this.notification.classList.add("alert"),this.notification.classList.add("success"),this.icon.classList.add("fa-regular"),this.icon.classList.add("fa-circle-check")},t.prototype.clearNotification=function(){this.notification.remove(),this.notification.innerHTML="",this.notification.className=""},t.prototype.sendNotification=function(t,i){this.clearNotification(),this.paragraph.innerText=t,"error"===i?this.createErrorNotification():this.createSuccessNotification(),this.notification.append(this.icon,this.paragraph),document.querySelector("body").append(this.notification)},t}(),e=document.querySelector("button"),r=new o;e.addEventListener("click",(function(){c()}));var c=function(){var t=document.querySelector("#input");""===t.value.trim()?r.sendNotification("Field must be filled","error"):fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify({title:"USER",body:t.value,userId:1}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(t){if(!t.ok)throw new Error("Response code isn't OK");return t.json()})).then((function(t){return r.sendNotification("".concat(t.title," — ").concat(t.body),"success")})).catch((function(t){return r.sendNotification(t,"error")}))}}},n={};function o(t){var e=n[t];if(void 0!==e)return e.exports;var r=n[t]={exports:{}};return i[t](r,r.exports,o),r.exports}o.m=i,t=[],o.O=function(i,n,e,r){if(!n){var c=1/0;for(u=0;u<t.length;u++){n=t[u][0],e=t[u][1],r=t[u][2];for(var a=!0,s=0;s<n.length;s++)(!1&r||c>=r)&&Object.keys(o.O).every((function(t){return o.O[t](n[s])}))?n.splice(s--,1):(a=!1,r<c&&(c=r));if(a){t.splice(u--,1);var f=e();void 0!==f&&(i=f)}}return i}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[n,e,r]},o.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},function(){var t={179:0};o.O.j=function(i){return 0===t[i]};var i=function(i,n){var e,r,c=n[0],a=n[1],s=n[2],f=0;if(c.some((function(i){return 0!==t[i]}))){for(e in a)o.o(a,e)&&(o.m[e]=a[e]);if(s)var u=s(o)}for(i&&i(n);f<c.length;f++)r=c[f],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(u)},n=self.webpackChunkmy_webpack_project=self.webpackChunkmy_webpack_project||[];n.forEach(i.bind(null,0)),n.push=i.bind(null,n.push.bind(n))}();var e=o.O(void 0,[682],(function(){return o(957)}));e=o.O(e)}();