import{_ as n,o as s,c as a,e as t}from"./app-jDLxG9B3.js";const e="/assets/singly-linked-list-ftaN4vep.svg",p={},o=t('<h1 id="linked-list" tabindex="-1"><a class="header-anchor" href="#linked-list" aria-hidden="true">#</a> Linked List</h1><p>A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations (unlike arrays) instead, each element points to the next using pointers.</p><p><img src="'+e+`" alt="singly-linked-list"></p><p>Linked list is a linear collection of data elements, whose order is not given by their physical placement in memory. Instead, each element points to the next.</p><ul><li><p>They are used when the <strong>size of elements is not known or may increase</strong>.</p></li><li><p>As the memory location of each element is not known beforehand, it is very difficult to find the element. To find an element we need to start from the first element, get the address of the next element and so on, till the element is found.</p></li><li><p>Access time is linear (random access, is not feasible)</p></li></ul><p>Advantages of arrays:</p><ul><li><p>Collection of same data-types</p></li><li><p>All elements of array are stored in the contiguous memory locations</p></li><li><p>Random Access <code>O(1)</code>: Array is a random access data structure. Any element of array can be accessed in just one statement</p></li><li><p>Easy to implement algorithms</p></li></ul><p>Problems with arrays:</p><ul><li><p>Fixed size</p></li><li><p>Elements must of same data type</p></li><li><p>Insertion and deletion operations are costly as elements are shifted one position ahead or back</p></li><li><p><em>C</em> doesn&#39;t perform any array index bound checking. For an array of size n we can write to n+5th element with getting error (based on compiler) and also if we access elements from outside of array boundaries, we get garbage value (based on compiler we get error).</p></li></ul><p>To overcome the issues with arrays, we can use Linked list.</p><p>Types of Linked List:</p><ul><li><a href="#singly-linked-list">Singly Linked List</a></li><li><a href="#circular-linked-list">Circular Linked List</a></li><li><a href="#doubly-linked-list">Doubly Linked List</a></li></ul><h2 id="singly-linked-list" tabindex="-1"><a class="header-anchor" href="#singly-linked-list" aria-hidden="true">#</a> Singly Linked List</h2><p>Singly Linked List contain nodes which have two parts:</p><ol><li><p>Data field(s): Data of any data-type</p></li><li><p>Link (pointer): An address field (usually named next) of type pointer. It will store the address of next node.</p></li></ol><h3 id="operations" tabindex="-1"><a class="header-anchor" href="#operations" aria-hidden="true">#</a> Operations</h3><ul><li><strong>Traversal</strong>: access each element of the linked list</li><li><strong>Insertion</strong>: adds a new element to the linked list</li><li><strong>Deletion</strong>: removes the existing elements</li><li><strong>Search</strong>: find a node in the linked list</li><li><strong>Sort</strong>: sort the nodes of the linked list</li></ul><h3 id="creating-linked-list" tabindex="-1"><a class="header-anchor" href="#creating-linked-list" aria-hidden="true">#</a> Creating Linked List</h3><ol><li><p>Create the first node with some data and an empty link, which is set to either <code>NULL</code> or <code>0</code> (0 is an invalid address) (created in Heap).</p></li><li><p>Create a pointer called head (you can call it anything) which will store the address of the first node (created in Stack). This also can be interpreted as the name of the Linked list as it is the only identity of the Linked list we keep track of.</p></li><li><p>Create the next node in the same way as Step-1 and link the first node to this new node</p></li><li><p>Continue this process to create a Linked list of n elements.</p></li></ol><p>In C/C++ <code>struct</code> is used to create a node (class can be used in C++). A <code>struct</code> that contains pointer of its own type is called Self referential structure.</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">Node</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> data<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><p>C++:</p><div class="language-cpp" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// struct can also be used</span>
<span class="token keyword">class</span> <span class="token class-name">Node</span>
<span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">int</span> data<span class="token punctuation">;</span>
    Node <span class="token operator">*</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>Python:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment"># Node class</span>
<span class="token keyword">class</span> <span class="token class-name">Node</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>data <span class="token operator">=</span> data
        self<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> <span class="token boolean">None</span>

<span class="token comment"># Linked list class</span>
<span class="token keyword">class</span> <span class="token class-name">LinkedList</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token boolean">None</span>
</code></pre></div><p>C#:</p><div class="language-csharp" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">LinkedList</span> <span class="token punctuation">{</span>
    <span class="token class-name">Node</span> head<span class="token punctuation">;</span>

    <span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">int</span></span> data<span class="token punctuation">;</span>
        <span class="token class-name">Node</span> next<span class="token punctuation">;</span>

        <span class="token function">Node</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> d<span class="token punctuation">)</span> <span class="token punctuation">{</span> data <span class="token operator">=</span> d<span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>JavaScript:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> next <span class="token operator">=</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Create Linked List:</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">Node</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> data<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token operator">*</span>head <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">create_linked_list</span><span class="token punctuation">(</span><span class="token keyword">int</span> A<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>temp<span class="token punctuation">,</span> <span class="token operator">*</span>last<span class="token punctuation">;</span>

    head <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    head<span class="token operator">-&gt;</span>data <span class="token operator">=</span> A<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    head<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>

    last <span class="token operator">=</span> head<span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        temp <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        temp<span class="token operator">-&gt;</span>data <span class="token operator">=</span> A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        temp<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
        last<span class="token operator">-&gt;</span>next <span class="token operator">=</span> temp<span class="token punctuation">;</span>
        last <span class="token operator">=</span> temp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> A<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token function">create_linked_list</span><span class="token punctuation">(</span>A<span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Print Linked List:</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">print_list</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">//  pass head if head is not global</span>
<span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>n <span class="token operator">=</span> head<span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d &quot;</span><span class="token punctuation">,</span> n<span class="token operator">-&gt;</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        n <span class="token operator">=</span> n<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Recursive:</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">print_list_recursive</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> n<span class="token operator">-&gt;</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">print_list_recursive</span><span class="token punctuation">(</span>n<span class="token operator">-&gt;</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">print_list_recursive</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="circular-linked-list" tabindex="-1"><a class="header-anchor" href="#circular-linked-list" aria-hidden="true">#</a> Circular Linked List</h2><p>A Linked List where the address of the last node consists of the address of the first node.</p><ul><li>The last element is linked to the first element. This forms a circular loop.</li></ul><h3 id="traverse-cll" tabindex="-1"><a class="header-anchor" href="#traverse-cll" aria-hidden="true">#</a> Traverse CLL</h3><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">print_list</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>n <span class="token operator">=</span> head<span class="token punctuation">;</span>

    <span class="token keyword">do</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d &quot;</span><span class="token punctuation">,</span> n<span class="token operator">-&gt;</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        n <span class="token operator">=</span> n<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>

    <span class="token punctuation">}</span><span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">!=</span> head<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Recursive:</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">print_list_recursive</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span> flag <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">!=</span> head <span class="token operator">||</span> flag <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        flag <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> n<span class="token operator">-&gt;</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">print_list_recursive</span><span class="token punctuation">(</span>n<span class="token operator">-&gt;</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    flag <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">print_list_recursive</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="doubly-linked-list" tabindex="-1"><a class="header-anchor" href="#doubly-linked-list" aria-hidden="true">#</a> Doubly Linked List</h2><p>A Doubly Linked List is a linked data structure that consists of a set of sequentially linked records called nodes.</p><ul><li><p>Each node contains two fields, called links, that are references to the previous and to the next node in the sequence of nodes.</p></li><li><p>The two node links allow traversal of the list in either direction.</p></li></ul><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">Node</span>
<span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>prev<span class="token punctuation">;</span>
    <span class="token keyword">int</span> data<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>JavaScript:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> prev <span class="token operator">=</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> next<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>prev <span class="token operator">=</span> prev<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="performance" tabindex="-1"><a class="header-anchor" href="#performance" aria-hidden="true">#</a> Performance</h2><p>Time Complexity:</p><table><thead><tr><th>Operation</th><th style="text-align:center;">Array</th><th style="text-align:center;">Linked List</th></tr></thead><tbody><tr><td>Access</td><td style="text-align:center;"><strong><code>O(1)</code></strong></td><td style="text-align:center;"><code>O(n)</code></td></tr><tr><td>Insert first</td><td style="text-align:center;"><code>O(n)</code></td><td style="text-align:center;"><strong><code>O(1)</code></strong></td></tr><tr><td>Insert middle</td><td style="text-align:center;"><code>O(n)</code></td><td style="text-align:center;"><code>O(n)</code></td></tr><tr><td>Insert last</td><td style="text-align:center;"><strong><code>O(1)</code></strong></td><td style="text-align:center;"><code>O(n)</code></td></tr><tr><td>Linear Search</td><td style="text-align:center;"><code>O(n)</code></td><td style="text-align:center;"><code>O(n)</code></td></tr><tr><td>Binary Search</td><td style="text-align:center;"><strong><code>O(log n)</code></strong></td><td style="text-align:center;"><code>O(n x log n)</code></td></tr><tr><td>Deletion</td><td style="text-align:center;"><code>O(n)</code></td><td style="text-align:center;"><strong><code>O(1)</code></strong></td></tr></tbody></table><ul><li>Insertion Sort</li><li>Merge Sort</li></ul><p>Space Complexity:</p><ul><li><code>O(n)</code></li></ul><h2 id="issues" tabindex="-1"><a class="header-anchor" href="#issues" aria-hidden="true">#</a> Issues</h2><ul><li>Segmentation faults</li><li>Memory leaks</li></ul>`,56),c=[o];function l(i,r){return s(),a("div",null,c)}const k=n(p,[["render",l],["__file","Linked_List.html.vue"]]);export{k as default};
