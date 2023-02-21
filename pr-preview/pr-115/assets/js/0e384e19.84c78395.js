"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var i=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function n(e,t){if(null==e)return{};var o,i,a=function(e,t){if(null==e)return{};var o,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)o=l[i],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)o=l[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var o=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=n(e,["components","mdxType","originalType","parentName"]),p=u(o),h=a,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||l;return o?i.createElement(m,r(r({ref:t},c),{},{components:o})):i.createElement(m,r({ref:t},c))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=o.length,r=new Array(l);r[0]=h;var n={};for(var s in t)hasOwnProperty.call(t,s)&&(n[s]=t[s]);n.originalType=e,n[p]="string"==typeof e?e:a,r[1]=n;for(var u=2;u<l;u++)r[u]=o[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,o)}h.displayName="MDXCreateElement"},9881:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>n,toc:()=>u});var i=o(7462),a=(o(7294),o(3905));const l={sidebar_position:1,sidebar_label:"Introduction",description:"Intro to Rollkit, a modular framework for rollups."},r="Introduction to Rollkit",n={unversionedId:"intro",id:"intro",title:"Introduction to Rollkit",description:"Intro to Rollkit, a modular framework for rollups.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/pr-preview/pr-115/docs/intro",draft:!1,editUrl:"https://github.com/rollkit/docs/tree/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Introduction",description:"Intro to Rollkit, a modular framework for rollups."},sidebar:"tutorialSidebar",next:{title:"Rollkit stack",permalink:"/pr-preview/pr-115/docs/rollkit-stack"}},s={},u=[{value:"What is Rollkit?",id:"what-is-rollkit",level:2},{value:"What problems is Rollkit solving?",id:"what-problems-is-rollkit-solving",level:2},{value:"1. Scalability and customizability",id:"1-scalability-and-customizability",level:3},{value:"2. Security and time to market",id:"2-security-and-time-to-market",level:3},{value:"Why Rollkit?",id:"why-rollkit",level:2},{value:"How can you use Rollkit?",id:"how-can-you-use-rollkit",level:2},{value:"Rollup with any execution environment",id:"rollup-with-any-execution-environment",level:3},{value:"Sovereign rollup with Cosmos SDK",id:"sovereign-rollup-with-cosmos-sdk",level:3},{value:"Build a settlement layer",id:"build-a-settlement-layer",level:3},{value:"When can you use Rollkit?",id:"when-can-you-use-rollkit",level:2}],c={toc:u};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction-to-rollkit"},"Introduction to Rollkit"),(0,a.kt)("p",null,"Welcome to Rollkit docs. We're happy you made it here!"),(0,a.kt)("p",null,"Our mission is to empower developers to quickly innovate and create entire new classes of rollups with minimal tradeoffs."),(0,a.kt)("p",null,"We're setting the bar high for developers' flexibility and ability to customize rollups however they see fit."),(0,a.kt)("admonition",{title:"Tip",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you're familiar with Rollkit, you may want to skip to the ",(0,a.kt)("a",{parentName:"p",href:"../category/tutorials"},"tutorials section"),".")),(0,a.kt)("h2",{id:"what-is-rollkit"},"What is Rollkit?"),(0,a.kt)("p",null,"Rollkit is a rollup framework that gives developers the freedom to deploy rollups throughout the modular stack, opening new possibilities for rapid experimentation and innovation."),(0,a.kt)("p",null,"The Rollkit framework features a modular node that can run rollups and exposes an ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cometbft/cometbft/tree/main/abci"},"ABCI"),"-compatible client interface, which can be used as a substitute for Tendermint in any ABCI-compatible blockchain application.\nBy default, the node utilizes Celestia as the data availability (DA) layer, however other data availability layers can be integrated."),(0,a.kt)("p",null,"Rollkit can currently be used to deploy ",(0,a.kt)("a",{parentName:"p",href:"https://blog.celestia.org/sovereign-rollup-chains/"},"sovereign rollups")," or sovereign settlement layers. In the future, we intend to support settled (not sovereign) rollups that settle to another settlement layer."),(0,a.kt)("p",null,"Rollkit is built as an open-source framework, so that developers can easily modify it to suit their applications."),(0,a.kt)("p",null,"Our goal is to empower developers to quickly innovate and create new classes of rollups with minimal trade-offs, and to make deploying a new chain as easy as deploying a smart contract."),(0,a.kt)("h2",{id:"what-problems-is-rollkit-solving"},"What problems is Rollkit solving?"),(0,a.kt)("h3",{id:"1-scalability-and-customizability"},"1. Scalability and customizability"),(0,a.kt)("p",null,"Deploying your decentralized application as a smart contract on a shared blockchain has many limitations. Your smart contract has to share computational resources with every other application, so scalability is limited."),(0,a.kt)("p",null,"Plus, you're restricted to the execution environment that the shared blockchain uses, so developer flexibility is limited."),(0,a.kt)("h3",{id:"2-security-and-time-to-market"},"2. Security and time to market"),(0,a.kt)("p",null,"Deploying a new chain might sound like the perfect solution for the problems listed above. While it's somewhat true, deploying a new layer 1 chain presents a complex set of challenges and trade-offs for developers looking to build blockchain products."),(0,a.kt)("p",null,"Deploying a new layer 1 requires significant resources, including time, capital, and expertise, which can be a barrier to entry for some developers."),(0,a.kt)("p",null,"In order to secure the network, developers must bootstrap a sufficiently secure set of validators, incurring the overhead of managing a full consensus network. This requires paying validators with inflationary tokens, putting the business sustainability of the network at risk. A strong community and network effect are also critical for success, but can be challenging to achieve as the network must gain widespread adoption to be secure and valuable."),(0,a.kt)("p",null,"In a potential future with millions of chains, it's unlikely all of those chains will be able to sustainably attract a sufficiently secure and decentralized validator set."),(0,a.kt)("h2",{id:"why-rollkit"},"Why Rollkit?"),(0,a.kt)("p",null,"Rollkit solves the challenges encountered during the deployment of a smart contract or a new layer 1, by minimizing these tradeoffs through the implementation of rollup chains (rollups)."),(0,a.kt)("p",null,"With Rollkit, developers can benefit from:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Shared security"),":\nRollups inherit security from a data availability layer, by posting blocks to it. Rollups reduce the trust assumptions placed on rollup sequencers by allowing full nodes to download and verify the transactions in the blocks posted by the sequencer. For optimistic or zk rollups, in case of fraudulent blocks, full nodes can generate fraud or zk proofs, which they can share with the rest of the network, including light nodes. Our roadmap includes the ability for light clients to receive and verify proofs, so that everyday users can enjoy high security guarantees.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Scalability:"),"\nRollkit rollups are deployed on specialized data availability layers like Celestia, which directly leverages the scalability of the DA layer. Additionally, rollup transactions are executed off-chain rather than the data availability layer. This means rollups have their own dedicated computational resources, rather than sharing computational resources with other applications.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Customizability:"),"\nRollkit is built as an open source modular framework, to make it easier for developers to reuse existing components and customize their rollups. The data availability layers and execution environments used by rollups are customizable, as well as other ",(0,a.kt)("a",{parentName:"p",href:"/pr-preview/pr-115/docs/rollkit-stack"},"components in the Rollkit stack"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Faster time to market:"),"\nRollkit eliminates the need to bootstrap a validator set, manage a consensus network, incur high economic costs, and face other trade-offs that come with deploying a new layer 1. Rollkit's goal is to make deploying a rollup as easy as it is to deploy a smart contract, cutting the time it takes to bring blockchain products to market from months or even years to just minutes.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Sovereignty"),": Rollkit also enables developers to deploy sovereign rollups for cases where communities require sovereignty."))),(0,a.kt)("h2",{id:"how-can-you-use-rollkit"},"How can you use Rollkit?"),(0,a.kt)("p",null,"As briefly mentioned above, Rollkit could be used in many different ways. From sovereign rollups, to settlement layers, and in the future even to L3s."),(0,a.kt)("h3",{id:"rollup-with-any-execution-environment"},"Rollup with any execution environment"),(0,a.kt)("p",null,"Rollkit gives developers the flexibility to use pre-existing ABCI-compatible state machines or create a custom state machine tailored to their rollup needs. Rollkit does not restrict the use of any specific virtual machine, allowing developers to experiment and bring innovative applications to life."),(0,a.kt)("h3",{id:"sovereign-rollup-with-cosmos-sdk"},"Sovereign rollup with Cosmos SDK"),(0,a.kt)("p",null,"Similarly to how developers utilize the Cosmos SDK to build a sovereign layer 1 chain, the Cosmos SDK could be utilized to create a Rollkit-compatible rollup chain.\nCosmos-SDK has great ",(0,a.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main"},"documentation")," and tooling that developers can leverage to learn."),(0,a.kt)("p",null,"Another possibility is taking an existing layer 1 built with the Cosmos SDK and deploying it as a Rollkit rollup. This can provide a great opportunity for experimentation and growth."),(0,a.kt)("h3",{id:"build-a-settlement-layer"},"Build a settlement layer"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://celestia.org/learn/modular-settlement-layers/settlement-in-the-modular-stack/"},"Settlement layers")," are ideal for developers who want to avoid deploying sovereign rollups. They provide a platform for rollups to verify proofs and resolve disputes.\nAdditionally, they act as a hub for rollups to facilitate trust-minimized token transfers and liquidity sharing between rollups that share the same settlement layer.\nThink of settlement layers as a special type of execution layer."),(0,a.kt)("h2",{id:"when-can-you-use-rollkit"},"When can you use Rollkit?"),(0,a.kt)("p",null,"As of today, Rollkit is still in the MVP stages. The framework currently provides a centralized sequencer, an execution interface (ABCI or Cosmos SDK), and a connection to a data availability layer (Celestia)."),(0,a.kt)("p",null,"We're currently working on implementing many new and exciting features such as light nodes and state fraud proofs."),(0,a.kt)("p",null,"Head down to the next section (",(0,a.kt)("a",{parentName:"p",href:"/pr-preview/pr-115/docs/rollkit-stack"},"Rollkit Stack"),") to learn more about what's coming for Rollkit. If you're ready to start building, you can skip to the ",(0,a.kt)("a",{parentName:"p",href:"../category/tutorials"},"Tutorials")," section."),(0,a.kt)("p",null,"Spoiler alert, whichever you choose, it's going to be a great rabbit hole!"))}p.isMDXComponent=!0}}]);