(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[8528],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8312:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a={title:"Monitoring"},l={unversionedId:"end-user/monitoring",id:"end-user/monitoring",isDocsHomePage:!1,title:"Monitoring",description:"TBD, Content Overview\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/end-user/monitoring.md",sourceDirName:"end-user",slug:"/end-user/monitoring",permalink:"/zh/docs/next/end-user/monitoring",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/end-user/monitoring.md",version:"current",lastUpdatedBy:"guoxudong",lastUpdatedAt:1619578426,formattedLastUpdatedAt:"4/28/2021",frontMatter:{title:"Monitoring"}},c=[],u={toc:c};function s(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"TBD, Content Overview\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"We will move all installation scripts to a separate doc may be named Install Capability Providers (e.g. ",(0,i.kt)("a",{parentName:"li",href:"https://knative.dev/docs/install/install-extensions/)Install"},"https://knative.dev/docs/install/install-extensions/)Install")," monitoring trait(along with prometheus/grafana controller)."),(0,i.kt)("li",{parentName:"ol"},"Add monitoring trait into Application."),(0,i.kt)("li",{parentName:"ol"},"View it with grafana.")))}s.isMDXComponent=!0}}]);