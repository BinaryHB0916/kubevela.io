(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[4128],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),h=o,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1143:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var n=a(2122),o=a(9756),r=(a(7294),a(3905)),i={title:"Introduction",slug:"/"},s={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"alt",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/docs/next/",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/introduction.md",version:"current",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1620913418,formattedLastUpdatedAt:"5/13/2021",frontMatter:{title:"Introduction",slug:"/"},sidebar:"docs",next:{title:"Installation",permalink:"/docs/next/install"}},l=[{value:"Motivation",id:"motivation",children:[]},{value:"What is KubeVela?",id:"what-is-kubevela",children:[]},{value:"Comparisons",id:"comparisons",children:[{value:"KubeVela vs. Platform-as-a-Service (PaaS)",id:"kubevela-vs-platform-as-a-service-paas",children:[]},{value:"KubeVela vs. Serverless",id:"kubevela-vs-serverless",children:[]},{value:"KubeVela vs. Platform agnostic developer tools",id:"kubevela-vs-platform-agnostic-developer-tools",children:[]},{value:"KubeVela vs. Helm",id:"kubevela-vs-helm",children:[]},{value:"KubeVela vs. Kubernetes",id:"kubevela-vs-kubernetes",children:[]}]},{value:"Getting Started",id:"getting-started",children:[]}],u={toc:l};function c(e){var t=e.components,i=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt",src:a(2441).Z})),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,'The trend of cloud-native technology is moving towards pursuing consistent application delivery across clouds and on-premises infrastructures using Kubernetes as the common abstraction layer. Kubernetes, although excellent in abstracting low-level infrastructure details, does introduce extra complexity to application developers, namely understanding the concepts of pods, port exposing, privilege escalation, resource claims, CRD, and so on. We\u2019ve seen the nontrivial learning curve and the lack of developer-facing abstraction have impacted user experiences, slowed down productivity, led to unexpected errors or misconfigurations in production. People start to question the value of this revolution: "why am I bothered with all these details?".'),(0,r.kt)("p",null,"On the other hand, abstracting Kubernetes to serve developers' requirements is a highly opinionated process, and the resultant abstractions would only make sense had the decision makers been the platform team. Unfortunately, the platform team today face the following dilemma:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"There is no tool or framework for them to build user friendly yet highly extensible abstractions for application management"),"."),(0,r.kt)("p",null,"Thus, many application platforms today are essentially restricted abstractions with in-house add-on mechanisms despite the extensibility of Kubernetes. This makes extending such platforms for developers' requirements or to wider scenarios almost impossible, not to mention taking the full advantage of the rich Kubernetes ecosystems."),(0,r.kt)("p",null,"In the end, developers complain those platforms are too rigid and slow in response to feature requests or improvements. The platform team do want to help but the engineering effort is daunting: any simple API change in the platform could easily become a marathon negotiation around the opinionated abstraction design."),(0,r.kt)("h2",{id:"what-is-kubevela"},"What is KubeVela?"),(0,r.kt)("p",null,"For platform team, KubeVela serves as a framework that relieves the pains of building modern application platforms by doing the following:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Application Centric")," - KubeVela introduces consistent yet application centric API to capture a full deployment of microservices on top of hybrid environments. No infrastructure level concern, simply deploy."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Natively Extensible")," - KubeVela uses CUE to glue capabilities provided by runtime infrastructure and expose them to users via self-service API. When users' needs grow, these API can naturally expand in programmable approach."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Runtime Agnostic")," - KubeVela is built with Kubernetes as control plane but adaptable to any runtime as data-plane. It can deploy (and manage) diverse workload types such as container, cloud functions, databases, or even EC2 instances across hybrid environments."),(0,r.kt)("p",null,"With KubeVela, the platform team finally have the tooling supports to design easy-to-use application platform with high confidence and low turn around time. "),(0,r.kt)("p",null,"For end-users (e.g. application team), this platform will enable them to design and ship applications to hybrid environments with minimal effort, and instead of managing a handful infrastructure details, a simple application definition that can be easily integrated with any CI/CD pipeline is all they need."),(0,r.kt)("h2",{id:"comparisons"},"Comparisons"),(0,r.kt)("h3",{id:"kubevela-vs-platform-as-a-service-paas"},"KubeVela vs. Platform-as-a-Service (PaaS)"),(0,r.kt)("p",null,"The typical examples are Heroku and Cloud Foundry. They provide full application management capabilities and aim to improve developer experience and efficiency. In this context, KubeVela shares the same goal."),(0,r.kt)("p",null,"Though the biggest difference lies in ",(0,r.kt)("strong",{parentName:"p"},"flexibility"),"."),(0,r.kt)("p",null,"KubeVela enables you to serve end users with programmable building blocks which are fully flexible and coded by yourself. Comparing to this mechanism, traditional PaaS systems are highly restricted, i.e. they have to enforce constraints in the type of supported applications and capabilities, and as application needs grows, you always outgrow the capabilities of the PaaS system - this will never happen in KubeVela platform."),(0,r.kt)("p",null,"So think of KubeVela as a Heroku that is fully extensible to serve your needs as you grow."),(0,r.kt)("h3",{id:"kubevela-vs-serverless"},"KubeVela vs. Serverless"),(0,r.kt)("p",null,'Serverless platform such as AWS Lambda provides extraordinary user experience and agility to deploy serverless applications. However, those platforms impose even more constraints in extensibility. They are arguably "hard-coded" PaaS.'),(0,r.kt)("p",null,"KubeVela can easily deploy Kubernetes based serverless workloads such as Knative, OpenFaaS by referencing them as new components. Even for AWS Lambda, KubeVela can also deploy such workload leveraging Terraform based component."),(0,r.kt)("h3",{id:"kubevela-vs-platform-agnostic-developer-tools"},"KubeVela vs. Platform agnostic developer tools"),(0,r.kt)("p",null,"The typical example is Hashicorp's Waypoint. Waypoint is a developer facing tool which introduces a consistent workflow (i.e., build, deploy, release) to ship applications on top of different platforms."),(0,r.kt)("p",null,"KubeVela can be integrated with such tools seamlessly. In this case, developers would use the Waypoint workflow as the UI to deploy and manage applications with KubeVela's abstractions (e.g. applications, components, traits etc)."),(0,r.kt)("h3",{id:"kubevela-vs-helm"},"KubeVela vs. Helm"),(0,r.kt)("p",null,"Helm is a package manager for Kubernetes that provides package, install, and upgrade a set of YAML files for Kubernetes as a unit. "),(0,r.kt)("p",null,"KubeVela as a modern deployment system can naturally deploys Helm charts. A common example is you could easily use KubeVela to declare and deploy an application which is composed by a WordPress Helm chart and a AWS RDS instance defined by Terraform, or distribute the Helm chart to multiple clusters."),(0,r.kt)("p",null,"KubeVela also leverages Helm to manage the capability addons in runtime clusters."),(0,r.kt)("h3",{id:"kubevela-vs-kubernetes"},"KubeVela vs. Kubernetes"),(0,r.kt)("p",null,"KubeVela is a Kubernetes add-on for building developer-centric deployment system. It leverages ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/spec"},"Open Application Model")," and the native Kubernetes extensibility to resolve a hard problem - making shipping applications enjoyable on Kubernetes."),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"Now let's ",(0,r.kt)("a",{parentName:"p",href:"./quick-start"},"get started")," with KubeVela!"))}c.isMDXComponent=!0},2441:function(e,t){"use strict";t.Z="data:image/png;base64,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"}}]);