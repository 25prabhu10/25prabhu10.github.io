import{_ as a,c as s,o as i,a3 as t}from"./chunks/framework.6s30bTua.js";const e="/assets/example.Dv50rph5.png",c=JSON.parse('{"title":"Typography","description":"Typography is the art and technique of arranging type to make written language legible, readable and appealing when displayed.","frontmatter":{"title":"Typography","description":"Typography is the art and technique of arranging type to make written language legible, readable and appealing when displayed."},"headers":[],"relativePath":"Languages/HTML/Typography/Typography.md","filePath":"Languages/HTML/Typography/Typography.md","lastUpdated":1666469073000}'),n={name:"Languages/HTML/Typography/Typography.md"},h=t('<h1 id="typography" tabindex="-1">Typography <a class="header-anchor" href="#typography" aria-label="Permalink to &quot;Typography&quot;">​</a></h1><p>Typography is the art and technique of arranging type, type meaning letters and characters.</p><h2 id="typeface-vs-font" tabindex="-1">Typeface vs Font <a class="header-anchor" href="#typeface-vs-font" aria-label="Permalink to &quot;Typeface vs Font&quot;">​</a></h2><h2 id="anatomy-of-a-typeface" tabindex="-1">Anatomy of a Typeface <a class="header-anchor" href="#anatomy-of-a-typeface" aria-label="Permalink to &quot;Anatomy of a Typeface&quot;">​</a></h2><p><img src="'+e+`" alt="Example"></p><ol><li><p><strong>Baseline</strong>: The line where the letters sit</p></li><li><p><strong>Cap Height</strong>: The distance from the baseline to the top of the capital letter</p></li><li><p><strong>X-height</strong>: Located in between the baseline and the cap height, it&#39;s the height of the body of the lowercase letter. (In this case, it&#39;s the letters &#39;a&#39;,&#39;u&#39;, and &#39;y&#39;)</p></li><li><p><strong>Bowl</strong>: The curved part of the character that encloses the circular or curved parts of some letters, like &#39;d,&#39; &#39;b,&#39; &#39;o,&#39; &#39;D,&#39; and &#39;B.&#39; (In this case, it&#39;s that round shape sticking off the letter &#39;a&#39;)</p></li><li><p><strong>Serif</strong>: The slight projection finishing off a stroke of a letter in certain typefaces. (In this case, it&#39;s that little foot sticking off the letter &#39;l&#39;)</p></li><li><p><strong>Descender</strong>: The longest point on a letter that falls beyond the baseline</p></li></ol><h2 id="variable-fonts" tabindex="-1">Variable Fonts <a class="header-anchor" href="#variable-fonts" aria-label="Permalink to &quot;Variable Fonts&quot;">​</a></h2><ul><li><strong>DECOVAR Font</strong></li></ul><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes ayu-dark ayu-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">@font-face</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> {</span></span>
<span class="line"><span style="--shiki-light:#39BAE6;--shiki-dark:#39BAE6;">  font-family</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">:</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;"> &quot;Source Sans Variable&quot;</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#39BAE6;--shiki-dark:#39BAE6;">  src</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">:</span><span style="--shiki-light:#F07178;--shiki-dark:#F07178;"> url</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;">&quot;ss-variable.woff&quot;</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">) </span><span style="--shiki-light:#F07178;--shiki-dark:#F07178;">format</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;">&quot;woff-variations&quot;</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">)</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#39BAE6;--shiki-dark:#39BAE6;">  font-weight</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">:</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 200</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 700</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">h1</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> {</span></span>
<span class="line"><span style="--shiki-light:#39BAE6;--shiki-dark:#39BAE6;">  font-family</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">:</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;"> &quot;Source Sans Variable&quot;</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#39BAE6;--shiki-dark:#39BAE6;">  font-weight</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">:</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 658.756</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">}</span></span></code></pre></div>`,9),l=[h];function p(r,o,B,k,g,d){return i(),s("div",null,l)}const F=a(n,[["render",p]]);export{c as __pageData,F as default};