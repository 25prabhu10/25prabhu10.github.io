import{_ as n,o as s,c as a,e as t}from"./app-jDLxG9B3.js";const e={},p=t(`<h1 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C++</h1><p>Main function can be used without <code>return</code> statement. It by default includes <code>return 0</code></p><ul><li>Think operators as functions like: <code>cout &lt;&lt; &quot;Hello&quot; &lt;&lt; endl;</code> as <code>cout.print(&quot;Hello).print(endl);</code></li></ul><h2 id="compiling-and-linking" tabindex="-1"><a class="header-anchor" href="#compiling-and-linking" aria-hidden="true">#</a> Compiling and Linking</h2><ul><li><p>C++ programs consist of <strong>source files</strong> and <strong>headers</strong>.</p><ul><li>Source files and headers are usually text files, but need not be.</li></ul></li><li><p>Much of the text in C++ source and header files represents <strong>declarations</strong></p><ul><li>The declarations establish the existence of <strong>entities</strong> such as functions, namespaces, objects, templates, types, and values</li></ul></li><li><p>C++ has no specific rules about which declarations must go into source files and which must go into headers</p></li><li><p>For a function, we typically:</p><ul><li><code>declare</code> it in a header, and...</li><li><code>define</code> it in a corresponding source file</li></ul></li><li><p>However, for a function that&#39;s inline, <code>constexpr</code>, or <code>consteval</code>, then:</p><ul><li><code>define</code> it in a header file</li></ul></li></ul><p>Steps:</p><ol><li><p>Pre-processor: Initial stage. They copy and paste all the code from the header file.</p><ul><li>Header files (they don&#39;t get compiled)</li></ul></li><li><p>Compilation: Compiler transforms to machine code.</p><ul><li><p>Solution Configuration: Rules and configurations to build the project</p></li><li><p>Solution Platforms: Platform that is being targeted</p></li><li><p>Only CPP files are complied not Header files</p></li><li><p>Every CPP file is complied individually into a respective Object file</p></li><li><p>Liker: Stitches all these Object file into an executable file</p></li><li><p>Compiler compiles a CPP file if it only contains function declaration without and definition and is used inside that file.</p></li><li><p>CPP files are called Translation Units (Files have no meaning to CPP Compiler)</p></li><li><p>Use <code>-E</code> to Pre-process output</p></li></ul></li></ol><p>Headers and Namespaces:</p><ul><li><p>Pre-processor statements:</p><ul><li><code>#pragma once</code>: Include only once</li></ul></li><li><p>Namespace:</p><div class="language-cpp" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// sum.h</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression">once</span></span>

<span class="token keyword">namespace</span> customSum <span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// sum.cpp</span>
<span class="token keyword">namespace</span> customSum <span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// Main file</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;sum.h&quot;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> customSum<span class="token double-colon punctuation">::</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ul><p>Dynamic type using <code>auto</code></p><p>Maps are like JavaScript objects.</p><h2 id="arrays" tabindex="-1"><a class="header-anchor" href="#arrays" aria-hidden="true">#</a> Arrays</h2><div class="language-cpp" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> A<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> A<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// FOR EACH LOOP</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> x <span class="token operator">:</span> A<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> x <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    cout <span class="token operator">&lt;&lt;</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Completed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>Size of an array can be dynamically provided, but during declaration the items cannot be initialized.</li></ul><div class="language-cpp" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Enter size&quot;</span><span class="token punctuation">;</span>
    cin <span class="token operator">&gt;&gt;</span> n<span class="token punctuation">;</span>
    <span class="token keyword">int</span> A<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="custom-container warning"><p class="custom-container-title">NOTE</p><p>Only in new C compiler dynamic size declaration is available.</p></div><h2 id="header-files" tabindex="-1"><a class="header-anchor" href="#header-files" aria-hidden="true">#</a> Header Files</h2><ul><li>Mathematical Programming</li><li>Logical Programming</li></ul><h2 id="visual-studio" tabindex="-1"><a class="header-anchor" href="#visual-studio" aria-hidden="true">#</a> Visual Studio</h2><ul><li>New project --&gt; Empty Project</li></ul><h2 id="virtual-functions" tabindex="-1"><a class="header-anchor" href="#virtual-functions" aria-hidden="true">#</a> Virtual Functions</h2><ul><li>Dynamic Dispatch</li><li>V Table</li></ul><p>Pure Virtual Functions are similar to Interface or Abstract Class.</p>`,23),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","CPP.html.vue"]]);export{r as default};
