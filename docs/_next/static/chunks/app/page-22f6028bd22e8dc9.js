(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5678:function(A,e,t){Promise.resolve().then(t.t.bind(t,9327,23)),Promise.resolve().then(t.bind(t,2291)),Promise.resolve().then(t.bind(t,4267)),Promise.resolve().then(t.bind(t,2109)),Promise.resolve().then(t.bind(t,9435)),Promise.resolve().then(t.bind(t,7899)),Promise.resolve().then(t.bind(t,4999)),Promise.resolve().then(t.bind(t,8669))},2291:function(A,e,t){"use strict";t.r(e),t.d(e,{default:function(){return s}});var r=t(4668),i=t(8938);function n(A){let{src:e}=A;return e}function s(A){let{alt:e,...t}=A;return(0,r.jsx)(i.default,{alt:e,...t,loader:n,unoptimized:!0})}},4267:function(A,e,t){"use strict";t.r(e),t.d(e,{default:function(){return s}});var r=t(4668),i=t(5232),n=t(5127);function s(){let{theme:A,toggleTheme:e}=(0,n.useTheme)(),t=void 0===A?(0,r.jsx)(i.FM1,{}):A?(0,r.jsx)(i.TLr,{}):(0,r.jsx)(i.Mei,{});return(0,r.jsx)("button",{onClick:e,title:void 0===A?"System Theme":A?"Dark Theme":"Light Theme",className:"p-2 rounded-full ring-teal-400 text-gray-500 hover:bg-gray-300 focus:ring dark:text-gray-400 dark:hover:bg-gray-700",children:t})}},5127:function(A,e,t){"use strict";t.r(e),t.d(e,{default:function(){return a},useTheme:function(){return s}});var r=t(4668),i=t(6129);let n=(0,i.createContext)({theme:void 0,toggleTheme:()=>{}});function s(){return(0,i.useContext)(n)}let o={matches:!1,addEventListener(){},removeEventListener(){}};function a(A){let{children:e}=A,[t,s]=(0,i.useState)(void 0);(0,i.useEffect)(()=>{function A(){let A=window.localStorage.getItem("theme");"dark"===A?s(!0):"light"===A?s(!1):(window.localStorage.removeItem("theme"),s(void 0))}return A(),window.addEventListener("storage",A),()=>window.removeEventListener("storage",A)},[s]),(0,i.useEffect)(()=>{void 0===t?window.localStorage.removeItem("theme"):t?window.localStorage.setItem("theme","dark"):window.localStorage.setItem("theme","light")},[t]);let[a,u]=(0,i.useState)(o);(0,i.useEffect)(()=>u(window.matchMedia("(prefers-color-scheme: dark)")),[u]);let[d,l]=(0,i.useState)(null!=t?t:a.matches);(0,i.useEffect)(()=>{l(null!=t?t:a.matches);let A=()=>l(null!=t?t:a.matches);return a.addEventListener("change",A),()=>a.removeEventListener("change",A)},[a,t,l]),(0,i.useEffect)(()=>{d?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[d]);let[c,h]=(0,i.useState)(!1),m=(0,i.useCallback)(()=>{void 0===t?s(!a.matches):c?(s(void 0),h(!1)):(s(!t),h(!0))},[t,s,a.matches,c,h]),g=(0,i.useMemo)(()=>({theme:t,toggleTheme:m}),[t,m]);return(0,r.jsx)(n.Provider,{value:g,children:e})}},2109:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/ascii-math.835f631b.svg",height:256,width:256,blurWidth:0,blurHeight:0}},9435:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/hafa.1e67d090.svg",height:128,width:128,blurWidth:0,blurHeight:0}},7899:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/irina-shishkina-FMlZAUFmkvw-unsplash.9f368606.jpg",height:4032,width:3024,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAACBP/aAAwDAQACEAMQAAABuDn/AP/EABYQAAMAAAAAAAAAAAAAAAAAAAIEIv/aAAgBAQABBQIHL//EABYRAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAgBAwEBPwE23//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABkQAAEFAAAAAAAAAAAAAAAAAAABAhEhQf/aAAgBAQAGPwJyVGH/xAAXEAADAQAAAAAAAAAAAAAAAAAAAREh/9oACAEBAAE/IaNQkwf/2gAMAwEAAgADAAAAEP8A/8QAFREBAQAAAAAAAAAAAAAAAAAAAQD/2gAIAQMBAT8QQX//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPxCv/8QAGRAAAwADAAAAAAAAAAAAAAAAAREhADFR/9oACAEBAAE/EA7xczMrvc//2Q==",blurWidth:6,blurHeight:8}},4999:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/repub.d1ae9dd5.svg",height:258,width:258,blurWidth:0,blurHeight:0}},8669:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/riso-logo.df4b5ee4.svg",height:249,width:249,blurWidth:0,blurHeight:0}}},function(A){A.O(0,[383,720,302,522,744],function(){return A(A.s=5678)}),_N_E=A.O()}]);