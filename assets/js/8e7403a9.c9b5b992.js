"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3853],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(a),f=l,h=s["".concat(p,".").concat(f)]||s[f]||m[f]||n;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},915:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>p,default:()=>m,frontMatter:()=>o,toc:()=>c});var r=a(87462),l=a(63366),n=(a(67294),a(3905)),i=["components"],o={},p=void 0,c=[{value:"3.5.2 (2023-08-21)",id:"352-2023-08-21",level:2},{value:"3.5.1 (2023-08-16)",id:"351-2023-08-16",level:2},{value:"Features",id:"features",level:3},{value:"3.4.2 (2023-07-19)",id:"342-2023-07-19",level:2},{value:"Features",id:"features-1",level:3},{value:"3.4.1 (2023-07-13)",id:"341-2023-07-13",level:2},{value:"3.3.3 (2023-05-31)",id:"333-2023-05-31",level:2},{value:"3.3.2 (2023-05-11)",id:"332-2023-05-11",level:2},{value:"3.3.1 (2023-04-11)",id:"331-2023-04-11",level:2},{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Bug Fixes",id:"bug-fixes-1",level:3},{value:"3.2.2 (2023-02-08)",id:"322-2023-02-08",level:2},{value:"3.2.1 (2023-02-07)",id:"321-2023-02-07",level:2},{value:"Bug Fixes",id:"bug-fixes-2",level:3},{value:"3.1.2 (2022-11-15)",id:"312-2022-11-15",level:2},{value:"3.1.1 (2022-11-07)",id:"311-2022-11-07",level:2},{value:"3.0.4 (2022-08-22)",id:"304-2022-08-22",level:2}],u={toc:c},s="wrapper";function m(e){var t=e.components,a=(0,l.Z)(e,i);return(0,n.kt)(s,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"All notable changes to this project will be documented in this file.\nSee ",(0,n.kt)("a",{parentName:"p",href:"https://conventionalcommits.org"},"Conventional Commits")," for commit guidelines."),(0,n.kt)("h2",{id:"352-2023-08-21"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/apify/crawlee/compare/v3.5.1...v3.5.2"},"3.5.2")," (2023-08-21)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @crawlee/utils"),(0,n.kt)("h2",{id:"351-2023-08-16"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/apify/crawlee/compare/v3.5.0...v3.5.1"},"3.5.1")," (2023-08-16)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @crawlee/utils"),(0,n.kt)("h1",{id:"350-2023-07-31"},(0,n.kt)("a",{parentName:"h1",href:"https://github.com/apify/crawlee/compare/v3.4.2...v3.5.0"},"3.5.0")," (2023-07-31)"),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"retire session on proxy error (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/issues/2002"},"#2002"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/commit/8c0928b24ceabefc454f8114ac30a27023709010"},"8c0928b"),"), closes ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/issues/1912"},"#1912"))),(0,n.kt)("h2",{id:"342-2023-07-19"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/apify/crawlee/compare/v3.4.1...v3.4.2"},"3.4.2")," (2023-07-19)"),(0,n.kt)("h3",{id:"features-1"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"retryOnBlocked detects blocked webpage (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/issues/1956"},"#1956"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/commit/766fa9b88029e9243a7427075384c1abe85c70c8"},"766fa9b"),")")),(0,n.kt)("h2",{id:"341-2023-07-13"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/apify/crawlee/compare/v3.4.0...v3.4.1"},"3.4.1")," (2023-07-13)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @crawlee/utils"),(0,n.kt)("h1",{id:"340-2023-06-12"},(0,n.kt)("a",{parentName:"h1",href:"https://github.com/apify/crawlee/compare/v3.3.3...v3.4.0"},"3.4.0")," (2023-06-12)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @crawlee/utils"),(0,n.kt)("h2",{id:"333-2023-05-31"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/apify/crawlee/compare/v3.3.2...v3.3.3"},"3.3.3")," (2023-05-31)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @crawlee/utils"),(0,n.kt)("h2",{id:"332-2023-05-11"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/apify/crawlee/compare/v3.3.1...v3.3.2"},"3.3.2")," (2023-05-11)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @crawlee/utils"),(0,n.kt)("h2",{id:"331-2023-04-11"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/apify/crawlee/compare/v3.3.0...v3.3.1"},"3.3.1")," (2023-04-11)"),(0,n.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"jsdom:")," delay closing of the window and add some polyfills (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/commit/2e81618afb5f3890495e3e5fcfa037eb3319edc9"},"2e81618"),")")),(0,n.kt)("h1",{id:"330-2023-03-09"},(0,n.kt)("a",{parentName:"h1",href:"https://github.com/apify/crawlee/compare/v3.2.2...v3.3.0"},"3.3.0")," (2023-03-09)"),(0,n.kt)("h3",{id:"bug-fixes-1"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"add ",(0,n.kt)("inlineCode",{parentName:"li"},"proxyUrl")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"DownloadListOfUrlsOptions")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/commit/779be1e4f29dff191d02e623eefb1bd5650c14ad"},"779be1e"),"), closes ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/issues/1780"},"#1780"))),(0,n.kt)("h2",{id:"322-2023-02-08"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/apify/crawlee/compare/v3.2.1...v3.2.2"},"3.2.2")," (2023-02-08)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @crawlee/utils"),(0,n.kt)("h2",{id:"321-2023-02-07"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/apify/crawlee/compare/v3.2.0...v3.2.1"},"3.2.1")," (2023-02-07)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @crawlee/utils"),(0,n.kt)("h1",{id:"320-2023-02-07"},(0,n.kt)("a",{parentName:"h1",href:"https://github.com/apify/crawlee/compare/v3.1.4...v3.2.0"},"3.2.0")," (2023-02-07)"),(0,n.kt)("h3",{id:"bug-fixes-2"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"utils:")," add missing dependency on ",(0,n.kt)("inlineCode",{parentName:"li"},"ow")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/commit/bf0e03cc6ddc103c9337de5cd8dce9bc86c369a3"},"bf0e03c"),"), closes ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee/issues/1716"},"#1716"))),(0,n.kt)("h2",{id:"312-2022-11-15"},"3.1.2 (2022-11-15)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @crawlee/utils"),(0,n.kt)("h2",{id:"311-2022-11-07"},"3.1.1 (2022-11-07)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @crawlee/utils"),(0,n.kt)("h1",{id:"310-2022-10-13"},"3.1.0 (2022-10-13)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @crawlee/utils"),(0,n.kt)("h2",{id:"304-2022-08-22"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/apify/crawlee/compare/v3.0.3...v3.0.4"},"3.0.4")," (2022-08-22)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," Version bump only for package @crawlee/utils"))}m.isMDXComponent=!0}}]);