"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6054],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=l(r),h=a,m=p["".concat(i,".").concat(h)]||p[h]||d[h]||s;return r?n.createElement(m,u(u({ref:t},c),{},{components:r})):n.createElement(m,u({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,u=new Array(s);u[0]=h;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:a,u[1]=o;for(var l=2;l<s;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(67294),a=r(34334);const s={tabItem:"tabItem_Ymn6"};function u(e){var t=e.children,r=e.hidden,u=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(s.tabItem,u),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(87462),a=r(67294),s=r(34334),u=r(12466),o=r(70989),i=r(72389);const l={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){var t=e.className,r=e.block,o=e.selectedValue,i=e.selectValue,c=e.tabValues,p=[],d=(0,u.o5)().blockElementScrollPositionUntilNextRender,h=function(e){var t=e.currentTarget,r=p.indexOf(t),n=c[r].value;n!==o&&(d(t),i(n))},m=function(e){var t,r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":var n,a=p.indexOf(e.currentTarget)+1;r=null!=(n=p[a])?n:p[0];break;case"ArrowLeft":var s,u=p.indexOf(e.currentTarget)-1;r=null!=(s=p[u])?s:p[p.length-1]}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},t)},c.map((function(e){var t=e.value,r=e.label,u=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return p.push(e)},onKeyDown:m,onClick:h},u,{className:(0,s.Z)("tabs__item",l.tabItem,null==u?void 0:u.className,{"tabs__item--active":o===t})}),null!=r?r:t)})))}function p(e){var t=e.lazy,r=e.children,n=e.selectedValue,s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var u=s.find((function(e){return e.props.value===n}));return u?(0,a.cloneElement)(u,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},s.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function d(e){var t=(0,o.Y)(e);return a.createElement("div",{className:(0,s.Z)("tabs-container",l.tabList)},a.createElement(c,(0,n.Z)({},e,t)),a.createElement(p,(0,n.Z)({},e,t)))}function h(e){var t=(0,i.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},70989:(e,t,r)=>{r.d(t,{Y:()=>d});var n=r(67294),a=r(16550),s=r(91980),u=r(67392),o=r(50012);function i(e){return function(e){var t,r;return null!=(t=null==(r=n.Children.map(e,(function(e){if(!e||(0,n.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function l(e){var t=e.values,r=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:i(r);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function c(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,r=void 0!==t&&t,u=e.groupId,o=(0,a.k6)(),i=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:u});return[(0,s._X)(i),(0,n.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function d(e){var t,r,a,s,u=e.defaultValue,i=e.queryString,d=void 0!==i&&i,h=e.groupId,m=l(e),w=(0,n.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!c({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:u,tabValues:m})})),f=w[0],q=w[1],g=p({queryString:d,groupId:h}),y=g[0],b=g[1],v=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),r=(0,o.Nk)(t),a=r[0],s=r[1],[a,(0,n.useCallback)((function(e){t&&s.set(e)}),[t,s])]),k=v[0],R=v[1],x=function(){var e=null!=y?y:k;return c({value:e,tabValues:m})?e:null}();return(0,n.useLayoutEffect)((function(){x&&q(x)}),[x]),{selectedValue:f,selectValue:(0,n.useCallback)((function(e){if(!c({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);q(e),b(e),R(e)}),[b,R,m]),tabValues:m}}},14959:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(39960),s=r(74477),u=r(52263),o=r(50643).version.split("."),i=[o[0],o[1]].join(".");const l=function(e){var t=e.to,r=e.children,o=(0,s.E)();return(0,u.default)().siteConfig.presets[0][1].docs.disableVersioning||o.version===i?n.createElement(a.default,{to:"/api/"+t},r):n.createElement(a.default,{to:"/api/"+("current"===o.version?"next":o.version)+"/"+t},r)}},16174:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>q,default:()=>R,frontMatter:()=>f,metadata:()=>g,toc:()=>b});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),u=r(14959),o=r(65488),i=r(85162),l=r(88995);const c="import { RequestQueue } from 'crawlee';\n\n// Open the default request queue associated with the crawler run\nconst requestQueue = await RequestQueue.open();\n\n// Enqueue the initial batch of requests (could be an array of just one)\nawait requestQueue.addRequests([\n    { url: 'https://example.com/1' },\n    { url: 'https://example.com/2' },\n    { url: 'https://example.com/3' },\n]);\n\n// Open the named request queue\nconst namedRequestQueue = await RequestQueue.open('named-queue');\n\n// Remove the named request queue\nawait namedRequestQueue.drop();\n",p="import { RequestQueue, CheerioCrawler } from 'crawlee';\n\n// Open the default request queue associated with the current run\nconst requestQueue = await RequestQueue.open();\n\n// Enqueue the initial requests\nawait requestQueue.addRequests([\n    { url: 'https://example.com/1' },\n    { url: 'https://example.com/2' },\n    { url: 'https://example.com/3' },\n    // ...\n]);\n\n// The crawler will automatically process requests from the queue.\n// It's used the same way for Puppeteer/Playwright crawlers\nconst crawler = new CheerioCrawler({\n    requestQueue,\n    async requestHandler({ $, request, enqueueLinks }) {\n        // Add new request to the queue\n        await requestQueue.addRequests([{ url: 'https://example.com/new-page' }]);\n        // Add links found on page to the queue\n        await enqueueLinks();\n    },\n});\n\n// Run the crawler\nawait crawler.run();\n",d="import { CheerioCrawler } from 'crawlee';\n\n// The crawler will automatically process requests from the queue.\n// It's used the same way for Puppeteer/Playwright crawlers.\nconst crawler = new CheerioCrawler({\n    // Note that we're not specifying the requestQueue here\n    async requestHandler({ $, crawler, enqueueLinks }) {\n        // Add new request to the queue\n        await crawler.addRequests([{ url: 'https://example.com/new-page' }]);\n        // Add links found on page to the queue\n        await enqueueLinks();\n    },\n});\n\n// Add the initial requests.\n// Note that we are not opening the request queue explicitly before\nawait crawler.addRequests([\n    { url: 'https://example.com/1' },\n    { url: 'https://example.com/2' },\n    { url: 'https://example.com/3' },\n    // ...\n]);\n\n// Run the crawler\nawait crawler.run();\n",h="// This is technically correct, but\n// we need to explicitly open/use both the request queue and the request list.\n// We suggest using the request queue and batch add the requests instead.\n\nimport { RequestList, RequestQueue, PuppeteerCrawler } from 'crawlee';\n\n// Prepare the sources array with URLs to visit (it can contain millions of URLs)\nconst sources = [\n    { url: 'http://www.example.com/page-1' },\n    { url: 'http://www.example.com/page-2' },\n    { url: 'http://www.example.com/page-3' },\n    // ...\n];\n\n// Open the request list with the initial sources array\nconst requestList = await RequestList.open('my-list', sources);\n\n// Open the default request queue. It's not necessary to add any requests to the queue\nconst requestQueue = await RequestQueue.open();\n\n// The crawler will automatically process requests from the list and the queue.\n// It's used the same way for Cheerio/Playwright crawlers\nconst crawler = new PuppeteerCrawler({\n    requestList,\n    requestQueue,\n    // Each request from the request list is enqueued to the request queue one by one.\n    // At this point request with the same URL would exist in the list and the queue\n    async requestHandler({ crawler, enqueueLinks }) {\n        // Add new request to the queue\n        await crawler.addRequests(['http://www.example.com/new-page']);\n\n        // Add links found on page to the queue\n        await enqueueLinks();\n\n        // The requests above would be added to the queue (but not to the list)\n        // and would be processed after the request list is empty.\n        // No more requests could be added to the list here\n    },\n});\n\n// Run the crawler\nawait crawler.run();\n",m="// This is the suggested way.\n// Note that we are not using the request list at all,\n// and not using the request queue explicitly here.\n\nimport { PuppeteerCrawler } from 'crawlee';\n\n// Prepare the sources array with URLs to visit (it can contain millions of URLs)\nconst sources = [\n    { url: 'http://www.example.com/page-1' },\n    { url: 'http://www.example.com/page-2' },\n    { url: 'http://www.example.com/page-3' },\n    // ...\n];\n\n// The crawler will automatically process requests from the queue.\n// It's used the same way for Cheerio/Playwright crawlers\nconst crawler = new PuppeteerCrawler({\n    async requestHandler({ crawler, enqueueLinks }) {\n        // Add new request to the queue\n        await crawler.addRequests(['http://www.example.com/new-page']);\n\n        // Add links found on page to the queue\n        await enqueueLinks();\n\n        // The requests above would be added to the queue\n        // and would be processed after the initial requests are processed.\n    },\n});\n\n// Add the initial sources array to the request queue\n// and run the crawler\nawait crawler.run(sources);\n";var w=["components"],f={id:"request-storage",title:"Request Storage",description:"How to store the requests your crawler will go through"},q=void 0,g={unversionedId:"guides/request-storage",id:"version-3.0/guides/request-storage",title:"Request Storage",description:"How to store the requests your crawler will go through",source:"@site/versioned_docs/version-3.0/guides/request_storage.mdx",sourceDirName:"guides",slug:"/guides/request-storage",permalink:"/docs/3.0/guides/request-storage",draft:!1,tags:[],version:"3.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1692663205,formattedLastUpdatedAt:"Aug 22, 2023",frontMatter:{id:"request-storage",title:"Request Storage",description:"How to store the requests your crawler will go through"},sidebar:"docs",previous:{title:"Guides",permalink:"/docs/3.0/guides"},next:{title:"Result Storage",permalink:"/docs/3.0/guides/result-storage"}},y={},b=[{value:"Request queue",id:"request-queue",level:2},{value:"Request list",id:"request-list",level:2},{value:"Which one to choose?",id:"which-one-to-choose",level:2},{value:"Cleaning up the storages",id:"cleaning-up-the-storages",level:2}],v={toc:b},k="wrapper";function R(e){var t=e.components,r=(0,a.Z)(e,w);return(0,s.kt)(k,(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Crawlee has several request storage types that are useful for specific tasks. The requests are stored on local disk to a directory defined by the ",(0,s.kt)("inlineCode",{parentName:"p"},"CRAWLEE_STORAGE_DIR")," environment variable. If this variable is not defined, by default Crawlee sets ",(0,s.kt)("inlineCode",{parentName:"p"},"CRAWLEE_STORAGE_DIR")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"./storage")," in the current working directory."),(0,s.kt)("h2",{id:"request-queue"},"Request queue"),(0,s.kt)("p",null,"The request queue is a storage of URLs to crawl. The queue is used for the deep crawling of websites, where we start with several URLs and then recursively follow links to other pages. The data structure supports both breadth-first and depth-first crawling orders."),(0,s.kt)("p",null,"Each Crawlee project run is associated with a ",(0,s.kt)("strong",{parentName:"p"},"default request queue"),". Typically, it is used to store URLs to crawl in the specific crawler run. Its usage is optional."),(0,s.kt)("p",null,"In Crawlee, the request queue is represented by the ",(0,s.kt)(u.Z,{to:"core/class/RequestQueue",mdxType:"ApiLink"},(0,s.kt)("inlineCode",{parentName:"p"},"RequestQueue"))," class."),(0,s.kt)("p",null,"The request queue is managed by ",(0,s.kt)(u.Z,{to:"memory-storage/class/MemoryStorage",mdxType:"ApiLink"},(0,s.kt)("inlineCode",{parentName:"p"},"MemoryStorage"))," class and its data is stored in memory, while also being off-loaded to the local directory specified by the ",(0,s.kt)("inlineCode",{parentName:"p"},"CRAWLEE_STORAGE_DIR")," environment variable as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"{CRAWLEE_STORAGE_DIR}/request_queues/{QUEUE_ID}/entries.json\n")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("inlineCode",{parentName:"p"},"{QUEUE_ID}")," is the name or ID of the request queue. The default queue has ID ",(0,s.kt)("inlineCode",{parentName:"p"},"default"),", unless we override it by setting the ",(0,s.kt)("inlineCode",{parentName:"p"},"CRAWLEE_DEFAULT_REQUEST_QUEUE_ID")," environment variable.")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("inlineCode",{parentName:"p"},"entries.json")," contains an array or requests.")),(0,s.kt)("p",null,"The following code demonstrates the usage of the request queue:"),(0,s.kt)(o.Z,{groupId:"request_queue",mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"crawler",label:"Usage with Crawler",default:!0,mdxType:"TabItem"},(0,s.kt)(l.Z,{language:"js",mdxType:"CodeBlock"},d)),(0,s.kt)(i.Z,{value:"crawler_explicit",label:"Explicit usage with Crawler",mdxType:"TabItem"},(0,s.kt)(l.Z,{language:"js",mdxType:"CodeBlock"},p)),(0,s.kt)(i.Z,{value:"basic_operations",label:"Basic Operations",default:!0,mdxType:"TabItem"},(0,s.kt)(l.Z,{language:"js",mdxType:"CodeBlock"},c))),(0,s.kt)("p",null,"To see more detailed example of how to use the request queue with a crawler, see the ",(0,s.kt)("a",{parentName:"p",href:"/docs/examples/puppeteer-crawler",target:null,rel:null},"Puppeteer Crawler")," example."),(0,s.kt)("h2",{id:"request-list"},"Request list"),(0,s.kt)("p",null,"The request list is not a storage per se - it represents the list of URLs to crawl that is stored in a crawler run memory (or optionally in default ",(0,s.kt)("a",{parentName:"p",href:"../guides/result-storage#key-value-store",target:null,rel:null},"Key-Value Store")," associated with the run, if specified). The list is used for the crawling of a large number of URLs, when we know all the URLs which should be visited by the crawler and no URLs would be added during the run. The URLs can be provided either in code or parsed from a text file hosted on the web."),(0,s.kt)("p",null,"Request list is created exclusively for the crawler run and only if its usage is explicitly specified in the code. Its usage is optional."),(0,s.kt)("p",null,"In Crawlee, the request list is represented by the ",(0,s.kt)(u.Z,{to:"core/class/RequestList",mdxType:"ApiLink"},(0,s.kt)("inlineCode",{parentName:"p"},"RequestList"))," class."),(0,s.kt)("p",null,"The following code demonstrates basic operations of the request list:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { RequestList, PuppeteerCrawler } from 'crawlee';\n\n// Prepare the sources array with URLs to visit\nconst sources = [\n    { url: 'http://www.example.com/page-1' },\n    { url: 'http://www.example.com/page-2' },\n    { url: 'http://www.example.com/page-3' },\n];\n\n// Open the request list.\n// List name is used to persist the sources and the list state in the key-value store\nconst requestList = await RequestList.open('my-list', sources);\n\n// The crawler will automatically process requests from the list\n// It's used the same way for Cheerio /Playwright crawlers.\nconst crawler = new PuppeteerCrawler({\n    requestList,\n    async requestHandler({ page, request }) {\n        // Process the page (extract data, take page screenshot, etc).\n        // No more requests could be added to the request list here\n    },\n});\n")),(0,s.kt)("h2",{id:"which-one-to-choose"},"Which one to choose?"),(0,s.kt)("p",null,"When using Request queue - we would normally have several start URLs (e.g. category pages on e-commerce website) and then recursively add more (e.g. individual item pages) programmatically to the queue, it supports dynamic adding and removing of requests. No more URLs can be added to Request list after its initialization as it is immutable, URLs cannot be removed from the list either."),(0,s.kt)("p",null,"On the other hand, the Request queue is not optimized for adding or removing numerous URLs in a batch. This is technically possible, but requests are added one by one to the queue, and thus it would take significant time with a larger number of requests. Request list however can contain even millions of URLs, and it would take significantly less time to add them to the list, compared to the queue."),(0,s.kt)("p",null,"Note that Request queue and Request list can be used together by the same crawler. In such cases, each request from the Request list is enqueued into the Request queue first (to the foremost position in the queue, even if Request queue is not empty) and then consumed from the latter. This is necessary to avoid the same URL being processed more than once (from the list first and then possibly from the queue). In practical terms, such a combination can be useful when there are numerous initial URLs, but more URLs would be added dynamically by the crawler."),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"In Crawlee, there is no much need to combine the request queue together with the request list (although it's technically possible)."),(0,s.kt)("p",{parentName:"admonition"},"Previously there was no way to add the initial requests to the queue in batches (to add an array of requests), i.e. we could have only added the requests one by one to the queue with the help of ",(0,s.kt)(u.Z,{to:"core/class/RequestQueue#addRequest",mdxType:"ApiLink"},(0,s.kt)("inlineCode",{parentName:"p"},"addRequest()"))," function."),(0,s.kt)("p",{parentName:"admonition"},"However, now we could use the ",(0,s.kt)(u.Z,{to:"core/class/RequestQueue#addRequests",mdxType:"ApiLink"},(0,s.kt)("inlineCode",{parentName:"p"},"addRequests()"))," function, which adds requests in batches. Thus, instead of combining the request queue and the request list, we can use only the request queue for such use-cases now. See the examples below.")),(0,s.kt)(o.Z,{groupId:"queue_list",mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"add_requests",label:"Request Queue",default:!0,mdxType:"TabItem"},(0,s.kt)(l.Z,{language:"js",mdxType:"CodeBlock"},m)),(0,s.kt)(i.Z,{value:"queue_list",label:"Request Queue + Request List",mdxType:"TabItem"},(0,s.kt)(l.Z,{language:"js",mdxType:"CodeBlock"},h))),(0,s.kt)("h2",{id:"cleaning-up-the-storages"},"Cleaning up the storages"),(0,s.kt)("p",null,"Default storages are purged before the crawler starts if not specified otherwise. This happens as early as when we try to open some storage (e.g. via ",(0,s.kt)("inlineCode",{parentName:"p"},"RequestQueue.open()"),") or when we try to work with a default storage via one of the helper methods (e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"crawler.addRequests()")," that under the hood calls ",(0,s.kt)("inlineCode",{parentName:"p"},"RequestQueue.open()"),"). If we don't work with storages explicitly in our code, the purging will eventually happen when the ",(0,s.kt)("inlineCode",{parentName:"p"},"run")," method of our crawler is executed. In case we need to purge the storages sooner, we can use the ",(0,s.kt)(u.Z,{to:"core/function/purgeDefaultStorages",mdxType:"ApiLink"},(0,s.kt)("inlineCode",{parentName:"p"},"purgeDefaultStorages()"))," helper explicitly:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { purgeDefaultStorages } from 'crawlee';\n\nawait purgeDefaultStorages();\n")),(0,s.kt)("p",null,"Calling this function will clean up the default request storage directory (and also the request list stored in default key-value store). This is a shortcut for running (optional) ",(0,s.kt)("inlineCode",{parentName:"p"},"purge")," method on the ",(0,s.kt)(u.Z,{to:"core/interface/StorageClient",mdxType:"ApiLink"},(0,s.kt)("inlineCode",{parentName:"p"},"StorageClient"))," interface, in other words it will call the ",(0,s.kt)("inlineCode",{parentName:"p"},"purge")," method of the underlying storage implementation we are currently using. In addition, this method will make sure the storage is purged only once for a given execution context, so it is safe to call it multiple times."))}R.isMDXComponent=!0},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.5.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"ts-node -T ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.5.2","@crawlee/browser":"3.5.2","@crawlee/browser-pool":"3.5.2","@crawlee/cheerio":"3.5.2","@crawlee/cli":"3.5.2","@crawlee/core":"3.5.2","@crawlee/http":"3.5.2","@crawlee/jsdom":"3.5.2","@crawlee/linkedom":"3.5.2","@crawlee/playwright":"3.5.2","@crawlee/puppeteer":"3.5.2","@crawlee/utils":"3.5.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"<= 2.x","puppeteer":"<= 21.1"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);