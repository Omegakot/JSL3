(()=>{"use strict";var e={755:(e,r,n)=>{n.d(r,{Z:()=>i});var t=n(645),o=n.n(t)()((function(e){return e[1]}));o.push([e.id,".FQ5a5WzUdodwGOfrTVmv7,\r\n._1Xf04eTRzzr0H8-GKHLEH9 {\r\n    cursor: pointer;\r\n    border-radius: 5px;\r\n    border: 0;\r\n    padding: 7px;\r\n    background-color: rgb(213, 223, 235);\r\n}\r\n\r\n._1Xf04eTRzzr0H8-GKHLEH9:hover,\r\n.FQ5a5WzUdodwGOfrTVmv7:hover {\r\n    background-color: rgb(176, 154, 197);\r\n    transition: 0.5s;\r\n}\r\n\r\n#_3jKZhYT8hZtNUMwWm-prI7 {\r\n    margin: 10px;\r\n    width: 400px;\r\n    height: 30px;\r\n    border-radius: 4px;\r\n    border: 1px solid lightgray;\r\n    font-size: 15px;\r\n}\r\n\r\n#_30OZVUsZDWze-Ti8bR10hf {\r\n    margin: 10px;\r\n    width: 400px;\r\n    height: 30px;\r\n    border-radius: 4px;\r\n    border: 1px solid lightgray;\r\n    font-size: 15px;\r\n}\r\n\r\n::placeholder {\r\n    color: blue;\r\n    opacity: 0.5;\r\n    padding: 20px;\r\n    font-size: 17px;\r\n}\r\n\r\n._3pz-At98gQ9Y5Dkw-SIuF7 {\r\n    width: 600px;\r\n    height: 400px;\r\n    border: 1px solid lightblue;\r\n    margin: 0 auto;\r\n    border-radius: 20px;\r\n}\r\n\r\n.hIs3A9QwEPKNyH7d_UlRA {\r\n    width: 100px;\r\n    height: 100px;\r\n    border: 1px solid black;\r\n}",""]),o.locals={btn1:"FQ5a5WzUdodwGOfrTVmv7",btn2:"_1Xf04eTRzzr0H8-GKHLEH9",name1:"_3jKZhYT8hZtNUMwWm-prI7",name2:"_30OZVUsZDWze-Ti8bR10hf",main:"_3pz-At98gQ9Y5Dkw-SIuF7",sdd:"hIs3A9QwEPKNyH7d_UlRA"};const i=o},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n=e(r);return r[2]?"@media ".concat(r[2]," {").concat(n,"}"):n})).join("")},r.i=function(e,n,t){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);t&&o[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),r.push(d))}},r}},379:(e,r,n)=>{var t,o=function(){var e={};return function(r){if(void 0===e[r]){var n=document.querySelector(r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[r]=n}return e[r]}}(),i=[];function a(e){for(var r=-1,n=0;n<i.length;n++)if(i[n].identifier===e){r=n;break}return r}function l(e,r){for(var n={},t=[],o=0;o<e.length;o++){var l=e[o],d=r.base?l[0]+r.base:l[0],c=n[d]||0,s="".concat(d," ").concat(c);n[d]=c+1;var u=a(s),p={css:l[1],media:l[2],sourceMap:l[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:s,updater:m(p,r),references:1}),t.push(s)}return t}function d(e){var r=document.createElement("style"),t=e.attributes||{};if(void 0===t.nonce){var i=n.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(e){r.setAttribute(e,t[e])})),"function"==typeof e.insert)e.insert(r);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var c,s=(c=[],function(e,r){return c[e]=r,c.filter(Boolean).join("\n")});function u(e,r,n,t){var o=n?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet)e.styleSheet.cssText=s(r,o);else{var i=document.createTextNode(o),a=e.childNodes;a[r]&&e.removeChild(a[r]),a.length?e.insertBefore(i,a[r]):e.appendChild(i)}}function p(e,r,n){var t=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var f=null,h=0;function m(e,r){var n,t,o;if(r.singleton){var i=h++;n=f||(f=d(r)),t=u.bind(null,n,i,!1),o=u.bind(null,n,i,!0)}else n=d(r),t=p.bind(null,n,r),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else o()}}e.exports=function(e,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var n=l(e=e||[],r);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<n.length;t++){var o=a(n[t]);i[o].references--}for(var d=l(e,r),c=0;c<n.length;c++){var s=a(n[c]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=d}}}}},r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={id:t,exports:{}};return e[t](o,o.exports,n),o.exports}n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{let e=document.querySelector("#name1"),r=document.querySelector("#name2");document.querySelector("#name1"),document.querySelector(".btn1").addEventListener("click",(()=>{let r=e.value;console.log(r);let n=r.match(/\d/g);console.log(n),""==r&&(e.style.border="2px solid red"),null!==n?(e.style.border="2px solid red",e.placeholder="введен некорректный формат"):""!==r&&(e.value="Отлично!",e.style.border="2px solid green")}));var t=n(379),o=n.n(t),i=n(755);o()(i.Z,{insert:"head",singleton:!1}),i.Z.locals,document.querySelector(".btn2").addEventListener("click",(()=>{let e=r.value.match(/\+7\((\d[0-9]).\)(\d[0-9]).\-(\d[0-9]).\d/g);console.log(e),""==r.value&&(r.style.border="1px solid red"),null==e?(r.style.border="2px solid red",r.placeholder="введен некорректный формат"):""!==r.value&&(r.style.border="2px solid green",console.log(`введен верный формат ${e}`))}));let a="my-t4ts@main.ru".match(/my+(\.|\-|\S)+\@+[a-z]+\.+ru/g);console.log(a)})()})();