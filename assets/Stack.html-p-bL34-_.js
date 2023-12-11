import{_ as n,o as s,c as a,e as t}from"./app-jDLxG9B3.js";const p={},o=t(`<h1 id="stack" tabindex="-1"><a class="header-anchor" href="#stack" aria-hidden="true">#</a> Stack</h1><p>A stack is an abstract data type that serves as a collection of elements, with two main principal operations:</p><ol><li><p><strong>Push</strong>: Which adds an element to the collection</p></li><li><p><strong>Pop</strong>: Which removes the most recently added element that was not yet removed</p></li></ol><p><strong>LIFO</strong>: <em>Last-in First-out</em> it is the order in which elements are pushed and popped.</p><ul><li>Similar to a stack of plates, inserting or removing is only possible at the top.</li></ul><p><em>Stack representation:</em> 😃</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token comment">// in --&gt;|   |--&gt; out</span>
<span class="token comment">//       | 4 |</span>
<span class="token comment">//       | 6 |</span>
<span class="token comment">//       | 2 |</span>
<span class="token comment">//       | 8 |</span>
<span class="token comment">//       | . |</span>
<span class="token comment">//       | . |</span>
<span class="token comment">//       | . |</span>
<span class="token comment">//       | - |</span>
</code></pre></div><h2 id="implementation" tabindex="-1"><a class="header-anchor" href="#implementation" aria-hidden="true">#</a> Implementation</h2><p>Data:</p><ul><li>Space for storing elements</li><li><strong>Top pointer</strong></li></ul><p>Operations:</p><ul><li><strong>Push</strong>: Add an element to the top of a stack</li><li><strong>Pop</strong>: Remove an element from the top of a stack</li><li><strong>IsEmpty</strong>: Check if the stack is empty</li><li><strong>Peak</strong>: view first element in the queue</li><li>IsFull: Check if the stack is full</li><li>StackTop: Top most element</li></ul><p>The stack can be implemented using:</p><ul><li><a href="#arrays">Arrays</a></li><li><a href="#linked-list">Linked List</a></li></ul><h3 id="arrays" tabindex="-1"><a class="header-anchor" href="#arrays" aria-hidden="true">#</a> Arrays</h3><ol><li><p>Create Stack:</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">Stack</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> size<span class="token punctuation">;</span>
    <span class="token keyword">int</span> top<span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>A<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">,</span> x<span class="token punctuation">,</span> n<span class="token punctuation">;</span>

    <span class="token comment">// struct Stack *stack = (struct Stack *)malloc(sizeof(struct Stack));</span>
    <span class="token keyword">struct</span> <span class="token class-name">Stack</span> stack<span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Enter the size of the Stack: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>stack<span class="token punctuation">.</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Enter the number of elements in the Stack: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>

    stack<span class="token punctuation">.</span>A <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span>size <span class="token operator">*</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    stack<span class="token punctuation">.</span>top <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\nStack is Full: %d\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">isFull</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>stack<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Stack is Empty: %d\\n\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>stack<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Enter Elements:\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">Push</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>stack<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>Push:</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">Push</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Stack</span> <span class="token operator">*</span>stack<span class="token punctuation">,</span> <span class="token keyword">int</span> x<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>stack<span class="token operator">-&gt;</span>top <span class="token operator">&gt;=</span> stack<span class="token operator">-&gt;</span>size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\nStack-overflow!!!\\n\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    stack<span class="token operator">-&gt;</span>top<span class="token operator">++</span><span class="token punctuation">;</span>
    stack<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>stack<span class="token operator">-&gt;</span>top<span class="token punctuation">]</span> <span class="token operator">=</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>Pop:</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">Pop</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Stack</span> <span class="token operator">*</span>stack<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>stack<span class="token operator">-&gt;</span>top <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\nStack-underflow!!!\\n\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> x<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    x <span class="token operator">=</span> stack<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>stack<span class="token operator">-&gt;</span>top<span class="token punctuation">]</span><span class="token punctuation">;</span>

    stack<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>stack<span class="token operator">-&gt;</span>top<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    stack<span class="token operator">-&gt;</span>top<span class="token operator">--</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>Peek:</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">Peek</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Stack</span> stack<span class="token punctuation">,</span> <span class="token keyword">int</span> pos<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>top <span class="token operator">-</span> pos <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\nInvalid Position\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> stack<span class="token punctuation">.</span>A<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>top <span class="token operator">-</span> pos <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>Stack Top:</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">stackTop</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Stack</span> stack<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>top <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\nInvalid Position\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> stack<span class="token punctuation">.</span>A<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>top<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>Is Stack Empty:</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Stack</span> <span class="token operator">*</span>stack<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> stack<span class="token operator">-&gt;</span>top <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>Is Stack Full:</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">isFull</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Stack</span> <span class="token operator">*</span>stack<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> stack<span class="token operator">-&gt;</span>top <span class="token operator">==</span> stack<span class="token operator">-&gt;</span>size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ol><h3 id="linked-list" tabindex="-1"><a class="header-anchor" href="#linked-list" aria-hidden="true">#</a> Linked List</h3><ol><li><p>Create Stack:</p><div class="language-c" data-ext="c"><pre class="language-c"><code>class Node
<span class="token punctuation">{</span>
public<span class="token operator">:</span>
    <span class="token keyword">int</span> data<span class="token punctuation">;</span>
    Node <span class="token operator">*</span>next<span class="token punctuation">;</span>

    <span class="token function">Node</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

Node<span class="token operator">::</span><span class="token function">Node</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    data <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

class Stack
<span class="token punctuation">{</span>
private<span class="token operator">:</span>
    Node <span class="token operator">*</span>top<span class="token punctuation">;</span>

public<span class="token operator">:</span>
    <span class="token function">Stack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">~</span><span class="token function">Stack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">Push</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token function">Pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">Display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token function">Peek</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token function">stackTop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token function">isFull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
Stack<span class="token operator">::</span><span class="token function">Stack</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    top <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

Stack<span class="token operator">::</span><span class="token operator">~</span><span class="token function">Stack</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Node <span class="token operator">*</span>temp <span class="token operator">=</span> top<span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>temp<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        top <span class="token operator">=</span> temp<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        delete temp<span class="token punctuation">;</span>
        temp <span class="token operator">=</span> top<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>Push:</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> Stack<span class="token operator">::</span><span class="token function">Push</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Node <span class="token operator">*</span>t <span class="token operator">=</span> new <span class="token function">Node</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>t<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\nStack-overflow!!!\\n\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    t<span class="token operator">-&gt;</span>data <span class="token operator">=</span> x<span class="token punctuation">;</span>
    t<span class="token operator">-&gt;</span>next <span class="token operator">=</span> top<span class="token punctuation">;</span>

    top <span class="token operator">=</span> t<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div></li><li><p>Pop:</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> Stack<span class="token operator">::</span><span class="token function">Pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    Node <span class="token operator">*</span>t <span class="token operator">=</span> top<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>t<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\nStack-underflow!!!\\n\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> x<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    x <span class="token operator">=</span> t<span class="token operator">-&gt;</span>data<span class="token punctuation">;</span>

    top <span class="token operator">=</span> t<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>

    delete t<span class="token punctuation">;</span>

    <span class="token keyword">return</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>Peek:</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> Stack<span class="token operator">::</span><span class="token function">Peek</span><span class="token punctuation">(</span><span class="token keyword">int</span> pos<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    Node <span class="token operator">*</span>t <span class="token operator">=</span> top<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>t<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> pos<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        t <span class="token operator">=</span> t<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>

    <span class="token keyword">return</span> t<span class="token operator">-&gt;</span>data<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>Stack Top:</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> Stack<span class="token operator">::</span><span class="token function">stackTop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>top<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\nStack is Empty!\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> top<span class="token operator">-&gt;</span>data<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>Is Stack Empty:</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> Stack<span class="token operator">::</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> top <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>Is Stack Full:</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> Stack<span class="token operator">::</span><span class="token function">isFull</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Node <span class="token operator">*</span>t <span class="token operator">=</span> new <span class="token function">Node</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>t<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>

    delete t<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ol><h2 id="applications" tabindex="-1"><a class="header-anchor" href="#applications" aria-hidden="true">#</a> Applications</h2><ul><li><p>To reverse a word</p></li><li><p>In compilers</p></li><li><p>In browsers: Store history of the tab</p></li><li><p><strong>Parenthesis Matching</strong>:</p><ul><li>Every opening parenthesis must have a matching closing parenthesis. Add condition to check multiple types of parenthesis.</li></ul></li></ul><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">Stack</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> size<span class="token punctuation">;</span>
    <span class="token keyword">int</span> top<span class="token punctuation">;</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>A<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">Push</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Stack</span> <span class="token operator">*</span>stack<span class="token punctuation">,</span> <span class="token keyword">char</span> x<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    stack<span class="token operator">-&gt;</span>top<span class="token operator">++</span><span class="token punctuation">;</span>
    stack<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>stack<span class="token operator">-&gt;</span>top<span class="token punctuation">]</span> <span class="token operator">=</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">char</span> <span class="token function">Pop</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Stack</span> <span class="token operator">*</span>stack<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">char</span> x<span class="token punctuation">;</span>

    x <span class="token operator">=</span> stack<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>stack<span class="token operator">-&gt;</span>top<span class="token punctuation">]</span><span class="token punctuation">;</span>
    stack<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>stack<span class="token operator">-&gt;</span>top<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    stack<span class="token operator">-&gt;</span>top<span class="token operator">--</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Stack</span> stack<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> stack<span class="token punctuation">.</span>top <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">isBalance</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>exp<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">Stack</span> stack<span class="token punctuation">;</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>

    stack<span class="token punctuation">.</span>size <span class="token operator">=</span> <span class="token function">strlen</span><span class="token punctuation">(</span>exp<span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">// &lt;string.h&gt;</span>
    stack<span class="token punctuation">.</span>top <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>

    stack<span class="token punctuation">.</span>A <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span>size <span class="token operator">*</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> exp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token char">&#39;\\0&#39;</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>exp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;(&#39;</span><span class="token punctuation">)</span>
            <span class="token function">Push</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>stack<span class="token punctuation">,</span> exp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>exp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;)&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>stack<span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

            <span class="token function">Pop</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>stack<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span>stack<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">char</span> A<span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Enter formula: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span> A<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n\\nIs balanced: %d\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">isBalance</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="infix-to-postfix-conversion" tabindex="-1"><a class="header-anchor" href="#infix-to-postfix-conversion" aria-hidden="true">#</a> Infix to Postfix Conversion</h2><ol><li><p><strong>Infix</strong>: <strong>Operand</strong> - <em>Operator</em> - <strong>Operand</strong> --&gt; <code>a + b</code></p></li><li><p><strong>Prefix</strong>: <em>Operator</em> - <strong>Operand</strong> - <strong>Operand</strong> --&gt; <code>+ ab</code></p></li><li><p><strong>Postfix</strong>: <strong>Operand</strong> - <strong>Operand</strong> - <em>Operator</em> --&gt; <code>ab +</code></p></li></ol><p><strong>Associativity</strong>:</p><table><thead><tr><th>Symbol</th><th style="text-align:center;">Priority</th><th style="text-align:center;">Associativity</th></tr></thead><tbody><tr><td><code>+</code>, <code>-</code></td><td style="text-align:center;">1</td><td style="text-align:center;">L-R</td></tr><tr><td><code>*</code>, <code>/</code></td><td style="text-align:center;">2</td><td style="text-align:center;">L-R</td></tr><tr><td><code>^</code></td><td style="text-align:center;">3</td><td style="text-align:center;">R-L</td></tr><tr><td><code>-</code></td><td style="text-align:center;">4</td><td style="text-align:center;">R-L</td></tr><tr><td><code>()</code></td><td style="text-align:center;">5</td><td style="text-align:center;">L-R</td></tr></tbody></table><ul><li>L-R: <code>a + b + c</code> --&gt; <code>((a + b) + c)</code> --&gt; <code>ab+c+</code> (Postfix form)</li><li>R-L: <code>a ^ b ^ c</code> --&gt; <code>(a ^ (b ^ c))</code> --&gt; <code>abc^^</code> (Postfix form)</li></ul><p><em>Example:</em></p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">Stack</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> size<span class="token punctuation">;</span>
    <span class="token keyword">int</span> top<span class="token punctuation">;</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>A<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">Push</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Stack</span> <span class="token operator">*</span>stack<span class="token punctuation">,</span> <span class="token keyword">char</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">char</span> <span class="token function">Pop</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Stack</span> <span class="token operator">*</span>stack<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">char</span> <span class="token function">stackTop</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Stack</span> stack<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Stack</span> stack<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">precedence</span><span class="token punctuation">(</span><span class="token keyword">char</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> outStack<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">==</span> <span class="token char">&#39;+&#39;</span> <span class="token operator">||</span> x <span class="token operator">==</span> <span class="token char">&#39;-&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> outStack <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">;</span>

    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">==</span> <span class="token char">&#39;*&#39;</span> <span class="token operator">||</span> x <span class="token operator">==</span> <span class="token char">&#39;/&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> outStack <span class="token operator">?</span> <span class="token number">3</span> <span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">;</span>

    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">==</span> <span class="token char">&#39;^&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> outStack <span class="token operator">?</span> <span class="token number">6</span> <span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">;</span>

    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">==</span> <span class="token char">&#39;(&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> outStack <span class="token operator">?</span> <span class="token number">7</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">char</span> <span class="token operator">*</span><span class="token function">infix_to_postfix</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>infix<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">Stack</span> stack<span class="token punctuation">;</span>
    <span class="token keyword">char</span> temp<span class="token punctuation">;</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    stack<span class="token punctuation">.</span>size <span class="token operator">=</span> <span class="token function">strlen</span><span class="token punctuation">(</span>infix<span class="token punctuation">)</span><span class="token punctuation">;</span>
    stack<span class="token punctuation">.</span>top <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>postfix <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span>size <span class="token operator">+</span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    stack<span class="token punctuation">.</span>A <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span>size <span class="token operator">*</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>infix<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token char">&#39;\\0&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isdigit</span><span class="token punctuation">(</span>infix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            postfix<span class="token punctuation">[</span>j<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> infix<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token keyword">else</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">precedence</span><span class="token punctuation">(</span>infix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token function">precedence</span><span class="token punctuation">(</span><span class="token function">stackTop</span><span class="token punctuation">(</span>stack<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                postfix<span class="token punctuation">[</span>j<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39; &#39;</span><span class="token punctuation">;</span>
                <span class="token function">Push</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>stack<span class="token punctuation">,</span> infix<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span>
            <span class="token punctuation">{</span>
                temp <span class="token operator">=</span> <span class="token function">Pop</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>stack<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>temp <span class="token operator">==</span> <span class="token char">&#39;(&#39;</span><span class="token punctuation">)</span>
                    i<span class="token operator">++</span><span class="token punctuation">;</span>
                <span class="token keyword">else</span>
                    postfix<span class="token punctuation">[</span>j<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>stack<span class="token punctuation">)</span><span class="token punctuation">)</span>
        postfix<span class="token punctuation">[</span>j<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">Pop</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>stack<span class="token punctuation">)</span><span class="token punctuation">;</span>

    postfix<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;\\0&#39;</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> postfix<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">char</span> A<span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Enter the infix form: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span> A<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">char</span> <span class="token operator">*</span>result <span class="token operator">=</span> <span class="token function">infix_to_postfix</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Postfix form: %s&quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="evaluate-postfix" tabindex="-1"><a class="header-anchor" href="#evaluate-postfix" aria-hidden="true">#</a> Evaluate Postfix</h3><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">Stack</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> size<span class="token punctuation">;</span>
    <span class="token keyword">int</span> top<span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>A<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">Push</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Stack</span> <span class="token operator">*</span>stack<span class="token punctuation">,</span> <span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">Pop</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Stack</span> <span class="token operator">*</span>stack<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">stackTop</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Stack</span> stack<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Stack</span> stack<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">doMath</span><span class="token punctuation">(</span><span class="token keyword">char</span> op<span class="token punctuation">,</span> <span class="token keyword">int</span> op1<span class="token punctuation">,</span> <span class="token keyword">int</span> op2<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>op<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token char">&#39;+&#39;</span><span class="token operator">:</span>
        <span class="token keyword">return</span> op1 <span class="token operator">+</span> op2<span class="token punctuation">;</span>

    <span class="token keyword">case</span> <span class="token char">&#39;-&#39;</span><span class="token operator">:</span>
        <span class="token keyword">return</span> op1 <span class="token operator">-</span> op2<span class="token punctuation">;</span>

    <span class="token keyword">case</span> <span class="token char">&#39;*&#39;</span><span class="token operator">:</span>
        <span class="token keyword">return</span> op1 <span class="token operator">*</span> op2<span class="token punctuation">;</span>

    <span class="token keyword">case</span> <span class="token char">&#39;/&#39;</span><span class="token operator">:</span>
        <span class="token keyword">return</span> op1 <span class="token operator">/</span> op2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0.0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">evaluatePostfix</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>postfix<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">,</span> num<span class="token punctuation">;</span>
    <span class="token keyword">int</span> result<span class="token punctuation">;</span>
    <span class="token keyword">int</span> operand2<span class="token punctuation">,</span> operand1<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">Stack</span> stack<span class="token punctuation">;</span>

    stack<span class="token punctuation">.</span>size <span class="token operator">=</span> <span class="token function">strlen</span><span class="token punctuation">(</span>postfix<span class="token punctuation">)</span><span class="token punctuation">;</span>
    stack<span class="token punctuation">.</span>top <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>

    stack<span class="token punctuation">.</span>A <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span>size <span class="token operator">*</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> postfix<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token char">&#39;\\0&#39;</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>postfix<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39; &#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">continue</span><span class="token punctuation">;</span>

        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isdigit</span><span class="token punctuation">(</span>postfix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>                               <span class="token comment">// &lt;ctype.h&gt;</span>
        <span class="token punctuation">{</span>
            num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token function">isdigit</span><span class="token punctuation">(</span>postfix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                num <span class="token operator">=</span> num <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">(</span>postfix<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token char">&#39;0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                i<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            i<span class="token operator">--</span><span class="token punctuation">;</span>

            <span class="token function">Push</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>stack<span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">else</span>
        <span class="token punctuation">{</span>
            operand2 <span class="token operator">=</span> <span class="token function">Pop</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>stack<span class="token punctuation">)</span><span class="token punctuation">;</span>
            operand1 <span class="token operator">=</span> <span class="token function">Pop</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>stack<span class="token punctuation">)</span><span class="token punctuation">;</span>
            result <span class="token operator">=</span> <span class="token function">doMath</span><span class="token punctuation">(</span>postfix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> operand1<span class="token punctuation">,</span> operand2<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">Push</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>stack<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token function">Pop</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>stack<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">char</span> A<span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Enter postfix form: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">fgets</span><span class="token punctuation">(</span>A<span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token constant">stdin</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    A<span class="token punctuation">[</span><span class="token function">strlen</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;\\0&#39;</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Result: %d&quot;</span><span class="token punctuation">,</span> <span class="token function">evaluatePostfix</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="complexity" tabindex="-1"><a class="header-anchor" href="#complexity" aria-hidden="true">#</a> Complexity</h2><p>Array Based:</p><ul><li>Push and Pop: <code>O(1)</code></li></ul><h2 id="implementing-stack-using-queue" tabindex="-1"><a class="header-anchor" href="#implementing-stack-using-queue" aria-hidden="true">#</a> Implementing Stack Using Queue</h2>`,34),c=[o];function e(u,k){return s(),a("div",null,c)}const i=n(p,[["render",e],["__file","Stack.html.vue"]]);export{i as default};
