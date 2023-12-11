import{_ as l,r as e,o as u,c as i,b as n,d as s,a as t,w as c,e as a}from"./app-jDLxG9B3.js";const r="/assets/TypeScript_Types-H7TUWQv1.png",k="/assets/TypeScript_Control_Flow_Analysis-yJh9NveG.png",d="/assets/types-D2itmyAv.png",y="/assets/TypeScript_Classes-QptCk_Vm.png",g="/assets/TypeScript_Interfaces-hxpnL5tZ.png",m={},b=a('<h1 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h1><p>TypeScript is JavaScript with syntax for types</p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>TypeScript has <em>type safety</em> (using types to prevent programs from doing invalid things)</p><ul><li><p>Strongly typed</p></li><li><p>Wrapper around JavaScript</p></li><li><p>TypeScript --compiles to--&gt; JavaScript</p></li></ul><p>Advantages:</p><ul><li><p>Static Type checking</p></li><li><p>Can use Non-JavaScript features like <a href="#interface">Interface</a> or <a href="#generics">Generics</a></p></li><li><p>Use Next-gen JavaScript features now and compile it to older versions</p></li><li><p>Meta-Programming features like <a href="#decorators">Decorators</a></p></li><li><p><strong>TypeScript preserves the runtime behaviour of JavaScript</strong></p></li><li><p>Type of a variable will be implicitly inferred if it is initialized during declaration.</p></li></ul><h2 id="typescript-compiler" tabindex="-1"><a class="header-anchor" href="#typescript-compiler" aria-hidden="true">#</a> TypeScript Compiler</h2><h3 id="how-programs-are-compiled" tabindex="-1"><a class="header-anchor" href="#how-programs-are-compiled" aria-hidden="true">#</a> How programs are compiled</h3><p>Ans: Programs are files that contain a bunch of text. That text is parsed by a special program called a <em>compiler</em>, which transforms it into an <strong>abstract syntax tree (AST)</strong>, a data structure that ignores things like whitespace, comments, and where you stand on the tabs versus spaces debate. The compiler then converts that <em>AST</em> to a lower-level representation called <em>bytecode</em>. You can feed that bytecode into another program called a <em>runtime</em> to evaluate it and get a result.</p><ul><li><p>TypeScript dose not compile straight to bytecode.</p></li><li><p>TypeScript <strong>compiles</strong> to… <strong>JavaScript</strong> code! This JavaScript code is run in browser or <a href="../Node.js">Node.js</a></p></li></ul><div class="custom-container tip"><p class="custom-container-title">NOTE</p><p>JavaScript compilers and runtime tend to be smashed into a single program called an engine; as a programmer, this is what you&#39;ll normally interact with. It&#39;s how V8 (the engine powering NodeJS, Chrome, and Opera), SpiderMonkey (Firefox), JSCore (Safari), and Chakra (Edge) work, and it&#39;s what gives JavaScript the appearance of being an interpreted language.</p></div><p><em>Example:</em> Using TypeScript compiler</p>',13),h=n("li",null,[n("p",null,"Install TypeScript compiler as global package")],-1),w=n("code",null,"gulp",-1),f=a(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Initialize a new NPM project (follow the prompts)</span>
<span class="token function">npm</span> init

<span class="token comment"># Install TSC, TSLint, and type declarations for NodeJS</span>
<span class="token function">npm</span> <span class="token function">install</span> --save-dev typescript tslint @types/node

<span class="token comment"># Install Lite Server, for live reload</span>
<span class="token function">npm</span> <span class="token function">install</span> lite-server --save-dev
</code></pre></div>`,1),v=n("h3",{id:"tsconfig-json",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#tsconfig-json","aria-hidden":"true"},"#"),s(),n("code",null,"tsconfig.json")],-1),q=n("p",null,"Initialize project with TypeScript compiler.",-1),x={href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html",target:"_blank",rel:"noopener noreferrer"},T=n("code",null,"tsconfig.json",-1),C=a(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Will create a tsconfig.json file</span>
tsc <span class="token parameter variable">--init</span>

<span class="token comment"># After initializing, TypeScript compiler</span>
<span class="token comment"># will look into this file for compilation configuration</span>
tsc
</code></pre></div><ul><li><code>tsconfig.json</code> file contains:</li></ul><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es2016&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lib&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commonjs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;src&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><code>&quot;include&quot;: [&quot;src&quot;]</code>: Files and folders that should be compiled</li><li><code>&quot;exclude&quot;: []</code>: Files and folders that should be excluded from compilation</li></ul><p>Compiler Options:</p>`,5),S=a("<li><p><code>&quot;target&quot;:&quot;es6</code> (default <code>es3</code>): Set the JavaScript language version for emitted JavaScript and include compatible library declarations.</p></li><li><p><code>&quot;watch&quot;: true</code>: Re-compiles when files change</p></li><li><p><code>&quot;lib&quot;: [&quot;dom&quot;, &quot;es2017&quot;]</code>: Target runtime. Specify a set of bundled library declaration files that describe the target runtime environment.</p></li><li><p><code>&quot;noEmitOnError&quot;: true</code>: Disable emitting files if any type checking errors are reported.</p></li><li><p><code>&quot;noImplicitAny&quot;: true</code>: Enable error reporting for expressions and declarations with an implied <code>any</code> type. (enabled by default when in strict mode).</p></li><li><p><code>&quot;strictNullChecks&quot;: true</code>: Complier gives error if a variable does not have a value assigned to it. When type checking, take into account <code>null</code> and <code>undefined</code>.</p></li><li><p><code>&quot;noUnusedParameters&quot;: true&quot;</code>: Raise an error when a function parameter isn&#39;t read.</p></li><li><p><code>&quot;sourceMap&quot;: true</code>: Create source map files for emitted JavaScript files, this will allow debugging typescript in the browser itself.</p></li>",8),_={href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html",target:"_blank",rel:"noopener noreferrer"},j=a(`<p><em>Example:</em> Node.js Project</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;NodeNext&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;moduleResolution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;NodeNext&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ES2020&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;src/**/*&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="tslint-json" tabindex="-1"><a class="header-anchor" href="#tslint-json" aria-hidden="true">#</a> <code>tslint.json</code></h3><p>The following command will generate a <em>tslint.json</em> file with a default TSLint configuration:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>./node_modules/.bin/tslint <span class="token parameter variable">--init</span>
</code></pre></div><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;defaultSeverity&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;tslint:recommended&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;semicolon&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;trailing-comma&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,6),A={class:"custom-container tip"},N=n("p",{class:"custom-container-title"},"LIST of RULES",-1),I={href:"https://palantir.github.io/tslint/rules/",target:"_blank",rel:"noopener noreferrer"},E={href:"https://www.npmjs.com/package/tslint-react",target:"_blank",rel:"noopener noreferrer"},P=a(`<h3 id="project-s-folder-structure" tabindex="-1"><a class="header-anchor" href="#project-s-folder-structure" aria-hidden="true">#</a> Project&#39;s folder structure</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>project/
├──node_modules/
├──src/
│ └──index.ts
├──package.json
├──tsconfig.json
└──tslint.json
</code></pre></div><ul><li><p>Install <code>ts-node</code>, and use it to compile and run your TypeScript with a single command.</p></li><li><p>Use a scaffolding tool like <code>typescript-node-starter</code> to quickly generate your folder structure for you.</p></li></ul><h2 id="data-types" tabindex="-1"><a class="header-anchor" href="#data-types" aria-hidden="true">#</a> Data Types</h2><p>A set of values and the things you can do with them.</p><p><img src="`+r+'" alt="Cheat Sheet of TypeScript Types"><img src="'+k+'" alt="TypeScript Control Flow Analysis"></p><h3 id="core-types" tabindex="-1"><a class="header-anchor" href="#core-types" aria-hidden="true">#</a> Core Types</h3>',7),D=a(`<li><p><code>number</code> (floating point):</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> variable<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

variable <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
variable <span class="token operator">=</span> <span class="token number">5.3</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> vars<span class="token operator">:</span> <span class="token number">24</span> <span class="token operator">=</span> <span class="token number">24</span><span class="token punctuation">;</span>
</code></pre></div></li><li><p><code>string</code>:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

name <span class="token operator">=</span> <span class="token string">&quot;Same&quot;</span><span class="token punctuation">;</span>
name <span class="token operator">=</span> <span class="token string">&quot;As&quot;</span><span class="token punctuation">;</span>
name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">JavaScript</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
</code></pre></div></li><li><p><code>boolean</code>: <code>true</code> or <code>false</code></p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> d<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> e<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre></div></li><li><p><a href="#objects"><code>Objects</code></a></p></li>`,4),R=a(`<li><p><code>any</code> (default type): Any kind of value, no specific type assignment</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// These variables can be of any type</span>
<span class="token keyword">let</span> a<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>

<span class="token comment">// Implicit cast to type \`any\`</span>
<span class="token keyword">let</span> variable<span class="token punctuation">;</span>

variable <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
variable <span class="token operator">=</span> <span class="token string">&quot;Name&quot;</span><span class="token punctuation">;</span>
</code></pre></div></li>`,1),U={href:"https://learning.oreilly.com/library/view/programming-typescript/9781492037644/ch03.html##unknown",target:"_blank",rel:"noopener noreferrer"},G=n("code",null,"unknown",-1),L=n("li",null,[n("p",null,[n("code",null,"bigint"),s(": "),n("code",null,"2^53"),s(" numbers ("),n("em",null,"new"),s(")")])],-1),O=n("li",null,[n("p",null,[n("code",null,"symbol")])],-1),M=a('<h3 id="typescript-s-type-hierarchy" tabindex="-1"><a class="header-anchor" href="#typescript-s-type-hierarchy" aria-hidden="true">#</a> TypeScript&#39;s type hierarchy</h3><p><img src="'+d+`" alt="types"></p><h3 id="tuple-type" tabindex="-1"><a class="header-anchor" href="#tuple-type" aria-hidden="true">#</a> Tuple Type</h3><p>Fixed-length and fixed-type array:</p><ul><li>Order is important</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> tups<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">25</span><span class="token punctuation">,</span> <span class="token string">&quot;Types&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// Error is thrown</span>
tups<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">36</span><span class="token punctuation">;</span>

<span class="token comment">// TypeScript will not throw Error</span>
tups<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">366</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li><p>Remove <code>push</code> function from tuple:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">StrictTuple<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> Omit<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token keyword">keyof</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token keyword">infer</span></span> <span class="token constant">O</span>
  <span class="token operator">?</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token constant">K</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">O</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">O</span><span class="token punctuation">[</span><span class="token constant">K</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>
  <span class="token operator">:</span> <span class="token builtin">never</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> x<span class="token operator">:</span> StrictTuple<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// {0: number; 1: string }</span>

x<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;okay&quot;</span><span class="token punctuation">;</span>
x<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
x<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// error!</span>

<span class="token comment">//~~~~ Property &#39;push&#39; does not exist on type { 0: number; 1: string; }</span>
</code></pre></div></li><li><p>Second option:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> testArray<span class="token operator">:</span> <span class="token keyword">readonly</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token keyword">const</span><span class="token punctuation">;</span>
testArray<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// error</span>
</code></pre></div></li></ul><h3 id="enum-type" tabindex="-1"><a class="header-anchor" href="#enum-type" aria-hidden="true">#</a> Enum Type</h3><p>Enums are used to define a set of named constants</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> <span class="token constant">DIRECTION</span> <span class="token punctuation">{</span>
  Up<span class="token punctuation">,</span>
  Down<span class="token punctuation">,</span>
  Left<span class="token punctuation">,</span>
  Right<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// Up has value: 0</span>
<span class="token comment">// All of the following members are auto-incremented</span>
</code></pre></div><ul><li>Initialize values:</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> <span class="token constant">DIRECTION</span> <span class="token punctuation">{</span>
  Up <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
  Down<span class="token punctuation">,</span>
  Left<span class="token punctuation">,</span>
  Right<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// Up has value: 1</span>
<span class="token comment">// Down has value: 2</span>
</code></pre></div><ul><li>If string is used instead of numbers to initialize, we need to provide value to all the elements.</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> <span class="token constant">ROLES</span> <span class="token punctuation">{</span>
  <span class="token constant">ADMIN</span> <span class="token operator">=</span> <span class="token string">&quot;ADMIN&quot;</span><span class="token punctuation">,</span>
  <span class="token constant">READ_ONLY</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token constant">AUTHOR</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="objects" tabindex="-1"><a class="header-anchor" href="#objects" aria-hidden="true">#</a> Objects</h3><p>Same as JavaScript objects, we can add types to the keys and values of the object. Also, specify the what keys can be used in the object</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> userData<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> age<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> wh<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Max&quot;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token string">&quot;22&quot;</span><span class="token punctuation">,</span>
  wh<span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>Complex objects</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> complex<span class="token operator">:</span> <span class="token punctuation">{</span> data<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token function-variable function">output</span><span class="token operator">:</span> <span class="token punctuation">(</span>all<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">3.99</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function-variable function">output</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>all<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><ul><li><p>[type alias](###Type Aliases)</p></li><li><p>Create an object type and use it multiple times</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Complex</span> <span class="token operator">=</span> <span class="token punctuation">{</span> data<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token function-variable function">output</span><span class="token operator">:</span> <span class="token punctuation">(</span>all<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> complex<span class="token operator">:</span> Complex <span class="token operator">=</span> <span class="token punctuation">{</span>
  data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">3.99</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function-variable function">output</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>all<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div></li></ul><h3 id="union-types" tabindex="-1"><a class="header-anchor" href="#union-types" aria-hidden="true">#</a> Union Types</h3><ul><li><p>The variable can be of two or more types</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> myAge<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token number">27</span><span class="token punctuation">;</span>
myAge <span class="token operator">=</span> <span class="token string">&quot;27&quot;</span><span class="token punctuation">;</span>

myAge <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// will cause error</span>
</code></pre></div></li></ul><h4 id="discriminated-unions" tabindex="-1"><a class="header-anchor" href="#discriminated-unions" aria-hidden="true">#</a> Discriminated Unions</h4><p><em>Example:</em></p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token operator">&amp;</span> <span class="token punctuation">(</span>
  <span class="token operator">|</span> <span class="token punctuation">{</span>
      role<span class="token operator">:</span> <span class="token string">&quot;admin&quot;</span><span class="token punctuation">;</span>
      adminPassword<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token operator">|</span> <span class="token punctuation">{</span>
      role<span class="token operator">:</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token operator">|</span> <span class="token punctuation">{</span>
      role<span class="token operator">:</span> <span class="token string">&quot;super-admin&quot;</span><span class="token punctuation">;</span>
      superAdminPassword<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> usr<span class="token operator">:</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&quot;JS&quot;</span><span class="token punctuation">,</span>
  role<span class="token operator">:</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> admin<span class="token operator">:</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&quot;TS&quot;</span><span class="token punctuation">,</span>
  role<span class="token operator">:</span> <span class="token string">&quot;admin&quot;</span><span class="token punctuation">,</span>
  adminPassword<span class="token operator">:</span> <span class="token string">&quot;****&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> suAdmin<span class="token operator">:</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">,</span>
  role<span class="token operator">:</span> <span class="token string">&quot;super-admin&quot;</span><span class="token punctuation">,</span>
  superAdminPassword<span class="token operator">:</span> <span class="token string">&quot;******&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Bird</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">&quot;bird&quot;</span><span class="token punctuation">;</span>
  flyingSpeed<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Horse</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">&quot;horse&quot;</span><span class="token punctuation">;</span>
  runningSpeed<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Animal</span> <span class="token operator">=</span> Bird <span class="token operator">|</span> Horse<span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">moveAnimal</span><span class="token punctuation">(</span>animal<span class="token operator">:</span> Animal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>animal<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&quot;bird&quot;</span><span class="token operator">:</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>animal<span class="token punctuation">.</span>flyingSpeed<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>

    <span class="token keyword">case</span> <span class="token string">&quot;horse&quot;</span><span class="token operator">:</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>animal<span class="token punctuation">.</span>runningSpeed<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="literal-types" tabindex="-1"><a class="header-anchor" href="#literal-types" aria-hidden="true">#</a> Literal Types</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> myAge<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">;</span>

myAge <span class="token operator">=</span> <span class="token number">28</span><span class="token punctuation">;</span> <span class="token comment">// will cause error as myAge can only have value 80</span>
</code></pre></div><h3 id="type-aliases" tabindex="-1"><a class="header-anchor" href="#type-aliases" aria-hidden="true">#</a> Type Aliases</h3><ul><li>Alias ay types</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Combinable</span> <span class="token operator">=</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">ConversionResType</span> <span class="token operator">=</span> <span class="token string">&quot;as-number&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;as-text&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">combine</span><span class="token punctuation">(</span>
  inp1<span class="token operator">:</span> Combinable<span class="token punctuation">,</span>
  inp2<span class="token operator">:</span> Combinable<span class="token punctuation">,</span>
  resultConversion<span class="token operator">:</span> ConversionResType<span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="void-type" tabindex="-1"><a class="header-anchor" href="#void-type" aria-hidden="true">#</a> Void Type</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">printName</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="unknown-type" tabindex="-1"><a class="header-anchor" href="#unknown-type" aria-hidden="true">#</a> Unknown Type</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> user<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">;</span>

user <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span>
user <span class="token operator">=</span> <span class="token string">&quot;Name&quot;</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>Error is thrown if we try to assign a variable of <code>unknown</code> type to any other variable</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> user<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> userName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> userAge<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>

user <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span>

userName <span class="token operator">=</span> user<span class="token punctuation">;</span> <span class="token comment">// Will throw an error</span>

userAge <span class="token operator">=</span> user<span class="token punctuation">;</span> <span class="token comment">// No error</span>
</code></pre></div><h3 id="never-type" tabindex="-1"><a class="header-anchor" href="#never-type" aria-hidden="true">#</a> Never Type</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">generateError</span><span class="token punctuation">(</span>msg<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> code<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">never</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token punctuation">{</span> msg<span class="token punctuation">,</span> code <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="intersection-types" tabindex="-1"><a class="header-anchor" href="#intersection-types" aria-hidden="true">#</a> Intersection Types</h3><ul><li>Intersection of types:</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Combinable</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Numeric</span> <span class="token operator">=</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Universal</span> <span class="token operator">=</span> Combinable <span class="token operator">&amp;</span> Numeric<span class="token punctuation">;</span>
<span class="token comment">// Universal is of type number,</span>
<span class="token comment">// as it is the only intersection between</span>
<span class="token comment">// Combinable and Numeric</span>
</code></pre></div><ul><li>Using <code>type</code>:</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Admin</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  privileges<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Employee</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  startDate<span class="token operator">:</span> Date<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">ElevatedEmployee</span> <span class="token operator">=</span> Admin <span class="token operator">&amp;</span> Employee<span class="token punctuation">;</span>

<span class="token keyword">const</span> emp<span class="token operator">:</span> ElevatedEmployee <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Java&quot;</span><span class="token punctuation">,</span>
  privileges<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;None&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  startDate<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>Using <code>interface</code>:</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Admin</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  privileges<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Employee</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  startDate<span class="token operator">:</span> Date<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">ElevatedEmployee</span> <span class="token keyword">extends</span> <span class="token class-name">Admin</span><span class="token punctuation">,</span> Employee <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">const</span> emp<span class="token operator">:</span> ElevatedEmployee <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Java&quot;</span><span class="token punctuation">,</span>
  privileges<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;None&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  startDate<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="type-checking" tabindex="-1"><a class="header-anchor" href="#type-checking" aria-hidden="true">#</a> Type Checking</h3><p><code>typeof</code> variable;</p><ul><li><p>check type of variable:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> variable <span class="token operator">==</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>variable <span class="token operator">+</span> <span class="token string">&quot; is a string.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ul><p><code>never</code></p><ul><li><p>for functions which never returns anything:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">neverReturn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">never</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;An error!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ul><p>Nullable types</p><ul><li><p>To do this add <code>&quot;strictNullChecks&quot;: false</code> to <code>tsconfig.json</code> file.</p></li><li><p>Now if we try to assign null to any other type variable, we get an error.</p></li><li><p>To make variable null, add union to it:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> a<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
</code></pre></div></li></ul><blockquote><p>Note: once a variable is set to null, will it give error if we assign different value to it.</p></blockquote><h3 id="type-system" tabindex="-1"><a class="header-anchor" href="#type-system" aria-hidden="true">#</a> Type System</h3><p>A set of rules that a type checker uses to assign types to your program.</p><ul><li>In general, it is good style to let TypeScript infer as many types as it can for you, keeping explicitly typed code to a minimum.</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// array of heterogeneous data</span>
<span class="token keyword">let</span> arr<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// tuples</span>
<span class="token keyword">let</span> tup<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;yes&quot;</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// enum</span>
<span class="token keyword">enum</span> Color <span class="token punctuation">{</span>
  Gray<span class="token punctuation">,</span> <span class="token comment">// 0</span>
  Green <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span>
  Blue<span class="token punctuation">,</span> <span class="token comment">// 2</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> myColor<span class="token operator">:</span> Color <span class="token operator">=</span> Color<span class="token punctuation">.</span>Green<span class="token punctuation">;</span>
</code></pre></div><h3 id="type-casting" tabindex="-1"><a class="header-anchor" href="#type-casting" aria-hidden="true">#</a> Type Casting</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> userInp <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Type: HTMLElement</span>
<span class="token comment">// Error: as HTMLElement is generic, hence</span>
<span class="token comment">// not all HTML elements have the &#39;value&#39; property</span>
userInp<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// Type Casting</span>
<span class="token keyword">const</span> userInp <span class="token operator">=</span> <span class="token operator">&lt;</span>HTMLInputElement<span class="token operator">&gt;</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>

<span class="token comment">// alternative syntax</span>
<span class="token keyword">const</span> userInp <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> HTMLInputElement<span class="token punctuation">;</span>

userInp<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>Nullable:</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> userInp <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>userInp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>userInp <span class="token keyword">as</span> HTMLInputElement<span class="token punctuation">)</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="type-guard" tabindex="-1"><a class="header-anchor" href="#type-guard" aria-hidden="true">#</a> Type Guard</h3><ul><li>Base types</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Combinable</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token operator">:</span> Combinable<span class="token punctuation">,</span> b<span class="token operator">:</span> Combinable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// This will throw an error</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token operator">:</span> Combinable<span class="token punctuation">,</span> b<span class="token operator">:</span> Combinable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Type guard</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> a <span class="token operator">===</span> <span class="token string">&quot;number&quot;</span> <span class="token operator">||</span> b <span class="token operator">===</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> b<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>User defined types</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Admin</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  privileges<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Employee</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  startDate<span class="token operator">:</span> Date<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">ElevatedEmployee</span> <span class="token operator">=</span> Admin <span class="token operator">|</span> Employee<span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">show</span><span class="token punctuation">(</span>a<span class="token operator">:</span> ElevatedEmployee<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Type guards</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;privileges&quot;</span> <span class="token keyword">in</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>privileges<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;startDate&quot;</span> <span class="token keyword">in</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>startDate<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>Class</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
  <span class="token function">drive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Driving...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Truck</span> <span class="token punctuation">{</span>
  <span class="token function">drive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Driving Truck...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">loadCargo</span><span class="token punctuation">(</span>amount<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Vehicle</span> <span class="token operator">=</span> Car <span class="token operator">|</span> Truck<span class="token punctuation">;</span>

<span class="token keyword">const</span> v1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> v2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Truck</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">useVehicle</span><span class="token punctuation">(</span>v<span class="token operator">:</span> Vehicle<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  v<span class="token punctuation">.</span><span class="token function">drive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>v <span class="token keyword">instanceof</span> <span class="token class-name">Truck</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    v<span class="token punctuation">.</span><span class="token function">loadCargo</span><span class="token punctuation">(</span><span class="token number">21</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="index-properties" tabindex="-1"><a class="header-anchor" href="#index-properties" aria-hidden="true">#</a> Index Properties</h3>`,70),F={href:"https://www.typescriptlang.org/play?q=101#example/indexed-types",target:"_blank",rel:"noopener noreferrer"},J=n("li",null,[n("p",null,[n("code",null,"boolean"),s(" not allowed for keys")])],-1),H=a(`<div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ErrorContainer</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><em>Example:</em></p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">UserRoleAttr</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token punctuation">{</span>
      role<span class="token operator">:</span> <span class="token string">&quot;admin&quot;</span><span class="token punctuation">;</span>
      adminPassword<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token operator">|</span> <span class="token punctuation">{</span>
      role<span class="token operator">:</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token operator">|</span> <span class="token punctuation">{</span>
      role<span class="token operator">:</span> <span class="token string">&quot;super-admin&quot;</span><span class="token punctuation">;</span>
      superAdminPassword<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Roles</span> <span class="token operator">=</span> UserRoleAttr<span class="token punctuation">[</span><span class="token string">&quot;role&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// &quot;admin&quot; | &quot;user&quot; | &quot;super-admin&quot;</span>
</code></pre></div><h3 id="utility-types" tabindex="-1"><a class="header-anchor" href="#utility-types" aria-hidden="true">#</a> Utility Types</h3><ul><li><code>Partial&lt;Type&gt;</code>:</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Todo</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  description<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">updateTodo</span><span class="token punctuation">(</span>todo<span class="token operator">:</span> Todo<span class="token punctuation">,</span> fieldsToUpdate<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Todo<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>todo<span class="token punctuation">,</span> <span class="token operator">...</span>fieldsToUpdate <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> todo1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">&quot;organize desk&quot;</span><span class="token punctuation">,</span>
  description<span class="token operator">:</span> <span class="token string">&quot;clear clutter&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> todo2 <span class="token operator">=</span> <span class="token function">updateTodo</span><span class="token punctuation">(</span>todo1<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  description<span class="token operator">:</span> <span class="token string">&quot;throw out trash&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Example:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Goal</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  date<span class="token operator">:</span> Date<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">createGoal</span><span class="token punctuation">(</span>title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> date<span class="token operator">:</span> Date<span class="token punctuation">)</span><span class="token operator">:</span> Goal <span class="token punctuation">{</span>
  <span class="token keyword">let</span> newGoal<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Goal<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// Perform validations if required</span>
  newGoal<span class="token punctuation">.</span>title <span class="token operator">=</span> title<span class="token punctuation">;</span>
  newGoal<span class="token punctuation">.</span>date <span class="token operator">=</span> date<span class="token punctuation">;</span>

  <span class="token keyword">return</span> newGoal <span class="token keyword">as</span> Goal<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,8),B={href:"https://www.typescriptlang.org/docs/handbook/utility-types.html",target:"_blank",rel:"noopener noreferrer"},V=a(`<h2 id="functions" tabindex="-1"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> Functions</h2><ul><li>Specify function return type:</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">returnMyName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&quot;Prabhu&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">voidFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Hello!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>Argument type:</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">returnMyName</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>Functions as types:</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// Any function can be assigned</span>
<span class="token comment">// Structure of the function not specified</span>
<span class="token keyword">let</span> anyFunc<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">;</span>

<span class="token comment">// Define the structure of the function that can be</span>
<span class="token comment">// Assigned to it</span>
<span class="token keyword">let</span> <span class="token function-variable function">myName</span><span class="token operator">:</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

myName <span class="token operator">=</span> returnMyName<span class="token punctuation">;</span>
</code></pre></div><ul><li>Default parameters:</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">printName</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;25&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>Callback Function:</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">printAndHandle</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token function-variable function">cb</span><span class="token operator">:</span> <span class="token punctuation">(</span>age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">cb</span><span class="token punctuation">(</span><span class="token number">27</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="function-overloads" tabindex="-1"><a class="header-anchor" href="#function-overloads" aria-hidden="true">#</a> Function Overloads</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span> Combinable<span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> Combinable</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> a <span class="token operator">===</span> <span class="token string">&quot;number&quot;</span> <span class="token operator">||</span> b <span class="token operator">===</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> b<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;Maxi&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;mum&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

res<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="es6-features" tabindex="-1"><a class="header-anchor" href="#es6-features" aria-hidden="true">#</a> ES6 Features</h2><ul><li><p><code>let</code>, <code>const</code> and <code>var</code></p></li><li><p><strong>Arrow Functions</strong></p></li><li><p><strong>Rest &amp; Spread</strong></p></li><li><p><strong><code>Destructuring</code></strong> <em>Arrays</em> and <em>Objects</em></p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// arrays</span>
<span class="token keyword">const</span> myHobbies <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Cooking&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sports&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>hobby1<span class="token punctuation">,</span> hobby2<span class="token punctuation">]</span> <span class="token operator">=</span> myHobbies<span class="token punctuation">;</span>

<span class="token comment">// object</span>
<span class="token keyword">const</span> userData <span class="token operator">=</span> <span class="token punctuation">{</span> userName<span class="token operator">:</span> <span class="token string">&quot;Max&quot;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">27</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> userName<span class="token operator">:</span> altName1<span class="token punctuation">,</span> age<span class="token operator">:</span> altName2 <span class="token punctuation">}</span> <span class="token operator">=</span> userData<span class="token punctuation">;</span>
</code></pre></div></li><li><p>Template Literals</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> userName <span class="token operator">=</span> <span class="token string">&quot;Max&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> greetings <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">This is a heading-
I&#39;m </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>userName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.
This is cool!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
</code></pre></div></li><li><p>symbols, iterators, generators</p></li></ul><h2 id="class" tabindex="-1"><a class="header-anchor" href="#class" aria-hidden="true">#</a> Class</h2><ul><li><p>There are some changes between <em>TypeScript</em> class and <em>ES6</em> class.</p></li><li><p>Access modifier can be used <code>public</code>(default), <code>private</code>, <code>protected</code></p></li></ul><p><em>Example:</em></p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// public (default)</span>
  <span class="token keyword">private</span> typ<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token keyword">protected</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token comment">// userName will automatically assigned to this.userName</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    typ<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
    <span class="token keyword">public</span> userName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>typ <span class="token operator">=</span> typ<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> pers1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;Max&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;admin&quot;</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">,</span> <span class="token string">&quot;maxin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>Shorthand Initializer:</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>
    <span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    <span class="token keyword">private</span> typ<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    <span class="token keyword">protected</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
    <span class="token keyword">public</span> userName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> pers1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;Max&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;admin&quot;</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">,</span> <span class="token string">&quot;maxin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li><code>readonly</code> modifier mark a property that shouldn&#39;t be changed:</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>
    <span class="token keyword">public</span> <span class="token keyword">readonly</span> seats<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">36</span><span class="token punctuation">,</span>
    <span class="token keyword">private</span> color<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token function">printCar</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> Car<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>seats <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>Methods don&#39;t have <code>function</code> keyword.</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
  seats<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token keyword">private</span> color<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>seats<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> color<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>seats <span class="token operator">=</span> seats<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">printCar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>seats <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>Handling <code>this</code>:</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// The above class is used as an example</span>
<span class="token keyword">const</span> newCar <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">,</span> <span class="token string">&quot;Red&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Save the pointer to the function of the object</span>
<span class="token comment">// So that it can be used later</span>
<span class="token keyword">const</span> printDetails <span class="token operator">=</span> <span class="token punctuation">{</span> printCar<span class="token operator">:</span> newCar<span class="token punctuation">.</span>printCar <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// This will throw an error</span>
<span class="token comment">// Because the \`this\` keyword inside</span>
<span class="token comment">// the printCar method will not refer to the object of Car</span>
<span class="token comment">// but to the object printDetails, which dose not have</span>
<span class="token comment">// the seats and color properties</span>
printDetails<span class="token punctuation">.</span><span class="token function">printCar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>To help us catch these mistakes we can explicitly define a type for <code>this</code>:</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
  seats<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
  <span class="token keyword">private</span> color<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>seats<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">36</span><span class="token punctuation">,</span> color<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>seats <span class="token operator">=</span> seats<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// The object calling this function</span>
  <span class="token comment">// must be an object of Car</span>
  <span class="token function">printCar</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> Car<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>seats <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><img src="`+y+`" alt="TypeScript Classes"></p><h3 id="inheritance" tabindex="-1"><a class="header-anchor" href="#inheritance" aria-hidden="true">#</a> Inheritance</h3><ul><li>Multiple inheritance is not supported</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Max</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name <span class="token operator">=</span> <span class="token string">&quot;Max&quot;</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>userName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token string">&quot;Max&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Hulk&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> userName<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> newMax <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Max</span><span class="token punctuation">(</span><span class="token string">&quot;maxin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="setters-and-getters" tabindex="-1"><a class="header-anchor" href="#setters-and-getters" aria-hidden="true">#</a> Setters And Getters</h3><ul><li>Getters:</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>
    <span class="token keyword">public</span> <span class="token keyword">readonly</span> seats<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">36</span><span class="token punctuation">,</span>
    <span class="token keyword">private</span> color<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token function">printCar</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> Car<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>seats <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">get</span> <span class="token function">colorValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>color<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> newCar <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">,</span> <span class="token string">&quot;Red&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newCar<span class="token punctuation">.</span>colorValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>Setter:</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>
    <span class="token keyword">public</span> <span class="token keyword">readonly</span> seats<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">36</span><span class="token punctuation">,</span>
    <span class="token keyword">private</span> color<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token function">printCar</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> Car<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>seats <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">get</span> <span class="token function">colorValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>color<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">set</span> <span class="token function">colorValue</span><span class="token punctuation">(</span>v<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> v<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> newCar <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">,</span> <span class="token string">&quot;Red&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

newCar<span class="token punctuation">.</span>colorValue <span class="token operator">=</span> <span class="token string">&quot;Pink&quot;</span><span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newCar<span class="token punctuation">.</span>colorValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="abstract-class" tabindex="-1"><a class="header-anchor" href="#abstract-class" aria-hidden="true">#</a> Abstract Class</h3><ul><li>Abstract classes cannot be instantiated</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>
    <span class="token keyword">public</span> <span class="token keyword">readonly</span> seats<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
    <span class="token keyword">private</span> color<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token keyword">abstract</span> <span class="token function">printCar</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> Car<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="singletons-and-private-constructors" tabindex="-1"><a class="header-anchor" href="#singletons-and-private-constructors" aria-hidden="true">#</a> Singletons And Private Constructors</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">static</span> instance<span class="token operator">:</span> Car<span class="token punctuation">;</span>

  <span class="token keyword">private</span> <span class="token function">constructor</span><span class="token punctuation">(</span>
    <span class="token keyword">public</span> <span class="token keyword">readonly</span> seats<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
    <span class="token keyword">private</span> color<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token function">printCar</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> Car<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>seats <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token function">getInstance</span><span class="token punctuation">(</span>seats<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> color<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>instance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span>seats<span class="token punctuation">,</span> color<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>instance<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> newCar <span class="token operator">=</span> Car<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">,</span> <span class="token string">&quot;Red&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="interface" tabindex="-1"><a class="header-anchor" href="#interface" aria-hidden="true">#</a> Interface</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
  seats<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  color<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token function">printCar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> newCar<span class="token operator">:</span> Car <span class="token operator">=</span> <span class="token punctuation">{</span>
  color<span class="token operator">:</span> <span class="token string">&quot;Red&quot;</span><span class="token punctuation">,</span>
  seats<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  <span class="token function">printCar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>seats <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><ul><li><p><code>readonly</code> properties</p></li><li><p>Declaration merging</p></li><li><p>Interfaces for functions:</p></li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// type AddFunc = (a: number, b: number) =&gt; number;</span>

<span class="token comment">// Same with interface</span>
<span class="token class-name"><span class="token keyword">interface</span></span> AddFunc <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>Optional properties and functions</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
  seats<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  color<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  printCar<span class="token operator">?</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><code>type</code> vs <code>interface</code></li><li><code>abstract</code> vs <code>interface</code></li></ul><table><thead><tr><th>Interfaces</th><th><a href="#type-aliases">Type Aliases</a></th></tr></thead><tbody><tr><td>Preferred for objects and classes</td><td>Preferred for functions and everything else</td></tr><tr><td>Open for extensions</td><td>Fixed object structure</td></tr><tr><td>Supports Inheritance</td><td>Can be done using <a href="#intersection-types">Intersection</a></td></tr></tbody></table><p><img src="`+g+`" alt="TypeScript Interfaces"></p><h2 id="generics" tabindex="-1"><a class="header-anchor" href="#generics" aria-hidden="true">#</a> Generics</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> ages<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">boolean</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> promise<span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> data<span class="token punctuation">.</span><span class="token function">toExponential</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">merge</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>obj1<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> obj2<span class="token operator">:</span> <span class="token constant">U</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>obj1<span class="token punctuation">,</span> obj2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;Prabhu&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> age<span class="token operator">:</span> <span class="token number">27</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>Generic Class</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">GenericNumber<span class="token operator">&lt;</span>NumType<span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  zeroValue<span class="token operator">:</span> NumType<span class="token punctuation">;</span>
  <span class="token function-variable function">add</span><span class="token operator">:</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> NumType<span class="token punctuation">,</span> y<span class="token operator">:</span> NumType<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> NumType<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> myGenericNumber <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GenericNumber<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myGenericNumber<span class="token punctuation">.</span>zeroValue <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
myGenericNumber<span class="token punctuation">.</span><span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>Type Constraints:</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">merge</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> object<span class="token punctuation">,</span> <span class="token constant">U</span> <span class="token keyword">extends</span> object<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>obj1<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> obj2<span class="token operator">:</span> <span class="token constant">U</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>obj1<span class="token punctuation">,</span> obj2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><code>keyof</code> type operator: Takes an object type and produces a string or numeric literal union of its keys.</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Point</span> <span class="token operator">=</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> y<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">P</span></span> <span class="token operator">=</span> <span class="token keyword">keyof</span> Point<span class="token punctuation">;</span>

<span class="token comment">// Example</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">extractAndConvert</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> object<span class="token punctuation">,</span> <span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> object<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
  obj<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span>
  key<span class="token operator">:</span> <span class="token constant">K</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="decorators" tabindex="-1"><a class="header-anchor" href="#decorators" aria-hidden="true">#</a> Decorators</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">Logger</span><span class="token punctuation">(</span>constructor<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Decorator called...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>constructor<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Logger</span></span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name <span class="token operator">=</span> <span class="token string">&quot;Max&quot;</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Creating object&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> per <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>per<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>Decorator Factories</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">Logger</span><span class="token punctuation">(</span>logString<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>constructor<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>logString<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>constructor<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Logger</span></span><span class="token punctuation">(</span><span class="token string">&quot;Logging - Person&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name <span class="token operator">=</span> <span class="token string">&quot;Max&quot;</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Creating object&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><p>Multiple Decorator: Bottom ones run first</p></li><li><p>Runs when a class defined not when it is instantiated</p></li></ul><h2 id="modules" tabindex="-1"><a class="header-anchor" href="#modules" aria-hidden="true">#</a> Modules</h2><ul><li><p>Using <code>namespace</code></p><ul><li><p>Per-file or bundled compilation is possible (less imports to manage)</p></li><li><p>TypeScript specific</p></li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// Interface file: IPeople.ts</span>
<span class="token keyword">namespace</span> People <span class="token punctuation">{</span>
  <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">IPeople</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">export</span> <span class="token keyword">const</span> defName <span class="token operator">=</span> <span class="token string">&quot;Admin&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">const</span> defAge <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Class file: People.ts</span>

<span class="token comment">/// &lt;reference path=&quot;IPeople.ts&quot; /&gt;</span>
<span class="token keyword">namespace</span> People <span class="token punctuation">{</span>
  <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token keyword">implements</span> <span class="token class-name">IPeople</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name <span class="token operator">??</span> defName<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age <span class="token operator">??</span> defAge<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>Set <code>outfile</code>, to concatenate files into a single file</li></ul></li><li><p>Using ES6 Imports/Exports</p><ul><li>Per-file compilation but single <code>&lt;script&gt;</code> import</li><li>Bundling via third-party tools (e.g. Webpack)</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// Interface file: IPeople.ts</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">IPeople</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> defName <span class="token operator">=</span> <span class="token string">&quot;Admin&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> defAge <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token comment">// Class file: People.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defAge<span class="token punctuation">,</span> defName<span class="token punctuation">,</span> IPeople <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./counter&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token keyword">implements</span> <span class="token class-name">IPeople</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name <span class="token operator">??</span> defName<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age <span class="token operator">??</span> defAge<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ul><h2 id="globals" tabindex="-1"><a class="header-anchor" href="#globals" aria-hidden="true">#</a> Globals</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// If a var is defined in script tag or</span>
<span class="token comment">// in a JavaScript file</span>
<span class="token comment">// &lt;script&gt;</span>
<span class="token comment">//    var GLOBAL = &quot;yes&quot;;</span>
<span class="token comment">// &lt;/script&gt;</span>

<span class="token comment">// Declare in TypeScript file</span>
<span class="token keyword">declare</span> <span class="token keyword">var</span> <span class="token constant">GLOBAL</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">GLOBAL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li><code>window</code> object;</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// STOP doing this:</span>
<span class="token punctuation">(</span>window <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//              ^? any</span>

<span class="token comment">// Do THIS instead:</span>
<span class="token keyword">declare</span> global <span class="token punctuation">{</span>
  <span class="token keyword">interface</span> <span class="token class-name">Window</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">bar</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

window<span class="token punctuation">.</span><span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//    ^? (property) Window.bar: () =&gt; void</span>
</code></pre></div><h2 id="check-out" tabindex="-1"><a class="header-anchor" href="#check-out" aria-hidden="true">#</a> Check Out</h2><ul><li>Opaque Type in Typed languages</li><li>Nullish Coalescing</li></ul><h3 id="satisfies-operator" tabindex="-1"><a class="header-anchor" href="#satisfies-operator" aria-hidden="true">#</a> <code>satisfies</code> Operator</h3><p><code>satisfies</code> (<em>v4.9</em>): Enforce a constraint on a variable, without changing its type</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">RGB</span></span> <span class="token operator">=</span> <span class="token punctuation">[</span>red<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> green<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> blue<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Color</span> <span class="token operator">=</span> <span class="token constant">RGB</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> myColor<span class="token operator">:</span> Color <span class="token operator">=</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">;</span>

myColor<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//     ^^^^^^^^^^^^^^ invalid operation as myColor can be string or RGB</span>

<span class="token keyword">const</span> myColorNew <span class="token operator">=</span> <span class="token string">&quot;red&quot;</span> satisfies Color<span class="token punctuation">;</span> <span class="token comment">// works</span>
<span class="token keyword">const</span> myIncorrectColor <span class="token operator">=</span> <span class="token number">100</span> satisfies Color<span class="token punctuation">;</span> <span class="token comment">// throws error</span>

myColorNew<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// valid operation as myColorNew is a string</span>
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> getDeepValue <span class="token operator">=</span> <span class="token operator">&lt;</span>
  TObj<span class="token punctuation">,</span>
  TFirstKey <span class="token keyword">extends</span> <span class="token keyword">keyof</span> TObj<span class="token punctuation">,</span>
  TSecondKey <span class="token keyword">extends</span> <span class="token keyword">keyof</span> TObj<span class="token punctuation">[</span>TFirstKey<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token operator">&gt;</span><span class="token punctuation">(</span>
  obj<span class="token operator">:</span> TObj<span class="token punctuation">,</span>
  firstKey<span class="token operator">:</span> TFirstKey<span class="token punctuation">,</span>
  secondKey<span class="token operator">:</span> TSecondKey<span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> obj<span class="token punctuation">[</span>firstKey<span class="token punctuation">]</span><span class="token punctuation">[</span>secondKey<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  foo<span class="token operator">:</span> <span class="token punctuation">{</span>
    a<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    b<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  bar<span class="token operator">:</span> <span class="token punctuation">{</span>
    c<span class="token operator">:</span> <span class="token string">&quot;12&quot;</span><span class="token punctuation">,</span>
    d<span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">getDeepValue</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// typeof value === boolean</span>
</code></pre></div><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Animal</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Human</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  firstName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  lastName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">GetRequiredInfo<span class="token operator">&lt;</span>TType<span class="token operator">&gt;</span></span> <span class="token operator">=</span> TType <span class="token keyword">extends</span> <span class="token class-name">Animal</span>
  <span class="token operator">?</span> <span class="token punctuation">{</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span>
  <span class="token operator">:</span> <span class="token punctuation">{</span> socialSecurityNumber<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">RequiredInfoForAnimal</span> <span class="token operator">=</span> GetRequiredInfo<span class="token operator">&lt;</span>Animal<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// typeof RequiredInfoForAnimal === { age: number }</span>

<span class="token keyword">type</span> <span class="token class-name">RequiredInfoForHuman</span> <span class="token operator">=</span> GetRequiredInfo<span class="token operator">&lt;</span>Human<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// typeof RequiredInfoForHuman === { socialSecurityNumber: number }</span>
</code></pre></div><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> deepEqualCompare <span class="token operator">=</span> <span class="token operator">&lt;</span>Arg<span class="token punctuation">,</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>
  a<span class="token operator">:</span> Arg <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">any</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Don&#39;t pass an array!</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> Arg<span class="token punctuation">,</span>
  b<span class="token operator">:</span> Arg<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">===</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> second <span class="token keyword">from</span> <span class="token string">&quot;ts-toolbelt&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> query <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/home?a=foo&amp;b=wow</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Query</span> <span class="token operator">=</span> <span class="token keyword">typeof</span> query<span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">SecondQueryPart</span> <span class="token operator">=</span> String<span class="token punctuation">.</span>Split<span class="token operator">&lt;</span>Query<span class="token punctuation">,</span> <span class="token string">&quot;?&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">QueryElements</span> <span class="token operator">=</span> String<span class="token punctuation">.</span>Split<span class="token operator">&lt;</span>SecondQueryPart<span class="token punctuation">,</span> <span class="token string">&quot;&amp;&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">QueryParams</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>QueryElement <span class="token keyword">in</span> QueryElements<span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>Key <span class="token keyword">in</span> String<span class="token punctuation">.</span>Split<span class="token operator">&lt;</span>QueryElement<span class="token punctuation">,</span> <span class="token string">&quot;=&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">:</span> String<span class="token punctuation">.</span>Split<span class="token operator">&lt;</span>
      QueryElement<span class="token punctuation">,</span>
      <span class="token string">&quot;=&quot;</span>
    <span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">[</span>QueryElements<span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> obj<span class="token operator">:</span> Uint8ArrayConstructor<span class="token punctuation">.</span>Merge<span class="token operator">&lt;</span>QueryParams<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span>
  b<span class="token operator">:</span> <span class="token string">&quot;wow&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,82),K={href:"https://medium.com/@martin_hotell/10-typescript-pro-tips-patterns-with-or-without-react-5799488d6680",target:"_blank",rel:"noopener noreferrer"};function Q(z,W){const o=e("RouterLink"),p=e("ExternalLinkIcon");return u(),i("div",null,[b,n("ol",null,[h,n("li",null,[n("p",null,[s("Setup TypeScript in individual projects (recommended) and use npm scripts or "),t(o,{to:"/Languages/JavaScript/Tools/Gulp.js/Gulp.js.html"},{default:c(()=>[w]),_:1}),s(" or any other tool")]),f])]),v,q,n("p",null,[s("The below command generates "),n("a",x,[T,t(p)]),s(" file:")]),C,n("ul",null,[S,n("li",null,[n("p",null,[n("a",_,[s("For more Compiler Options"),t(p)])])])]),j,n("div",A,[N,n("p",null,[s("For the full list of available rules, head over to the "),n("a",I,[s("TSLint documentation"),t(p)]),s(". You can also add custom rules, or install extra presets (like for "),n("a",E,[s("ReactJS"),t(p)]),s(").")])]),P,n("ol",null,[D,n("li",null,[n("p",null,[s("Arrays: Any JavaScript "),t(o,{to:"/Languages/JavaScript/JavaScript.html#array"},{default:c(()=>[s("array")]),_:1}),s(", can be flexible or strict (regarding element types)")])]),R,n("li",null,[n("p",null,[n("a",U,[G,t(p)])])]),L,O]),M,n("ul",null,[n("li",null,[n("p",null,[n("a",F,[s("Indexed Types"),t(p)])])]),J]),H,n("ul",null,[n("li",null,[n("a",B,[s("Utility Types"),t(p)])])]),V,n("ul",null,[n("li",null,[n("a",K,[s("10++ TypeScript Pro tips/patterns with (or without) React"),t(p)])])])])}const Z=l(m,[["render",Q],["__file","TypeScript.html.vue"]]);export{Z as default};
