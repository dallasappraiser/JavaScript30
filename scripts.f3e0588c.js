parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"kn7r":[function(require,module,exports) {
var e=[{first:"Albert",last:"Einstein",year:1879,passed:1955},{first:"Isaac",last:"Newton",year:1643,passed:1727},{first:"Galileo",last:"Galilei",year:1564,passed:1642},{first:"Marie",last:"Curie",year:1867,passed:1934},{first:"Johannes",last:"Kepler",year:1571,passed:1630},{first:"Nicolaus",last:"Copernicus",year:1473,passed:1543},{first:"Max",last:"Planck",year:1858,passed:1947},{first:"Katherine",last:"Blodgett",year:1898,passed:1979},{first:"Ada",last:"Lovelace",year:1815,passed:1852},{first:"Sarah E.",last:"Goode",year:1855,passed:1905},{first:"Lise",last:"Meitner",year:1878,passed:1968},{first:"Hanna",last:"Hammarström",year:1829,passed:1909}],r=["Beck, Glenn","Becker, Carl","Beckett, Samuel","Beddoes, Mick","Beecher, Henry","Beethoven, Ludwig","Begin, Menachem","Belloc, Hilaire","Bellow, Saul","Benchley, Robert","Benenson, Peter","Ben-Gurion, David","Benjamin, Walter","Benn, Tony","Bennington, Chester","Benson, Leana","Bent, Silas","Bentsen, Lloyd","Berger, Ric","Bergman, Ingmar","Berio, Luciano","Berle, Milton","Berlin, Irving","Berne, Eric","Bernhard, Sandra","Berra, Yogi","Berry, Halle","Berry, Wendell","Bethea, Erin","Bevan, Aneurin","Bevel, Ken","Biden, Joseph","Bierce, Ambrose","Biko, Steve","Billings, Josh","Biondo, Frank","Birrell, Augustine","Black, Elk","Blair, Robert","Blair, Tony","Blake, William"],a=e.filter(function(e){return e.year>=1500&&e.year<1600});console.table(a);var n=e.map(function(e){return"".concat(e.first," ").concat(e.last)});console.log(n);var s=e.sort(function(e,r){return e.year-r.year});console.table(s);var t=e.reduce(function(e,r){return e+r.passed-r.year},0);console.log(t);var l=e.sort(function(e,r){return r.passed-r.year-(e.passed-e.year)});console.table(l);var i=r.sort(function(e,r){return e.split(", ")[0]>r.split(", ")[0]?1:-1});console.log(i);var o=["car","car","truck","truck","bike","walk","car","van","bike","walk","car","van","car","truck"],c=o.reduce(function(e,r){return Object.prototype.hasOwnProperty.call(e,r)?e[r]+=1:e[r]=1,e},{});console.log(c);
},{}]},{},["kn7r"], null)
//# sourceMappingURL=scripts.f3e0588c.js.map