(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{318:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),o=(t(0),t(332)),i={title:"Attach Sidecar"},c={unversionedId:"end-user/sidecar",id:"version-v1.0/end-user/sidecar",isDocsHomePage:!1,title:"Attach Sidecar",description:"In this section, we will show you how to use sidecar trait to collect logs.",source:"@site/versioned_docs/version-v1.0/end-user/sidecar.md",slug:"/end-user/sidecar",permalink:"/zh/docs/end-user/sidecar",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/end-user/sidecar.md",version:"v1.0",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1618589155,formattedLastUpdatedAt:"4/16/2021",sidebar:"version-v1.0/docs",previous:{title:"Labels and Annotations",permalink:"/zh/docs/end-user/labels"},next:{title:"Provision and Consume Cloud Resources",permalink:"/zh/docs/end-user/cloud-resources"}},l=[{value:"Show the Usage of Sidecar",id:"show-the-usage-of-sidecar",children:[]},{value:"Apply the Application",id:"apply-the-application",children:[]}],s={toc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this section, we will show you how to use ",Object(o.b)("inlineCode",{parentName:"p"},"sidecar")," trait to collect logs."),Object(o.b)("h2",{id:"show-the-usage-of-sidecar"},"Show the Usage of Sidecar"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl vela show sidecar\n# Properties\n+---------+-----------------------------------------+-----------------------+----------+---------+\n|  NAME   |               DESCRIPTION               |         TYPE          | REQUIRED | DEFAULT |\n+---------+-----------------------------------------+-----------------------+----------+---------+\n| name    | Specify the name of sidecar container   | string                | true     |         |\n| cmd     | Specify the commands run in the sidecar | []string              | false    |         |\n| image   | Specify the image of sidecar container  | string                | true     |         |\n| volumes | Specify the shared volume path          | [[]volumes](#volumes) | false    |         |\n+---------+-----------------------------------------+-----------------------+----------+---------+\n\n\n## volumes\n+-----------+-------------+--------+----------+---------+\n|   NAME    | DESCRIPTION |  TYPE  | REQUIRED | DEFAULT |\n+-----------+-------------+--------+----------+---------+\n| name      |             | string | true     |         |\n| path      |             | string | true     |         |\n+-----------+-------------+--------+----------+---------+\n")),Object(o.b)("h2",{id:"apply-the-application"},"Apply the Application"),Object(o.b)("p",null,"In this Application, component ",Object(o.b)("inlineCode",{parentName:"p"},"log-gen-worker")," and sidecar share the data volume that saves the logs.\nThe sidebar will re-output the log to stdout."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"# app.yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: vela-app-with-sidecar\nspec:\n  components:\n    - name: log-gen-worker\n      type: worker\n      properties:\n        image: busybox\n        cmd:\n          - /bin/sh\n          - -c\n          - >\n            i=0;\n            while true;\n            do\n              echo \"$i: $(date)\" >> /var/log/date.log;\n              i=$((i+1));\n              sleep 1;\n            done\n        volumes:\n          - name: varlog\n            mountPath: /var/log\n            type: emptyDir\n      traits:\n        - type: sidecar\n          properties:\n            name: count-log\n            image: busybox\n            cmd: [ /bin/sh, -c, 'tail -n+1 -f /var/log/date.log']\n            volumes:\n              - name: varlog\n                path: /var/log\n")),Object(o.b)("p",null,"Apply this Application."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f app.yaml\n")),Object(o.b)("p",null,"Check the workload generate by Application."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get pod\nNAME                              READY   STATUS    RESTARTS   AGE\nlog-gen-worker-76945f458b-k7n9k   2/2     Running   0          90s\n")),Object(o.b)("p",null,"Check the output of sidecar. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl logs -f log-gen-worker-76945f458b-k7n9k count-log\n0: Fri Apr 16 11:08:45 UTC 2021\n1: Fri Apr 16 11:08:46 UTC 2021\n2: Fri Apr 16 11:08:47 UTC 2021\n3: Fri Apr 16 11:08:48 UTC 2021\n4: Fri Apr 16 11:08:49 UTC 2021\n5: Fri Apr 16 11:08:50 UTC 2021\n6: Fri Apr 16 11:08:51 UTC 2021\n7: Fri Apr 16 11:08:52 UTC 2021\n8: Fri Apr 16 11:08:53 UTC 2021\n9: Fri Apr 16 11:08:54 UTC 2021 \n")))}p.isMDXComponent=!0},332:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),b=r,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return t?a.a.createElement(m,c(c({ref:n},s),{},{components:t})):a.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);