parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Tx0m":[function(require,module,exports) {
var e=document.querySelector(".js-modal"),t=document.querySelector(".js-modal-ok"),n=document.querySelectorAll(".js-audio"),o=document.querySelectorAll(".js-key"),r=!1;function c(){r||n.forEach(function(e){e.volume=0,e.play().then(function(){e.pause(),e.currentTime=0,e.volume=1,r=!0})})}function a(){c(),e.remove()}function u(e){if(r){var t=document.querySelector('.js-audio[data-key="'.concat(e,'"]')),n=document.querySelector('.js-key[data-key="'.concat(e,'"]'));t&&n&&(t.currentTime=0,t.play(),n.classList.add("key--playing"))}}function d(e){u(e.keyCode)}function i(e){e.preventDefault(),e.stopPropagation(),u(this.dataset.key)}function s(e){"background-color"===e.propertyName&&this.classList.remove("key--playing")}function l(){document.querySelector('.js-key[data-key="'.concat(this.dataset.key,'"]')).classList.remove("key--playing")}t.addEventListener("click",a),window.addEventListener("keydown",d),o.forEach(function(e){return e.addEventListener("mousedown",i,!0)}),o.forEach(function(e){return e.addEventListener("touchstart",i,!0)}),o.forEach(function(e){return e.addEventListener("transitionend",s)}),n.forEach(function(e){return e.addEventListener("ended",l)});
},{}]},{},["Tx0m"], null)
//# sourceMappingURL=scripts.c0700d0a.js.map