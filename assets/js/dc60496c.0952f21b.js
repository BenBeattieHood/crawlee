"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4938],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14959:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(67294),r=n(39960),i=n(74477),o=n(52263),s=n(50643).version.split("."),l=[s[0],s[1]].join(".");const p=function(e){var t=e.to,n=e.children,s=(0,i.E)();return(0,o.default)().siteConfig.presets[0][1].docs.disableVersioning||s.version===l?a.createElement(r.default,{to:"/api/"+t},n):a.createElement(r.default,{to:"/api/"+("current"===s.version?"next":s.version)+"/"+t},n)}},82857:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=(n(14959),["components"]),s={id:"scraping",title:"Scraping the Store",sidebar_label:"Scraping",description:"Your first steps into the world of scraping with Crawlee"},l=void 0,p={unversionedId:"introduction/scraping",id:"version-3.4/introduction/scraping",title:"Scraping the Store",description:"Your first steps into the world of scraping with Crawlee",source:"@site/versioned_docs/version-3.4/introduction/06-scraping.mdx",sourceDirName:"introduction",slug:"/introduction/scraping",permalink:"/docs/3.4/introduction/scraping",draft:!1,tags:[],version:"3.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1692663205,formattedLastUpdatedAt:"Aug 22, 2023",sidebarPosition:6,frontMatter:{id:"scraping",title:"Scraping the Store",sidebar_label:"Scraping",description:"Your first steps into the world of scraping with Crawlee"},sidebar:"docs",previous:{title:"Crawling",permalink:"/docs/3.4/introduction/crawling"},next:{title:"Saving data",permalink:"/docs/3.4/introduction/saving-data"}},c={},d=[{value:"Scraping the URL, Owner and Unique identifier",id:"scraping-the-url-owner-and-unique-identifier",level:3},{value:"Title",id:"title",level:3},{value:"Description",id:"description",level:3},{value:"Last modification date",id:"last-modification-date",level:3},{value:"Run count",id:"run-count",level:3},{value:"Trying it out",id:"trying-it-out",level:2},{value:"Next lesson",id:"next-lesson",level:2}],u={toc:d},m="wrapper";function h(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)(m,(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In the ",(0,i.kt)("a",{parentName:"p",href:"./real-world-project#choosing-the-data-you-need",target:null,rel:null},"Real-world project chapter"),", we created a list of the information we wanted to collect about the Actors in the Apify Store. Let's review that and figure out ways to access the data."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"URL"),(0,i.kt)("li",{parentName:"ul"},"Owner"),(0,i.kt)("li",{parentName:"ul"},"Unique identifier (such as ",(0,i.kt)("inlineCode",{parentName:"li"},"apify/web-scraper"),")"),(0,i.kt)("li",{parentName:"ul"},"Title"),(0,i.kt)("li",{parentName:"ul"},"Description"),(0,i.kt)("li",{parentName:"ul"},"Last modification date"),(0,i.kt)("li",{parentName:"ul"},"Number of runs")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"data to scrape",src:n(68991).Z,title:"Overview of data to be scraped.",width:"2850",height:"1628"})),(0,i.kt)("h3",{id:"scraping-the-url-owner-and-unique-identifier"},"Scraping the URL, Owner and Unique identifier"),(0,i.kt)("p",null,"Some information is lying right there in front of us without even having to touch the Actor detail pages. The ",(0,i.kt)("inlineCode",{parentName:"p"},"URL")," we already have - the ",(0,i.kt)("inlineCode",{parentName:"p"},"request.url"),". And by looking at it carefully, we realize that it already includes the ",(0,i.kt)("inlineCode",{parentName:"p"},"owner")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"unique identifier")," too. We can just split the ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," and be on our way then!"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"request.loadedUrl")," as well. Remember the difference: ",(0,i.kt)("inlineCode",{parentName:"p"},"request.url")," is what you enqueue, ",(0,i.kt)("inlineCode",{parentName:"p"},"request.loadedUrl")," is what gets processed (after possible redirects).")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// request.url = https://apify.com/apify/web-scraper\n\nconst urlParts = request.url.split('/').slice(-2); // ['apify', 'web-scraper']\nconst uniqueIdentifier = urlParts.join('/'); // 'apify/web-scraper'\nconst owner = urlParts[0]; // 'apify'\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"It's a matter of preference, whether to store this information separately in the resulting dataset, or not. Whoever uses the dataset can easily parse the ",(0,i.kt)("inlineCode",{parentName:"p"},"owner")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"URL"),", so should you duplicate the data unnecessarily? Our opinion is that unless the increased data consumption would be too large to bear, it's better to make the dataset as rich as possible. For example, someone might want to filter by ",(0,i.kt)("inlineCode",{parentName:"p"},"owner"),".")),(0,i.kt)("p",null,"Now it's time to add more data to the results. Let's open one of the Actor detail pages, for example the ",(0,i.kt)("a",{parentName:"p",href:"https://apify.com/apify/web-scraper",target:"_blank",rel:"noopener"},(0,i.kt)("inlineCode",{parentName:"a"},"apify/web-scraper"))," page and use our DevTools-Fu \ud83e\udd4b to figure out how to get the title of the Actor."),(0,i.kt)("h3",{id:"title"},"Title"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"actor title",src:n(69947).Z,title:"Finding actor title in DevTools.",width:"2872",height:"1672"})),(0,i.kt)("p",null,"By using the element selector tool, you can see that the title is there under an ",(0,i.kt)("inlineCode",{parentName:"p"},"<h1>")," tag, as titles should be. Web pages usually have only a single ",(0,i.kt)("inlineCode",{parentName:"p"},"<h1>")," tag, but this one has two. Because of that, we have to extend the selector with more information. The ",(0,i.kt)("inlineCode",{parentName:"p"},"<h1>")," tag is enclosed in a ",(0,i.kt)("inlineCode",{parentName:"p"},"<div>")," with class ",(0,i.kt)("inlineCode",{parentName:"p"},"ActorHeader-identificator"),". We can leverage this to create a combined selector ",(0,i.kt)("inlineCode",{parentName:"p"},".ActorHeader-identificator h1"),". It selects any ",(0,i.kt)("inlineCode",{parentName:"p"},"<h1>")," element that is a child of a different element with the class ",(0,i.kt)("inlineCode",{parentName:"p"},"ActorHeader-identificator"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Remember that you can press CTRL+F (or CMD+F on Mac) in the ",(0,i.kt)("strong",{parentName:"p"},"Elements")," tab of DevTools to open the search bar where you can quickly search for elements using their selectors. Always verify your scraping process and assumptions using the DevTools. It's faster than changing the crawler code all the time.")),(0,i.kt)("p",null,"To get the title, we need to find it using ",(0,i.kt)("inlineCode",{parentName:"p"},"Playwright")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},".ActorHeader-identificator h1")," locator, which selects the ",(0,i.kt)("inlineCode",{parentName:"p"},"<h1>")," element we're looking for, or throws, if it finds more than one. That's good. It's usually better to crash the crawler than silently return bad data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const title = await page.locator('.ActorHeader-identificator h1').textContent();\n")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"Using the DevTools, we find that the Actor description is inside a ",(0,i.kt)("inlineCode",{parentName:"p"},"<p>")," tag with a class ",(0,i.kt)("inlineCode",{parentName:"p"},"ActorHeader-description"),". And since there's no other ",(0,i.kt)("inlineCode",{parentName:"p"},"<p>")," with that class on the page, we can safely use it."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"actor description selector",src:n(67737).Z,title:"Finding actor description in DevTools.",width:"2872",height:"1672"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const description = await page.locator('p.ActorHeader-description').textContent();\n")),(0,i.kt)("h3",{id:"last-modification-date"},"Last modification date"),(0,i.kt)("p",null,"DevTools tell us that the ",(0,i.kt)("inlineCode",{parentName:"p"},"modifiedDate")," can be found in a ",(0,i.kt)("inlineCode",{parentName:"p"},"<time>")," element with a ",(0,i.kt)("inlineCode",{parentName:"p"},"datetime")," property. You can use the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors",target:"_blank",rel:"noopener"},"attribute CSS selector")," to get it."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"actor last modification date selector",src:n(76574).Z,title:"Finding actor last modification date in DevTools.",width:"2872",height:"1672"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const modifiedTimestamp = await page.locator('time[datetime]').getAttribute('datetime');\nconst modifiedDate = new Date(Number(modifiedTimestamp));\n")),(0,i.kt)("p",null,"It might look a little too complex at first glance, but let's walk through it. We find the right ",(0,i.kt)("inlineCode",{parentName:"p"},"<time>")," element, and then we read its ",(0,i.kt)("inlineCode",{parentName:"p"},"datetime")," attribute, because that's where a unix timestamp is stored as a ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,i.kt)("p",null,"But we would much rather see a readable date in our results, not a unix timestamp, so we need to convert it. Unfortunately the ",(0,i.kt)("inlineCode",{parentName:"p"},"new Date()")," constructor will not accept a ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", so we cast the ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," to a ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Number()")," function before actually calling ",(0,i.kt)("inlineCode",{parentName:"p"},"new Date()"),". Phew!"),(0,i.kt)("h3",{id:"run-count"},"Run count"),(0,i.kt)("p",null,"We're finishing up with the ",(0,i.kt)("inlineCode",{parentName:"p"},"runCount"),". There's no specific element like ",(0,i.kt)("inlineCode",{parentName:"p"},"<time>"),", so we need to create a complex selector and then do a transformation on the result."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const runsRow = page.locator('ul.ActorHeader-userMedallion > li').filter({ hasText: 'Runs' });\nconst runCountString = await runsRow.textContent();\nconst runCount = runCountString.replace('Runs ', '');\n")),(0,i.kt)("p",null,"The code looks complicated, but it only reads that we're looking for an ",(0,i.kt)("inlineCode",{parentName:"p"},'<ul class="ActorHeader-userMedallion ...">')," element and within that element we're looking for the ",(0,i.kt)("inlineCode",{parentName:"p"},"<li>")," element that includes the text ",(0,i.kt)("strong",{parentName:"p"},"Runs"),". We're only interested in the number of runs. So we extract the count from the last (second) ",(0,i.kt)("inlineCode",{parentName:"p"},"<li>"),' element. But it contains the "Runs " string as well, so we remove the "Runs " by replacing the word with empty string.'),(0,i.kt)("p",null,"And there we have it! All the data we needed. For the sake of completeness, let's add all the properties together, and we're good to go."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const urlParts = request.url.split('/').slice(-2);\nconst uniqueIdentifier = urlParts.join('/');\nconst owner = urlParts[0];\n\nconst title = await page.locator('.ActorHeader-identificator h1').textContent();\n\nconst description = await page.locator('p.ActorHeader-description').textContent();\n\nconst modifiedTimestamp = await page.locator('time[datetime]').getAttribute('datetime');\nconst modifiedDate = new Date(Number(modifiedTimestamp));\n\nconst runsRow = page.locator('ul.ActorHeader-userMedallion > li').filter({ hasText: 'Runs' });\nconst runCountString = await runsRow.textContent();\nconst runCount = runCountString.replace('Runs ', '');\n")),(0,i.kt)("h2",{id:"trying-it-out"},"Trying it out"),(0,i.kt)("p",null,"We have everything we need so grab our newly created scraping logic, dump it into our original ",(0,i.kt)("inlineCode",{parentName:"p"},"requestHandler()")," and see the magic happen!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { PlaywrightCrawler } from 'crawlee';\n\nconst crawler = new PlaywrightCrawler({\n    requestHandler: async ({ page, request, enqueueLinks }) => {\n        console.log(`Processing: ${request.url}`)\n        if (request.label === 'DETAIL') {\n            const urlParts = request.url.split('/').slice(-2);\n            const modifiedTimestamp = await page.locator('time[datetime]').getAttribute('datetime');\n            const runsRow = page.locator('ul.ActorHeader-userMedallion > li').filter({ hasText: 'Runs' });\n            const runCountString = await runsRow.textContent();\n            const results = {\n                url: request.url,\n                uniqueIdentifier: urlParts.join('/'),\n                owner: urlParts[0],\n                title: await page.locator('.ActorHeader-identificator h1').textContent(),\n                description: await page.locator('p.ActorHeader-description').textContent(),\n                modifiedDate: new Date(Number(modifiedTimestamp)),\n                runCount: runCountString.replace('Runs ', ''),\n            }\n\n            console.log(results);\n        } else {\n            await page.waitForSelector('.ActorStorePagination-buttons a');\n            await enqueueLinks({\n                selector: '.ActorStorePagination-buttons a',\n                label: 'LIST',\n            })\n            await page.waitForSelector('div[data-test=\"actorCard\"] a');\n            await enqueueLinks({\n                selector: 'div[data-test=\"actorCard\"] a',\n                label: 'DETAIL', // <= note the different label\n            })\n        }\n    }\n});\n\nawait crawler.run(['https://apify.com/store']);\n")),(0,i.kt)("p",null,"When you run the crawler, you will see the crawled URLs and their scraped data printed to the console. The output will look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "url": "https://apify.com/clockworks/tiktok-scraper",\n    "uniqueIdentifier": "clockworks/tiktok-scraper",\n    "owner": "clockworks",\n    "title": "TikTok Scraper",\n    "description": "Powerful TikTok scraper to extract data from TikTok videos, hashtags, and users. Use it to scrape TikTok profiles, hashtags, posts, URLs, numbers of shares, followers, hearts, names, video, and music-related data. Download TikTok data as a HTML, JSON, CSV, Excel, or XML doc.",\n    "modifiedDate": "2023-04-26T12:13:19.387Z",\n    "runCount": "1.6M"\n}\n')),(0,i.kt)("h2",{id:"next-lesson"},"Next lesson"),(0,i.kt)("p",null,"In the next lesson, we will show you how to save the data you scraped to the disk for further processing."))}h.isMDXComponent=!0},67737:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/description-a5ac528a9c4af38988a2094d8f6f2813.jpg"},76574:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/modified-date-539eea38a5043b77f5dc7fd55eec84c7.jpg"},68991:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/scraping-practice-122828a2447ee96f399a9dbd4bcd092a.jpg"},69947:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/title-48a648970537d0ef749c75a7f7f7ef04.jpg"},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.5.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"ts-node -T ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.5.2","@crawlee/browser":"3.5.2","@crawlee/browser-pool":"3.5.2","@crawlee/cheerio":"3.5.2","@crawlee/cli":"3.5.2","@crawlee/core":"3.5.2","@crawlee/http":"3.5.2","@crawlee/jsdom":"3.5.2","@crawlee/linkedom":"3.5.2","@crawlee/playwright":"3.5.2","@crawlee/puppeteer":"3.5.2","@crawlee/utils":"3.5.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"<= 2.x","puppeteer":"<= 21.1"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);