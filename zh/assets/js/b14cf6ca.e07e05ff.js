(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[2951],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2272:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),i={title:"Overview"},l={unversionedId:"platform-engineers/overview",id:"platform-engineers/overview",isDocsHomePage:!1,title:"Overview",description:"This documentation will explain what is Application object and why you need it.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/platform-engineers/overview.md",sourceDirName:"platform-engineers",slug:"/platform-engineers/overview",permalink:"/zh/docs/next/platform-engineers/overview",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/platform-engineers/overview.md",version:"current",lastUpdatedBy:"guoxudong",lastUpdatedAt:1617948166,formattedLastUpdatedAt:"4/9/2021",frontMatter:{title:"Overview"},sidebar:"docs",previous:{title:"Dry-Run / Live-Diff",permalink:"/zh/docs/next/end-user/debug"},next:{title:"\u5b9a\u4e49CRD",permalink:"/zh/docs/next/platform-engineers/definition-and-templates"}},s=[{value:"Motivation",id:"motivation",children:[]},{value:"Application",id:"application",children:[{value:"No &quot;Juggling&quot; Approach to Manage Kubernetes Objects",id:"no-juggling-approach-to-manage-kubernetes-objects",children:[]},{value:"No Configuration Drift",id:"no-configuration-drift",children:[]}]}],p={toc:s};function c(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This documentation will explain what is ",(0,r.kt)("inlineCode",{parentName:"p"},"Application")," object and why you need it."),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"Encapsulation based abstraction is probably the mostly widely used approach to enable easier developer experience and allow users to deliver the whole application resources as one unit. For example, many tools today encapsulate Kubernetes ",(0,r.kt)("em",{parentName:"p"},"Deployment")," and ",(0,r.kt)("em",{parentName:"p"},"Service")," into a ",(0,r.kt)("em",{parentName:"p"},"Web Service")," module, and then instantiate this module by simply providing parameters such as ",(0,r.kt)("em",{parentName:"p"},"image=foo")," and ",(0,r.kt)("em",{parentName:"p"},"ports=80"),". This pattern can be found in cdk8s (e.g. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/awslabs/cdk8s/blob/master/examples/typescript/web-service/web-service.ts"},(0,r.kt)("inlineCode",{parentName:"a"},"web-service.ts")," "),"), CUE (e.g. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cuelang/cue/blob/b8b489251a3f9ea318830788794c1b4a753031c0/doc/tutorial/kubernetes/quick/services/kube.cue#L70"},(0,r.kt)("inlineCode",{parentName:"a"},"kube.cue")),"), and many widely used Helm charts (e.g. ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bitnami.com/tutorials/create-your-first-helm-chart/"},"Web Service"),")."),(0,r.kt)("p",null,"Despite the efficiency and extensibility in defining abstractions, both DSL tools (e.g. cdk8s , CUE and Helm templating) are mostly used as client side tools and can be barely used as a platform level building block. This leaves platform builders either have to create restricted/inextensible abstractions, or re-invent the wheels of what DSL/templating has already been doing great."),(0,r.kt)("p",null,"KubeVela allows platform teams to create developer-centric abstractions with DSL/templating but maintain them with the battle tested ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/architecture/controller/"},"Kubernetes Control Loop"),". "),(0,r.kt)("h2",{id:"application"},"Application"),(0,r.kt)("p",null,"First of all, KubeVela introduces an ",(0,r.kt)("inlineCode",{parentName:"p"},"Application")," CRD as its main abstraction that could capture a full application deployment. To model the modern microservices, every application is composed by multiple components with attached traits (operational behaviors). For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: application-sample\nspec:\n  components:\n    - name: foo\n      type: webservice\n      properties:\n        image: crccheck/hello-world\n        port: 8000\n      traits:\n        - type: ingress\n          properties:\n            domain: testsvc.example.com\n            http:\n              "/": 8000\n        - type: sidecar\n          properties:\n            name: "logging"\n            image: "fluentd"\n    - name: bar\n      type: aliyun-oss # cloud service\n      bucket: "my-bucket"\n')),(0,r.kt)("p",null,"The schema of ",(0,r.kt)("em",{parentName:"p"},"component")," and ",(0,r.kt)("em",{parentName:"p"},"trait")," specification in this application is actually enforced by another set of building block objects named ",(0,r.kt)("em",{parentName:"p"},'"definitions"'),", for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"ComponentDefinition")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"TraitDefinition"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"XxxDefinition")," resources are designed to leverage encapsulation solutions such as ",(0,r.kt)("inlineCode",{parentName:"p"},"CUE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Helm")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Terraform modules")," to template and parameterize Kubernetes resources as well as cloud services. This enables users to assemble templated capabilities into an ",(0,r.kt)("inlineCode",{parentName:"p"},"Application")," by simply setting parameters. In the ",(0,r.kt)("inlineCode",{parentName:"p"},"application-sample")," above, it models a Kubernetes Deployment (component ",(0,r.kt)("inlineCode",{parentName:"p"},"foo"),") to run container and a Alibaba Cloud OSS bucket (component ",(0,r.kt)("inlineCode",{parentName:"p"},"bar"),") alongside."),(0,r.kt)("p",null,"This abstraction mechanism is the key for KubeVela to provide ",(0,r.kt)("em",{parentName:"p"},"PaaS-like")," experience (",(0,r.kt)("em",{parentName:"p"},"i.e. app-centric, higher level abstractions, self-service operations etc"),") to end users, with benefits highlighted as below."),(0,r.kt)("h3",{id:"no-juggling-approach-to-manage-kubernetes-objects"},'No "Juggling" Approach to Manage Kubernetes Objects'),(0,r.kt)("p",null,"For example, as the platform team we want to leverage Istio as the Service Mesh layer to control the traffic to certain ",(0,r.kt)("inlineCode",{parentName:"p"},"Deployment"),' instances. But this could be really painful today because we have to enforce end users to define and manage a set of Kubernetes resources in a "juggling" approach. For example, in a simple canary rollout case, the end users have to carefully manage a primary ',(0,r.kt)("em",{parentName:"p"},"Deployment"),", a primary ",(0,r.kt)("em",{parentName:"p"},"Service"),", a ",(0,r.kt)("em",{parentName:"p"},"root Service"),", a canary ",(0,r.kt)("em",{parentName:"p"},"Deployment"),", a canary ",(0,r.kt)("em",{parentName:"p"},"Service"),", and have to probably rename the ",(0,r.kt)("em",{parentName:"p"},"Deployment")," instance after canary promotion (this is actually unacceptable in production because renaming will lead to the app restart). What's worse, we have to expect the users properly set the labels and selectors on those objects carefully because they are the key to ensure proper accessibility of every app instance and the only revision mechanism our Istio controller could count on."),(0,r.kt)("p",null,"The issue above could be even painful if the component instance is not ",(0,r.kt)("em",{parentName:"p"},"Deployment"),", but ",(0,r.kt)("em",{parentName:"p"},"StatefulSet")," or custom workload type. For example, normally it doesn't make sense to replicate a ",(0,r.kt)("em",{parentName:"p"},"StatefulSet")," instance during rollout, this means the users have to maintain the name, revision, label, selector, app instances in a totally different approach from ",(0,r.kt)("em",{parentName:"p"},"Deployment"),"."),(0,r.kt)("h4",{id:"standard-contract-behind-the-abstraction"},"Standard Contract Behind The Abstraction"),(0,r.kt)("p",null,"KubeVela is designed to relieve such burden of managing versionized Kubernetes resources manually. In nutshell, all the needed Kubernetes resources for an app are now encapsulated in a single abstraction, and KubeVela will maintain the instance name, revisions, labels and selector by the battle tested reconcile loop automation, not by human hand. At the meantime, the existence of definition objects allow the platform team to customize the details of all above metadata behind the abstraction, even control the behavior of how to do revision."),(0,r.kt)("p",null,'Thus, all those metadata now become a standard contract that any "day 2" operation controller such as Istio or rollout can rely on. This is the key to ensure our platform could provide user friendly experience but keep "transparent" to the operational behaviors.'),(0,r.kt)("h3",{id:"no-configuration-drift"},"No Configuration Drift"),(0,r.kt)("p",null,"Light-weighted and flexible in defining abstractions, any of the existing encapsulation solutions today work at client side, for example, DSL/IaC (Infrastructure as Code) tools and Helm. This approach is easy to be adopted and has less invasion in the user cluster."),(0,r.kt)("p",null,"But client side abstractions always lead to an issue called ",(0,r.kt)("em",{parentName:"p"},"Infrastructure/Configuration Drift"),", i.e. the generated component instances are not in line with the expected configuration. This could be caused by incomplete coverage, less-than-perfect processes or emergency changes."),(0,r.kt)("p",null,"Hence, all abstractions in KubeVela is designed to be maintained with ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/architecture/controller/"},"Kubernetes Control Loop")," and leverage Kubernetes control plane to eliminate the issue of configuration drifting, and still keeps the flexibly and velocity enabled by existing encapsulation solutions (e.g. DSL/IaC and templating)."))}c.isMDXComponent=!0}}]);