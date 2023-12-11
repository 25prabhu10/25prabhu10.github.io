import{_ as o,r as e,o as c,c as u,b as n,d as s,a as p,e as a}from"./app-jDLxG9B3.js";const l={},i=a(`<h1 id="recursion" tabindex="-1"><a class="header-anchor" href="#recursion" aria-hidden="true">#</a> Recursion</h1><p>Recursion is when a function calls itself.</p><p>Recursion is a method of solving a problem where the solution depends on solutions to smaller instances of the same problem. Such problems can generally be solved by iteration, but this needs to identify and index the smaller instances at programming time.</p><p>Lets us look at two approaches to find a key present in one of the boxes (arranged in <em>Matryoshka Dolls</em> manner).</p><ol><li><p>First approach uses <code>while</code> loop:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">look_for_key</span><span class="token punctuation">(</span>main_box<span class="token punctuation">)</span><span class="token punctuation">:</span>
    pile <span class="token operator">=</span> main_box<span class="token punctuation">.</span>make_a_pile_to_look_through<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">while</span> pile <span class="token keyword">is</span> <span class="token keyword">not</span> empty<span class="token punctuation">:</span>
        box <span class="token operator">=</span> pile<span class="token punctuation">.</span>grab_a_box<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> item <span class="token keyword">in</span> box<span class="token punctuation">:</span>
            <span class="token keyword">if</span> item<span class="token punctuation">.</span>is_a_box<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                pile<span class="token punctuation">.</span>append<span class="token punctuation">(</span>item<span class="token punctuation">)</span>
            <span class="token keyword">elif</span> item<span class="token punctuation">.</span>is_a_key<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token string">&quot;Found the key!&quot;</span>
</code></pre></div></li><li><p>Second way uses <em>Recursion</em>:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">look_for_key</span><span class="token punctuation">(</span>box<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> item <span class="token keyword">in</span> box<span class="token punctuation">:</span>
        <span class="token keyword">if</span> item<span class="token punctuation">.</span>is_a_box<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token comment"># Recursion!</span>
            look_for_key<span class="token punctuation">(</span>item<span class="token punctuation">)</span>
        <span class="token keyword">elif</span> item<span class="token punctuation">.</span>is_a_key<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token string">&quot;Found the key!&quot;</span>
</code></pre></div></li></ol><p>When a recursive function is written, we need to tell it to stop recursing. That&#39;s why <em>every recursive function has two parts: the base case, and the recursive case</em>.</p><ul><li>The recursive case is when the function calls itself.</li><li>The base case is when the function doesn&#39;t call itself (stop).</li></ul><p>Recursive functions use the <em>call stack</em> to keep track of function calls and function related variables.</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment"># Factorial Function</span>
<span class="token keyword">def</span> <span class="token function">factorial</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># Base case</span>
    <span class="token keyword">if</span> x <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token number">1</span>
    <span class="token comment"># Recursive case</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> x <span class="token operator">*</span> factorial<span class="token punctuation">(</span>x <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
</code></pre></div><ul><li><p>If written incorrectly recursive function results in <strong>infinite loop</strong>.</p></li><li><p>Generally recursion is <strong>less efficient than iteration (loops)</strong>.</p></li><li><p>Recursive algorithms tend to be <strong>very efficient when traversing tree like data structures</strong></p></li></ul><p>Using the stack takes up a lot of memory.</p><ul><li>Rewrite the code to use loop instead, to save space.</li><li>Or use something called <a href="#types-of-recursion"><em>tail recursion</em></a>. Which is only supported by some languages.</li></ul>`,12),k={href:"http://stackoverflow.com/a/72694/139117",target:"_blank",rel:"noopener noreferrer"},r=a(`<div class="custom-container warning"><p class="custom-container-title">NOTE</p><p><strong>Excessive Recursion</strong>: When a recursive function calls itself multiple times for the same parameters.</p></div><h2 id="tracing-tree-of-recursive-function" tabindex="-1"><a class="header-anchor" href="#tracing-tree-of-recursive-function" aria-hidden="true">#</a> Tracing Tree of Recursive Function</h2><ul><li><p>Ascending Phase</p><ul><li>Loops only has ascending phase</li></ul></li><li><p>Descending Phase</p></li><li><p>Time complexity: <em>O(n)</em></p></li><li><p>Recurrence Relation:</p><ul><li>Induction method or successive substitution method</li></ul></li></ul><p>Global vs Static Variable:</p><ul><li><p>They behave in the same way such as they are initialized once and the only case where they have default value as 0.</p></li><li><p>Global variable has global (that file) scope.</p></li><li><p>Static variable are scoped where they are initialized</p></li></ul><h2 id="types-of-recursion" tabindex="-1"><a class="header-anchor" href="#types-of-recursion" aria-hidden="true">#</a> Types of recursion</h2><ol><li><p><strong>Tail Recursion</strong>: When the function calls itself and there are no operations performed after the function call. No operation will be performed during descending phase, not even doing something to the result of the function like <code>func(n-1) + n</code>.</p><p><em>Example:</em></p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">func</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// NO OTHER OPERATION IS PERFORMED AFTER FUNCTION CALL</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">func</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// OUTPUT:</span>
<span class="token comment">// 3</span>
<span class="token comment">// 2</span>
<span class="token comment">// 1</span>
</code></pre></div><p>The above recursion can be written as loop:</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    n<span class="token operator">--</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">func</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// OUTPUT:</span>
<span class="token comment">// 3</span>
<span class="token comment">// 2</span>
<span class="token comment">// 1</span>
</code></pre></div><table><thead><tr><th>Type</th><th>Time Complexity</th><th>Space Complexity</th></tr></thead><tbody><tr><td>Tail Recursion</td><td><code>O(n)</code></td><td><code>O(n)</code> - Creates a new function activation record for each recursion</td></tr><tr><td>Loop (while/for)</td><td><code>O(n)</code></td><td><code>O(1)</code> - Only one activation record of the function that contains the loop</td></tr></tbody></table><p>From the above table we can see that space complexity of Tail recursion is higher than loops, hence we can use loops instead of Tail recursion.</p><blockquote><p>Some compilers convert tail recursion into loops during compilation</p></blockquote></li><li><p><strong>Head Recursion</strong>: When the function calls itself and there are no operations performed before the function call. No operation will be performed during ascending phase.</p><p><em>Example:</em></p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">func</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// NO OTHER OPERATION IS PERFORMED BEFORE FUNCTION CALL</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">func</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// OUTPUT:</span>
<span class="token comment">// 1</span>
<span class="token comment">// 2</span>
<span class="token comment">// 3</span>
</code></pre></div><p>The above recursion can be written as loop (but it will be a bit different):</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    i<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">func</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// OUTPUT:</span>
<span class="token comment">// 1</span>
<span class="token comment">// 2</span>
<span class="token comment">// 3</span>
</code></pre></div><table><thead><tr><th>Type</th><th>Time Complexity</th><th>Space Complexity</th></tr></thead><tbody><tr><td>Head Recursion</td><td><code>O(n)</code></td><td><code>O(n)</code> - Creates a new function activation record for each recursion</td></tr><tr><td>Loop (while/for)</td><td><code>O(n)</code></td><td><code>O(1)</code> - Only one activation record of the function that contains the loop</td></tr></tbody></table><p>From the above table we can see that space complexity of Head recursion is higher than loops, hence we can use loops instead of Head recursion.</p></li><li><p><strong>Tree Recursion</strong>: When the function is calling itself more than one time.</p><p><em>Example:</em></p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">recursion_3_tree</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">recursion_3_tree</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">recursion_3_tree</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">recursion_3_tree</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// OUTPUT:</span>
<span class="token comment">// 3</span>
<span class="token comment">// 2</span>
<span class="token comment">// 1</span>
<span class="token comment">// 1</span>
<span class="token comment">// 2</span>
<span class="token comment">// 1</span>
<span class="token comment">// 1</span>
</code></pre></div><table><thead><tr><th>Type</th><th>Time Complexity</th><th>Space Complexity</th></tr></thead><tbody><tr><td>Tree Recursion</td><td>O(2^n) - Sum of terms in Geometry Progression Series</td><td>O(n) - Creates and deletes function activation record for each recursion</td></tr></tbody></table><ul><li>It seems to have Time Complexity of <em>O(m^n)</em>, where <em>n</em> is the size of data and <em>m</em> is the number of time the function calls itself.</li></ul></li><li><p><strong>Indirect Recursion</strong>: When function A calls function B and function B in turn calls function A. It is a cyclic recursion.</p><p><em>Example:</em></p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">funcB</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">funcA</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">funcB</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">funcB</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">funcA</span><span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">funcA</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// OUTPUT:</span>
<span class="token comment">// 20</span>
<span class="token comment">// 19</span>
<span class="token comment">// 9</span>
<span class="token comment">// 8</span>
<span class="token comment">// 4</span>
<span class="token comment">// 3</span>
<span class="token comment">// 1</span>
</code></pre></div></li><li><p><strong>Nested Recursion</strong>: When a function calls itself and passes itself as parameter. A recursive call is taking recursive call as a parameter.</p><p><em>Example:</em></p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;</span> <span class="token number">100</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> n <span class="token operator">-</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">else</span>
        <span class="token function">func</span><span class="token punctuation">(</span><span class="token function">func</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">func</span><span class="token punctuation">(</span><span class="token number">95</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// OUTPUT:</span>
<span class="token comment">// 106</span>
<span class="token comment">// 107</span>
<span class="token comment">// 108</span>
<span class="token comment">// 109</span>
<span class="token comment">// 110</span>
<span class="token comment">// 111</span>
<span class="token comment">// 101</span>
</code></pre></div></li></ol>`,7),d={class:"custom-container tip"},m=n("p",{class:"custom-container-title"},"REFERENCES",-1),f={href:"https://opendsa-server.cs.vt.edu/ODSA/Books/Everything/html/Trace.html",target:"_blank",rel:"noopener noreferrer"},y=a(`<h2 id="use-cases" tabindex="-1"><a class="header-anchor" href="#use-cases" aria-hidden="true">#</a> Use Cases</h2><ol><li><p>Sum of first <em>n</em> natural numbers:</p><ul><li><p><em>Using recursion:</em> O(n)</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">sum_of_first_n_numbers</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span>
        <span class="token keyword">return</span> n <span class="token operator">+</span> <span class="token function">sum_of_first_n_numbers</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">sum_of_first_n_numbers</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// OUTPUT:</span>
<span class="token comment">// 55</span>
</code></pre></div></li><li><p><em>Using equation:</em> This method is better than recursion in terms of both time and space complexity. It only has to evaluate one statement. <code>O(1)</code></p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">sum_of_first_n_numbers</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> n <span class="token operator">*</span> <span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">sum_of_first_n_numbers</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// OUTPUT:</span>
<span class="token comment">// 55</span>
</code></pre></div></li><li><p><em>Using loop:</em> This method is better than recursion but not better than equation. O(n)</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">sum_of_first_n_numbers</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">,</span> s <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        s <span class="token operator">+=</span> i<span class="token punctuation">;</span>

    <span class="token keyword">return</span> s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">sum_of_first_n_numbers</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// OUTPUT:</span>
<span class="token comment">// 55</span>
</code></pre></div></li></ul></li><li><p>Factorial of a number:</p><ul><li><p><em>Using recursion:</em></p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">factorial</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> n <span class="token operator">*</span> <span class="token function">factorial</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token function">factorial</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// OUTPUT:</span>
<span class="token comment">// 120</span>
</code></pre></div></li><li><p><em>Using loop:</em></p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">factorial</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">,</span> fact <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        fact <span class="token operator">*=</span> i<span class="token punctuation">;</span>

    <span class="token keyword">return</span> fact<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token function">factorial</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// OUTPUT:</span>
<span class="token comment">// 120</span>
</code></pre></div></li></ul></li><li><p>Power or Exponent (m^n):</p><ul><li><p><em>Using recursion:</em> O(n)</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">power_of_m_times_n</span><span class="token punctuation">(</span><span class="token keyword">int</span> m<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> m <span class="token operator">*</span> <span class="token function">power_of_m_times_n</span><span class="token punctuation">(</span>m<span class="token punctuation">,</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token function">power_of_m_times_n</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// OUTPUT:</span>
<span class="token comment">// 1024</span>
</code></pre></div></li><li><p><em>Recursion Version-2</em>: Faster</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">power_of_m_times_n</span><span class="token punctuation">(</span><span class="token keyword">int</span> m<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token function">power_of_m_times_n</span><span class="token punctuation">(</span>m <span class="token operator">*</span> m<span class="token punctuation">,</span> n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> m <span class="token operator">*</span> <span class="token function">power_of_m_times_n</span><span class="token punctuation">(</span>m <span class="token operator">*</span> m<span class="token punctuation">,</span> <span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token function">power_of_m_times_n</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// OUTPUT:</span>
<span class="token comment">// 1024</span>
</code></pre></div></li><li><p><em>Using loop:</em> O(n)</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">power_of_m_times_n</span><span class="token punctuation">(</span><span class="token keyword">int</span> m<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span>

<span class="token punctuation">{</span>
<span class="token keyword">int</span> i<span class="token punctuation">,</span> power <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        power <span class="token operator">*=</span> m<span class="token punctuation">;</span>

    <span class="token keyword">return</span> power<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token function">power_of_m_times_n</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// OUTPUT:</span>
<span class="token comment">// 1024</span>
</code></pre></div></li><li><p><em>Using loop Version-2:</em> O(log2 n)</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">power_of_m_times_n</span><span class="token punctuation">(</span><span class="token keyword">int</span> m<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span>

<span class="token punctuation">{</span>
<span class="token keyword">int</span> i<span class="token punctuation">,</span> power <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        power <span class="token operator">*=</span> m<span class="token punctuation">;</span>

    <span class="token keyword">return</span> power<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token function">power_of_m_times_n</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// OUTPUT:</span>
<span class="token comment">// 1024</span>
</code></pre></div></li></ul></li><li><p>Taylor Series: Finding value of <code>e^x</code></p><ul><li><p>Using recursion: O(n^2)</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">power</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token function">power</span><span class="token punctuation">(</span>x <span class="token operator">*</span> x<span class="token punctuation">,</span> n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> x <span class="token operator">*</span> <span class="token function">power</span><span class="token punctuation">(</span>x <span class="token operator">*</span> x<span class="token punctuation">,</span> <span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">factorial</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> n <span class="token operator">*</span> <span class="token function">factorial</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">double</span> <span class="token function">taylor_series</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">double</span> temp <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>

    temp <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">double</span><span class="token punctuation">)</span><span class="token function">power</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> n<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token keyword">double</span><span class="token punctuation">)</span><span class="token function">factorial</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> temp <span class="token operator">+</span> <span class="token function">taylor_series</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// ALTERNATE METHOD</span>
<span class="token keyword">double</span> <span class="token function">e</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">double</span> p <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> f <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">double</span> r<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>

    r <span class="token operator">=</span> <span class="token function">e</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    p <span class="token operator">=</span> p <span class="token operator">*</span> x<span class="token punctuation">;</span>
    f <span class="token operator">=</span> f <span class="token operator">*</span> n<span class="token punctuation">;</span>

    <span class="token keyword">return</span> r <span class="token operator">+</span> <span class="token punctuation">(</span>p <span class="token operator">/</span> f<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%lf&quot;</span><span class="token punctuation">,</span> <span class="token function">taylor_series</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%lf&quot;</span><span class="token punctuation">,</span> <span class="token function">e</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// OUTPUT:</span>
<span class="token comment">// 7.000000</span>
</code></pre></div></li><li><p>Taylor Series using Horner&#39;s Rule: O(n)</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token comment">// USING LOOPS</span>
<span class="token keyword">double</span> <span class="token function">e</span><span class="token punctuation">(</span><span class="token keyword">double</span> x<span class="token punctuation">,</span> <span class="token keyword">double</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token keyword">double</span> s <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> n <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> n<span class="token operator">--</span><span class="token punctuation">)</span>
    s <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token punctuation">(</span>x <span class="token operator">/</span> n<span class="token punctuation">)</span> <span class="token operator">*</span> s<span class="token punctuation">;</span>

<span class="token keyword">return</span> s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// USING RECURSION</span>
<span class="token keyword">double</span> <span class="token function">e</span><span class="token punctuation">(</span><span class="token keyword">double</span> x<span class="token punctuation">,</span> <span class="token keyword">double</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token keyword">static</span> <span class="token keyword">double</span> s <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">return</span> s<span class="token punctuation">;</span>

s <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token punctuation">(</span>x <span class="token operator">/</span> n<span class="token punctuation">)</span> <span class="token operator">*</span> s<span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token function">e</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%lf\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">e</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// OUTPUT:</span>
<span class="token comment">// 7.000000</span>
</code></pre></div></li></ul></li><li><p>Fibonacci Series:</p><ul><li><p>Using recursion: O(2^n)</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">fibonacci_series</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> n<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token function">fibonacci_series</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fibonacci_series</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token function">fibonacci_series</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// OUTPUT:</span>
<span class="token comment">// 13</span>
</code></pre></div></li><li><p>Using recursion memoization: Storing the results of the function call so that they can be utilized again when we need the same call, avoiding excessive calls. O(n)</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> cache<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token number">0</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token number">9</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">fibonacci_series</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        cache<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">=</span> n<span class="token punctuation">;</span>
        <span class="token keyword">return</span> n<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cache<span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
            cache<span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">fibonacci_series</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>cache<span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
            cache<span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">fibonacci_series</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    cache<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">=</span> cache<span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">+</span> cache<span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> cache<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token function">fibonacci_series</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// OUTPUT:</span>
<span class="token comment">// 13</span>
</code></pre></div></li><li><p>Using loops: O(n)</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">fibonacci_series</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> n <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> n<span class="token operator">--</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d &quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
        x <span class="token operator">=</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
        y <span class="token operator">=</span> x <span class="token operator">-</span> y<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">fibonacci_series</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// OUTPUT:</span>
<span class="token comment">// 0 1 1 2 3 5 8 13</span>
</code></pre></div></li></ul></li><li><p>Combination Formula - <code>nCr = n!/r!(n-r)!</code>: A combination is a selection of items from a set that has distinct members, such that the order of selection does not matter. A combination is a mathematical technique that determines the number of possible arrangements in a collection of items where the order of the selection does not matter. In combinations, you can select the items in any order.</p><ul><li><p>Using recursion: Pascal&#39;s triangle</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">combinations</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">int</span> r<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>r <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> r <span class="token operator">==</span> n<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token function">combinations</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> r <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">combinations</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> r<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token function">combinations</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// OUTPUT:</span>
<span class="token comment">// 3</span>
</code></pre></div></li><li><p>Using recursion version-2:</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">factorial</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> x <span class="token operator">*</span> <span class="token function">factorial</span><span class="token punctuation">(</span>x <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">combinations</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">int</span> r<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">factorial</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token function">factorial</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token function">factorial</span><span class="token punctuation">(</span>n <span class="token operator">-</span> r<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token function">combinations</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// OUTPUT:</span>
<span class="token comment">// 3</span>
</code></pre></div></li></ul></li><li><p>Tower of Hanoi:</p><ul><li><p>Using recursion: O(2^n)</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">TOH</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">int</span> A<span class="token punctuation">,</span> <span class="token keyword">int</span> B<span class="token punctuation">,</span> <span class="token keyword">int</span> C<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">TOH</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> A<span class="token punctuation">,</span> C<span class="token punctuation">,</span> B<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;from %d to %d\\n&quot;</span><span class="token punctuation">,</span> A<span class="token punctuation">,</span> C<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">TOH</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> B<span class="token punctuation">,</span> A<span class="token punctuation">,</span> C<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">TOH</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// OUTPUT:</span>
<span class="token comment">// from 1 to 3</span>
<span class="token comment">// from 1 to 2</span>
<span class="token comment">// from 3 to 2</span>
<span class="token comment">// from 1 to 3</span>
<span class="token comment">// from 2 to 1</span>
<span class="token comment">// from 2 to 3</span>
<span class="token comment">// from 1 to 3</span>
</code></pre></div></li></ul></li><li><p>Node.js traversing filesystem:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> join <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">traverse</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">dir</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> subFolders <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">statSync</span><span class="token punctuation">(</span>dir<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> fs<span class="token punctuation">.</span><span class="token function">readdirSync</span><span class="token punctuation">(</span>dir<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>subFolders<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;👟👟👟 Traversing &quot;</span><span class="token punctuation">,</span> dir<span class="token punctuation">)</span><span class="token punctuation">;</span>

    subFolders<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> fullPath <span class="token operator">=</span> <span class="token function">join</span><span class="token punctuation">(</span>dir<span class="token punctuation">,</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token function">traverse</span><span class="token punctuation">(</span>fullPath<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// recursive function call</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">traverse</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></li></ol>`,2);function b(w,g){const t=e("ExternalLinkIcon");return c(),u("div",null,[i,n("blockquote",null,[n("p",null,[s("Quote by Leigh CaldWell on "),n("a",k,[s("Stack Overflow"),p(t)])])]),r,n("div",d,[m,n("p",null,[n("a",f,[s("Tracing Recursive Code"),p(t)])])]),y])}const _=o(l,[["render",b],["__file","Recursion.html.vue"]]);export{_ as default};
