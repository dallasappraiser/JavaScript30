parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"qSUp":[function(require,module,exports) {
var e=document.querySelector(".js-clear-all"),t=document.querySelector(".js-check-all"),c=document.querySelector(".js-uncheck-all"),n=document.querySelector(".js-items"),i=document.querySelector(".js-add-items"),o=JSON.parse(localStorage.getItem("items"))||[];function a(){n.innerHTML=o.map(function(e,t){return'<li class="items__item">\n      <input class="item__input js-checkbox" type="checkbox" data-index="'.concat(t,'" id="item').concat(t,'" ').concat(e.done?"checked":"",'>\n      <label class="item__label" for="item').concat(t,'">').concat(e.text,"</label>\n    </li>")}).join("")}function s(){o.length=0,localStorage.removeItem("items"),a(o,n)}function l(){o.forEach(function(e){e.done=!0}),localStorage.setItem("items",JSON.stringify(o)),a(o,n)}function r(){o.forEach(function(e){e.done=!1}),localStorage.setItem("items",JSON.stringify(o)),a(o,n)}function m(e){e.preventDefault();var t={text:this.querySelector(".js-item-text").value,done:!1};o.push(t),a(o,n),localStorage.setItem("items",JSON.stringify(o)),this.reset()}function d(e){if(e.target.matches(".js-checkbox")){var t=e.target.dataset.index;o[t].done=!o[t].done,localStorage.setItem("items",JSON.stringify(o)),a(o,n)}}e.addEventListener("click",s),t.addEventListener("click",l),c.addEventListener("click",r),i.addEventListener("submit",m),n.addEventListener("click",d),a(o,n);
},{}]},{},["qSUp"], null)
//# sourceMappingURL=scripts.ffb220ff.js.map