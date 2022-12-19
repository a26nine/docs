"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[193],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||l;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=h;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:r,i[1]=a;for(var c=2;c<l;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const l={sidebar_position:3},i="The RollKit Stack",a={unversionedId:"rollkit-stack",id:"rollkit-stack",title:"The RollKit Stack",description:"This section will cover the technical stack of RollKit.",source:"@site/docs/rollkit-stack.md",sourceDirName:".",slug:"/rollkit-stack",permalink:"/docs/docs/rollkit-stack",draft:!1,editUrl:"https://github.com/rollkit/docs/tree/main/docs/rollkit-stack.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Core Concepts",permalink:"/docs/docs/core-concepts"},next:{title:"Tutorials",permalink:"/docs/docs/category/tutorials"}},s={},c=[{value:"Mempool",id:"mempool",level:2},{value:"Leader Selection - Interface and API",id:"leader-selection---interface-and-api",level:2},{value:"Network Topology",id:"network-topology",level:2},{value:"RollKit Node Types",id:"rollkit-node-types",level:2},{value:"Light node",id:"light-node",level:3},{value:"Full node",id:"full-node",level:3},{value:"Sequencer",id:"sequencer",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-rollkit-stack"},"The RollKit Stack"),(0,r.kt)("p",null,"This section will cover the technical stack of RollKit."),(0,r.kt)("p",null,"RollKit is built by replacing Tendermint, the Cosmos-SDK Consensus Layer,\nwith a drop-in replacement that communicates directly with Celestia's Data\nAvailability (DA) and Consensus Layer. Our version of Tendermint is designed\nto work seamlessly with other modular layers, allowing for greater flexibility\nand adaptability."),(0,r.kt)("p",null,"It spins up a sovereign rollup, which collects transactions into blocks and\nposts them onto Celestia for DA and Consensus."),(0,r.kt)("p",null,"The goal of RollKit is to enable anyone to design and deploy a sovereign\nrollup on Celestia in minutes with minimal overhead."),(0,r.kt)("p",null,'Furthermore, while RollKit allows you to build sovereign rollups on Celestia,\nit currently does not support fraud proofs yet and is therefore running in\n"pessimistic" mode, where nodes would need to re-execute the transactions\nto check the validity of the chain (i.e. a full node). Furthermore, RollKit\ncurrently only supports a single sequencer.'),(0,r.kt)("admonition",{title:"Tip",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you're familiar with RollKit's stack, you may want to skip to the ",(0,r.kt)("a",{parentName:"p",href:"./category/tutorials"},"tutorials section"))),(0,r.kt)("h2",{id:"mempool"},"Mempool"),(0,r.kt)("p",null,"The mempool keeps the set of pending transactions, and is used by block\nproducers (full nodes) to produce blocks. Transactions are handled by\nnodes in the First-Come, First-Served (FCFS) manner. Ordering of transactions\ncan be implemented on the application level (for example by adding\nnonce/sequence number). This behaviour is similar to the Tendermint mempool."),(0,r.kt)("h2",{id:"leader-selection---interface-and-api"},"Leader Selection - Interface and API"),(0,r.kt)("p",null,"[...]"),(0,r.kt)("h2",{id:"network-topology"},"Network Topology"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/rollmint/issues/631"},"Issue 631")),(0,r.kt)("h2",{id:"rollkit-node-types"},"RollKit Node Types"),(0,r.kt)("h3",{id:"light-node"},"Light node"),(0,r.kt)("p",null,"Light nodes are the main producer of transactions in the RollKit network.\nThey participate in gossiping of and fraud proofs. Light nodes may only\nrequest or store a subset of the state, just to ensure that they can execute\nrollback."),(0,r.kt)("h3",{id:"full-node"},"Full node"),(0,r.kt)("p",null,"Full nodes are a crucial part of the networks, because they are responsible\nfor producing blocks and fraud proofs. They also create a link between the\nRollKit network and the DA and Consensus Layer, by pushing aggregates to\nthe DA and Consensus Layer."),(0,r.kt)("h3",{id:"sequencer"},"Sequencer"),(0,r.kt)("p",null,"soon\u1d40\u1d39"))}p.isMDXComponent=!0}}]);