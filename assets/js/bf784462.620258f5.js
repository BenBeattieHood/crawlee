"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4591],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(f,s(s({ref:t},c),{},{components:r})):a.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},14959:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(39960),o=r(74477),s=r(52263),i=r(50643).version.split("."),p=[i[0],i[1]].join(".");const l=function(e){var t=e.to,r=e.children,i=(0,o.E)();return(0,s.default)().siteConfig.presets[0][1].docs.disableVersioning||i.version===p?a.createElement(n.default,{to:"/api/"+t},r):a.createElement(n.default,{to:"/api/"+("current"===i.version?"next":i.version)+"/"+t},r)}},82907:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>w,frontMatter:()=>c,metadata:()=>u,toc:()=>f});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),s=r(88995),i=r(14959);const p="import { Dataset, launchPuppeteer } from 'crawlee';\n\n// Launch the web browser.\nconst browser = await launchPuppeteer();\n\n// Create and navigate new page\nconsole.log('Open target page');\nconst page = await browser.newPage();\nawait page.goto('https://github.com/search/advanced');\n\n// Fill form fields and select desired search options\nconsole.log('Fill in search form');\nawait page.type('#adv_code_search input.js-advanced-search-input', 'apify-js');\nawait page.type('#search_from', 'apify');\nawait page.type('#search_date', '>2015');\nawait page.select('select#search_language', 'JavaScript');\n\n// Submit the form and wait for full load of next page\nconsole.log('Submit search form');\nawait Promise.all([\n    page.waitForNavigation(),\n    page.click('#adv_code_search button[type=\"submit\"]'),\n]);\n\n// Obtain and print list of search results\nconst results = await page.$$eval('div.f4.text-normal a', (nodes) => nodes.map((node) => ({\n    url: node.href,\n    name: node.innerText,\n})));\n\nconsole.log('Results:', results);\n\n// Store data in default dataset\nawait Dataset.pushData(results);\n\n// Close browser\nawait browser.close();\n";var l=["components"],c={id:"forms",title:"Forms"},d=void 0,u={unversionedId:"examples/forms",id:"version-3.3/examples/forms",title:"Forms",description:"This example demonstrates how to use PuppeteerCrawler to",source:"@site/versioned_docs/version-3.3/examples/forms.mdx",sourceDirName:"examples",slug:"/examples/forms",permalink:"/docs/3.3/examples/forms",draft:!1,tags:[],version:"3.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1692663205,formattedLastUpdatedAt:"Aug 22, 2023",frontMatter:{id:"forms",title:"Forms"},sidebar:"docs",previous:{title:"Export entire dataset to one file",permalink:"/docs/3.3/examples/export-entire-dataset"},next:{title:"HTTP crawler",permalink:"/docs/3.3/examples/http-crawler"}},m={},f=[],h={toc:f},y="wrapper";function w(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)(y,(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example demonstrates how to use ",(0,o.kt)(i.Z,{to:"puppeteer-crawler/class/PuppeteerCrawler",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler"))," to\nautomatically fill and submit a search form to look up repositories on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com",target:"_blank",rel:"noopener"},"GitHub")," using headless Chrome / Puppeteer.\nThe crawler first fills in the search term, repository owner, start date and language of the repository, then submits the form\nand prints out the results. Finally, the results are saved either on the Apify platform to the\ndefault ",(0,o.kt)(i.Z,{to:"core/class/Dataset",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"dataset"))," or on the local machine as JSON files in ",(0,o.kt)("inlineCode",{parentName:"p"},"./storage/datasets/default"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To run this example on the Apify Platform, select the ",(0,o.kt)("inlineCode",{parentName:"p"},"apify/actor-node-puppeteer-chrome")," image for your Dockerfile.")),(0,o.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},p))}w.isMDXComponent=!0},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.5.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"ts-node -T ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.5.2","@crawlee/browser":"3.5.2","@crawlee/browser-pool":"3.5.2","@crawlee/cheerio":"3.5.2","@crawlee/cli":"3.5.2","@crawlee/core":"3.5.2","@crawlee/http":"3.5.2","@crawlee/jsdom":"3.5.2","@crawlee/linkedom":"3.5.2","@crawlee/playwright":"3.5.2","@crawlee/puppeteer":"3.5.2","@crawlee/utils":"3.5.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"<= 2.x","puppeteer":"<= 21.1"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);