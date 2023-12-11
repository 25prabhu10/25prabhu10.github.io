import{_ as c,r as o,o as l,c as u,b as n,d as s,a,w as i,e as p}from"./app-jDLxG9B3.js";const k={},r=n("h1",{id:"svelte",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#svelte","aria-hidden":"true"},"#"),s(" Svelte")],-1),g={href:"https://svelte.dev/",target:"_blank",rel:"noopener noreferrer"},d=n("p",null,"Features:",-1),m=n("ul",null,[n("li",null,"Compiled"),n("li",null,"Compact"),n("li",null,"Complete")],-1),v={href:"https://kit.svelte.dev",target:"_blank",rel:"noopener noreferrer"},f=p('<h2 id="routing" tabindex="-1"><a class="header-anchor" href="#routing" aria-hidden="true">#</a> Routing</h2><p>At the heart of SvelteKit is a <em>filesystem-based router</em>. The routes of your app - i.e. the URL paths that users can access — are defined by the directories in your code-base:</p><ul><li><code>src/routes</code> is the root route</li><li><code>src/routes/about</code> creates an <code>/about</code> route</li><li><code>src/routes/blog/[slug]</code> creates a route with a <em>parameter</em>, <code>slug</code>, that can be used to load data dynamically when a user requests a page like <code>/blog/hello-world</code></li></ul>',3),x=n("code",null,"src/routes",-1),h={href:"https://kit.svelte.dev/docs/configuration",target:"_blank",rel:"noopener noreferrer"},y=p('<ul><li>Each route directory contains one or more <em>route files</em>, which can be identified by their <code>+</code> prefix</li></ul><ol><li><code>+page</code>: <ol><li><code>+page.svelte</code>:</li></ol></li></ol><h2 id="react-vs-svelte" tabindex="-1"><a class="header-anchor" href="#react-vs-svelte" aria-hidden="true">#</a> React vs. Svelte</h2>',3),b=p(`<ul><li>State:</li></ul><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setCount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> c <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Count is </span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-svelte" data-ext="svelte"><pre class="language-svelte"><code>&lt;script&gt;
  let count = 0
&lt;/script&gt;

&lt;button on:click={() =&gt; count++}&gt;Count is {count}&lt;/button&gt;
</code></pre></div><ul><li>Props: <ul><li>Props as same as in React</li><li>In Svelte component cannot be passed as props</li></ul></li></ul><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">ColouredBox</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> colour <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">You picked: </span><span class="token punctuation">{</span>colour<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> colour <span class="token operator">=</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ColouredBox</span></span> <span class="token attr-name">colour</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>colour<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-svelte" data-ext="svelte"><pre class="language-svelte"><code>&lt;script&gt;
  &lt;!-- export make a variable prop --&gt;
  export let colour
&lt;/script&gt;

You picked: {colour}

&lt;!-- Parent Component --&gt;
const colour = &#39;blue&#39;;
&lt;ColouredBox {colour} /&gt;
</code></pre></div><ul><li>Children:</li></ul><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">Navbar</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>chidren<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Usage</span>
<span class="token keyword">function</span> <span class="token function">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Navbar</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Hi Mon!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/heaven<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Hello, world</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Navbar</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-svelte" data-ext="svelte"><pre class="language-svelte"><code>&lt;slot name=&quot;header&quot; /&gt;
&lt;slot /&gt;
&lt;slot name=&quot;footer&quot; /&gt;
</code></pre></div><ul><li>Life-Cycle</li></ul><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">Navbar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">fun</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// handle promise</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-svelte" data-ext="svelte"><pre class="language-svelte"><code>&lt;script&gt;
  onMount(async () =&gt; {
    // handle promise
  })
&lt;/script&gt;
</code></pre></div><ul><li>Side-Effects:</li></ul><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">count is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-svelte" data-ext="svelte"><pre class="language-svelte"><code>&lt;script&gt;
  let count

  $: document.title = \`count is \${count}\`
&lt;/script&gt;
</code></pre></div><ul><li>Computed States:</li></ul><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> doubled <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> count <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">count is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-svelte" data-ext="svelte"><pre class="language-svelte"><code>&lt;script&gt;
  let count

  $: doubled = count * 2
  $: document.title = \`count is \${count}\`
&lt;/script&gt;
</code></pre></div><ul><li>Conditional</li></ul><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>count <span class="token operator">&gt;</span> <span class="token number">100</span> <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">big</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span> <span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">small</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-svelte" data-ext="svelte"><pre class="language-svelte"><code>&lt;script&gt;
  let count = 0
&lt;/script&gt;

{#if count &gt; 100}
  &lt;p&gt;big&lt;/p&gt;
{:else if count &gt; 50}
  &lt;p&gt;medium&lt;/p&gt;
{:else}
  &lt;p&gt;small&lt;/p&gt;
{/if}
</code></pre></div><ul><li>Loops</li></ul><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;foo&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;bar&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;baz&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>items<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-svelte" data-ext="svelte"><pre class="language-svelte"><code>&lt;script&gt;
  const items = [
    { id: 1, name: &#39;foo&#39; },
    { id: 2, name: &#39;bar&#39; },
    { id: 3, name: &#39;baz&#39; },
  ]
&lt;/script&gt;

{#each items as item (item.id)}
  &lt;p&gt;{item.name}&lt;/p&gt;
{/each}
</code></pre></div><ul><li>Shared State</li></ul><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> atom <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;jotai&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> countAtom <span class="token operator">=</span> <span class="token function">atom</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useAtom <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;jotai&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> countAtom <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./atom&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useAtom</span><span class="token punctuation">(</span>countAtom<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setCount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> c <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Count is </span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-svelte" data-ext="svelte"><pre class="language-svelte"><code>&lt;!-- store.js --&gt;
import { writable } from &#39;svelte/store&#39;
export const countStore = writable(0)

&lt;script&gt;
  import { countStore } from &#39;./store&#39;
&lt;/script&gt;

&lt;button on:click={() =&gt; countStore.update(c =&gt; c + 1)}&gt;Count is {$countStore}&lt;/button&gt;
</code></pre></div><ul><li>Promises</li></ul><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">componentWithAsyncData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> number <span class="token operator">=</span> <span class="token function">use</span><span class="token punctuation">(</span>Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">69</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>number<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ErrorBoundary</span></span> <span class="token attr-name">fallback</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ErrorPage</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Suspense</span></span> <span class="token attr-name">fallback</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">LoadingSpinner</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>componentWithAsyncData</span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Suspense</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ErrorBoundary</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-svelte" data-ext="svelte"><pre class="language-svelte"><code>&lt;script&gt;
  import { LoadingSpinner, ErrorPage } from &#39;svelte&#39;

  const promise = Promise.resolve(69)
&lt;/script&gt;

{#await promis}
  &lt;LoadingSpinner /&gt;
{:then number}
  &lt;p&gt;{number}&lt;/p&gt;
{:catch error}
  &lt;ErrorPage {error} /&gt;
{/await}
</code></pre></div><h2 id="sveltekit" tabindex="-1"><a class="header-anchor" href="#sveltekit" aria-hidden="true">#</a> SvelteKit</h2>`,31);function w(j,_){const t=o("ExternalLinkIcon"),e=o("RouterLink");return l(),u("div",null,[r,n("p",null,[n("a",g,[s("Svelte"),a(t)]),s(": cybernetically enhanced web apps")]),d,m,n("p",null,[n("a",v,[s("SvelteKit"),a(t)]),s(" is built on Svelte, a UI framework that uses a compiler to let you write breathtakingly concise components that do minimal work in the browser, using languages you already know - HTML, CSS and JavaScript")]),f,n("blockquote",null,[n("p",null,[s("You can change "),x,s(" to a different directory by editing the "),n("a",h,[s("project config"),a(t)])])]),y,n("p",null,[a(e,{to:"/Languages/JavaScript/React/React.html"},{default:i(()=>[s("React")]),_:1}),s(" is front-end UI library.")]),b])}const C=c(k,[["render",w],["__file","Svelte.html.vue"]]);export{C as default};
