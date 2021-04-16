(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{194:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return o})),t.d(a,"toc",(function(){return s})),t.d(a,"default",(function(){return i}));var r=t(3),n=t(7),l=(t(0),t(332)),c={title:"Advanced Topics for Installation"},o={unversionedId:"advanced-install",id:"version-v1.0/advanced-install",isDocsHomePage:!1,title:"Advanced Topics for Installation",description:"Install KubeVela with cert-manager",source:"@site/versioned_docs/version-v1.0/advanced-install.md",slug:"/advanced-install",permalink:"/zh/docs/advanced-install",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/advanced-install.md",version:"v1.0",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1618589155,formattedLastUpdatedAt:"4/16/2021",sidebar:"version-v1.0/docs",previous:{title:"KubeVela Roadmap",permalink:"/zh/docs/roadmap"},next:{title:"FAQ",permalink:"/zh/docs/developers/references/devex/faq"}},s=[{value:"Install KubeVela with cert-manager",id:"install-kubevela-with-cert-manager",children:[]},{value:"Install Pre-release",id:"install-pre-release",children:[]},{value:"Upgrade",id:"upgrade",children:[{value:"Step 1. Update Helm repo",id:"step-1-update-helm-repo",children:[]},{value:"Step 2. Upgrade KubeVela CRDs",id:"step-2-upgrade-kubevela-crds",children:[]},{value:"Step 3. Upgrade KubeVela Helm chart",id:"step-3-upgrade-kubevela-helm-chart",children:[]}]},{value:"Clean Up",id:"clean-up",children:[]}],p={toc:s};function i(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"install-kubevela-with-cert-manager"},"Install KubeVela with cert-manager"),Object(l.b)("p",null,"KubeVela can use cert-manager generate certs for your application if it's available. Note that you need to install cert-manager ",Object(l.b)("strong",{parentName:"p"},"before")," the KubeVela chart."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo add jetstack https://charts.jetstack.io\nhelm repo update\nhelm install cert-manager jetstack/cert-manager --namespace cert-manager --version v1.2.0 --create-namespace --set installCRDs=true\n")),Object(l.b)("p",null,"Install kubevela with enabled certmanager:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm install --create-namespace -n vela-system --set admissionWebhooks.certManager.enabled=true kubevela kubevela/vela-core\n")),Object(l.b)("h2",{id:"install-pre-release"},"Install Pre-release"),Object(l.b)("p",null,"Add flag ",Object(l.b)("inlineCode",{parentName:"p"},"--devel")," in command ",Object(l.b)("inlineCode",{parentName:"p"},"helm search")," to choose a pre-release\nversion in format ",Object(l.b)("inlineCode",{parentName:"p"},"<next_version>-rc-master"),". It means a release candidate version build on ",Object(l.b)("inlineCode",{parentName:"p"},"master")," branch,\nsuch as ",Object(l.b)("inlineCode",{parentName:"p"},"0.4.0-rc-master"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm search repo kubevela/vela-core -l --devel\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-console"},"    NAME                      CHART VERSION         APP VERSION           DESCRIPTION\n    kubevela/vela-core        0.4.0-rc-master         0.4.0-rc-master         A Helm chart for KubeVela core\n    kubevela/vela-core        0.3.2                   0.3.2                   A Helm chart for KubeVela core\n    kubevela/vela-core        0.3.1                 0.3.1                 A Helm chart for KubeVela core\n")),Object(l.b)("p",null,"And try the following command to install it."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm install --create-namespace -n vela-system kubevela kubevela/vela-core --version <next_version>-rc-master\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-console"},"NAME: kubevela\nLAST DEPLOYED: Thu Apr  1 19:41:30 2021\nNAMESPACE: vela-system\nSTATUS: deployed\nREVISION: 1\nNOTES:\nWelcome to use the KubeVela! Enjoy your shipping application journey!\n")),Object(l.b)("h2",{id:"upgrade"},"Upgrade"),Object(l.b)("h3",{id:"step-1-update-helm-repo"},"Step 1. Update Helm repo"),Object(l.b)("p",null,"You can explore the newly released chart versions of KubeVela by run:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"helm repo update\nhelm search repo kubevela/vela-core -l\n")),Object(l.b)("h3",{id:"step-2-upgrade-kubevela-crds"},"Step 2. Upgrade KubeVela CRDs"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_componentdefinitions.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_workloaddefinitions.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_traitdefinitions.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_applications.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_approllouts.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_applicationrevisions.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_scopedefinitions.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_appdeployments.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_applicationcontexts.yaml\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Tips: If you see errors like ",Object(l.b)("inlineCode",{parentName:"p"},'* is invalid: spec.scope: Invalid value: "Namespaced": filed is immutable'),". Please delete the CRD which reports error and re-apply the kubevela crds.")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"}," kubectl delete crd \\\n  scopedefinitions.core.oam.dev \\\n  traitdefinitions.core.oam.dev \\\n  workloaddefinitions.core.oam.dev\n")),Object(l.b)("h3",{id:"step-3-upgrade-kubevela-helm-chart"},"Step 3. Upgrade KubeVela Helm chart"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"helm upgrade --install --create-namespace --namespace vela-system  kubevela kubevela/vela-core --version <the_new_version>\n")),Object(l.b)("h2",{id:"clean-up"},"Clean Up"),Object(l.b)("p",null,"Run:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm uninstall -n vela-system kubevela\nrm -r ~/.vela\n")),Object(l.b)("p",null,"This will uninstall KubeVela server component and its dependency components.\nThis also cleans up local CLI cache."),Object(l.b)("p",null,"Then clean up CRDs (CRDs are not removed via helm by default):"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0}," kubectl delete crd \\\n  appdeployments.core.oam.dev \\\n  applicationconfigurations.core.oam.dev \\\n  applicationcontexts.core.oam.dev \\\n  applicationdeployments.core.oam.dev \\\n  applicationrevisions.core.oam.dev \\\n  applications.core.oam.dev \\\n  approllouts.core.oam.dev \\\n  componentdefinitions.core.oam.dev \\\n  components.core.oam.dev \\\n  containerizedworkloads.core.oam.dev \\\n  healthscopes.core.oam.dev \\\n  manualscalertraits.core.oam.dev \\\n  podspecworkloads.standard.oam.dev \\\n  scopedefinitions.core.oam.dev \\\n  traitdefinitions.core.oam.dev \\\n  workloaddefinitions.core.oam.dev\n")))}i.isMDXComponent=!0},332:function(e,a,t){"use strict";t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return b}));var r=t(0),n=t.n(r);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=n.a.createContext({}),i=function(e){var a=n.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=i(e.components);return n.a.createElement(p.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},m=n.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=i(t),m=r,b=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return t?n.a.createElement(b,o(o({ref:a},p),{},{components:t})):n.a.createElement(b,o({ref:a},p))}));function b(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,c=new Array(l);c[0]=m;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<l;p++)c[p]=t[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);