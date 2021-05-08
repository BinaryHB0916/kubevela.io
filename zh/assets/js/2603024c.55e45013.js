(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[3023],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=i,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(f,r(r({ref:t},c),{},{components:n})):a.createElement(f,r({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1523:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var a=n(2122),i=n(9756),o=(n(7294),n(3905)),r={title:"How it Works"},l={unversionedId:"concepts",id:"version-v1.0/concepts",isDocsHomePage:!1,title:"How it Works",description:"In this documentation, we will explain the core idea of KubeVela and clarify some technical terms that are widely used in the project.",source:"@site/versioned_docs/version-v1.0/concepts.md",sourceDirName:".",slug:"/concepts",permalink:"/zh/docs/concepts",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/concepts.md",version:"v1.0",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1619772878,formattedLastUpdatedAt:"4/30/2021",frontMatter:{title:"How it Works"},sidebar:"version-v1.0/docs",previous:{title:"Quick Start",permalink:"/zh/docs/quick-start"},next:{title:"Deploy Application",permalink:"/zh/docs/application"}},p=[{value:"Overview",id:"overview",children:[]},{value:"<code>Application</code>",id:"application",children:[{value:"Example",id:"example",children:[]},{value:"<code>ComponentDefinition</code>",id:"componentdefinition",children:[]},{value:"<code>TraitDefinition</code>",id:"traitdefinition",children:[]},{value:"Summary",id:"summary",children:[]}]},{value:"Environment",id:"environment",children:[]},{value:"Architecture",id:"architecture",children:[]}],s={toc:p};function c(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this documentation, we will explain the core idea of KubeVela and clarify some technical terms that are widely used in the project."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"First of all, KubeVela introduces a workflow with separate of concerns as below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Platform Team"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Model and manage platform capabilities as components or traits, together with deployment environment configurations."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"End Users"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Choose a deployment environment, assemble the app with available components and traits per needs, and then deploy the app to target environment.")))),(0,o.kt)("p",null,"Below is how this workflow looks like:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt",src:n(2325).Z})),(0,o.kt)("p",null,"This design make it possible for platform team to enforce best practices by ",(0,o.kt)("em",{parentName:"p"},"coding")," platform capabilities into reusable building blocks, and leverage them to expose a ",(0,o.kt)("em",{parentName:"p"},"PaaS-like")," experience (",(0,o.kt)("em",{parentName:"p"},"i.e. app-centric abstractions, self-service workflow etc"),") to end users."),(0,o.kt)("p",null,"Also, as programmable components, all capabilities in KubeVela can be updated or extended easily per your needs at any time."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt",src:n(2160).Z})),(0,o.kt)("p",null,"In the model layer, KubeVela leverages ",(0,o.kt)("a",{parentName:"p",href:"https://oam.dev"},"Open Application Model (OAM)")," to make above design happen."),(0,o.kt)("h2",{id:"application"},(0,o.kt)("inlineCode",{parentName:"h2"},"Application")),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"Application")," is the core API of KubeVela. It allows developers to work with a single artifact to capture the complete application deployment with simplified primitives."),(0,o.kt)("p",null,'In application delivery platform, having an "application" concept is important to simplify administrative tasks and can serve as an anchor to avoid configuration drifts during operation. Also, it provides a much simpler path for on-boarding Kubernetes capabilities to end users without relying on low level details. For example, a developer will be able to model a "web service" without defining a detailed Kubernetes Deployment + Service combo each time, or claim the auto-scaling requirements without referring to the underlying KEDA ScaleObject.'),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"An example of ",(0,o.kt)("inlineCode",{parentName:"p"},"website")," application with two components (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"frontend")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"backend"),") could be modeled as below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: website\nspec:\n  components:\n    - name: backend\n      type: worker\n      properties:\n        image: busybox\n        cmd:\n          - sleep\n          - \'1000\'\n    - name: frontend\n      type: webservice\n      properties:\n        image: nginx\n      traits:\n        - type: autoscaler\n          properties:\n            min: 1\n            max: 10\n        - type: sidecar\n          properties:\n            name: "sidecar-test"\n            image: "fluentd"\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Application")," resource in KubeVela is a LEGO-style entity and does not even have fixed schema. Instead, it is composed by several building blocks (app components and traits etc.) that gives you full flexibility to model platform capabilities around the application's needs."),(0,o.kt)("p",null,"These building blocks named ",(0,o.kt)("inlineCode",{parentName:"p"},"ComponentDefinition")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"TraitDefinition"),"."),(0,o.kt)("h3",{id:"componentdefinition"},(0,o.kt)("inlineCode",{parentName:"h3"},"ComponentDefinition")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ComponentDefinition")," is an object that models a deployable entity in your platform, for example, a ",(0,o.kt)("em",{parentName:"p"},"Long Running Web Service"),", a ",(0,o.kt)("em",{parentName:"p"},"Helm chart")," or a ",(0,o.kt)("em",{parentName:"p"},"Alibaba Cloud RDS"),". A typical ",(0,o.kt)("inlineCode",{parentName:"p"},"ComponentDefinition")," carries workload type description (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"WorkloadDefinition"),") of this component, and the configurable parameter list this component exposed to users."),(0,o.kt)("p",null,"Hence, components are designed to be shareable and reusable. For example, by referencing the same ",(0,o.kt)("em",{parentName:"p"},"Alibaba Cloud RDS")," component and setting different parameter values, users could easily provision Alibaba Cloud RDS instances of different sizes in different availability zones."),(0,o.kt)("p",null,"Users will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Application")," entity to declare how they want to instantiate and deploy certain component definitions. Specifically, the ",(0,o.kt)("inlineCode",{parentName:"p"},".type")," field references the name of a ",(0,o.kt)("inlineCode",{parentName:"p"},"ComponentDefinition")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".properties")," are user provided parameter values to instantiate it. "),(0,o.kt)("p",null,"All component definitions expected to be provided by component providers such as 3rd-party software vendors, or pre-installed in the system by platform team."),(0,o.kt)("h3",{id:"traitdefinition"},(0,o.kt)("inlineCode",{parentName:"h3"},"TraitDefinition")),(0,o.kt)("p",null,"Optionally, each component has a ",(0,o.kt)("inlineCode",{parentName:"p"},".traits")," section that augments the component instance with operational behaviors such as load balancing policy, network ingress routing, auto-scaling policies, or upgrade strategies, etc."),(0,o.kt)("p",null,"Traits are operational features provided by the platform. To attach a trait to component instance, the user will declare ",(0,o.kt)("inlineCode",{parentName:"p"},".type")," field to reference the specific ",(0,o.kt)("inlineCode",{parentName:"p"},"TraitDefinition"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},".properties")," field to set property values of the given trait. Similarly, ",(0,o.kt)("inlineCode",{parentName:"p"},"TraitDefiniton")," also allows you to define ",(0,o.kt)("em",{parentName:"p"},"template")," for operational features."),(0,o.kt)("p",null,"We also reference component definitions and trait definitions as ",(0,o.kt)("em",{parentName:"p"},'"capabilities"')," in KubeVela. "),(0,o.kt)("h3",{id:"summary"},"Summary"),(0,o.kt)("p",null,"These main concepts of KubeVela could be shown as below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt",src:n(3209).Z})),(0,o.kt)("p",null,"Essentially:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Components - deployable/provisionable entities that composed your application",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"e.g. a Helm chart, a stateless workload, a MySQL database, or a AWS S3 bucket"))),(0,o.kt)("li",{parentName:"ul"},"Traits - attachable operational features per your needs",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"e.g. autoscaling rules, rollout strategies, ingress rules, sidecars, security policies etc"))),(0,o.kt)("li",{parentName:"ul"},"Application - full description of your application deployment assembled with components and traits"),(0,o.kt)("li",{parentName:"ul"},"Environment - the target environments to deploy this application")),(0,o.kt)("h2",{id:"environment"},"Environment"),(0,o.kt)("p",null,'Before releasing an application to production, it\'s important to test the code in testing/staging workspaces. In KubeVela, we describe these workspaces as "deployment environments" or "environments" for short. Each environment has its own configuration (e.g., domain, Kubernetes cluster and namespace, configuration data, access control policy, etc.) to allow user to create different deployment environments such as "test" and "production".'),(0,o.kt)("p",null,"Currently, a KubeVela ",(0,o.kt)("inlineCode",{parentName:"p"},"environment")," only maps to a Kubernetes namespace, while the cluster level environment is work in progress."),(0,o.kt)("h2",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"The overall architecture of KubeVela is shown as below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt",src:n(7406).Z})),(0,o.kt)("p",null,"In nutshell, in ",(0,o.kt)("em",{parentName:"p"},"control plane cluster"),", the application controller is responsible for application deployment orchestration and the placement controller is responsible for deploying the application across multiple ",(0,o.kt)("em",{parentName:"p"},"runtime clusters")," with traffic shifting features supported out-of-box. The needed addons in runtime cluster are automatically discovered and installed with leverage of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cloudnativeapp/CLM"},"CRD Lifecycle Management (CLM)"),"."))}c.isMDXComponent=!0},7406:function(e,t,n){"use strict";t.Z=n.p+"assets/images/arch-2be2292900594650cc1eaac54cfc74a6.png"},3209:function(e,t,n){"use strict";t.Z=n.p+"assets/images/concepts-c82bfca60637c9ba5f3b8e1a52dcd7d4.png"},2325:function(e,t,n){"use strict";t.Z=n.p+"assets/images/how-it-works-393fdfca76ea41eb5a61227a338b8fc9.png"},2160:function(e,t,n){"use strict";t.Z=n.p+"assets/images/what-is-kubevela-75b8c04a697ae22fa4711ad43ede4cd8.png"}}]);