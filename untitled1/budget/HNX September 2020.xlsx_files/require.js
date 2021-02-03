/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.2.0 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/requirejs/LICENSE
 */
var requirejs,require,define;!function(){if("PerformanceLongTaskTiming"in window){var e=window.__tti={e:[]};e.o=new PerformanceObserver((function(t){e.e=e.e.concat(t.getEntries())})),e.o.observe({entryTypes:["longtask"]})}}(),function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["es6-symbol"]=t():(e["es6-symbol"]=t(),e.Symbol=e.Symbol||e["es6-symbol"])}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t,r){"use strict";var n=r(16)();e.exports=function(e){return e!==n&&null!==e}},function(e,t,r){"use strict";e.exports=function(e){return null!=e}},function(e,t,r){"use strict";e.exports=r(3)()?Symbol:r(4)},function(e,t,r){"use strict";var n={object:!0,symbol:!0};e.exports=function(){var e;if("function"!=typeof Symbol)return!1;e=Symbol("test symbol");try{String(e)}catch(e){return!1}return!!n[typeof Symbol.iterator]&&!!n[typeof Symbol.toPrimitive]&&!!n[typeof Symbol.toStringTag]}},function(e,t,r){"use strict";var n,i,o,s,a=r(5),u=r(22),c=Object.create,f=Object.defineProperties,l=Object.defineProperty,p=Object.prototype,d=c(null);if("function"==typeof Symbol){n=Symbol;try{String(n()),s=!0}catch(e){}}var h,m=(h=c(null),function(e){for(var t,r,n=0;h[e+(n||"")];)++n;return h[e+=n||""]=!0,l(p,t="@@"+e,a.gs(null,(function(e){r||(r=!0,l(this,t,a(e)),r=!1)}))),t});o=function(e){if(this instanceof o)throw new TypeError("Symbol is not a constructor");return i(e)},e.exports=i=function e(t){var r;if(this instanceof e)throw new TypeError("Symbol is not a constructor");return s?n(t):(r=c(o.prototype),t=void 0===t?"":String(t),f(r,{__description__:a("",t),__name__:a("",m(t))}))},f(i,{for:a((function(e){return d[e]?d[e]:d[e]=i(String(e))})),keyFor:a((function(e){var t;for(t in u(e),d)if(d[t]===e)return t})),hasInstance:a("",n&&n.hasInstance||i("hasInstance")),isConcatSpreadable:a("",n&&n.isConcatSpreadable||i("isConcatSpreadable")),iterator:a("",n&&n.iterator||i("iterator")),match:a("",n&&n.match||i("match")),replace:a("",n&&n.replace||i("replace")),search:a("",n&&n.search||i("search")),species:a("",n&&n.species||i("species")),split:a("",n&&n.split||i("split")),toPrimitive:a("",n&&n.toPrimitive||i("toPrimitive")),toStringTag:a("",n&&n.toStringTag||i("toStringTag")),unscopables:a("",n&&n.unscopables||i("unscopables"))}),f(o.prototype,{constructor:a(i),toString:a("",(function(){return this.__name__}))}),f(i.prototype,{toString:a((function(){return"Symbol ("+u(this).__description__+")"})),valueOf:a((function(){return u(this)}))}),l(i.prototype,i.toPrimitive,a("",(function(){var e=u(this);return"symbol"==typeof e?e:e.toString()}))),l(i.prototype,i.toStringTag,a("c","Symbol")),l(o.prototype,i.toStringTag,a("c",i.prototype[i.toStringTag])),l(o.prototype,i.toPrimitive,a("c",i.prototype[i.toPrimitive]))},function(e,t,r){"use strict";var n=r(1),i=r(6),o=r(10),s=r(18),a=r(19);(e.exports=function(e,t){var r,i,u,c,f;return arguments.length<2||"string"!=typeof e?(c=t,t=e,e=null):c=arguments[2],n(e)?(r=a.call(e,"c"),i=a.call(e,"e"),u=a.call(e,"w")):(r=u=!0,i=!1),f={value:t,configurable:r,enumerable:i,writable:u},c?o(s(c),f):f}).gs=function(e,t,r){var u,c,f,l;return"string"!=typeof e?(f=r,r=t,t=e,e=null):f=arguments[3],n(t)?i(t)?n(r)?i(r)||(f=r,r=void 0):r=void 0:(f=t,t=r=void 0):t=void 0,n(e)?(u=a.call(e,"c"),c=a.call(e,"e")):(u=!0,c=!1),l={get:t,set:r,configurable:u,enumerable:c},f?o(s(f),l):l}},function(e,t,r){"use strict";var n=r(7),i=/^\s*class[\s{\/}]/,o=Function.prototype.toString;e.exports=function(e){return!!n(e)&&!i.test(o.call(e))}},function(e,t,r){"use strict";var n=r(8);e.exports=function(e){if("function"!=typeof e)return!1;if(!hasOwnProperty.call(e,"length"))return!1;try{if("number"!=typeof e.length)return!1;if("function"!=typeof e.call)return!1;if("function"!=typeof e.apply)return!1}catch(e){return!1}return!n(e)}},function(e,t,r){"use strict";var n=r(9);e.exports=function(e){if(!n(e))return!1;try{return!!e.constructor&&e.constructor.prototype===e}catch(e){return!1}}},function(e,t,r){"use strict";var n=r(1),i={object:!0,function:!0,undefined:!0};e.exports=function(e){return!!n(e)&&hasOwnProperty.call(i,typeof e)}},function(e,t,r){"use strict";e.exports=r(11)()?Object.assign:r(12)},function(e,t,r){"use strict";e.exports=function(){var e,t=Object.assign;return"function"==typeof t&&(t(e={foo:"raz"},{bar:"dwa"},{trzy:"trzy"}),e.foo+e.bar+e.trzy==="razdwatrzy")}},function(e,t,r){"use strict";var n=r(13),i=r(17),o=Math.max;e.exports=function(e,t){var r,s,a,u=o(arguments.length,2);for(e=Object(i(e)),a=function(n){try{e[n]=t[n]}catch(e){r||(r=e)}},s=1;s<u;++s)t=arguments[s],n(t).forEach(a);if(void 0!==r)throw r;return e}},function(e,t,r){"use strict";e.exports=r(14)()?Object.keys:r(15)},function(e,t,r){"use strict";e.exports=function(){try{return Object.keys("primitive"),!0}catch(e){return!1}}},function(e,t,r){"use strict";var n=r(0),i=Object.keys;e.exports=function(e){return i(n(e)?Object(e):e)}},function(e,t,r){"use strict";e.exports=function(){}},function(e,t,r){"use strict";var n=r(0);e.exports=function(e){if(!n(e))throw new TypeError("Cannot use null or undefined");return e}},function(e,t,r){"use strict";var n=r(0),i=Array.prototype.forEach,o=Object.create,s=function(e,t){var r;for(r in e)t[r]=e[r]};e.exports=function(e){var t=o(null);return i.call(arguments,(function(e){n(e)&&s(Object(e),t)})),t}},function(e,t,r){"use strict";e.exports=r(20)()?String.prototype.contains:r(21)},function(e,t,r){"use strict";var n="razdwatrzy";e.exports=function(){return"function"==typeof n.contains&&!0===n.contains("dwa")&&!1===n.contains("foo")}},function(e,t,r){"use strict";var n=String.prototype.indexOf;e.exports=function(e){return n.call(this,e,arguments[1])>-1}},function(e,t,r){"use strict";var n=r(23);e.exports=function(e){if(!n(e))throw new TypeError(e+" is not a symbol");return e}},function(e,t,r){"use strict";e.exports=function(e){return!!e&&("symbol"==typeof e||!!e.constructor&&"Symbol"===e.constructor.name&&"Symbol"===e[e.constructor.toStringTag])}}])})),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.ES6Promise=t()}(this,(function(){"use strict";function e(e){return"function"==typeof e}function t(){var e=setTimeout;return function(){return e(r,1)}}function r(){for(var e=0;e<v;e+=2){(0,O[e])(O[e+1]),O[e]=void 0,O[e+1]=void 0}v=0}function n(e,t){var r=this,n=new this.constructor(o);void 0===n[M]&&m(n);var i=r._state;if(i){var s=arguments[i-1];x((function(){return h(i,n,s,r._result)}))}else p(r,n,e,t);return n}function i(e){if(e&&"object"==typeof e&&e.constructor===this)return e;var t=new this(o);return u(t,e),t}function o(){}function s(e){try{return e.then}catch(e){return A.error=e,A}}function a(t,r,o){r.constructor===t.constructor&&o===n&&r.constructor.resolve===i?function(e,t){t._state===P?f(e,t._result):t._state===T?l(e,t._result):p(t,void 0,(function(t){return u(e,t)}),(function(t){return l(e,t)}))}(t,r):o===A?(l(t,A.error),A.error=null):void 0===o?f(t,r):e(o)?function(e,t,r){x((function(e){var n=!1,i=function(e,t,r,n){try{e.call(t,r,n)}catch(e){return e}}(r,t,(function(r){n||(n=!0,t!==r?u(e,r):f(e,r))}),(function(t){n||(n=!0,l(e,t))}),e._label);!n&&i&&(n=!0,l(e,i))}),e)}(t,r,o):f(t,r)}function u(e,t){e===t?l(e,new TypeError("You cannot resolve a promise with itself")):function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}(t)?a(e,t,s(t)):f(e,t)}function c(e){e._onerror&&e._onerror(e._result),d(e)}function f(e,t){e._state===k&&(e._result=t,e._state=P,0!==e._subscribers.length&&x(d,e))}function l(e,t){e._state===k&&(e._state=T,e._result=t,x(c,e))}function p(e,t,r,n){var i=e._subscribers,o=i.length;e._onerror=null,i[o]=t,i[o+P]=r,i[o+T]=n,0===o&&e._state&&x(d,e)}function d(e){var t=e._subscribers,r=e._state;if(0!==t.length){for(var n=void 0,i=void 0,o=e._result,s=0;s<t.length;s+=3)n=t[s],i=t[s+r],n?h(r,n,i,o):i(o);e._subscribers.length=0}}function h(t,r,n,i){var o=e(n),s=void 0,a=void 0,c=void 0,p=void 0;if(o){if((s=function(e,t){try{return e(t)}catch(e){return A.error=e,A}}(n,i))===A?(p=!0,a=s.error,s.error=null):c=!0,r===s)return void l(r,new TypeError("A promises callback cannot return that same promise."))}else s=i,c=!0;r._state!==k||(o&&c?u(r,s):p?l(r,a):t===P?f(r,s):t===T&&l(r,s))}function m(e){e[M]=C++,e._state=void 0,e._result=void 0,e._subscribers=[]}var g=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},v=0,b=void 0,y=void 0,x=function(e,t){O[v]=e,O[v+1]=t,2===(v+=2)&&(y?y(r):j())},w="undefined"!=typeof window?window:void 0,S=w||{},_=S.MutationObserver||S.WebKitMutationObserver,E="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),q="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,O=new Array(1e3),j=void 0;j=E?function(){return process.nextTick(r)}:_?function(){var e=0,t=new _(r),n=document.createTextNode("");return t.observe(n,{characterData:!0}),function(){n.data=e=++e%2}}():q?function(){var e=new MessageChannel;return e.port1.onmessage=r,function(){return e.port2.postMessage(0)}}():void 0===w&&"function"==typeof require?function(){try{var e=Function("return this")().require("vertx");return void 0!==(b=e.runOnLoop||e.runOnContext)?function(){b(r)}:t()}catch(e){return t()}}():t();var M=Math.random().toString(36).substring(2),k=void 0,P=1,T=2,A={error:null},C=0,R=function(){function e(e,t){this._instanceConstructor=e,this.promise=new e(o),this.promise[M]||m(this.promise),g(t)?(this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?f(this.promise,this._result):(this.length=this.length||0,this._enumerate(t),0===this._remaining&&f(this.promise,this._result))):l(this.promise,new Error("Array Methods must be provided an Array"))}return e.prototype._enumerate=function(e){for(var t=0;this._state===k&&t<e.length;t++)this._eachEntry(e[t],t)},e.prototype._eachEntry=function(e,t){var r=this._instanceConstructor,u=r.resolve;if(u===i){var c=s(e);if(c===n&&e._state!==k)this._settledAt(e._state,t,e._result);else if("function"!=typeof c)this._remaining--,this._result[t]=e;else if(r===D){var f=new r(o);a(f,e,c),this._willSettleAt(f,t)}else this._willSettleAt(new r((function(t){return t(e)})),t)}else this._willSettleAt(u(e),t)},e.prototype._settledAt=function(e,t,r){var n=this.promise;n._state===k&&(this._remaining--,e===T?l(n,r):this._result[t]=r),0===this._remaining&&f(n,this._result)},e.prototype._willSettleAt=function(e,t){var r=this;p(e,void 0,(function(e){return r._settledAt(P,t,e)}),(function(e){return r._settledAt(T,t,e)}))},e}(),D=function(){function e(t){this[M]=C++,this._result=this._state=void 0,this._subscribers=[],o!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(e,t){try{t((function(t){u(e,t)}),(function(t){l(e,t)}))}catch(t){l(e,t)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype.catch=function(e){return this.then(null,e)},e.prototype.finally=function(e){var t=this.constructor;return this.then((function(r){return t.resolve(e()).then((function(){return r}))}),(function(r){return t.resolve(e()).then((function(){throw r}))}))},e}();return D.prototype.then=n,D.all=function(e){return new R(this,e).promise},D.race=function(e){var t=this;return new t(g(e)?function(r,n){for(var i=e.length,o=0;o<i;o++)t.resolve(e[o]).then(r,n)}:function(e,t){return t(new TypeError("You must pass an array to race."))})},D.resolve=i,D.reject=function(e){var t=new this(o);return l(t,e),t},D._setScheduler=function(e){y=e},D._setAsap=function(e){x=e},D._asap=x,D.polyfill=function(){var e=void 0;if("undefined"!=typeof global)e=global;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var r=null;try{r=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===r&&!t.cast)return}e.Promise=D},D.Promise=D,D.polyfill(),D})),function(global){var req,s,head,baseElement,dataMain,src,interactiveScript,currentlyAddingScript,mainScript,subPath,version="2.2.0",commentRegExp=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,cjsRequireRegExp=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,jsSuffixRegExp=/\.js$/,currDirRegExp=/^\.\//,op=Object.prototype,ostring=op.toString,hasOwn=op.hasOwnProperty,isBrowser=!("undefined"==typeof window||"undefined"==typeof navigator||!window.document),isWebWorker=!isBrowser&&"undefined"!=typeof importScripts,readyRegExp=isBrowser&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,defContextName="_",isOpera="undefined"!=typeof opera&&"[object Opera]"===opera.toString(),contexts={},cfg={},globalDefQueue=[],useInteractive=!1;function commentReplace(e,t,r,n){return n||""}function isFunction(e){return"[object Function]"===ostring.call(e)}function isArray(e){return"[object Array]"===ostring.call(e)}function each(e,t){var r;if(e)for(r=0;r<e.length&&(!e[r]||!t(e[r],r,e));r+=1);}function eachReverse(e,t){var r;if(e)for(r=e.length-1;r>-1&&(!e[r]||!t(e[r],r,e));r-=1);}function hasProp(e,t){return hasOwn.call(e,t)}function getOwn(e,t){return hasProp(e,t)&&e[t]}function eachProp(e,t){var r;for(r in e)if(hasProp(e,r)&&t(e[r],r))break}function mixin(e,t,r,n){return t&&eachProp(t,(function(t,i){!r&&hasProp(e,i)||(!n||"object"!=typeof t||!t||isArray(t)||isFunction(t)||t instanceof RegExp?e[i]=t:(e[i]||(e[i]={}),mixin(e[i],t,r,n)))})),e}function bind(e,t){return function(){return t.apply(e,arguments)}}function scripts(){return document.getElementsByTagName("script")}function defaultOnError(e){throw e}function getGlobal(e){if(!e)return e;var t=global;return each(e.split("."),(function(e){t=t[e]})),t}function makeError(e,t,r,n){var i=new Error(t+"\nhttp://requirejs.org/docs/errors.html#"+e);return i.requireType=e,i.requireModules=n,r&&(i.originalError=r),i}if(void 0===define){if(void 0!==requirejs){if(isFunction(requirejs))return;cfg=requirejs,requirejs=void 0}void 0===require||isFunction(require)||(cfg=require,require=void 0),req=requirejs=function(e,t,r,n){var i,o,s=defContextName;return isArray(e)||"string"==typeof e||(o=e,isArray(t)?(e=t,t=r,r=n):e=[]),o&&o.context&&(s=o.context),(i=getOwn(contexts,s))||(i=contexts[s]=req.s.newContext(s)),o&&i.configure(o),i.require(e,t,r)},req.config=function(e){return req(e)},req.nextTick="undefined"!=typeof setTimeout?function(e){setTimeout(e,4)}:function(e){e()},require||(require=req),req.version=version,req.jsExtRegExp=/^\/|:|\?|\.js$/,req.isBrowser=isBrowser,s=req.s={contexts:contexts,newContext:newContext},req({}),each(["toUrl","undef","defined","specified"],(function(e){req[e]=function(){var t=contexts[defContextName];return t.require[e].apply(t,arguments)}})),isBrowser&&(head=s.head=document.getElementsByTagName("head")[0],baseElement=document.getElementsByTagName("base")[0],baseElement&&(head=s.head=baseElement.parentNode)),req.onError=defaultOnError,req.createNode=function(e,t,r){var n=e.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");return n.type=e.scriptType||"text/javascript",n.charset="utf-8",n.async=!0,n},req.load=function(e,t,r){var n,i=e&&e.config||{};if(isBrowser)return(n=req.createNode(i,t,r)).setAttribute("data-requirecontext",e.contextName),n.setAttribute("data-requiremodule",t),!n.attachEvent||n.attachEvent.toString&&n.attachEvent.toString().indexOf("[native code")<0||isOpera?(n.addEventListener("load",e.onScriptLoad,!1),n.addEventListener("error",e.onScriptError,!1)):(useInteractive=!0,n.attachEvent("onreadystatechange",e.onScriptLoad)),n.src=r,i.onNodeCreated&&i.onNodeCreated(n,i,t,r),currentlyAddingScript=n,baseElement?head.insertBefore(n,baseElement):head.appendChild(n),currentlyAddingScript=null,n;if(isWebWorker)try{setTimeout((function(){}),0),importScripts(r),e.completeLoad(t)}catch(n){e.onError(makeError("importscripts","importScripts failed for "+t+" at "+r,n,[t]))}},isBrowser&&!cfg.skipDataMain&&eachReverse(scripts(),(function(e){if(head||(head=e.parentNode),dataMain=e.getAttribute("data-main"))return mainScript=dataMain,cfg.baseUrl||-1!==mainScript.indexOf("!")||(src=mainScript.split("/"),mainScript=src.pop(),subPath=src.length?src.join("/")+"/":"./",cfg.baseUrl=subPath),mainScript=mainScript.replace(jsSuffixRegExp,""),req.jsExtRegExp.test(mainScript)&&(mainScript=dataMain),cfg.deps=cfg.deps?cfg.deps.concat(mainScript):[mainScript],!0})),define=function(e,t,r){var n,i;"string"!=typeof e&&(r=t,t=e,e=null),isArray(t)||(r=t,t=null),!t&&isFunction(r)&&(t=[],r.length&&(r.toString().replace(commentRegExp,commentReplace).replace(cjsRequireRegExp,(function(e,r){t.push(r)})),t=(1===r.length?["require"]:["require","exports","module"]).concat(t))),useInteractive&&(n=currentlyAddingScript||getInteractiveScript())&&(e||(e=n.getAttribute("data-requiremodule")),i=contexts[n.getAttribute("data-requirecontext")]),i?(i.defQueue.push([e,t,r]),i.defQueueMap[e]=!0):globalDefQueue.push([e,t,r])},define.amd={jQuery:!0},req.exec=function(text){return eval(text)},req(cfg)}function newContext(e){var t,r,n,i,o,s={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},a={},u={},c={},f=[],l={},p={},d={},h=1,m=1;function g(e,t,r){var n,i,o,a,u,c,f,l,p,d,h=t&&t.split("/"),m=s.map,g=m&&m["*"];if(e&&(c=(e=e.split("/")).length-1,s.nodeIdCompat&&jsSuffixRegExp.test(e[c])&&(e[c]=e[c].replace(jsSuffixRegExp,"")),"."===e[0].charAt(0)&&h&&(e=h.slice(0,h.length-1).concat(e)),function(e){var t,r;for(t=0;t<e.length;t++)if("."===(r=e[t]))e.splice(t,1),t-=1;else if(".."===r){if(0===t||1===t&&".."===e[2]||".."===e[t-1])continue;t>0&&(e.splice(t-1,2),t-=2)}}(e),e=e.join("/")),r&&m&&(h||g)){e:for(o=(i=e.split("/")).length;o>0;o-=1){if(u=i.slice(0,o).join("/"),h)for(a=h.length;a>0;a-=1)if((n=getOwn(m,h.slice(0,a).join("/")))&&(n=getOwn(n,u))){f=n,l=o;break e}!p&&g&&getOwn(g,u)&&(p=getOwn(g,u),d=o)}!f&&p&&(f=p,l=d),f&&(i.splice(0,l,f),e=i.join("/"))}return getOwn(s.pkgs,e)||e}function v(e){isBrowser&&each(scripts(),(function(t){if(t.getAttribute("data-requiremodule")===e&&t.getAttribute("data-requirecontext")===n.contextName)return t.parentNode.removeChild(t),!0}))}function b(e){var t=getOwn(s.paths,e);if(t&&isArray(t)&&t.length>1)return t.shift(),n.require.undef(e),n.makeRequire(null,{skipMap:!0})([e]),s.onPathFallback&&s.onPathFallback({moduleId:e,config:s}),!0}function y(e){var t,r=e?e.indexOf("!"):-1;return r>-1&&(t=e.substring(0,r),e=e.substring(r+1,e.length)),[t,e]}function x(e,t,r,i){var o,s,a,u,c=null,f=t?t.name:null,p=e,d=!0,v="";return e||(d=!1,e="_@r"+(h+=1)),c=(u=y(e))[0],e=u[1],c&&(c=g(c,f,i),s=getOwn(l,c)),e&&(c?v=s&&s.normalize?s.normalize(e,(function(e){return g(e,f,i)})):-1===e.indexOf("!")?g(e,f,i):e:(c=(u=y(v=g(e,f,i)))[0],v=u[1],r=!0,o=n.nameToUrl(v))),{prefix:c,name:v,parentMap:t,unnormalized:!!(a=!c||s||r?"":"_unnormalized"+(m+=1)),url:o,originalName:p,isDefine:d,id:(c?c+"!"+v:v)+a}}function w(e){var t=e.id,r=getOwn(a,t);return r||(r=a[t]=new n.Module(e)),r}function S(e,t,r){var n=e.id,i=getOwn(a,n);!hasProp(l,n)||i&&!i.defineEmitComplete?(i=w(e)).error&&"error"===t?r(i.error):i.on(t,r):"defined"===t&&r(l[n])}function _(e,t){var r=e.requireModules,n=!1;t?t(e):(each(r,(function(t){var r=getOwn(a,t);r&&(r.error=e,r.events.error&&(n=!0,r.emit("error",e)))})),n||req.onError(e))}function E(){globalDefQueue.length&&(each(globalDefQueue,(function(e){var t=e[0];"string"==typeof t&&(n.defQueueMap[t]=!0),f.push(e)})),globalDefQueue=[])}function q(e){delete a[e],delete u[e]}function O(){var e,r,i=1e3*s.waitSeconds,c=i&&n.startTime+i<(new Date).getTime(),f=[],p=[],d=!1,h=!0;if(!t){if(t=!0,eachProp(u,(function(e){var t=e.map,n=t.id;if(e.enabled&&(t.isDefine||p.push(e),!e.error))if(!e.inited&&c)b(n)?(r=!0,d=!0):(f.push(n),v(n));else if(!e.inited&&e.fetched&&t.isDefine&&(d=!0,!t.prefix))return h=!1})),c&&f.length)return(e=makeError("timeout","Load timeout for modules: "+f,null,f)).contextName=n.contextName,_(e);h&&each(p,(function(e){!function e(t,r,n){var i=t.map.id;t.error?t.emit("error",t.error):(r[i]=!0,each(t.depMaps,(function(i,o){var s=i.id,u=getOwn(a,s);!u||t.depMatched[o]||n[s]||(getOwn(r,s)?(t.defineDep(o,l[s]),t.check()):e(u,r,n))})),n[i]=!0)}(e,{},{})})),c&&!r||!d||!isBrowser&&!isWebWorker||o||(o=setTimeout((function(){o=0,O()}),50)),t=!1}}function j(e){hasProp(l,e[0])||w(x(e[0],null,!0)).init(e[1],e[2])}function M(e,t,r,n){e.detachEvent&&!isOpera?n&&e.detachEvent(n,t):e.removeEventListener(r,t,!1)}function k(e){var t=e.currentTarget||e.srcElement;return M(t,n.onScriptLoad,"load","onreadystatechange"),M(t,n.onScriptError,"error"),{node:t,id:t&&t.getAttribute("data-requiremodule")}}function P(){var e;for(E();f.length;){if(null===(e=f.shift())[0])return _(makeError("mismatch","Mismatched anonymous define() module: "+e[e.length-1]));j(e)}n.defQueueMap={}}return i={require:function(e){return e.require?e.require:e.require=n.makeRequire(e.map)},exports:function(e){if(e.usingExports=!0,e.map.isDefine)return e.exports?l[e.map.id]=e.exports:e.exports=l[e.map.id]={}},module:function(e){return e.module?e.module:e.module={id:e.map.id,uri:e.map.url,config:function(){return getOwn(s.config,e.map.id)||{}},exports:e.exports||(e.exports={})}}},(r=function(e){this.events=getOwn(c,e.id)||{},this.map=e,this.shim=getOwn(s.shim,e.id),this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0}).prototype={init:function(e,t,r,n){n=n||{},this.inited||(this.factory=t,r?this.on("error",r):this.events.error&&(r=bind(this,(function(e){this.emit("error",e)}))),this.depMaps=e&&e.slice(0),this.errback=r,this.inited=!0,this.ignore=n.ignore,n.enabled||this.enabled?this.enable():this.check())},defineDep:function(e,t){this.depMatched[e]||(this.depMatched[e]=!0,this.depCount-=1,this.depExports[e]=t)},fetch:function(){if(!this.fetched){this.fetched=!0,n.startTime=(new Date).getTime();var e=this.map;if(!this.shim)return e.prefix?this.callPlugin():this.load();n.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],bind(this,(function(){return e.prefix?this.callPlugin():this.load()})))}},load:function(){var e=this.map.url;p[e]||(p[e]=!0,n.load(this.map.id,e))},check:function(){if(this.enabled&&!this.enabling){var e,t,r=this.map.id,i=this.depExports,o=this.exports,s=this.factory;if(this.inited){if(this.error)this.emit("error",this.error);else if(!this.defining){if(this.defining=!0,this.depCount<1&&!this.defined){if(isFunction(s)){if(this.events.error&&this.map.isDefine||req.onError!==defaultOnError)try{o=n.execCb(r,s,i,o)}catch(t){e=t}else o=n.execCb(r,s,i,o);if(this.map.isDefine&&void 0===o&&((t=this.module)?o=t.exports:this.usingExports&&(o=this.exports)),e)return e.requireMap=this.map,e.requireModules=this.map.isDefine?[this.map.id]:null,e.requireType=this.map.isDefine?"define":"require",_(this.error=e)}else o=s;if(this.exports=o,this.map.isDefine&&!this.ignore&&(l[r]=o,req.onResourceLoad)){var a=[];each(this.depMaps,(function(e){a.push(e.normalizedMap||e)})),req.onResourceLoad(n,this.map,a)}q(r),this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else hasProp(n.defQueueMap,r)||this.fetch()}},callPlugin:function(){var e=this.map,t=e.id,r=x(e.prefix);this.depMaps.push(r),S(r,"defined",bind(this,(function(r){var i,o,u,c=getOwn(d,this.map.id),f=this.map.name,l=this.map.parentMap?this.map.parentMap.name:null,p=n.makeRequire(e.parentMap,{enableBuildCallback:!0});return this.map.unnormalized?(r.normalize&&(f=r.normalize(f,(function(e){return g(e,l,!0)}))||""),S(o=x(e.prefix+"!"+f,this.map.parentMap),"defined",bind(this,(function(e){this.map.normalizedMap=o,this.init([],(function(){return e}),null,{enabled:!0,ignore:!0})}))),void((u=getOwn(a,o.id))&&(this.depMaps.push(o),this.events.error&&u.on("error",bind(this,(function(e){this.emit("error",e)}))),u.enable()))):c?(this.map.url=n.nameToUrl(c),void this.load()):((i=bind(this,(function(e){this.init([],(function(){return e}),null,{enabled:!0})}))).error=bind(this,(function(e){this.inited=!0,this.error=e,e.requireModules=[t],eachProp(a,(function(e){0===e.map.id.indexOf(t+"_unnormalized")&&q(e.map.id)})),_(e)})),i.fromText=bind(this,(function(r,o){var a=e.name,u=x(a),c=useInteractive;o&&(r=o),c&&(useInteractive=!1),w(u),hasProp(s.config,t)&&(s.config[a]=s.config[t]);try{req.exec(r)}catch(e){return _(makeError("fromtexteval","fromText eval for "+t+" failed: "+e,e,[t]))}c&&(useInteractive=!0),this.depMaps.push(u),n.completeLoad(a),p([a],i)})),void r.load(e.name,p,i,s))}))),n.enable(r,this),this.pluginMaps[r.id]=r},enable:function(){u[this.map.id]=this,this.enabled=!0,this.enabling=!0,each(this.depMaps,bind(this,(function(e,t){var r,o,s;if("string"==typeof e){if(e=x(e,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[t]=e,s=getOwn(i,e.id))return void(this.depExports[t]=s(this));this.depCount+=1,S(e,"defined",bind(this,(function(e){this.undefed||(this.defineDep(t,e),this.check())}))),this.errback?S(e,"error",bind(this,this.errback)):this.events.error&&S(e,"error",bind(this,(function(e){this.emit("error",e)})))}r=e.id,o=a[r],hasProp(i,r)||!o||o.enabled||n.enable(e,this)}))),eachProp(this.pluginMaps,bind(this,(function(e){var t=getOwn(a,e.id);t&&!t.enabled&&n.enable(e,this)}))),this.enabling=!1,this.check()},on:function(e,t){var r=this.events[e];r||(r=this.events[e]=[]),r.push(t)},emit:function(e,t){each(this.events[e],(function(e){e(t)})),"error"===e&&delete this.events[e]}},(n={config:s,contextName:e,registry:a,defined:l,urlFetched:p,defQueue:f,defQueueMap:{},Module:r,makeModuleMap:x,nextTick:req.nextTick,onError:_,configure:function(e){if(e.baseUrl&&"/"!==e.baseUrl.charAt(e.baseUrl.length-1)&&(e.baseUrl+="/"),"string"==typeof e.urlArgs){var t=e.urlArgs;e.urlArgs=function(e,r){return(-1===r.indexOf("?")?"?":"&")+t}}var r=s.shim,i={paths:!0,bundles:!0,config:!0,map:!0};eachProp(e,(function(e,t){i[t]?(s[t]||(s[t]={}),mixin(s[t],e,!0,!0)):s[t]=e})),e.bundles&&eachProp(e.bundles,(function(e,t){each(e,(function(e){e!==t&&(d[e]=t)}))})),e.shim&&(eachProp(e.shim,(function(e,t){isArray(e)&&(e={deps:e}),!e.exports&&!e.init||e.exportsFn||(e.exportsFn=n.makeShimExports(e)),r[t]=e})),s.shim=r),e.packages&&each(e.packages,(function(e){var t;t=(e="string"==typeof e?{name:e}:e).name,e.location&&(s.paths[t]=e.location),s.pkgs[t]=e.name+"/"+(e.main||"main").replace(currDirRegExp,"").replace(jsSuffixRegExp,"")})),eachProp(a,(function(e,t){e.inited||e.map.unnormalized||(e.map=x(t,null,!0))})),(e.deps||e.callback)&&n.require(e.deps||[],e.callback)},makeShimExports:function(e){return function(){var t;return e.init&&(t=e.init.apply(global,arguments)),t||e.exports&&getGlobal(e.exports)}},makeRequire:function(t,r){function o(s,u,c){var f,p;return r.enableBuildCallback&&u&&isFunction(u)&&(u.__requireJsBuild=!0),"string"==typeof s?isFunction(u)?_(makeError("requireargs","Invalid require call"),c):t&&hasProp(i,s)?i[s](a[t.id]):req.get?req.get(n,s,t,o):(f=x(s,t,!1,!0).id,hasProp(l,f)?l[f]:_(makeError("notloaded",'Module name "'+f+'" has not been loaded yet for context: '+e+(t?"":". Use require([])")))):(P(),n.nextTick((function(){P(),(p=w(x(null,t))).skipMap=r.skipMap,p.init(s,u,c,{enabled:!0}),O()})),o)}return r=r||{},mixin(o,{isBrowser:isBrowser,toUrl:function(e){var r,i=e.lastIndexOf("."),o=e.split("/")[0];return-1!==i&&(!("."===o||".."===o)||i>1)&&(r=e.substring(i,e.length),e=e.substring(0,i)),n.nameToUrl(g(e,t&&t.id,!0),r,!0)},defined:function(e){return hasProp(l,x(e,t,!1,!0).id)},specified:function(e){return e=x(e,t,!1,!0).id,hasProp(l,e)||hasProp(a,e)}}),t||(o.undef=function(e){E();var r=x(e,t,!0),i=getOwn(a,e);i.undefed=!0,v(e),delete l[e],delete p[r.url],delete c[e],eachReverse(f,(function(t,r){t[0]===e&&f.splice(r,1)})),delete n.defQueueMap[e],i&&(i.events.defined&&(c[e]=i.events),q(e))}),o},enable:function(e){getOwn(a,e.id)&&w(e).enable()},completeLoad:function(e){var t,r,i,o=getOwn(s.shim,e)||{},u=o.exports;for(E();f.length;){if(null===(r=f.shift())[0]){if(r[0]=e,t)break;t=!0}else r[0]===e&&(t=!0);j(r)}if(n.defQueueMap={},i=getOwn(a,e),!t&&!hasProp(l,e)&&i&&!i.inited){if(!(!s.enforceDefine||u&&getGlobal(u)))return b(e)?void 0:_(makeError("nodefine","No define call for "+e,null,[e]));j([e,o.deps||[],o.exportsFn])}O()},nameToUrl:function(e,t,r){var i,o,a,u,c,f,l=getOwn(s.pkgs,e);if(l&&(e=l),f=getOwn(d,e))return n.nameToUrl(f,t,r);if(req.jsExtRegExp.test(e))u=e+(t||"");else{for(i=s.paths,a=(o=e.split("/")).length;a>0;a-=1)if(c=getOwn(i,o.slice(0,a).join("/"))){isArray(c)&&(c=c[0]),o.splice(0,a,c);break}u=o.join("/"),u=("/"===(u+=t||(/^data\:|^blob\:|\?/.test(u)||r?"":".js")).charAt(0)||u.match(/^[\w\+\.\-]+:/)?"":s.baseUrl)+u}return s.urlArgs&&!/^blob\:/.test(u)?u+s.urlArgs(e,u):u},load:function(e,t){req.load(n,e,t)},execCb:function(e,t,r,n){return t.apply(n,r)},onScriptLoad:function(e){if("load"===e.type||readyRegExp.test((e.currentTarget||e.srcElement).readyState)){interactiveScript=null;var t=k(e);n.completeLoad(t.id)}},onScriptError:function(e){var t=k(e);if(!b(t.id)){var r=[];return eachProp(a,(function(e,n){0!==n.indexOf("_@r")&&each(e.depMaps,(function(e){if(e.id===t.id)return r.push(n),!0}))})),_(makeError("scripterror",'Script error for "'+t.id+(r.length?'", needed by: '+r.join(", "):'"'),e,[t.id]))}}}).require=n.makeRequire(),n}function getInteractiveScript(){return interactiveScript&&"interactive"===interactiveScript.readyState?interactiveScript:(eachReverse(scripts(),(function(e){if("interactive"===e.readyState)return interactiveScript=e})),interactiveScript)}}(this);