import{_ as o,r as e,o as c,c as l,b as n,d as a,a as t,w as p,e as u}from"./app-jDLxG9B3.js";const i={},r=n("h1",{id:"heap-data-structure",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#heap-data-structure","aria-hidden":"true"},"#"),a(" Heap (data-structure)")],-1),k=n("strong",null,"heap property",-1),d=u(`<ul><li><p>In a <em>min heap</em>, if <code>P</code> is a parent node of <code>C</code>, then the key (the value) of P is less than or equal to the key of <code>C</code>.</p></li><li><p>In a <em>max heap</em>, the key of <code>P</code> is greater than or equal to the key of <code>C</code></p></li></ul><p>In other words, where any given node is:</p><ul><li><p><strong>always greater than its child node/s</strong> and the key of the root node is the largest among all other nodes. This property is also called <strong>max heap property</strong></p></li><li><p><strong>always smaller than the child node/s</strong> and the key of the root node is the smallest among all other nodes. This property is also called <strong>min heap property</strong></p></li><li><p>Duplicates are allowed</p></li><li><p>In-place replacement</p></li><li><p>We can only delete root node</p></li></ul><h2 id="operations" tabindex="-1"><a class="header-anchor" href="#operations" aria-hidden="true">#</a> Operations</h2><p><strong>Heapify</strong>: is the process of creating a heap data structure from a binary tree.</p><ul><li>It is used to create a <em>Min-Heap</em> or a <em>Max-Heap</em>.</li></ul><ol><li><p>Create a binary tree from an array</p></li><li><p>Start from the first index of non-leaf node whose index is given by <code>n/2 - 1</code></p></li><li><p>Set current element <code>i</code> as <code>largest</code></p></li><li><p>The index of left child is given by <code>2i + 1</code> and the right child is given by <code>2i + 2</code></p><ul><li><p>If <code>leftChild</code> is greater than <code>currentElement</code> (i.e. element at ith index), set <code>leftChildIndex</code> as largest</p></li><li><p>If <code>rightChild</code> is greater than element in <code>largest</code>, set <code>rightChildIndex</code> as largest</p></li></ul></li><li><p>Swap <code>largest</code> with <code>currentElement</code></p></li><li><p>Repeat steps 2-6 until the subtrees are also heapified.</p></li></ol><h2 id="implementation" tabindex="-1"><a class="header-anchor" href="#implementation" aria-hidden="true">#</a> Implementation</h2><p>Array:</p><ul><li><code>Arr[(index - 1) / 2]</code>: Returns the parent node</li><li><code>Arr[(2 * index) + 1]</code>: Returns the left child node</li><li><code>Arr[(2 * index) + 2]</code>: Returns the right child node</li></ul><p>Node:</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>a<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span>b<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token keyword">int</span> temp <span class="token operator">=</span> <span class="token operator">*</span>b<span class="token punctuation">;</span>
  <span class="token operator">*</span>b <span class="token operator">=</span> <span class="token operator">*</span>a<span class="token punctuation">;</span>
  <span class="token operator">*</span>a <span class="token operator">=</span> temp<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">heapify</span><span class="token punctuation">(</span><span class="token keyword">int</span> array<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> size<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>size <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Single element in the heap&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">else</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">int</span> largest <span class="token operator">=</span> i<span class="token punctuation">;</span>
    <span class="token keyword">int</span> l <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> r <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;</span> size <span class="token operator">&amp;&amp;</span> array<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">&gt;</span> array<span class="token punctuation">[</span>largest<span class="token punctuation">]</span><span class="token punctuation">)</span>
      largest <span class="token operator">=</span> l<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>r <span class="token operator">&lt;</span> size <span class="token operator">&amp;&amp;</span> array<span class="token punctuation">[</span>r<span class="token punctuation">]</span> <span class="token operator">&gt;</span> array<span class="token punctuation">[</span>largest<span class="token punctuation">]</span><span class="token punctuation">)</span>
      largest <span class="token operator">=</span> r<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>largest <span class="token operator">!=</span> i<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token function">swap</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>array<span class="token punctuation">[</span>largest<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">heapify</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> size<span class="token punctuation">,</span> largest<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">insert</span><span class="token punctuation">(</span><span class="token keyword">int</span> array<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> newNum<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>size <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> newNum<span class="token punctuation">;</span>
    size <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">else</span>
  <span class="token punctuation">{</span>
    array<span class="token punctuation">[</span>size<span class="token punctuation">]</span> <span class="token operator">=</span> newNum<span class="token punctuation">;</span>
    size <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> size <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token function">heapify</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> size<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">deleteRoot</span><span class="token punctuation">(</span><span class="token keyword">int</span> array<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> num<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token keyword">int</span> i<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">==</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">swap</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>array<span class="token punctuation">[</span>size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  size <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> size <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token function">heapify</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> size<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">printArray</span><span class="token punctuation">(</span><span class="token keyword">int</span> array<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> size<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d &quot;</span><span class="token punctuation">,</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
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
</code></pre></div><h2 id="applications" tabindex="-1"><a class="header-anchor" href="#applications" aria-hidden="true">#</a> Applications</h2>`,13),h=n("li",null,[n("p",null,"Dijkstra's Shortest Path algorithm")],-1);function y(m,f){const s=e("RouterLink");return c(),l("div",null,[r,n("p",null,[a("A heap is a specialized "),t(s,{to:"/Concepts/Data-Structures_and_Algorithms/Data-Structures/Trees.html"},{default:p(()=>[a("tree")]),_:1}),a("-based data structure which is essentially an almost complete Binary Tree that satisfies the "),k,a(" described below:")]),d,n("ul",null,[n("li",null,[n("p",null,[a("Heap is used while implementing a "),t(s,{to:"/Concepts/Data-Structures_and_Algorithms/Data-Structures/Queue.html#priority-queue"},{default:p(()=>[a("priority queue")]),_:1})])]),h,n("li",null,[n("p",null,[t(s,{to:"/Concepts/Data-Structures_and_Algorithms/Algorithms/Sorting_Algorithms.html#heap-sort"},{default:p(()=>[a("Heap Sort")]),_:1})])])])])}const w=o(i,[["render",y],["__file","Heap.html.vue"]]);export{w as default};
