import{_ as n,o as s,c as a,e as p}from"./app-jDLxG9B3.js";const t={},o=p(`<h1 id="matrices" tabindex="-1"><a class="header-anchor" href="#matrices" aria-hidden="true">#</a> Matrices</h1><ol><li><p>Diagonal Matrix: A square matrix in which every element except the main diagonal elements is zero is called a Diagonal Matrix. A matrix <em>M</em> of size <em>ixj</em> should have <code>M[i,j] = 0 if i != j</code>.</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">Matrix</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> A<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">Set</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Matrix</span> <span class="token operator">*</span>m<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">,</span> <span class="token keyword">int</span> x<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> j<span class="token punctuation">)</span>
        m<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">Get</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Matrix</span> <span class="token operator">*</span>m<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> j<span class="token punctuation">)</span>
        <span class="token keyword">return</span> m<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">Display</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Matrix</span> m<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">,</span> j<span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">.</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> m<span class="token punctuation">.</span>n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> j<span class="token punctuation">)</span>
                <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d &quot;</span><span class="token punctuation">,</span> m<span class="token punctuation">.</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">else</span>
                <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;0 &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">Matrix</span> m<span class="token punctuation">;</span>

    m<span class="token punctuation">.</span>n <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>

    <span class="token function">Set</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>m<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">Set</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>m<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">Set</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>m<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">Set</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>m<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;(3, 3): %d&quot;</span><span class="token punctuation">,</span> <span class="token function">Get</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>m<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">Display</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// OUTPUT:</span>
<span class="token comment">// (3, 3): 4</span>
<span class="token comment">//</span>
<span class="token comment">// 5 0 0 0</span>
<span class="token comment">// 0 7 0 0</span>
<span class="token comment">// 0 0 4 0</span>
<span class="token comment">// 0 0 0 9</span>
</code></pre></div><div class="language-cpp" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">Diagonal</span>
<span class="token punctuation">{</span>
<span class="token keyword">private</span><span class="token operator">:</span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>A<span class="token punctuation">;</span>

<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token function">Diagonal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">Diagonal</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">~</span><span class="token function">Diagonal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">void</span> <span class="token function">Set</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">,</span> <span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token function">Get</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">Display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">Diagonal</span><span class="token double-colon punctuation">::</span><span class="token function">Diagonal</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    A <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token operator">-&gt;</span>n <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Diagonal</span><span class="token double-colon punctuation">::</span><span class="token function">Diagonal</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    A <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>size<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token operator">-&gt;</span>n <span class="token operator">=</span> n<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Diagonal</span><span class="token double-colon punctuation">::</span><span class="token operator">~</span><span class="token function">Diagonal</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">delete</span><span class="token punctuation">[</span><span class="token punctuation">]</span> A<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token class-name">Diagonal</span><span class="token double-colon punctuation">::</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">,</span> <span class="token keyword">int</span> x<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> j<span class="token punctuation">)</span>
        A<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token class-name">Diagonal</span><span class="token double-colon punctuation">::</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> j<span class="token punctuation">)</span>
        <span class="token keyword">return</span> A<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token class-name">Diagonal</span><span class="token double-colon punctuation">::</span><span class="token function">Display</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">,</span> j<span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> j<span class="token punctuation">)</span>
                <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d &quot;</span><span class="token punctuation">,</span> A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">else</span>
                <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;0 &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Diagonal <span class="token function">m</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    m<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    m<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    m<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    m<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;(3, 3): %d&quot;</span><span class="token punctuation">,</span> m<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    m<span class="token punctuation">.</span><span class="token function">Display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// OUTPUT:</span>
<span class="token comment">// (3, 3): 4</span>
<span class="token comment">//</span>
<span class="token comment">// 5 0 0 0</span>
<span class="token comment">// 0 7 0 0</span>
<span class="token comment">// 0 0 4 0</span>
<span class="token comment">// 0 0 0 9</span>
</code></pre></div></li><li><p>Lower Triangular Matrix: A square matrix is called lower triangular if all the entries above the main diagonal are zero. A matrix <em>M</em> of size <em>ixj</em> should have <code>M[i,j] = 0 if i &lt; j</code></p><ul><li><p>Row major implementation:</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">Lower</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>A<span class="token punctuation">;</span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">Set</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Lower</span> _m<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">,</span> <span class="token keyword">int</span> x<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> j<span class="token punctuation">)</span>
    m<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token punctuation">(</span>i <span class="token function">_</span> <span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">Get</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Lower</span> _m<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> j<span class="token punctuation">)</span>
        <span class="token keyword">return</span> m<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token punctuation">(</span>i <span class="token function">_</span> <span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">Display</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Lower</span> m<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">,</span> j<span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> m<span class="token punctuation">.</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> m<span class="token punctuation">.</span>n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> j<span class="token punctuation">)</span>
                <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d &quot;</span><span class="token punctuation">,</span> m<span class="token punctuation">.</span>A<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token punctuation">(</span>i <span class="token operator">*</span> <span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">else</span>
                <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;0 &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">Lower</span> m<span class="token punctuation">;</span>
    <span class="token keyword">int</span> i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> temp <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Enter Dimensions: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>m<span class="token punctuation">.</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>

    m<span class="token punctuation">.</span>A <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>n <span class="token operator">*</span> <span class="token punctuation">(</span>m<span class="token punctuation">.</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Enter all elements:\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> m<span class="token punctuation">.</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> m<span class="token punctuation">.</span>n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">Set</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>m<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n\\n\\n(3, 3): %d \\n\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">Get</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>m<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">Display</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// OUTPUT:</span>
<span class="token comment">// (3, 3): 4</span>
<span class="token comment">//</span>
<span class="token comment">// 5 0 0 0</span>
<span class="token comment">// 7 9 0 0</span>
<span class="token comment">// 6 3 4 0</span>
<span class="token comment">// 0 8 0 10</span>
</code></pre></div></li></ul></li><li><p>Upper Triangular Matrix</p></li><li><p>Symmetric Matrix</p></li><li><p>Tridiagonal Matrix</p></li><li><p>Band Matrix</p></li><li><p>Toeptitz Matrix</p></li><li><p>Sparse Matrix: A sparse matrix is a matrix that is comprised of mostly zero values.</p></li></ol>`,2),c=[o];function e(u,l){return s(),a("div",null,c)}const i=n(t,[["render",e],["__file","Matrices.html.vue"]]);export{i as default};
