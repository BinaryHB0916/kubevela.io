(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[9281],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,b=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(b,r(r({ref:t},c),{},{components:n})):a.createElement(b,r({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,r[1]=p;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2481:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return p},toc:function(){return l},default:function(){return c}});var a=n(2122),o=n(9756),i=(n(7294),n(3905)),r={title:"Resource Model"},p={unversionedId:"platform-engineers/overview",id:"version-v1.0/platform-engineers/overview",isDocsHomePage:!1,title:"Resource Model",description:"This documentation will explain the core resource model of KubeVela which is fully powered by Open Application Model (OAM).",source:"@site/versioned_docs/version-v1.0/platform-engineers/overview.md",sourceDirName:"platform-engineers",slug:"/platform-engineers/overview",permalink:"/docs/platform-engineers/overview",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/platform-engineers/overview.md",version:"v1.0",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1619772878,formattedLastUpdatedAt:"4/30/2021",frontMatter:{title:"Resource Model"},sidebar:"version-v1.0/docs",previous:{title:"Application Rollout",permalink:"/docs/end-user/rollout-app"},next:{title:"Programmable Building Blocks",permalink:"/docs/platform-engineers/definition-and-templates"}},l=[{value:"Application",id:"application",children:[]},{value:"Component",id:"component",children:[{value:"How it Works?",id:"how-it-works",children:[]}]},{value:"Traits",id:"traits",children:[]},{value:"Standard Contract Behind The Abstractions",id:"standard-contract-behind-the-abstractions",children:[]},{value:"No Configuration Drift",id:"no-configuration-drift",children:[]}],s={toc:l};function c(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This documentation will explain the core resource model of KubeVela which is fully powered by Open Application Model (OAM)."),(0,i.kt)("h2",{id:"application"},"Application"),(0,i.kt)("p",null,"KubeVela introduces an ",(0,i.kt)("inlineCode",{parentName:"p"},"Application")," CRD as its main API that captures a full application deployment. Every application is composed by multiple components with attachable operational behaviors (traits). For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: application-sample\nspec:\n  components:\n    - name: foo\n      type: webservice\n      properties:\n        image: crccheck/hello-world\n        port: 8000\n      traits:\n        - type: ingress\n          properties:\n            domain: testsvc.example.com\n            http:\n              "/": 8000\n        - type: sidecar\n          properties:\n            name: "logging"\n            image: "fluentd"\n    - name: bar\n      type: aliyun-oss # cloud service\n      bucket: "my-bucket"\n')),(0,i.kt)("p",null,"Though the application object doesn't have fixed schema, it is a composition object assembled by several ",(0,i.kt)("em",{parentName:"p"},"programmable building blocks")," as shown below."),(0,i.kt)("h2",{id:"component"},"Component"),(0,i.kt)("p",null,"The component model in KubeVela is designed to allow ",(0,i.kt)("em",{parentName:"p"},"component providers")," to encapsulate deployable/provisionable entities by leveraging widely adopted tools such as CUE, Helm etc, and give a easier path to developers to deploy complicated microservices with ease."),(0,i.kt)("p",null,"Templates based encapsulation is probably the mostly widely used approach to enable efficient application deployment and exposes easier interfaces to end users. For example, many tools today encapsulate Kubernetes ",(0,i.kt)("em",{parentName:"p"},"Deployment")," and ",(0,i.kt)("em",{parentName:"p"},"Service")," into a ",(0,i.kt)("em",{parentName:"p"},"Web Service")," module, and then instantiate this module by simply providing parameters such as ",(0,i.kt)("em",{parentName:"p"},"image=foo")," and ",(0,i.kt)("em",{parentName:"p"},"ports=80"),". This pattern can be found in cdk8s (e.g. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/awslabs/cdk8s/blob/master/examples/typescript/web-service/web-service.ts"},(0,i.kt)("inlineCode",{parentName:"a"},"web-service.ts")," "),"), CUE (e.g. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cuelang/cue/blob/b8b489251a3f9ea318830788794c1b4a753031c0/doc/tutorial/kubernetes/quick/services/kube.cue#L70"},(0,i.kt)("inlineCode",{parentName:"a"},"kube.cue")),"), and many widely used Helm charts (e.g. ",(0,i.kt)("a",{parentName:"p",href:"https://docs.bitnami.com/tutorials/create-your-first-helm-chart/"},"Web Service"),")."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Hence, a components provider could be anyone who packages software components in form of Helm chart of CUE modules. Think about 3rd-party software distributor, DevOps team, or even your CI pipeline.")),(0,i.kt)("p",null,"In above example, it describes an application composed with Kubernetes stateless workload (component ",(0,i.kt)("inlineCode",{parentName:"p"},"foo"),") and a Alibaba Cloud OSS bucket (component ",(0,i.kt)("inlineCode",{parentName:"p"},"bar"),") alongside."),(0,i.kt)("h3",{id:"how-it-works"},"How it Works?"),(0,i.kt)("p",null,"In above example, ",(0,i.kt)("inlineCode",{parentName:"p"},"type: worker")," means the specification of this component (claimed in following ",(0,i.kt)("inlineCode",{parentName:"p"},"properties")," section) will be enforced by a ",(0,i.kt)("inlineCode",{parentName:"p"},"ComponentDefinition")," object named ",(0,i.kt)("inlineCode",{parentName:"p"},"worker")," as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  name: worker\n  annotations:\n    definition.oam.dev/description: "Describes long-running, scalable, containerized services that running at backend. They do NOT have network endpoint to receive external network traffic."\nspec:\n  workload:\n    definition:\n      apiVersion: apps/v1\n      kind: Deployment\n  schematic:\n    cue:\n      template: |\n        output: {\n          apiVersion: "apps/v1"\n          kind:       "Deployment"\n          spec: {\n            selector: matchLabels: {\n              "app.oam.dev/component": context.name\n            }\n            template: {\n              metadata: labels: {\n                "app.oam.dev/component": context.name\n              }\n              spec: {\n                containers: [{\n                  name:  context.name\n                  image: parameter.image\n\n                  if parameter["cmd"] != _|_ {\n                    command: parameter.cmd\n                  }\n                }]\n              }\n            }\n          }\n        }\n        parameter: {\n          image: string\n          cmd?: [...string]\n        }\n')),(0,i.kt)("p",null,"Hence, the ",(0,i.kt)("inlineCode",{parentName:"p"},"properties")," section of ",(0,i.kt)("inlineCode",{parentName:"p"},"backend")," only exposes two parameters to fill: ",(0,i.kt)("inlineCode",{parentName:"p"},"image")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"cmd"),", this is enforced by the ",(0,i.kt)("inlineCode",{parentName:"p"},"parameter")," list of the ",(0,i.kt)("inlineCode",{parentName:"p"},".spec.template")," field of the definition."),(0,i.kt)("h2",{id:"traits"},"Traits"),(0,i.kt)("p",null,"Traits are operational features that can be attached to component per needs. Traits are normally considered as platform features and maintained by platform team. In the above example, ",(0,i.kt)("inlineCode",{parentName:"p"},"type: autoscaler")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"frontend")," means the specification (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"properties")," section)\nof this trait will be enforced by a ",(0,i.kt)("inlineCode",{parentName:"p"},"TraitDefinition")," object named ",(0,i.kt)("inlineCode",{parentName:"p"},"autoscaler")," as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "configure k8s HPA for Deployment"\n  name: hpa\nspec:\n  appliesToWorkloads:\n    - webservice\n    - worker\n  schematic:\n    cue:\n      template: |\n        outputs: hpa: {\n          apiVersion: "autoscaling/v2beta2"\n          kind:       "HorizontalPodAutoscaler"\n          metadata: name: context.name\n          spec: {\n            scaleTargetRef: {\n              apiVersion: "apps/v1"\n              kind:       "Deployment"\n              name:       context.name\n            }\n            minReplicas: parameter.min\n            maxReplicas: parameter.max\n            metrics: [{\n              type: "Resource"\n              resource: {\n                name: "cpu"\n                target: {\n                  type:               "Utilization"\n                  averageUtilization: parameter.cpuUtil\n                }\n              }\n            }]\n          }\n        }\n        parameter: {\n          min:     *1 | int\n          max:     *10 | int\n          cpuUtil: *50 | int\n        }\n')),(0,i.kt)("p",null,"The application also have a ",(0,i.kt)("inlineCode",{parentName:"p"},"sidecar")," trait."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "add sidecar to the app"\n  name: sidecar\nspec:\n  appliesToWorkloads:\n    - webservice\n    - worker\n  schematic:\n    cue:\n      template: |-\n        patch: {\n           // +patchKey=name\n           spec: template: spec: containers: [parameter]\n        }\n        parameter: {\n           name: string\n           image: string\n           command?: [...string]\n        }\n')),(0,i.kt)("p",null,"Please note that the end users of KubeVela do NOT need to know about definition objects, they learn how to use a given capability with visualized forms (or the JSON schema of parameters if they prefer). Please check the ",(0,i.kt)("a",{parentName:"p",href:"/docs/platform-engineers/openapi-v3-json-schema"},"Generate Forms from Definitions")," section about how this is achieved."),(0,i.kt)("h2",{id:"standard-contract-behind-the-abstractions"},"Standard Contract Behind The Abstractions"),(0,i.kt)("p",null,"Once the application is deployed, KubeVela will index and manage the underlying instances with name, revisions, labels and selector etc in automatic approach. These metadata are shown as below."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Label"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"workload.oam.dev/type=<component definition name>")),(0,i.kt)("td",{parentName:"tr",align:"center"},"The name of its corresponding ",(0,i.kt)("inlineCode",{parentName:"td"},"ComponentDefinition"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"trait.oam.dev/type=<trait definition name>")),(0,i.kt)("td",{parentName:"tr",align:"center"},"The name of its corresponding ",(0,i.kt)("inlineCode",{parentName:"td"},"TraitDefinition"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"app.oam.dev/name=<app name>")),(0,i.kt)("td",{parentName:"tr",align:"center"},"The name of the application it belongs to")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"app.oam.dev/component=<component name>")),(0,i.kt)("td",{parentName:"tr",align:"center"},"The name of the component it belongs to")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"trait.oam.dev/resource=<name of trait resource instance>")),(0,i.kt)("td",{parentName:"tr",align:"center"},"The name of trait resource instance")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"app.oam.dev/appRevision=<name of app revision>")),(0,i.kt)("td",{parentName:"tr",align:"center"},"The name of the application revision it belongs to")))),(0,i.kt)("p",null,'Consider these metadata as a standard contract for any "day 2" operation controller such as rollout controller to work on KubeVela deployed applications. This is the key to ensure the interoperability for KubeVela based platform as well.'),(0,i.kt)("h2",{id:"no-configuration-drift"},"No Configuration Drift"),(0,i.kt)("p",null,"Despite the efficiency and extensibility in abstracting application deployment, IaC (Infrastructure-as-Code) tools may lead to an issue called ",(0,i.kt)("em",{parentName:"p"},"Infrastructure/Configuration Drift"),", i.e. the generated component instances are not in line with the expected configuration. This could be caused by incomplete coverage, less-than-perfect processes or emergency changes. This makes them can be barely used as a platform level building block."),(0,i.kt)("p",null,"Hence, KubeVela is designed to maintain all these programmable capabilities with ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/architecture/controller/"},"Kubernetes Control Loop")," and leverage Kubernetes control plane to eliminate the issue of configuration drifting, while still keeps the flexibly and velocity enabled by IaC."))}c.isMDXComponent=!0}}]);