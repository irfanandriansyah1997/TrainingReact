!function(i){function webpackJsonpCallback(e){for(var t,o,r=e[0],n=e[1],u=e[2],a=0,p=[];a<r.length;a++)o=r[a],f[o]&&p.push(f[o][0]),f[o]=0;for(t in n)Object.prototype.hasOwnProperty.call(n,t)&&(i[t]=n[t]);for(_&&_(e);p.length;)p.shift()();return c.push.apply(c,u||[]),checkDeferredModules()}function checkDeferredModules(){for(var e,t=0;t<c.length;t++){for(var o=c[t],r=!0,n=1;n<o.length;n++){var u=o[n];0!==f[u]&&(r=!1)}r&&(c.splice(t--,1),e=__webpack_require__(__webpack_require__.s=o[0]))}return e}var o={},l={0:0},f={0:0},c=[];function __webpack_require__(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,__webpack_require__),t.l=!0,t.exports}__webpack_require__.e=function(c){var e=[];l[c]?e.push(l[c]):0!==l[c]&&{2:1}[c]&&e.push(l[c]=new Promise(function(e,r){for(var t=c+".css",n=__webpack_require__.p+t,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var a=(i=o[u]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===t||a===n))return e()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){var i;if((a=(i=p[u]).getAttribute("data-href"))===t||a===n)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var t=e&&e.target&&e.target.src||n,o=new Error("Loading CSS chunk "+c+" failed.\n("+t+")");o.request=t,delete l[c],f.parentNode.removeChild(f),r(o)},f.href=n,document.getElementsByTagName("head")[0].appendChild(f)}).then(function(){l[c]=0}));var o=f[c];if(0!==o)if(o)e.push(o[2]);else{var t=new Promise(function(e,t){o=f[c]=[e,t]});e.push(o[2]=t);var r,u=document.createElement("script");u.charset="utf-8",u.timeout=120,__webpack_require__.nc&&u.setAttribute("nonce",__webpack_require__.nc),u.src=function(e){return __webpack_require__.p+""+({}[e]||e)+".bundle.js"}(c),r=function(e){u.onerror=u.onload=null,clearTimeout(a);var t=f[c];if(0!==t){if(t){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,n=new Error("Loading chunk "+c+" failed.\n("+o+": "+r+")");n.type=o,n.request=r,t[1](n)}f[c]=void 0}};var a=setTimeout(function(){r({type:"timeout",target:u})},12e4);u.onerror=u.onload=r,document.head.appendChild(u)}return Promise.all(e)},__webpack_require__.m=i,__webpack_require__.c=o,__webpack_require__.d=function(e,t,o){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(t,e){if(1&e&&(t=__webpack_require__(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(__webpack_require__.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)__webpack_require__.d(o,r,function(e){return t[e]}.bind(null,r));return o},__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__.oe=function(e){throw console.error(e),e};var e=window.webpackJsonp=window.webpackJsonp||[],t=e.push.bind(e);e.push=webpackJsonpCallback,e=e.slice();for(var r=0;r<e.length;r++)webpackJsonpCallback(e[r]);var _=t;c.push([17,1]),checkDeferredModules()}({17:function(e,t,o){e.exports=o(32)},24:function(e,t,o){},31:function(e,t,o){},32:function(e,t,o){"use strict";o.r(t);var r=o(0),n=o.n(r),u=o(13),a=o.n(u),p=o(14),i=o(6),f=o(5),c=o.n(f);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=function(e){function NavbarComponent(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,NavbarComponent),_possibleConstructorReturn(this,_getPrototypeOf(NavbarComponent).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(NavbarComponent,r["Component"]),function(e,t,o){t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o)}(NavbarComponent,[{key:"render",value:function(){return n.a.createElement("div",{className:"footer"},n.a.createElement("div",{className:"footer__content"},"Footer"))}}]),NavbarComponent}();o(24);function default_template_component_typeof(e){return(default_template_component_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function default_template_component_defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function default_template_component_possibleConstructorReturn(e,t){return!t||"object"!==default_template_component_typeof(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function default_template_component_getPrototypeOf(e){return(default_template_component_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function default_template_component_setPrototypeOf(e,t){return(default_template_component_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _=Object(r.lazy)(function(){return o.e(2).then(o.bind(null,34))}),s=function(e){function DefaultTemplateComponent(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DefaultTemplateComponent),default_template_component_possibleConstructorReturn(this,default_template_component_getPrototypeOf(DefaultTemplateComponent).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&default_template_component_setPrototypeOf(e,t)}(DefaultTemplateComponent,r["Component"]),function(e,t,o){t&&default_template_component_defineProperties(e.prototype,t),o&&default_template_component_defineProperties(e,o)}(DefaultTemplateComponent,[{key:"render",value:function(){var e=this.props.children;return n.a.createElement("div",{className:"ui ui-default"},n.a.createElement("div",{className:"ui-default__navbar fixed block"},n.a.createElement(r.Suspense,{fallback:null},n.a.createElement(_,null))),n.a.createElement("div",{className:"ui-default__content"},e),n.a.createElement("div",{className:"ui-default__footer"},n.a.createElement(l,null)))}}]),DefaultTemplateComponent}();s.propTypes={children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]).isRequired};var y=s;function front_page_page_typeof(e){return(front_page_page_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function front_page_page_defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function front_page_page_possibleConstructorReturn(e,t){return!t||"object"!==front_page_page_typeof(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function front_page_page_getPrototypeOf(e){return(front_page_page_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function front_page_page_setPrototypeOf(e,t){return(front_page_page_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function FrontPage(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,FrontPage),front_page_page_possibleConstructorReturn(this,front_page_page_getPrototypeOf(FrontPage).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&front_page_page_setPrototypeOf(e,t)}(FrontPage,r["Component"]),function(e,t,o){t&&front_page_page_defineProperties(e.prototype,t),o&&front_page_page_defineProperties(e,o)}(FrontPage,[{key:"render",value:function(){return n.a.createElement(y,null,"Content")}}]),FrontPage}();function routes_typeof(e){return(routes_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function routes_defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function routes_possibleConstructorReturn(e,t){return!t||"object"!==routes_typeof(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function routes_getPrototypeOf(e){return(routes_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function routes_setPrototypeOf(e,t){return(routes_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function Router(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Router),routes_possibleConstructorReturn(this,routes_getPrototypeOf(Router).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&routes_setPrototypeOf(e,t)}(Router,n.a.Component),function(e,t,o){t&&routes_defineProperties(e.prototype,t),o&&routes_defineProperties(e,o)}(Router,[{key:"render",value:function(){return n.a.createElement(p.a,null,n.a.createElement(i.a,{path:"/",component:b}))}}]),Router}();o(31);a.a.render(n.a.createElement(m,null),document.getElementById("app"))}});