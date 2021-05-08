(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[4320],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return u}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,f=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return n?i.createElement(f,o(o({ref:t},d),{},{components:n})):i.createElement(f,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6401:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var i=n(2122),a=n(9756),r=(n(7294),n(3905)),o={title:"Programmable Building Blocks"},l={unversionedId:"platform-engineers/definition-and-templates",id:"version-v1.0/platform-engineers/definition-and-templates",isDocsHomePage:!1,title:"Programmable Building Blocks",description:"This documentation explains ComponentDefinition and TraitDefinition in detail.",source:"@site/versioned_docs/version-v1.0/platform-engineers/definition-and-templates.md",sourceDirName:"platform-engineers",slug:"/platform-engineers/definition-and-templates",permalink:"/docs/platform-engineers/definition-and-templates",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/platform-engineers/definition-and-templates.md",version:"v1.0",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1619772878,formattedLastUpdatedAt:"4/30/2021",frontMatter:{title:"Programmable Building Blocks"},sidebar:"version-v1.0/docs",previous:{title:"Resource Model",permalink:"/docs/platform-engineers/overview"},next:{title:"Generating UI Forms",permalink:"/docs/platform-engineers/openapi-v3-json-schema"}},s=[{value:"Overview",id:"overview",children:[{value:"Capability Indicator",id:"capability-indicator",children:[]},{value:"Interoperability Fields",id:"interoperability-fields",children:[]},{value:"Capability Encapsulation and Abstraction",id:"capability-encapsulation-and-abstraction",children:[]}]}],p={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This documentation explains ",(0,r.kt)("inlineCode",{parentName:"p"},"ComponentDefinition")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"TraitDefinition")," in detail."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Essentially, a definition object in KubeVela is a programmable build block. A definition object normally includes several information to model a certain platform capability that would used in further application deployment:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Capability Indicator")," ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ComponentDefinition")," uses ",(0,r.kt)("inlineCode",{parentName:"li"},"spec.workload")," to indicate the workload type of this component."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TraitDefinition")," uses ",(0,r.kt)("inlineCode",{parentName:"li"},"spec.definitionRef")," to indicate the provider of this trait."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Interoperability Fields"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"they are for the platform to ensure a trait can work with given workload type. Hence only ",(0,r.kt)("inlineCode",{parentName:"li"},"TraitDefinition")," has these fields."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Capability Encapsulation and Abstraction")," defined by ",(0,r.kt)("inlineCode",{parentName:"li"},"spec.schematic"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"this defines the ",(0,r.kt)("strong",{parentName:"li"},"templating and parametering")," (i.e. encapsulation) of this capability.")))),(0,r.kt)("p",null,"Hence, the basic structure of definition object is as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: XxxDefinition\nmetadata:\n  name: <definition name>\nspec:\n  ...\n  schematic:\n    cue:\n      # cue template ...\n    helm:\n      # Helm chart ...\n  # ... interoperability fields\n")),(0,r.kt)("p",null,"Let's explain these fields one by one."),(0,r.kt)("h3",{id:"capability-indicator"},"Capability Indicator"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"ComponentDefinition"),", the indicator of workload type is declared as ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.workload"),"."),(0,r.kt)("p",null,"Below is a definition for ",(0,r.kt)("em",{parentName:"p"},"Web Service")," in KubeVela: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  name: webservice\n  namespace: default\n  annotations:\n    definition.oam.dev/description: "Describes long-running, scalable, containerized services that have a stable network endpoint to receive external network traffic from customers."\nspec:\n  workload:\n    definition:\n      apiVersion: apps/v1\n      kind: Deployment\n    ...        \n')),(0,r.kt)("p",null,"In above example, it claims to leverage Kubernetes Deployment (",(0,r.kt)("inlineCode",{parentName:"p"},"apiVersion: apps/v1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"kind: Deployment"),") as the workload type for component."),(0,r.kt)("h3",{id:"interoperability-fields"},"Interoperability Fields"),(0,r.kt)("p",null,"The interoperability fields are ",(0,r.kt)("strong",{parentName:"p"},"trait only"),". An overall view of interoperability fields in a ",(0,r.kt)("inlineCode",{parentName:"p"},"TraitDefinition")," is show as below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  name:  ingress\nspec:\n  appliesToWorkloads: \n    - deployments.apps\n    - webservice\n  conflictsWith: \n    - service\n  workloadRefPath: spec.wrokloadRef\n  podDisruptive: false\n")),(0,r.kt)("p",null,"Let's explain them in detail."),(0,r.kt)("h4",{id:"specappliestoworkloads"},(0,r.kt)("inlineCode",{parentName:"h4"},".spec.appliesToWorkloads")),(0,r.kt)("p",null,"This field defines the constraints that what kinds of workloads this trait is allowed to apply to."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It accepts an array of string as value."),(0,r.kt)("li",{parentName:"ul"},"Each item in the array refers to one or a group of workload types to which this trait is allowded to apply.")),(0,r.kt)("p",null,"There are four approaches to denote one or a group of workload types."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ComponentDefinition")," name, e.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"webservice"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"worker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ComponentDefinition")," definition reference (CRD name), e.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"deployments.apps")),(0,r.kt)("li",{parentName:"ul"},"Resource group of ",(0,r.kt)("inlineCode",{parentName:"li"},"ComponentDefinition")," definition reference prefixed with ",(0,r.kt)("inlineCode",{parentName:"li"},"*."),", e.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"*.apps"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"*.oam.dev"),". This means the trait is allowded to apply to any workloads in this group."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"*")," means this trait is allowded to apply to any workloads")),(0,r.kt)("p",null,"If this field is omitted, it means this trait is allowded to apply to any workload types."),(0,r.kt)("p",null,"KubeVela will raise an error if a trait is applied to a workload which is NOT included in the ",(0,r.kt)("inlineCode",{parentName:"p"},"appliesToWorkloads"),"."),(0,r.kt)("h5",{id:"specconflictswith"},(0,r.kt)("inlineCode",{parentName:"h5"},".spec.conflictsWith")),(0,r.kt)("p",null,"This field defines that constraints that what kinds of traits are conflicting with this trait, if they are applied to the same workload."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It accepts an array of string as value. "),(0,r.kt)("li",{parentName:"ul"},"Each item in the array refers to one or a group of traits.")),(0,r.kt)("p",null,"There are four approaches to denote one or a group of workload types."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TraitDefinition")," name, e.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"ingress")),(0,r.kt)("li",{parentName:"ul"},"Resource group of ",(0,r.kt)("inlineCode",{parentName:"li"},"TraitDefinition")," definition reference prefixed with ",(0,r.kt)("inlineCode",{parentName:"li"},"*."),", e.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"*.networking.k8s.io"),". This means the trait is conflicting with any traits in this group."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"*")," means this trait is conflicting with any other trait.")),(0,r.kt)("p",null,"If this field is omitted, it means this trait is NOT conflicting with any traits."),(0,r.kt)("h5",{id:"specworkloadrefpath"},(0,r.kt)("inlineCode",{parentName:"h5"},".spec.workloadRefPath")),(0,r.kt)("p",null,"This field defines the field path of the trait which is used to store the reference of the workload to which the trait is applied."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It accepts a string as value, e.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"spec.workloadRef"),".")),(0,r.kt)("p",null,"If this field is set, KubeVela core will automatically fill the workload reference into target field of the trait. Then the trait controller can get the workload reference from the trait latter. So this field usually accompanies with the traits whose controllers relying on the workload reference at runtime. "),(0,r.kt)("p",null,"Please check ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/blob/master/charts/vela-core/templates/defwithtemplate/manualscale.yaml"},"scaler")," trait as a demonstration of how to set this field."),(0,r.kt)("h5",{id:"specpoddisruptive"},(0,r.kt)("inlineCode",{parentName:"h5"},".spec.podDisruptive")),(0,r.kt)("p",null,"This field defines that adding/updating the trait will disruptive the pod or not.\nIn this example, the answer is not, so the field is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", it will not affect the pod when the trait is added or updated.\nIf the field is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", then it will cause the pod to disruptive and restart when the trait is added or updated.\nBy default, the value is ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," which means this trait will not affect.\nPlease take care of this field, it's really important and useful for serious large scale production usage scenarios."),(0,r.kt)("h3",{id:"capability-encapsulation-and-abstraction"},"Capability Encapsulation and Abstraction"),(0,r.kt)("p",null,"The programmable template of given capability are defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.schematic")," field. For example, below is the full definition of ",(0,r.kt)("em",{parentName:"p"},"Web Service")," type in KubeVela:"),(0,r.kt)("details",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  name: webservice\n  namespace: default\n  annotations:\n    definition.oam.dev/description: "Describes long-running, scalable, containerized services that have a stable network endpoint to receive external network traffic from customers."\nspec:\n  workload:\n    definition:\n      apiVersion: apps/v1\n      kind: Deployment\n  schematic:\n    cue:\n      template: |\n        output: {\n            apiVersion: "apps/v1"\n            kind:       "Deployment"\n            spec: {\n                selector: matchLabels: {\n                    "app.oam.dev/component": context.name\n                }\n        \n                template: {\n                    metadata: labels: {\n                        "app.oam.dev/component": context.name\n                    }\n        \n                    spec: {\n                        containers: [{\n                            name:  context.name\n                            image: parameter.image\n        \n                            if parameter["cmd"] != _|_ {\n                                command: parameter.cmd\n                            }\n        \n                            if parameter["env"] != _|_ {\n                                env: parameter.env\n                            }\n        \n                            if context["config"] != _|_ {\n                                env: context.config\n                            }\n        \n                            ports: [{\n                                containerPort: parameter.port\n                            }]\n        \n                            if parameter["cpu"] != _|_ {\n                                resources: {\n                                    limits:\n                                        cpu: parameter.cpu\n                                    requests:\n                                        cpu: parameter.cpu\n                                }\n                            }\n                        }]\n                }\n                }\n            }\n        }\n        parameter: {\n            // +usage=Which image would you like to use for your service\n            // +short=i\n            image: string\n        \n            // +usage=Commands to run in the container\n            cmd?: [...string]\n        \n            // +usage=Which port do you want customer traffic sent to\n            // +short=p\n            port: *80 | int\n            // +usage=Define arguments by using environment variables\n            env?: [...{\n                // +usage=Environment variable name\n                name: string\n                // +usage=The value of the environment variable\n                value?: string\n                // +usage=Specifies a source the value of this var should come from\n                valueFrom?: {\n                    // +usage=Selects a key of a secret in the pod\'s namespace\n                    secretKeyRef: {\n                        // +usage=The name of the secret in the pod\'s namespace to select from\n                        name: string\n                        // +usage=The key of the secret to select from. Must be a valid secret key\n                        key: string\n                    }\n                }\n            }]\n            // +usage=Number of CPU units for the service, like `0.5` (0.5 CPU core), `1` (1 CPU core)\n            cpu?: string\n        }     \n'))),(0,r.kt)("p",null,"The specification of ",(0,r.kt)("inlineCode",{parentName:"p"},"schematic")," is explained in following CUE and Helm specific documentations."),(0,r.kt)("p",null,"Also, the ",(0,r.kt)("inlineCode",{parentName:"p"},"schematic")," filed enables you to render UI forms directly based on them, please check the ",(0,r.kt)("a",{parentName:"p",href:"/docs/platform-engineers/openapi-v3-json-schema"},"Generate Forms from Definitions")," section about how to."))}d.isMDXComponent=!0}}]);