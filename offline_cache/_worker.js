!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=10)}({10:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3);self.addEventListener("install",function(e){self.skipWaiting(),e.waitUntil(caches.open("v1").then(function(e){return e.addAll(r.a.urls)}))}),self.addEventListener("fetch",function(e){e.respondWith(caches.match(e.request).then(function(t){return t?(console.log("Using cache: "+e.request.url),t):fetch(e.request)}))})},3:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(){function e(t){r(this,e),this.urls=[];for(var n=1;n<=t;n+=1)this.urls.push("https://robohash.org/"+n+".png?size=100x100")}return o(e,[{key:"generateImages",value:function(e){this.urls.forEach(function(t){var n=document.createElement("img");n.setAttribute("src",t),e.appendChild(n)})}}]),e}();t.a=new u(100)}});