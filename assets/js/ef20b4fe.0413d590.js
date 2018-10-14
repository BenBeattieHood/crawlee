"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1468],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},14959:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(39960),o=r(74477),i=r(52263),s=r(50643).version.split("."),p=[s[0],s[1]].join(".");const l=function(e){var t=e.to,r=e.children,s=(0,o.E)();return(0,i.default)().siteConfig.presets[0][1].docs.disableVersioning||s.version===p?a.createElement(n.default,{to:"/api/"+t},r):a.createElement(n.default,{to:"/api/"+("current"===s.version?"next":s.version)+"/"+t},r)}},41366:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=r(88995);r(14959);const s="import { Dataset } from 'crawlee';\n\n// Retrieve or generate two items to be pushed\nconst data = [\n    {\n        id: 123,\n        name: 'foo',\n    },\n    {\n        id: 456,\n        name: 'bar',\n    },\n];\n\n// Push the two items to the default dataset\nawait Dataset.pushData(data);\n\n// Export the entirety of the dataset to a single file in\n// a key-value store named \"my-data\" under the key \"OUTPUT\"\nawait Dataset.exportToCSV('OUTPUT', { toKVS: 'my-data' });\n";var p=["components"],l={id:"export-entire-dataset",title:"Export entire dataset to one file"},c=void 0,d={unversionedId:"examples/export-entire-dataset",id:"version-3.1/examples/export-entire-dataset",title:"Export entire dataset to one file",description:'This Dataset example uses the exportToValue function to export the entire default dataset to a single CSV file into a key-value store named "my-data".',source:"@site/versioned_docs/version-3.1/examples/export_entire_dataset.mdx",sourceDirName:"examples",slug:"/examples/export-entire-dataset",permalink:"/docs/3.1/examples/export-entire-dataset",draft:!1,tags:[],version:"3.1",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1692663205,formattedLastUpdatedAt:"Aug 22, 2023",frontMatter:{id:"export-entire-dataset",title:"Export entire dataset to one file"},sidebar:"docs",previous:{title:"Crawl some links on a website",permalink:"/docs/3.1/examples/crawl-some-links"},next:{title:"Forms",permalink:"/docs/3.1/examples/forms"}},u={},m=[],f={toc:m},y="wrapper";function b(e){var t=e.components,r=(0,n.Z)(e,p);return(0,o.kt)(y,(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This ",(0,o.kt)("inlineCode",{parentName:"p"},"Dataset")," example uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"exportToValue"),' function to export the entire default dataset to a single CSV file into a key-value store named "my-data".'),(0,o.kt)(i.Z,{className:"language-js",mdxType:"CodeBlock"},s))}b.isMDXComponent=!0},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.5.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"ts-node -T ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.5.2","@crawlee/browser":"3.5.2","@crawlee/browser-pool":"3.5.2","@crawlee/cheerio":"3.5.2","@crawlee/cli":"3.5.2","@crawlee/core":"3.5.2","@crawlee/http":"3.5.2","@crawlee/jsdom":"3.5.2","@crawlee/linkedom":"3.5.2","@crawlee/playwright":"3.5.2","@crawlee/puppeteer":"3.5.2","@crawlee/utils":"3.5.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"<= 2.x","puppeteer":"<= 21.1"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);