import{_ as i,c as a,a2 as B,o as n}from"./chunks/framework.Dtz5kk4D.js";const d=JSON.parse('{"title":"Heap (data-structure)","description":"A complete Binary Tree","frontmatter":{"title":"Heap (data-structure)","description":"A complete Binary Tree"},"headers":[],"relativePath":"Concepts/Data-Structures_and_Algorithms/Data-Structures/Heap.md","filePath":"Concepts/Data-Structures_and_Algorithms/Data-Structures/Heap.md","lastUpdated":1662907892000}'),h={name:"Concepts/Data-Structures_and_Algorithms/Data-Structures/Heap.md"};function k(l,s,p,t,F,e){return n(),a("div",null,s[0]||(s[0]=[B(`<h1 id="heap-data-structure" tabindex="-1">Heap (data-structure) <a class="header-anchor" href="#heap-data-structure" aria-label="Permalink to &quot;Heap (data-structure)&quot;">​</a></h1><p>A heap is a specialized <a href="./Trees.html">tree</a>-based data structure which is essentially an almost complete Binary Tree that satisfies the <strong>heap property</strong> described below:</p><ul><li><p>In a <em>min heap</em>, if <code>P</code> is a parent node of <code>C</code>, then the key (the value) of P is less than or equal to the key of <code>C</code>.</p></li><li><p>In a <em>max heap</em>, the key of <code>P</code> is greater than or equal to the key of <code>C</code></p></li></ul><p>In other words, where any given node is:</p><ul><li><p><strong>always greater than its child node/s</strong> and the key of the root node is the largest among all other nodes. This property is also called <strong>max heap property</strong></p></li><li><p><strong>always smaller than the child node/s</strong> and the key of the root node is the smallest among all other nodes. This property is also called <strong>min heap property</strong></p></li><li><p>Duplicates are allowed</p></li><li><p>In-place replacement</p></li><li><p>We can only delete root node</p></li></ul><h2 id="operations" tabindex="-1">Operations <a class="header-anchor" href="#operations" aria-label="Permalink to &quot;Operations&quot;">​</a></h2><p><strong>Heapify</strong>: is the process of creating a heap data structure from a binary tree.</p><ul><li>It is used to create a <em>Min-Heap</em> or a <em>Max-Heap</em>.</li></ul><ol><li><p>Create a binary tree from an array</p></li><li><p>Start from the first index of non-leaf node whose index is given by <code>n/2 - 1</code></p></li><li><p>Set current element <code>i</code> as <code>largest</code></p></li><li><p>The index of left child is given by <code>2i + 1</code> and the right child is given by <code>2i + 2</code></p><ul><li><p>If <code>leftChild</code> is greater than <code>currentElement</code> (i.e. element at ith index), set <code>leftChildIndex</code> as largest</p></li><li><p>If <code>rightChild</code> is greater than element in <code>largest</code>, set <code>rightChildIndex</code> as largest</p></li></ul></li><li><p>Swap <code>largest</code> with <code>currentElement</code></p></li><li><p>Repeat steps 2-6 until the subtrees are also heapified.</p></li></ol><h2 id="implementation" tabindex="-1">Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;Implementation&quot;">​</a></h2><p>Array:</p><ul><li><code>Arr[(index - 1) / 2]</code>: Returns the parent node</li><li><code>Arr[(2 * index) + 1]</code>: Returns the left child node</li><li><code>Arr[(2 * index) + 2]</code>: Returns the right child node</li></ul><p>Node:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes ayu-dark ayu-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">#include</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;"> &lt;stdio.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">int</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> size </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">=</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 0</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">void</span><span style="--shiki-light:#FFB454;--shiki-dark:#FFB454;"> swap</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">int</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> *</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;">a</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;"> int</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> *</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;">b</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">)</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">{</span></span>
<span class="line"><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">  int</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> temp </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">=</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> *</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">b</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">  *</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">b </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">=</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> *</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">a</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">  *</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">a </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">=</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> temp</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">void</span><span style="--shiki-light:#FFB454;--shiki-dark:#FFB454;"> heapify</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">int</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> array</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">[]</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;"> int</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> size</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;"> int</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> i</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">)</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">{</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">  if</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> (size </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">==</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 1</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">)</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">  {</span></span>
<span class="line"><span style="--shiki-light:#FFB454;--shiki-dark:#FFB454;">    printf</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;">&quot;Single element in the heap&quot;</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">)</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">  }</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">  else</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">  {</span></span>
<span class="line"><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">    int</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> largest </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">=</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> i</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">    int</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> l </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">=</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 2</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> *</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> i </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">+</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 1</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">    int</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> r </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">=</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 2</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> *</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> i </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">+</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 2</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">    if</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> (l </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">&lt;</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> size </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">&amp;&amp;</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> array[l] </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">&gt;</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> array[largest])</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">      largest </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">=</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> l</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">    if</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> (r </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">&lt;</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> size </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">&amp;&amp;</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> array[r] </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">&gt;</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> array[largest])</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">      largest </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">=</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> r</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">    if</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> (largest </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">!=</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> i)</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">    {</span></span>
<span class="line"><span style="--shiki-light:#FFB454;--shiki-dark:#FFB454;">      swap</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">&amp;</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">array[i]</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> &amp;</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">array[largest])</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#FFB454;--shiki-dark:#FFB454;">      heapify</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(array</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> size</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> largest)</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">    }</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">  }</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">void</span><span style="--shiki-light:#FFB454;--shiki-dark:#FFB454;"> insert</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">int</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> array</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">[]</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;"> int</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> newNum</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">)</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">{</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">  if</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> (size </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">==</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 0</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">)</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">  {</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">    array[</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;">0</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">] </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">=</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> newNum</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">    size </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">+=</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 1</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">  }</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">  else</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">  {</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">    array[size] </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">=</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> newNum</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">    size </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">+=</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 1</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">    for</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> (</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">int</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> i </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">=</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> size </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">/</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 2</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> -</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 1</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> i </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">&gt;=</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 0</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> i</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">--</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">)</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">    {</span></span>
<span class="line"><span style="--shiki-light:#FFB454;--shiki-dark:#FFB454;">      heapify</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(array</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> size</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> i)</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">    }</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">  }</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">void</span><span style="--shiki-light:#FFB454;--shiki-dark:#FFB454;"> deleteRoot</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">int</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> array</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">[]</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;"> int</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> num</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">)</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">{</span></span>
<span class="line"><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">  int</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> i</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">  for</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> (i </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">=</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 0</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> i </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">&lt;</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> size</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> i</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">++</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">)</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">  {</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">    if</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> (num </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">==</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> array[i])</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">      break</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#FFB454;--shiki-dark:#FFB454;">  swap</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">&amp;</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">array[i]</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> &amp;</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">array[size </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">-</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 1</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">])</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">  size </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">-=</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 1</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">  for</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> (</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">int</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> i </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">=</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> size </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">/</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 2</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> -</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 1</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> i </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">&gt;=</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 0</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> i</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">--</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">)</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">  {</span></span>
<span class="line"><span style="--shiki-light:#FFB454;--shiki-dark:#FFB454;">    heapify</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(array</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> size</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> i)</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">  }</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">void</span><span style="--shiki-light:#FFB454;--shiki-dark:#FFB454;"> printArray</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">int</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> array</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">[]</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;"> int</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> size</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">)</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">{</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">  for</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> (</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">int</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> i </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">=</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 0</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> i </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">&lt;</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> size</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> ++</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">i)</span></span>
<span class="line"><span style="--shiki-light:#FFB454;--shiki-dark:#FFB454;">    printf</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;">&quot;</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;">%d</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;"> &quot;</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> array[i])</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#FFB454;--shiki-dark:#FFB454;">  printf</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;">&quot;</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;">\\n</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;">&quot;</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">)</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">int</span><span style="--shiki-light:#FFB454;--shiki-dark:#FFB454;"> main</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">()</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">{</span></span>
<span class="line"><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">  int</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> array[</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;">10</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">]</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#FFB454;--shiki-dark:#FFB454;">  insert</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(array</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 3</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">)</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#FFB454;--shiki-dark:#FFB454;">  insert</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(array</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 4</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">)</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#FFB454;--shiki-dark:#FFB454;">  insert</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(array</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 9</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">)</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#FFB454;--shiki-dark:#FFB454;">  insert</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(array</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 5</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">)</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#FFB454;--shiki-dark:#FFB454;">  insert</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(array</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 2</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">)</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#FFB454;--shiki-dark:#FFB454;">  printf</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;">&quot;Max-Heap array: &quot;</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">)</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#FFB454;--shiki-dark:#FFB454;">  printArray</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(array</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> size)</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#FFB454;--shiki-dark:#FFB454;">  deleteRoot</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(array</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 4</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">)</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#FFB454;--shiki-dark:#FFB454;">  printf</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;">&quot;After deleting an element: &quot;</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">)</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#FFB454;--shiki-dark:#FFB454;">  printArray</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(array</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> size)</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">}</span></span></code></pre></div><h2 id="applications" tabindex="-1">Applications <a class="header-anchor" href="#applications" aria-label="Permalink to &quot;Applications&quot;">​</a></h2><ul><li><p>Heap is used while implementing a <a href="./Queue.html#priority-queue">priority queue</a></p></li><li><p>Dijkstra&#39;s Shortest Path algorithm</p></li><li><p><a href="./../Algorithms/Sorting_Algorithms.html#heap-sort">Heap Sort</a></p></li></ul>`,16)]))}const D=i(h,[["render",k]]);export{d as __pageData,D as default};