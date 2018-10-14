"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7260],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(34334);const i={tabItem:"tabItem_Ymn6"};function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),i=a(34334),o=a(12466),l=a(70989),s=a(72389);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){var t=e.className,a=e.block,l=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],d=(0,o.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==l&&(d(t),s(n))},h=function(e){var t,a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var n,r=c.indexOf(e.currentTarget)+1;a=null!=(n=c[r])?n:c[0];break;case"ArrowLeft":var i,o=c.indexOf(e.currentTarget)-1;a=null!=(i=c[o])?i:c[c.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},u.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return c.push(e)},onKeyDown:h,onClick:m},o,{className:(0,i.Z)("tabs__item",p.tabItem,null==o?void 0:o.className,{"tabs__item--active":l===t})}),null!=a?a:t)})))}function c(e){var t=e.lazy,a=e.children,n=e.selectedValue,i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var o=i.find((function(e){return e.props.value===n}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function d(e){var t=(0,l.Y)(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",p.tabList)},r.createElement(u,(0,n.Z)({},e,t)),r.createElement(c,(0,n.Z)({},e,t)))}function m(e){var t=(0,s.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},70989:(e,t,a)=>{a.d(t,{Y:()=>d});var n=a(67294),r=a(16550),i=a(91980),o=a(67392),l=a(50012);function s(e){return function(e){var t,a;return null!=(t=null==(a=n.Children.map(e,(function(e){if(!e||(0,n.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,a=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:s(a);return function(e){var t=(0,o.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function u(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function c(e){var t=e.queryString,a=void 0!==t&&t,o=e.groupId,l=(0,r.k6)(),s=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:o});return[(0,i._X)(s),(0,n.useCallback)((function(e){if(s){var t=new URLSearchParams(l.location.search);t.set(s,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[s,l])]}function d(e){var t,a,r,i,o=e.defaultValue,s=e.queryString,d=void 0!==s&&s,m=e.groupId,h=p(e),f=(0,n.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!u({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:h})})),g=f[0],w=f[1],y=c({queryString:d,groupId:m}),b=y[0],k=y[1],v=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:m}.groupId),a=(0,l.Nk)(t),r=a[0],i=a[1],[r,(0,n.useCallback)((function(e){t&&i.set(e)}),[t,i])]),x=v[0],C=v[1],N=function(){var e=null!=b?b:x;return u({value:e,tabValues:h})?e:null}();return(0,n.useLayoutEffect)((function(){N&&w(N)}),[N]),{selectedValue:g,selectValue:(0,n.useCallback)((function(e){if(!u({value:e,tabValues:h}))throw new Error("Can't select invalid tab value="+e);w(e),k(e),C(e)}),[k,C,h]),tabValues:h}}},14959:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(67294),r=a(39960),i=a(74477),o=a(52263),l=a(50643).version.split("."),s=[l[0],l[1]].join(".");const p=function(e){var t=e.to,a=e.children,l=(0,i.E)();return(0,o.default)().siteConfig.presets[0][1].docs.disableVersioning||l.version===s?n.createElement(r.default,{to:"/api/"+t},a):n.createElement(r.default,{to:"/api/"+("current"===l.version?"next":l.version)+"/"+t},a)}},46630:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>b,frontMatter:()=>d,metadata:()=>h,toc:()=>g});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=a(88995),l=a(65488),s=a(85162);a(14959);const p="import { Dataset, PuppeteerCrawler } from 'crawlee';\nimport puppeteerExtra from 'puppeteer-extra';\nimport stealthPlugin from 'puppeteer-extra-plugin-stealth';\n\n// First, we tell puppeteer-extra to use the plugin (or plugins) we want.\n// Certain plugins might have options you can pass in - read up on their documentation!\npuppeteerExtra.use(stealthPlugin());\n\n// Create an instance of the PuppeteerCrawler class - a crawler\n// that automatically loads the URLs in headless Chrome / Puppeteer.\nconst crawler = new PuppeteerCrawler({\n    launchContext: {\n        // !!! You need to specify this option to tell Crawlee to use puppeteer-extra as the launcher !!!\n        launcher: puppeteerExtra,\n        launchOptions: {\n            // Other puppeteer options work as usual\n            headless: true,\n        },\n    },\n\n    // Stop crawling after several pages\n    maxRequestsPerCrawl: 50,\n\n    // This function will be called for each URL to crawl.\n    // Here you can write the Puppeteer scripts you are familiar with,\n    // with the exception that browsers and pages are automatically managed by Crawlee.\n    // The function accepts a single parameter, which is an object with the following fields:\n    // - request: an instance of the Request class with information such as URL and HTTP method\n    // - page: Puppeteer's Page object (see https://pptr.dev/#show=api-class-page)\n    async requestHandler({ request, page, enqueueLinks, log }) {\n        log.info(`Processing ${request.url}...`);\n\n        // A function to be evaluated by Puppeteer within the browser context.\n        const data = await page.$$eval('.athing', ($posts) => {\n            const scrapedData: { title: string; rank: string; href: string }[] = [];\n\n            // We're getting the title, rank and URL of each post on Hacker News.\n            $posts.forEach(($post) => {\n                scrapedData.push({\n                    title: $post.querySelector('.title a').innerText,\n                    rank: $post.querySelector('.rank').innerText,\n                    href: $post.querySelector('.title a').href,\n                });\n            });\n\n            return scrapedData;\n        });\n\n        // Store the results to the default dataset.\n        await Dataset.pushData(data);\n\n        // Find a link to the next page and enqueue it if it exists.\n        const infos = await enqueueLinks({\n            selector: '.morelink',\n        });\n\n        if (infos.processedRequests.length === 0) log.info(`${request.url} is the last page!`);\n    },\n\n    // This function is called if the page processing failed more than maxRequestRetries+1 times.\n    failedRequestHandler({ request, log }) {\n        log.error(`Request ${request.url} failed too many times.`);\n    },\n});\n\nawait crawler.addRequests(['https://news.ycombinator.com/']);\n\n// Run the crawler and wait for it to finish.\nawait crawler.run();\n\nconsole.log('Crawler finished.');\n",u="import { Dataset, PlaywrightCrawler } from 'crawlee';\n\n// For playwright-extra you will need to import the browser type itself that you want to use!\n// By default, PlaywrightCrawler uses chromium, but you can also use firefox or webkit.\nimport { chromium } from 'playwright-extra';\nimport stealthPlugin from 'puppeteer-extra-plugin-stealth';\n\n// First, we tell playwright-extra to use the plugin (or plugins) we want.\n// Certain plugins might have options you can pass in - read up on their documentation!\nchromium.use(stealthPlugin());\n\n// Create an instance of the PlaywrightCrawler class - a crawler\n// that automatically loads the URLs in headless Chrome / Playwright.\nconst crawler = new PlaywrightCrawler({\n    launchContext: {\n        // !!! You need to specify this option to tell Crawlee to use playwright-extra as the launcher !!!\n        launcher: chromium,\n        launchOptions: {\n            // Other playwright options work as usual\n            headless: true,\n        },\n    },\n\n    // Stop crawling after several pages\n    maxRequestsPerCrawl: 50,\n\n    // This function will be called for each URL to crawl.\n    // Here you can write the Puppeteer scripts you are familiar with,\n    // with the exception that browsers and pages are automatically managed by Crawlee.\n    // The function accepts a single parameter, which is an object with the following fields:\n    // - request: an instance of the Request class with information such as URL and HTTP method\n    // - page: Puppeteer's Page object (see https://pptr.dev/#show=api-class-page)\n    async requestHandler({ request, page, enqueueLinks, log }) {\n        log.info(`Processing ${request.url}...`);\n\n        // A function to be evaluated by Puppeteer within the browser context.\n        const data = await page.$$eval('.athing', ($posts) => {\n            const scrapedData: { title: string; rank: string; href: string }[] = [];\n\n            // We're getting the title, rank and URL of each post on Hacker News.\n            $posts.forEach(($post) => {\n                scrapedData.push({\n                    title: $post.querySelector('.title a').innerText,\n                    rank: $post.querySelector('.rank').innerText,\n                    href: $post.querySelector('.title a').href,\n                });\n            });\n\n            return scrapedData;\n        });\n\n        // Store the results to the default dataset.\n        await Dataset.pushData(data);\n\n        // Find a link to the next page and enqueue it if it exists.\n        const infos = await enqueueLinks({\n            selector: '.morelink',\n        });\n\n        if (infos.processedRequests.length === 0) log.info(`${request.url} is the last page!`);\n    },\n\n    // This function is called if the page processing failed more than maxRequestRetries+1 times.\n    failedRequestHandler({ request, log }) {\n        log.error(`Request ${request.url} failed too many times.`);\n    },\n});\n\nawait crawler.addRequests(['https://news.ycombinator.com/']);\n\n// Run the crawler and wait for it to finish.\nawait crawler.run();\n\nconsole.log('Crawler finished.');\n";var c=["components"],d={id:"playwright-puppeteer-extra",title:"Using puppeteer-extra and playwright-extra"},m=void 0,h={unversionedId:"examples/crawler-plugins/playwright-puppeteer-extra",id:"examples/crawler-plugins/playwright-puppeteer-extra",title:"Using puppeteer-extra and playwright-extra",description:"puppeteer-extra and playwright-extra are community-built",source:"@site/../docs/examples/crawler-plugins/index.mdx",sourceDirName:"examples/crawler-plugins",slug:"/examples/crawler-plugins/",permalink:"/docs/next/examples/crawler-plugins/",draft:!1,tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1692663205,formattedLastUpdatedAt:"Aug 22, 2023",frontMatter:{id:"playwright-puppeteer-extra",title:"Using puppeteer-extra and playwright-extra"},sidebar:"docs",previous:{title:"Crawl some links on a website",permalink:"/docs/next/examples/crawl-some-links"},next:{title:"Export entire dataset to one file",permalink:"/docs/next/examples/export-entire-dataset"}},f={},g=[],w={toc:g},y="wrapper";function b(e){var t=e.components,a=(0,r.Z)(e,c);return(0,i.kt)(y,(0,n.Z)({},w,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/puppeteer-extra",target:"_blank",rel:"noopener"},(0,i.kt)("inlineCode",{parentName:"a"},"puppeteer-extra"))," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/playwright-extra",target:"_blank",rel:"noopener"},(0,i.kt)("inlineCode",{parentName:"a"},"playwright-extra"))," are community-built\nlibraries that bring in a plugin system to enhance the usage of ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/puppeteer",target:"_blank",rel:"noopener"},(0,i.kt)("inlineCode",{parentName:"a"},"puppeteer"))," and\n",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/playwright",target:"_blank",rel:"noopener"},(0,i.kt)("inlineCode",{parentName:"a"},"playwright"))," respectively (bringing in extra functionality, like improving stealth for\nexample by using the ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/puppeteer-extra-plugin-stealth",target:"_blank",rel:"noopener"},(0,i.kt)("inlineCode",{parentName:"a"},"puppeteer-extra-plugin-stealth"))," plugin)."),(0,i.kt)("admonition",{title:"Available plugins",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can see a list of available plugins on the ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/puppeteer-extra#plugins",target:"_blank",rel:"noopener"},(0,i.kt)("inlineCode",{parentName:"a"},"puppeteer-extra"),"s plugin list"),"."),(0,i.kt)("p",{parentName:"admonition"},"For ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/playwright",target:"_blank",rel:"noopener"},(0,i.kt)("inlineCode",{parentName:"a"},"playwright")),", please see ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/playwright-extra#plugins",target:"_blank",rel:"noopener"},(0,i.kt)("inlineCode",{parentName:"a"},"playwright-extra"),"s plugin list")," instead.")),(0,i.kt)("p",null,"In this example, we'll show you how to use the ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/puppeteer-extra-plugin-stealth",target:"_blank",rel:"noopener"},(0,i.kt)("inlineCode",{parentName:"a"},"puppeteer-extra-plugin-stealth"))," plugin\nto help you avoid bot detections when crawling your target website."),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"puppeteer",label:"Puppeteer & puppeteer-extra",default:!0,mdxType:"TabItem"},(0,i.kt)("admonition",{title:"Before you begin",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Make sure you've installed the ",(0,i.kt)("inlineCode",{parentName:"p"},"puppeteer-extra")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"puppeteer-extra-plugin-stealth")," packages via your preferred package manager"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install puppeteer-extra puppeteer-extra-plugin-stealth\n"))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"To run this example on the Apify Platform, select the ",(0,i.kt)("inlineCode",{parentName:"p"},"apify/actor-node-puppeteer-chrome")," image for your Dockerfile.")),(0,i.kt)(o.Z,{className:"language-js",title:"src/crawler.ts",mdxType:"CodeBlock"},p)),(0,i.kt)(s.Z,{value:"playwright",label:"Playwright & playwright-extra",mdxType:"TabItem"},(0,i.kt)("admonition",{title:"Before you begin",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Make sure you've installed the ",(0,i.kt)("inlineCode",{parentName:"p"},"playwright-extra")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"puppeteer-extra-plugin-stealth")," packages via your preferred package manager"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install playwright-extra puppeteer-extra-plugin-stealth\n"))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"To run this example on the Apify Platform, select the ",(0,i.kt)("inlineCode",{parentName:"p"},"apify/actor-node-puppeteer-chrome")," image for your Dockerfile.")),(0,i.kt)(o.Z,{className:"language-js",title:"src/crawler.ts",mdxType:"CodeBlock"},u))))}b.isMDXComponent=!0},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.5.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"ts-node -T ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.5.2","@crawlee/browser":"3.5.2","@crawlee/browser-pool":"3.5.2","@crawlee/cheerio":"3.5.2","@crawlee/cli":"3.5.2","@crawlee/core":"3.5.2","@crawlee/http":"3.5.2","@crawlee/jsdom":"3.5.2","@crawlee/linkedom":"3.5.2","@crawlee/playwright":"3.5.2","@crawlee/puppeteer":"3.5.2","@crawlee/utils":"3.5.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"<= 2.x","puppeteer":"<= 21.1"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);