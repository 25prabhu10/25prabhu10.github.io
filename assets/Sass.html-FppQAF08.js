import{_ as t,r as e,o,c,b as n,d as a,a as p,e as l}from"./app-jDLxG9B3.js";const u={},i=l(`<h1 id="sass" tabindex="-1"><a class="header-anchor" href="#sass" aria-hidden="true">#</a> Sass</h1><p>Syntactically Awesome Style Sheets (Sass) is a CSS pre-processor, this helps users to use features like variables, nesting, mixins, inheritance, and catch errors during compilation. These features help in writing well structured, readable, maintainable, and scalable CSS.</p><p>A stylesheet language initially designed by Hampton Catlin and developed by Nathan Weizenbaum and Chris Eppstein.</p><h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h2><p>Sass can be written using any one of the two different syntax:</p><ol><li>Sass Syntax (<code>.sass</code>): Based on <em>HAML</em> syntax style</li><li>Sassy CSS (SCSS) (<code>.scss</code>): Based on CSS3 syntax style (New)</li></ol><p>Debug: <code>@debug $number</code></p><h2 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables</h2><p>Variables in Sass are used for reusing values</p><p><code>$</code> symbol is prefixed to create variable</p><ul><li><p>SCSS:</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$font-stack</span></span><span class="token punctuation">:</span> Helvetica<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$primary-color</span></span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>

<span class="token selector">body </span><span class="token punctuation">{</span>
  <span class="token property">font</span><span class="token punctuation">:</span> 100% <span class="token variable">$font-stack</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$primary-color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>Sass:</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$font-stack</span></span><span class="token punctuation">:</span> Helvetica<span class="token punctuation">,</span> sans-serif
<span class="token property"><span class="token variable">$primary-color</span></span><span class="token punctuation">:</span> #333

body
  <span class="token property">font</span><span class="token punctuation">:</span> 100% <span class="token variable">$font-stack</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$primary-color</span>
</code></pre></div></li><li><p>Resulting CSS:</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">font</span><span class="token punctuation">:</span>
    100% Helvetica<span class="token punctuation">,</span>
    sans-serif<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ul><div class="custom-container tip"><p class="custom-container-title">NOTE</p><p>CSS variables are used whenever dynamic styles need to be applied, like under media queries. Mixture of both CSS and Sass variables are used depending on the need. Check CSS variables vs Sass variables.</p></div><h2 id="nesting" tabindex="-1"><a class="header-anchor" href="#nesting" aria-hidden="true">#</a> Nesting</h2><p>Sass allows nesting CSS rules, similar to HTML nesting</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">nav </span><span class="token punctuation">{</span>
  <span class="token selector">ul </span><span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">li </span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">a </span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 6px 12px<span class="token punctuation">;</span>
    <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Resulting CSS:</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">nav ul</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">nav li</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">nav a</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 6px 12px<span class="token punctuation">;</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>Overly nesting could prove hard to maintain</p></blockquote><h2 id="partials" tabindex="-1"><a class="header-anchor" href="#partials" aria-hidden="true">#</a> Partials</h2><p>Create partial Sass files that contain little snippets of CSS that you can include in other Sass files</p><ul><li><p>Partial is a Sass file named with a <strong>leading underscore</strong>: <code>_some-partial.scss</code></p></li><li><p>Import the partial file into other Sass files using <code>@use</code> rule</p></li></ul><h2 id="modules" tabindex="-1"><a class="header-anchor" href="#modules" aria-hidden="true">#</a> Modules</h2><p>Split styles into multiple files and use <code>@use</code> rule to load this Sass file as a module</p><ul><li>This allows us to use its <a href="#variables">variables</a>, <a href="#mixins">mixins</a>, and <a href="#functions">functions</a></li></ul><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// _base.scss</span>
<span class="token property"><span class="token variable">$font-stack</span></span><span class="token punctuation">:</span> Helvetica<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$primary-color</span></span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>

<span class="token selector">body </span><span class="token punctuation">{</span>
  <span class="token property">font</span><span class="token punctuation">:</span> 100% <span class="token variable">$font-stack</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$primary-color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// styles.scss</span>
<span class="token keyword">@use</span> <span class="token string">&quot;base&quot;</span><span class="token punctuation">;</span>

<span class="token selector">.inverse </span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> base.<span class="token variable">$primary-color</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Resulting CSS:</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">font</span><span class="token punctuation">:</span>
    100% Helvetica<span class="token punctuation">,</span>
    sans-serif<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.inverse</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="mixins" tabindex="-1"><a class="header-anchor" href="#mixins" aria-hidden="true">#</a> Mixins</h2><p>Mixin lets you make <strong>groups of CSS declarations</strong> that you want to reuse throughout your site</p><ul><li><p>Pass in values to make your mixin more flexible</p></li><li><p>Create a mixin you use the <code>@mixin</code> directive</p></li><li><p>Use it as a CSS declaration starting with <code>@include</code></p></li></ul><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$theme</span></span><span class="token punctuation">:</span> DarkGray<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">$theme</span><span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token variable">$theme</span><span class="token punctuation">,</span> 0.25<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.info </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> theme<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.alert </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$theme</span></span><span class="token punctuation">:</span> DarkRed<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.success </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$theme</span></span><span class="token punctuation">:</span> DarkGreen<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Resulting CSS:</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.info</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> DarkGray<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>169<span class="token punctuation">,</span> 169<span class="token punctuation">,</span> 169<span class="token punctuation">,</span> 0.25<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.alert</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> DarkRed<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>139<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.25<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.success</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> DarkGreen<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 100<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.25<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="extend-inheritance" tabindex="-1"><a class="header-anchor" href="#extend-inheritance" aria-hidden="true">#</a> Extend/Inheritance</h2><p>Using <code>@extend</code> lets you share a set of CSS properties from one selector to another</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token comment">/* This CSS will print because %message-shared is extended. */</span>
<span class="token selector"><span class="token placeholder">%message-shared</span> </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// This CSS won&#39;t print because %equal-heights is never extended.</span>
<span class="token selector"><span class="token placeholder">%equal-heights</span> </span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.message </span><span class="token punctuation">{</span>
  <span class="token keyword">@extend</span> <span class="token placeholder selector">%message-shared</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.success </span><span class="token punctuation">{</span>
  <span class="token keyword">@extend</span> <span class="token placeholder selector">%message-shared</span><span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.error </span><span class="token punctuation">{</span>
  <span class="token keyword">@extend</span> <span class="token placeholder selector">%message-shared</span><span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Resulting CSS:</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.message,
.success,
.error,
.warning</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.success</span> <span class="token punctuation">{</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.error</span> <span class="token punctuation">{</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="operators" tabindex="-1"><a class="header-anchor" href="#operators" aria-hidden="true">#</a> Operators</h2><p>Doing math in CSS</p><ul><li>Math operators like <code>+</code>, <code>-</code>, <code>*</code>, <code>math.div()</code>, and <code>%</code></li></ul><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@use</span> <span class="token string">&quot;sass:math&quot;</span><span class="token punctuation">;</span>

<span class="token selector">article[role=&quot;main&quot;] </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> math.<span class="token function">div</span><span class="token punctuation">(</span>600px<span class="token punctuation">,</span> 960px<span class="token punctuation">)</span> <span class="token operator">*</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Resulting CSS:</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">article[role=&quot;main&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 62.5%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="functions" tabindex="-1"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> Functions</h2><p>Functions allow you to define complex operations on SassScript values that you can re-use throughout your stylesheet</p><ul><li>Use <a href="#mixins">mixins</a> for side-effects, and use functions just to compute values</li></ul><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@function</span> <span class="token function">pow</span><span class="token punctuation">(</span><span class="token variable">$base</span><span class="token punctuation">,</span> <span class="token variable">$exponent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property"><span class="token variable">$result</span></span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token keyword">@for</span> <span class="token variable">$_</span> <span class="token keyword">from</span> 1 <span class="token keyword">through</span> <span class="token selector"><span class="token variable">$exponent</span> </span><span class="token punctuation">{</span>
    <span class="token property"><span class="token variable">$result</span></span><span class="token punctuation">:</span> <span class="token variable">$result</span> <span class="token operator">*</span> <span class="token variable">$base</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">@return</span> <span class="token variable">$result</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.sidebar </span><span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token function">pow</span><span class="token punctuation">(</span>4<span class="token punctuation">,</span> 3<span class="token punctuation">)</span> <span class="token operator">*</span> 1px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Resulting CSS:</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.sidebar</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> 64px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="utilities" tabindex="-1"><a class="header-anchor" href="#utilities" aria-hidden="true">#</a> Utilities</h2><ul><li><p>Generate <code>padding</code> utility classes with different padding values:</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$base-size</span></span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sizes</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;size-1&quot;</span><span class="token punctuation">:</span> <span class="token variable">$base-size</span> <span class="token operator">*</span> 0.25<span class="token punctuation">,</span>
  <span class="token string">&quot;size-2&quot;</span><span class="token punctuation">:</span> <span class="token variable">$base-size</span> <span class="token operator">*</span> 0.5<span class="token punctuation">,</span>
  <span class="token string">&quot;size-3&quot;</span><span class="token punctuation">:</span> <span class="token variable">$base-size</span> <span class="token operator">*</span> 0.75<span class="token punctuation">,</span>
  <span class="token string">&quot;size-4&quot;</span><span class="token punctuation">:</span> <span class="token variable">$base-size</span> <span class="token operator">*</span> 1<span class="token punctuation">,</span>
  <span class="token string">&quot;size-5&quot;</span><span class="token punctuation">:</span> <span class="token variable">$base-size</span> <span class="token operator">*</span> 1.5<span class="token punctuation">,</span>
  <span class="token string">&quot;size-6&quot;</span><span class="token punctuation">:</span> <span class="token variable">$base-size</span> <span class="token operator">*</span> 2<span class="token punctuation">,</span>
  <span class="token string">&quot;size-7&quot;</span><span class="token punctuation">:</span> <span class="token variable">$base-size</span> <span class="token operator">*</span> 2.5<span class="token punctuation">,</span>
  <span class="token string">&quot;size-8&quot;</span><span class="token punctuation">:</span> <span class="token variable">$base-size</span> <span class="token operator">*</span> 3<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$sides</span></span><span class="token punctuation">:</span> inline<span class="token punctuation">,</span> inline-start<span class="token punctuation">,</span> inline-end<span class="token punctuation">,</span> block<span class="token punctuation">,</span> block-start<span class="token punctuation">;</span>

<span class="token keyword">@use</span> <span class="token string">&quot;sass:string&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$size</span>, <span class="token variable">$size-value</span> in <span class="token variable">$sizes</span> </span><span class="token punctuation">{</span>
  <span class="token property"><span class="token variable">$number</span></span><span class="token punctuation">:</span> string.<span class="token function">slice</span><span class="token punctuation">(</span><span class="token variable">$size</span><span class="token punctuation">,</span> 6<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token selector">.padding </span><span class="token punctuation">{</span>
    <span class="token selector"><span class="token parent important">&amp;</span>-<span class="token variable">#{$number}</span> </span><span class="token punctuation">{</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token variable">$size-value</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$side</span> in <span class="token variable">$sides</span> </span><span class="token punctuation">{</span>
      <span class="token selector"><span class="token parent important">&amp;</span>-<span class="token variable">#{$side}</span>-<span class="token variable">#{$number}</span> </span><span class="token punctuation">{</span>
        <span class="token property">padding-<span class="token variable">#{$side}</span></span><span class="token punctuation">:</span> <span class="token variable">$size</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Resulting CSS:</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.padding-1</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0.25rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.padding-inline-1</span> <span class="token punctuation">{</span>
  <span class="token property">padding-inline</span><span class="token punctuation">:</span> <span class="token string">&quot;size-1&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.padding-inline-start-1</span> <span class="token punctuation">{</span>
  <span class="token property">padding-inline-start</span><span class="token punctuation">:</span> <span class="token string">&quot;size-1&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.padding-inline-end-1</span> <span class="token punctuation">{</span>
  <span class="token property">padding-inline-end</span><span class="token punctuation">:</span> <span class="token string">&quot;size-1&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.padding-block-1</span> <span class="token punctuation">{</span>
  <span class="token property">padding-block</span><span class="token punctuation">:</span> <span class="token string">&quot;size-1&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.padding-block-start-1</span> <span class="token punctuation">{</span>
  <span class="token property">padding-block-start</span><span class="token punctuation">:</span> <span class="token string">&quot;size-1&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 
.
.
.
*/</span>
<span class="token selector">.padding-block-start-8</span> <span class="token punctuation">{</span>
  <span class="token property">padding-block-start</span><span class="token punctuation">:</span> <span class="token string">&quot;size-8&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>Utility media query using <code>@mixins</code>:</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@use</span> <span class="token string">&quot;sass:map&quot;</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$breakpoints</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token property">small</span><span class="token punctuation">:</span> 40em<span class="token punctuation">,</span>
  <span class="token property">medium</span><span class="token punctuation">:</span> 65em<span class="token punctuation">,</span>
  <span class="token property">large</span><span class="token punctuation">:</span> 90em<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">@mixin</span> <span class="token function">mq</span><span class="token punctuation">(</span><span class="token variable">$key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property"><span class="token variable">$size</span></span><span class="token punctuation">:</span> map.<span class="token function">get</span><span class="token punctuation">(</span><span class="token variable">$breakpoints</span><span class="token punctuation">,</span> <span class="token variable">$key</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> <span class="token variable">$size</span><span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">@content</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.card </span><span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>

  <span class="token keyword">@include</span> <span class="token function">mq</span><span class="token punctuation">(</span>small<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Resulting CSS:</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.card</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 40em<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.card</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ul><h2 id="references" tabindex="-1"><a class="header-anchor" href="#references" aria-hidden="true">#</a> References</h2>`,53),r={href:"https://sass-lang.com/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://anotheruiguy.gitbooks.io/sassintherealworld_book-i/content/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://sass-guidelin.es/",target:"_blank",rel:"noopener noreferrer"};function g(h,y){const s=e("ExternalLinkIcon");return o(),c("div",null,[i,n("ul",null,[n("li",null,[n("p",null,[n("a",r,[a("Sass"),p(s)])])]),n("li",null,[n("p",null,[n("a",k,[a("Another UI Guy - Sass Notes"),p(s)])])]),n("li",null,[n("p",null,[n("a",d,[a("Sass Guidelines"),p(s)])])])])])}const v=t(u,[["render",g],["__file","Sass.html.vue"]]);export{v as default};
