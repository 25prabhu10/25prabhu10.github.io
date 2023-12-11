import{_ as p,r as o,o as e,c,b as n,d as s,a as t,e as l}from"./app-jDLxG9B3.js";const u="/assets/operations-on-data-types-L9R7RAPL.jpg",i={},k=n("h1",{id:"c-c-concepts",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#c-c-concepts","aria-hidden":"true"},"#"),s(" C/C++ Concepts")],-1),r=n("p",null,"To start working with C/C++ you need to install few application in your system, such as IDE's or Text Editors, Compilers etc.",-1),d=n("p",null,"You can use any IDE or Text editor, some of the are listed below:",-1),m={href:"https://osdn.net/projects/mingw/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.vim.org/download.php",target:"_blank",rel:"noopener noreferrer"},y={href:"https://neovim.io/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://visualstudio.microsoft.com/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},w={href:"http://www.codeblocks.org/downloads/binaries/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/Embarcadero/Dev-Cpp/releases/tag/v6.3",target:"_blank",rel:"noopener noreferrer"},E=n("strong",null,"with Mingw/GCC",-1),A=l(`<p><em>Dev-Cpp Setup:</em></p><p>Make the below changes in <strong>Tools</strong> --&gt; <strong>Compiler Options</strong>:</p><ol><li><p>In the <strong>Compiler</strong> section, tick mark <strong>Add the following commands when calling compiler:</strong> and add <code>-g</code> in the text available below. This helps while debugging the code.</p></li><li><p>Now, in <strong>Programs</strong> section, append <code>-std=c++99</code> to <strong>gcc:</strong> and <strong>g++:</strong> like <code>gcc.exe -std=c++11</code> and <code>g++.exe -std=c++11</code>. To use the latest C++ 11 standards.</p></li></ol><h2 id="memory" tabindex="-1"><a class="header-anchor" href="#memory" aria-hidden="true">#</a> Memory</h2><p>The main memory can divided into:</p><ol><li><p>Heap:</p></li><li><p>Stack:</p></li><li><p>Code Section:</p></li></ol><p><em>Example:</em></p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> A<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> B<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">5</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> B<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// ARRAYS A AND B WILL APPEAR IN THE STACK AFTER DECLARATION.</span>
</code></pre></div><h2 id="types-and-objects" tabindex="-1"><a class="header-anchor" href="#types-and-objects" aria-hidden="true">#</a> Types and objects</h2><ul><li><p>A <em>type</em> defines a <strong>set of possible values and a set of operations (for an object)</strong>.</p></li><li><p>An <em>object</em> is <strong>some memory that holds a value of a given type</strong>.</p></li><li><p>A <em>value</em> is a <strong>set of bits in memory interpreted according to a type</strong>.</p></li><li><p>A <em>variable</em> is a <strong>named object</strong>.</p></li><li><p>A <em>declaration</em> is a statement that <strong>introduces an identifier (name) and describes its type, be it a type, object or function</strong>. The compiler uses this to reference that identifier and dose not set aside any memory for it.</p><div class="language-cpp" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">extern</span> <span class="token keyword">int</span> bar<span class="token punctuation">;</span>
<span class="token keyword">extern</span> <span class="token keyword">int</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">double</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">double</span><span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">// extern can be omitted for function declarations</span>
<span class="token keyword">class</span> <span class="token class-name">foo</span><span class="token punctuation">;</span>                      <span class="token comment">// no extern allowed for type declarations</span>

<span class="token keyword">double</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">double</span><span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">// in C/C++ an identifier can be declared as often as you want</span>
<span class="token keyword">double</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">double</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">extern</span> <span class="token keyword">double</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">double</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// the same as the two above</span>
<span class="token keyword">extern</span> <span class="token keyword">double</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">double</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></li><li><p>A <em>definition</em> actually instantiates/implements the identifier, the compiler asks memory manager to <strong>set aside memory for that object or function</strong>. You can only define exactly once.</p><div class="language-cpp" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> bar<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token keyword">int</span> lhs<span class="token punctuation">,</span> <span class="token keyword">int</span> rhs<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> lhs<span class="token operator">*</span>rhs<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token keyword">double</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">double</span> d<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> i<span class="token operator">+</span>d<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">foo</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div></li></ul><div class="custom-container tip"><p class="custom-container-title">NOTE</p><p>If something is declared but not defined, then the linker doesn&#39;t know what to link references to and complains about a missing symbols. If you define something more than once, then the linker doesn&#39;t know which of the definitions to link references to and complains about duplicated symbols.</p></div><p><strong>Operations on data types</strong>:</p><p><img src="`+u+`" alt="Operations on data types"></p><h2 id="struct-structure" tabindex="-1"><a class="header-anchor" href="#struct-structure" aria-hidden="true">#</a> Struct (Structure)</h2><p><em>Definition:</em> It&#39;s a <strong>physically grouped list of dissimilar data items under one name in a block of memory</strong>, allowing the different data items to be <strong>accessed via a single pointer</strong>. It&#39;s used for defining user-defined data types, apart from the primitive data types.</p><ul><li>Group of related data items</li><li><code>struct</code> is the <strong>keyword</strong> used to define a structure.</li><li><code>.</code> (dot operator) is used to <strong>access the members of the structure</strong></li><li>Its size will the <strong>sum of sizes consumed by all of its elements</strong></li><li><strong>Structure Padding</strong> is used to allocate memory for a structure</li></ul><p><em>Example:</em> Define a <code>struct</code> called <em>Rectangle</em></p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token comment">// DEFINITION</span>
<span class="token keyword">struct</span> <span class="token class-name">Rectangle</span>
<span class="token punctuation">{</span>
  <span class="token keyword">int</span> length<span class="token punctuation">;</span>
  <span class="token keyword">int</span> breadth<span class="token punctuation">;</span>
<span class="token punctuation">}</span> r1<span class="token punctuation">,</span> r2<span class="token punctuation">;</span> <span class="token comment">// GLOBAL STRUCT VARIABLES</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token comment">// DECLARATION (MEMORY IS ALLOCATED)</span>
  <span class="token keyword">struct</span> <span class="token class-name">Rectangle</span> r<span class="token punctuation">;</span>
  <span class="token keyword">struct</span> <span class="token class-name">Rectangle</span> r1<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// INITIALISATION</span>
  r<span class="token punctuation">.</span>length<span class="token operator">=</span><span class="token number">25</span><span class="token punctuation">;</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Area of the Rectangle is %d&quot;</span><span class="token punctuation">,</span> r<span class="token punctuation">.</span>length <span class="token operator">*</span> r<span class="token punctuation">.</span>breadth<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">Card</span>
<span class="token punctuation">{</span>
  <span class="token keyword">int</span> face<span class="token punctuation">;</span>
  <span class="token keyword">int</span> shape<span class="token punctuation">;</span>
  <span class="token keyword">int</span> color<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token keyword">struct</span> <span class="token class-name">Card</span> deck<span class="token punctuation">[</span><span class="token number">52</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  deck<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>face<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><em>In C++:</em></p><div class="language-cpp" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  Rectangle r<span class="token punctuation">;</span> <span class="token comment">// IN C++ NO NEED TO PROVIDE struct KEYWORK</span>

  <span class="token keyword">struct</span> <span class="token class-name">Rectangle</span> r1<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">NOTE</p><p><em>C</em> structs do not have member functions. <em>C++</em> allows struct to have member functions and by default all members are public as compared to class where by default all members are private.</p></div><h2 id="pointers" tabindex="-1"><a class="header-anchor" href="#pointers" aria-hidden="true">#</a> Pointers</h2><p><em>Definition:</em> Pointer is <strong>an address variable</strong> that is meant for <strong>storing the address of another variable</strong>.</p><ul><li>The size of a pointer will always be equal to size the of its type.</li></ul><p>Pointers are used for:</p><ul><li><p><strong>Accessing heap memory</strong>. The program will not automatically access the heap. Heap memory is external to the program.</p></li><li><p>Accessing resources, such as files, keyboard, monitor, etc.:</p><ul><li>Like access files, files are stored in hard disks and are external to the program. File pointers are used to access these files.</li><li>Similarly to interact with any external device we use the pointer.</li></ul></li><li><p>Functions use Pointers as parameters while using call by reference method.</p></li></ul><p><em>Example:</em></p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// data variable</span>
    <span class="token keyword">int</span> a<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>

    <span class="token comment">// pointer variable</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>p<span class="token punctuation">;</span>

    <span class="token comment">// save address of \`a\`</span>
    p<span class="token operator">=</span><span class="token operator">&amp;</span>a<span class="token punctuation">;</span>

    <span class="token comment">// print data present in \`a\`</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// also know as dereferencing</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Array variable actually points to the first element of the array:</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> A<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>p<span class="token punctuation">;</span>

    <span class="token comment">// A ITSELF POINTS TO THE FIRST ELEMENT OF THE ARRAY</span>
    p<span class="token operator">=</span>A<span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>A<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>

<span class="token punctuation">}</span>
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">NOTE</p><p>Pointers consume the same amount of memory (8 bit) irrespective of the type of pointer</p></div><p><strong>Accessing heap memory</strong>:</p><ul><li>In C <code>malloc</code> is used to get memory in heap. Its present in <code>&lt;stdlib.h&gt;</code> and takes size as a parameter.</li><li><code>malloc</code> returns a <code>void</code> pointer (generic pointer), so we have to type-caste it and say it&#39;s an <code>integer</code> pointer.</li><li>We need to <strong>free the memory allocated to the variables</strong> after they are no more required using <code>free()</code> in C and <code>delete</code> in C++</li><li><strong>Heap memory must be de-allocated</strong></li></ul><p><em>Example:</em></p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token comment">// REQUIRED FOR malloc</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>p<span class="token punctuation">;</span>
    p<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">*</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// TYPE-CASTE AS malloc RETURNS A void POINTER, malloc WILL NOW PROVIDE MEMORY FOR</span>
    <span class="token comment">// AN ARRAY OF LENGTH 5 AND EACH ELEMENT OF SIZE INT</span>

    <span class="token function">free</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// CLEARING MEMORY ALLOCATED TO p</span>
<span class="token punctuation">}</span>
</code></pre></div><p>In C++:</p><div class="language-cpp" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>p<span class="token punctuation">;</span>
    p<span class="token operator">=</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// SIMILAR TO USING malloc</span>

    <span class="token keyword">delete</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> p<span class="token punctuation">;</span> <span class="token comment">// CLEARING MEMORY ALLOCATED TO p</span>
    <span class="token comment">// ADD EMPTY [] AS p IS POINTING TO AN ARRAY</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Pointer to a <a href="#struct-structure">Structure</a>:</p><p><em>Example:</em></p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">Rectangle</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> length<span class="token punctuation">;</span>
    <span class="token keyword">int</span> breadth<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">Rectangle</span> r<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">Rectangle</span> <span class="token operator">*</span>p<span class="token operator">=</span><span class="token operator">&amp;</span>r<span class="token punctuation">;</span>

    r<span class="token punctuation">.</span>length<span class="token operator">=</span><span class="token number">15</span><span class="token punctuation">;</span>

    <span class="token punctuation">(</span><span class="token operator">*</span>p<span class="token punctuation">)</span><span class="token punctuation">.</span>breadth<span class="token operator">=</span><span class="token number">25</span><span class="token punctuation">;</span>    <span class="token comment">// *p IS ENCLOSED INSIDE A BRACKET BECAUSE \`.\` HAS HIGHER PRIORITY THAN \`*\`</span>
    p<span class="token operator">-&gt;</span>length<span class="token operator">=</span><span class="token number">25</span><span class="token punctuation">;</span>       <span class="token comment">// ALTERNATIVE METHOD</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d %d\\n&quot;</span><span class="token punctuation">,</span> r<span class="token punctuation">.</span>length<span class="token punctuation">,</span> r<span class="token punctuation">.</span>breadth<span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">// 25 25</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d %d\\n&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token operator">*</span>p<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token operator">*</span>p<span class="token punctuation">)</span><span class="token punctuation">.</span>breadth<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 25 25</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d %d\\n&quot;</span><span class="token punctuation">,</span> p<span class="token operator">-&gt;</span>length<span class="token punctuation">,</span> p<span class="token operator">-&gt;</span>breadth<span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">// 25 25</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Dynamic allocation of Pointer (in heap memory):</p><p><em>Example:</em></p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token comment">// struct FROM THE ABOVE EXAMPLE</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">Rectangle</span> <span class="token operator">*</span>p<span class="token punctuation">;</span>

    p<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Rectangle</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Rectangle</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    p<span class="token operator">-&gt;</span>length<span class="token operator">=</span><span class="token number">22</span><span class="token punctuation">;</span>
    p<span class="token operator">-&gt;</span>breadth<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><p>Void Pointer: Type-less memory</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token keyword">int</span> a<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> <span class="token operator">*</span>pA <span class="token operator">=</span> <span class="token operator">&amp;</span>a<span class="token punctuation">;</span>

  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>pA<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">void</span> <span class="token operator">*</span>vA <span class="token operator">=</span> <span class="token operator">&amp;</span>a<span class="token punctuation">;</span>

  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>vA<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ul><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2><p><em>Definition:</em> An <strong>alias given to a variable</strong></p><ul><li>Must be <strong>initialized during declaration</strong></li><li>While referencing <strong>both the variable and its reference have the same address</strong></li></ul><p><em>Example:</em></p><div class="language-cpp" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> a<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token operator">&amp;</span>r<span class="token operator">=</span>a<span class="token punctuation">;</span>
    <span class="token comment">// r IS REFERRING TO a</span>

    cout<span class="token operator">&lt;&lt;</span>a<span class="token punctuation">;</span> <span class="token comment">// 10</span>
    r<span class="token operator">++</span><span class="token punctuation">;</span>
    cout<span class="token operator">&lt;&lt;</span>r<span class="token punctuation">;</span> <span class="token comment">// 11</span>
    cout<span class="token operator">&lt;&lt;</span>a<span class="token punctuation">;</span> <span class="token comment">// 11</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="custom-container danger"><p class="custom-container-title">NOTE</p><p>Reference is not a part of the C language.</p></div><h2 id="functions" tabindex="-1"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> Functions</h2><p><em>Definition:</em> A function is <strong>a named sequence of statements</strong>. A function can return a result (also called a <em>return value</em>).</p><blockquote><p>Also called <em>subroutine</em>, <em>modules</em>, <em>procedures</em></p></blockquote><p><em>Example:</em></p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token comment">// ADDITION FUNCTION</span>
<span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token comment">// THIS LINE IS KNOWN AS THE PROTOTYPE OR SIGNATURE OF THE FUNCTION</span>
<span class="token punctuation">{</span>
    <span class="token comment">// DECLARATION AND DEFINITION OF THE FUNCTION</span>
    <span class="token keyword">int</span> c<span class="token punctuation">;</span>

    <span class="token comment">// int a AND b ARE KNOWN AS FORMAL PARAMETERS</span>
    c <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
    <span class="token keyword">return</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// MAIN FUNCTION</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">;</span>
    x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    y <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

    <span class="token comment">// INVOCATION OF THE FUNCTION</span>
    y <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// HERE int z AND x ARE KNOWN AS ACTUAL PARAMETERS</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Sum is %d&quot;</span><span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="parameter-passing" tabindex="-1"><a class="header-anchor" href="#parameter-passing" aria-hidden="true">#</a> Parameter Passing</h3><p>There are three ways of passing the parameters to a function.</p><ol><li><p><em>Pass/Call by Value:</em> In pass by value, <strong>changes in formal parameters do not reflect in the actual parameters</strong>. Refer to the above examples.</p></li><li><p><em>Pass/Call by Address:</em> In pass by address, <strong>changes in formal parameters reflect in actual parameters</strong>.</p><p><em>Example:</em></p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>x<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span>y<span class="token punctuation">)</span> <span class="token comment">// TO USE VARIABLE ADDRESS, DEFINE POINTERS</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> temp<span class="token punctuation">;</span>
    temp<span class="token operator">=</span><span class="token operator">*</span>x<span class="token punctuation">;</span>
    <span class="token operator">*</span>x<span class="token operator">=</span><span class="token operator">*</span>y<span class="token punctuation">;</span>
    <span class="token operator">*</span>y<span class="token operator">=</span>temp<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> a<span class="token punctuation">;</span>
    <span class="token keyword">int</span> b<span class="token punctuation">;</span>
    <span class="token function">swap</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>a<span class="token punctuation">,</span> <span class="token operator">&amp;</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// PASS THE VARIABLE ADDRESS NOT THE VALUE</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;A == %d, B == %d&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p><em>Pass/Call by Reference</em>: In pass by reference also, <strong>changes in formal parameters reflect in actual parameters</strong>. Present <strong>only in C++</strong>.</p><p><em>Example:</em></p><div class="language-cpp" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">&amp;</span>x<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">&amp;</span>y<span class="token punctuation">)</span> <span class="token comment">// USING &amp; WE REFERENCE THE VARIABLES a AND b</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> temp<span class="token punctuation">;</span>
    temp<span class="token operator">=</span><span class="token operator">*</span>x<span class="token punctuation">;</span>
    <span class="token operator">*</span>x<span class="token operator">=</span><span class="token operator">*</span>y<span class="token punctuation">;</span>
    <span class="token operator">*</span>y<span class="token operator">=</span>temp<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> a<span class="token punctuation">;</span>
    <span class="token keyword">int</span> b<span class="token punctuation">;</span>
    <span class="token function">swap</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// NO CHANGES</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;A == %d, B == %d&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ol><div class="custom-container tip"><p class="custom-container-title">NOTE</p><p>Pass by Reference should be used very carefully as it converts the modular code into monolithic code.</p></div><p><em>Arrays as Parameters:</em></p><ul><li><p>Arrays <strong>cannot be passed by value</strong>, they are <strong>passed by address</strong>.</p><p><em>Example:</em></p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token keyword">int</span> A<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token comment">// HERE A[] IS A POINTER TO AN ARRAY, int *A IS THE SAME AS int A[]</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> A<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">fun</span><span class="token punctuation">(</span>A<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Function that returns a Pointer:</p><p><em>Example:</em></p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>p<span class="token punctuation">;</span>
    p <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span>n <span class="token operator">*</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>A<span class="token punctuation">;</span>
    A <span class="token operator">=</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ul><p>Structure as parameter:</p><ul><li><p>Pass/Call by Value:</p><p><em>Example:</em></p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">Rectangle</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> length<span class="token punctuation">;</span>
    <span class="token keyword">int</span> breadth<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">area</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Rectangle</span> r1<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> r1<span class="token punctuation">.</span>length <span class="token operator">*</span> r1<span class="token punctuation">.</span>breath<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">Rectangle</span> r <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Area of the Rectangle is %d&quot;</span><span class="token punctuation">,</span> <span class="token function">area</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>Pass/Call by Address:</p><p><em>Example:</em></p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">Rectangle</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> length<span class="token punctuation">;</span>
    <span class="token keyword">int</span> breadth<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">changeLength</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Rectangle</span> <span class="token operator">*</span>p<span class="token punctuation">,</span> <span class="token keyword">int</span> l<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    p<span class="token operator">-&gt;</span>length <span class="token operator">=</span> l<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">Rectangle</span> r <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">changeLength</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>r<span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ul><div class="custom-container tip"><p class="custom-container-title">NOTE</p><p>Even when a <code>struct</code> has an array member, it can be passed by value even though array alone cannot be passed by value.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><ul><li>Confirm if true or false: C does not have any built-in data structures.</li><li>As part of the code activation record of the function, all the variables are created in the stack.</li></ul></div><h2 id="structure-of-the-code" tabindex="-1"><a class="header-anchor" href="#structure-of-the-code" aria-hidden="true">#</a> Structure of the Code</h2><ol><li><p>In <em>C</em>, <code>main()</code> function <strong>should only have variable declarations and function calls.</strong></p><p>These functions will be responsible for initialization, mutation, etc.</p><p>The structure is usually maintained as <em>structs</em> and <em>functions</em> related to them.</p><p><em>Example:</em></p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">Rectangle</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> length<span class="token punctuation">;</span>
    <span class="token keyword">int</span> breadth<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">initialize</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Rectangle</span> <span class="token operator">*</span>r<span class="token punctuation">,</span> <span class="token keyword">int</span> l<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    r<span class="token operator">-&gt;</span>length <span class="token operator">=</span> l<span class="token punctuation">;</span>
    r<span class="token operator">-&gt;</span>breadth <span class="token operator">=</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">area</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Rectangle</span> r<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> r<span class="token punctuation">.</span>length <span class="token operator">*</span> r<span class="token punctuation">.</span>breadth<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">changeLength</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Rectangle</span> <span class="token operator">*</span>r1<span class="token punctuation">,</span> <span class="token keyword">int</span> l<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    r<span class="token operator">-&gt;</span>length <span class="token operator">=</span> l<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">struct</span> <span class="token class-name">Rectangle</span> r<span class="token punctuation">;</span>

    <span class="token function">initialize</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>r<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Area of the Rectangle is %d&quot;</span><span class="token punctuation">,</span> <span class="token function">area</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">changeLength</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>r<span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>Similarly in <em>C++</em>, OOP&#39;s concepts are used to organize the code.</p><p>All the <strong>variables and functions related to them are grouped together as a class</strong>.</p><p><em>Example:</em></p><div class="language-cpp" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">Rectangle</span>
 <span class="token punctuation">{</span>
     <span class="token keyword">int</span> length<span class="token punctuation">;</span>
     <span class="token keyword">int</span> breadth<span class="token punctuation">;</span>

 <span class="token keyword">public</span><span class="token operator">:</span>
     <span class="token comment">// INSTEAD OF INITIALIZE FUNCTION WE USE A constructor FOR INITIALIZATION</span>
     <span class="token function">Rectangle</span><span class="token punctuation">(</span><span class="token keyword">int</span> l<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span>
     <span class="token punctuation">{</span>
         length <span class="token operator">=</span> l<span class="token punctuation">;</span>
         breadth <span class="token operator">=</span> b<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>

     <span class="token keyword">int</span> <span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
     <span class="token punctuation">{</span>
         <span class="token keyword">return</span> length <span class="token operator">*</span> breadth<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>

     <span class="token keyword">void</span> <span class="token function">changeLength</span><span class="token punctuation">(</span><span class="token keyword">int</span> l<span class="token punctuation">)</span>
     <span class="token punctuation">{</span>
         length <span class="token operator">=</span> l<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>

 <span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token punctuation">{</span>
     Rectangle <span class="token function">r</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

     cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Area of the Rectangle is &quot;</span> <span class="token operator">&lt;&lt;</span> r<span class="token punctuation">.</span><span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

     r<span class="token punctuation">.</span><span class="token function">changeLength</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

     cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Area of the Rectangle is &quot;</span> <span class="token operator">&lt;&lt;</span> r<span class="token punctuation">.</span><span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

     <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre></div><p><em>Example:</em></p><div class="language-cpp" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;iostream&gt;</span> <span class="token comment">// .h DEPENDS ON COMPILER (CHECK)</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span> <span class="token comment">// IF ONLY iostream IS USED</span>

<span class="token keyword">class</span> <span class="token class-name">Rectangle</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span><span class="token operator">:</span>
        <span class="token keyword">int</span> length<span class="token punctuation">;</span>
        <span class="token keyword">int</span> breadth<span class="token punctuation">;</span>

    <span class="token keyword">public</span><span class="token operator">:</span>
        <span class="token comment">// DEFAULT CONSTRUCTOR</span>
        <span class="token function">Rectangle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            length <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            breadth <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// PARAMETERIZED CONSTRUCT (USING CONSTRUCTOR OVERLOADING)</span>
        <span class="token function">Rectangle</span><span class="token punctuation">(</span><span class="token keyword">int</span> l<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// PROTOTYPE OR SIGNATURE OF THE FUNCTION</span>

        <span class="token comment">// BELOW TWO FUNCTIONS ARE FACILITATORS WHICH PERFORM SOME</span>
        <span class="token comment">// OPERATIONS ON DATA MEMBERS</span>
        <span class="token keyword">int</span> <span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> <span class="token function">perimeter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// THIS IS accessor/getter (get()) FUNCTION</span>
        <span class="token keyword">int</span> <span class="token function">getLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> length<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// THIS IS mutator/setter (set()) FUNCTION</span>
        <span class="token keyword">void</span> <span class="token function">setLength</span><span class="token punctuation">(</span><span class="token keyword">int</span> l<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            length <span class="token operator">=</span> l<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// DESTRUCTOR (CALL WHENEVER DYNAMIC MEMORY IS ALLOCATED BY THE CLASS)</span>
        <span class="token operator">~</span><span class="token function">Rectangle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">Rectangle</span><span class="token double-colon punctuation">::</span><span class="token function">Rectangle</span><span class="token punctuation">(</span><span class="token keyword">int</span> l<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    length <span class="token operator">=</span> l<span class="token punctuation">;</span>
    breadth <span class="token operator">=</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token class-name">Rectangle</span><span class="token double-colon punctuation">::</span><span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> length <span class="token operator">*</span> breadth<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token class-name">Rectangle</span><span class="token double-colon punctuation">::</span><span class="token function">perimeter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token punctuation">(</span>length <span class="token operator">+</span> breadth<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Rectangle</span><span class="token double-colon punctuation">::</span><span class="token operator">~</span><span class="token function">Rectangle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// FREE THE DYNAMICALLY ALLOCATED MEMORY</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Rectangle <span class="token function">r</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout<span class="token operator">&lt;&lt;</span>r<span class="token punctuation">.</span><span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout<span class="token operator">&lt;&lt;</span>r<span class="token punctuation">.</span><span class="token function">perimeter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    r<span class="token punctuation">.</span><span class="token function">setLength</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout<span class="token operator">&lt;&lt;</span>r<span class="token punctuation">.</span><span class="token function">getLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// NOW DESTRUCTOR WILL AUTOMATICALLY CALLED</span>
    <span class="token comment">// WHEN THE OBJECT GOES OUTSIDE THE SCOPE</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>C++ program supports <em>generic (template) functions</em> and <em>generic(template) classes</em>.</p><div class="language-cpp" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">template</span> <span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">T</span><span class="token operator">&gt;</span>
<span class="token keyword">class</span> <span class="token class-name">Arithmetic</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span><span class="token operator">:</span>
        T a<span class="token punctuation">;</span>
        T b<span class="token punctuation">;</span>

    <span class="token keyword">public</span><span class="token operator">:</span>
        <span class="token function">Arithmetic</span><span class="token punctuation">(</span>T a<span class="token punctuation">,</span> T b<span class="token punctuation">)</span><span class="token punctuation">;</span>
        T <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        T <span class="token function">sub</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">template</span> <span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">T</span><span class="token operator">&gt;</span>
<span class="token class-name">Arithmetic</span><span class="token operator">&lt;</span>T<span class="token operator">&gt;</span><span class="token double-colon punctuation">::</span><span class="token function">Arithmetic</span><span class="token punctuation">(</span>T a<span class="token punctuation">,</span> T b<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// THIS REFERS TO CLASS MEMBER VARIABLES NOT THE FUNCTION VARIABLES</span>
    <span class="token keyword">this</span><span class="token operator">-&gt;</span>a <span class="token operator">=</span> a<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token operator">-&gt;</span>b <span class="token operator">=</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">template</span> <span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">T</span><span class="token operator">&gt;</span>
T <span class="token class-name">Arithmetic</span><span class="token operator">&lt;</span>T<span class="token operator">&gt;</span><span class="token double-colon punctuation">::</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    T c<span class="token punctuation">;</span>
    c <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
    <span class="token keyword">return</span> c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">template</span> <span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">T</span><span class="token operator">&gt;</span>
T <span class="token class-name">Arithmetic</span><span class="token operator">&lt;</span>T<span class="token operator">&gt;</span><span class="token double-colon punctuation">::</span><span class="token function">sub</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    T c<span class="token punctuation">;</span>
    c <span class="token operator">=</span> a <span class="token operator">-</span> b<span class="token punctuation">;</span>
    <span class="token keyword">return</span> c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Arithmetic<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token function">ar</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout<span class="token operator">&lt;&lt;</span>ar<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    Arithmetic<span class="token operator">&lt;</span><span class="token keyword">double</span><span class="token operator">&gt;</span> <span class="token function">ar1</span><span class="token punctuation">(</span><span class="token number">1.5</span><span class="token punctuation">,</span> <span class="token number">2.3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout<span class="token operator">&lt;&lt;</span>ar1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ol>`,68);function T(R,v){const a=o("ExternalLinkIcon");return e(),c("div",null,[k,r,d,n("p",null,[s("For Windows (uses "),n("a",m,[s("MinGW Compiler"),t(a)]),s("):")]),n("ul",null,[n("li",null,[n("a",g,[s("Vim"),t(a)]),s(": Text editor or "),n("a",y,[s("Neovim"),t(a)]),s(": Vim-based text editor")]),n("li",null,[n("a",h,[s("Visual Studio"),t(a)])]),n("li",null,[n("a",f,[s("Visual Studio Code"),t(a)]),s(": Text editor")]),n("li",null,[n("a",w,[s("Code::Blocks"),t(a)])]),n("li",null,[n("a",b,[s("Dev-Cpp"),t(a)]),s(": Download the "),E,s(" version so that compiler will also be included")])]),A])}const O=p(i,[["render",T],["__file","C-Cpp_Concepts.html.vue"]]);export{O as default};
