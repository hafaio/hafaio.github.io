(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{5402:function(e,t,n){Promise.resolve().then(n.bind(n,9801)),Promise.resolve().then(n.bind(n,4303)),Promise.resolve().then(n.t.bind(n,4332,23))},9801:function(e,t,n){"use strict";n.d(t,{default:function(){return s}});var o=n(2265);function r(){document.documentElement.dataset.scroll=(window.scrollY>0).toString()}function s(){return(0,o.useEffect)(()=>{window.addEventListener("scroll",r),r()},[]),null}},4303:function(e,t,n){"use strict";n.d(t,{F:function(){return c},default:function(){return i}});var o=n(7437),r=n(2265);let s=(0,r.createContext)({theme:void 0,toggleTheme:()=>{}});function c(){return(0,r.useContext)(s)}let u={matches:!1,addEventListener(){},removeEventListener(){}};function i(e){let{children:t}=e,[n,c]=(0,r.useState)(void 0);(0,r.useEffect)(()=>{function e(){let e=window.localStorage.getItem("theme");"dark"===e?c(!0):"light"===e?c(!1):(window.localStorage.removeItem("theme"),c(void 0))}return e(),window.addEventListener("storage",e),()=>{window.removeEventListener("storage",e)}},[c]),(0,r.useEffect)(()=>{void 0===n?window.localStorage.removeItem("theme"):n?window.localStorage.setItem("theme","dark"):window.localStorage.setItem("theme","light")},[n]);let[i,l]=(0,r.useState)(u);(0,r.useEffect)(()=>{l(window.matchMedia("(prefers-color-scheme: dark)"))},[l]);let[a,d]=(0,r.useState)(null!=n?n:i.matches);(0,r.useEffect)(()=>{d(null!=n?n:i.matches);let e=()=>{d(null!=n?n:i.matches)};return i.addEventListener("change",e),()=>{i.removeEventListener("change",e)}},[i,n,d]),(0,r.useEffect)(()=>{a?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[a]);let[m,f]=(0,r.useState)(!1),h=(0,r.useCallback)(()=>{void 0===n?c(!i.matches):m?(c(void 0),f(!1)):(c(!n),f(!0))},[n,c,i.matches,m,f]),v=(0,r.useMemo)(()=>({theme:n,toggleTheme:h}),[n,h]);return(0,o.jsx)(s.Provider,{value:v,children:t})}},4332:function(){}},function(e){e.O(0,[228,971,23,744],function(){return e(e.s=5402)}),_N_E=e.O()}]);