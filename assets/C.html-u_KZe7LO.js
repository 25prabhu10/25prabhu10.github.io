import{_ as n,o as s,c as a,e as t}from"./app-jDLxG9B3.js";const p={},e=t(`<h1 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C</h1><p>C is a general-purpose, procedural computer programming language</p><ul><li>C is a strongly-typed, weakly checked language</li></ul><p><em>Example:</em></p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="a-historical-perspective" tabindex="-1"><a class="header-anchor" href="#a-historical-perspective" aria-hidden="true">#</a> A Historical Perspective</h2><ul><li><code>www.cc4e.com</code> refers to <code>cc</code> command which stands for C Compiler</li></ul><h2 id="data-types" tabindex="-1"><a class="header-anchor" href="#data-types" aria-hidden="true">#</a> Data Types</h2><h3 id="arrays" tabindex="-1"><a class="header-anchor" href="#arrays" aria-hidden="true">#</a> Arrays</h3><p><em>Definition:</em> Contiguous area of memory consisting of equal-size elements</p><ul><li><p>Declared with size inside square brackets <code>[]</code></p></li><li><p>It can be declared without size, but in this case it must be initialized with items. The size of the array will be equal to the number of items</p></li><li><p>If number of items are less than the declared size of an array, the rest of the places will be filled with <code>0</code></p></li><li><p>If an array is declared and never initialized then it will contain garbage values</p></li></ul><p><em>Example:</em></p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> A<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> B<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>        <span class="token comment">// SIZE 3</span>
    <span class="token keyword">int</span> C<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>       <span class="token comment">// {1,2,3,0,0}</span>
    <span class="token keyword">int</span> D<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>                   <span class="token comment">// {3213, 234324}</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Completed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="code-styles" tabindex="-1"><a class="header-anchor" href="#code-styles" aria-hidden="true">#</a> Code Styles</h2><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token comment">// Allman</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>x <span class="token operator">==</span> y<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token function">func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">func2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Kernighan &amp; Ritchie</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>x <span class="token operator">==</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">func2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// GNU</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>x <span class="token operator">==</span> y<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token function">func1</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">func2</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token comment">// Whitesmiths</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>x <span class="token operator">==</span> y<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    <span class="token function">func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">func2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token comment">// Horstmann</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>x <span class="token operator">==</span> y<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token function">func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">func2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Haskell style</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>x <span class="token operator">==</span> y<span class="token punctuation">)</span>
  <span class="token punctuation">{</span> <span class="token function">func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">;</span> <span class="token function">func2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token comment">// Ratliff style</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>x <span class="token operator">==</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">func2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token comment">// Lisp style</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>x <span class="token operator">==</span> y<span class="token punctuation">)</span>
  <span class="token punctuation">{</span> <span class="token function">func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">func2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre></div><h2 id="memory-leaks" tabindex="-1"><a class="header-anchor" href="#memory-leaks" aria-hidden="true">#</a> Memory Leaks</h2><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h&gt;</span></span>


</code></pre></div><h2 id="references" tabindex="-1"><a class="header-anchor" href="#references" aria-hidden="true">#</a> References</h2><ul><li>(C - book)[https://flaviocopes.com/book/c/]</li></ul>`,19),o=[e];function c(u,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","C.html.vue"]]);export{k as default};
