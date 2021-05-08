(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[5863],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(b,s(s({ref:t},c),{},{components:n})):r.createElement(b,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2464:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return i},default:function(){return c}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),s={title:"Labels and Annotations"},l={unversionedId:"end-user/traits/labels",id:"end-user/traits/labels",isDocsHomePage:!1,title:"Labels and Annotations",description:"List Traits",source:"@site/docs/end-user/traits/labels.md",sourceDirName:"end-user/traits",slug:"/end-user/traits/labels",permalink:"/docs/next/end-user/traits/labels",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/end-user/traits/labels.md",version:"current",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1620154848,formattedLastUpdatedAt:"5/4/2021",frontMatter:{title:"Labels and Annotations"},sidebar:"docs",previous:{title:"Manual Scaling",permalink:"/docs/next/end-user/traits/scaler"},next:{title:"Attaching Sidecar",permalink:"/docs/next/end-user/traits/sidecar"}},i=[{value:"List Traits",id:"list-traits",children:[]}],p={toc:i};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"list-traits"},"List Traits"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"label")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"annotations")," traits allows you to append labels and annotations to the component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# myapp.yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: myapp\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        image: crccheck/hello-world\n        port: 8000\n      traits:\n        - type: labels\n          properties:\n            "release": "stable"\n        - type: annotations\n          properties:\n            "description": "web application"\n')),(0,o.kt)("p",null,"Deploy this application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f myapp.yaml\n")),(0,o.kt)("p",null,"On runtime cluster, check the workload has been created successfully."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get deployments\nNAME             READY   UP-TO-DATE   AVAILABLE   AGE\nexpress-server   1/1     1            1           15s\n")),(0,o.kt)("p",null,"Check the ",(0,o.kt)("inlineCode",{parentName:"p"},"labels"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl get deployments express-server -o jsonpath=\'{.spec.template.metadata.labels}\'\n{"app.oam.dev/component":"express-server","release": "stable"}\n')),(0,o.kt)("p",null,"Check the ",(0,o.kt)("inlineCode",{parentName:"p"},"annotations"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl get deployments express-server -o jsonpath=\'{.spec.template.metadata.annotations}\'\n{"description":"web application"}\n')))}c.isMDXComponent=!0}}]);