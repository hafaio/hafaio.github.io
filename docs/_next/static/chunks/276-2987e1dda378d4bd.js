(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[276],{8045:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(c){l=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}t.default=function(e){var t=e.src,r=e.sizes,n=e.unoptimized,a=void 0!==n&&n,l=e.priority,f=void 0!==l&&l,p=e.loading,m=e.lazyBoundary,b=void 0===m?"200px":m,w=e.className,A=e.quality,S=e.width,O=e.height,j=e.objectFit,k=e.objectPosition,I=e.onLoadingComplete,L=e.loader,_=void 0===L?z:L,C=e.placeholder,P=void 0===C?"empty":C,M=e.blurDataURL,R=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),N=r?"responsive":"intrinsic";"layout"in R&&(R.layout&&(N=R.layout),delete R.layout);var D="";if(function(e){return"object"===typeof e&&(v(e)||function(e){return void 0!==e.src}(e))}(t)){var q=v(t)?t.default:t;if(!q.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(q)));if(M=M||q.blurDataURL,D=q.src,(!N||"fill"!==N)&&(O=O||q.height,S=S||q.width,!q.height||!q.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(q)))}t="string"===typeof t?t:D;var U=E(S),W=E(O),B=E(A),T=!f&&("lazy"===p||"undefined"===typeof p);(t.startsWith("data:")||t.startsWith("blob:"))&&(a=!0,T=!1);h.has(t)&&(T=!1);0;var H,K=i(d.useIntersection({rootMargin:b,disabled:!T}),2),F=K[0],V=K[1],$=!T||V,J={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},G={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Q=!1,X={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:j,objectPosition:k},Y="blur"===P?{filter:"blur(20px)",backgroundSize:j||"cover",backgroundImage:'url("'.concat(M,'")'),backgroundPosition:k||"0% 0%"}:{};if("fill"===N)J.display="block",J.position="absolute",J.top=0,J.left=0,J.bottom=0,J.right=0;else if("undefined"!==typeof U&&"undefined"!==typeof W){var Z=W/U,ee=isNaN(Z)?"100%":"".concat(100*Z,"%");"responsive"===N?(J.display="block",J.position="relative",Q=!0,G.paddingTop=ee):"intrinsic"===N?(J.display="inline-block",J.position="relative",J.maxWidth="100%",Q=!0,G.maxWidth="100%",H='<svg width="'.concat(U,'" height="').concat(W,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===N&&(J.display="inline-block",J.position="relative",J.width=U,J.height=W)}else 0;var te={src:g,srcSet:void 0,sizes:void 0};$&&(te=x({src:t,unoptimized:a,layout:N,width:U,quality:B,sizes:r,loader:_}));var re=t;0;var ne;0;var oe=(o(ne={},"imagesrcset",te.srcSet),o(ne,"imagesizes",te.sizes),ne);return c.default.createElement("span",{style:J},Q?c.default.createElement("span",{style:G},H?c.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(s.toBase64(H))}):null):null,c.default.createElement("img",Object.assign({},R,te,{decoding:"async","data-nimg":N,className:w,ref:function(e){F(e),function(e,t,r,n,o){if(!e)return;var i=function(){e.src!==g&&("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===n&&(e.style.filter="",e.style.backgroundSize="",e.style.backgroundImage="",e.style.backgroundPosition=""),h.add(t),o){var r=e.naturalWidth,i=e.naturalHeight;o({naturalWidth:r,naturalHeight:i})}}))};e.complete?i():e.onload=i}(e,re,0,P,I)},style:y({},X,Y)})),T&&c.default.createElement("noscript",null,c.default.createElement("img",Object.assign({},R,x({src:t,unoptimized:a,layout:N,width:U,quality:B,sizes:r,loader:_}),{decoding:"async","data-nimg":N,style:X,className:w,loading:p||"lazy"}))),f?c.default.createElement(u.default,null,c.default.createElement("link",Object.assign({key:"__nimg-"+te.src+te.srcSet+te.sizes,rel:"preload",as:"image",href:te.srcSet?void 0:te.src},oe))):null)};var c=m(r(7294)),u=m(r(5443)),s=r(6978),f=r(5809),d=r(7190);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e){return e&&e.__esModule?e:{default:e}}function y(e){for(var t=arguments,r=function(r){var n=null!=t[r]?t[r]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){p(e,t,n[t])}))},n=1;n<arguments.length;n++)r(n);return e}var h=new Set,g=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var b=new Map([["default",function(e){var t=e.root,r=e.src,n=e.width,o=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(o||75)}],["imgix",function(e){var t=e.root,r=e.src,n=e.width,o=e.quality,i=new URL("".concat(t).concat(I(r))),a=i.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),o&&a.set("q",o.toString());return i.href}],["cloudinary",function(e){var t=e.root,r=e.src,n=e.width,o=e.quality,i=["f_auto","c_limit","w_"+n,"q_"+(o||"auto")].join(",")+"/";return"".concat(t).concat(i).concat(I(r))}],["akamai",function(e){var t=e.root,r=e.src,n=e.width;return"".concat(t).concat(I(r),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function v(e){return void 0!==e.default}var w={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom"}||f.imageConfigDefault,A=w.deviceSizes,S=w.imageSizes,O=w.loader,j=w.path,k=(w.domains,a(A).concat(a(S)));function x(e){var t=e.src,r=e.unoptimized,n=e.layout,o=e.width,i=e.quality,l=e.sizes,c=e.loader;if(r)return{src:t,srcSet:void 0,sizes:void 0};var u=function(e,t,r){if(r&&("fill"===t||"responsive"===t)){for(var n,o=/(^|\s)(1?\d?\d)vw/g,i=[];n=o.exec(r);n)i.push(parseInt(n[2]));if(i.length){var l,c=.01*(l=Math).min.apply(l,a(i));return{widths:k.filter((function(e){return e>=A[0]*c})),kind:"w"}}return{widths:k,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:A,kind:"w"}:{widths:a(new Set([e,2*e].map((function(e){return k.find((function(t){return t>=e}))||k[k.length-1]})))),kind:"x"}}(o,n,l),s=u.widths,f=u.kind,d=s.length-1;return{sizes:l||"w"!==f?l:"100vw",srcSet:s.map((function(e,r){return"".concat(c({src:t,quality:i,width:e})," ").concat("w"===f?e:r+1).concat(f)})).join(", "),src:c({src:t,quality:i,width:s[d]})}}function E(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function z(e){var t=b.get(O);if(t)return t(y({root:j},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(O))}function I(e){return"/"===e[0]?e.slice(1):e}A.sort((function(e,t){return e-t})),k.sort((function(e,t){return e-t}))},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(c){l=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var i,a=(i=r(7294))&&i.__esModule?i:{default:i},l=r(6273),c=r(387),u=r(7190);var s={};function f(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=c.useRouter(),i=a.default.useMemo((function(){var t=o(l.resolveHref(n,e.href,!0),2),r=t[0],i=t[1];return{href:r,as:e.as?l.resolveHref(n,e.as):i||r}}),[n,e.href,e.as]),d=i.href,p=i.as,m=e.children,y=e.replace,h=e.shallow,g=e.scroll,b=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var v=(t=a.default.Children.only(m))&&"object"===typeof t&&t.ref,w=o(u.useIntersection({rootMargin:"200px"}),2),A=w[0],S=w[1],O=a.default.useCallback((function(e){A(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,A]);a.default.useEffect((function(){var e=S&&r&&l.isLocalURL(d),t="undefined"!==typeof b?b:n&&n.locale,o=s[d+"%"+p+(t?"%"+t:"")];e&&!o&&f(n,d,p,{locale:t})}),[p,d,S,b,r,n]);var j={ref:O,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,i,a,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),null==a&&n.indexOf("#")>=0&&(a=!1),t[o?"replace":"push"](r,n,{shallow:i,locale:c,scroll:a}))}(e,n,d,p,y,h,g,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof b?b:n&&n.locale,x=n&&n.isLocaleDomain&&l.getDomainLocale(p,k,n&&n.locales,n&&n.domainLocales);j.href=x||l.addBasePath(l.addLocale(p,k,n&&n.defaultLocale))}return a.default.cloneElement(t,j)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(c){l=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!l,n=i.useRef(),u=o(i.useState(!1),2),s=u[0],f=u[1],d=i.useCallback((function(e){n.current&&(n.current(),n.current=void 0),r||s||e&&e.tagName&&(n.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,i=n.observer,a=n.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,s]);return i.useEffect((function(){if(!l&&!s){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),[d,s]};var i=r(7294),a=r(9311),l="undefined"!==typeof IntersectionObserver;var c=new Map},6978:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},9008:function(e,t,r){e.exports=r(5443)},5675:function(e,t,r){e.exports=r(8045)},1664:function(e,t,r){e.exports=r(8418)},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),a=function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function c(e){return e&&e.map((function(e,t){return n.createElement(e.tag,a({key:t},e.attr),c(e.child))}))}function u(e){return function(t){return n.createElement(s,a({attr:a({},e.attr)},t),c(e.child))}}function s(e){var t=function(t){var r,o=e.attr,i=e.size,c=e.title,u=l(e,["attr","size","title"]),s=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==i?n.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}}}]);