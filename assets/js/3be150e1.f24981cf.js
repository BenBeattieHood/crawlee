"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9501],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?o.createElement(g,i(i({ref:t},c),{},{components:n})):o.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23612:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(67294),a=n(34334),r=n(35281),i=n(95999);const l={admonition:"admonition_LlT9",admonitionHeading:"admonitionHeading_tbUL",admonitionIcon:"admonitionIcon_kALy",admonitionContent:"admonitionContent_S0QG"};var s={note:{infimaClassName:"secondary",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:o.createElement(i.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:o.createElement(i.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:o.createElement(i.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:o.createElement(i.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 16 16"},o.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:o.createElement(i.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},u={secondary:"note",important:"info",success:"tip",warning:"danger"};function c(e){var t,n=function(e){var t=o.Children.toArray(e),n=t.find((function(e){var t;return o.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),a=o.createElement(o.Fragment,null,t.filter((function(e){return e!==n})));return{mdxAdmonitionTitle:n,rest:a}}(e.children),a=n.mdxAdmonitionTitle,r=n.rest;return Object.assign({},e,{title:null!=(t=e.title)?t:a,children:r})}function d(e){var t=c(e),n=t.children,i=t.type,d=t.title,p=t.icon,m=function(e){var t,n=null!=(t=u[e])?t:e,o=s[n];return o||(console.warn('No admonition config found for admonition type "'+n+'". Using Info as fallback.'),s.info)}(i),g=null!=d?d:m.label,h=m.iconComponent,f=null!=p?p:o.createElement(h,null);return o.createElement("div",{className:(0,a.Z)(r.k.common.admonition,r.k.common.admonitionType(e.type),"alert","alert--"+m.infimaClassName,l.admonition)},o.createElement("div",{className:l.admonitionHeading},o.createElement("span",{className:l.admonitionIcon},f),g),o.createElement("div",{className:l.admonitionContent},n))}},14959:(e,t,n)=>{n.d(t,{Z:()=>u});var o=n(67294),a=n(39960),r=n(74477),i=n(52263),l=n(50643).version.split("."),s=[l[0],l[1]].join(".");const u=function(e){var t=e.to,n=e.children,l=(0,r.E)();return(0,i.default)().siteConfig.presets[0][1].docs.disableVersioning||l.version===s?o.createElement(a.default,{to:"/api/"+t},n):o.createElement(a.default,{to:"/api/"+("current"===l.version?"next":l.version)+"/"+t},n)}},95093:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=n(14959),l=(n(23612),["components"]),s={id:"refactoring",title:"Refactoring",description:"Your first steps into the world of scraping with Crawlee"},u=void 0,c={unversionedId:"introduction/refactoring",id:"version-3.1/introduction/refactoring",title:"Refactoring",description:"Your first steps into the world of scraping with Crawlee",source:"@site/versioned_docs/version-3.1/introduction/08-refactoring.mdx",sourceDirName:"introduction",slug:"/introduction/refactoring",permalink:"/docs/3.1/introduction/refactoring",draft:!1,tags:[],version:"3.1",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1692663205,formattedLastUpdatedAt:"Aug 22, 2023",sidebarPosition:8,frontMatter:{id:"refactoring",title:"Refactoring",description:"Your first steps into the world of scraping with Crawlee"},sidebar:"docs",previous:{title:"Saving data",permalink:"/docs/3.1/introduction/saving-data"},next:{title:"Guides",permalink:"/docs/3.1/guides"}},d={},p=[{value:"Routing",id:"routing",level:2},{value:"Splitting your code into multiple files",id:"splitting-your-code-into-multiple-files",level:2},{value:"Using Crawlee <code>log</code> instead of <code>console.log</code>",id:"using-crawlee-log-instead-of-consolelog",level:2},{value:"Using a router to structure your crawling",id:"using-a-router-to-structure-your-crawling",level:2},{value:"Learning more about web scraping",id:"learning-more-about-web-scraping",level:2},{value:"Running your crawler in the Cloud",id:"running-your-crawler-in-the-cloud",level:2},{value:"Thank you! \ud83c\udf89",id:"thank-you-",level:2}],m={toc:p},g="wrapper";function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)(g,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"It may seem that the data is extracted and the crawler is done, but honestly, this is just the beginning. For the sake of brevity, we've completely omitted error handling, proxies, logging, architecture, tests, documentation and other stuff that a reliable software should have. The good thing is, ",(0,r.kt)("strong",{parentName:"p"},"error handling is mostly done by Crawlee itself"),", so no worries on that front, unless you need some custom magic."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you've got to this point and are wondering where all the ",(0,r.kt)("strong",{parentName:"p"},"anti-blocking, bot-protection avoiding stealthy features")," are, you're right, we haven't shown you any. But that's the point! They are ",(0,r.kt)("strong",{parentName:"p"},"automatically used")," with the default configuration."),(0,r.kt)("p",{parentName:"admonition"},"That does not mean the default configuration can handle everything, but it should get you far enough. If you want to learn more, browse the ",(0,r.kt)("a",{parentName:"p",href:"../guides/avoid-blocking",target:null,rel:null},"Avoid getting blocked"),", ",(0,r.kt)("a",{parentName:"p",href:"../guides/proxy-management",target:null,rel:null},"Proxy management")," and ",(0,r.kt)("a",{parentName:"p",href:"../guides/session-management",target:null,rel:null},"Session management")," guides.")),(0,r.kt)("p",null,"Anyway, to promote good coding practices, let's look at how you can use a ",(0,r.kt)(i.Z,{to:"core/class/Router",mdxType:"ApiLink"},(0,r.kt)("inlineCode",{parentName:"p"},"Router"))," to better structure your crawler code."),(0,r.kt)("h2",{id:"routing"},"Routing"),(0,r.kt)("p",null,"In the following code we've made several changes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Split the code into multiple files."),(0,r.kt)("li",{parentName:"ul"},"Replaced ",(0,r.kt)("inlineCode",{parentName:"li"},"console.log")," with the Crawlee logger for nicer, colourful logs."),(0,r.kt)("li",{parentName:"ul"},"Added a ",(0,r.kt)("inlineCode",{parentName:"li"},"Router")," to make our routing cleaner, without ",(0,r.kt)("inlineCode",{parentName:"li"},"if")," clauses.")),(0,r.kt)("p",null,"In our ",(0,r.kt)("inlineCode",{parentName:"p"},"main.mjs")," file, we place the general structure of the crawler:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/main.mjs"',title:'"src/main.mjs"'},"import { PlaywrightCrawler, log } from 'crawlee';\nimport { router } from './routes.js';\n\n// This is better set with CRAWLEE_LOG_LEVEL env var\n// or a configuration option. This is just for show \ud83d\ude08\nlog.setLevel(log.LEVELS.DEBUG);\n\nlog.debug('Setting up crawler.');\nconst crawler = new PlaywrightCrawler({\n    // Instead of the long requestHandler with\n    // if clauses we provide a router instance.\n    requestHandler: router,\n});\n\nlog.debug('Adding requests to the queue.');\nawait crawler.addRequests(['https://apify.com/store']);\n\n// crawler.run has its own logs \ud83d\ude42\nawait crawler.run();\n")),(0,r.kt)("p",null,"Then in a separate ",(0,r.kt)("inlineCode",{parentName:"p"},"routes.mjs")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/routes.mjs"',title:'"src/routes.mjs"'},"import { createPlaywrightRouter, Dataset } from 'crawlee';\n\n// createPlaywrightRouter() is only a helper to get better\n// intellisense and typings. You can use Router.create() too.\nexport const router = createPlaywrightRouter();\n\n// This replaces the request.label === DETAIL branch of the if clause.\nrouter.addHandler('DETAIL', async ({ request, page, log }) => {\n    log.debug(`Extracting data: ${request.url}`)\n    const urlParts = request.url.split('/').slice(-2);\n    const modifiedTimestamp = await page.locator('time[datetime]').getAttribute('datetime');\n    const runsRow = page.locator('ul.ActorHeader-stats > li').filter({ hasText: 'Runs' });\n    const runCountString = await runsRow.locator('span').last().textContent();\n\n    const results = {\n        url: request.url,\n        uniqueIdentifier: urlParts.join('/'),\n        owner: urlParts[0],\n        title: await page.locator('h1').textContent(),\n        description: await page.locator('span.actor-description').textContent(),\n        modifiedDate: new Date(Number(modifiedTimestamp)),\n        runCount: Number(runCountString.replaceAll(',', '')),\n    }\n\n    log.debug(`Saving data: ${request.url}`)\n    await Dataset.pushData(results);\n});\n\n// This is a fallback route which will handle the start URL\n// as well as the LIST labelled URLs.\nrouter.addDefaultHandler(async ({ request, page, enqueueLinks, log }) => {\n    log.debug(`Enqueueing pagination: ${request.url}`)\n    await page.waitForSelector('.ActorStorePagination-pages a');\n    await enqueueLinks({\n        selector: '.ActorStorePagination-pages > a',\n        label: 'LIST',\n    })\n    log.debug(`Enqueueing actor details: ${request.url}`)\n    await page.waitForSelector('.ActorStoreItem');\n    await enqueueLinks({\n        selector: '.ActorStoreItem',\n        label: 'DETAIL', // <= note the different label\n    })\n});\n")),(0,r.kt)("p",null,"Let's describe the changes a bit more in detail. We hope that in the end, you will agree that this structure makes the actor more readable and manageable."),(0,r.kt)("h2",{id:"splitting-your-code-into-multiple-files"},"Splitting your code into multiple files"),(0,r.kt)("p",null,"There's no reason not to split your code into multiple files and keep your logic separate. Less code in a single file means less code you need to think about at any time, and that's good. We would most likely go even further and split even the routes into separate files."),(0,r.kt)("h2",{id:"using-crawlee-log-instead-of-consolelog"},"Using Crawlee ",(0,r.kt)("inlineCode",{parentName:"h2"},"log")," instead of ",(0,r.kt)("inlineCode",{parentName:"h2"},"console.log")),(0,r.kt)("p",null,"We won't go to great lengths here to talk about ",(0,r.kt)("inlineCode",{parentName:"p"},"log")," object from Crawlee, because you can read it all in the ",(0,r.kt)(i.Z,{to:"core/class/Log",mdxType:"ApiLink"},"documentation"),", but there's just one thing that we need to stress: ",(0,r.kt)("strong",{parentName:"p"},"log levels"),"."),(0,r.kt)("p",null,"Crawlee ",(0,r.kt)("inlineCode",{parentName:"p"},"log")," has multiple log levels, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"log.debug"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"log.info")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"log.warning"),". It not only makes your log more readable, but it also allows selective turning off of some levels by either calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"log.setLevel()")," function or by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"CRAWLEE_LOG_LEVEL")," environment variable. This is huge! Because you can now add a lot of debug logs in your actor, which will help you when something goes wrong and turn them on or off with a simple configuration change."),(0,r.kt)("p",null,"The punch line? Use ",(0,r.kt)("inlineCode",{parentName:"p"},"log")," from Crawlee instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log")," now and thank us later when something goes wrong!"),(0,r.kt)("h2",{id:"using-a-router-to-structure-your-crawling"},"Using a router to structure your crawling"),(0,r.kt)("p",null,"At first, it might seem more readable using just a simple ",(0,r.kt)("inlineCode",{parentName:"p"},"if / else")," statement to select different logic based on the crawled pages, but trust us, it becomes far less impressive when working with more than two different pages, and it definitely starts to fall apart when the logic to handle each page spans tens or hundreds of lines of code."),(0,r.kt)("p",null,"It's good practice in any programming language to split your logic into bite-sized chunks that are easy to read and reason about. Scrolling through a thousand line long ",(0,r.kt)("inlineCode",{parentName:"p"},"requestHandler()")," where everything interacts with everything and variables can be used everywhere is not a beautiful thing to do and a pain to debug. That's why we prefer the separation of routes into their own files."),(0,r.kt)("h2",{id:"learning-more-about-web-scraping"},"Learning more about web scraping"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you want to learn more about web scraping and browser automation, check out the ",(0,r.kt)("a",{parentName:"p",href:"https://developers.apify.com/academy",target:"_blank",rel:"noopener"},"Apify Academy"),". It's full of courses and tutorials on the topic. From beginner to advanced. And the best thing: ",(0,r.kt)("strong",{parentName:"p"},"It's free and open source")," \u2764\ufe0f")),(0,r.kt)("h2",{id:"running-your-crawler-in-the-cloud"},"Running your crawler in the Cloud"),(0,r.kt)("p",null,"Now that you have your crawler ready, it's the right time to think about where you want to run it. If you used the CLI to bootstrap your project, you already have a ",(0,r.kt)("strong",{parentName:"p"},"Dockerfile")," ready. To read more about how to run this Dockerfile in the cloud, check out the ",(0,r.kt)("a",{parentName:"p",href:"../guides/apify-platform",target:null,rel:null},"Apify Platform guide"),"."),(0,r.kt)("h2",{id:"thank-you-"},"Thank you! \ud83c\udf89"),(0,r.kt)("p",null,"That's it! Thanks for reading the whole introduction and if there's anything wrong, please \ud83d\ude4f let us know on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apify/crawlee",target:"_blank",rel:"noopener"},"GitHub")," or in our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/invite/jyEM2PRvMU",target:"_blank",rel:"noopener"},"Discord community"),". Happy scraping! \ud83d\udc4b"))}h.isMDXComponent=!0},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.5.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"ts-node -T ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.5.2","@crawlee/browser":"3.5.2","@crawlee/browser-pool":"3.5.2","@crawlee/cheerio":"3.5.2","@crawlee/cli":"3.5.2","@crawlee/core":"3.5.2","@crawlee/http":"3.5.2","@crawlee/jsdom":"3.5.2","@crawlee/linkedom":"3.5.2","@crawlee/playwright":"3.5.2","@crawlee/puppeteer":"3.5.2","@crawlee/utils":"3.5.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"<= 2.x","puppeteer":"<= 21.1"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);