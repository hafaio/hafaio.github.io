(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9917:function(e,t,r){"use strict";var n=r(3038),o=r(319);t.default=function(e){var t=e.src,r=e.sizes,o=e.unoptimized,s=void 0!==o&&o,u=e.priority,d=void 0!==u&&u,p=e.loading,g=e.lazyBoundary,b=void 0===g?"200px":g,y=e.className,v=e.quality,x=e.width,w=e.height,S=e.objectFit,P=e.objectPosition,E=e.onLoadingComplete,_=e.loader,N=void 0===_?k:_,z=e.placeholder,A=void 0===z?"empty":z,D=e.blurDataURL,L=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),I=r?"responsive":"intrinsic";"layout"in L&&(L.layout&&(I=L.layout),delete L.layout);var C="";if(function(e){return"object"===typeof e&&(m(e)||function(e){return void 0!==e.src}(e))}(t)){var M=m(t)?t.default:t;if(!M.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(M)));if(D=D||M.blurDataURL,C=M.src,(!I||"fill"!==I)&&(w=w||M.height,x=x||M.width,!M.height||!M.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(M)))}t="string"===typeof t?t:C;var R=O(x),T=O(w),q=O(v),U=!d&&("lazy"===p||"undefined"===typeof p);(t.startsWith("data:")||t.startsWith("blob:"))&&(s=!0,U=!1);h.has(t)&&(U=!1);0;var W,H,B,F=l.useIntersection({rootMargin:b,disabled:!U}),Z=n(F,2),K=Z[0],G=Z[1],J=!U||G,X={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:S,objectPosition:P},V="blur"===A?{filter:"blur(20px)",backgroundSize:S||"cover",backgroundImage:'url("'.concat(D,'")'),backgroundPosition:P||"0% 0%"}:{};if("fill"===I)W={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0};else if("undefined"!==typeof R&&"undefined"!==typeof T){var Q=T/R,Y=isNaN(Q)?"100%":"".concat(100*Q,"%");"responsive"===I?(W={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},H={display:"block",boxSizing:"border-box",paddingTop:Y}):"intrinsic"===I?(W={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},H={boxSizing:"border-box",display:"block",maxWidth:"100%"},B='<svg width="'.concat(R,'" height="').concat(T,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===I&&(W={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:R,height:T})}else 0;var $={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};J&&($=j({src:t,unoptimized:s,layout:I,width:R,quality:q,sizes:r,loader:N}));var ee=t;return i.default.createElement("div",{style:W},H?i.default.createElement("div",{style:H},B?i.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(c.toBase64(B))}):null):null,i.default.createElement("img",Object.assign({},L,$,{decoding:"async","data-nimg":I,className:y,ref:function(e){K(e),function(e,t,r,n,o){if(!e)return;var i=function(){e.src.startsWith("data:")||("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===n&&(e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"),h.add(t),o){var r=e.naturalWidth,i=e.naturalHeight;o({naturalWidth:r,naturalHeight:i})}}))};e.complete?i():e.onload=i}(e,ee,0,A,E)},style:f({},X,V)})),i.default.createElement("noscript",null,i.default.createElement("img",Object.assign({},L,j({src:t,unoptimized:s,layout:I,width:R,quality:q,sizes:r,loader:N}),{decoding:"async","data-nimg":I,style:X,className:y,loading:p||"lazy"}))),d?i.default.createElement(a.default,null,i.default.createElement("link",{key:"__nimg-"+$.src+$.srcSet+$.sizes,rel:"preload",as:"image",href:$.srcSet?void 0:$.src,imagesrcset:$.srcSet,imagesizes:$.sizes})):null)};var i=d(r(7294)),a=d(r(639)),c=r(8997),s=r(5809),l=r(7426);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){return e&&e.__esModule?e:{default:e}}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){u(e,t,r[t])}))}return e}var h=new Set;var p=new Map([["default",function(e){var t=e.root,r=e.src,n=e.width,o=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(o||75)}],["imgix",function(e){var t=e.root,r=e.src,n=e.width,o=e.quality,i=new URL("".concat(t).concat(S(r))),a=i.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),o&&a.set("q",o.toString());return i.href}],["cloudinary",function(e){var t=e.root,r=e.src,n=e.width,o=e.quality,i=["f_auto","c_limit","w_"+n,"q_"+(o||"auto")].join(",")+"/";return"".concat(t).concat(i).concat(S(r))}],["akamai",function(e){var t=e.root,r=e.src,n=e.width;return"".concat(t).concat(S(r),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function m(e){return void 0!==e.default}var g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom"}||s.imageConfigDefault,b=g.deviceSizes,y=g.imageSizes,v=g.loader,x=g.path,w=(g.domains,[].concat(o(b),o(y)));function j(e){var t=e.src,r=e.unoptimized,n=e.layout,i=e.width,a=e.quality,c=e.sizes,s=e.loader;if(r)return{src:t,srcSet:void 0,sizes:void 0};var l=function(e,t,r){if(r&&("fill"===t||"responsive"===t)){for(var n,i=/(^|\s)(1?\d?\d)vw/g,a=[];n=i.exec(r);n)a.push(parseInt(n[2]));if(a.length){var c=.01*Math.min.apply(Math,a);return{widths:w.filter((function(e){return e>=b[0]*c})),kind:"w"}}return{widths:w,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:b,kind:"w"}:{widths:o(new Set([e,2*e].map((function(e){return w.find((function(t){return t>=e}))||w[w.length-1]})))),kind:"x"}}(i,n,c),u=l.widths,d=l.kind,f=u.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:u.map((function(e,r){return"".concat(s({src:t,quality:a,width:e})," ").concat("w"===d?e:r+1).concat(d)})).join(", "),src:s({src:t,quality:a,width:u[f]})}}function O(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function k(e){var t=p.get(v);if(t)return t(f({root:x},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(s.VALID_LOADERS.join(", "),". Received: ").concat(v))}function S(e){return"/"===e[0]?e.slice(1):e}b.sort((function(e,t){return e-t})),w.sort((function(e,t){return e-t}))},2167:function(e,t,r){"use strict";var n=r(3038);t.default=void 0;var o,i=(o=r(7294))&&o.__esModule?o:{default:o},a=r(1063),c=r(4651),s=r(7426);var l={};function u(e,t,r,n){if(e&&a.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,o=c.useRouter(),d=i.default.useMemo((function(){var t=a.resolveHref(o,e.href,!0),r=n(t,2),i=r[0],c=r[1];return{href:i,as:e.as?a.resolveHref(o,e.as):c||i}}),[o,e.href,e.as]),f=d.href,h=d.as,p=e.children,m=e.replace,g=e.shallow,b=e.scroll,y=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var v=(t=i.default.Children.only(p))&&"object"===typeof t&&t.ref,x=s.useIntersection({rootMargin:"200px"}),w=n(x,2),j=w[0],O=w[1],k=i.default.useCallback((function(e){j(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,j]);i.default.useEffect((function(){var e=O&&r&&a.isLocalURL(f),t="undefined"!==typeof y?y:o&&o.locale,n=l[f+"%"+h+(t?"%"+t:"")];e&&!n&&u(o,f,h,{locale:t})}),[h,f,O,y,r,o]);var S={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,i,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(r))&&(e.preventDefault(),null==c&&n.indexOf("#")>=0&&(c=!1),t[o?"replace":"push"](r,n,{shallow:i,locale:s,scroll:c}))}(e,o,f,h,m,g,b,y)},onMouseEnter:function(e){a.isLocalURL(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(o,f,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var P="undefined"!==typeof y?y:o&&o.locale,E=o&&o.isLocaleDomain&&a.getDomainLocale(h,P,o&&o.locales,o&&o.domainLocales);S.href=E||a.addBasePath(a.addLocale(h,P,o&&o.defaultLocale))}return i.default.cloneElement(t,S)};t.default=d},7426:function(e,t,r){"use strict";var n=r(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!a,s=o.useRef(),l=o.useState(!1),u=n(l,2),d=u[0],f=u[1],h=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||d||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,i=n.observer,a=n.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,d]);return o.useEffect((function(){if(!a&&!d){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),[h,d]};var o=r(7294),i=r(3447),a="undefined"!==typeof IntersectionObserver;var c=new Map},8997:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},8097:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return z}});var n=r(9008),o=r(4942);function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=r(5675),c=r(5893),s=["alt"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e){return e.src}function f(e){var t=e.alt,r=i(e,s);return(0,c.jsx)(a.default,u(u({alt:t},r),{},{loader:d,unoptimized:!0}))}var h=r(1664),p={src:"/_next/static/image/public/hafa.2915ab27f2e4306b8530d29511c1d5c6.svg",height:128,width:128},m={src:"/_next/static/image/public/ascii-math.f3e5f2e8485a3f5a297c7dbba67dc5d4.svg",height:128,width:128},g="/_next/static/image/public/favicon.9a5370a07aec86a8884ff0c2c42dd8ba.ico",b="/_next/static/image/public/irina-shishkina-FMlZAUFmkvw-unsplash.74ff80016aec4abf6e41350b775b9958.jpg",y=["children","target","rel"];function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e){var t=e.children,r=e.target,n=void 0===r?"_blank":r,o=e.rel,a=void 0===o?"noopener noreferrer":o,s=i(e,y);return(0,c.jsx)("a",x(x({target:n,rel:a},s),{},{children:t}))}var j=r(7294);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function S(e){var t=e.text,r=e.href,n=e.icon;return(0,c.jsx)(w,{href:r,className:"flex-grow md:flex-grow-0",children:(0,c.jsxs)("button",{className:"w-full text-gray-600 rounded-lg px-4 py-2 border transition hover:text-black hover:shadow active:shadow-none space-x-2 flex justify-center items-center dark:text-gray-400 dark:hover:text-gray-100 dark:border-gray-400 dark:hover:border-gray-100 dark:hover:shadow-none focus:ring ring-teal-400",children:[(0,c.jsx)("span",{children:t}),n]})})}function P(e){var t=e.logo,r=e.name,n=e.description,o=e.buttons;return(0,c.jsxs)("li",{className:"rounded-lg shadow overflow-hidden bg-gray-100 md:flex dark:bg-gray-700 dark:shadow-none",children:[(0,c.jsx)("div",{className:"bg-gray-300 h-40 flex justify-center align-center md:h-auto md:w-60",children:(0,c.jsx)(f,{src:t,alt:r,height:64,width:64})}),(0,c.jsxs)("div",{className:"space-y-4 p-4",children:[(0,c.jsx)("h3",{className:"text-2xl font-semibold text-center md:text-left dark:text-gray-100",children:r}),(0,c.jsx)("p",{className:"text-gray-600 dark:text-gray-400",children:n}),(0,c.jsx)("div",{className:"flex space-x-4",children:o.map((function(e){return(0,j.createElement)(S,k(k({},e),{},{key:e.text}))}))})]})]})}var E=r(1725),_=r(9583);function N(e){var t=e.href,r=e.icon;return(0,c.jsx)(w,{href:t,className:"p-1 hover:text-black dark:hover:text-gray-100",children:r})}function z(){var e=(0,E.F)(),t=e.theme,r=e.toggleTheme,o=void 0===t?"System Theme":t?"Dark Theme":"Light Theme",i=void 0===t?(0,c.jsx)(_.FM1,{}):t?(0,c.jsx)(_.TLr,{}):(0,c.jsx)(_.Mei,{});return(0,c.jsxs)("div",{className:"dark:bg-gray-800",children:[(0,c.jsxs)(n.default,{children:[(0,c.jsx)("title",{children:"hafa.io"}),(0,c.jsx)("link",{rel:"icon",href:g}),(0,c.jsx)("meta",{name:"google-site-verification",content:"GSZtecn0mSgjHOwdsGTs9h_1fok8AZ7saSkYSuZ18yE"})]}),(0,c.jsx)("div",{className:"fixed w-full shadow bg-white bg-opacity-80 backdrop-filter backdrop-blur backdrop-saturate-125 transition-opacity duration-500 opacity-0 scroll-show dark:bg-gray-800 dark:bg-opacity-80 dark:backdrop-brightness-125",children:(0,c.jsxs)("div",{className:"max-w-4xl h-full mx-auto my-2 px-6 flex items-center justify-between dark:text-gray-100",children:[(0,c.jsx)(h.default,{href:"/",children:(0,c.jsxs)("a",{className:"flex items-center",children:[(0,c.jsx)(f,{src:p,alt:"hafa.io logo",height:36,width:36}),(0,c.jsx)("span",{className:"font-cursive text-4xl pl-2",children:"hafa.io"})]})}),(0,c.jsx)("button",{onClick:r,title:o,className:"p-2 rounded-full ring-teal-400 text-gray-500 hover:bg-gray-300 focus:ring dark:text-gray-400 dark:hover:bg-gray-700",children:i})]})}),(0,c.jsx)("div",{className:"h-screen w-full bg-center bg-cover bg-fixed flex justify-center items-center",style:{backgroundImage:"url(".concat(b,")")},children:(0,c.jsx)("span",{className:"text-8xl font-bold text-white transition-opacity duration-500 scroll-hide font-cursive select-none",children:"hafa.io"})}),(0,c.jsxs)("div",{className:"min-h-screen max-w-4xl mx-auto flex flex-col items-center",children:[(0,c.jsx)("h2",{className:"text-4xl font-bold py-4 mt-4 bg-clip-text text-transparent bg-gradient-to-br from-teal-400 to-teal-500",children:"Products"}),(0,c.jsx)("ul",{className:"px-4 space-y-8 w-full",children:(0,c.jsx)(P,{logo:m,name:"Ascii Math Unicode",description:"Ascii math unicode is an open source chrome extension for converting highlighted ascii math into unicode math expressions.",buttons:[{text:"Chrome Store",href:"https://chrome.google.com/webstore/detail/ascii-math-unicode/llehdcbaonklonjlfgeggamnebgggoab",icon:(0,c.jsx)(_.zKd,{})},{text:"Github",href:"https://github.com/hafaio/ascii-math-unicode",icon:(0,c.jsx)(_.hJX,{})}]})}),(0,c.jsxs)("div",{className:"my-8 space-y-2 w-full text-gray-600 dark:text-gray-400",children:[(0,c.jsx)("div",{className:"text-md flex justify-center",children:(0,c.jsx)(N,{href:"https://github.com/hafaio",icon:(0,c.jsx)(_.hJX,{})})}),(0,c.jsxs)("div",{className:"text-center text-sm",children:["Hero photo by"," ",(0,c.jsx)(w,{className:"hover:text-teal-400",href:"https://unsplash.com/@whoisrobinhood?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Irina Shishkina"})," ","on"," ",(0,c.jsx)(w,{className:"hover:text-teal-400",href:"https://unsplash.com/@whoisrobinhood?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})]})]})]})]})}},5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(8097)}])},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60}},9008:function(e,t,r){e.exports=r(639)},5675:function(e,t,r){e.exports=r(9917)},1664:function(e,t,r){e.exports=r(2167)},4405:function(e,t,r){"use strict";r.d(t,{w_:function(){return l}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),a=function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function s(e){return e&&e.map((function(e,t){return n.createElement(e.tag,a({key:t},e.attr),s(e.child))}))}function l(e){return function(t){return n.createElement(u,a({attr:a({},e.attr)},t),s(e.child))}}function u(e){var t=function(t){var r,o=e.attr,i=e.size,s=e.title,l=c(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,l,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==i?n.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}}},function(e){e.O(0,[445,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);