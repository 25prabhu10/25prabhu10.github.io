import{_ as s,r as t,o as p,c as o,b as n,d as c,a as e,e as l}from"./app-jDLxG9B3.js";const u={},k=l(`<h1 id="css-snippets" tabindex="-1"><a class="header-anchor" href="#css-snippets" aria-hidden="true">#</a> CSS Snippets</h1><h2 id="display" tabindex="-1"><a class="header-anchor" href="#display" aria-hidden="true">#</a> Display</h2><ul><li><p>Centered always:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parent blue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box coral<span class="token punctuation">&quot;</span></span> <span class="token attr-name">contenteditable</span><span class="token punctuation">&gt;</span></span>:)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.parent</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">place-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></li><li><p>Auto vertical to horizontal display:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parent white<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box green<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box green<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box green<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.parent</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.box</span> <span class="token punctuation">{</span>
    <span class="token comment">/* flex: &lt;flex-grow&gt; &lt;flex-shrink&gt; &lt;baseWidth&gt; */</span>

    <span class="token property">flex</span><span class="token punctuation">:</span> 1 1 150px<span class="token punctuation">;</span> <span class="token comment">/*  Stretching: fill space*/</span>
    <span class="token property">flex</span><span class="token punctuation">:</span> 0 1 150px<span class="token punctuation">;</span> <span class="token comment">/*  No stretching: */</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></li><li><p>Side-bars:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>section yellow<span class="token punctuation">&quot;</span></span> <span class="token attr-name">contenteditable</span><span class="token punctuation">&gt;</span></span>Min: 150px / Max: 25%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>section purple<span class="token punctuation">&quot;</span></span> <span class="token attr-name">contenteditable</span><span class="token punctuation">&gt;</span></span>
    This element takes the second grid position (1fr), meaning it takes up the
    rest of the remaining space.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.parent</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>

    <span class="token comment">/* grid-template-columns: minmax(&lt;min&gt;, &lt;max&gt;) ...; */</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">minmax</span><span class="token punctuation">(</span>150px<span class="token punctuation">,</span> 25%<span class="token punctuation">)</span> 1fr<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></li><li><p>Pancake Stack: Header - Main - Footer</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>blue section<span class="token punctuation">&quot;</span></span> <span class="token attr-name">contenteditable</span><span class="token punctuation">&gt;</span></span>Header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>coral section<span class="token punctuation">&quot;</span></span> <span class="token attr-name">contenteditable</span><span class="token punctuation">&gt;</span></span>Main<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>purple section<span class="token punctuation">&quot;</span></span> <span class="token attr-name">contenteditable</span><span class="token punctuation">&gt;</span></span>Footer Content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.parent</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> auto 1fr auto<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></li><li><p>Holy Grail Layout:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pink section<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left-side blue section<span class="token punctuation">&quot;</span></span> <span class="token attr-name">contenteditable</span><span class="token punctuation">&gt;</span></span>Left Sidebar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>section coral<span class="token punctuation">&quot;</span></span> <span class="token attr-name">contenteditable</span><span class="token punctuation">&gt;</span></span>Main Content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right-side yellow section<span class="token punctuation">&quot;</span></span> <span class="token attr-name">contenteditable</span><span class="token punctuation">&gt;</span></span>Right Sidebar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>green section<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.parent</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-template</span><span class="token punctuation">:</span> auto 1fr auto / auto 1fr auto<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">header</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span>
    <span class="token property">grid-column</span><span class="token punctuation">:</span> 1 / 4<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.left-side</span> <span class="token punctuation">{</span>
    <span class="token property">grid-column</span><span class="token punctuation">:</span> 1 / 2<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">main</span> <span class="token punctuation">{</span>
    <span class="token property">grid-column</span><span class="token punctuation">:</span> 2 / 3<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.right-side</span> <span class="token punctuation">{</span>
    <span class="token property">grid-column</span><span class="token punctuation">:</span> 3 / 4<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">footer</span> <span class="token punctuation">{</span>
    <span class="token property">grid-column</span><span class="token punctuation">:</span> 1 / 4<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></li><li><p>12-Span Grid:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parent white<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>span-12 green section<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Span 12<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>span-6 coral section<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Span 6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>span-4 blue section<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Span 4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>span-2 yellow section<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Span 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.parent</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>12<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.span-12</span> <span class="token punctuation">{</span>
    <span class="token property">grid-column</span><span class="token punctuation">:</span> 1 / span 12<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.span-6</span> <span class="token punctuation">{</span>
    <span class="token property">grid-column</span><span class="token punctuation">:</span> 1 / span 6<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.span-4</span> <span class="token punctuation">{</span>
    <span class="token property">grid-column</span><span class="token punctuation">:</span> 4 / span 4<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.span-2</span> <span class="token punctuation">{</span>
    <span class="token property">grid-column</span><span class="token punctuation">:</span> 3 / span 2<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/* centering text */</span>
  <span class="token selector">.section</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">place-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></li><li><p>RAM (Repeat, Auto, Minmax):</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parent white<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box pink<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box purple<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box blue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box green<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.parent</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-gap</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>

    <span class="token comment">/* grid-template-columns: repeat(auto-fill, minmax(&lt;base&gt;, 1fr)) */</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>auto-fit<span class="token punctuation">,</span> <span class="token function">minmax</span><span class="token punctuation">(</span>150px<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></li><li><p>Min and max size:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parent white<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>card purple<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Title Here<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visual yellow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
      Descriptive Text. Lorem ipsum dolor sit, amet consectetur adipisicing
      elit. Sed est error repellat veritatis.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.parent</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">place-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.card</span> <span class="token punctuation">{</span>
    <span class="token comment">/* clamp(&lt;min&gt;, &lt;actual&gt;, &lt;max&gt;)*/</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">clamp</span><span class="token punctuation">(</span>23ch<span class="token punctuation">,</span> 50%<span class="token punctuation">,</span> 46ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.visual</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 125px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></li><li><p>Maintain Aspect ratio:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parent white<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>card blue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Video Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visual green<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Descriptive text for aspect ratio card demo.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">parent</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">place-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.visual</span> <span class="token punctuation">{</span>
    <span class="token comment">/* aspect-ratio: &lt;width&gt; / &lt;height&gt; */</span>
    <span class="token property">aspect-ratio</span><span class="token punctuation">:</span> 16 / 9<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.card</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></li></ul><h2 id="text" tabindex="-1"><a class="header-anchor" href="#text" aria-hidden="true">#</a> Text</h2><ul><li><p>Truncate Text:</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
  <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span> <span class="token comment">/* number of lines */</span>
  <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>Gradient Text:</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">h1</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> <span class="token function">rgb</span><span class="token punctuation">(</span>67<span class="token punctuation">,</span> 124<span class="token punctuation">,</span> 205<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">rgb</span><span class="token punctuation">(</span>69<span class="token punctuation">,</span> 214<span class="token punctuation">,</span> 202<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background-clip</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span>
  <span class="token property">-webkit-background-clip</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>Vertical Text:</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">h1</span> <span class="token punctuation">{</span>
  <span class="token property">writing-mode</span><span class="token punctuation">:</span> vertical-lr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>Blend Modes:</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">h1</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  // <span class="token property">mix-blend-mode</span><span class="token punctuation">:</span> screen<span class="token punctuation">;</span> // white is cutout and black is opaque
  <span class="token property">mix-blend-mode</span><span class="token punctuation">:</span> multiply<span class="token punctuation">;</span> // black is cutout and white is opaque
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>Text (or any content) as background:</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;data:image/svg+xml,\\
    &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 100 100&quot;&gt;\\
    &lt;style&gt;@keyframes foo %7Bto %7B transform: rotate(-20deg)}}&lt;/style&gt;\\
    &lt;text y=&quot;1em&quot; font-size=&quot;100&quot; style=&quot;animation: foo 1s infinite alternate&quot;&gt;🚀&lt;/text&gt;\\
    &lt;/svg&gt;&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">background-size</span><span class="token punctuation">:</span> 100px 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ul><h2 id="carousel" tabindex="-1"><a class="header-anchor" href="#carousel" aria-hidden="true">#</a> Carousel</h2><ul><li><p>Snap:</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 20rem<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 20rem<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">overflow-x</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span>
  <span class="token property">scroll-snap-type</span><span class="token punctuation">:</span> x proximity<span class="token punctuation">;</span> <span class="token comment">/* mandatory */</span>
<span class="token punctuation">}</span>

<span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">min-width</span><span class="token punctuation">:</span> 20rem<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">scroll-snap-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ul><h2 id="svg" tabindex="-1"><a class="header-anchor" href="#svg" aria-hidden="true">#</a> SVG</h2><ul><li><p>Animated border:</p><div class="language-css" data-ext="css"><pre class="language-css"><code>&lt;svg&gt;
&lt;style&gt;
<span class="token atrule"><span class="token rule">@keyframes</span> marching-ants</span> <span class="token punctuation">{</span><span class="token selector">to</span><span class="token punctuation">{</span><span class="token property">stroke-dashoffset</span><span class="token punctuation">:</span> -15px<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
&lt;/style&gt;
&lt;rect width=<span class="token string">&quot;100%&quot;</span> height=<span class="token string">&quot;100%&quot;</span> style=<span class="token string">&quot;stroke: black; stroke-widthL 4px; fill: none; stroke-dasharray: 10px 5px; animation: marching-ants 1s infintie linear;&quot;</span> /&gt;
&lt;/svg&gt;
</code></pre></div></li></ul><h2 id="references" tabindex="-1"><a class="header-anchor" href="#references" aria-hidden="true">#</a> References</h2>`,10),i={href:"https://1linelayouts.glitch.me/",target:"_blank",rel:"noopener noreferrer"};function r(g,d){const a=t("ExternalLinkIcon");return p(),o("div",null,[k,n("ul",null,[n("li",null,[n("a",i,[c("10 Modern CSS layout and sizing techniques"),e(a)])])])])}const v=s(u,[["render",r],["__file","CSS_Snippents.html.vue"]]);export{v as default};
