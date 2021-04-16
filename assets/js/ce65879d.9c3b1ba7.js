(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{285:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return o})),a.d(n,"metadata",(function(){return s})),a.d(n,"toc",(function(){return i})),a.d(n,"default",(function(){return l}));var t=a(3),r=a(7),p=(a(0),a(332)),o={title:"Debug and Test"},s={unversionedId:"end-user/diagnose",id:"version-v1.0/end-user/diagnose",isDocsHomePage:!1,title:"Debug and Test",description:"You can make further debug and test for your application by using vela kubectl plugin.",source:"@site/versioned_docs/version-v1.0/end-user/diagnose.md",slug:"/end-user/diagnose",permalink:"/docs/end-user/diagnose",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/end-user/diagnose.md",version:"v1.0",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1618589155,formattedLastUpdatedAt:"4/16/2021",sidebar:"version-v1.0/docs",previous:{title:"Explore Applications",permalink:"/docs/end-user/explore"},next:{title:"Expose Application",permalink:"/docs/end-user/expose"}},i=[{value:"Dry-Run the <code>Application</code>",id:"dry-run-the-application",children:[]},{value:"Live-Diff the <code>Application</code>",id:"live-diff-the-application",children:[]}],c={toc:i};function l(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(p.b)("wrapper",Object(t.a)({},c,a,{components:n,mdxType:"MDXLayout"}),Object(p.b)("p",null,"You can make further debug and test for your application by using ",Object(p.b)("a",{parentName:"p",href:"./kubectlplugin"},"vela kubectl plugin"),"."),Object(p.b)("h2",{id:"dry-run-the-application"},"Dry-Run the ",Object(p.b)("inlineCode",{parentName:"h2"},"Application")),Object(p.b)("p",null,"Dry run will help you to understand what are the real resources which will to be expanded and deployed\nto the Kubernetes cluster. In other words, it will mock to run the same logic as KubeVela's controller\nand output the results locally."),Object(p.b)("p",null,"For example, let's dry-run the following application:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-yaml"},'# app.yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: vela-app\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        image: crccheck/hello-world\n        port: 8000\n      traits:\n        - type: ingress\n          properties:\n            domain: testsvc.example.com\n            http:\n              "/": 8000\n')),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-shell"},'kubectl vela dry-run -f app.yaml\n---\n# Application(vela-app) -- Comopnent(express-server)\n---\n\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app.oam.dev/appRevision: ""\n    app.oam.dev/component: express-server\n    app.oam.dev/name: vela-app\n    workload.oam.dev/type: webservice\nspec:\n  selector:\n    matchLabels:\n      app.oam.dev/component: express-server\n  template:\n    metadata:\n      labels:\n        app.oam.dev/component: express-server\n    spec:\n      containers:\n      - image: crccheck/hello-world\n        name: express-server\n        ports:\n        - containerPort: 8000\n\n---\napiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    app.oam.dev/appRevision: ""\n    app.oam.dev/component: express-server\n    app.oam.dev/name: vela-app\n    trait.oam.dev/resource: service\n    trait.oam.dev/type: ingress\n  name: express-server\nspec:\n  ports:\n  - port: 8000\n    targetPort: 8000\n  selector:\n    app.oam.dev/component: express-server\n\n---\napiVersion: networking.k8s.io/v1beta1\nkind: Ingress\nmetadata:\n  labels:\n    app.oam.dev/appRevision: ""\n    app.oam.dev/component: express-server\n    app.oam.dev/name: vela-app\n    trait.oam.dev/resource: ingress\n    trait.oam.dev/type: ingress\n  name: express-server\nspec:\n  rules:\n  - host: testsvc.example.com\n    http:\n      paths:\n      - backend:\n          serviceName: express-server\n          servicePort: 8000\n        path: /\n\n---\n')),Object(p.b)("p",null,"In this example, the definitions(",Object(p.b)("inlineCode",{parentName:"p"},"webservice")," and ",Object(p.b)("inlineCode",{parentName:"p"},"ingress"),") which ",Object(p.b)("inlineCode",{parentName:"p"},"vela-app")," depends on is the built-in\ncomponents and traits of KubeVela. You can also use ",Object(p.b)("inlineCode",{parentName:"p"},"-d "),"or ",Object(p.b)("inlineCode",{parentName:"p"},"--definitions")," to specify your local definition files."),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"-d "),"or ",Object(p.b)("inlineCode",{parentName:"p"},"--definitions")," permitting user to provide capability definitions used in the application from local files.\n",Object(p.b)("inlineCode",{parentName:"p"},"dry-run")," cmd will prioritize the provided capabilities than the living ones in the cluster."),Object(p.b)("h2",{id:"live-diff-the-application"},"Live-Diff the ",Object(p.b)("inlineCode",{parentName:"h2"},"Application")),Object(p.b)("p",null,"Live-diff helps you to have a preview of what would change if you're going to upgrade an application without making any changes\nto the living cluster.\nThis feature is extremely useful for serious production deployment, and make the upgrade under control"),Object(p.b)("p",null,"It basically generates a diff between the specific revision of running instance and the local candidate application.\nThe result shows the changes (added/modified/removed/no_change) of the application as well as its sub-resources,\nsuch as components and traits."),Object(p.b)("p",null,"Assume you have just deployed the application in dry-run section.\nThen you can list the revisions of the Application."),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get apprev -l app.oam.dev/name=vela-app\nNAME          AGE\nvela-app-v1   50s\n")),Object(p.b)("p",null,"Assume we're going to upgrade the application like below."),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-yaml"},'# new-app.yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: vela-app\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        image: crccheck/hello-world\n        port: 8080 # change port\n        cpu: 0.5 # add requests cpu units\n    - name: my-task # add a component\n      type: task\n      properties:\n        image: busybox\n        cmd: ["sleep", "1000"]\n      traits:\n        - type: ingress\n          properties:\n            domain: testsvc.example.com\n            http:\n              "/": 8080 # change port\n')),Object(p.b)("p",null,"Run live-diff like this:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-shell"},"kubectl vela live-diff -f new-app.yaml -r vela-app-v1\n")),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"-r")," or ",Object(p.b)("inlineCode",{parentName:"p"},"--revision")," is a flag that specifies the name of a living ApplicationRevision with which you want to compare the updated application."),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"-c")," or ",Object(p.b)("inlineCode",{parentName:"p"},"--context")," is a flag that specifies the number of lines shown around a change. The unchanged lines\nwhich are out of the context of a change will be omitted. It's useful if the diff result contains a lot of unchanged content\nwhile you just want to focus on the changed ones."),Object(p.b)("details",null,Object(p.b)("summary",null," Click to view the details of diff result "),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-bash"},'---\n# Application (vela-app) has been modified(*)\n---\n  apiVersion: core.oam.dev/v1beta1\n  kind: Application\n  metadata:\n    creationTimestamp: null\n    name: vela-app\n    namespace: default\n  spec:\n    components:\n    - name: express-server\n      properties:\n+       cpu: 0.5\n        image: crccheck/hello-world\n-       port: 8000\n+       port: 8080\n+     type: webservice\n+   - name: my-task\n+     properties:\n+       cmd:\n+       - sleep\n+       - "1000"\n+       image: busybox\n      traits:\n      - properties:\n          domain: testsvc.example.com\n          http:\n-           /: 8000\n+           /: 8080\n        type: ingress\n-     type: webservice\n+     type: task\n  status:\n    batchRollingState: ""\n    currentBatch: 0\n    rollingState: ""\n    upgradedReadyReplicas: 0\n    upgradedReplicas: 0\n\n---\n## Component (express-server) has been modified(*)\n---\n  apiVersion: core.oam.dev/v1alpha2\n  kind: Component\n  metadata:\n    creationTimestamp: null\n    labels:\n      app.oam.dev/name: vela-app\n    name: express-server\n  spec:\n    workload:\n      apiVersion: apps/v1\n      kind: Deployment\n      metadata:\n        labels:\n          app.oam.dev/appRevision: ""\n          app.oam.dev/component: express-server\n          app.oam.dev/name: vela-app\n          workload.oam.dev/type: webservice\n      spec:\n        selector:\n          matchLabels:\n            app.oam.dev/component: express-server\n        template:\n          metadata:\n            labels:\n              app.oam.dev/component: express-server\n          spec:\n            containers:\n            - image: crccheck/hello-world\n              name: express-server\n              ports:\n-             - containerPort: 8000\n+             - containerPort: 8080\n  status:\n    observedGeneration: 0\n\n---\n### Component (express-server) / Trait (ingress/service) has been removed(-)\n---\n- apiVersion: v1\n- kind: Service\n- metadata:\n-   labels:\n-     app.oam.dev/appRevision: ""\n-     app.oam.dev/component: express-server\n-     app.oam.dev/name: vela-app\n-     trait.oam.dev/resource: service\n-     trait.oam.dev/type: ingress\n-   name: express-server\n- spec:\n-   ports:\n-   - port: 8000\n-     targetPort: 8000\n-   selector:\n-     app.oam.dev/component: express-server\n\n---\n### Component (express-server) / Trait (ingress/ingress) has been removed(-)\n---\n- apiVersion: networking.k8s.io/v1beta1\n- kind: Ingress\n- metadata:\n-   labels:\n-     app.oam.dev/appRevision: ""\n-     app.oam.dev/component: express-server\n-     app.oam.dev/name: vela-app\n-     trait.oam.dev/resource: ingress\n-     trait.oam.dev/type: ingress\n-   name: express-server\n- spec:\n-   rules:\n-   - host: testsvc.example.com\n-     http:\n-       paths:\n-       - backend:\n-           serviceName: express-server\n-           servicePort: 8000\n-         path: /\n\n---\n## Component (my-task) has been added(+)\n---\n+ apiVersion: core.oam.dev/v1alpha2\n+ kind: Component\n+ metadata:\n+   creationTimestamp: null\n+   labels:\n+     app.oam.dev/name: vela-app\n+   name: my-task\n+ spec:\n+   workload:\n+     apiVersion: batch/v1\n+     kind: Job\n+     metadata:\n+       labels:\n+         app.oam.dev/appRevision: ""\n+         app.oam.dev/component: my-task\n+         app.oam.dev/name: vela-app\n+         workload.oam.dev/type: task\n+     spec:\n+       completions: 1\n+       parallelism: 1\n+       template:\n+         spec:\n+           containers:\n+           - command:\n+             - sleep\n+             - "1000"\n+             image: busybox\n+             name: my-task\n+           restartPolicy: Never\n+ status:\n+   observedGeneration: 0\n\n---\n### Component (my-task) / Trait (ingress/service) has been added(+)\n---\n+ apiVersion: v1\n+ kind: Service\n+ metadata:\n+   labels:\n+     app.oam.dev/appRevision: ""\n+     app.oam.dev/component: my-task\n+     app.oam.dev/name: vela-app\n+     trait.oam.dev/resource: service\n+     trait.oam.dev/type: ingress\n+   name: my-task\n+ spec:\n+   ports:\n+   - port: 8080\n+     targetPort: 8080\n+   selector:\n+     app.oam.dev/component: my-task\n\n---\n### Component (my-task) / Trait (ingress/ingress) has been added(+)\n---\n+ apiVersion: networking.k8s.io/v1beta1\n+ kind: Ingress\n+ metadata:\n+   labels:\n+     app.oam.dev/appRevision: ""\n+     app.oam.dev/component: my-task\n+     app.oam.dev/name: vela-app\n+     trait.oam.dev/resource: ingress\n+     trait.oam.dev/type: ingress\n+   name: my-task\n+ spec:\n+   rules:\n+   - host: testsvc.example.com\n+     http:\n+       paths:\n+       - backend:\n+           serviceName: my-task\n+           servicePort: 8080\n+         path: /\n'))))}l.isMDXComponent=!0},332:function(e,n,a){"use strict";a.d(n,"a",(function(){return d})),a.d(n,"b",(function(){return u}));var t=a(0),r=a.n(t);function p(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){p(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)a=p[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)a=p[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),l=function(e){var n=r.a.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},d=function(e){var n=l(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},v=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,p=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(a),v=t,u=d["".concat(o,".").concat(v)]||d[v]||m[v]||p;return a?r.a.createElement(u,s(s({ref:n},c),{},{components:a})):r.a.createElement(u,s({ref:n},c))}));function u(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var p=a.length,o=new Array(p);o[0]=v;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:t,o[1]=s;for(var c=2;c<p;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}v.displayName="MDXCreateElement"}}]);