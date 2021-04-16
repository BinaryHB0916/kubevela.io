(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(332)),o={title:"KEDA as Autoscaling Trait"},l={unversionedId:"platform-engineers/keda",id:"version-v1.0/platform-engineers/keda",isDocsHomePage:!1,title:"KEDA as Autoscaling Trait",description:"Before continue, make sure you have learned about the concepts of Definition Objects and Defining Traits with CUE section.",source:"@site/versioned_docs/version-v1.0/platform-engineers/keda.md",slug:"/platform-engineers/keda",permalink:"/zh/docs/platform-engineers/keda",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/platform-engineers/keda.md",version:"v1.0",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1618589155,formattedLastUpdatedAt:"4/16/2021",sidebar:"version-v1.0/docs",previous:{title:"Debug, Test and Dry-run",permalink:"/zh/docs/platform-engineers/debug-test-cue"},next:{title:"Overview",permalink:"/zh/docs/quick-start-appfile"}},c=[{value:"Step 1: Install KEDA controller",id:"step-1-install-keda-controller",children:[]},{value:"Step 2: Create Trait Definition",id:"step-2-create-trait-definition",children:[{value:"1. Describe The Trait",id:"1-describe-the-trait",children:[]},{value:"2. Register API Resource",id:"2-register-api-resource",children:[]},{value:"3. Define <code>appliesToWorkloads</code>",id:"3-define-appliestoworkloads",children:[]},{value:"4. Define Schematic",id:"4-define-schematic",children:[]}]},{value:"Step 2: Register New Trait to KubeVela",id:"step-2-register-new-trait-to-kubevela",children:[]}],s={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Before continue, make sure you have learned about the concepts of ",Object(i.b)("a",{parentName:"p",href:"definition-and-templates"},"Definition Objects")," and ",Object(i.b)("a",{parentName:"p",href:"/docs/cue/trait"},"Defining Traits with CUE")," section.")),Object(i.b)("p",null,"In the following tutorial, you will learn to add ",Object(i.b)("a",{parentName:"p",href:"https://keda.sh/"},"KEDA")," as a new autoscaling trait to your KubeVela based platform."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"KEDA is a Kubernetes-based Event Driven Autoscaler. With KEDA, you can drive the scaling of any container based on resource metrics or the number of events needing to be processed.")),Object(i.b)("h2",{id:"step-1-install-keda-controller"},"Step 1: Install KEDA controller"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://keda.sh/docs/2.2/deploy/"},"Install the KEDA controller")," into your K8s system."),Object(i.b)("h2",{id:"step-2-create-trait-definition"},"Step 2: Create Trait Definition"),Object(i.b)("p",null,"To register KEDA as a new capability (i.e. trait) in KubeVela, the only thing needed is to create an ",Object(i.b)("inlineCode",{parentName:"p"},"TraitDefinition")," object for it."),Object(i.b)("p",null,"A full example can be found in this ",Object(i.b)("a",{parentName:"p",href:"https://github.com/oam-dev/catalog/blob/master/registry/keda-scaler.yaml"},"keda.yaml"),".\nSeveral highlights are list below."),Object(i.b)("h3",{id:"1-describe-the-trait"},"1. Describe The Trait"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'...\nname: keda-scaler\nannotations:\n  definition.oam.dev/description: "keda supports multiple event to elastically scale applications, this scaler only applies to deployment as example"\n...\n')),Object(i.b)("p",null,"We use label ",Object(i.b)("inlineCode",{parentName:"p"},"definition.oam.dev/description")," to add one line description for this trait.\nIt will be shown in helper commands such as ",Object(i.b)("inlineCode",{parentName:"p"},"$ vela traits"),"."),Object(i.b)("h3",{id:"2-register-api-resource"},"2. Register API Resource"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"...\nspec:\n  definitionRef:\n    name: scaledobjects.keda.sh\n...\n")),Object(i.b)("p",null,"This is how you claim and register KEDA ",Object(i.b)("inlineCode",{parentName:"p"},"ScaledObject"),"'s API resource (",Object(i.b)("inlineCode",{parentName:"p"},"scaledobjects.keda.sh"),") as a trait definition."),Object(i.b)("h3",{id:"3-define-appliestoworkloads"},"3. Define ",Object(i.b)("inlineCode",{parentName:"h3"},"appliesToWorkloads")),Object(i.b)("p",null,"A trait can be attached to specified workload types or all (i.e. ",Object(i.b)("inlineCode",{parentName:"p"},'"*"')," means your trait can work with any workload type)."),Object(i.b)("p",null,"For the case of KEAD, we will only allow user to attach it to Kubernetes workload type. So we claim it as below:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'...\nspec:\n  ...\n  appliesToWorkloads:\n    - "deployments.apps" # claim KEDA based autoscaling trait can only attach to Kubernetes Deployment workload type.\n...\n')),Object(i.b)("h3",{id:"4-define-schematic"},"4. Define Schematic"),Object(i.b)("p",null,"In this step, we will define the schematic of KEDA based autoscaling trait, i.e. we will create abstraction for KEDA ",Object(i.b)("inlineCode",{parentName:"p"},"ScaledObject")," with simplified primitives, so end users of this platform don't really need to know what is KEDA at all. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'...\nschematic:\n  cue:\n    template: |-\n      outputs: kedaScaler: {\n        apiVersion: "keda.sh/v1alpha1"\n        kind:       "ScaledObject"\n        metadata: {\n            name: context.name\n        }\n        spec: {\n            scaleTargetRef: {\n                name: context.name\n            }\n            triggers: [{\n                type: parameter.triggerType\n                metadata: {\n                    type:  "Utilization"\n                    value: parameter.value\n                }\n            }]\n        }\n      }\n      parameter: {\n        // +usage=Types of triggering application elastic scaling, Optional: cpu, memory\n        triggerType: string\n        // +usage=Value to trigger scaling actions, represented as a percentage of the requested value of the resource for the pods. like: "60"(60%)\n        value: string\n      }\n')),Object(i.b)("p",null,"This is a CUE based template which only exposes ",Object(i.b)("inlineCode",{parentName:"p"},"type")," and ",Object(i.b)("inlineCode",{parentName:"p"},"value")," as trait properties for user to set."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Please check the ",Object(i.b)("a",{parentName:"p",href:"../cue/trait"},"Defining Trait with CUE")," section for more details regarding to CUE templating.")),Object(i.b)("h2",{id:"step-2-register-new-trait-to-kubevela"},"Step 2: Register New Trait to KubeVela"),Object(i.b)("p",null,"As long as the definition file is ready, you just need to apply it to Kubernetes."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f https://raw.githubusercontent.com/oam-dev/catalog/master/registry/keda-scaler.yaml\n")),Object(i.b)("p",null,"And the new trait will immediately become available for end users to use in ",Object(i.b)("inlineCode",{parentName:"p"},"Application")," resource."))}p.isMDXComponent=!0},332:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||i;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);