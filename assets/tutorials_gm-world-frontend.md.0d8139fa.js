import{c as a}from"./chunks/constants.3f0cc976.js";import{C as l}from"./chunks/callout.9dddda21.js";import{o as p,c as r,k as s,O as c,t as e,l as t,a as o,X as n}from"./chunks/framework.85f88ea4.js";const i="/img/gm-world-frontend-wallet-connected.png",d=s("h1",{id:"gm-world-ui-app",tabindex:"-1"},[o("GM world UI app "),s("a",{class:"header-anchor",href:"#gm-world-ui-app","aria-label":'Permalink to "GM world UI app"'},"​")],-1),C=s("p",null,[o("This tutorial aims to demonstrate the user interface (UI) application aspect of connecting a wallet to a rollup, showcasing that it's as straightforward as connecting to any other blockchain. It assumes you have the "),s("a",{href:"https://www.keplr.app/",target:"_blank",rel:"noreferrer"},"Keplr"),o(" wallet extension installed in your browser.")],-1),h={class:"tip custom-block"},y=s("p",{class:"custom-block-title"},"TIP",-1),u=s("h2",{id:"🛠-prerequisites",tabindex:"-1"},[o("🛠 Prerequisites "),s("a",{class:"header-anchor",href:"#🛠-prerequisites","aria-label":'Permalink to "🛠 Prerequisites"'},"​")],-1),_=s("p",null,[o("Before you start, ensure you have completed the "),s("a",{href:"/tutorials/gm-world"},"GM world"),o(" tutorial. Your rollup needs to be running since the app will connect to it via RPC.")],-1),A=s("p",null,"You will also need Yarn installed for web app development.",-1),m={class:"tip custom-block"},D=s("p",{class:"custom-block-title"},"TIP",-1),g=s("p",null,"If you don't have Yarn or Node.js, run this command to install it using cURL on most Linux distros and macOS:",-1),f={class:"language-bash"},w=s("button",{title:"Copy Code",class:"copy"},null,-1),b=s("span",{class:"lang"},"bash",-1),E={class:"shiki material-theme-palenight"},v={class:"line"},k=n('<span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-sSL</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://rollkit.dev/install-yarn.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">bash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span>',12),F={style:{color:"#C3E88D"}},B=s("span",{style:{color:"#A6ACCD"}}," ",-1),T={style:{color:"#C3E88D"}},x=n(`<h2 id="🚀-starting-an-app" tabindex="-1">🚀 Starting an app <a class="header-anchor" href="#🚀-starting-an-app" aria-label="Permalink to &quot;🚀 Starting an app&quot;">​</a></h2><p>We&#39;ve simplified the process by preparing a repository with the necessary scaffolding and configuration for our local rollup. Run a command to download the code, install dependencies, and start the development server:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-sSL</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://rollkit.dev/install-gm-frontend-app.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">bash</span></span></code></pre></div><p>You should see the following output indicating that the development server is up and running:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ready</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">started</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.0</span><span style="color:#C3E88D;">.0.0:3000,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">url:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http://localhost:3000</span></span>
<span class="line"><span style="color:#FFCB6B;">info</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">SWC</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">minify</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">release</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">candidate</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">enabled.</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://nextjs.link/swcmin</span></span>
<span class="line"><span style="color:#FFCB6B;">event</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">compiled</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">client</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">successfully</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7.8</span><span style="color:#C3E88D;">s</span><span style="color:#A6ACCD;"> (2225 </span><span style="color:#C3E88D;">modules</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h2 id="🔗-connecting-your-wallet" tabindex="-1">🔗 Connecting your wallet <a class="header-anchor" href="#🔗-connecting-your-wallet" aria-label="Permalink to &quot;🔗 Connecting your wallet&quot;">​</a></h2><p>To connect your Keplr wallet to the application, simply open your browser and go to <a href="https://localhost:3000" target="_blank" rel="noreferrer">http://localhost:3000</a>.</p><p>Click the &quot;Connect Wallet&quot; button on the page, and approve the connection request in the Keplr prompt.</p><p>Once authorized, your wallet address will be displayed, confirming that your wallet is successfully connected.</p><p><img src="`+i+'" alt="gm-world-frontend-connected"></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you run into any issues, make sure your Keplr wallet is updated and set to connect to your local environment.</p></div><h2 id="🎉-next-steps" tabindex="-1">🎉 Next steps <a class="header-anchor" href="#🎉-next-steps" aria-label="Permalink to &quot;🎉 Next steps&quot;">​</a></h2><p>Congratulations! You&#39;ve experienced connecting to a rollup from the user side — simple and straightforward. Now, you might consider exploring how to add more application logic to your rollup using the Cosmos SDK, as demonstrated in our Wordle App tutorial.</p>',13),R=JSON.parse('{"title":"GM world UI app","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"GM world UI app | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"tutorials/gm-world-frontend.md","filePath":"tutorials/gm-world-frontend.md","lastUpdated":1715635979000}'),P={name:"tutorials/gm-world-frontend.md"},Y=Object.assign(P,{setup(S){return(I,q)=>(p(),r("div",null,[d,C,s("div",h,[y,c(l)]),u,_,A,s("div",m,[D,g,s("div",f,[w,b,s("pre",E,[s("code",null,[s("span",v,[k,s("span",F,e(t(a).nodeVersion),1),B,s("span",T,e(t(a).yarnVersion),1)])])])])]),x]))}});export{R as __pageData,Y as default};
