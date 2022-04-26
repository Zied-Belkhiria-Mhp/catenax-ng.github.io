"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[799],{3905:function(A,e,t){t.d(e,{Zo:function(){return i},kt:function(){return p}});var n=t(7294);function r(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function a(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function g(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function o(A,e){if(null==A)return{};var t,n,r=function(A,e){if(null==A)return{};var t,n,r={},a=Object.keys(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||(r[t]=A[t]);return r}(A,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(r[t]=A[t])}return r}var u=n.createContext({}),c=function(A){var e=n.useContext(u),t=e;return A&&(t="function"==typeof A?A(e):g(g({},e),A)),t},i=function(A){var e=c(A.components);return n.createElement(u.Provider,{value:e},A.children)},C={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},l=n.forwardRef((function(A,e){var t=A.components,r=A.mdxType,a=A.originalType,u=A.parentName,i=o(A,["components","mdxType","originalType","parentName"]),l=c(t),p=r,s=l["".concat(u,".").concat(p)]||l[p]||C[p]||a;return t?n.createElement(s,g(g({ref:e},i),{},{components:t})):n.createElement(s,g({ref:e},i))}));function p(A,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof A||r){var a=t.length,g=new Array(a);g[0]=l;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=A,o.mdxType="string"==typeof A?A:r,g[1]=o;for(var c=2;c<a;c++)g[c]=t[c];return n.createElement.apply(null,g)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},1871:function(A,e,t){t.r(e),t.d(e,{assets:function(){return i},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return C}});var n=t(7462),r=t(3366),a=(t(7294),t(3905)),g=["components"],o={},u="ArgoCD",c={unversionedId:"kubernetes-basics/ArgoCD",id:"kubernetes-basics/ArgoCD",title:"ArgoCD",description:"We use ArgoCD.",source:"@site/docs/kubernetes-basics/ArgoCD.md",sourceDirName:"kubernetes-basics",slug:"/kubernetes-basics/ArgoCD",permalink:"/docs/kubernetes-basics/ArgoCD",editUrl:"https://github.com/catenax-ng/catenax-ng.github.io/edit/main/docs/kubernetes-basics/ArgoCD.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Helm chart",permalink:"/docs/kubernetes-basics/helm"},next:{title:"Guides",permalink:"/docs/guides"}},i={},C=[{value:"Learning resources",id:"learning-resources",level:2},{value:"How to auto deploy new container images",id:"how-to-auto-deploy-new-container-images",level:2},{value:"How to use auto sync mechnism",id:"how-to-use-auto-sync-mechnism",level:2}],l={toc:C};function p(A){var e=A.components,o=(0,r.Z)(A,g);return(0,a.kt)("wrapper",(0,n.Z)({},l,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"argocd"},"ArgoCD"),(0,a.kt)("p",null,"We use ",(0,a.kt)("a",{parentName:"p",href:"https://argo-cd.readthedocs.io/en/stable/"},"ArgoCD"),"."),(0,a.kt)("h2",{id:"learning-resources"},"Learning resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/results?search_query=ArgoCD"},"YouTube"))),(0,a.kt)("h2",{id:"how-to-auto-deploy-new-container-images"},"How to auto deploy new container images"),(0,a.kt)("p",null,"When you use Auto Sync in ArgoCD, you will also need to make sure your container image tag changes when you create a new\ngit commit. If you don't do that, ArgoCD doesn't know that the container image changed when the tag doesn't change."),(0,a.kt)("p",null,"You can build and tag your container image with the current git commit and reference it in ArgoCD by overwriting a helm\nproperty:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Inside your helm chart / deployment.yaml:\n...\nimage: "{{ .Values.image.repository }}:{{ .Values.image.tag }}"\n...\n\n\nvalues.yaml:\n...\nimage:\n  tag: placeholder\n...\n\n\nIn ArgoCD overwrite this value:\nimage.tag = $ARGOCD_APP_REVISION\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"argocd_override.png",src:t(8347).Z,width:"828",height:"75"})),(0,a.kt)("h2",{id:"how-to-use-auto-sync-mechnism"},"How to use auto sync mechnism"),(0,a.kt)("p",null,"ArgoCD supports automatic syncronisation between your github repository and the cluster state. To use this, you need to\nenable auto sync:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'On the left top corner you see the "App Details":'),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"argocd_appdetails.png",src:t(1542).Z,width:"200",height:"141"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Enable Auto Sync"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"argocd_syncpolicy.png",src:t(6637).Z,width:"749",height:"324"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Enable "Self Heal" if you always want ArgoCD to keep your state in sync. Without this, ArgoCD will stop syncing as\nsoon as your project is not green as it will not overwrite potential manual changes you made.'))))}p.isMDXComponent=!0},1542:function(A,e,t){e.Z=t.p+"assets/images/argocd_appdetails-79bcaffd86b8a5a6371c02cee731478c.png"},8347:function(A,e){e.Z="data:image/png;base64,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CCCAgJ8FCHj8DMrhEEAAAQQQQAABBBBAIHAECHgC51rQEgQQQAABBBBAAAEEEPCzAAGPn0E5HAIIIIAAAggggAACCASOAAFP4FwLWoIAAggggAACCCCAAAJ+FiDg8TMoh0MAAQQQQAABBBBAAIHAESDgCZxrQUsQQAABBBBAAAEEEEDAzwIEPH4G5XAIIIAAAggggAACCCAQOAIEPIFzLWgJAggggAACCCCAAAII+FmAgMfPoBwOAQQQQAABBBBAAAEEAkeAgCdwrgUtQQABBBBAAAEEEEAAAT8LEPD4GZTDIYAAAggggAACCCCAQOAIEPAEzrWgJQgggAACCCCAAAIIIOBngaR+Pl6iONz+YyGJop00EgEEEEAAAQQQQAABBP4/gdsy4MmTPcv/p8beCCCAAAIIIIAAAgggkCgESGlLFJeJRiKAAAIIIIAAAggggEBsBAh4YqPGPggggAACCCCAAAIIIJAoBAh4EsVlopEIIIAAAggggAACCCAQGwECntiosQ8CCCCAAAIIIIAAAggkCgECnkRxmWgkAggggAACCCCAAAIIxEaAgCc2auyDAAIIIIAAAggggAACiUKAgCdRXCYaiQACCCCAAAIIIIAAArERIOCJjRr7IIAAAggggAACCCCAQKIQIOBJFJeJRiKAAAIIIIAAAggggEBsBP4H78t1fgxiQAoAAAAASUVORK5CYII="},6637:function(A,e,t){e.Z=t.p+"assets/images/argocd_syncpolicy-87cb493bfc053a878e87bf3cab4e9e36.png"}}]);