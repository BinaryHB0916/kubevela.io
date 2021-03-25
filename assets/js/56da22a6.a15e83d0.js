(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(263)),c={},i={unversionedId:"developer-experience-guide/extensions/set-autoscale",id:"version-v0.3.5/developer-experience-guide/extensions/set-autoscale",isDocsHomePage:!1,title:"set-autoscale",description:"Automatically scale workloads by resource utilization metrics and cron",source:"@site/versioned_docs/version-v0.3.5/developer-experience-guide/extensions/set-autoscale.md",slug:"/developer-experience-guide/extensions/set-autoscale",permalink:"/docs/developer-experience-guide/extensions/set-autoscale",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-v0.3.5/developer-experience-guide/extensions/set-autoscale.md",version:"v0.3.5"},l=[{value:"Prerequisite",id:"prerequisite",children:[]},{value:"Setting cron auto-scaling policy",id:"setting-cron-auto-scaling-policy",children:[]},{value:"Setting auto-scaling policy of CPU resource utilization",id:"setting-auto-scaling-policy-of-cpu-resource-utilization",children:[]}],p={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"automatically-scale-workloads-by-resource-utilization-metrics-and-cron"},"Automatically scale workloads by resource utilization metrics and cron"),Object(o.b)("h2",{id:"prerequisite"},"Prerequisite"),Object(o.b)("p",null,"Make sure auto-scaler trait controller is installed in your cluster"),Object(o.b)("p",null,"Install auto-scaler trait controller with helm"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Add helm chart repo for autoscaler trait"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo add oam.catalog  http://oam.dev/catalog/\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Update the chart repo"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo update\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Install autoscaler trait  controller"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm install --create-namespace -n vela-system autoscalertrait oam.catalog/autoscalertrait\n")))),Object(o.b)("p",null,"Autoscale depends on metrics server, please ",Object(o.b)("a",{parentName:"p",href:"../../faq#autoscale-how-to-enable-metrics-server-in-various-kubernetes-clusters"},"enable it in your Kubernetes cluster")," at the beginning."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: autoscale is one of the extension capabilities ",Object(o.b)("a",{parentName:"p",href:"../cli/cap-center"},"installed from cap center"),",\nplease install it if you can't find it in ",Object(o.b)("inlineCode",{parentName:"p"},"vela traits"),".")),Object(o.b)("h2",{id:"setting-cron-auto-scaling-policy"},"Setting cron auto-scaling policy"),Object(o.b)("p",null,"Introduce how to automatically scale workloads by cron."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Prepare Appfile"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'name: testapp\n\nservices:\n  express-server:\n    # this image will be used in both build and deploy steps\n    image: oamdev/testapp:v1\n\n    cmd: ["node", "server.js"]\n    port: 8080\n\n    autoscale:\n      min: 1\n      max: 4\n      cron:\n        startAt:  "14:00"\n        duration: "2h"\n        days:     "Monday, Thursday"\n        replicas: 2\n        timezone: "America/Los_Angeles"\n')))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The full specification of ",Object(o.b)("inlineCode",{parentName:"p"},"autoscale")," could show up by ",Object(o.b)("inlineCode",{parentName:"p"},"$ vela show autoscale")," or be found on ",Object(o.b)("a",{parentName:"p",href:"../../capability-references/autoscale"},"its reference documentation"))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Deploy an application"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"$ vela up\n  Parsing vela.yaml ...\n  Loading templates ...\n  \n  Rendering configs for service (express-server)...\n  Writing deploy config to (.vela/deploy.yaml)\n  \n  Applying deploy configs ...\n  Checking if app has been deployed...\n  App has not been deployed, creating a new deployment...\n  \u2705 App has been deployed \ud83d\ude80\ud83d\ude80\ud83d\ude80\n      Port forward: vela port-forward testapp\n               SSH: vela exec testapp\n           Logging: vela logs testapp\n        App status: vela status testapp\n    Service status: vela status testapp --svc express-server\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Check the replicas and wait for the scaling to take effect"),Object(o.b)("p",{parentName:"li"},"Check the replicas of the application, there is one replica."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"$ vela status testapp\nAbout:\n\n  Name:         testapp\n  Namespace:    default\n  Created at:   2020-11-05 17:09:02.426632 +0800 CST\n  Updated at:   2020-11-05 17:09:02.426632 +0800 CST\n\nServices:\n\n  - Name: express-server\n    Type: webservice\n    HEALTHY Ready: 1/1\n    Traits:\n      - \u2705 autoscale: type: cron    replicas(min/max/current): 1/4/1\n    Last Deployment:\n      Created at: 2020-11-05 17:09:03 +0800 CST\n      Updated at: 2020-11-05T17:09:02+08:00\n")),Object(o.b)("p",{parentName:"li"},"Wait till the time clocks ",Object(o.b)("inlineCode",{parentName:"p"},"startAt"),", and check again. The replicas become to two, which is specified as\n",Object(o.b)("inlineCode",{parentName:"p"},"replicas")," in ",Object(o.b)("inlineCode",{parentName:"p"},"vela.yaml"),"."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"$ vela status testapp\nAbout:\n\n  Name:         testapp\n  Namespace:    default\n  Created at:   2020-11-10 10:18:59.498079 +0800 CST\n  Updated at:   2020-11-10 10:18:59.49808 +0800 CST\n\nServices:\n\n  - Name: express-server\n    Type: webservice\n    HEALTHY Ready: 2/2\n    Traits:\n      - \u2705 autoscale: type: cron    replicas(min/max/current): 1/4/2\n    Last Deployment:\n      Created at: 2020-11-10 10:18:59 +0800 CST\n      Updated at: 2020-11-10T10:18:59+08:00\n")),Object(o.b)("p",{parentName:"li"},"Wait after the period ends, the replicas will be one eventually."))),Object(o.b)("h2",{id:"setting-auto-scaling-policy-of-cpu-resource-utilization"},"Setting auto-scaling policy of CPU resource utilization"),Object(o.b)("p",null,"Introduce how to automatically scale workloads by CPU resource utilization."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Prepare Appfile"),Object(o.b)("p",{parentName:"li"},"Modify ",Object(o.b)("inlineCode",{parentName:"p"},"vela.yaml")," as below. We add field ",Object(o.b)("inlineCode",{parentName:"p"},"services.express-server.cpu")," and change the auto-scaling policy\nfrom cron to cpu utilization by updating filed ",Object(o.b)("inlineCode",{parentName:"p"},"services.express-server.autoscale"),"."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'name: testapp\n\nservices:\n  express-server:\n    image: oamdev/testapp:v1\n      \n    cmd: ["node", "server.js"]\n    port: 8080\n    cpu: "0.01"\n\n    autoscale:\n      min: 1\n      max: 5\n      cpuPercent: 10\n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Deploy an application"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ vela up\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Expose the service entrypoint of the application"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"$ vela port-forward helloworld 80\nForwarding from 127.0.0.1:80 -> 80\nForwarding from [::1]:80 -> 80\n\nForward successfully! Opening browser ...\nHandling connection for 80\nHandling connection for 80\nHandling connection for 80\nHandling connection for 80\n")),Object(o.b)("p",{parentName:"li"},"On your macOS, you might need to add ",Object(o.b)("inlineCode",{parentName:"p"},"sudo")," ahead of the command.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Monitor the replicas changing"),Object(o.b)("p",{parentName:"li"},"Continue to monitor the replicas changing when the application becomes overloaded. You can use Apache HTTP server\nbenchmarking tool ",Object(o.b)("inlineCode",{parentName:"p"},"ab")," to mock many requests to the application."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"$ ab -n 10000 -c 200 http://127.0.0.1/\nThis is ApacheBench, Version 2.3 <$Revision: 1843412 $>\nCopyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/\nLicensed to The Apache Software Foundation, http://www.apache.org/\n\nBenchmarking 127.0.0.1 (be patient)\nCompleted 1000 requests\n")),Object(o.b)("p",{parentName:"li"},"The replicas gradually increase from one to four."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"$ vela status helloworld --svc frontend\nAbout:\n\n  Name:         helloworld\n  Namespace:    default\n  Created at:   2020-11-05 20:07:21.830118 +0800 CST\n  Updated at:   2020-11-05 20:50:42.664725 +0800 CST\n\nServices:\n\n  - Name: frontend\n    Type: webservice\n    HEALTHY Ready: 1/1\n    Traits:\n      - \u2705 autoscale: type: cpu     cpu-utilization(target/current): 5%/10%  replicas(min/max/current): 1/5/2\n    Last Deployment:\n      Created at: 2020-11-05 20:07:23 +0800 CST\n      Updated at: 2020-11-05T20:50:42+08:00\n")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"$ vela status helloworld --svc frontend\nAbout:\n\n  Name:         helloworld\n  Namespace:    default\n  Created at:   2020-11-05 20:07:21.830118 +0800 CST\n  Updated at:   2020-11-05 20:50:42.664725 +0800 CST\n\nServices:\n\n  - Name: frontend\n    Type: webservice\n    HEALTHY Ready: 1/1\n    Traits:\n      - \u2705 autoscale: type: cpu     cpu-utilization(target/current): 5%/14%  replicas(min/max/current): 1/5/4\n    Last Deployment:\n      Created at: 2020-11-05 20:07:23 +0800 CST\n      Updated at: 2020-11-05T20:50:42+08:00\n")),Object(o.b)("p",{parentName:"li"},"Stop ",Object(o.b)("inlineCode",{parentName:"p"},"ab")," tool, and the replicas will decrease to one eventually."))))}s.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||o;return n?r.a.createElement(m,i(i({ref:t},p),{},{components:n})):r.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);