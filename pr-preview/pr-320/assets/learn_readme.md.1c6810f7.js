import{_ as e,o as t,c as a,X as l}from"./chunks/framework.d1b43fe3.js";const m=JSON.parse('{"title":"Rollkit","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Rollkit | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"learn/readme.md","filePath":"learn/readme.md","lastUpdated":1707446647000}'),r={name:"learn/readme.md"},o=l(`<h1 id="rollkit" tabindex="-1">Rollkit <a class="header-anchor" href="#rollkit" aria-label="Permalink to &quot;Rollkit&quot;">​</a></h1><p>A modular framework for rollups, with an ABCI-compatible client interface. For more in-depth information about Rollkit, please visit our <a href="https://rollkit.dev" target="_blank" rel="noreferrer">website</a>.</p><p><a href="https://github.com/rollkit/rollkit/actions/workflows/test.yml" target="_blank" rel="noreferrer"><img src="https://github.com/rollkit/rollkit/actions/workflows/test.yml/badge.svg" alt="build-and-test"></a><br><a href="https://github.com/rollkit/rollkit/actions/workflows/lint.yml" target="_blank" rel="noreferrer"><img src="https://github.com/rollkit/rollkit/actions/workflows/lint.yml/badge.svg" alt="golangci-lint"></a><br><a href="https://goreportcard.com/report/github.com/rollkit/rollkit" target="_blank" rel="noreferrer"><img src="https://goreportcard.com/badge/github.com/rollkit/rollkit" alt="Go Report Card"></a><br><a href="https://codecov.io/gh/rollkit/rollkit" target="_blank" rel="noreferrer"><img src="https://codecov.io/gh/rollkit/rollkit/branch/main/graph/badge.svg?token=CWGA4RLDS9" alt="codecov"></a><br><a href="https://godoc.org/github.com/rollkit/rollkit" target="_blank" rel="noreferrer"><img src="https://godoc.org/github.com/rollkit/rollkit?status.svg" alt="GoDoc"></a></p><h2 id="building-from-source" tabindex="-1">Building from source <a class="header-anchor" href="#building-from-source" aria-label="Permalink to &quot;Building from source&quot;">​</a></h2><p>Requires Go version &gt;= 1.20.</p><p>To build:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/rollkit/rollkit.git</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rollkit</span></span>
<span class="line"><span style="color:#FFCB6B;">go</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./...</span></span></code></pre></div><h2 id="building-with-rollkit" tabindex="-1">Building with Rollkit <a class="header-anchor" href="#building-with-rollkit" aria-label="Permalink to &quot;Building with Rollkit&quot;">​</a></h2><p>While Rollkit is a modular framework that aims to be compatible with a wide range of data availability layers, settlement layers, and execution environments, the most supported development environment is building on Celestia as a data availability layer.</p><h3 id="building-on-celestia" tabindex="-1">Building on Celestia <a class="header-anchor" href="#building-on-celestia" aria-label="Permalink to &quot;Building on Celestia&quot;">​</a></h3><p>There are currently 2 ways to build on Celestia:</p><ol><li>Using a local development environment with <a href="https://github.com/rollkit/local-celestia-devnet" target="_blank" rel="noreferrer">local-celestia-devnet</a></li><li>Using the Arabica or Mocha Celestia testnet</li></ol><h4 id="compatibility" tabindex="-1">Compatibility <a class="header-anchor" href="#compatibility" aria-label="Permalink to &quot;Compatibility&quot;">​</a></h4><table><thead><tr><th>network</th><th>rollkit</th><th>celestia-node</th><th>celestia-app</th></tr></thead><tbody><tr><td>local-celestia-devnet</td><td>v0.10.5</td><td>v0.11.0</td><td>v1.1.0</td></tr><tr><td>arabica</td><td>v0.10.5</td><td>v0.11.0</td><td>v1.1.0</td></tr></tbody></table><table><thead><tr><th>rollkit/cosmos-sdk</th><th>rollkit/cometbft</th><th>rollkit</th></tr></thead><tbody><tr><td><a href="https://github.com/rollkit/cosmos-sdk/releases/tag/v0.47.3-rollkit-v0.10.5-no-fraud-proofs" target="_blank" rel="noreferrer">v0.47.3-rollkit-v0.10.5-no-fraud-proofs</a></td><td>v0.37.2</td><td><a href="https://github.com/rollkit/rollkit/releases/tag/v0.10.5" target="_blank" rel="noreferrer">v0.10.5</a></td></tr><tr><td><a href="https://github.com/rollkit/cosmos-sdk/releases/tag/v0.50.0-rc.0-rollkit-v0.11.0-rc1-no-fraud-proofs" target="_blank" rel="noreferrer">v0.50.0-rc.0-rollkit-v0.11.0-rc1-no-fraud-proofs</a></td><td>v0.38.0-rc3</td><td><a href="https://github.com/rollkit/rollkit/releases/tag/v0.11.0-rc1" target="_blank" rel="noreferrer">v0.11.0-rc1</a></td></tr></tbody></table><h4 id="local-development-environment" tabindex="-1">Local development environment <a class="header-anchor" href="#local-development-environment" aria-label="Permalink to &quot;Local development environment&quot;">​</a></h4><p>The Rollkit v0.10.5 release is compatible with the <a href="https://github.com/rollkit/local-celestia-devnet" target="_blank" rel="noreferrer">local-celestia-devnet</a> <a href="https://github.com/rollkit/local-celestia-devnet/releases/tag/v0.11.0" target="_blank" rel="noreferrer">v0.11.0</a> release. This version combination is compatible with celestia-app <a href="https://github.com/celestiaorg/celestia-app/releases/tag/v1.1.0" target="_blank" rel="noreferrer">v1.1.0</a> and celestia-node <a href="https://github.com/celestiaorg/celestia-node/releases/tag/v0.11.0" target="_blank" rel="noreferrer">v0.11.0</a>.</p><h4 id="arabica-devnet-and-mocha-testnet" tabindex="-1">Arabica devnet and Mocha testnet <a class="header-anchor" href="#arabica-devnet-and-mocha-testnet" aria-label="Permalink to &quot;Arabica devnet and Mocha testnet&quot;">​</a></h4><p>The Rollkit v0.10.5 release is compatible with <a href="https://docs.celestia.org/nodes/arabica-devnet/" target="_blank" rel="noreferrer">arabica-10</a> devnet <a href="https://docs.celestia.org/nodes/mocha-testnet/" target="_blank" rel="noreferrer">mocha-4</a> testnet which are running celestia-app <a href="https://github.com/celestiaorg/celestia-app/releases/tag/v1.1.0" target="_blank" rel="noreferrer">v1.1.0</a> and celestia-node <a href="https://github.com/celestiaorg/celestia-node/releases/tag/v0.11.0" target="_blank" rel="noreferrer">v0.11.0</a>.</p><h4 id="cometbft-v0-38-x-and-cosmos-sdk-v0-50-x" tabindex="-1">Cometbft v0.38.x and Cosmos-SDK v0.50.x <a class="header-anchor" href="#cometbft-v0-38-x-and-cosmos-sdk-v0-50-x" aria-label="Permalink to &quot;Cometbft v0.38.x and Cosmos-SDK v0.50.x&quot;">​</a></h4><p>The Rollkit v0.11.0-rc1 release is compatible with Cometbft v0.38.0-rc3 and Cosmos-SDK v0.50.0-rc.0. However, there is no support by ignite for launching a compatible app (e.g. gm app) and Rollkit is working on building a gm app for testing this release (WIP).</p><h3 id="tools" tabindex="-1">Tools <a class="header-anchor" href="#tools" aria-label="Permalink to &quot;Tools&quot;">​</a></h3><ol><li>Install <a href="https://golangci-lint.run/usage/install/" target="_blank" rel="noreferrer">golangci-lint</a></li><li>Install <a href="https://github.com/DavidAnson/markdownlint" target="_blank" rel="noreferrer">markdownlint</a></li><li>Install <a href="https://github.com/hadolint/hadolint" target="_blank" rel="noreferrer">hadolint</a></li><li>Install <a href="https://yamllint.readthedocs.io/en/stable/quickstart.html" target="_blank" rel="noreferrer">yamllint</a></li></ol><h2 id="helpful-commands" tabindex="-1">Helpful commands <a class="header-anchor" href="#helpful-commands" aria-label="Permalink to &quot;Helpful commands&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># Run unit tests</span></span>
<span class="line"><span style="color:#FFCB6B;">make</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Generate protobuf files (requires Docker)</span></span>
<span class="line"><span style="color:#FFCB6B;">make</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">proto-gen</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Run linters (requires golangci-lint, markdownlint, hadolint, and yamllint)</span></span>
<span class="line"><span style="color:#FFCB6B;">make</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lint</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Lint protobuf files (requires Docker and buf)</span></span>
<span class="line"><span style="color:#FFCB6B;">make</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">proto-lint</span></span></code></pre></div><h2 id="contributing" tabindex="-1">Contributing <a class="header-anchor" href="#contributing" aria-label="Permalink to &quot;Contributing&quot;">​</a></h2><p>We welcome your contributions! Everyone is welcome to contribute, whether it&#39;s in the form of code, documentation, bug reports, feature requests, or anything else.</p><p>If you&#39;re looking for issues to work on, try looking at the <a href="https://github.com/rollkit/rollkit/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22" target="_blank" rel="noreferrer">good first issue list</a>. Issues with this tag are suitable for a new external contributor and is a great way to find something you can help with!</p><p>See <a href="https://github.com/rollkit/rollkit/blob/main/CONTRIBUTING.md" target="_blank" rel="noreferrer">the contributing guide</a> for more details.</p><p>Please join our <a href="https://discord.com/invite/YsnTPcSfWQ" target="_blank" rel="noreferrer">Community Discord</a> to ask questions, discuss your ideas, and connect with other contributors.</p><h2 id="dependency-graph" tabindex="-1">Dependency graph <a class="header-anchor" href="#dependency-graph" aria-label="Permalink to &quot;Dependency graph&quot;">​</a></h2><p>To see our progress and a possible future of Rollkit visit our <a href="https://github.com/rollkit/rollkit/blob/main/specs/src/specs/rollkit-dependency-graph.md" target="_blank" rel="noreferrer">Dependency Graph</a>.</p><h2 id="code-of-conduct" tabindex="-1">Code of Conduct <a class="header-anchor" href="#code-of-conduct" aria-label="Permalink to &quot;Code of Conduct&quot;">​</a></h2><p>See our Code of Conduct <a href="https://docs.celestia.org/community/coc" target="_blank" rel="noreferrer">here</a>.</p>`,34),s=[o];function n(i,c,p,h,d,b){return t(),a("div",null,s)}const u=e(r,[["render",n]]);export{m as __pageData,u as default};
