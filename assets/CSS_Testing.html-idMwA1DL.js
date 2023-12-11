import{_ as n,o as s,c as a,e as t}from"./app-jDLxG9B3.js";const p={},e=t(`<h1 id="css-testing" tabindex="-1"><a class="header-anchor" href="#css-testing" aria-hidden="true">#</a> CSS Testing</h1><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> jest
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// jest.config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">moduleFileExtensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;js&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">testRegex</span><span class="token operator">:</span> <span class="token string">&quot;(\\\\.|/)spec\\\\.js$&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">scripts</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">jest -c path/jest.config.js</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// jest</span>

<span class="token function">expect</span><span class="token punctuation">(</span>expression<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span>expected<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> node-sass
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> sass <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;node-sass&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> sass<span class="token punctuation">.</span><span class="token function">renderSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">&quot;SCSS CODE...&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

result<span class="token punctuation">.</span>css<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// generate css</span>

<span class="token comment">// testing</span>

<span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">SCSS</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">CSS</span>

<span class="token comment">// &amp;</span>

<span class="token function">expect</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>

</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> result <span class="token operator">=</span> sass<span class="token punctuation">.</span><span class="token function">renderSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">data</span> <span class="token operator">:</span> @<span class="token keyword">import</span> <span class="token string">&#39;functions.scss&#39;</span>
            <span class="token punctuation">.</span>test <span class="token punctuation">{</span> <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token function">getPrimary</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">expect</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>css<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">.test { background: #fa3}</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="snapshot-testing" tabindex="-1"><a class="header-anchor" href="#snapshot-testing" aria-hidden="true">#</a> Snapshot Testing</h2><h2 id="dahfazz-test-my-css" tabindex="-1"><a class="header-anchor" href="#dahfazz-test-my-css" aria-hidden="true">#</a> dahfazz/test-my-css</h2>`,10),o=[e];function c(l,u){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","CSS_Testing.html.vue"]]);export{r as default};
