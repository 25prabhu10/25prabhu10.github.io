import{_ as e,r as c,o as u,c as l,b as n,d as s,a as p,w as o,e as a}from"./app-jDLxG9B3.js";const r={},k=a(`<h1 id="queue" tabindex="-1"><a class="header-anchor" href="#queue" aria-hidden="true">#</a> Queue</h1><p>A Queue is an abstract data type that serves as a collection of elements, with two main principal operations:</p><ol><li><p><strong>Enqueue</strong>: Which adds an element to the collection</p></li><li><p><strong>Dequeue</strong>: Which removes the most recently added element that was not yet removed</p></li></ol><p><strong>FIFO</strong>: <em>First-in First-out</em> it is the order in which elements are pushed and popped.</p><ul><li>Similar to a real life queue, new element is inserted at the rear end of the queue and an element is only removed at the front end of the queue.</li></ul><p><em>Queue representation:</em> 😃</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token comment">//       |   |--&gt; out</span>
<span class="token comment">//       | 4 |</span>
<span class="token comment">//       | 6 |</span>
<span class="token comment">//       | . |</span>
<span class="token comment">//       | . |</span>
<span class="token comment">//       | . |</span>
<span class="token comment">//       | 9 |</span>
<span class="token comment">//       | 7 |</span>
<span class="token comment">// in --&gt;|   |</span>
</code></pre></div><p>Types of Queues:</p><ul><li><a href="#simple-queue">Simple Queue</a></li><li><a href="#circular-queue">Circular Queue</a></li><li><a href="#priority-queue">Priority Queue</a></li><li><a href="#double-ended-queue-deque">Double Ended Queue (Deque)</a></li></ul><h2 id="simple-queue" tabindex="-1"><a class="header-anchor" href="#simple-queue" aria-hidden="true">#</a> Simple Queue</h2><p>Data:</p><ul><li>Space for storing elements</li><li><strong>Front pointer</strong>: for deletion</li><li><strong>Rear pointer</strong>: for Insertion</li></ul><p>Operations:</p><ul><li><strong>Enqueue</strong>: Add an element to the end of the queue</li><li><strong>Dequeue</strong>: Remove an element from the front of the queue</li><li><strong>IsEmpty</strong>: Check if the queue is empty</li><li><strong>Peek</strong>: Get the value of the front of the queue without removing it</li><li>IsFull: Check if the queue is full</li><li>Last: check the last element</li></ul><p>The queue can be implemented using:</p><ul><li><a href="#arrays">Arrays</a></li><li><a href="#linked-list">Linked List</a></li></ul><h3 id="arrays" tabindex="-1"><a class="header-anchor" href="#arrays" aria-hidden="true">#</a> Arrays</h3><ol><li><p>Queues using single pointer:</p><ul><li>New element will be inserted at the rare: Operation <code>O(1)</code></li><li>Element will be removed from the front <code>A[0]</code> and all the remaining elements will be shifted to one position lower i.e. <code>A[i] = A[i + 1]</code>: Operation <code>O(n)</code></li></ul><p><em>Example:</em></p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">Queue</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> size<span class="token punctuation">;</span>
    <span class="token keyword">int</span> rear<span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>A<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">Display</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Queue</span> queue<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> queue<span class="token punctuation">.</span>rear<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d &quot;</span><span class="token punctuation">,</span> queue<span class="token punctuation">.</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">Enqueue</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Queue</span> <span class="token operator">*</span>queue<span class="token punctuation">,</span> <span class="token keyword">int</span> x<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>queue<span class="token operator">-&gt;</span>rear <span class="token operator">&gt;=</span> queue<span class="token operator">-&gt;</span>size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Stack-overflow!!!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    queue<span class="token operator">-&gt;</span>rear<span class="token operator">++</span><span class="token punctuation">;</span>
    queue<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>queue<span class="token operator">-&gt;</span>rear<span class="token punctuation">]</span> <span class="token operator">=</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">Dequeue</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Queue</span> <span class="token operator">*</span>queue<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> x<span class="token punctuation">,</span> i<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>queue<span class="token operator">-&gt;</span>rear <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Stack-underflow!!!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    x <span class="token operator">=</span> queue<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> queue<span class="token operator">-&gt;</span>rear<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        queue<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> queue<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    queue<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    queue<span class="token operator">-&gt;</span>rear<span class="token operator">--</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Queue</span> <span class="token operator">*</span>queue<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> queue<span class="token operator">-&gt;</span>rear <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">isFull</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Queue</span> <span class="token operator">*</span>queue<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> queue<span class="token operator">-&gt;</span>rear <span class="token operator">==</span> queue<span class="token operator">-&gt;</span>size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>Queues using two pointer:</p><ul><li>New element will be inserted at the rare: Operation <code>O(1)</code></li><li>An element deletion will remove the first element: Operation <code>O(1)</code></li></ul><p><em>Example:</em></p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">Queue</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> size<span class="token punctuation">;</span>
    <span class="token keyword">int</span> front<span class="token punctuation">;</span>
    <span class="token keyword">int</span> rear<span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>A<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">Display</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Queue</span> queue<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> queue<span class="token punctuation">.</span>front <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> queue<span class="token punctuation">.</span>rear<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d \\n&quot;</span><span class="token punctuation">,</span> queue<span class="token punctuation">.</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">Enqueue</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Queue</span> <span class="token operator">*</span>queue<span class="token punctuation">,</span> <span class="token keyword">int</span> x<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>queue<span class="token operator">-&gt;</span>rear <span class="token operator">&gt;=</span> queue<span class="token operator">-&gt;</span>size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Stack-overflow!!!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    queue<span class="token operator">-&gt;</span>rear<span class="token operator">++</span><span class="token punctuation">;</span>
    queue<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>queue<span class="token operator">-&gt;</span>rear<span class="token punctuation">]</span> <span class="token operator">=</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">Dequeue</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Queue</span> <span class="token operator">*</span>queue<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> x<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>queue<span class="token operator">-&gt;</span>rear <span class="token operator">==</span> queue<span class="token operator">-&gt;</span>front<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Stack-underflow!!!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    queue<span class="token operator">-&gt;</span>front<span class="token operator">++</span><span class="token punctuation">;</span>

    x <span class="token operator">=</span> queue<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>queue<span class="token operator">-&gt;</span>front<span class="token punctuation">]</span><span class="token punctuation">;</span>
    queue<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>queue<span class="token operator">-&gt;</span>front<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Queue</span> <span class="token operator">*</span>queue<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> queue<span class="token operator">-&gt;</span>rear <span class="token operator">==</span> queue<span class="token operator">-&gt;</span>front<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">isFull</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Queue</span> <span class="token operator">*</span>queue<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> queue<span class="token operator">-&gt;</span>rear <span class="token operator">==</span> queue<span class="token operator">-&gt;</span>size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ol><p>Drawbacks of using Arrays:</p><ul><li>If rare of the Queue is at the last element and front is larger than 0 that means that array has some empty space at the start. So, even though there the array has empty space we cannot add new elements as <code>rare == size</code> and new elements are added from the rare.</li><li>Every space in an array is only used once.</li></ul><p>Workaround:</p><ul><li><p><strong>Resetting Pointers</strong>: While dequeueing if front and rear are same then reset both and make them <code>-1</code>. Not always front and rear are equal, hence this method is good only when all elements are deleted.</p></li><li><p><strong><a href="#circular-queue">Circular Queue</a></strong></p></li></ul><h3 id="linked-list" tabindex="-1"><a class="header-anchor" href="#linked-list" aria-hidden="true">#</a> Linked List</h3><h3 id="complexity" tabindex="-1"><a class="header-anchor" href="#complexity" aria-hidden="true">#</a> Complexity</h3><p>Array Based:</p><ul><li>Enqueue and Dequeue: <code>O(1)</code></li></ul><h3 id="applications" tabindex="-1"><a class="header-anchor" href="#applications" aria-hidden="true">#</a> Applications</h3><ul><li><p>CPU Scheduling, Disk Scheduling</p></li><li><p>Data Synchronization</p></li></ul><h3 id="limitations" tabindex="-1"><a class="header-anchor" href="#limitations" aria-hidden="true">#</a> Limitations</h3><ul><li><p>After few enqueue and dequeue operations, the size of the queue is reduced</p></li><li><p>Only after reset, full size of the queue can be utilized</p></li></ul><h2 id="circular-queue" tabindex="-1"><a class="header-anchor" href="#circular-queue" aria-hidden="true">#</a> Circular Queue</h2><p>In a circular queue, the last element points to the first element making a circular link.</p><ul><li>Front and rear move in a circular way and array is not circular.</li></ul><p>Advantages of Simple Queue:</p><ul><li>Better memory utilization</li></ul><h3 id="cq-implementation" tabindex="-1"><a class="header-anchor" href="#cq-implementation" aria-hidden="true">#</a> CQ Implementation</h3><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">SIZE</span> <span class="token expression"><span class="token number">5</span></span></span>

<span class="token keyword">int</span> items<span class="token punctuation">[</span>SIZE<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> front <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> rear <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">// Check if the queue is full</span>
<span class="token keyword">int</span> <span class="token function">isFull</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>front <span class="token operator">==</span> rear <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>front <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> rear <span class="token operator">==</span> SIZE <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Check if the queue is empty</span>
<span class="token keyword">int</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>front <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Adding an element</span>
<span class="token keyword">void</span> <span class="token function">enQueue</span><span class="token punctuation">(</span><span class="token keyword">int</span> element<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isFull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n Queue is full!! \\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>front <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> front <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    rear <span class="token operator">=</span> <span class="token punctuation">(</span>rear <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> SIZE<span class="token punctuation">;</span>
    items<span class="token punctuation">[</span>rear<span class="token punctuation">]</span> <span class="token operator">=</span> element<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n Inserted -&gt; %d&quot;</span><span class="token punctuation">,</span> element<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Removing an element</span>
<span class="token keyword">int</span> <span class="token function">deQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> element<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n Queue is empty !! \\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    element <span class="token operator">=</span> items<span class="token punctuation">[</span>front<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>front <span class="token operator">==</span> rear<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      front <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
      rear <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// Q has only one element, so we reset the</span>
    <span class="token comment">// queue after dequeing it. ?</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
      front <span class="token operator">=</span> <span class="token punctuation">(</span>front <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> SIZE<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n Deleted element -&gt; %d \\n&quot;</span><span class="token punctuation">,</span> element<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Display the queue</span>
<span class="token keyword">void</span> <span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> i<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot; \\n Empty Queue\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n Front -&gt; %d &quot;</span><span class="token punctuation">,</span> front<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n Items -&gt; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> front<span class="token punctuation">;</span> i <span class="token operator">!=</span> rear<span class="token punctuation">;</span> i <span class="token operator">=</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> SIZE<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d &quot;</span><span class="token punctuation">,</span> items<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d &quot;</span><span class="token punctuation">,</span> items<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n Rear -&gt; %d \\n&quot;</span><span class="token punctuation">,</span> rear<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Fails because front = -1</span>
  <span class="token function">deQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">enQueue</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">enQueue</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">enQueue</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">enQueue</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">enQueue</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Fails to enqueue because front == 0 &amp;&amp; rear == SIZE - 1</span>
  <span class="token function">enQueue</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">deQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">enQueue</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Fails to enqueue because front == rear + 1</span>
  <span class="token function">enQueue</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="cq-complexity" tabindex="-1"><a class="header-anchor" href="#cq-complexity" aria-hidden="true">#</a> CQ Complexity</h3><p>Array Based:</p><ul><li>Enqueue and Dequeue: <code>O(1)</code></li></ul><h3 id="cq-applications" tabindex="-1"><a class="header-anchor" href="#cq-applications" aria-hidden="true">#</a> CQ Applications</h3><ul><li>CPU scheduling</li><li>Memory management</li><li>Traffic Management</li></ul><h2 id="double-ended-queue-deque" tabindex="-1"><a class="header-anchor" href="#double-ended-queue-deque" aria-hidden="true">#</a> Double Ended Queue (Deque)</h2><p>Deque or Double Ended Queue is a type of queue in which insertion and removal of elements can either be performed from the front or the rear.</p><ul><li>It <strong>strictly doesn&#39;t follow FIFO</strong>. FIFO can be used</li><li><strong>Both front and rear</strong> can be <strong>used for insertion and deletion</strong></li></ul><table><thead><tr><th>Operation</th><th>Queue</th><th>DEQueue</th></tr></thead><tbody><tr><td>Insert</td><td>rear</td><td>Both</td></tr><tr><td>Delete</td><td>front</td><td>Both</td></tr></tbody></table><p>Variants of DEQueue:</p><ol><li><p><strong>Input Restricted</strong>: Insertion can only happen from rear</p><table><thead><tr><th></th><th>Insert</th><th>Delete</th></tr></thead><tbody><tr><td>front</td><td>-</td><td>Y</td></tr><tr><td>rear</td><td>Y</td><td>Y</td></tr></tbody></table></li><li><p><strong>Output Restricted</strong>: Deletion can only happen from front</p><table><thead><tr><th></th><th>Insert</th><th>Delete</th></tr></thead><tbody><tr><td>front</td><td>Y</td><td>Y</td></tr><tr><td>rear</td><td>Y</td><td>-</td></tr></tbody></table></li></ol><p>Implementation:</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">MAX</span> <span class="token expression"><span class="token number">10</span></span></span>

<span class="token keyword">void</span> <span class="token function">addFront</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">addRear</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">delFront</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">delRear</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">display</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> arr<span class="token punctuation">[</span>MAX<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> front<span class="token punctuation">,</span> rear<span class="token punctuation">,</span> i<span class="token punctuation">,</span> n<span class="token punctuation">;</span>

  front <span class="token operator">=</span> rear <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> MAX<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token function">addRear</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>front<span class="token punctuation">,</span> <span class="token operator">&amp;</span>rear<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">addFront</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>front<span class="token punctuation">,</span> <span class="token operator">&amp;</span>rear<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">addRear</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>front<span class="token punctuation">,</span> <span class="token operator">&amp;</span>rear<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">addFront</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>front<span class="token punctuation">,</span> <span class="token operator">&amp;</span>rear<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">addRear</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>front<span class="token punctuation">,</span> <span class="token operator">&amp;</span>rear<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">addFront</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>front<span class="token punctuation">,</span> <span class="token operator">&amp;</span>rear<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\nElements in a deque: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">display</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

  i <span class="token operator">=</span> <span class="token function">delFront</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token operator">&amp;</span>front<span class="token punctuation">,</span> <span class="token operator">&amp;</span>rear<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\nremoved item: %d&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\nElements in a deque after deletion: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">display</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">addRear</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>front<span class="token punctuation">,</span> <span class="token operator">&amp;</span>rear<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">addRear</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>front<span class="token punctuation">,</span> <span class="token operator">&amp;</span>rear<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\nElements in a deque after addition: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">display</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

  i <span class="token operator">=</span> <span class="token function">delRear</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token operator">&amp;</span>front<span class="token punctuation">,</span> <span class="token operator">&amp;</span>rear<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\nremoved item: %d&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\nElements in a deque after deletion: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">display</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

  n <span class="token operator">=</span> <span class="token function">count</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\nTotal number of elements in deque: %d&quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">addFront</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>arr<span class="token punctuation">,</span> <span class="token keyword">int</span> item<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span>pfront<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span>prear<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> i<span class="token punctuation">,</span> k<span class="token punctuation">,</span> c<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">*</span>pfront <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">*</span>prear <span class="token operator">==</span> MAX <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\nDeque is full.\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">*</span>pfront <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">*</span>pfront <span class="token operator">=</span> <span class="token operator">*</span>prear <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    arr<span class="token punctuation">[</span><span class="token operator">*</span>pfront<span class="token punctuation">]</span> <span class="token operator">=</span> item<span class="token punctuation">;</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">*</span>prear <span class="token operator">!=</span> MAX <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    c <span class="token operator">=</span> <span class="token function">count</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    k <span class="token operator">=</span> <span class="token operator">*</span>prear <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> c<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      arr<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      k<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    arr<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> item<span class="token punctuation">;</span>
    <span class="token operator">*</span>pfront <span class="token operator">=</span> k<span class="token punctuation">;</span>
    <span class="token punctuation">(</span><span class="token operator">*</span>prear<span class="token punctuation">)</span><span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span><span class="token operator">*</span>pfront<span class="token punctuation">)</span><span class="token operator">--</span><span class="token punctuation">;</span>
    arr<span class="token punctuation">[</span><span class="token operator">*</span>pfront<span class="token punctuation">]</span> <span class="token operator">=</span> item<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">addRear</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>arr<span class="token punctuation">,</span> <span class="token keyword">int</span> item<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span>pfront<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span>prear<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> i<span class="token punctuation">,</span> k<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">*</span>pfront <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">*</span>prear <span class="token operator">==</span> MAX <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\nDeque is full.\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">*</span>pfront <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">*</span>prear <span class="token operator">=</span> <span class="token operator">*</span>pfront <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    arr<span class="token punctuation">[</span><span class="token operator">*</span>prear<span class="token punctuation">]</span> <span class="token operator">=</span> item<span class="token punctuation">;</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">*</span>prear <span class="token operator">==</span> MAX <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    k <span class="token operator">=</span> <span class="token operator">*</span>pfront <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token operator">*</span>pfront <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token operator">*</span>prear<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      k <span class="token operator">=</span> i<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">==</span> MAX <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
        arr<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">else</span>
        arr<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">(</span><span class="token operator">*</span>prear<span class="token punctuation">)</span><span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">(</span><span class="token operator">*</span>pfront<span class="token punctuation">)</span><span class="token operator">--</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token punctuation">(</span><span class="token operator">*</span>prear<span class="token punctuation">)</span><span class="token operator">++</span><span class="token punctuation">;</span>
  arr<span class="token punctuation">[</span><span class="token operator">*</span>prear<span class="token punctuation">]</span> <span class="token operator">=</span> item<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">delFront</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>arr<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span>pfront<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span>prear<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> item<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">*</span>pfront <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\nDeque is empty.\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  item <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token operator">*</span>pfront<span class="token punctuation">]</span><span class="token punctuation">;</span>
  arr<span class="token punctuation">[</span><span class="token operator">*</span>pfront<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">*</span>pfront <span class="token operator">==</span> <span class="token operator">*</span>prear<span class="token punctuation">)</span>
    <span class="token operator">*</span>pfront <span class="token operator">=</span> <span class="token operator">*</span>prear <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">else</span>
    <span class="token punctuation">(</span><span class="token operator">*</span>pfront<span class="token punctuation">)</span><span class="token operator">++</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> item<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">delRear</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>arr<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span>pfront<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span>prear<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> item<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">*</span>pfront <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\nDeque is empty.\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  item <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token operator">*</span>prear<span class="token punctuation">]</span><span class="token punctuation">;</span>
  arr<span class="token punctuation">[</span><span class="token operator">*</span>prear<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">(</span><span class="token operator">*</span>prear<span class="token punctuation">)</span><span class="token operator">--</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">*</span>prear <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token operator">*</span>pfront <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> item<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">display</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> i<span class="token punctuation">;</span>

  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n front:  &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> MAX<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;  %d&quot;</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;  :rear&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> i<span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> MAX<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span>
      c<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="deque-complexity" tabindex="-1"><a class="header-anchor" href="#deque-complexity" aria-hidden="true">#</a> Deque Complexity</h3><ul><li><code>O(1)</code></li></ul><h3 id="deque-applications" tabindex="-1"><a class="header-anchor" href="#deque-applications" aria-hidden="true">#</a> Deque Applications</h3>`,53),i=n("li",null,"In undo operations on software",-1),d=n("li",null,"To store history in browsers",-1),m=n("a",{href:"#queue"},"queues",-1),f=a('<h2 id="priority-queue" tabindex="-1"><a class="header-anchor" href="#priority-queue" aria-hidden="true">#</a> Priority Queue</h2><p>A priority queue is <strong>a special type of queue</strong> in which each element is associated with a <strong>priority value</strong>.</p><ul><li><p>Elements are served on the basis of their priority</p></li><li><p>That is, <strong>higher priority elements are served first</strong></p></li><li><p>If two elements have the <strong>same priority</strong>, they are served according to their <strong>order in the queue</strong>.</p></li><li><p>Assigning Priority Value</p></li></ul><ol><li><p>Limited set of Priorities:</p><ul><li>Useful in OS</li></ul></li><li><p>Element Priority</p><ul><li><p>Two ways:</p><ul><li><p>Insert in same order as they come and delete max-priority by search: Operation: Insert - <code>O(1)</code>, Delete - <code>O(n)</code></p></li><li><p>Insert in increasing/decreasing order of Priority and Delete last/first element: Operation: Insert - <code>O(n)</code>, Delete - <code>O(1)</code></p></li></ul></li></ul></li></ol><p>Implementation:</p>',5),y=a(`<div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>a<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span>b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> temp <span class="token operator">=</span> <span class="token operator">*</span>b<span class="token punctuation">;</span>
  <span class="token operator">*</span>b <span class="token operator">=</span> <span class="token operator">*</span>a<span class="token punctuation">;</span>
  <span class="token operator">*</span>a <span class="token operator">=</span> temp<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Function to heapify the tree</span>
<span class="token keyword">void</span> <span class="token function">heapify</span><span class="token punctuation">(</span><span class="token keyword">int</span> array<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> size<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>size <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Single element in the heap&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// Find the largest among root, left child and right child</span>
    <span class="token keyword">int</span> largest <span class="token operator">=</span> i<span class="token punctuation">;</span>
    <span class="token keyword">int</span> l <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> r <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;</span> size <span class="token operator">&amp;&amp;</span> array<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">&gt;</span> array<span class="token punctuation">[</span>largest<span class="token punctuation">]</span><span class="token punctuation">)</span>
      largest <span class="token operator">=</span> l<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>r <span class="token operator">&lt;</span> size <span class="token operator">&amp;&amp;</span> array<span class="token punctuation">[</span>r<span class="token punctuation">]</span> <span class="token operator">&gt;</span> array<span class="token punctuation">[</span>largest<span class="token punctuation">]</span><span class="token punctuation">)</span>
      largest <span class="token operator">=</span> r<span class="token punctuation">;</span>

    <span class="token comment">// Swap and continue heapifying if root is not largest</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>largest <span class="token operator">!=</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">swap</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>array<span class="token punctuation">[</span>largest<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">heapify</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> size<span class="token punctuation">,</span> largest<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Function to insert an element into the tree</span>
<span class="token keyword">void</span> <span class="token function">insert</span><span class="token punctuation">(</span><span class="token keyword">int</span> array<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> newNum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>size <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> newNum<span class="token punctuation">;</span>
    size <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    array<span class="token punctuation">[</span>size<span class="token punctuation">]</span> <span class="token operator">=</span> newNum<span class="token punctuation">;</span>
    size <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> size <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">heapify</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> size<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Function to delete an element from the tree</span>
<span class="token keyword">void</span> <span class="token function">deleteRoot</span><span class="token punctuation">(</span><span class="token keyword">int</span> array<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> i<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">==</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">swap</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>array<span class="token punctuation">[</span>size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  size <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> size <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">heapify</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> size<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Print the array</span>
<span class="token keyword">void</span> <span class="token function">printArray</span><span class="token punctuation">(</span><span class="token keyword">int</span> array<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d &quot;</span><span class="token punctuation">,</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Driver code</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> array<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token function">insert</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">insert</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">insert</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">insert</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">insert</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Max-Heap array: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">printArray</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> size<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">deleteRoot</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;After deleting an element: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">printArray</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> size<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="pq-complexity" tabindex="-1"><a class="header-anchor" href="#pq-complexity" aria-hidden="true">#</a> PQ Complexity</h3><table><thead><tr><th>Operations</th><th>peek</th><th>insert</th><th>delete</th></tr></thead><tbody><tr><td>Linked List</td><td><code>O(1)</code></td><td><code>O(n)</code></td><td><code>O(1)</code></td></tr><tr><td>Binary Heap</td><td><code>O(1)</code></td><td><code>O(log n)</code></td><td><code>O(log n)</code></td></tr><tr><td>Binary Search Tree</td><td><code>O(1)</code></td><td><code>O(log n)</code></td><td><code>O(log n)</code></td></tr></tbody></table><h3 id="pq-applications" tabindex="-1"><a class="header-anchor" href="#pq-applications" aria-hidden="true">#</a> PQ Applications</h3><ul><li><p>Dijkstra&#39;s Shortest Path algorithm</p></li><li><p>Anytime you need to dynamically fetch the &#39;next best&#39; or &#39;next worst&#39; element</p></li><li><p>Used in Huffman Coding (which is often used for lossless data compression)</p></li><li><p>Best First Search (BFS) algorithms such as <em>A* search algorithm</em> use PQs to continuously grab the next most promising node</p></li><li><p>Used by Minimum Spanning Tree (MST) algorithms</p></li><li><p>For implementing stack</p></li><li><p>For load balancing and interrupt handling in an operating system</p></li></ul><h2 id="implementing-queue-using-stack" tabindex="-1"><a class="header-anchor" href="#implementing-queue-using-stack" aria-hidden="true">#</a> Implementing Queue Using Stack</h2>`,6);function h(w,g){const t=c("RouterLink");return u(),l("div",null,[k,n("ul",null,[i,d,n("li",null,[s("For implementing both "),p(t,{to:"/Concepts/Data-Structures_and_Algorithms/Data-Structures/Stack.html"},{default:o(()=>[s("stacks")]),_:1}),s(" and "),m])]),f,n("ul",null,[n("li",null,[p(t,{to:"/Concepts/Data-Structures_and_Algorithms/Data-Structures/Heap.html"},{default:o(()=>[s("Heap")]),_:1}),s(" data structure provides an efficient implementation of priority queues.")])]),y])}const b=e(r,[["render",h],["__file","Queue.html.vue"]]);export{b as default};
