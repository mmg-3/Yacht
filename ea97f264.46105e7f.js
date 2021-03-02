(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(113)),i={title:"Applications",description:"Yacht Application Documentation",id:"Applications"},c={unversionedId:"Pages/Applications",id:"Pages/Applications",isDocsHomePage:!1,title:"Applications",description:"Yacht Application Documentation",source:"@site/docs/Pages/applications.md",slug:"/Pages/Applications",permalink:"/docs/Pages/Applications",editUrl:"https://github.com/SelfhostedPro/Yacht-Docs/edit/master/docs/Pages/applications.md",version:"current",sidebar:"documentation",previous:{title:"Dashboard",permalink:"/docs/Pages/Dashboard"},next:{title:"Templates",permalink:"/docs/Pages/Templates"}},l=[{value:"View Applications",id:"view-applications",children:[{value:"Updates",id:"updates",children:[]}]},{value:"Application Info",id:"application-info",children:[{value:"Info",id:"info",children:[]},{value:"Processes",id:"processes",children:[]},{value:"Logs",id:"logs",children:[]},{value:"Stats",id:"stats",children:[]}]},{value:"New Application",id:"new-application",children:[]}],p={toc:l};function s(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",{alt:"Applications Page",src:n(166).default})),Object(o.b)("h2",{id:"view-applications"},"View Applications"),Object(o.b)("p",null,"In the main view of the applications page you can see the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Running Apps:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"App Name"),Object(o.b)("li",{parentName:"ul"},"App Status"),Object(o.b)("li",{parentName:"ul"},"App Image"),Object(o.b)("li",{parentName:"ul"},"Ports/Port Labels"),Object(o.b)("li",{parentName:"ul"},"Created time"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"App Actions (down chevron to the left):"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Start"),Object(o.b)("li",{parentName:"ul"},"Stop"),Object(o.b)("li",{parentName:"ul"},"Restart"),Object(o.b)("li",{parentName:"ul"},"Update (one click utilizing watchtower on the backend)"),Object(o.b)("li",{parentName:"ul"},"Kill"),Object(o.b)("li",{parentName:"ul"},"Remove")))),Object(o.b)("p",null,"Apps are sortable by the columns at the top or searchable via the searchbar at the top. Click on an app to view more details. Ports will be labeled if they were set when deployed. "),Object(o.b)("h3",{id:"updates"},"Updates"),Object(o.b)("p",null,'To check for updates click on the chevron next to "Apps" at the top of the page and then "Check for updates". This will querry dockerhub and check the latest manifest for your tag against the currently running one. Once the check is complete there will be a green dot next to applications with updates available. You can go into App Actions to update the app.'),Object(o.b)("h2",{id:"application-info"},"Application Info"),Object(o.b)("h3",{id:"info"},"Info"),Object(o.b)("p",null,"In this view you can see configuration settings for your container."),Object(o.b)("h3",{id:"processes"},"Processes"),Object(o.b)("p",null,"This page shows the processes currently running on your container."),Object(o.b)("h3",{id:"logs"},"Logs"),Object(o.b)("p",null,"The logs page will stream logs from the container to your browser so you don't need to refresh the page."),Object(o.b)("h3",{id:"stats"},"Stats"),Object(o.b)("p",null,"This page shows a live view of the CPU and Memory usage for your container with 5 minutes worth of historical data (starting when you load the page)."),Object(o.b)("h2",{id:"new-application"},"New Application"),Object(o.b)("p",null,"This is the page where you can deploy containers. In the top right there's a button to load an app from a template. The page walks you through all of the different information required to deploy a container."))}s.isMDXComponent=!0},113:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,h=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?r.a.createElement(h,c(c({ref:t},p),{},{components:n})):r.a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},166:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Yacht-Applications-6ca8bd6330d77e44f5f3e6bf47fbc2d1.png"}}]);