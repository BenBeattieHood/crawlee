"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6775],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(34334);const o={tabItem:"tabItem_Ymn6"};function l(e){var t=e.children,r=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(87462),a=r(67294),o=r(34334),l=r(12466),i=r(70989),s=r(72389);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){var t=e.className,r=e.block,i=e.selectedValue,s=e.selectValue,u=e.tabValues,p=[],d=(0,l.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,r=p.indexOf(t),n=u[r].value;n!==i&&(d(t),s(n))},h=function(e){var t,r=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var n,a=p.indexOf(e.currentTarget)+1;r=null!=(n=p[a])?n:p[0];break;case"ArrowLeft":var o,l=p.indexOf(e.currentTarget)-1;r=null!=(o=p[l])?o:p[p.length-1]}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((function(e){var t=e.value,r=e.label,l=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return p.push(e)},onKeyDown:h,onClick:m},l,{className:(0,o.Z)("tabs__item",c.tabItem,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=r?r:t)})))}function p(e){var t=e.lazy,r=e.children,n=e.selectedValue,o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var l=o.find((function(e){return e.props.value===n}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function d(e){var t=(0,i.Y)(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",c.tabList)},a.createElement(u,(0,n.Z)({},e,t)),a.createElement(p,(0,n.Z)({},e,t)))}function m(e){var t=(0,s.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},70989:(e,t,r)=>{r.d(t,{Y:()=>d});var n=r(67294),a=r(16550),o=r(91980),l=r(67392),i=r(50012);function s(e){return function(e){var t,r;return null!=(t=null==(r=n.Children.map(e,(function(e){if(!e||(0,n.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function c(e){var t=e.values,r=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:s(r);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function u(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,r=void 0!==t&&t,l=e.groupId,i=(0,a.k6)(),s=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:l});return[(0,o._X)(s),(0,n.useCallback)((function(e){if(s){var t=new URLSearchParams(i.location.search);t.set(s,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[s,i])]}function d(e){var t,r,a,o,l=e.defaultValue,s=e.queryString,d=void 0!==s&&s,m=e.groupId,h=c(e),f=(0,n.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!u({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:h})})),g=f[0],w=f[1],y=p({queryString:d,groupId:m}),v=y[0],b=y[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:m}.groupId),r=(0,i.Nk)(t),a=r[0],o=r[1],[a,(0,n.useCallback)((function(e){t&&o.set(e)}),[t,o])]),T=k[0],C=k[1],x=function(){var e=null!=v?v:T;return u({value:e,tabValues:h})?e:null}();return(0,n.useLayoutEffect)((function(){x&&w(x)}),[x]),{selectedValue:g,selectValue:(0,n.useCallback)((function(e){if(!u({value:e,tabValues:h}))throw new Error("Can't select invalid tab value="+e);w(e),b(e),C(e)}),[b,C,h]),tabValues:h}}},77653:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>w,contentTitle:()=>f,default:()=>k,frontMatter:()=>h,metadata:()=>g,toc:()=>y});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=r(65488),i=r(85162),s=r(88995);const c="import { PlaywrightCrawler } from 'crawlee';\n\nconst crawler = new PlaywrightCrawler({\n    async requestHandler({ page }) {\n        // page.locator points to an element in the DOM\n        // using a CSS selector, but it does not access it yet.\n        const actorCard = page.locator('.ActorStoreItem').first();\n        // Upon calling one of the locator methods Playwright\n        // waits for the element to render and then accesses it.\n        const actorText = await actorCard.textContent();\n        console.log(`ACTOR: ${actorText}`);\n    },\n});\n\nawait crawler.run(['https://apify.com/store']);\n",u="import { PlaywrightCrawler } from 'crawlee';\n\nconst crawler = new PlaywrightCrawler({\n    async requestHandler({ page }) {\n        // Here we don't wait for the selector and immediately\n        // extract the text content from the page.\n        const actorText = await page.$eval('.ActorStoreItem', (el) => {\n            return el.textContent;\n        });\n        console.log(`ACTOR: ${actorText}`);\n    },\n});\n\nawait crawler.run(['https://apify.com/store']);\n",p="import { PuppeteerCrawler } from 'crawlee';\n\nconst crawler = new PuppeteerCrawler({\n    async requestHandler({ page }) {\n        // Puppeteer does not have the automatic waiting functionality\n        // of Playwright, so we have to explicitly wait for the element.\n        await page.waitForSelector('.ActorStoreItem');\n        // Puppeteer does not have helper methods like locator.textContent,\n        // so we have to manually extract the value using in-page JavaScript.\n        const actorText = await page.$eval('.ActorStoreItem', (el) => {\n            return el.textContent;\n        });\n        console.log(`ACTOR: ${actorText}`);\n    },\n});\n\nawait crawler.run(['https://apify.com/store']);\n",d="import { PuppeteerCrawler } from 'crawlee';\n\nconst crawler = new PuppeteerCrawler({\n    async requestHandler({ page }) {\n        // Here we don't wait for the selector and immediately\n        // extract the text content from the page.\n        const actorText = await page.$eval('.ActorStoreItem', (el) => {\n            return el.textContent;\n        });\n        console.log(`ACTOR: ${actorText}`);\n    },\n});\n\nawait crawler.run(['https://apify.com/store']);\n";var m=["components"],h={id:"javascript-rendering",title:"JavaScript rendering",description:"Your first steps into the world of scraping with Crawlee"},f=void 0,g={unversionedId:"guides/javascript-rendering",id:"version-3.5/guides/javascript-rendering",title:"JavaScript rendering",description:"Your first steps into the world of scraping with Crawlee",source:"@site/versioned_docs/version-3.5/guides/javascript-rendering.mdx",sourceDirName:"guides",slug:"/guides/javascript-rendering",permalink:"/docs/guides/javascript-rendering",draft:!1,tags:[],version:"3.5",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1692663205,formattedLastUpdatedAt:"Aug 22, 2023",frontMatter:{id:"javascript-rendering",title:"JavaScript rendering",description:"Your first steps into the world of scraping with Crawlee"},sidebar:"docs",previous:{title:"CheerioCrawler",permalink:"/docs/guides/cheerio-crawler-guide"},next:{title:"Proxy Management",permalink:"/docs/guides/proxy-management"}},w={},y=[{value:"Headless browsers",id:"headless-browsers",level:2},{value:"Waiting for elements to render",id:"waiting-for-elements-to-render",level:2},{value:"We&#39;re not kidding",id:"were-not-kidding",level:3}],v={toc:y},b="wrapper";function k(e){var t=e.components,r=(0,a.Z)(e,m);return(0,o.kt)(b,(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"JavaScript rendering is the process of executing JavaScript on a page to make changes in the page's structure or content. It's also called client-side rendering, the opposite of server-side rendering. Some modern websites render on the client, some on the server and many cutting edge websites render some things on the server and other things on the client."),(0,o.kt)("p",null,"The Crawlee website does not use JavaScript rendering to display its content, so we have to look for an example elsewhere. ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/store",target:"_blank",rel:"noopener"},"Apify Store")," is a library of scrapers and automations called ",(0,o.kt)("strong",{parentName:"p"},"actors")," that anyone can grab and use for free. It uses JavaScript rendering to display the list of actors, so let's use it to demonstrate how it works."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/main.mjs"',title:'"src/main.mjs"'},"import { CheerioCrawler } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    async requestHandler({ $, request }) {\n        // Extract text content of an actor card\n        const actorText = $('.ActorStoreItem').text();\n        console.log(`ACTOR: ${actorText}`);\n    }\n})\n\nawait crawler.run(['https://apify.com/store']);\n")),(0,o.kt)("p",null,"Run the code, and you'll see that the crawler won't print the content of the actor card."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},"ACTOR:\n")),(0,o.kt)("p",null,"That's because Apify Store uses client-side JavaScript to render its content and ",(0,o.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")," can't execute it, so the text never appears in the page's HTML."),(0,o.kt)("p",null,"You can confirm this using Chrome DevTools. If you go to ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/store",target:"_blank",rel:"noopener"},"https://apify.com/store"),", right-click anywhere in the page, select ",(0,o.kt)("strong",{parentName:"p"},"View Page Source")," and search for ",(0,o.kt)("strong",{parentName:"p"},"ActorStoreItem")," you won't find any results. Then, if you right-click again, select ",(0,o.kt)("strong",{parentName:"p"},"Inspect")," and search for the same ",(0,o.kt)("strong",{parentName:"p"},"ActorStoreItem"),", you will find many of them."),(0,o.kt)("p",null,"How's this possible? Because ",(0,o.kt)("strong",{parentName:"p"},"View Page Source")," shows the original HTML, before any JavaScript executions. That's what ",(0,o.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")," gets. Whereas with ",(0,o.kt)("strong",{parentName:"p"},"Inspect")," you see the current HTML - after JavaScript execution. When you understand this, it's not a huge surprise that ",(0,o.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")," can't find the data. For that we need a headless browser."),(0,o.kt)("h2",{id:"headless-browsers"},"Headless browsers"),(0,o.kt)("p",null,"To get the contents of ",(0,o.kt)("inlineCode",{parentName:"p"},".ActorStoreItem"),", you will have to use a headless browser. You can choose from two libraries to control your browser: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer",target:"_blank",rel:"noopener"},"Puppeteer")," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright",target:"_blank",rel:"noopener"},"Playwright"),". The choice is simple. If you know one of them, choose the one you know. If you know both, or none, choose Playwright, because it's better in most cases."),(0,o.kt)("h2",{id:"waiting-for-elements-to-render"},"Waiting for elements to render"),(0,o.kt)("p",null,"No matter which library you pick, here's example code for both. Playwright is a little more pleasant to use, but both libraries will get the job done. The big difference between them is that Playwright will automatically wait for elements to appear, whereas in Puppeteer, you have to explicitly wait for them."),(0,o.kt)(l.Z,{groupId:"javascript-rendering",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"playwright",label:"PlaywrightCrawler",mdxType:"TabItem"},(0,o.kt)(s.Z,{language:"js",title:"src/main.mjs",mdxType:"CodeBlock"},c)),(0,o.kt)(i.Z,{value:"puppeteer",label:"PuppeteerCrawler",mdxType:"TabItem"},(0,o.kt)(s.Z,{language:"js",title:"src/main.mjs",mdxType:"CodeBlock"},p))),(0,o.kt)("p",null,"When you run the code, you'll see the ",(0,o.kt)("em",{parentName:"p"},"badly formatted")," content of the first actor card printed to console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},"ACTOR: Web Scraperapify/web-scraperCrawls arbitrary websites using [...]\n")),(0,o.kt)("h3",{id:"were-not-kidding"},"We're not kidding"),(0,o.kt)("p",null,"If you don't believe us that the elements need to be waited for, run the following code which skips the waiting."),(0,o.kt)(l.Z,{groupId:"javascript-rendering",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"playwright",label:"PlaywrightCrawler",mdxType:"TabItem"},(0,o.kt)(s.Z,{language:"js",title:"src/main.mjs",mdxType:"CodeBlock"},u)),(0,o.kt)(i.Z,{value:"puppeteer",label:"PuppeteerCrawler",mdxType:"TabItem"},(0,o.kt)(s.Z,{language:"js",title:"src/main.mjs",mdxType:"CodeBlock"},d))),(0,o.kt)("p",null,"In both cases, the request will be retried a few times and eventually fail with an error like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},'ERROR [...] Error: failed to find element matching selector ".ActorStoreItem"\n')),(0,o.kt)("p",null,"That's because when you try to access the element in the browser, it's not been rendered in the DOM yet."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This guide only touches the concept of JavaScript rendering and use of headless browsers. To learn more, continue with the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.apify.com/academy/puppeteer-playwright",target:"_blank",rel:"noopener"},"Puppeteer & Playwright course")," in the Apify Academy. ",(0,o.kt)("strong",{parentName:"p"},"It's free and open-source")," \u2764\ufe0f.")))}k.isMDXComponent=!0}}]);