(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1887:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(1847)}])},7837:function(e,t,n){"use strict";n.d(t,{F:function(){return u},Z:function(){return i}});var o=n(1874),r=n(9953);let c=(0,r.createContext)({theme:void 0,toggleTheme:()=>{}});function u(){return(0,r.useContext)(c)}let s={matches:!1,addEventListener(){},removeEventListener(){}};function i(e){let{children:t}=e,[n,u]=(0,r.useState)(void 0);(0,r.useEffect)(()=>{function e(){let e=window.localStorage.getItem("theme");"dark"===e?u(!0):"light"===e?u(!1):(window.localStorage.removeItem("theme"),u(void 0))}return e(),window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[u]),(0,r.useEffect)(()=>{void 0===n?window.localStorage.removeItem("theme"):n?window.localStorage.setItem("theme","dark"):window.localStorage.setItem("theme","light")},[n]);let[i,a]=(0,r.useState)(s);(0,r.useEffect)(()=>a(window.matchMedia("(prefers-color-scheme: dark)")),[a]);let[l,d]=(0,r.useState)(null!=n?n:i.matches);(0,r.useEffect)(()=>{d(null!=n?n:i.matches);let e=()=>d(null!=n?n:i.matches);return i.addEventListener("change",e),()=>i.removeEventListener("change",e)},[i,n,d]),(0,r.useEffect)(()=>{l?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[l]);let[m,f]=(0,r.useState)(!1),w=(0,r.useCallback)(()=>{void 0===n?u(!i.matches):m?(u(void 0),f(!1)):(u(!n),f(!0))},[n,u,i.matches,m,f]),h=(0,r.useMemo)(()=>({theme:n,toggleTheme:w}),[n,w]);return(0,o.jsx)(c.Provider,{value:h,children:t})}},1847:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var o=n(1874),r=n(9953),c=n(7837);function u(){document.documentElement.dataset.scroll=(window.scrollY>0).toString()}function s(e){let{Component:t,pageProps:n}=e;return(0,r.useEffect)(()=>{window.addEventListener("scroll",u),u()},[]),(0,o.jsx)(c.Z,{children:(0,o.jsx)(t,{...n})})}n(6269)},6269:function(){}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1887),t(2164)}),_N_E=e.O()}]);