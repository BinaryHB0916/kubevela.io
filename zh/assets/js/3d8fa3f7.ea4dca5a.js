(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[8277],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4347:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i={title:"Quick Start"},l={unversionedId:"quick-start",id:"version-v1.0/quick-start",isDocsHomePage:!1,title:"Quick Start",description:"Welcome to KubeVela! In this guide, we'll walk you through how to install KubeVela, and deploy your first simple application.",source:"@site/versioned_docs/version-v1.0/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/zh/docs/quick-start",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/quick-start.md",version:"v1.0",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1619772878,formattedLastUpdatedAt:"4/30/2021",frontMatter:{title:"Quick Start"},sidebar:"version-v1.0/docs",previous:{title:"Installation",permalink:"/zh/docs/install"},next:{title:"How it Works",permalink:"/zh/docs/concepts"}},s=[{value:"Step 1: Install",id:"step-1-install",children:[]},{value:"Step 2: Deploy Your First Application",id:"step-2-deploy-your-first-application",children:[]},{value:"What&#39;s Next",id:"whats-next",children:[]}],p={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Welcome to KubeVela! In this guide, we'll walk you through how to install KubeVela, and deploy your first simple application."),(0,o.kt)("h2",{id:"step-1-install"},"Step 1: Install"),(0,o.kt)("p",null,"Make sure you have finished and verified the installation following ",(0,o.kt)("a",{parentName:"p",href:"./install"},"this guide"),"."),(0,o.kt)("h2",{id:"step-2-deploy-your-first-application"},"Step 2: Deploy Your First Application"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/docs/examples/vela-app.yaml\napplication.core.oam.dev/first-vela-app created\n")),(0,o.kt)("p",null,"Check the status until we see ",(0,o.kt)("inlineCode",{parentName:"p"},"status")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"running")," and services are ",(0,o.kt)("inlineCode",{parentName:"p"},"healthy"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$  kubectl get application first-vela-app -o yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  generation: 1\n  name: first-vela-app\n  ...\n  namespace: default\nspec:\n  components:\n  - name: express-server\n    type: webservice\n    properties:\n      image: crccheck/hello-world\n      port: 8000\n    traits:\n    - type: ingress\n      properties:\n        domain: testsvc.example.com\n        http:\n          /: 8000\nstatus:\n  ...\n  services:\n  - healthy: true\n    name: express-server\n    traits:\n    - healthy: true\n      message: 'Visiting URL: testsvc.example.com, IP: your ip address'\n      type: ingress\n  status: running\n")),(0,o.kt)("p",null,"Under the neath, the K8s resources was created:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get deployment\nNAME                READY   UP-TO-DATE   AVAILABLE   AGE\nexpress-server-v1   1/1     1            1           8m\n$ kubectl get svc\nNAME             TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE\nexpress-server   ClusterIP   172.21.11.152   <none>        8000/TCP   7m43s\nkubernetes       ClusterIP   172.21.0.1      <none>        443/TCP    116d\n$ kubectl get ingress\nNAME             CLASS    HOSTS                 ADDRESS          PORTS   AGE\nexpress-server   <none>   testsvc.example.com   <your ip address>   80      7m47s\n")),(0,o.kt)("p",null,"If your cluster has a working ingress, you can visit the service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ curl -H "Host:testsvc.example.com" http://<your ip address>/\n<xmp>\nHello World\n\n\n                                       ##         .\n                                 ## ## ##        ==\n                              ## ## ## ## ##    ===\n                           /""""""""""""""""\\___/ ===\n                      ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~\n                           \\______ o          _,/\n                            \\      \\       _,\'\n                             `\'--.._\\..--\'\'\n</xmp>\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Voila!")," You are all set to go."),(0,o.kt)("h2",{id:"whats-next"},"What's Next"),(0,o.kt)("p",null,"Here are some recommended next steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Learn KubeVela starting from its ",(0,o.kt)("a",{parentName:"li",href:"./concepts"},"core concepts")),(0,o.kt)("li",{parentName:"ul"},"Learn more details about ",(0,o.kt)("a",{parentName:"li",href:"./application"},(0,o.kt)("inlineCode",{parentName:"a"},"Application"))," and understand how it works."),(0,o.kt)("li",{parentName:"ul"},"Join ",(0,o.kt)("inlineCode",{parentName:"li"},"#kubevela")," channel in CNCF ",(0,o.kt)("a",{parentName:"li",href:"https://cloud-native.slack.com"},"Slack")," and/or ",(0,o.kt)("a",{parentName:"li",href:"https://gitter.im/oam-dev/community"},"Gitter"))),(0,o.kt)("p",null,"Welcome onboard and sail Vela!"))}c.isMDXComponent=!0}}]);