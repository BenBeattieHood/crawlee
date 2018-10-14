"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3323],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>y});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,y=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return r?t.createElement(y,i(i({ref:n},u),{},{components:r})):t.createElement(y,i({ref:n},u))}));function y(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,n,r)=>{r.d(n,{Z:()=>i});var t=r(67294),o=r(34334);const a={tabItem:"tabItem_Ymn6"};function i(e){var n=e.children,r=e.hidden,i=e.className;return t.createElement("div",{role:"tabpanel",className:(0,o.Z)(a.tabItem,i),hidden:r},n)}},65488:(e,n,r)=>{r.d(n,{Z:()=>m});var t=r(87462),o=r(67294),a=r(34334),i=r(12466),l=r(70989),s=r(72389);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){var n=e.className,r=e.block,l=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],d=(0,i.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var n=e.currentTarget,r=c.indexOf(n),t=u[r].value;t!==l&&(d(n),s(t))},y=function(e){var n,r=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var t,o=c.indexOf(e.currentTarget)+1;r=null!=(t=c[o])?t:c[0];break;case"ArrowLeft":var a,i=c.indexOf(e.currentTarget)-1;r=null!=(a=c[i])?a:c[c.length-1]}null==(n=r)||n.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n)},u.map((function(e){var n=e.value,r=e.label,i=e.attributes;return o.createElement("li",(0,t.Z)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:function(e){return c.push(e)},onKeyDown:y,onClick:m},i,{className:(0,a.Z)("tabs__item",p.tabItem,null==i?void 0:i.className,{"tabs__item--active":l===n})}),null!=r?r:n)})))}function c(e){var n=e.lazy,r=e.children,t=e.selectedValue,a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var i=a.find((function(e){return e.props.value===t}));return i?(0,o.cloneElement)(i,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==t})})))}function d(e){var n=(0,l.Y)(e);return o.createElement("div",{className:(0,a.Z)("tabs-container",p.tabList)},o.createElement(u,(0,t.Z)({},e,n)),o.createElement(c,(0,t.Z)({},e,n)))}function m(e){var n=(0,s.Z)();return o.createElement(d,(0,t.Z)({key:String(n)},e))}},70989:(e,n,r)=>{r.d(n,{Y:()=>d});var t=r(67294),o=r(16550),a=r(91980),i=r(67392),l=r(50012);function s(e){return function(e){var n,r;return null!=(n=null==(r=t.Children.map(e,(function(e){if(!e||(0,t.isValidElement)(e)&&(n=e.props)&&"object"==typeof n&&"value"in n)return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function p(e){var n=e.values,r=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:s(r);return function(e){var n=(0,i.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function u(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function c(e){var n=e.queryString,r=void 0!==n&&n,i=e.groupId,l=(0,o.k6)(),s=function(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:i});return[(0,a._X)(s),(0,t.useCallback)((function(e){if(s){var n=new URLSearchParams(l.location.search);n.set(s,e),l.replace(Object.assign({},l.location,{search:n.toString()}))}}),[s,l])]}function d(e){var n,r,o,a,i=e.defaultValue,s=e.queryString,d=void 0!==s&&s,m=e.groupId,y=p(e),f=(0,t.useState)((function(){return function(e){var n,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!u({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var o=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:i,tabValues:y})})),g=f[0],w=f[1],x=c({queryString:d,groupId:m}),C=x[0],k=x[1],h=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:m}.groupId),r=(0,l.Nk)(n),o=r[0],a=r[1],[o,(0,t.useCallback)((function(e){n&&a.set(e)}),[n,a])]),b=h[0],v=h[1],P=function(){var e=null!=C?C:b;return u({value:e,tabValues:y})?e:null}();return(0,t.useLayoutEffect)((function(){P&&w(P)}),[P]),{selectedValue:g,selectValue:(0,t.useCallback)((function(e){if(!u({value:e,tabValues:y}))throw new Error("Can't select invalid tab value="+e);w(e),k(e),v(e)}),[k,v,y]),tabValues:y}}},14959:(e,n,r)=>{r.d(n,{Z:()=>p});var t=r(67294),o=r(39960),a=r(74477),i=r(52263),l=r(50643).version.split("."),s=[l[0],l[1]].join(".");const p=function(e){var n=e.to,r=e.children,l=(0,a.E)();return(0,i.default)().siteConfig.presets[0][1].docs.disableVersioning||l.version===s?t.createElement(o.default,{to:"/api/"+n},r):t.createElement(o.default,{to:"/api/"+("current"===l.version?"next":l.version)+"/"+n},r)}},18589:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>S,contentTitle:()=>j,default:()=>U,frontMatter:()=>Z,metadata:()=>N,toc:()=>O});var t=r(87462),o=r(63366),a=(r(67294),r(3905)),i=r(14959),l=r(65488),s=r(85162),p=r(88995);const u="import { HttpCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({\n    proxyUrls: [\n        'http://proxy-1.com',\n        'http://proxy-2.com',\n    ],\n});\n\nconst crawler = new HttpCrawler({\n    proxyConfiguration,\n    // ...\n});\n",c="import { JSDOMCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({\n    proxyUrls: [\n        'http://proxy-1.com',\n        'http://proxy-2.com',\n    ],\n});\n\nconst crawler = new JSDOMCrawler({\n    proxyConfiguration,\n    // ...\n});\n",d="import { CheerioCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({\n    proxyUrls: [\n        'http://proxy-1.com',\n        'http://proxy-2.com',\n    ],\n});\n\nconst crawler = new CheerioCrawler({\n    proxyConfiguration,\n    // ...\n});\n",m="import { PlaywrightCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({\n    proxyUrls: [\n        'http://proxy-1.com',\n        'http://proxy-2.com',\n    ],\n});\n\nconst crawler = new PlaywrightCrawler({\n    proxyConfiguration,\n    // ...\n});\n",y="import { PuppeteerCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({\n    proxyUrls: [\n        'http://proxy-1.com',\n        'http://proxy-2.com',\n    ],\n});\n\nconst crawler = new PuppeteerCrawler({\n    proxyConfiguration,\n    // ...\n});\n",f="import { ProxyConfiguration, SessionPool } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst sessionPool = await SessionPool.open({ /* opts */ });\n\nconst session = await sessionPool.getSession();\n\nconst proxyUrl = await proxyConfiguration.newUrl(session.id);\n",g="import { HttpCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new HttpCrawler({\n    useSessionPool: true,\n    persistCookiesPerSession: true,\n    proxyConfiguration,\n    // ...\n});\n",w="import { JSDOMCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new JSDOMCrawler({\n    useSessionPool: true,\n    persistCookiesPerSession: true,\n    proxyConfiguration,\n    // ...\n});\n",x="import { CheerioCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new CheerioCrawler({\n    useSessionPool: true,\n    persistCookiesPerSession: true,\n    proxyConfiguration,\n    // ...\n});\n",C="import { PlaywrightCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new PlaywrightCrawler({\n    useSessionPool: true,\n    persistCookiesPerSession: true,\n    proxyConfiguration,\n    // ...\n});\n",k="import { PuppeteerCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new PuppeteerCrawler({\n    useSessionPool: true,\n    persistCookiesPerSession: true,\n    proxyConfiguration,\n    // ...\n});\n",h="import { HttpCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new HttpCrawler({\n    proxyConfiguration,\n    async requestHandler({ proxyInfo }) {\n        console.log(proxyInfo);\n    },\n    // ...\n});\n",b="import { JSDOMCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new JSDOMCrawler({\n    proxyConfiguration,\n    async requestHandler({ proxyInfo }) {\n        console.log(proxyInfo);\n    },\n    // ...\n});\n",v="import { CheerioCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new CheerioCrawler({\n    proxyConfiguration,\n    async requestHandler({ proxyInfo }) {\n        console.log(proxyInfo);\n    },\n    // ...\n});\n",P="import { PlaywrightCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new PlaywrightCrawler({\n    proxyConfiguration,\n    async requestHandler({ proxyInfo }) {\n        console.log(proxyInfo);\n    },\n    // ...\n});\n",T="import { PuppeteerCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new PuppeteerCrawler({\n    proxyConfiguration,\n    async requestHandler({ proxyInfo }) {\n        console.log(proxyInfo);\n    },\n    // ...\n});\n";var I=["components"],Z={id:"proxy-management",title:"Proxy Management",description:"Using proxies to get around those annoying IP-blocks"},j=void 0,N={unversionedId:"guides/proxy-management",id:"version-3.5/guides/proxy-management",title:"Proxy Management",description:"Using proxies to get around those annoying IP-blocks",source:"@site/versioned_docs/version-3.5/guides/proxy_management.mdx",sourceDirName:"guides",slug:"/guides/proxy-management",permalink:"/docs/guides/proxy-management",draft:!1,tags:[],version:"3.5",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1692663205,formattedLastUpdatedAt:"Aug 22, 2023",frontMatter:{id:"proxy-management",title:"Proxy Management",description:"Using proxies to get around those annoying IP-blocks"},sidebar:"docs",previous:{title:"JavaScript rendering",permalink:"/docs/guides/javascript-rendering"},next:{title:"Session Management",permalink:"/docs/guides/session-management"}},S={},O=[{value:"Quick start",id:"quick-start",level:2},{value:"Proxy Configuration",id:"proxy-configuration",level:2},{value:"Crawler integration",id:"crawler-integration",level:3},{value:"IP Rotation and session management",id:"ip-rotation-and-session-management",level:3},{value:"Inspecting current proxy in Crawlers",id:"inspecting-current-proxy-in-crawlers",level:2}],E={toc:O},D="wrapper";function U(e){var n=e.components,r=(0,o.Z)(e,I);return(0,a.kt)(D,(0,t.Z)({},E,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/IP_address_blocking",target:"_blank",rel:"noopener"},"IP address blocking")," is one of the oldest\nand most effective ways of preventing access to a website. It is therefore paramount for\na good web scraping library to provide easy to use but powerful tools which can work around\nIP blocking. The most powerful weapon in our anti IP blocking arsenal is a\n",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Proxy_server",target:"_blank",rel:"noopener"},"proxy server"),"."),(0,a.kt)("p",null,"With Crawlee we can use our own proxy servers or proxy servers acquired from\nthird-party providers."),(0,a.kt)("h2",{id:"quick-start"},"Quick start"),(0,a.kt)("p",null,"If we already have proxy URLs of our own, we can start using\nthem immediately in only a few lines of code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({\n    proxyUrls: [\n        'http://proxy-1.com',\n        'http://proxy-2.com',\n    ]\n});\nconst proxyUrl = await proxyConfiguration.newUrl();\n")),(0,a.kt)("p",null,"Examples of how to use our proxy URLs with crawlers are shown below in ",(0,a.kt)("a",{parentName:"p",href:"#crawler-integration",target:null,rel:null},"Crawler integration")," section."),(0,a.kt)("h2",{id:"proxy-configuration"},"Proxy Configuration"),(0,a.kt)("p",null,"All our proxy needs are managed by the ",(0,a.kt)(i.Z,{to:"core/class/ProxyConfiguration",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"p"},"ProxyConfiguration"))," class. We create an instance using the ",(0,a.kt)("inlineCode",{parentName:"p"},"ProxyConfiguration")," ",(0,a.kt)(i.Z,{to:"core/class/ProxyConfiguration#constructor",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"p"},"constructor"))," function based on the provided options. See the ",(0,a.kt)(i.Z,{to:"core/interface/ProxyConfigurationOptions",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"p"},"ProxyConfigurationOptions"))," for all the possible constructor options."),(0,a.kt)("h3",{id:"crawler-integration"},"Crawler integration"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ProxyConfiguration")," integrates seamlessly into ",(0,a.kt)(i.Z,{to:"http-crawler/class/HttpCrawler",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"p"},"HttpCrawler")),", ",(0,a.kt)(i.Z,{to:"cheerio-crawler/class/CheerioCrawler",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")),", ",(0,a.kt)(i.Z,{to:"jsdom-crawler/class/JSDOMCrawler",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"p"},"JSDOMCrawler")),", ",(0,a.kt)(i.Z,{to:"playwright-crawler/class/PlaywrightCrawler",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler"))," and ",(0,a.kt)(i.Z,{to:"puppeteer-crawler/class/PuppeteerCrawler",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler")),"."),(0,a.kt)(l.Z,{groupId:"proxy_session_management",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"http",label:"HttpCrawler",mdxType:"TabItem"},(0,a.kt)(p.Z,{language:"js",mdxType:"CodeBlock"},u)),(0,a.kt)(s.Z,{value:"cheerio",label:"CheerioCrawler",default:!0,mdxType:"TabItem"},(0,a.kt)(p.Z,{language:"js",mdxType:"CodeBlock"},d)),(0,a.kt)(s.Z,{value:"jsdom",label:"JSDOMCrawler",mdxType:"TabItem"},(0,a.kt)(p.Z,{language:"js",mdxType:"CodeBlock"},c)),(0,a.kt)(s.Z,{value:"playwright",label:"PlaywrightCrawler",mdxType:"TabItem"},(0,a.kt)(p.Z,{language:"js",mdxType:"CodeBlock"},m)),(0,a.kt)(s.Z,{value:"puppeteer",label:"PuppeteerCrawler",mdxType:"TabItem"},(0,a.kt)(p.Z,{language:"js",mdxType:"CodeBlock"},y))),(0,a.kt)("p",null,"Our crawlers will now use the selected proxies for all connections."),(0,a.kt)("h3",{id:"ip-rotation-and-session-management"},"IP Rotation and session management"),(0,a.kt)("p",null,"\u200b",(0,a.kt)(i.Z,{to:"core/class/ProxyConfiguration#newUrl",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"p"},"proxyConfiguration.newUrl()"))," allows us to pass a ",(0,a.kt)("inlineCode",{parentName:"p"},"sessionId")," parameter. It will then be used to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"sessionId"),"-",(0,a.kt)("inlineCode",{parentName:"p"},"proxyUrl")," pair, and subsequent ",(0,a.kt)("inlineCode",{parentName:"p"},"newUrl()")," calls with the same ",(0,a.kt)("inlineCode",{parentName:"p"},"sessionId")," will always return the same ",(0,a.kt)("inlineCode",{parentName:"p"},"proxyUrl"),". This is extremely useful in scraping, because we want to create the impression of a real user. See the ",(0,a.kt)("a",{parentName:"p",href:"../guides/session-management",target:null,rel:null},"session management guide")," and ",(0,a.kt)(i.Z,{to:"core/class/SessionPool",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"p"},"SessionPool"))," class for more information on how keeping a real session helps us avoid blocking."),(0,a.kt)("p",null,"When no ",(0,a.kt)("inlineCode",{parentName:"p"},"sessionId")," is provided, our proxy URLs are rotated round-robin."),(0,a.kt)(l.Z,{groupId:"proxy_session_management",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"http",label:"HttpCrawler",mdxType:"TabItem"},(0,a.kt)(p.Z,{language:"js",mdxType:"CodeBlock"},g)),(0,a.kt)(s.Z,{value:"cheerio",label:"CheerioCrawler",default:!0,mdxType:"TabItem"},(0,a.kt)(p.Z,{language:"js",mdxType:"CodeBlock"},x)),(0,a.kt)(s.Z,{value:"jsdom",label:"JSDOMCrawler",mdxType:"TabItem"},(0,a.kt)(p.Z,{language:"js",mdxType:"CodeBlock"},w)),(0,a.kt)(s.Z,{value:"playwright",label:"PlaywrightCrawler",mdxType:"TabItem"},(0,a.kt)(p.Z,{language:"js",mdxType:"CodeBlock"},C)),(0,a.kt)(s.Z,{value:"puppeteer",label:"PuppeteerCrawler",mdxType:"TabItem"},(0,a.kt)(p.Z,{language:"js",mdxType:"CodeBlock"},k)),(0,a.kt)(s.Z,{value:"standalone",label:"Standalone",mdxType:"TabItem"},(0,a.kt)(p.Z,{language:"js",mdxType:"CodeBlock"},f))),(0,a.kt)("h2",{id:"inspecting-current-proxy-in-crawlers"},"Inspecting current proxy in Crawlers"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"HttpCrawler"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"CheerioCrawler"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"JSDOMCrawler"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler")," grant access to information about the currently used proxy\nin their ",(0,a.kt)("inlineCode",{parentName:"p"},"requestHandler")," using a ",(0,a.kt)(i.Z,{to:"core/interface/ProxyInfo",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"p"},"proxyInfo"))," object.\nWith the ",(0,a.kt)("inlineCode",{parentName:"p"},"proxyInfo")," object, we can easily access the proxy URL."),(0,a.kt)(l.Z,{groupId:"proxy_session_management",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"http",label:"HttpCrawler",mdxType:"TabItem"},(0,a.kt)(p.Z,{language:"js",mdxType:"CodeBlock"},h)),(0,a.kt)(s.Z,{value:"cheerio",label:"CheerioCrawler",default:!0,mdxType:"TabItem"},(0,a.kt)(p.Z,{language:"js",mdxType:"CodeBlock"},v)),(0,a.kt)(s.Z,{value:"jsdom",label:"JSDOMCrawler",mdxType:"TabItem"},(0,a.kt)(p.Z,{language:"js",mdxType:"CodeBlock"},b)),(0,a.kt)(s.Z,{value:"playwright",label:"PlaywrightCrawler",mdxType:"TabItem"},(0,a.kt)(p.Z,{language:"js",mdxType:"CodeBlock"},P)),(0,a.kt)(s.Z,{value:"puppeteer",label:"PuppeteerCrawler",mdxType:"TabItem"},(0,a.kt)(p.Z,{language:"js",mdxType:"CodeBlock"},T))))}U.isMDXComponent=!0},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.5.2","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"ts-node -T ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.5.2","@crawlee/browser":"3.5.2","@crawlee/browser-pool":"3.5.2","@crawlee/cheerio":"3.5.2","@crawlee/cli":"3.5.2","@crawlee/core":"3.5.2","@crawlee/http":"3.5.2","@crawlee/jsdom":"3.5.2","@crawlee/linkedom":"3.5.2","@crawlee/playwright":"3.5.2","@crawlee/puppeteer":"3.5.2","@crawlee/utils":"3.5.2","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"<= 2.x","puppeteer":"<= 21.1"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);