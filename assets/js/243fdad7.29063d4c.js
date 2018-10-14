"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6036],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),h=n,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return r?a.createElement(m,o(o({ref:t},c),{},{components:r})):a.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},14959:(e,t,r)=>{r.d(t,{Z:()=>p});var a=r(67294),n=r(39960),i=r(74477),o=r(52263),l=r(50643).version.split("."),s=[l[0],l[1]].join(".");const p=function(e){var t=e.to,r=e.children,l=(0,i.E)();return(0,o.default)().siteConfig.presets[0][1].docs.disableVersioning||l.version===s?a.createElement(n.default,{to:"/api/"+t},r):a.createElement(n.default,{to:"/api/"+("current"===l.version?"next":l.version)+"/"+t},r)}},45035:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>w,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),o=r(14959),l=["components"],s={id:"cheerio-crawler-guide",title:"CheerioCrawler guide",sidebar_label:"CheerioCrawler",description:"Your first steps into the world of scraping with Crawlee"},p=void 0,c={unversionedId:"guides/cheerio-crawler-guide",id:"version-3.1/guides/cheerio-crawler-guide",title:"CheerioCrawler guide",description:"Your first steps into the world of scraping with Crawlee",source:"@site/versioned_docs/version-3.1/guides/cheerio_crawler.mdx",sourceDirName:"guides",slug:"/guides/cheerio-crawler-guide",permalink:"/docs/3.1/guides/cheerio-crawler-guide",draft:!1,tags:[],version:"3.1",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1692663205,formattedLastUpdatedAt:"Aug 22, 2023",frontMatter:{id:"cheerio-crawler-guide",title:"CheerioCrawler guide",sidebar_label:"CheerioCrawler",description:"Your first steps into the world of scraping with Crawlee"},sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/3.1/guides/configuration"},next:{title:"JavaScript rendering",permalink:"/docs/3.1/guides/javascript-rendering"}},u={},d=[{value:"What is Cheerio",id:"what-is-cheerio",level:2},{value:"How the crawler works",id:"how-the-crawler-works",level:2},{value:"When to use <code>CheerioCrawler</code>",id:"when-to-use-cheeriocrawler",level:2},{value:"Example use of Cheerio",id:"example-use-of-cheerio",level:2},{value:"Get text content of an element",id:"get-text-content-of-an-element",level:3},{value:"Find all links on a page",id:"find-all-links-on-a-page",level:3},{value:"Other examples",id:"other-examples",level:3}],h={toc:d},m="wrapper";function w(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)(m,(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u200b",(0,i.kt)(o.Z,{to:"cheerio-crawler/class/CheerioCrawler",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"CheerioCrawler"))," is our simplest and fastest crawler. If you're familiar with ",(0,i.kt)("a",{parentName:"p",href:"https://jquery.com/",target:"_blank",rel:"noopener"},"jQuery"),", you'll understand ",(0,i.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")," in minutes."),(0,i.kt)("h2",{id:"what-is-cheerio"},"What is Cheerio"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cheerio",target:"_blank",rel:"noopener"},"Cheerio")," is essentially ",(0,i.kt)("a",{parentName:"p",href:"https://jquery.com/",target:"_blank",rel:"noopener"},"jQuery")," for Node.js. It offers the same API, including the familiar ",(0,i.kt)("inlineCode",{parentName:"p"},"$")," object. You can use it, as you would use jQuery for manipulating the DOM of an HTML page. In crawling, you'll mostly use it to select the needed elements and extract their values - the data you're interested in. But jQuery runs in a browser and attaches directly to the browser's DOM. Where does ",(0,i.kt)("inlineCode",{parentName:"p"},"cheerio")," get its HTML? This is where the ",(0,i.kt)("inlineCode",{parentName:"p"},"Crawler")," part of ",(0,i.kt)(o.Z,{to:"cheerio-crawler/class/CheerioCrawler",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"CheerioCrawler"))," comes in."),(0,i.kt)("h2",{id:"how-the-crawler-works"},"How the crawler works"),(0,i.kt)("p",null,"\u200b",(0,i.kt)(o.Z,{to:"cheerio-crawler/class/CheerioCrawler",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"CheerioCrawler"))," crawls by making plain HTTP requests to the provided URLs using the specialized ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apify/got-scraping",target:"_blank",rel:"noopener"},"got-scraping")," HTTP client. The URLs are fed to the crawler using ",(0,i.kt)(o.Z,{to:"core/class/RequestQueue",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"RequestQueue")),". The HTTP responses it gets back are usually HTML pages. The same pages you would get in your browser when you first load a URL. But it can handle any content types with the help of the ",(0,i.kt)(o.Z,{to:"cheerio-crawler/interface/CheerioCrawlerOptions#additionalMimeTypes",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"additionalMimeTypes"))," option."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Modern web pages often do not serve all of their content in the first HTML response, but rather the first HTML contains links to other resources such as CSS and JavaScript that get downloaded afterwards, and together they create the final page. To crawl those, see ",(0,i.kt)(o.Z,{to:"puppeteer-crawler/class/PuppeteerCrawler",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler"))," and ",(0,i.kt)(o.Z,{to:"playwright-crawler/class/PlaywrightCrawler",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler")),".")),(0,i.kt)("p",null,"Once the page's HTML is retrieved, the crawler will pass it to ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cheerio",target:"_blank",rel:"noopener"},"Cheerio")," for parsing. The result is the typical ",(0,i.kt)("inlineCode",{parentName:"p"},"$")," function, which should be familiar to jQuery users. You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"$")," function to do all sorts of lookups and manipulation of the page's HTML, but in scraping, you will mostly use it to find specific HTML elements and extract their data."),(0,i.kt)("p",null,"Example use of Cheerio and its ",(0,i.kt)("inlineCode",{parentName:"p"},"$")," function in comparison to browser JavaScript:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// Return the text content of the <title> element.\ndocument.querySelector('title').textContent; // plain JS\n$('title').text(); // Cheerio\n\n// Return an array of all 'href' links on the page.\nArray.from(document.querySelectorAll('[href]')).map(el => el.href); // plain JS\n$('[href]')\n    .map((i, el) => $(el).attr('href'))\n    .get(); // Cheerio\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This is not to show that Cheerio is better than plain browser JavaScript. Some might actually prefer the more expressive way plain JS provides. Unfortunately, the browser JavaScript methods are not available in Node.js, so Cheerio is your best bet to do the parsing in Node.")),(0,i.kt)("h2",{id:"when-to-use-cheeriocrawler"},"When to use ",(0,i.kt)("inlineCode",{parentName:"h2"},"CheerioCrawler")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")," really shines when you need to cope with extremely high workloads. With just 4 GBs of memory and a single CPU core, you can scrape 500 or more pages a minute! ",(0,i.kt)("em",{parentName:"p"},"(assuming each page contains approximately 400KB of HTML)"),". To scrape this fast with a full browser scraper, such as the ",(0,i.kt)(o.Z,{to:"playwright-crawler/class/PlaywrightCrawler",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler")),", you'd need significantly more computing power."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Advantages:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Extremely fast and cheap to run"),(0,i.kt)("li",{parentName:"ul"},"Easy to set up"),(0,i.kt)("li",{parentName:"ul"},"Familiar for jQuery users"),(0,i.kt)("li",{parentName:"ul"},"Automatically avoids some anti-scraping bans")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Disadvantages:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Does not work for websites that require JavaScript rendering"),(0,i.kt)("li",{parentName:"ul"},"May easily overload the target website with requests"),(0,i.kt)("li",{parentName:"ul"},"Does not enable any manipulation of the website before scraping")),(0,i.kt)("h2",{id:"example-use-of-cheerio"},"Example use of Cheerio"),(0,i.kt)("h3",{id:"get-text-content-of-an-element"},"Get text content of an element"),(0,i.kt)("p",null,"Finds the first ",(0,i.kt)("inlineCode",{parentName:"p"},"<h2>")," element and returns its text content."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"$('h2').text()\n")),(0,i.kt)("h3",{id:"find-all-links-on-a-page"},"Find all links on a page"),(0,i.kt)("p",null,"This snippet finds all ",(0,i.kt)("inlineCode",{parentName:"p"},"<a>")," elements which have the ",(0,i.kt)("inlineCode",{parentName:"p"},"href")," attribute and extracts the hrefs into an array."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"$('a[href]')\n    .map((i, el) => $(el).attr('href'))\n    .get();\n")),(0,i.kt)("h3",{id:"other-examples"},"Other examples"),(0,i.kt)("p",null,"Visit the ",(0,i.kt)("a",{parentName:"p",href:"../examples",target:null,rel:null},"Examples")," section to browse examples of ",(0,i.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")," usage. Almost all examples show ",(0,i.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")," code in their code tabs."))}w.isMDXComponent=!0},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.5.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"ts-node -T ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.5.2","@crawlee/browser":"3.5.2","@crawlee/browser-pool":"3.5.2","@crawlee/cheerio":"3.5.2","@crawlee/cli":"3.5.2","@crawlee/core":"3.5.2","@crawlee/http":"3.5.2","@crawlee/jsdom":"3.5.2","@crawlee/linkedom":"3.5.2","@crawlee/playwright":"3.5.2","@crawlee/puppeteer":"3.5.2","@crawlee/utils":"3.5.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"<= 2.x","puppeteer":"<= 21.1"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);