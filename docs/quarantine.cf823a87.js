parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"PYUi":[function(require,module,exports) {
function e(e,o){return r(e)||a(e,o)||t(e,o)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(e,n){if(e){if("string"==typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,n):void 0}}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}function a(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],o=!0,a=!1,r=void 0;try{for(var s,i=e[Symbol.iterator]();!(o=(s=i.next()).done)&&(t.push(s.value),!n||t.length!==n);o=!0);}catch(c){a=!0,r=c}finally{try{o||null==i.return||i.return()}finally{if(a)throw r}}return t}}function r(e){if(Array.isArray(e))return e}var s={italy:{country:"Italia",date:new Date("Sun Mar 9 2020 00:00:00"),day:"giorni",hours:"ore",minutes:"minuti",secondes:"secondi",sentence:"dall 'inizio del contenimento"},spain:{country:"españa",date:new Date("Sun Mar 15 2020 00:00:00"),day:"dias",hours:"horas",minutes:"minutos",secondes:"segundos",sentence:"desde el inicio del confinamiento"},france:{country:"France",date:new Date("Mon Mar 17 2020 00:00:00"),day:"jour(s)",hours:"heure(s)",minutes:"minutes",secondes:"secondes",sentence:"depuis le début du confinement"},unitedKingdom:{country:"United Kingdom",date:new Date("Mon Mar 23 2020 00:00:00"),day:"day",hours:"hours",minutes:"minutes",secondes:"seconds"}};function i(){document.getElementById("day").innerHTML="";for(var n=0,t=Object.entries(s);n<t.length;n++){var o=e(t[n],2),a=(o[0],o[1]),r=new Date,i=r.getDate()-a.date.getDate(),c=r.getHours()-a.date.getHours(),d=r.getMinutes()-a.date.getMinutes(),u=r.getSeconds()-a.date.getSeconds(),l='<div class="bg-gray-200 h-25 w-25 rounded overflow-hidden shadow">\n      <div class="font-bold text-2xl">'.concat(a.country,'</div>\n   <div class="flex justify-center">\n      <span class="w-1/3 inline-block   px-3 py-2  text-2xl  font-semibold text-gray-800">').concat(i," ").concat(a.day,'</span>\n      <span class="w-1/3 inline-block   px-3 py-2  text-2xl  font-semibold text-gray-800">').concat(c," ").concat(a.hours,'</span>\n      <span class="w-1/3 inline-block   px-3 py-2  text-2xl  font-semibold text-gray-800">').concat(d," ").concat(a.minutes,'</span>\n      <span class="w-1/3 inline-block   px-3 py-2  text-2xl  font-semibold text-gray-800">').concat(u," ").concat(a.secondes,"</span>\n  </div>\n  </div>");document.getElementById("day").innerHTML+=l}}setInterval(function(){i("day")},1e3),i("day");
},{}]},{},["PYUi"], null)
//# sourceMappingURL=/quarantine.cf823a87.js.map