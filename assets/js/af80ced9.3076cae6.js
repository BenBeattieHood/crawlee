"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2143],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},14959:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(67294),a=r(39960),o=r(74477),i=r(52263),l=r(50643).version.split("."),s=[l[0],l[1]].join(".");const p=function(e){var t=e.to,r=e.children,l=(0,o.E)();return(0,i.default)().siteConfig.presets[0][1].docs.disableVersioning||l.version===s?n.createElement(a.default,{to:"/api/"+t},r):n.createElement(a.default,{to:"/api/"+("current"===l.version?"next":l.version)+"/"+t},r)}},20184:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>w,frontMatter:()=>p,metadata:()=>u,toc:()=>m});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=r(88995);r(14959);const l="import { gotScraping } from 'got-scraping';\n\n// Get the HTML of a web page\nconst { body } = await gotScraping({ url: 'https://www.example.com' });\nconsole.log(body);\n";var s=["components"],p={id:"crawl-single-url",title:"Crawl a single URL"},c=void 0,u={unversionedId:"examples/crawl-single-url",id:"version-3.3/examples/crawl-single-url",title:"Crawl a single URL",description:"This example uses the got-scraping npm package",source:"@site/versioned_docs/version-3.3/examples/crawl_single_url.mdx",sourceDirName:"examples",slug:"/examples/crawl-single-url",permalink:"/docs/3.3/examples/crawl-single-url",draft:!1,tags:[],version:"3.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1692663205,formattedLastUpdatedAt:"Aug 22, 2023",frontMatter:{id:"crawl-single-url",title:"Crawl a single URL"},sidebar:"docs",previous:{title:"Crawl a website with relative links",permalink:"/docs/3.3/examples/crawl-relative-links"},next:{title:"Crawl a sitemap",permalink:"/docs/3.3/examples/crawl-sitemap"}},d={},m=[],f={toc:m},g="wrapper";function w(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)(g,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example uses the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apify/got-scraping",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"got-scraping"))," npm package\nto grab the HTML of a web page."),(0,o.kt)(i.Z,{className:"language-js",mdxType:"CodeBlock"},l),(0,o.kt)("p",null,"If you don't want to hard-code the URL into the script, refer to the ",(0,o.kt)("a",{parentName:"p",href:"./accept-user-input",target:null,rel:null},"Accept User Input")," example."))}w.isMDXComponent=!0},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.5.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"ts-node -T ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.5.2","@crawlee/browser":"3.5.2","@crawlee/browser-pool":"3.5.2","@crawlee/cheerio":"3.5.2","@crawlee/cli":"3.5.2","@crawlee/core":"3.5.2","@crawlee/http":"3.5.2","@crawlee/jsdom":"3.5.2","@crawlee/linkedom":"3.5.2","@crawlee/playwright":"3.5.2","@crawlee/puppeteer":"3.5.2","@crawlee/utils":"3.5.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"<= 2.x","puppeteer":"<= 21.1"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);