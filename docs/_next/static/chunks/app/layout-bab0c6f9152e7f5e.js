(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{7057:function(e,t,r){Promise.resolve().then(r.bind(r,280)),Promise.resolve().then(r.bind(r,9785)),Promise.resolve().then(r.t.bind(r,6238,23))},280:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Scroll}});var n=r(8138);function scroll(){document.documentElement.dataset.scroll=(window.scrollY>0).toString()}function Scroll(){return(0,n.useEffect)(()=>{window.addEventListener("scroll",scroll),scroll()},[]),null}},9785:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ThemeProvider},useTheme:function(){return useTheme}});var n=r(6644),o=r(8138);let s=(0,o.createContext)({theme:void 0,toggleTheme:()=>{}});function useTheme(){return(0,o.useContext)(s)}let l={matches:!1,addEventListener(){},removeEventListener(){}};function ThemeProvider(e){let{children:t}=e,[r,i]=(0,o.useState)(void 0);(0,o.useEffect)(()=>{function listener(){let e=window.localStorage.getItem("theme");"dark"===e?i(!0):"light"===e?i(!1):(window.localStorage.removeItem("theme"),i(void 0))}return listener(),window.addEventListener("storage",listener),()=>window.removeEventListener("storage",listener)},[i]),(0,o.useEffect)(()=>{void 0===r?window.localStorage.removeItem("theme"):r?window.localStorage.setItem("theme","dark"):window.localStorage.setItem("theme","light")},[r]);let[c,u]=(0,o.useState)(l);(0,o.useEffect)(()=>u(window.matchMedia("(prefers-color-scheme: dark)")),[u]);let[a,d]=(0,o.useState)(null!=r?r:c.matches);(0,o.useEffect)(()=>{d(null!=r?r:c.matches);let listener=()=>d(null!=r?r:c.matches);return c.addEventListener("change",listener),()=>c.removeEventListener("change",listener)},[c,r,d]),(0,o.useEffect)(()=>{a?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[a]);let[f,m]=(0,o.useState)(!1),v=(0,o.useCallback)(()=>{void 0===r?i(!c.matches):f?(i(void 0),m(!1)):(i(!r),m(!0))},[r,i,c.matches,f,m]),h=(0,o.useMemo)(()=>({theme:r,toggleTheme:v}),[r,v]);return(0,n.jsx)(s.Provider,{value:h,children:t})}},6238:function(){},7535:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(8138),o=Symbol.for("react.element"),s=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};t.jsx=function(e,t,r){var n,c={},u=null,a=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(a=t.ref),t)s.call(t,n)&&!i.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:a,props:c,_owner:l.current}}},6644:function(e,t,r){"use strict";e.exports=r(7535)}},function(e){e.O(0,[299,766,744],function(){return e(e.s=7057)}),_N_E=e.O()}]);