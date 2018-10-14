"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5869],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>w});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,w=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(w,s(s({ref:t},p),{},{components:r})):n.createElement(w,s({ref:t},p))}));function w(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},14959:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(67294),a=r(39960),o=r(74477),s=r(52263),i=r(50643).version.split("."),l=[i[0],i[1]].join(".");const c=function(e){var t=e.to,r=e.children,i=(0,o.E)();return(0,s.default)().siteConfig.presets[0][1].docs.disableVersioning||i.version===l?n.createElement(a.default,{to:"/api/"+t},r):n.createElement(a.default,{to:"/api/"+("current"===i.version?"next":i.version)+"/"+t},r)}},51044:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>w,contentTitle:()=>u,default:()=>y,frontMatter:()=>d,metadata:()=>m,toc:()=>h});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=r(88995),i=r(14959);const l="import { Dataset, JSDOMCrawler, log, LogLevel } from 'crawlee';\n\n// Crawlers come with various utilities, e.g. for logging.\n// Here we use debug level of logging to improve the debugging experience.\n// This functionality is optional!\nlog.setLevel(LogLevel.DEBUG);\n\n// Create an instance of the JSDOMCrawler class - a crawler\n// that automatically loads the URLs and parses their HTML using the jsdom library.\nconst crawler = new JSDOMCrawler({\n    // The crawler downloads and processes the web pages in parallel, with a concurrency\n    // automatically managed based on the available system memory and CPU (see AutoscaledPool class).\n    // Here we define some hard limits for the concurrency.\n    minConcurrency: 10,\n    maxConcurrency: 50,\n\n    // On error, retry each page at most once.\n    maxRequestRetries: 1,\n\n    // Increase the timeout for processing of each page.\n    requestHandlerTimeoutSecs: 30,\n\n    // Limit to 10 requests per one crawl\n    maxRequestsPerCrawl: 10,\n\n    // This function will be called for each URL to crawl.\n    // It accepts a single parameter, which is an object with options as:\n    // https://crawlee.dev/api/jsdom-crawler/interface/JSDOMCrawlerOptions#requestHandler\n    // We use for demonstration only 2 of them:\n    // - request: an instance of the Request class with information such as the URL that is being crawled and HTTP method\n    // - window: the JSDOM window object\n    async requestHandler({ request, window }) {\n        log.debug(`Processing ${request.url}...`);\n\n        // Extract data from the page\n        const title = window.document.title;\n        const h1texts: { text: string }[] = [];\n        window.document.querySelectorAll('h1').forEach((element) => {\n            h1texts.push({\n                text: element.textContent!,\n            });\n        });\n\n        // Store the results to the dataset. In local configuration,\n        // the data will be stored as JSON files in ./storage/datasets/default\n        await Dataset.pushData({\n            url: request.url,\n            title,\n            h1texts,\n        });\n    },\n\n    // This function is called if the page processing failed more than maxRequestRetries + 1 times.\n    failedRequestHandler({ request }) {\n        log.debug(`Request ${request.url} failed twice.`);\n    },\n});\n\n// Run the crawler and wait for it to finish.\nawait crawler.run([\n    'https://crawlee.dev',\n]);\n\nlog.debug('Crawler finished.');\n",c="import { JSDOMCrawler, log } from 'crawlee';\n\n// Create an instance of the JSDOMCrawler class - crawler that automatically \n// loads the URLs and parses their HTML using the jsdom library.\nconst crawler = new JSDOMCrawler({\n    // Setting the `runScripts` option to `true` allows the crawler to execute client-side \n    // JavaScript code on the page. This is required for some websites (such as the React application in this example), but may pose a security risk.\n    runScripts: true,\n    // This function will be called for each crawled URL.\n    // Here we extract the window object from the options and use it to extract data from the page.\n    requestHandler: async ({ window }) => {\n        const { document } = window;\n        // The `document` object is analogous to the `window.document` object you know from your favourite web browsers.\n        // Thanks to this, you can use the regular browser-side APIs here.\n        document.querySelectorAll('button')[12].click(); // 1\n        document.querySelectorAll('button')[15].click(); // +\n        document.querySelectorAll('button')[12].click(); // 1\n        document.querySelectorAll('button')[18].click(); // =\n\n        const result = document.querySelectorAll('.component-display')[0].childNodes[0] as Element;\n        // The result is passed to the console. Unlike with Playwright or Puppeteer crawlers, \n        // this console call goes to the Node.js console, not the browser console. All the code here runs right in Node.js!\n        log.info(result.innerHTML); // 2\n    },\n});\n\n// Run the crawler and wait for it to finish.\nawait crawler.run([\n    'https://ahfarmer.github.io/calculator/',\n]);\n\nlog.debug('Crawler finished.');";var p=["components"],d={id:"jsdom-crawler",title:"JSDOM crawler"},u=void 0,m={unversionedId:"examples/jsdom-crawler",id:"version-3.4/examples/jsdom-crawler",title:"JSDOM crawler",description:"This example demonstrates how to use JSDOMCrawler to interact with a website using jsdom DOM implementation.",source:"@site/versioned_docs/version-3.4/examples/jsdom_crawler.mdx",sourceDirName:"examples",slug:"/examples/jsdom-crawler",permalink:"/docs/3.4/examples/jsdom-crawler",draft:!1,tags:[],version:"3.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1692663205,formattedLastUpdatedAt:"Aug 22, 2023",frontMatter:{id:"jsdom-crawler",title:"JSDOM crawler"},sidebar:"docs",previous:{title:"HTTP crawler",permalink:"/docs/3.4/examples/http-crawler"},next:{title:"Dataset Map and Reduce methods",permalink:"/docs/3.4/examples/map-and-reduce"}},w={},h=[],f={toc:h},g="wrapper";function y(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)(g,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example demonstrates how to use ",(0,o.kt)(i.Z,{to:"jsdom-crawler/class/JSDOMCrawler",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"JSDOMCrawler"))," to interact with a website using ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/jsdom",target:"_blank",rel:"noopener"},"jsdom")," DOM implementation.\nHere the script will open a calculator app from the ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/community/examples.html",target:"_blank",rel:"noopener"},"React examples"),", click ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," ",(0,o.kt)("inlineCode",{parentName:"p"},"+")," ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," ",(0,o.kt)("inlineCode",{parentName:"p"},"=")," and extract the result."),(0,o.kt)(s.Z,{className:"language-ts",mdxType:"CodeBlock"},c),(0,o.kt)("p",null,"In the following example, we use ",(0,o.kt)(i.Z,{to:"jsdom-crawler/class/JSDOMCrawler",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"JSDOMCrawler"))," to crawl a list of URLs from an external file, load each URL using a plain HTTP request, parse the HTML using the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/jsdom",target:"_blank",rel:"noopener"},"jsdom")," DOM implementation and extract some data from it: the page title and all ",(0,o.kt)("inlineCode",{parentName:"p"},"h1")," tags."),(0,o.kt)(s.Z,{className:"language-ts",mdxType:"CodeBlock"},l))}y.isMDXComponent=!0},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.5.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"ts-node -T ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.5.2","@crawlee/browser":"3.5.2","@crawlee/browser-pool":"3.5.2","@crawlee/cheerio":"3.5.2","@crawlee/cli":"3.5.2","@crawlee/core":"3.5.2","@crawlee/http":"3.5.2","@crawlee/jsdom":"3.5.2","@crawlee/linkedom":"3.5.2","@crawlee/playwright":"3.5.2","@crawlee/puppeteer":"3.5.2","@crawlee/utils":"3.5.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"<= 2.x","puppeteer":"<= 21.1"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);