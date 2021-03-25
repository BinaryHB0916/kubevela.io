(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{220:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(263)),o={title:"Introduction",slug:"/"},s={unversionedId:"overview/introduction",id:"version-v0.3.5/overview/introduction",isDocsHomePage:!1,title:"Introduction",description:"alt",source:"@site/versioned_docs/version-v0.3.5/overview/introduction.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-v0.3.5/overview/introduction.md",version:"v0.3.5",sidebar:"version-v0.3.5/docs",next:{title:"Core Concepts",permalink:"/docs/overview/concepts"}},l=[{value:"Motivation",id:"motivation",children:[]},{value:"What is KubeVela?",id:"what-is-kubevela",children:[]},{value:"Comparisons",id:"comparisons",children:[{value:"Platform-as-a-Service (PaaS)",id:"platform-as-a-service-paas",children:[]},{value:"Serverless platforms",id:"serverless-platforms",children:[]},{value:"Platform agnostic developer tools",id:"platform-agnostic-developer-tools",children:[]},{value:"Helm, etc.",id:"helm-etc",children:[]},{value:"Kubernetes",id:"kubernetes",children:[]}]},{value:"Getting Started",id:"getting-started",children:[]}],c={toc:l};function p(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt",src:n(364).default})),Object(r.b)("h2",{id:"motivation"},"Motivation"),Object(r.b)("p",null,'The trend of cloud-native technology is moving towards pursuing consistent application delivery across clouds and on-premises infrastructures using Kubernetes as the common abstraction layer. Kubernetes, although excellent in abstracting low-level infrastructure details, does introduce extra complexity to application developers, namely understanding the concepts of pods, port exposing, privilege escalation, resource claims, CRD, and so on. We\u2019ve seen the nontrivial learning curve and the lack of developer-facing abstraction have impacted user experiences, slowed down productivity, led to unexpected errors or misconfigurations in production. People start to question the value of this revolution: "why am I bothered with all these details?".'),Object(r.b)("p",null,"On the other hand, abstracting Kubernetes to serve developers' requirements is a highly opinionated process, and the resultant abstractions would only make sense had the decision makers been the platform builders. Unfortunately, the platform builders today face the following dilemma:"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"There is no tool or framework for them to easily build user friendly yet highly extensible abstractions"),". "),Object(r.b)("p",null,"Thus, many platforms today are essentially restricted abstractions with in-house add-on mechanisms despite the extensibility of Kubernetes. This makes extending such platforms for developers' requirements or to wider scenarios almost impossible, not to mention taking the full advantage of the rich Kubernetes ecosystems."),Object(r.b)("p",null,"In the end, developers complain those platforms are too rigid and slow in response to feature requests or improvements. The platform builders do want to help but the engineering effort is daunting: any simple API change in the platform could easily become a marathon negotiation around the opinionated abstraction design."),Object(r.b)("h2",{id:"what-is-kubevela"},"What is KubeVela?"),Object(r.b)("p",null,"For platform builders, KubeVela serves as a framework that empowers them to create user friendly yet highly extensible platforms at ease. In details, KubeVela relieves the pains of building such platforms by doing the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Application Centric. KubeVela enforces an ",Object(r.b)("em",{parentName:"p"},"Application")," abstraction as its main API and ",Object(r.b)("strong",{parentName:"p"},"ALL")," KubeVela's capabilities serve for the applications' needs only. This is achieved by adopting the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/oam-dev/spec"},"Open Application Model")," as the core API for KubeVela.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Extending Natively. The ",Object(r.b)("em",{parentName:"p"},"Application")," abstraction is composed of modularized building blocks named ",Object(r.b)("em",{parentName:"p"},"components")," and ",Object(r.b)("em",{parentName:"p"},"traits"),". Any capability provided by Kubernetes ecosystem can be added to KubeVela as new component or trait through simple ",Object(r.b)("inlineCode",{parentName:"p"},"kubectl apply -f"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Simple yet Extensible Abstraction Mechanism. The ",Object(r.b)("em",{parentName:"p"},"Application")," abstraction is implemented with server-side encapsulation controller (supports ",Object(r.b)("a",{parentName:"p",href:"https://github.com/cuelang/cue"},"CUELang")," and ",Object(r.b)("a",{parentName:"p",href:"https://helm.sh"},"Helm")," as templating engine) to abstract user-facing primitives from Kubernetes API resources. Changes to existing capability templates (or new templates added) take effect at runtime, neither recompilation nor redeployment of KubeVela is required."))),Object(r.b)("p",null,"With KubeVela, platform builders now finally have the tooling support to design and ship any new capabilities to their end-users with high confidence and low turn around time. "),Object(r.b)("p",null,"For developers, such ",Object(r.b)("em",{parentName:"p"},"Application")," abstraction built with KubeVela will enable them to design and ship their applications to Kubernetes with minimal effort. Instead of managing a handful infrastructure details, a simple application definition that can be easily integrated with any CI/CD pipeline is all they need."),Object(r.b)("h2",{id:"comparisons"},"Comparisons"),Object(r.b)("h3",{id:"platform-as-a-service-paas"},"Platform-as-a-Service (PaaS)"),Object(r.b)("p",null,"The typical examples are Heroku and Cloud Foundry. They provides full application management capabilities and aim to improve developer experience and efficiency. In this context, KubeVela can provide similar experience but its built-in features are much lighter and easier to maintain compared to most of the existing PaaS offerings. KubeVela core components are nothing but a set of Kubernetes controllers/plugins."),Object(r.b)("p",null,'Though the biggest difference lies KubeVela positions itself as the engine to build "PaaS-like" systems, not a PaaS offering.'),Object(r.b)("p",null,'KubeVela is designed as a core engine whose primary goal is to enable platform team to create "PaaS-like" experience by simply registering Kubernetes API resources and defining templates. Comparing to this experience, most existing PaaS systems are either inextensible or have their own addon systems. Hence it\'s common for them to enforce constraints in the type of supported applications and the supported capabilities which will not happen in KubeVela based experience. '),Object(r.b)("h3",{id:"serverless-platforms"},"Serverless platforms"),Object(r.b)("p",null,'Serverless platform such as AWS Lambda provides extraordinary user experience and agility to deploy serverless applications. However, those platforms impose even more constraints in extensibility. They are arguably "hard-coded" PaaS.'),Object(r.b)("p",null,"Kubernetes based serverless platforms such as Knative, OpenFaaS can be easily integrated with KubeVela by registering themselves as new workload types and traits. Even for AWS Lambda, there is an success story to integrate it with KubeVela by the tools developed by Crossplane."),Object(r.b)("h3",{id:"platform-agnostic-developer-tools"},"Platform agnostic developer tools"),Object(r.b)("p",null,"The typical example is Hashicorp's Waypoint. Waypoint is a developer facing tool which introduces a consistent workflow (i.e., build, deploy, release) to ship applications on top of different platforms."),Object(r.b)("p",null,"KubeVela can be integrated into Waypoint like any other supported platforms. In this case, developers will use the Waypoint workflow to manage applications, and all the capabilities of KubeVela including abstractions will still be available in this integration."),Object(r.b)("h3",{id:"helm-etc"},"Helm, etc."),Object(r.b)("p",null,"Helm is a package manager for Kubernetes that provides package, install, and upgrade a set of YAML files for Kubernetes as a unit. KubeVela leverages Helm heavily to package the capability dependencies and Helm controller is one of the core components behind ",Object(r.b)("em",{parentName:"p"},"Application")," abstraction."),Object(r.b)("p",null,"Though KubeVela itself is not a package manager, it's a core engine for platform builders to create upper layer platforms in easy and repeatable approach."),Object(r.b)("h3",{id:"kubernetes"},"Kubernetes"),Object(r.b)("p",null,"KubeVela is a Kubernetes plugin for building upper layer platforms. It leverages the native Kubernetes extensibility and capabilities to resolve a hard problem - making shipping applications enjoyable on Kubernetes."),Object(r.b)("h2",{id:"getting-started"},"Getting Started"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"./getting-started/install"},"Install KubeVela")," into any Kubernetes cluster to get started."))}p.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||r;return n?i.a.createElement(m,s(s({ref:t},c),{},{components:n})):i.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},364:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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"}}]);