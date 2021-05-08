(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[8771],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2467:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return c},default:function(){return s}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),l={title:"vela cap"},o={unversionedId:"cli/vela_cap",id:"version-v1.0/cli/vela_cap",isDocsHomePage:!1,title:"vela cap",description:"Manage capability centers and installing/uninstalling capabilities",source:"@site/versioned_docs/version-v1.0/cli/vela_cap.md",sourceDirName:"cli",slug:"/cli/vela_cap",permalink:"/zh/docs/cli/vela_cap",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/cli/vela_cap.md",version:"v1.0",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1619772878,formattedLastUpdatedAt:"4/30/2021",frontMatter:{title:"vela cap"},sidebar:"version-v1.0/docs",previous:{title:"vela template",permalink:"/zh/docs/cli/vela_template"},next:{title:"Overview",permalink:"/zh/docs/developers/references/README"}},c=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}],p={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Manage capability centers and installing/uninstalling capabilities"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Manage capability centers and installing/uninstalling capabilities"),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -h, --help   help for cap\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -e, --env string   specify environment name for application\n")),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"vela"},"vela"),"\t - "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"vela_cap_center"},"vela cap center"),"\t - Manage Capability Center"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"vela_cap_install"},"vela cap install"),"\t - Install capability into cluster"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"vela_cap_ls"},"vela cap ls"),"\t - List capabilities from cap-center"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"vela_cap_uninstall"},"vela cap uninstall"),"\t - Uninstall capability from cluster")),(0,i.kt)("h6",{id:"auto-generated-by-spf13cobra-on-20-mar-2021"},"Auto generated by spf13/cobra on 20-Mar-2021"))}s.isMDXComponent=!0}}]);