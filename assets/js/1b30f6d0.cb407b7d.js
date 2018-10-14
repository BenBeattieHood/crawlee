"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5483],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),h=n,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return a?r.createElement(m,l(l({ref:t},u),{},{components:a})):r.createElement(m,l({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(34334);const o={tabItem:"tabItem_Ymn6"};function l(e){var t=e.children,a=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>h});var r=a(87462),n=a(67294),o=a(34334),l=a(12466),i=a(70989),s=a(72389);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){var t=e.className,a=e.block,i=e.selectedValue,s=e.selectValue,u=e.tabValues,p=[],d=(0,l.o5)().blockElementScrollPositionUntilNextRender,h=function(e){var t=e.currentTarget,a=p.indexOf(t),r=u[a].value;r!==i&&(d(t),s(r))},m=function(e){var t,a=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":var r,n=p.indexOf(e.currentTarget)+1;a=null!=(r=p[n])?r:p[0];break;case"ArrowLeft":var o,l=p.indexOf(e.currentTarget)-1;a=null!=(o=p[l])?o:p[p.length-1]}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((function(e){var t=e.value,a=e.label,l=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return p.push(e)},onKeyDown:m,onClick:h},l,{className:(0,o.Z)("tabs__item",c.tabItem,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=a?a:t)})))}function p(e){var t=e.lazy,a=e.children,r=e.selectedValue,o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var l=o.find((function(e){return e.props.value===r}));return l?(0,n.cloneElement)(l,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function d(e){var t=(0,i.Y)(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",c.tabList)},n.createElement(u,(0,r.Z)({},e,t)),n.createElement(p,(0,r.Z)({},e,t)))}function h(e){var t=(0,s.Z)();return n.createElement(d,(0,r.Z)({key:String(t)},e))}},70989:(e,t,a)=>{a.d(t,{Y:()=>d});var r=a(67294),n=a(16550),o=a(91980),l=a(67392),i=a(50012);function s(e){return function(e){var t,a;return null!=(t=null==(a=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function c(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:s(a);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function u(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,a=void 0!==t&&t,l=e.groupId,i=(0,n.k6)(),s=function(e){var t=e.queryString,a=void 0!==t&&t,r=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:a,groupId:l});return[(0,o._X)(s),(0,r.useCallback)((function(e){if(s){var t=new URLSearchParams(i.location.search);t.set(s,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[s,i])]}function d(e){var t,a,n,o,l=e.defaultValue,s=e.queryString,d=void 0!==s&&s,h=e.groupId,m=c(e),g=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!u({value:a,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var n=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:l,tabValues:m})})),f=g[0],w=g[1],y=p({queryString:d,groupId:h}),k=y[0],b=y[1],v=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),a=(0,i.Nk)(t),n=a[0],o=a[1],[n,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=v[0],C=v[1],x=function(){var e=null!=k?k:N;return u({value:e,tabValues:m})?e:null}();return(0,r.useLayoutEffect)((function(){x&&w(x)}),[x]),{selectedValue:f,selectValue:(0,r.useCallback)((function(e){if(!u({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);w(e),b(e),C(e)}),[b,C,m]),tabValues:m}}},14959:(e,t,a)=>{a.d(t,{Z:()=>c});var r=a(67294),n=a(39960),o=a(74477),l=a(52263),i=a(50643).version.split("."),s=[i[0],i[1]].join(".");const c=function(e){var t=e.to,a=e.children,i=(0,o.E)();return(0,l.default)().siteConfig.presets[0][1].docs.disableVersioning||i.version===s?r.createElement(n.default,{to:"/api/"+t},a):r.createElement(n.default,{to:"/api/"+("current"===i.version?"next":i.version)+"/"+t},a)}},55628:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>k,frontMatter:()=>d,metadata:()=>m,toc:()=>f});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),l=(a(14959),a(65488)),i=a(85162),s=a(88995);const c="// Instead of CheerioCrawler let's use Playwright\n// to be able to render JavaScript.\nimport { PlaywrightCrawler } from 'crawlee';\n\nconst crawler = new PlaywrightCrawler({\n    requestHandler: async ({ page }) => {\n        // Wait for the actor cards to render.\n        await page.waitForSelector('div[data-test=\"actorCard\"]');\n        // Execute a function in the browser which targets\n        // the actor card elements and allows their manipulation.\n        const actorTexts = await page.$$eval('div[data-test=\"actorCard\"]', (els) => {\n            // Extract text content from the actor cards\n            return els.map((el) => el.textContent);\n        });\n        actorTexts.forEach((text, i) => {\n            console.log(`ACTOR_${i + 1}: ${text}\\n`);\n        });\n    },\n});\n\nawait crawler.run(['https://apify.com/store']);\n",u="// Instead of CheerioCrawler let's use Playwright\n// to be able to render JavaScript.\nimport { PlaywrightCrawler } from 'crawlee';\n\nconst crawler = new PlaywrightCrawler({\n    requestHandler: async ({ page, parseWithCheerio }) => {\n        // Wait for the actor cards to render.\n        await page.waitForSelector('div[data-test=\"actorCard\"]');\n        // Extract the page's HTML from browser\n        // and parse it with Cheerio.\n        const $ = await parseWithCheerio();\n        // Use familiar Cheerio syntax to\n        // select all the actor cards.\n        $('div[data-test=\"actorCard\"]').each((i, el) => {\n            const text = $(el).text();\n            console.log(`ACTOR_${i + 1}: ${text}\\n`);\n        });\n    },\n});\n\nawait crawler.run(['https://apify.com/store']);\n";var p=["components"],d={id:"real-world-project",title:"Getting some real-world data",sidebar_label:"Real-world project",description:"Your first steps into the world of scraping with Crawlee"},h=void 0,m={unversionedId:"introduction/real-world-project",id:"introduction/real-world-project",title:"Getting some real-world data",description:"Your first steps into the world of scraping with Crawlee",source:"@site/../docs/introduction/04-real-world-project.mdx",sourceDirName:"introduction",slug:"/introduction/real-world-project",permalink:"/docs/next/introduction/real-world-project",draft:!1,tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1692663205,formattedLastUpdatedAt:"Aug 22, 2023",sidebarPosition:4,frontMatter:{id:"real-world-project",title:"Getting some real-world data",sidebar_label:"Real-world project",description:"Your first steps into the world of scraping with Crawlee"},sidebar:"docs",previous:{title:"Adding more URLs",permalink:"/docs/next/introduction/adding-urls"},next:{title:"Crawling",permalink:"/docs/next/introduction/crawling"}},g={},f=[{value:"Making a production-grade crawler",id:"making-a-production-grade-crawler",level:2},{value:"Drawing a plan",id:"drawing-a-plan",level:2},{value:"Choosing the data you need",id:"choosing-the-data-you-need",level:2},{value:"The start URL(s)",id:"the-start-urls",level:3},{value:"Exploring the page",id:"exploring-the-page",level:2},{value:"Categories and sorting",id:"categories-and-sorting",level:3},{value:"Pagination",id:"pagination",level:3},{value:"The crawling strategy",id:"the-crawling-strategy",level:2},{value:"Sanity check",id:"sanity-check",level:2},{value:"DevTools - the scraper&#39;s toolbox",id:"devtools---the-scrapers-toolbox",level:2},{value:"Selecting elements",id:"selecting-elements",level:2},{value:"Next lesson",id:"next-lesson",level:2}],w={toc:f},y="wrapper";function k(e){var t=e.components,d=(0,n.Z)(e,p);return(0,o.kt)(y,(0,r.Z)({},w,d,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Hey, guys, you know, it's cool that we can scrape the ",(0,o.kt)("inlineCode",{parentName:"em"},"<title>")," elements of web pages, but that's not very useful. Can we finally scrape some real data and save it somewhere in a machine-readable format? Because that's why I started reading this tutorial in the first place!"))),(0,o.kt)("p",null,"We hear you, young padawan! First, learn how to crawl, you must. Only then, walk through data, you can!"),(0,o.kt)("h2",{id:"making-a-production-grade-crawler"},"Making a production-grade crawler"),(0,o.kt)("p",null,"Making a production-grade crawler is not difficult, but there are many pitfalls of scraping that can catch you off guard. So for the real world project you'll learn how to scrape ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/store",target:"_blank",rel:"noopener"},"Apify Store")," instead of the Crawlee website. It is a library of scrapers and automations called ",(0,o.kt)("strong",{parentName:"p"},"Actors")," that anyone can grab and use for free."),(0,o.kt)("p",null,"The website requires JavaScript rendering, which allows us to showcase more features of Crawlee. We've also added some helpful tips that prepare you for the real-world issues that you will surely encounter when scraping at scale."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you're not interested in crawling theory, feel free to ",(0,o.kt)("a",{parentName:"p",href:"./crawling",target:null,rel:null},"skip to the next lesson")," and get right back to coding.")),(0,o.kt)("h2",{id:"drawing-a-plan"},"Drawing a plan"),(0,o.kt)("p",null,"Sometimes scraping is really straightforward, but most of the time, it really pays off to do a bit of research first and try to answer some of these questions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"How is the website structured?"),(0,o.kt)("li",{parentName:"ul"},'Can I scrape it only with HTTP requests (read "with ',(0,o.kt)("inlineCode",{parentName:"li"},"CheerioCrawler"),'")?'),(0,o.kt)("li",{parentName:"ul"},"Do I need a headless browser for something?"),(0,o.kt)("li",{parentName:"ul"},"Are there any anti-scraping protections in place?"),(0,o.kt)("li",{parentName:"ul"},"Do I need to parse the HTML or can I get the data otherwise, such as directly from the website's API?")),(0,o.kt)("p",null,"For the purposes of this tutorial, let's assume that the website cannot be scraped with ",(0,o.kt)("inlineCode",{parentName:"p"},"CheerioCrawler"),". It actually can, but we would have to dive a bit deeper than this introductory guide allows. So for now we will make things easier for you, scrape it with ",(0,o.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler"),", and you'll learn about headless browsers in the process."),(0,o.kt)("h2",{id:"choosing-the-data-you-need"},"Choosing the data you need"),(0,o.kt)("p",null,"A good first step is to figure out what data you want to scrape and where to find it. For the time being, let's just agree that we want to scrape all Actors from ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/store",target:"_blank",rel:"noopener"},"Apify Store")," and for each Actor we want to get its:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"URL"),(0,o.kt)("li",{parentName:"ul"},"Owner"),(0,o.kt)("li",{parentName:"ul"},"Unique identifier (such as ",(0,o.kt)("inlineCode",{parentName:"li"},"apify/web-scraper"),")"),(0,o.kt)("li",{parentName:"ul"},"Title"),(0,o.kt)("li",{parentName:"ul"},"Description"),(0,o.kt)("li",{parentName:"ul"},"Last modification date"),(0,o.kt)("li",{parentName:"ul"},"Number of runs")),(0,o.kt)("p",null,'You will notice that some information is available directly on the list page, but for details such as "Last modification date" or "Number of runs" we\'ll also need to open the Actor detail pages.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"data to scrape",src:a(68991).Z,title:"Overview of data to be scraped.",width:"2850",height:"1628"})),(0,o.kt)("h3",{id:"the-start-urls"},"The start URL(s)"),(0,o.kt)("p",null,"This is where you start your crawl. It's convenient to start as close to the data as possible. For example, it wouldn't make much sense to start at ",(0,o.kt)("inlineCode",{parentName:"p"},"apify.com")," and look for a ",(0,o.kt)("inlineCode",{parentName:"p"},"store")," link there, when we already know that everything we want to extract can be found at the ",(0,o.kt)("inlineCode",{parentName:"p"},"apify.com/store")," page."),(0,o.kt)("h2",{id:"exploring-the-page"},"Exploring the page"),(0,o.kt)("p",null,"Let's take a look at the ",(0,o.kt)("inlineCode",{parentName:"p"},"apify.com/store")," page more carefully. There are some ",(0,o.kt)("strong",{parentName:"p"},"categories")," on the left, ",(0,o.kt)("strong",{parentName:"p"},"sorting")," on the right, and at the very bottom, there are links to the next pages of results. This is usually called ",(0,o.kt)("strong",{parentName:"p"},"the pagination"),"."),(0,o.kt)("h3",{id:"categories-and-sorting"},"Categories and sorting"),(0,o.kt)("p",null,"When you click the categories, you'll see that they filter the results. If you remove the category, you're back to the original number of results. By going through a few categories and observing the behavior, we can quite safely assume that the default setting - with ",(0,o.kt)("strong",{parentName:"p"},"no category selected")," - shows us ",(0,o.kt)("strong",{parentName:"p"},"all the Actors available")," in the store and that's the setting we'll use to scrape. The same applies to sorting. We don't need that now."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Be careful, because on some websites, like ",(0,o.kt)("a",{parentName:"p",href:"https://amazon.com",target:"_blank",rel:"noopener"},"amazon.com"),", this is not true and the sum of products in categories is actually larger than what's available without filters. Learn more in our ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/tutorials/scrape-paginated-sites",target:"_blank",rel:"noopener"},"tutorial on scraping websites with limited pagination"),".")),(0,o.kt)("h3",{id:"pagination"},"Pagination"),(0,o.kt)("p",null,"The pagination of Apify Store is simple enough. The only setback is that there's no button that would allow you to go directly to the last page, so you can't confirm how many results there are. But you can trick it a bit. When you click on the page 2 button, you'll see that the URL changes to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://apify.com/store?page=2\n")),(0,o.kt)("p",null,"Try clicking on the link to page 6. You'll see that the pagination links update and show more pages. But can you trust that this will include all pages and won't stop at some point?"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Similarly to the issue with filters explained above, the existence of pagination does not guarantee that you can simply paginate through all the results. Always test your assumptions about pagination. Otherwise, you might miss a chunk of results, and not even know about it.")),(0,o.kt)("p",null,"At the time of writing the Store results counter showed 1047 results - Actors. Quick count of Actors on one page of results makes 24. 8 rows times 3 Actors. This means that there should be 44 pages of results. 1047 divided by 24. Try going to page number 44 (or the number your own calculation produced)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://apify.com/store?page=44\n")),(0,o.kt)("p",null,"It's empty. \ud83e\udd2f Wrong calculation? Not really. This is an example of another common issue in web scraping. The result count presented by websites very rarely matches the actual number of available results. In our case, it's simply because certain Actors were hidden for some reason, but the count does not reflect it."),(0,o.kt)("p",null,"At the time of writing, the last results were actually on page 42. But that's ok. What's important is that on this page 42, the pagination links at the bottom are still the same as on page one, two or six. This makes it fairly certain that you can keep following those links until you scrape all the results. Good \ud83d\udc4d"),(0,o.kt)("p",null,"If you're not convinced, you can visit a page somewhere in the middle, like ",(0,o.kt)("inlineCode",{parentName:"p"},"https://apify.com/store?page=20")," and see how the pagination looks there."),(0,o.kt)("h2",{id:"the-crawling-strategy"},"The crawling strategy"),(0,o.kt)("p",null,"Now that you know where to start and how to find all the Actor details, let's look at the crawling process."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Visit the store page containing the list of Actors (our start URL)."),(0,o.kt)("li",{parentName:"ol"},"Enqueue all links to Actor details."),(0,o.kt)("li",{parentName:"ol"},"Enqueue links to next pages of results."),(0,o.kt)("li",{parentName:"ol"},"Open the next page in queue.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"When it's a results list page, go to 2."),(0,o.kt)("li",{parentName:"ul"},"When it's an Actor detail page, scrape the data."))),(0,o.kt)("li",{parentName:"ol"},"Repeat until all results pages and all Actor details have been processed.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler")," will make sure to visit the pages for you, if you provide the correct requests, and you already know how to enqueue pages, so this should be fairly easy. Nevertheless, there are few more tricks that we'd like to showcase."),(0,o.kt)("h2",{id:"sanity-check"},"Sanity check"),(0,o.kt)("p",null,"Let's check that everything is set up correctly before writing the scraping logic itself. You might realize that something in your previous analysis doesn't quite add up, or the website might not behave exactly as you expected."),(0,o.kt)("p",null,"The example below creates a new crawler that visits the start URL and prints the text content of all the Actor cards on that page. When you run the code, you will see the ",(0,o.kt)("em",{parentName:"p"},"very badly formatted")," content of the individual Actor cards."),(0,o.kt)(l.Z,{groupId:"sanity-check",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"playwright",label:"Playwright",default:!0,mdxType:"TabItem"},(0,o.kt)(s.Z,{language:"js",title:"src/main.mjs",mdxType:"CodeBlock"},c)),(0,o.kt)(i.Z,{value:"playwright-with-cheerio",label:"Playwright with Cheerio",mdxType:"TabItem"},(0,o.kt)(s.Z,{language:"js",title:"src/main.mjs",mdxType:"CodeBlock"},u))),(0,o.kt)("p",null,"If you're wondering how to get that ",(0,o.kt)("inlineCode",{parentName:"p"},'div[data-test="actorCard"]')," selector. We'll explain it in the next chapter on DevTools."),(0,o.kt)("h2",{id:"devtools---the-scrapers-toolbox"},"DevTools - the scraper's toolbox"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"We'll use Chrome DevTools here, since it's the most common browser, but feel free to use any other, they're all very similar.")),(0,o.kt)("p",null,"Let's open DevTools by going to ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/store",target:"_blank",rel:"noopener"},"https://apify.com/store")," in Chrome and then right-clicking anywhere in the page and selecting ",(0,o.kt)("strong",{parentName:"p"},"Inspect"),", or by pressing ",(0,o.kt)("strong",{parentName:"p"},"F12")," or whatever your system prefers. With DevTools, you can inspect or manipulate any aspect of the currently open web page. You can learn more about DevTools in their ",(0,o.kt)("a",{parentName:"p",href:"https://developer.chrome.com/docs/devtools/",target:"_blank",rel:"noopener"},"official documentaion"),"."),(0,o.kt)("h2",{id:"selecting-elements"},"Selecting elements"),(0,o.kt)("p",null,"In the DevTools, choose the ",(0,o.kt)("strong",{parentName:"p"},"Select an element")," tool and try hovering over one of the Actor cards."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"select an element",src:a(67321).Z,title:"Finding the select an element tool.",width:"1362",height:"692"})),(0,o.kt)("p",null,"You'll see that you can select different elements inside the card. Instead, select the whole card, not just some of its contents, such as its title or description."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"selected element",src:a(45775).Z,title:"Selecting an element by hovering over it.",width:"2590",height:"540"})),(0,o.kt)("p",null,"Selecting an element will highlight it in the DevTools HTML inspector. When carefully look at the elements, you'll see that there are some ",(0,o.kt)("strong",{parentName:"p"},"classes")," attached to the different HTML elements. Those are called ",(0,o.kt)("strong",{parentName:"p"},"CSS classes"),", and we can make a use of them in scraping."),(0,o.kt)("p",null,"Conversely, by hovering over elements in the HTML inspector, you will see them highlight on the page. Inspect the page's structure around the Actor cards. You'll see that all the card's data is displayed in an ",(0,o.kt)("inlineCode",{parentName:"p"},"<a>")," element with a ",(0,o.kt)("inlineCode",{parentName:"p"},"data-test")," attribute ",(0,o.kt)("strong",{parentName:"p"},"actorCard"),". It should now make sense how we got that ",(0,o.kt)("inlineCode",{parentName:"p"},'div[data-test="actorCard"]')," selector. It's just a way to find all elements that are annotated with the ",(0,o.kt)("inlineCode",{parentName:"p"},"actorCard"),"."),(0,o.kt)("p",null,"It's always a good idea to double-check that you're not getting any unwanted elements with this class. To do that, go into the ",(0,o.kt)("strong",{parentName:"p"},"Console")," tab of DevTools and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"document.querySelectorAll('div[data-test=\"actorCard\"]');\n")),(0,o.kt)("p",null,"You will see that only the 24 Actor cards will be returned, and nothing else."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"CSS selectors and DevTools are quite a big topic. If you want to learn more, visit the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.apify.com/academy/web-scraping-for-beginners",target:"_blank",rel:"noopener"},"Web scraping for beginners course")," in the Apify Academy. ",(0,o.kt)("strong",{parentName:"p"},"It's free and open-source")," \u2764\ufe0f.")),(0,o.kt)("h2",{id:"next-lesson"},"Next lesson"),(0,o.kt)("p",null,"In the next lesson, we will crawl the whole store, including all the listing pages and all the Actor detail pages."))}k.isMDXComponent=!0},68991:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/scraping-practice-122828a2447ee96f399a9dbd4bcd092a.jpg"},67321:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/select-an-element-36b5c5354cb1fd93ae2746723c24ed28.png"},45775:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/selected-element-a9a118d2300e97c2b0462f72e80c0ceb.png"},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.5.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"ts-node -T ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.5.2","@crawlee/browser":"3.5.2","@crawlee/browser-pool":"3.5.2","@crawlee/cheerio":"3.5.2","@crawlee/cli":"3.5.2","@crawlee/core":"3.5.2","@crawlee/http":"3.5.2","@crawlee/jsdom":"3.5.2","@crawlee/linkedom":"3.5.2","@crawlee/playwright":"3.5.2","@crawlee/puppeteer":"3.5.2","@crawlee/utils":"3.5.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"<= 2.x","puppeteer":"<= 21.1"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);