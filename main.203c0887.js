parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=n(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a,c=!0,u=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return c=e.done,e},e:function(e){u=!0,a=e},f:function(){try{c||null==o.return||o.return()}finally{if(u)throw a}}}}function n(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var r="https://mate-academy.github.io/phone-catalogue-static/api/phones.json",o="https://mate-academy.github.io/phone-catalogue-static/api/phones/";function a(e){return new Promise(function(n,t){fetch(e).then(function(e){return e.json()}).then(function(e){n(e)}),setTimeout(function(){t(new Error("timeOut"))},5e3)})}var c=document.createElement("div"),u=document.createElement("h3");u.innerText="first Received";var i=document.createElement("li");c.append(i);var l=document.createElement("ul");function f(e){var n=e.map(function(e){return fetch("".concat(o).concat(e,".json"))});return Promise.race(n).then(function(e){return e.json()}).then(function(e){return i.innerText=e.id})}l.append(i),c.append(l),c.append(u),c.classList.add("first-received"),document.body.append(c);var s=document.createElement("div");s.classList.add("all-successful");var d=document.createElement("h3");d.innerText="All Successful";var m=document.createElement("ul");function p(e){var n=e.map(function(e){return fetch("".concat(o).concat(e,".json")).then(function(e){return e.json()}).then(function(e){var n=document.createElement("li");n.innerText="".concat(e.id.toUpperCase()," === ").concat(e.name.toUpperCase()),m.append(n)})});return Promise.allSettled(n)}s.append(m),s.append(d);var h=a(r),v=[];h.then(function(n){var t,r=e(n);try{for(r.s();!(t=r.n()).done;){var o=t.value;v.push(o.id)}}catch(a){r.e(a)}finally{r.f()}return v}).then(function(e){f(e),p(e).then(function(){return document.body.append(s)})});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.203c0887.js.map