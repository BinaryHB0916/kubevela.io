(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[6257],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return p},kt:function(){return m}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?t.createElement(f,i(i({ref:n},p),{},{components:r})):t.createElement(f,i({ref:n},p))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3456:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var t=r(2122),a=r(9756),o=(r(7294),r(3905)),i={title:"\u4f7f\u7528 Sidecar"},l={unversionedId:"end-user/traits/sidecar",id:"end-user/traits/sidecar",isDocsHomePage:!1,title:"\u4f7f\u7528 Sidecar",description:"\u5728\u672c\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u4f1a\u5c55\u793a\u5982\u4f55\u4f7f\u7528 sidecar trait \u6765\u6536\u96c6\u65e5\u5fd7\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/end-user/traits/sidecar.md",sourceDirName:"end-user/traits",slug:"/end-user/traits/sidecar",permalink:"/zh/docs/next/end-user/traits/sidecar",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/end-user/traits/sidecar.md",version:"current",lastUpdatedBy:"yangsoon",lastUpdatedAt:1620312981,formattedLastUpdatedAt:"5/6/2021",frontMatter:{title:"\u4f7f\u7528 Sidecar"},sidebar:"docs",previous:{title:"Labels and Annotations",permalink:"/zh/docs/next/end-user/traits/labels"},next:{title:"Cloud Volumes",permalink:"/zh/docs/next/end-user/traits/volumes"}},c=[{value:"\u67e5\u770b Sidecar \u7684\u4f7f\u7528\u624b\u518c",id:"\u67e5\u770b-sidecar-\u7684\u4f7f\u7528\u624b\u518c",children:[]},{value:"\u5b89\u88c5\u5e94\u7528",id:"\u5b89\u88c5\u5e94\u7528",children:[]}],s={toc:c};function p(e){var n=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728\u672c\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u4f1a\u5c55\u793a\u5982\u4f55\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"sidecar")," trait \u6765\u6536\u96c6\u65e5\u5fd7\u3002"),(0,o.kt)("h2",{id:"\u67e5\u770b-sidecar-\u7684\u4f7f\u7528\u624b\u518c"},"\u67e5\u770b Sidecar \u7684\u4f7f\u7528\u624b\u518c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl vela show sidecar\n# Properties\n+---------+-----------------------------------------+-----------------------+----------+---------+\n|  NAME   |               DESCRIPTION               |         TYPE          | REQUIRED | DEFAULT |\n+---------+-----------------------------------------+-----------------------+----------+---------+\n| name    | Specify the name of sidecar container   | string                | true     |         |\n| cmd     | Specify the commands run in the sidecar | []string              | false    |         |\n| image   | Specify the image of sidecar container  | string                | true     |         |\n| volumes | Specify the shared volume path          | [[]volumes](#volumes) | false    |         |\n+---------+-----------------------------------------+-----------------------+----------+---------+\n\n\n## volumes\n+-----------+-------------+--------+----------+---------+\n|   NAME    | DESCRIPTION |  TYPE  | REQUIRED | DEFAULT |\n+-----------+-------------+--------+----------+---------+\n| name      |             | string | true     |         |\n| path      |             | string | true     |         |\n+-----------+-------------+--------+----------+---------+\n")),(0,o.kt)("h2",{id:"\u5b89\u88c5\u5e94\u7528"},"\u5b89\u88c5\u5e94\u7528"),(0,o.kt)("p",null,"\u5e94\u7528\u7684\u7ec4\u4ef6 ",(0,o.kt)("inlineCode",{parentName:"p"},"log-gen-worker")," \u548c sidecar \u5171\u4eab\u76f8\u540c\u7684\u65e5\u5fd7\u6570\u636e\u76ee\u5f55\u3002sidecar \u4f1a\u91cd\u65b0\u8f93\u51fa\u65e5\u5fd7\u5230\u6807\u51c6\u8f93\u51fa\u4e2d\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# app.yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: vela-app-with-sidecar\nspec:\n  components:\n    - name: log-gen-worker\n      type: worker\n      properties:\n        image: busybox\n        cmd:\n          - /bin/sh\n          - -c\n          - >\n            i=0;\n            while true;\n            do\n              echo \"$i: $(date)\" >> /var/log/date.log;\n              i=$((i+1));\n              sleep 1;\n            done\n        volumes:\n          - name: varlog\n            mountPath: /var/log\n            type: emptyDir\n      traits:\n        - type: sidecar\n          properties:\n            name: count-log\n            image: busybox\n            cmd: [ /bin/sh, -c, 'tail -n+1 -f /var/log/date.log']\n            volumes:\n              - name: varlog\n                path: /var/log\n")),(0,o.kt)("p",null,"\u5b89\u88c5\u8fd9\u4e2a\u5e94\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f app.yaml\n")),(0,o.kt)("p",null,"\u68c0\u67e5\u5e94\u7528\u751f\u6210\u7684 workload"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get pod\nNAME                              READY   STATUS    RESTARTS   AGE\nlog-gen-worker-76945f458b-k7n9k   2/2     Running   0          90s\n")),(0,o.kt)("p",null,"\u67e5\u770b sidecar \u7684\u8f93\u51fa"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl logs -f log-gen-worker-76945f458b-k7n9k count-log\n0: Fri Apr 16 11:08:45 UTC 2021\n1: Fri Apr 16 11:08:46 UTC 2021\n2: Fri Apr 16 11:08:47 UTC 2021\n3: Fri Apr 16 11:08:48 UTC 2021\n4: Fri Apr 16 11:08:49 UTC 2021\n5: Fri Apr 16 11:08:50 UTC 2021\n6: Fri Apr 16 11:08:51 UTC 2021\n7: Fri Apr 16 11:08:52 UTC 2021\n8: Fri Apr 16 11:08:53 UTC 2021\n9: Fri Apr 16 11:08:54 UTC 2021 \n")))}p.isMDXComponent=!0}}]);