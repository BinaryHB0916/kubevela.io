(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[8043],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return m},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,k=u["".concat(p,".").concat(d)]||u[d]||s[d]||i;return t?a.createElement(k,o(o({ref:n},m),{},{components:t})):a.createElement(k,o({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6109:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var a=t(2122),r=t(9756),i=(t(7294),t(3905)),o={title:"How-to"},l={unversionedId:"platform-engineers/kube/component",id:"platform-engineers/kube/component",isDocsHomePage:!1,title:"How-to",description:"In this section, it will introduce how to use simple template to declare Kubernetes API resource into a component.",source:"@site/docs/platform-engineers/kube/component.md",sourceDirName:"platform-engineers/kube",slug:"/platform-engineers/kube/component",permalink:"/docs/next/platform-engineers/kube/component",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/platform-engineers/kube/component.md",version:"current",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1620154848,formattedLastUpdatedAt:"5/4/2021",frontMatter:{title:"How-to"},sidebar:"docs",previous:{title:"Known Limitations",permalink:"/docs/next/platform-engineers/helm/known-issues"},next:{title:"Attach Traits",permalink:"/docs/next/platform-engineers/kube/trait"}},p=[{value:"Declare <code>ComponentDefinition</code>",id:"declare-componentdefinition",children:[]},{value:"Declare an <code>Application</code>",id:"declare-an-application",children:[]}],c={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this section, it will introduce how to use simple template to declare Kubernetes API resource into a component."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Before reading this part, please make sure you've learned ",(0,i.kt)("a",{parentName:"p",href:"../definition-and-templates"},"the definition and template concepts"),".")),(0,i.kt)("h2",{id:"declare-componentdefinition"},"Declare ",(0,i.kt)("inlineCode",{parentName:"h2"},"ComponentDefinition")),(0,i.kt)("p",null,"Here is a simple template based ",(0,i.kt)("inlineCode",{parentName:"p"},"ComponentDefinition")," example which provides a abstraction for worker workload type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  name: kube-worker\n  namespace: default\nspec:\n  workload: \n    definition: \n      apiVersion: apps/v1\n      kind: Deployment\n  schematic:\n    kube: \n      template:\n        apiVersion: apps/v1\n        kind: Deployment\n        spec:\n          selector:\n            matchLabels:\n              app: nginx\n          template:\n            metadata:\n              labels:\n                app: nginx\n            spec:\n              containers:\n              - name: nginx\n                ports:\n                - containerPort: 80 \n      parameters: \n      - name: image\n        required: true\n        type: string\n        fieldPaths: \n        - "spec.template.spec.containers[0].image"\n')),(0,i.kt)("p",null,"In detail, the ",(0,i.kt)("inlineCode",{parentName:"p"},".spec.schematic.kube")," contains template of a workload resource and\nconfigurable parameters."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".spec.schematic.kube.template")," is the simple template in YAML format."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".spec.schematic.kube.parameters")," contains a set of configurable parameters. The ",(0,i.kt)("inlineCode",{parentName:"li"},"name"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"type"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"fieldPaths")," are required fields, ",(0,i.kt)("inlineCode",{parentName:"li"},"description")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"required")," are optional fields.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The parameter ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," must be unique in a ",(0,i.kt)("inlineCode",{parentName:"li"},"ComponentDefinition"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")," indicates the data type of value set to the field. This is a required field which will help KubeVela to generate a OpenAPI JSON schema for the parameters automatically. In simple template, only basic data types are allowed, including ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),", while ",(0,i.kt)("inlineCode",{parentName:"li"},"array")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"object")," are not."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fieldPaths")," in the parameter specifies an array of fields within the template that will be overwritten by the value of this parameter. Fields are specified as JSON field paths without a leading dot, for example\n",(0,i.kt)("inlineCode",{parentName:"li"},"spec.replicas"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"spec.containers[0].image"),".")))),(0,i.kt)("h2",{id:"declare-an-application"},"Declare an ",(0,i.kt)("inlineCode",{parentName:"h2"},"Application")),(0,i.kt)("p",null,"Here is an example ",(0,i.kt)("inlineCode",{parentName:"p"},"Application"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: myapp\n  namespace: default\nspec:\n  components:\n    - name: mycomp\n      type: kube-worker\n      properties: \n        image: nginx:1.14.0\n")),(0,i.kt)("p",null,"Since parameters only support basic data type, values in ",(0,i.kt)("inlineCode",{parentName:"p"},"properties")," should be simple key-value, ",(0,i.kt)("inlineCode",{parentName:"p"},"<parameterName>: <parameterValue>"),"."),(0,i.kt)("p",null,"Deploy the ",(0,i.kt)("inlineCode",{parentName:"p"},"Application")," and verify the running workload instance."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deploy\nNAME                     READY   UP-TO-DATE   AVAILABLE   AGE\nmycomp                   1/1     1            1           66m\n")),(0,i.kt)("p",null,"And check the parameter works."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deployment mycomp -o json | jq '.spec.template.spec.containers[0].image'\n\"nginx:1.14.0\"\n")))}m.isMDXComponent=!0}}]);