import{_ as o,r as e,o as c,c as u,b as n,d as s,a as t,e as p}from"./app-jDLxG9B3.js";const l={},i=p(`<h1 id="python-3" tabindex="-1"><a class="header-anchor" href="#python-3" aria-hidden="true">#</a> Python 3</h1><p>Python is an interpreted, high-level, general-purpose programming language. Created by <strong>Guido van Rossum</strong> and first released in 1991, Python&#39;s design philosophy emphasizes code readability with its notable use of significant whitespace. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.</p><p>Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming. Python is often described as a &quot;batteries included&quot; language due to its comprehensive standard library.</p><p>Python was conceived in the late 1980s as a successor to the ABC language. Python 2.0, released in 2000, introduced features like list comprehensions and a garbage collection system capable of collecting reference cycles. Python 3.0, released in 2008, was a major revision of the language that is not completely backward-compatible, and much Python 2 code does not run unmodified on Python 3.</p><p>The Python 2 language, i.e. Python 2.7.x, is &quot;sunsetting&quot; on January 1, 2020 (after extension; first planned for 2015), and the Python team of volunteers will not fix security issues, or improve it in other ways after that date. With the end-of-life, only Python 3.5.x and later will be supported.</p><p>Python interpreters are available for many operating systems. A global community of programmers develops and maintains CPython, an open source reference implementation. A non-profit organization, the Python Software Foundation, manages and directs resources for Python and CPython development.</p><h2 id="project-scaffolding" tabindex="-1"><a class="header-anchor" href="#project-scaffolding" aria-hidden="true">#</a> Project Scaffolding</h2><ol><li><p>Create a folder with project name.</p></li><li><p>Create virtual python environment, so that the project related packages are confined to the project and will have a specific version:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># give any name in place of env</span>
python3 <span class="token parameter variable">-m</span> venv <span class="token function">env</span>
</code></pre></div></li><li><p>Activate the environment:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>env<span class="token punctuation">\\</span>Scripts<span class="token punctuation">\\</span>activate.bat

<span class="token comment"># On Unix or MacOS, run:</span>
<span class="token builtin class-name">source</span> env/bin/activate
</code></pre></div></li><li><p>Install the required packages and start working.</p></li></ol><h2 id="packages" tabindex="-1"><a class="header-anchor" href="#packages" aria-hidden="true">#</a> Packages</h2>`,9),k={href:"https://github.com/ActiveState/appdirs",target:"_blank",rel:"noopener noreferrer"},r=n("ul",null,[n("li",null,'A small Python module for determining appropriate platform-specific dirs, e.g. a "user data dir"')],-1),m={href:"https://github.com/wbond/asn1crypto",target:"_blank",rel:"noopener noreferrer"},d=n("ul",null,[n("li",null,"A fast, pure Python library for parsing and serializing ASN.1 structures.")],-1),y={href:"https://github.com/PyCQA/astroid",target:"_blank",rel:"noopener noreferrer"},g=n("ul",null,[n("li",null,"A common base representation of python source code for pylint and other projects")],-1),w={href:"https://www.attrs.org/en/stable/",target:"_blank",rel:"noopener noreferrer"},f=n("ul",null,[n("li",null,"attrs is the Python package that will bring back the joy of writing classes by relieving you from the drudgery of implementing object protocols (aka dunder methods).")],-1),h={href:"https://github.com/glyph/Automat",target:"_blank",rel:"noopener noreferrer"},b=n("ul",null,[n("li",null,"Automat is a library for concise, idiomatic Python expression of finite-state automata (particularly deterministic finite-state transducers).")],-1),q=p(`<h2 id="python-libraries" tabindex="-1"><a class="header-anchor" href="#python-libraries" aria-hidden="true">#</a> Python Libraries</h2><ul><li><p>Python-2 Code vs. Python-3:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment"># 2to3 -w filename.py</span>
<span class="token comment"># python2x</span>
<span class="token keyword">from</span> __future__ <span class="token keyword">import</span> division  <span class="token comment"># imports python3</span>

<span class="token keyword">print</span> <span class="token string">&quot;Hello World&quot;</span>  <span class="token comment"># is acceptable in Python 2</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># in Python 3, print must be followed by ()</span>
<span class="token comment"># print x,           # Trailing comma suppresses newline in Python 2</span>
<span class="token comment"># print(x, end=&quot; &quot;)  # Appends a space instead of a newline in Python 3</span>

<span class="token comment"># python2 has 2 inputs, input() and raw_input()#input() function treats received data as string if it is included in quotes &#39;&#39; or &quot;&quot;, otherwise data is treated as number</span>
</code></pre></div></li><li><p><strong>Python Everything</strong>:</p></li></ul><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment"># os library</span>
<span class="token keyword">import</span> os

os<span class="token punctuation">.</span>getcwd<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># gives current path</span>
os<span class="token punctuation">.</span>mkdir<span class="token punctuation">(</span><span class="token string">&quot;directory name&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># makes directory in the current directory</span>
os<span class="token punctuation">.</span>rename<span class="token punctuation">(</span><span class="token string">&quot;old_name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;new_name&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># renames the files and directories</span>
os<span class="token punctuation">.</span>rmdir<span class="token punctuation">(</span><span class="token string">&quot;dirname&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># deletes the directory</span>
os<span class="token punctuation">.</span>remove<span class="token punctuation">(</span><span class="token string">&quot;test.txt&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># deletes the file</span>
os<span class="token punctuation">.</span>chdir<span class="token punctuation">(</span><span class="token string">&quot;directory path&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># change directory path</span>

<span class="token builtin">abs</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">)</span>  <span class="token comment"># absolute number prints positive numbers if input is -5 or 5</span>
<span class="token builtin">help</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># help for everything use import if error</span>
<span class="token builtin">max</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># maximum value in the list or something</span>
<span class="token builtin">min</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># minimum value in the list or something</span>
<span class="token builtin">round</span><span class="token punctuation">(</span><span class="token number">6.6</span><span class="token punctuation">)</span>  <span class="token comment"># to round of the floating numbers</span>
<span class="token comment"># i.e. 16.66666 to 16.667 using round(16.66666 , 3)</span>


<span class="token comment"># sys library</span>
<span class="token keyword">import</span> sys

sys<span class="token punctuation">.</span>stderr<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&quot;This is stderr text&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># used to print error</span>
sys<span class="token punctuation">.</span>stderr<span class="token punctuation">.</span>flush<span class="token punctuation">(</span><span class="token punctuation">)</span>
sys<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&quot;This is stdout text&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>  <span class="token comment"># gets file name and get input from other Languages</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;what is ur name&quot;</span><span class="token punctuation">)</span>

name <span class="token operator">=</span> sys<span class="token punctuation">.</span>stdin<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>

string_name <span class="token operator">=</span> <span class="token string">&quot;My name is Prabhu&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string_name<span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">:</span><span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>string_name<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">11</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&quot;Vinayak&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;%c is my %s letter and my number %d is %.5f&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token string">&quot;X&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;favorite&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0.14</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span>capitalize<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;Prabhu&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span>isalpha<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span>isalnum<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&quot;Prabhu&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Vinu&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

name_list <span class="token operator">=</span> name<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>name_list<span class="token punctuation">)</span>

<span class="token keyword">import</span> urllib<span class="token punctuation">.</span>parse

<span class="token comment"># urllib library</span>
<span class="token keyword">import</span> urllib<span class="token punctuation">.</span>request

urllib<span class="token punctuation">.</span>parse<span class="token punctuation">.</span>urlencode<span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>Request<span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>urlopen<span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">import</span> math
<span class="token keyword">from</span> tkinter <span class="token keyword">import</span> EXCEPTION

math<span class="token punctuation">.</span>floor<span class="token punctuation">(</span><span class="token number">2.6</span><span class="token punctuation">)</span>  <span class="token comment"># round() like function rounds to down</span>
math<span class="token punctuation">.</span>ceil<span class="token punctuation">(</span><span class="token number">2.6</span><span class="token punctuation">)</span>  <span class="token comment"># round() like function rounds to up</span>

<span class="token string">&quot;string&quot;</span><span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># to convert string into lowercase</span>

<span class="token keyword">import</span> time

start_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\\n\\n--- %s seconds ---&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start_time<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">import</span> statistics

x <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>

me <span class="token operator">=</span> statistics<span class="token punctuation">.</span>mean<span class="token punctuation">(</span>x<span class="token punctuation">)</span>
medi <span class="token operator">=</span> statistics<span class="token punctuation">.</span>median<span class="token punctuation">(</span>x<span class="token punctuation">)</span>
sdev <span class="token operator">=</span> statistics<span class="token punctuation">.</span>stdev<span class="token punctuation">(</span>x<span class="token punctuation">)</span>
ver <span class="token operator">=</span> statistics<span class="token punctuation">.</span>variance<span class="token punctuation">(</span>x<span class="token punctuation">)</span>

<span class="token comment"># import statistics as s</span>
<span class="token comment"># from statistics import *  # all without using statistics.</span>
<span class="token comment"># from statistics import mean</span>
<span class="token comment"># from statistics import mean as m</span>
<span class="token comment"># from statistics import median</span>

<span class="token comment"># - single line comment and &#39;&#39;&#39; = multiline comment</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
   multiline print
&quot;&quot;&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment"># print(&quot;my name is %s and wiegergjg %d dfsf&quot;, %(&quot;Prabhu&quot;, 25))</span>

<span class="token comment"># ! or # -*- coding: encoding -*-</span>
<span class="token comment"># ex: # -*- coding: cp-1252 -*- which uses Windows-1252 encoding</span>

a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span>  <span class="token comment"># which is equal to a=0 and b=1 initialization</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>
    b<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot;,&quot;</span>
<span class="token punctuation">)</span>  <span class="token comment"># end can be used to avoid the newline after the output, or end the output with a different string</span>

<span class="token comment"># operators list:</span>
<span class="token comment"># +, -, *, /, %(remainder)</span>

<span class="token comment"># (quotient without floating point) i.e. 17/3 is 5.66667 but 17//3 is 5 using _ we can add the value the previous answer i.e. new + _</span>

<span class="token comment"># The &quot;pass&quot;  statement does nothing.</span>
<span class="token keyword">pass</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">r&quot;C:\\some\\name&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># r used to to differentiate \\name form \\n</span>

<span class="token builtin">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># returns the length of a string.</span>


<span class="token comment"># lists are like arrays []</span>
squares <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">]</span>
new_squares <span class="token operator">=</span> squares <span class="token operator">+</span> <span class="token punctuation">[</span><span class="token number">36</span><span class="token punctuation">,</span> <span class="token number">49</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">81</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span>

squares<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token number">55</span><span class="token punctuation">)</span>  <span class="token comment"># to add item to end of list</span>
squares<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>  <span class="token comment"># to remove items from 2 to 4</span>
a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">]</span>
n <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>  <span class="token comment"># adding to x, x = [a, n]</span>

<span class="token keyword">for</span> w <span class="token keyword">in</span> squares<span class="token punctuation">:</span>  <span class="token comment"># prints from squares</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># prints 0 to 4</span>
    <span class="token keyword">pass</span>

<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># prints 0, 3</span>
    <span class="token keyword">pass</span>

<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>squares<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># prints all squares</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> squares<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># gives [0, 1, 2, 3, 4]</span>

<span class="token comment"># numbers, string, lists, tuples, dictionary</span>

<span class="token comment"># ** = power to</span>

quote <span class="token operator">=</span> <span class="token string">&#39;&quot;Allawa &#39;</span>

multiline_quote <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot; just
like everyone&quot;&quot;&quot;</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;%s %s %s&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token string">&quot;I like&quot;</span><span class="token punctuation">,</span> quote<span class="token punctuation">,</span> multiline_quote<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;I do&#39;t like this&quot;</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># import modules using = import_random, import_sys, import_os</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># Lists [] will have index with first one having index = 0.</span>

grocery_lis <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Juice&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Tomatoes&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Potato&quot;</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;First item&quot;</span><span class="token punctuation">,</span> grocery_lis<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>grocery_lis<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

others <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;wash car&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pick up kids&quot;</span><span class="token punctuation">]</span>
to_do <span class="token operator">=</span> <span class="token punctuation">[</span>grocery_lis<span class="token punctuation">,</span> others<span class="token punctuation">]</span>

grocery_lis<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">&quot;Onions&quot;</span><span class="token punctuation">)</span>
grocery_lis<span class="token punctuation">.</span>insert<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;Pickle&quot;</span><span class="token punctuation">)</span>
grocery_lis<span class="token punctuation">.</span>remove<span class="token punctuation">(</span><span class="token string">&quot;Juice&quot;</span><span class="token punctuation">)</span>
grocery_lis<span class="token punctuation">.</span>remove<span class="token punctuation">(</span>grocery_lis<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
grocery_lis<span class="token punctuation">.</span>sort<span class="token punctuation">(</span><span class="token punctuation">)</span>
grocery_lis<span class="token punctuation">.</span>reverse<span class="token punctuation">(</span><span class="token punctuation">)</span>
grocery_lis<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token string">&quot;Pickle&quot;</span><span class="token punctuation">)</span>
grocery_lis<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token string">&quot;Onions&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># counts the number of times Onions is in grocery_lis</span>

<span class="token keyword">del</span> grocery_lis<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span>

to_do_list <span class="token operator">=</span> others <span class="token operator">+</span> grocery_lis
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>to_do_list<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">max</span><span class="token punctuation">(</span>to_do_list<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">min</span><span class="token punctuation">(</span>to_do_list<span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment"># CSV</span>
<span class="token keyword">import</span> csv

<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;exm.csv&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> csv_file<span class="token punctuation">:</span>
    readCSV <span class="token operator">=</span> csv<span class="token punctuation">.</span>reader<span class="token punctuation">(</span>csv_file<span class="token punctuation">,</span> delimiter<span class="token operator">=</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># tuples() unlike lists we will not be able to change it after it is created they are faster</span>

pi_tuple <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span>
pi_tuple <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">9</span>  <span class="token comment"># its a tuple</span>

new_list <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span>pi_tuple<span class="token punctuation">)</span>
new_tuple <span class="token operator">=</span> <span class="token builtin">tuple</span><span class="token punctuation">(</span>new_list<span class="token punctuation">)</span>

<span class="token builtin">len</span><span class="token punctuation">(</span>new_tuple<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">min</span><span class="token punctuation">,</span> <span class="token builtin">max</span>

<span class="token comment"># Dictionary {} values with unique keys and you cannot join keys</span>
<span class="token comment"># name = {key:value, key:value}</span>

super_villain <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;Fiddler&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Isaac Bowin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;007&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">}</span>
<span class="token keyword">del</span> super_villain<span class="token punctuation">[</span><span class="token string">&quot;Fiddler&quot;</span><span class="token punctuation">]</span>  <span class="token comment"># delete</span>
super_villain<span class="token punctuation">[</span><span class="token string">&quot;007&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;009&quot;</span>  <span class="token comment"># adds to the Dictionary no order</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>super_villain<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;007&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>super_villain<span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>super_villain<span class="token punctuation">.</span>values<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># conditionals if, else, elif</span>

<span class="token keyword">try</span><span class="token punctuation">:</span>  <span class="token comment"># it checks if there is any error inside it</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;working&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># and if error is there it will go to exact</span>
<span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>  <span class="token comment"># Exception or NameError these are error handling</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>  <span class="token comment"># it will print = &#39;xxasd&#39; is not in ____</span>


age <span class="token operator">=</span> <span class="token number">21</span>

<span class="token keyword">if</span> age <span class="token operator">&gt;</span> <span class="token number">16</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;You&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Not&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> age <span class="token operator">&gt;</span> <span class="token number">21</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;YNO&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">elif</span> age <span class="token operator">&gt;=</span> <span class="token number">16</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;yuno&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;W&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># AND_OR_NOT</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>age <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span>age <span class="token operator">&lt;=</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;You&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">elif</span> <span class="token punctuation">(</span>age <span class="token operator">&gt;=</span> <span class="token number">21</span><span class="token punctuation">)</span> <span class="token keyword">or</span> <span class="token punctuation">(</span>age <span class="token operator">&lt;=</span> <span class="token number">65</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Not&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">elif</span> <span class="token keyword">not</span> <span class="token punctuation">(</span>age <span class="token operator">==</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;You dont get it&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;nothing&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># loops</span>

<span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> y <span class="token keyword">in</span> grocery_lis<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span>

<span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>

num_lis <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> y <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>num_lis<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">import</span> random

random_num <span class="token operator">=</span> random<span class="token punctuation">.</span>randrange<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
<span class="token keyword">while</span> random_num <span class="token operator">!=</span> <span class="token number">15</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>random_num<span class="token punctuation">)</span>
    random_num <span class="token operator">=</span> random<span class="token punctuation">.</span>randrange<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;just finished&quot;</span><span class="token punctuation">)</span>

i <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">while</span> i <span class="token operator">&lt;=</span> <span class="token number">20</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token keyword">elif</span> i <span class="token operator">==</span> <span class="token number">9</span><span class="token punctuation">:</span>
        <span class="token keyword">break</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        i <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token keyword">continue</span>
    i <span class="token operator">+=</span> <span class="token number">1</span>


<span class="token keyword">def</span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># using main function</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, World!!!&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    Main<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">add_number</span><span class="token punctuation">(</span>fNum<span class="token punctuation">,</span> lNum<span class="token punctuation">)</span><span class="token punctuation">:</span>
    sumNum <span class="token operator">=</span> fNum <span class="token operator">+</span> lNum
    <span class="token keyword">return</span> sumNum


<span class="token keyword">print</span><span class="token punctuation">(</span>add_number<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment"># Variable-length arguments</span>
<span class="token keyword">def</span> <span class="token function">print_info</span><span class="token punctuation">(</span>arg1<span class="token punctuation">,</span> <span class="token operator">*</span>var_tuple<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Output is: &quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>arg1<span class="token punctuation">)</span>
    <span class="token keyword">for</span> var <span class="token keyword">in</span> var_tuple<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>var<span class="token punctuation">)</span>
    <span class="token keyword">return</span>


print_info<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
print_info<span class="token punctuation">(</span><span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span>

<span class="token comment">#!/usr/bin/python</span>
<span class="token comment"># shows linux where to find python</span>
<span class="token comment"># will work only if used as main code and will not work when used as module</span>
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Such a great module!!!!&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># lambda</span>
<span class="token builtin">sum</span> <span class="token operator">=</span> <span class="token keyword">lambda</span> arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">:</span> arg1 <span class="token operator">+</span> arg2
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Value of total : &quot;</span><span class="token punctuation">,</span> <span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">global</span> var_name  <span class="token comment"># use global to access global variables inside a function</span>

<span class="token comment"># locals() and globals() functions can be used to see all local variables and global variables in that function</span>


<span class="token comment"># r = readonly (default mode)</span>
<span class="token comment"># rb = readonly in binary format (default mode)</span>
<span class="token comment"># r+ = read and write</span>
<span class="token comment"># rb+ = read and write in binary</span>
<span class="token comment"># x = create a new file and open for writing</span>
<span class="token comment"># w and a have all 4 modes</span>

test_file <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;test.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;wb&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># &quot;ab+&quot; to rad and append file</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>test_file<span class="token punctuation">.</span>mode<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>test_file<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>test_file<span class="token punctuation">.</span>closed<span class="token punctuation">)</span>
test_file<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token builtin">bytes</span><span class="token punctuation">(</span><span class="token string">&quot;Write me to the file\\n&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
test_file<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

test_file <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;test.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;r+&quot;</span><span class="token punctuation">)</span>
test_file_in <span class="token operator">=</span> test_file<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>test_file_in<span class="token punctuation">)</span>

<span class="token comment"># tell() tells position of in the file</span>
<span class="token comment"># seek(offset, from) goes to the specific position in file from = 0(beginning), 1(current), 2(end of file)</span>


<span class="token keyword">def</span> <span class="token function">marks</span><span class="token punctuation">(</span>mark<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">assert</span> mark <span class="token operator">&gt;=</span> <span class="token number">0</span>  <span class="token comment"># this produces an error if mark is smaller than 0</span>


<span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;working good&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">except</span> EXCEPTION <span class="token keyword">as</span> e<span class="token punctuation">:</span>  <span class="token comment"># only except: can also be written</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;this went wrong&quot;</span> <span class="token operator">+</span> e<span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Everything went smoothly&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># or</span>

<span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
<span class="token keyword">finally</span><span class="token punctuation">:</span>  <span class="token comment"># some code that has to happen even if try dose not occur</span>
    <span class="token comment"># fh.close()</span>
    <span class="token keyword">pass</span>


<span class="token keyword">def</span> <span class="token function">marks</span><span class="token punctuation">(</span>mark<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> mark <span class="token operator">&gt;</span> <span class="token number">100</span> <span class="token keyword">and</span> mark <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">raise</span> Exception<span class="token punctuation">(</span>mark<span class="token punctuation">)</span>  <span class="token comment"># produces an exception</span>


<span class="token keyword">class</span> <span class="token class-name">Network_Error</span><span class="token punctuation">(</span>RuntimeError<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># user defined exception</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> arg<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>args <span class="token operator">=</span> arg


<span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token keyword">raise</span> Network_Error<span class="token punctuation">(</span><span class="token string">&quot;Bad hostname&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">except</span> Network_Error <span class="token keyword">as</span> e<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>args<span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">:</span>
    __name <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>  <span class="token comment"># or = None #__name can also be written as name</span>
    __height <span class="token operator">=</span> <span class="token number">0</span>
    __weight <span class="token operator">=</span> <span class="token number">0</span>
    __sound <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> height<span class="token punctuation">,</span> weight<span class="token punctuation">,</span> sound<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>__name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>__height <span class="token operator">=</span> height
        self<span class="token punctuation">.</span>__weight <span class="token operator">=</span> weight
        self<span class="token punctuation">.</span>__sound <span class="token operator">=</span> sound

    <span class="token keyword">def</span> <span class="token function">set_name</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>__name <span class="token operator">=</span> name

    <span class="token keyword">def</span> <span class="token function">get_name</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>__name

    <span class="token keyword">def</span> <span class="token function">set_sound</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> sound<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>__sound <span class="token operator">=</span> sound

    <span class="token keyword">def</span> <span class="token function">get_sound</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>__sound

    <span class="token keyword">def</span> <span class="token function">get_type</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Animal&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">toString</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&quot;{} is {} cm tall and {} kilogram and say {}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>
            self<span class="token punctuation">.</span>__name<span class="token punctuation">,</span> self<span class="token punctuation">.</span>__height<span class="token punctuation">,</span> self<span class="token punctuation">.</span>__weight<span class="token punctuation">,</span> self<span class="token punctuation">.</span>__sound
        <span class="token punctuation">)</span>


cat <span class="token operator">=</span> Animal<span class="token punctuation">(</span><span class="token string">&quot;Wiskers&quot;</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&quot;Meow&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>cat<span class="token punctuation">.</span>toString<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span>Animal<span class="token punctuation">)</span><span class="token punctuation">:</span>
    __owner <span class="token operator">=</span> <span class="token boolean">None</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> height<span class="token punctuation">,</span> weight<span class="token punctuation">,</span> sound<span class="token punctuation">,</span> owner<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>__owner <span class="token operator">=</span> owner
        <span class="token builtin">super</span><span class="token punctuation">(</span>Dog<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>name<span class="token punctuation">,</span> height<span class="token punctuation">,</span> weight<span class="token punctuation">,</span> sound<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">set_owner</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> owner<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>__owner <span class="token operator">=</span> owner

    <span class="token keyword">def</span> <span class="token function">get_owner</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>__owner

    <span class="token keyword">def</span> <span class="token function">get_type</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Dog&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">toString</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&quot;{} is {} cm tall and {} kilogram and say {} his owner is {}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>
            self<span class="token punctuation">.</span>__name<span class="token punctuation">,</span> self<span class="token punctuation">.</span>__height<span class="token punctuation">,</span> self<span class="token punctuation">.</span>__weight<span class="token punctuation">,</span> self<span class="token punctuation">.</span>__sound<span class="token punctuation">,</span> self<span class="token punctuation">.</span>__owner
        <span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">multiple_sounds</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> how_many<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> how_many <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>get_sound<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>get_sound<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> how_many<span class="token punctuation">)</span>


spot <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token string">&quot;Spot&quot;</span><span class="token punctuation">,</span> <span class="token number">53</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">,</span> <span class="token string">&quot;Ruff&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Prabhu&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>spot<span class="token punctuation">.</span>toString<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre></div>`,3);function _(v,x){const a=e("ExternalLinkIcon");return c(),u("div",null,[i,n("ul",null,[n("li",null,[n("p",null,[n("a",k,[s("appdirs"),t(a)]),s(":")]),r]),n("li",null,[n("p",null,[n("a",m,[s("asn1crypto"),t(a)]),s(":")]),d]),n("li",null,[n("p",null,[n("a",y,[s("astroid"),t(a)]),s(":")]),g]),n("li",null,[n("p",null,[n("a",w,[s("attrs"),t(a)]),s(":")]),f]),n("li",null,[n("p",null,[n("a",h,[s("Automat"),t(a)]),s(":")]),b])]),q])}const N=o(l,[["render",_],["__file","Python.html.vue"]]);export{N as default};
