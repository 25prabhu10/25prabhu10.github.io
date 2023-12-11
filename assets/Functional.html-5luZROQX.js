import{_ as n,o as s,c as a,e as t}from"./app-jDLxG9B3.js";const p={},o=t(`<h1 id="functional" tabindex="-1"><a class="header-anchor" href="#functional" aria-hidden="true">#</a> Functional</h1><h2 id="monads" tabindex="-1"><a class="header-anchor" href="#monads" aria-hidden="true">#</a> Monads</h2><p>A monad is a structure that combines program fragments (functions) and wraps their return values in a type with additional computation</p><ol><li>Wrapper Type: <code>NumberWithLogs</code></li><li>Wrap Function (allows entry to monad ecosystem) also known as <code>return</code>, <code>pure</code>, <code>unit</code>: <code>wrapWithLogs</code></li><li>Run Function (runs transformations on monadic values) also known as <code>bind</code>, <code>flatMap</code>, <code>&gt;&gt;=</code>: <code>runWithLogs</code></li></ol><ul><li>Monads are a design pattern that allows a user to chain operations while the monad manages secret work behind the scenes</li></ul><p><em>Example:</em></p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// Normal call</span>
<span class="token keyword">function</span> <span class="token function">square</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">*</span> x
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">addOne</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token function">addOne</span><span class="token punctuation">(</span><span class="token function">square</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 5</span>

<span class="token comment">// Call with Logging</span>
<span class="token keyword">interface</span> <span class="token class-name">NumberWithLogs</span> <span class="token punctuation">{</span>
  result<span class="token operator">:</span> <span class="token builtin">number</span>
  logs<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">square</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> NumberWithLogs <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> x <span class="token operator">*</span> x
  <span class="token keyword">return</span> <span class="token punctuation">{</span> result<span class="token operator">:</span> result<span class="token punctuation">,</span> logs<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Squared </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> to get </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>result<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">addOne</span><span class="token punctuation">(</span>x<span class="token operator">:</span> NumberWithLogs<span class="token punctuation">)</span><span class="token operator">:</span> NumberWithLogs <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> x<span class="token punctuation">.</span>result <span class="token operator">+</span> <span class="token number">1</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    result<span class="token operator">:</span> result<span class="token punctuation">,</span>
    logs<span class="token operator">:</span> x<span class="token punctuation">.</span>logs<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Added 1 to </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>x<span class="token punctuation">.</span>result<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> to get </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>result<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Below code will not work</span>
<span class="token function">square</span><span class="token punctuation">(</span><span class="token function">square</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token function">addOne</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>

<span class="token comment">// To fix it use a wrapper function</span>
<span class="token keyword">function</span> <span class="token function">wrapWithLogs</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> NumberWithLogs <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    result<span class="token operator">:</span> x<span class="token punctuation">,</span>
    logs<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">square</span><span class="token punctuation">(</span>x<span class="token operator">:</span> NumberWithLogs<span class="token punctuation">)</span><span class="token operator">:</span> NumberWithLogs <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> x<span class="token punctuation">.</span>result <span class="token operator">*</span> x<span class="token punctuation">.</span>result
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    result<span class="token operator">:</span> result<span class="token punctuation">,</span>
    logs<span class="token operator">:</span> x<span class="token punctuation">.</span>logs<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Squared </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>x<span class="token punctuation">.</span>result<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> to get </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>result<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">square</span><span class="token punctuation">(</span><span class="token function">square</span><span class="token punctuation">(</span><span class="token function">wrapWithLogs</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token function">addOne</span><span class="token punctuation">(</span><span class="token function">wrapWithLogs</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// Refactor the above functions (same logic)</span>
<span class="token keyword">function</span> <span class="token function">square</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> NumberWithLogs <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> x <span class="token operator">*</span> x

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    result<span class="token operator">:</span> result<span class="token punctuation">,</span>
    logs<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Squared </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> to get </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>result<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">runWithLogs</span><span class="token punctuation">(</span>
  input<span class="token operator">:</span> NumberWithLogs<span class="token punctuation">,</span>
  <span class="token function-variable function">transform</span><span class="token operator">:</span> <span class="token punctuation">(</span>_<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> NumberWithLogs<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> NumberWithLogs <span class="token punctuation">{</span>
  <span class="token keyword">const</span> newNumberWithLogs <span class="token operator">=</span> <span class="token function">transform</span><span class="token punctuation">(</span>input<span class="token punctuation">.</span>result<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    result<span class="token operator">:</span> newNumberWithLogs<span class="token punctuation">.</span>result<span class="token punctuation">,</span>
    logs<span class="token operator">:</span> input<span class="token punctuation">.</span>logs<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>newNumberWithLogs<span class="token punctuation">.</span>logs<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">runWithLogs</span><span class="token punctuation">(</span><span class="token function">wrapWithLogs</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> addOne<span class="token punctuation">)</span>

<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">wrapWithLogs</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token function">runWithLogs</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> addOne<span class="token punctuation">)</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token function">runWithLogs</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> square<span class="token punctuation">)</span>
</code></pre></div><ul><li><p><strong>Option</strong> (also know as Maybe):</p><ul><li><code>number = a number</code></li><li><code>Option&lt;number&gt; = a number OR nothing</code></li><li><code>Option&lt;User&gt; = a User OR nothing</code></li></ul></li></ul><p><em>Example:</em></p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">getPetNickname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> user<span class="token operator">:</span> User <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token function">getCurrentUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>user <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> user
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> userPet<span class="token operator">:</span> Pet <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token function">getPet</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>userPet <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> userPet
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> userPetNickname<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token function">getNickname</span><span class="token punctuation">(</span>userPet<span class="token punctuation">)</span>

  <span class="token keyword">return</span> userPetNickname
<span class="token punctuation">}</span>

<span class="token comment">// Same but using Option&lt;T&gt;</span>
<span class="token keyword">function</span> <span class="token function">getPetNickname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Option<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> user<span class="token operator">:</span> Option<span class="token operator">&lt;</span>User<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token function">getCurrentUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> userPet<span class="token operator">:</span> Option<span class="token operator">&lt;</span>Pet<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token function">run</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> getPet<span class="token punctuation">)</span>

  <span class="token keyword">const</span> userPetNickname<span class="token operator">:</span> Option<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token function">run</span><span class="token punctuation">(</span>userPet<span class="token punctuation">,</span> getNickname<span class="token punctuation">)</span>

  <span class="token keyword">return</span> userPetNickname
<span class="token punctuation">}</span>

<span class="token keyword">const</span> doors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;blue&#39;</span><span class="token punctuation">]</span>

<span class="token comment">// With \`flatMap\` List&#39;s run function</span>
<span class="token keyword">const</span> doorAndCoinPossibilites <span class="token operator">=</span> doors<span class="token punctuation">.</span><span class="token function">flatMap</span><span class="token punctuation">(</span><span class="token punctuation">(</span>door<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>door <span class="token operator">+</span> <span class="token string">&#39; heads&#39;</span><span class="token punctuation">,</span> door <span class="token operator">+</span> <span class="token string">&#39; tails&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// Explicit map, then flatten</span>
<span class="token keyword">const</span> unFlattenedDoorAndCoinPossibilites <span class="token operator">=</span> doors<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>door<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
  door <span class="token operator">+</span> <span class="token string">&#39; heads&#39;</span><span class="token punctuation">,</span>
  door <span class="token operator">+</span> <span class="token string">&#39; tails&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> doorAndCoinPossibilites2 <span class="token operator">=</span> unFlattenedDoorAndCoinPossibilites<span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><table><thead><tr><th>Monad</th><th>Abstracts Away</th></tr></thead><tbody><tr><td><code>NumberWithLogs</code>/<code>Writer</code></td><td>Accumulation of log data</td></tr><tr><td><code>Option</code></td><td>Possibility of missing values</td></tr><tr><td><code>Future</code>/<code>Promise</code></td><td>Possibility for values to only become avaible later</td></tr><tr><td><code>List</code></td><td>Adstracts away branching computation</td></tr></tbody></table>`,11),e=[o];function c(u,l){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","Functional.html.vue"]]);export{r as default};
