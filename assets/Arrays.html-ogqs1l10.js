import{_ as n,o as a,c as s,e as p}from"./app-jDLxG9B3.js";const t="/assets/array-address-formula-for-nth-dimension-rtc_Gy8Z.svg",o={},e=p(`<h1 id="arrays" tabindex="-1"><a class="header-anchor" href="#arrays" aria-hidden="true">#</a> Arrays</h1><p><em>Definition:</em> Contiguous area of memory consisting of equal-size elements. An array variable will store the address of the first element of that array (it acts like a pointer)</p><p>Array is a data structure consisting of a collection of elements, each element is stored contiguously (right next to each other) in memory</p><ul><li><p>They are used when the size of elements is already known, as adding new element requires a free memory next to the last element, else the whole array needs to be moved to a new memory location with enough space. If there is no space to accommodate the whole array, it may cause memory issues</p></li><li><p>As the memory location of each element can be determined easily, it is very fast in getting an element from anywhere in the array</p></li><li><p>All elements in the array should be the same type (all integers or all doubles or all strings and so on).</p></li></ul><p><em>Example:</em> Declaring and initializing an array</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// MEMORY ALLOCATION HAPPENS DURING DECLARATION</span>
    <span class="token comment">// ARRAY OF INTEGERS OF LENGTH 5 AND THE ARRAY CONTAINS GARBAGE VALUES</span>
    <span class="token keyword">int</span> A<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>               <span class="token comment">// DECLARATION</span>

    <span class="token keyword">int</span> B<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>    <span class="token comment">// DECLARATION and INITIALIZATION</span>

    <span class="token comment">// INITIALIZING ONLY FEW ELEMENTS</span>
    <span class="token keyword">int</span> C<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>    <span class="token comment">// REST OF THE ELEMENTS WILL BE 0 i.e. {1,2,0,0}</span>

    <span class="token comment">// INITIALIZE ALL ELEMENTS WITH 0</span>
    <span class="token keyword">int</span> D<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>       <span class="token comment">// {0,0,0,0}</span>

    <span class="token comment">// SIZE OF AN ARRAY CAN BE SKIPPED</span>
    <span class="token keyword">int</span> E<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>  <span class="token comment">// SIZE 3</span>
<span class="token punctuation">}</span>
</code></pre></div><p><em>Example:</em> Set and get values in elements of an array</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> A<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> A<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// 1</span>

    A<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">55</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> A<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// 55</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> A<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// 2</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span> <span class="token punctuation">[</span>A<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 55</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token punctuation">[</span>A<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 2</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>A<span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">// 55 - IT IS POINTING TO 0th ELEMENT</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span><span class="token punctuation">(</span>A <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2 - POINTING TO THE NEXT ADDRESS</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span><span class="token punctuation">(</span>A <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>

    <span class="token comment">// PRINT THE MEMORY ADDRESS OF ARRAY ELEMENTS</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%u&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// OUTPUT:</span>
    <span class="token comment">// 3638371264</span>
    <span class="token comment">// 3638371268</span>
    <span class="token comment">// 3638371272</span>
<span class="token punctuation">}</span>
</code></pre></div><p><em>Example:</em> Read elements of an array using <code>foreach</code> (C++)</p><div class="language-cpp" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> A<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    cout <span class="token operator">&lt;&lt;</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> x <span class="token operator">:</span> A<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> x <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><p>Indexed by contiguous integers starting with <em>0</em> in case of C/C++</p></li><li><p>Size of an array is <strong>sum of sizes consumed by all of its elements</strong></p></li><li><p>If an array of size <code>5</code> and only first <code>3</code> elements are initialized with values then the remaining <code>2</code> elements value will be set to <code>0</code></p></li><li><p>Arrays have constant-time access to any element and to add/remove at the end. Linear time to add/remove at an arbitrary location.</p></li><li><p>To find the address of any element in an array use: <code>array_starting_address + element_size * (index_of_element - index_of_first_element)</code></p></li></ul><h2 id="size" tabindex="-1"><a class="header-anchor" href="#size" aria-hidden="true">#</a> Size</h2><p>Arrays are created inside the Stack Memory and have fixed size and cannot be changed after initialization.</p><p>The size of an array can be determined dynamically (user inputs the size during runtime) (supported in C++):</p><ul><li><p>We can create an array of size <em>n</em>, where <em>n</em> is determined during runtime by the user (dynamically)</p></li><li><p>After the size is know, an array of size <em>n</em> is declared</p></li><li><p>Here the array cannot be initialized with values during declaration</p></li><li><p>Garbage value is set instead of setting <code>0</code> for elements whose value was not provided</p></li></ul><p><em>Example:</em></p><div class="language-cpp" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>

    <span class="token keyword">int</span> n<span class="token punctuation">;</span>

    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Enter the number of elements in the array: &quot;</span><span class="token punctuation">;</span>
    cin <span class="token operator">&gt;&gt;</span> n<span class="token punctuation">;</span>

    <span class="token keyword">int</span> A<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> x <span class="token operator">:</span> A<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> x <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>Variable size array is available in C++ and latest compilers of C (not in old C compilers)</p></blockquote><p>We can create an array inside Heap memory as well using a pointer:</p><ul><li>Create a pointer</li><li>Allocate memory to an array of some size</li><li>Assign the address of the allocated memory to the pointer</li><li>Now the pointer will point to the first element of the array</li><li>The elements of the array can be utilized using the same array syntax with the pointer</li></ul><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>p<span class="token punctuation">;</span>

    p <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">*</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// p = new int[5]           // IN C++</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// ACCESSING ELEMENTS OF THE ARRAY</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="increase-size-of-an-array-created-in-heap" tabindex="-1"><a class="header-anchor" href="#increase-size-of-an-array-created-in-heap" aria-hidden="true">#</a> Increase Size of an Array Created In Heap</h3><p>Size of an array cannot be changed after initialization. So to accommodate more elements we need to use pointers to create arrays.</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>q <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">*</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>

    p<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    p<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        q<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> q<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">free</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// delete [] p;</span>

    p <span class="token operator">=</span> q<span class="token punctuation">;</span>
    q <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// OUTPUT:</span>
<span class="token comment">// *p = 3, 6</span>
<span class="token comment">// *q = 3, 6, 0, 0, 0</span>
<span class="token comment">// *p = 3, 6, 0, 0, 0</span>
<span class="token comment">// *q = NULL pointer</span>
</code></pre></div><h2 id="arrays-in-compilers" tabindex="-1"><a class="header-anchor" href="#arrays-in-compilers" aria-hidden="true">#</a> Arrays in Compilers</h2><p>Compilers will not know the address during compilation. To get the address of the array and its elements the compiler will use the formula <code>Address(A[i]) = L0 + (i * w)</code>, where:</p><ul><li><code>L0</code>: is the memory address of the first element of the array</li><li><code>i</code>: is the nth element which needs to be accessed</li><li><code>w</code>: is the size of the Data type (word size)</li></ul><p>During runtime the address of the array is known and the value of <code>L0</code> is update and this is known as <em>Data binding</em> (systems or assembly programming).</p><h2 id="multi-dimensional-arrays" tabindex="-1"><a class="header-anchor" href="#multi-dimensional-arrays" aria-hidden="true">#</a> Multi-Dimensional Arrays</h2><p>The size of a two-dimensional array is represented as <code>m x n</code>, where <code>m</code> is the number of rows and <code>n</code> is the number of columns.</p><p>We can create multi-dimensional arrays by:</p><ol><li><p>Array declared with array size and dimensions. In memory array will have one dimension but the compiler provides ways to define multi-dimensions. Array is created in Stack Memory.</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> A<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div></li><li><p>Array of pointers where each pointer points to an array. Multi-dimensional array in Heap memory. Pointer array is created in Stack Memory and the arrays which each element points to is stored in Heap Memory.</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token operator">*</span>A<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

A<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token number">4</span> <span class="token operator">*</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
A<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token number">4</span> <span class="token operator">*</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
A<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token number">4</span> <span class="token operator">*</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></li><li><p>Using double pointers. The double pointer is created in Stack Memory and the array of pointers along with the arrays will be created in Heap Memory,</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token operator">*</span><span class="token operator">*</span>A<span class="token punctuation">;</span> <span class="token comment">// DOUBLE POINTER</span>

    A <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// A = new int *(5);</span>

    A<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">*</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    A<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">*</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    A<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">;</span>
    A<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">45</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> A<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ol><p>When we create a multi-dimensional array, during runtime the actual array created will be linear not multi-dimensional in memory. So, the multi-dimensional array is mapped on to (or represented as) single dimension and stored inside the memory.</p><p>There are two ways to do this mapping or representation:</p><ol><li><p><strong>Row-major:</strong> The elements of multi-dimensional array are mapped row by row. If we stack all elements of an array as <code>(1,1),(1,2)...,(1,n),(2,1),(2,2)...,(2,n)...,</code> the <strong>column values change</strong> rapidly, hence <em>Row-Major</em>.</p><ul><li><p>Formula for <code>m x n</code> metrics:</p><p><code>Address(A[i][j] = L0 + ((i * n) + j) * w</code></p></li><li><p>Formula for <code>d1 x d2 x d3 x d4</code> metrics:</p><p><code>Address(A[i1][i2][i3][i4]) = L0 + ((i1 * d2 * d3 * d4) + (i2 * d3 * d4) + (i3 * d4) + i4) * w</code></p></li><li><p>Multiplication of dimensions goes left to right.</p></li><li><p>Formula for <code>d1 x d2 x d3 .... xdn</code>metrics:</p><p><img src="`+t+`" alt="array-address-formula-for-nth-dimension"></p></li><li><p>For n dimension the number of multiplication are <code>n(n - 1)/2</code> and have <code>O(n^2)</code>. Optimizing the above formula:</p><p><code>Address(A[i1][i2][i3][i4]) = L0 + (i4 + d4 * (i3 + d3 * (i2 + (d2 * i1)))) * w</code></p></li><li><p>Here the number of multiplications are reduced to <code>n-1</code> and hence <code>O(n)</code>.</p></li></ul></li><li><p><strong>Column-major:</strong> The elements of multi-dimensional array are mapped column by column. If we stack all elements of an array as <code>(1,1),(2,1)...,(n,1),(1,2),(2,2)...,(n,2)...,</code> the <strong>row values change</strong> rapidly, hence <em>Column-Major</em>.</p><ul><li><p>Formula for <code>m x n</code> metrics: <code>Address(A[i][j] = L0 + (i + (j * m)) * w</code></p></li><li><p>Formula for <code>d1 x d2 x d3 x d4</code> metrics: <code>Address(A[i1][i2][i3][i4]) = L0 + ((i4 * d3 * d2 * d1) + (i3 * d2 * d1) + (i2 * d1) + i1) * w</code></p></li><li><p>Multiplication of dimensions goes right to left.</p></li></ul></li></ol><p>Looking at the formula we can see that both the methods are equally efficient and any one of them can be used.</p><p>In C/C++, <strong>Row-major mapping is used</strong>.</p><h2 id="performance" tabindex="-1"><a class="header-anchor" href="#performance" aria-hidden="true">#</a> Performance</h2><table><thead><tr><th style="text-align:center;">~</th><th style="text-align:center;">Add</th><th style="text-align:center;">Remove</th></tr></thead><tbody><tr><td style="text-align:center;">Beginning</td><td style="text-align:center;"><code>O(n)</code></td><td style="text-align:center;"><code>O(n)</code></td></tr><tr><td style="text-align:center;">End</td><td style="text-align:center;"><code>O(1)</code></td><td style="text-align:center;"><code>O(1)</code></td></tr><tr><td style="text-align:center;">Middle</td><td style="text-align:center;"><code>O(n)</code></td><td style="text-align:center;"><code>O(n)</code></td></tr></tbody></table><div class="custom-container tip"><p class="custom-container-title">NOTE</p><p>Most languages use zero-based indexing, some use one as the starting index, and some allow the user to specify the starting index.</p></div><h2 id="implementation" tabindex="-1"><a class="header-anchor" href="#implementation" aria-hidden="true">#</a> Implementation</h2><p>Data Type is defined as:</p><ul><li>Representation of Data</li><li>Operations allowed on Data</li></ul><p>Array ADT:</p><ul><li>Representation of Data: Defined by the compiler</li><li>Operations allowed on Data: Defined by the user</li></ul><h3 id="create-an-array-adt" tabindex="-1"><a class="header-anchor" href="#create-an-array-adt" aria-hidden="true">#</a> Create An Array ADT</h3><p>Let us create an Array ADT in Heap Memory:</p><ul><li>Array pointer: <code>*A</code></li><li>Array size: <code>size</code></li><li>Number of elements present: <code>length</code></li></ul><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">Array</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>A<span class="token punctuation">;</span>
    <span class="token keyword">int</span> size<span class="token punctuation">;</span>
    <span class="token keyword">int</span> length<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">Array</span> arr<span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Enter the size of the array: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>arr<span class="token punctuation">.</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span>

    arr<span class="token punctuation">.</span>A <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>size <span class="token operator">*</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    arr<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="initialize" tabindex="-1"><a class="header-anchor" href="#initialize" aria-hidden="true">#</a> Initialize</h3><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">Initialize</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Array</span> <span class="token operator">*</span>arr<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">,</span> i<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Enter the size of the array: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>arr<span class="token operator">-&gt;</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span>

    arr<span class="token operator">-&gt;</span>A <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span>arr<span class="token operator">-&gt;</span>size <span class="token operator">*</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    arr<span class="token operator">-&gt;</span>length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Enter number of elements to be entered: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Enter all elements\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>arr<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    arr<span class="token operator">-&gt;</span>length <span class="token operator">=</span> n<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">Array</span> arr<span class="token punctuation">;</span>

    <span class="token function">Initialize</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="display" tabindex="-1"><a class="header-anchor" href="#display" aria-hidden="true">#</a> Display</h3><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">Display</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Array</span> arr<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n\\nAll elements are:\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Element %d: %d\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> arr<span class="token punctuation">.</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">Array</span> arr<span class="token punctuation">;</span>

    <span class="token function">Initialize</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">Display</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="add-append" tabindex="-1"><a class="header-anchor" href="#add-append" aria-hidden="true">#</a> Add/Append</h3><ul><li>Add element at the end of the array or append the element to the array</li><li>Operation: <code>O(1)</code></li></ul><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">Append</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Array</span> <span class="token operator">*</span>arr<span class="token punctuation">,</span> <span class="token keyword">int</span> newElement<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token operator">-&gt;</span>length <span class="token operator">&lt;</span> arr<span class="token operator">-&gt;</span>size<span class="token punctuation">)</span>
        arr<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>arr<span class="token operator">-&gt;</span>length<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> newElement<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="insert" tabindex="-1"><a class="header-anchor" href="#insert" aria-hidden="true">#</a> Insert</h3><ul><li>Insert element at an index of the array</li><li>Operation: Best: <code>O(1)</code>, Worst: <code>O(n)</code></li></ul><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">Insert</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Array</span> <span class="token operator">*</span>arr<span class="token punctuation">,</span> <span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token keyword">int</span> newElement<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;=</span> arr<span class="token operator">-&gt;</span>length<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> arr<span class="token operator">-&gt;</span>length<span class="token punctuation">;</span> i <span class="token operator">&gt;</span> index<span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            arr<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        arr<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> newElement<span class="token punctuation">;</span>
        arr<span class="token operator">-&gt;</span>length<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="delete" tabindex="-1"><a class="header-anchor" href="#delete" aria-hidden="true">#</a> Delete</h3><ul><li>Delete element at an index of the array</li><li>Operation: Best: <code>O(1)</code>, Worst: <code>O(n)</code></li></ul><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">Delete</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Array</span> <span class="token operator">*</span>arr<span class="token punctuation">,</span> <span class="token keyword">int</span> index<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> i<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> index <span class="token operator">&lt;</span> arr<span class="token operator">-&gt;</span>length<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        x <span class="token operator">=</span> arr<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> index<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token operator">-&gt;</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            arr<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        arr<span class="token operator">-&gt;</span>length<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="search" tabindex="-1"><a class="header-anchor" href="#search" aria-hidden="true">#</a> Search</h3><ol><li><p>Linear search:</p><ul><li><p>The elements must be unique for that array else only the first found element will be used even if the same value is present at different locations of that array</p></li><li><p>Operations: Best: <code>O(1)</code>, Worst: <code>O(n)</code>, Average: <code>O(n)</code></p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">Linear_search</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Array</span> arr<span class="token punctuation">,</span> <span class="token keyword">int</span> element<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> element<span class="token punctuation">)</span>
            <span class="token keyword">return</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>Optimization using <em>Transposition</em>: Swapping the index of searched value with its lesser indexed adjacent element. If the same value is searched again and again the number of comparisons keep decreasing and reach <code>O(1)</code>.</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">Linear_search_transposition</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Array</span> <span class="token operator">*</span>arr<span class="token punctuation">,</span> <span class="token keyword">int</span> key<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token operator">-&gt;</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> key<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            arr<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            arr<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> key<span class="token punctuation">;</span>
            <span class="token keyword">return</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>Optimization using <em>Move to Front/Head</em>: Swapping the first element with the searched value. If the same value is searched again the operation will be <code>O(1)</code></p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">Linear_search_move_front</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Array</span> <span class="token operator">*</span>arr<span class="token punctuation">,</span> <span class="token keyword">int</span> key<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token operator">-&gt;</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> key<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            arr<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            arr<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> key<span class="token punctuation">;</span>
            <span class="token keyword">return</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ul></li><li><p>Binary Search: The array must be sorted.</p><ul><li><p>Operations: Best: <code>O(1)</code>, Worst: <code>O(log2 n)</code></p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">Binary_search</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Array</span> arr<span class="token punctuation">,</span> <span class="token keyword">int</span> key<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
 <span class="token keyword">int</span> low <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> mid<span class="token punctuation">,</span> high <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

 <span class="token keyword">while</span> <span class="token punctuation">(</span>low <span class="token operator">&lt;=</span> high<span class="token punctuation">)</span>
 <span class="token punctuation">{</span>
     mid <span class="token operator">=</span> <span class="token punctuation">(</span>low <span class="token operator">+</span> high<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>

     <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>A<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">==</span> key<span class="token punctuation">)</span>
         <span class="token keyword">return</span> mid<span class="token punctuation">;</span>

     <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>A<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> key<span class="token punctuation">)</span>
         high <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

     <span class="token keyword">else</span>
         low <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>

     mid <span class="token operator">=</span> low <span class="token operator">+</span> high <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>Using Recursion:</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">Binary_search_recursion</span><span class="token punctuation">(</span><span class="token keyword">int</span> A<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> low<span class="token punctuation">,</span> <span class="token keyword">int</span> high<span class="token punctuation">,</span> <span class="token keyword">int</span> key<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
   <span class="token keyword">int</span> mid<span class="token punctuation">;</span>

   <span class="token keyword">if</span> <span class="token punctuation">(</span>low <span class="token operator">&lt;=</span> high<span class="token punctuation">)</span>
   <span class="token punctuation">{</span>
       mid <span class="token operator">=</span> <span class="token punctuation">(</span>low <span class="token operator">+</span> high<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>

       <span class="token keyword">if</span> <span class="token punctuation">(</span>A<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">==</span> key<span class="token punctuation">)</span>
           <span class="token keyword">return</span> mid<span class="token punctuation">;</span>

       <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>A<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> key<span class="token punctuation">)</span>
           <span class="token keyword">return</span> <span class="token function">Binary_search_recursion</span><span class="token punctuation">(</span>A<span class="token punctuation">,</span> low<span class="token punctuation">,</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>

       <span class="token keyword">else</span>
           <span class="token keyword">return</span> <span class="token function">Binary_search_recursion</span><span class="token punctuation">(</span>A<span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> high<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ul></li></ol><h3 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> Get</h3><p>Get the element at an index:</p><ul><li>Operations: <code>O(1)</code></li></ul><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">Get</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Array</span> arr<span class="token punctuation">,</span> <span class="token keyword">int</span> index<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> index <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
        <span class="token keyword">return</span> arr<span class="token punctuation">.</span>A<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> Set</h3><p>Set value for element at an index:</p><ul><li>Operations: <code>O(1)</code></li></ul><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">Set</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Array</span> <span class="token operator">*</span>arr<span class="token punctuation">,</span> <span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token keyword">int</span> key<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> index <span class="token operator">&lt;</span> arr<span class="token operator">-&gt;</span>length<span class="token punctuation">)</span>
        arr<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> key<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="find-max-unsorted" tabindex="-1"><a class="header-anchor" href="#find-max-unsorted" aria-hidden="true">#</a> Find Max (unsorted)</h3><ul><li>Operations: Best: <code>O(n)</code>, Worst: <code>O(n)</code></li></ul><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">Max</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Array</span> arr<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> max <span class="token operator">=</span> arr<span class="token punctuation">.</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>max <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
            max <span class="token operator">=</span> arr<span class="token punctuation">.</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> max<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="find-min-unsorted" tabindex="-1"><a class="header-anchor" href="#find-min-unsorted" aria-hidden="true">#</a> Find Min (unsorted)</h3><ul><li>Operations: Best: <code>O(n)</code>, Worst: <code>O(n)</code></li></ul><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">Min</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Array</span> arr<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> min <span class="token operator">=</span> arr<span class="token punctuation">.</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>min <span class="token operator">&gt;</span> arr<span class="token punctuation">.</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
            min <span class="token operator">=</span> arr<span class="token punctuation">.</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> min<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="sum-of-all-elements" tabindex="-1"><a class="header-anchor" href="#sum-of-all-elements" aria-hidden="true">#</a> Sum of All Elements</h3><ul><li>Operations: Best: <code>O(n)</code>, Worst: <code>O(n)</code></li></ul><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">Sum</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Array</span> arr<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">,</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        sum <span class="token operator">+=</span> arr<span class="token punctuation">.</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><p>Using Recursion:</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">Sum_recursive</span><span class="token punctuation">(</span><span class="token keyword">int</span> A<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token function">Sum_recursive</span><span class="token punctuation">(</span>A<span class="token punctuation">,</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> A<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ul><h3 id="average" tabindex="-1"><a class="header-anchor" href="#average" aria-hidden="true">#</a> Average</h3><ul><li>Operations: Best: <code>O(n)</code>, Worst: <code>O(n)</code></li></ul><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">float</span> <span class="token function">Average</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Array</span> arr<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">,</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        sum <span class="token operator">+=</span> arr<span class="token punctuation">.</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">float</span><span class="token punctuation">)</span>sum <span class="token operator">/</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

    <span class="token comment">// or just instead of for loop</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">float</span><span class="token punctuation">)</span><span class="token function">Sum</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token operator">/</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="reverse" tabindex="-1"><a class="header-anchor" href="#reverse" aria-hidden="true">#</a> Reverse</h3><ul><li><p>Using auxiliary array: Operations: <code>O(n)</code></p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">Reverse_auxiliary_array</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Array</span> <span class="token operator">*</span>arr<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> <span class="token operator">*</span>B<span class="token punctuation">;</span>

    B <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span>arr<span class="token operator">-&gt;</span>length <span class="token operator">*</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> arr<span class="token operator">-&gt;</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">,</span> j<span class="token operator">++</span><span class="token punctuation">)</span>
        B<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token operator">-&gt;</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        arr<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> B<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>Optimized: Operations: <code>O(n/2)</code></p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">Reverse</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Array</span> <span class="token operator">*</span>arr<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> temp<span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> j <span class="token operator">=</span> arr<span class="token operator">-&gt;</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> j<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">,</span> j<span class="token operator">--</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        temp <span class="token operator">=</span> arr<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

        arr<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>

        arr<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ul><h3 id="insert-in-sorted-order" tabindex="-1"><a class="header-anchor" href="#insert-in-sorted-order" aria-hidden="true">#</a> Insert in Sorted Order</h3><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">Insert_in_sorted_order</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Array</span> <span class="token operator">*</span>arr<span class="token punctuation">,</span> <span class="token keyword">int</span> key<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> arr<span class="token operator">-&gt;</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token operator">-&gt;</span>length <span class="token operator">&lt;</span> arr<span class="token operator">-&gt;</span>size<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>arr<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> key <span class="token operator">&amp;&amp;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            arr<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            i<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        arr<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> key<span class="token punctuation">;</span>
        arr<span class="token operator">-&gt;</span>length<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="check-if-the-array-is-sorted" tabindex="-1"><a class="header-anchor" href="#check-if-the-array-is-sorted" aria-hidden="true">#</a> Check if the array is sorted</h3><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">Is_sorted</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Array</span> arr<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">.</span>A<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="rearrange-positive-and-negative-values" tabindex="-1"><a class="header-anchor" href="#rearrange-positive-and-negative-values" aria-hidden="true">#</a> Rearrange Positive and Negative values</h3><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">Rearrange</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Array</span> <span class="token operator">*</span>arr<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> temp<span class="token punctuation">;</span>
    i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    j <span class="token operator">=</span> arr<span class="token operator">-&gt;</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>arr<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
            i<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>arr<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span>
            j<span class="token operator">--</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            temp <span class="token operator">=</span> arr<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

            arr<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>

            arr<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="merge" tabindex="-1"><a class="header-anchor" href="#merge" aria-hidden="true">#</a> Merge</h3><ul><li><p>Merge two sorted arrays into a new sorted array</p></li><li><p>Both arrays must be sorted and the resulting array after merging must also be sorted</p></li><li><p>Operations: <code>Theta(m + n)</code></p></li></ul><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">Array</span> <span class="token operator">*</span><span class="token function">Merge</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Array</span> arr1<span class="token punctuation">,</span> <span class="token keyword">struct</span> <span class="token class-name">Array</span> arr2<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">struct</span> <span class="token class-name">Array</span> <span class="token operator">*</span>arr3 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Array</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Array</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> arr1<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> arr2<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>arr1<span class="token punctuation">.</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr2<span class="token punctuation">.</span>A<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
            arr3<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>k<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr1<span class="token punctuation">.</span>A<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token keyword">else</span>
            arr3<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>k<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr2<span class="token punctuation">.</span>A<span class="token punctuation">[</span>j<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr1<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        arr3<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>k<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr1<span class="token punctuation">.</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> arr2<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span>
        arr3<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>k<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr2<span class="token punctuation">.</span>A<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>

    arr3<span class="token operator">-&gt;</span>length <span class="token operator">=</span> arr1<span class="token punctuation">.</span>length <span class="token operator">+</span> arr2<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    arr3<span class="token operator">-&gt;</span>size <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> arr3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">struct</span> <span class="token class-name">Array</span> <span class="token operator">*</span>merged_arr <span class="token operator">=</span> <span class="token function">Merge</span><span class="token punctuation">(</span>arr1<span class="token punctuation">,</span> arr2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="union-operation" tabindex="-1"><a class="header-anchor" href="#union-operation" aria-hidden="true">#</a> Union Operation</h3><ul><li><p>Combining two arrays with no duplicate elements copied from second array to create a new array</p></li><li><p>New array size might be smaller than the combined size of first and second array</p></li><li><p>Operations: Unsorted Array: <code>O(n^2)</code></p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">Array</span> <span class="token operator">*</span><span class="token function">Union</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Array</span> arr1<span class="token punctuation">,</span> <span class="token keyword">struct</span> <span class="token class-name">Array</span> arr2<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
      <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

      <span class="token keyword">struct</span> <span class="token class-name">Array</span> <span class="token operator">*</span>arr3 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Array</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Array</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> arr1<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> arr2<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
      <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>arr1<span class="token punctuation">.</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr2<span class="token punctuation">.</span>A<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
              arr3<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>k<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr1<span class="token punctuation">.</span>A<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

          <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>arr1<span class="token punctuation">.</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr2<span class="token punctuation">.</span>A<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
              arr3<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>k<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr2<span class="token punctuation">.</span>A<span class="token punctuation">[</span>j<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

          <span class="token keyword">else</span>
          <span class="token punctuation">{</span>
              arr3<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>k<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr1<span class="token punctuation">.</span>A<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
              j<span class="token operator">++</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr1<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
          arr3<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>k<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr1<span class="token punctuation">.</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> arr2<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span>
          arr3<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>k<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr2<span class="token punctuation">.</span>A<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>

      arr3<span class="token operator">-&gt;</span>length <span class="token operator">=</span> k<span class="token punctuation">;</span>
      arr3<span class="token operator">-&gt;</span>size <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>

      <span class="token keyword">return</span> arr3<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre></div></li><li><p>Operations: Sorted Array: <code>Theta(m + n)</code></p></li><li><p>Similar to <a href="#merge">Merge</a> operation</p></li></ul><h3 id="intersection" tabindex="-1"><a class="header-anchor" href="#intersection" aria-hidden="true">#</a> Intersection</h3><ul><li>Take common elements from two arrays and store them in a new array</li><li>Operations: Unsorted Array: <code>O(n^2)</code></li></ul><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">Array</span> <span class="token operator">*</span><span class="token function">Intersection</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Array</span> arr1<span class="token punctuation">,</span> <span class="token keyword">struct</span> <span class="token class-name">Array</span> arr2<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">struct</span> <span class="token class-name">Array</span> <span class="token operator">*</span>arr3 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Array</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Array</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> arr1<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> arr2<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>arr1<span class="token punctuation">.</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr2<span class="token punctuation">.</span>A<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
            i<span class="token operator">++</span><span class="token punctuation">;</span>

        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>arr1<span class="token punctuation">.</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr2<span class="token punctuation">.</span>A<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
            j<span class="token operator">++</span><span class="token punctuation">;</span>

        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>arr1<span class="token punctuation">.</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> arr2<span class="token punctuation">.</span>A<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            arr3<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>k<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr1<span class="token punctuation">.</span>A<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            j<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    arr3<span class="token operator">-&gt;</span>length <span class="token operator">=</span> k<span class="token punctuation">;</span>
    arr3<span class="token operator">-&gt;</span>size <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> arr3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><p>Operations: Sorted Array: <code>Theta(m + n)</code></p></li><li><p>Similar to <a href="#merge">Merge</a> operation</p></li></ul><h3 id="difference" tabindex="-1"><a class="header-anchor" href="#difference" aria-hidden="true">#</a> Difference</h3><ul><li>Get all the elements that are present in the first element but not in the second element.</li><li>Operations: Unsorted Array: <code>O(n^2)</code></li></ul><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">Array</span> <span class="token operator">*</span><span class="token function">Difference</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Array</span> arr1<span class="token punctuation">,</span> <span class="token keyword">struct</span> <span class="token class-name">Array</span> arr2<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">struct</span> <span class="token class-name">Array</span> <span class="token operator">*</span>arr3 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Array</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Array</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> arr1<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> arr2<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>arr1<span class="token punctuation">.</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr2<span class="token punctuation">.</span>A<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
            arr3<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>k<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr1<span class="token punctuation">.</span>A<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>arr1<span class="token punctuation">.</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr2<span class="token punctuation">.</span>A<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
            j<span class="token operator">++</span><span class="token punctuation">;</span>

        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>arr1<span class="token punctuation">.</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> arr2<span class="token punctuation">.</span>A<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            i<span class="token operator">++</span><span class="token punctuation">;</span>
            j<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr1<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        arr3<span class="token operator">-&gt;</span>A<span class="token punctuation">[</span>k<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr1<span class="token punctuation">.</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

    arr3<span class="token operator">-&gt;</span>length <span class="token operator">=</span> k<span class="token punctuation">;</span>
    arr3<span class="token operator">-&gt;</span>size <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> arr3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><p>Operations: Sorted Array: <code>Theta(m + n)</code></p></li><li><p>Similar to <a href="#merge">Merge</a> operation</p></li></ul><h3 id="member" tabindex="-1"><a class="header-anchor" href="#member" aria-hidden="true">#</a> Member</h3><ul><li>Search if the element is present in the array</li><li>Same as searching</li></ul>`,108),c=[e];function l(u,r){return a(),s("div",null,c)}const k=n(o,[["render",l],["__file","Arrays.html.vue"]]);export{k as default};
