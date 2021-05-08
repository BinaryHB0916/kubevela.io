(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[4543],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||l;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1641:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p},default:function(){return c}});var n=r(2122),a=r(9756),l=(r(7294),r(3905)),i={title:"Rollout"},o={unversionedId:"developers/references/traits/rollout",id:"version-v1.0/developers/references/traits/rollout",isDocsHomePage:!1,title:"Rollout",description:"Description",source:"@site/versioned_docs/version-v1.0/developers/references/traits/rollout.md",sourceDirName:"developers/references/traits",slug:"/developers/references/traits/rollout",permalink:"/zh/docs/developers/references/traits/rollout",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/developers/references/traits/rollout.md",version:"v1.0",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1619772878,formattedLastUpdatedAt:"4/30/2021",frontMatter:{title:"Rollout"}},p=[{value:"Description",id:"description",children:[]},{value:"Specification",id:"specification",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Conflicts With",id:"conflicts-with",children:[{value:"<code>Autoscale</code>",id:"autoscale",children:[]}]}],u={toc:p};function c(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Configures Canary deployment strategy for your application."),(0,l.kt)("h2",{id:"specification"},"Specification"),(0,l.kt)("p",null,"List of all configuration options for a ",(0,l.kt)("inlineCode",{parentName:"p"},"Rollout")," trait."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'...\n    rollout:\n      replicas: 2\n      stepWeight: 50\n      interval: "10s"\n')),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"interval"),(0,l.kt)("td",{parentName:"tr",align:null},"Schedule interval time"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"30s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stepWeight"),(0,l.kt)("td",{parentName:"tr",align:null},"Weight percent of every step in rolling update"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"50")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"replicas"),(0,l.kt)("td",{parentName:"tr",align:null},"Total replicas of the workload"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"2")))),(0,l.kt)("h2",{id:"conflicts-with"},"Conflicts With"),(0,l.kt)("h3",{id:"autoscale"},(0,l.kt)("inlineCode",{parentName:"h3"},"Autoscale")),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"Rollout")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Autoscle")," traits are attached to the same service, they two will fight over the number of instances during rollout. Thus, it's by design that ",(0,l.kt)("inlineCode",{parentName:"p"},"Rollout")," will take over replicas control (specified by ",(0,l.kt)("inlineCode",{parentName:"p"},".replicas")," field) during rollout."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: in up coming releases, KubeVela will introduce a separate section in Appfile to define release phase configurations such as ",(0,l.kt)("inlineCode",{parentName:"p"},"Rollout"),".")))}c.isMDXComponent=!0}}]);