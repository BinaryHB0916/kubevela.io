(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[3282],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return u},kt:function(){return m}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||i;return r?t.createElement(f,a(a({ref:n},u),{},{components:r})):t.createElement(f,a({ref:n},u))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},985:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var t=r(2122),o=r(9756),i=(r(7294),r(3905)),a={title:"Worker"},c={unversionedId:"end-user/components/worker",id:"end-user/components/worker",isDocsHomePage:!1,title:"Worker",description:"Description",source:"@site/docs/end-user/components/worker.md",sourceDirName:"end-user/components",slug:"/end-user/components/worker",permalink:"/zh/docs/next/end-user/components/worker",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/end-user/components/worker.md",version:"current",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1620154848,formattedLastUpdatedAt:"5/4/2021",frontMatter:{title:"Worker"},sidebar:"docs",previous:{title:"Task",permalink:"/zh/docs/next/end-user/components/task"},next:{title:"Cloud Services",permalink:"/zh/docs/next/end-user/components/cloud-services"}},s=[{value:"Description",id:"description",children:[]},{value:"Samples",id:"samples",children:[]},{value:"Specification",id:"specification",children:[]}],p={toc:s};function u(e){var n=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Describes long-running, scalable, containerized services that running at backend. They do NOT have network endpoint to receive external network traffic."),(0,i.kt)("h2",{id:"samples"},"Samples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: app-worker\nspec:\n  components:\n    - name: myworker\n      type: worker\n      properties:\n        image: "busybox"\n        cmd:\n          - sleep\n          - "1000"\n')),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"# Properties\n+-------+----------------------------------------------------+----------+----------+---------+\n| NAME  |                    DESCRIPTION                     |   TYPE   | REQUIRED | DEFAULT |\n+-------+----------------------------------------------------+----------+----------+---------+\n| cmd   | Commands to run in the container                   | []string | false    |         |\n| image | Which image would you like to use for your service | string   | true     |         |\n+-------+----------------------------------------------------+----------+----------+---------+\n")))}u.isMDXComponent=!0}}]);