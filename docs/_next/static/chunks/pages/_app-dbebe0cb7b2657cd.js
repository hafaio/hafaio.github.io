(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6363:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(5656)}])},9627:function(e,t,n){"use strict";n.d(t,{F:function(){return c},Z:function(){return a}});var r=n(5893),o=n(7294),u=(0,o.createContext)({theme:void 0,toggleTheme:function(){}});function c(){return(0,o.useContext)(u)}var i={matches:!1,addEventListener:function(){},removeEventListener:function(){}};function a(e){var t=e.children,n=(0,o.useState)(void 0),c=n[0],a=n[1];(0,o.useEffect)((function(){var e=function(){var e=window.localStorage.getItem("theme");"dark"===e?a(!0):"light"===e?a(!1):(window.localStorage.removeItem("theme"),a(void 0))};return e(),window.addEventListener("storage",e),function(){return window.removeEventListener("storage",e)}}),[a]),(0,o.useEffect)((function(){void 0===c?window.localStorage.removeItem("theme"):c?window.localStorage.setItem("theme","dark"):window.localStorage.setItem("theme","light")}),[c]);var s=(0,o.useState)(i),f=s[0],d=s[1];(0,o.useEffect)((function(){return d(window.matchMedia("(prefers-color-scheme: dark)"))}),[d]);var l=(0,o.useState)(null!==c&&void 0!==c?c:f.matches),m=l[0],v=l[1];(0,o.useEffect)((function(){v(null!==c&&void 0!==c?c:f.matches);var e=function(){return v(null!==c&&void 0!==c?c:f.matches)};return f.addEventListener("change",e),function(){return f.removeEventListener("change",e)}}),[f,c,v]),(0,o.useEffect)((function(){m?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}),[m]);var h=(0,o.useState)(!1),w=h[0],g=h[1],E=(0,o.useCallback)((function(){void 0===c?a(!f.matches):w?(a(void 0),g(!1)):(a(!c),g(!0))}),[c,a,f.matches,w,g]),p=(0,o.useMemo)((function(){return{theme:c,toggleTheme:E}}),[c,E]);return(0,r.jsx)(u.Provider,{value:p,children:t})}},5656:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(5893),o=n(7294),u=n(9627);n(906);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}function a(){document.documentElement.dataset.scroll=(window.scrollY>0).toString()}function s(e){var t=e.Component,n=e.pageProps;return(0,o.useEffect)((function(){window.addEventListener("scroll",a),a()}),[]),(0,r.jsx)(u.Z,{children:(0,r.jsx)(t,i({},n))})}},906:function(){}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(387)}));var n=e.O();_N_E=n}]);