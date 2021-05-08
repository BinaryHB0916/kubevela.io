(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[2333],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=o(n),m=l,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(y,r(r({ref:t},p),{},{components:n})):a.createElement(y,r({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:l,r[1]=c;for(var o=2;o<i;o++)r[o]=n[o];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1532:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var a=n(2122),l=n(9756),i=(n(7294),n(3905)),r={title:"Managing Capabilities"},c={unversionedId:"developers/cap-center",id:"developers/cap-center",isDocsHomePage:!1,title:"Managing Capabilities",description:"In KubeVela, developers can install more capabilities (i.e. new component types and traits) from any GitHub repo that contains OAM definition files. We call these GitHub repos as Capability Centers.",source:"@site/docs/developers/cap-center.md",sourceDirName:"developers",slug:"/developers/cap-center",permalink:"/docs/next/developers/cap-center",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/developers/cap-center.md",version:"current",lastUpdatedBy:"yangsoon",lastUpdatedAt:1616906659,formattedLastUpdatedAt:"3/28/2021",frontMatter:{title:"Managing Capabilities"},sidebar:"docs",previous:{title:"Execute Commands in Container",permalink:"/docs/next/developers/exec-cmd"},next:{title:"Configuring data/env in Application",permalink:"/docs/next/developers/config-app"}},s=[{value:"Add a capability center",id:"add-a-capability-center",children:[]},{value:"List capability centers",id:"list-capability-centers",children:[]},{value:"Optional Remove a capability center",id:"optional-remove-a-capability-center",children:[]},{value:"List all available capabilities in capability center",id:"list-all-available-capabilities-in-capability-center",children:[]},{value:"Install a capability from capability center",id:"install-a-capability-from-capability-center",children:[]},{value:"Use the newly installed capability",id:"use-the-newly-installed-capability",children:[]},{value:"Uninstall a capability",id:"uninstall-a-capability",children:[]}],o={toc:s};function p(e){var t=e.components,n=(0,l.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In KubeVela, developers can install more capabilities (i.e. new component types and traits) from any GitHub repo that contains OAM definition files. We call these GitHub repos as ",(0,i.kt)("em",{parentName:"p"},"Capability Centers"),". "),(0,i.kt)("p",null,"KubeVela is able to discover OAM definition files in this repo automatically and sync them to your own KubeVela platform."),(0,i.kt)("h2",{id:"add-a-capability-center"},"Add a capability center"),(0,i.kt)("p",null,"Add and sync a capability center in KubeVela:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela cap center config my-center https://github.com/oam-dev/catalog/tree/master/registry\nsuccessfully sync 1/1 from my-center remote center\nSuccessfully configured capability center my-center and sync from remote\n\n$ vela cap center sync my-center\nsuccessfully sync 1/1 from my-center remote center\nsync finished\n")),(0,i.kt)("p",null,"Now, this capability center ",(0,i.kt)("inlineCode",{parentName:"p"},"my-center")," is ready to use."),(0,i.kt)("h2",{id:"list-capability-centers"},"List capability centers"),(0,i.kt)("p",null,"You are allowed to add more capability centers and list them."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela cap center ls\nNAME        ADDRESS\nmy-center   https://github.com/oam-dev/catalog/tree/master/registry\n")),(0,i.kt)("h2",{id:"optional-remove-a-capability-center"},"[Optional]"," Remove a capability center"),(0,i.kt)("p",null,"Or, remove one."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela cap center remove my-center\n")),(0,i.kt)("h2",{id:"list-all-available-capabilities-in-capability-center"},"List all available capabilities in capability center"),(0,i.kt)("p",null,"Or, list all available capabilities in certain center."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela cap ls my-center\nNAME                CENTER      TYPE                DEFINITION                      STATUS      APPLIES-TO\nclonesetservice     my-center   componentDefinition clonesets.apps.kruise.io        uninstalled []\n")),(0,i.kt)("h2",{id:"install-a-capability-from-capability-center"},"Install a capability from capability center"),(0,i.kt)("p",null,"Now let's try to install the new component named ",(0,i.kt)("inlineCode",{parentName:"p"},"clonesetservice")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"my-center")," to your own KubeVela platform."),(0,i.kt)("p",null,"You need to install OpenKruise first."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"helm install kruise https://github.com/openkruise/kruise/releases/download/v0.7.0/kruise-chart.tgz\n")),(0,i.kt)("p",null,"Install ",(0,i.kt)("inlineCode",{parentName:"p"},"clonesetservice")," component from ",(0,i.kt)("inlineCode",{parentName:"p"},"my-center"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela cap install my-center/clonesetservice\nInstalling component capability clonesetservice\nSuccessfully installed capability clonesetservice from my-center\n")),(0,i.kt)("h2",{id:"use-the-newly-installed-capability"},"Use the newly installed capability"),(0,i.kt)("p",null,"Let's check the ",(0,i.kt)("inlineCode",{parentName:"p"},"clonesetservice")," appears in your platform firstly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela components\nNAME            NAMESPACE   WORKLOAD                    DESCRIPTION\nclonesetservice vela-system clonesets.apps.kruise.io    Describes long-running, scalable, containerized services\n                                                        that have a stable network endpoint to receive external\n                                                        network traffic from customers. If workload type is skipped\n                                                        for any service defined in Appfile, it will be defaulted to\n                                                        `webservice` type.\n")),(0,i.kt)("p",null,"Great! Now let's deploy an app via Appfile."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat << EOF > vela.yaml\nname: testapp\nservices:\n  testsvc:\n    type: clonesetservice\n    image: crccheck/hello-world\n    port: 8000\nEOF\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela up\nParsing vela appfile ...\nLoad Template ...\n\nRendering configs for service (testsvc)...\nWriting deploy config to (.vela/deploy.yaml)\n\nApplying application ...\nChecking if app has been deployed...\nApp has not been deployed, creating a new deployment...\nUpdating:  core.oam.dev/v1alpha2, Kind=HealthScope in default\n\u2705 App has been deployed \ud83d\ude80\ud83d\ude80\ud83d\ude80\n    Port forward: vela port-forward testapp\n             SSH: vela exec testapp\n         Logging: vela logs testapp\n      App status: vela status testapp\n  Service status: vela status testapp --svc testsvc\n")),(0,i.kt)("p",null,"then you can Get a cloneset in your environment."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get clonesets.apps.kruise.io\nNAME      DESIRED   UPDATED   UPDATED_READY   READY   TOTAL   AGE\ntestsvc   1         1         1               1       1       46s\n")),(0,i.kt)("h2",{id:"uninstall-a-capability"},"Uninstall a capability"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"NOTE: make sure no apps are using the capability before uninstalling.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela cap uninstall my-center/clonesetservice\nSuccessfully uninstalled capability clonesetservice\n")))}p.isMDXComponent=!0}}]);