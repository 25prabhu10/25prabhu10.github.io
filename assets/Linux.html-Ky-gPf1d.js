import{_ as n,o as s,c as a,e}from"./app-jDLxG9B3.js";const t={},o=e(`<h1 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h1><p>Linux is a family of open-source Unix-like operating systems based on the Linux kernel</p><h2 id="filesystem" tabindex="-1"><a class="header-anchor" href="#filesystem" aria-hidden="true">#</a> Filesystem</h2><p>Typical Filesystem Hierarchy Standard (FHS): To get more information checkout <code>man hier</code></p><ol><li><p><code>/bin</code>:</p><ul><li>Binaries of important executables and core OS commands (<code>ls</code>, <code>cat</code>)</li><li>Typically this directory is symbolically linked to <code>/usr/bin</code></li></ul></li><li><p><code>/sbin</code>:</p><ul><li>Contains system essential Binaries similar to <code>/bin</code></li><li>Traditionally the programs in <code>sbin</code> were statically linked, thus had fewer library dependencies</li><li>Binaries containing system administration tools</li><li>Typically this directory is symbolically linked to <code>/usr/bin</code></li></ul></li><li><p><code>/boot</code>:</p><ul><li>Contains boot-files, files needed by the bootloader</li></ul></li><li><p><code>/dev</code>:</p><ul><li>Contains device files</li><li>These files are dynamically created based on the various physical and virtual devices that are connected to the system</li><li>Devices are present here</li><li>All devices are files or directories</li></ul></li><li><p><code>/etc</code>:</p><ul><li>Critical configuration files and startup scripts</li><li>System wide configurations</li><li>Such as settings for <code>ssh</code> are present in <code>vi /etc/ssh/ssh_config</code></li></ul></li><li><p><code>/home</code>:</p><ul><li>Location of the individual user home directories</li></ul></li><li><p><code>/lib</code>, <code>/lib32</code>, <code>/lib64</code>:</p><ul><li>Contains shared libraries required by the system programs</li><li>Typically these directories are symbolically linked to <code>/usr/lib</code></li></ul></li><li><p><code>/mnt</code>:</p><ul><li>Mount devices temporarily: like attaching a network storage server temporarily</li><li>Some do permanent mounting</li></ul></li><li><p><code>/opt</code>:</p><ul><li>Optional directory</li><li>Optional software packages are placed, mostly by vendors</li></ul></li><li><p><code>/proc</code>:</p><ul><li>It is a pseudo file-system: a file-system that&#39;s created at startup and removed at shutdown</li><li>It contains the information about every running process on the machine</li><li>Each active process can have a sub-directory here</li><li>Also contains system information: such as CPU in <code>cat /proc/cpuinfo</code></li></ul></li><li><p><code>/root</code>:</p><ul><li>Root directory</li><li>Home directory for the root user</li></ul></li><li><p><code>/run</code>:</p><ul><li>Contains information describing the system since boot-time</li><li>Such as who&#39;s logged in and what demons are running</li><li>Temp <code>fs</code> files</li></ul></li><li><p><code>/span</code>:</p><ul><li>snap packages</li></ul></li><li><p><code>/srv</code>:</p><ul><li>Occasionally used as a directory for files served by a web server or other server mechanisms such as <code>ftp</code></li></ul></li><li><p><code>/sys</code>:</p><ul><li>System files</li><li>Contains information about the devices, drivers, and kernel features</li><li>Like <code>/proc</code> but better structured</li></ul></li><li><p><code>/tmp</code>:</p><ul><li>Directory to store temporary files and directories</li></ul></li><li><p><code>/usr</code>:</p><ul><li>Contains most of the programs and utilities the system will run</li><li>The place where most of the installed programs reside</li></ul></li><li><p><code>/var</code>:</p><ul><li>System specific variable files: likes logs, temp message files, spool files etc</li><li>Variable files that grow</li><li>Some web servers like Apache server files from <code>/var/www</code> directory</li></ul></li><li><p><code>lost+found</code>:</p><ul><li>Contains chunks of broken files after a system crash</li></ul></li><li><p><code>/media</code>:</p><ul><li>It is the mount mount for file systems stored on removable media</li></ul></li></ol><h2 id="grep" tabindex="-1"><a class="header-anchor" href="#grep" aria-hidden="true">#</a> grep</h2><p>Grep is a command-line utility for searching plain-text data sets for lines that match a regular expression. Its name comes from the ed command g/re/p (globally search for a regular expression and print matching lines), which has the same effect. grep was originally developed for the Unix operating system like Linux, but later available for all Unix-like systems and some others such as OS-9</p><h2 id="sed" tabindex="-1"><a class="header-anchor" href="#sed" aria-hidden="true">#</a> sed</h2><p>sed (&quot;stream editor&quot;) is a Unix utility that parses and transforms text, using a simple, compact programming language</p><ul><li>TMP replace pattern:</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/Steven/Kate/&#39;</span> <span class="token function">file</span>
</code></pre></div><h2 id="awk" tabindex="-1"><a class="header-anchor" href="#awk" aria-hidden="true">#</a> AWK</h2><p>AWK (<code>awk</code>) is a domain-specific language designed for text processing and typically used as a data extraction and reporting tool. Similar to the <a href="#sed">Sed</a> and <a href="#grep">Grep</a> commands, it is a filter, and is a standard feature of most Unix-like operating systems</p><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><ul><li><p>Unix/Linux:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">awk</span> <span class="token string">&#39;/pattern/ {print &quot;$1&quot;}&#39;</span>    <span class="token comment"># standard Unix shells</span>
</code></pre></div></li><li><p>DOS/Win:</p><div class="language-powershell" data-ext="powershell"><pre class="language-powershell"><code>awk <span class="token string">&#39;/pattern/ {print &quot;$1&quot;}&#39;</span>    <span class="token comment"># compiled with DJGPP, Cygwin</span>
awk <span class="token string">&quot;/pattern/ {print \\&quot;</span><span class="token variable">$1</span>\\<span class="token string">&quot;}&quot;</span>  <span class="token comment"># GnuWin32, UnxUtils, Mingw</span>
</code></pre></div></li></ul><p>Note that the DJGPP compilation (for DOS or Windows-32) permits an awk script to follow Unix quoting syntax <code>&#39;/like/ {&quot;this&quot;}&#39;</code>. However, if the command interpreter is <code>CMD.EXE</code> or <code>COMMAND.COM</code>, single quotes will not protect the redirection arrows <code>(&lt;, &gt;)</code> nor do they protect pipes <code>(|)</code>. These are special symbols which require &quot;double quotes&quot; to protect them from interpretation as operating system directives. If the command interpreter is bash, ksh, zsh or another Unix shell, then single and double quotes will follow the standard Unix usage</p><p>Users of MS-DOS or Microsoft Windows must remember that the percent sign <code>(%)</code> is used to indicate environment variables, so this symbol must be doubled <code>(%%)</code> to yield a single percent sign visible to awk</p><p>To conserve space, use <code>&#39;1&#39;</code> instead of <code>&#39;{print}&#39;</code> to print each line. Either one will work</p><h3 id="handy-one-line-awk-scripts" tabindex="-1"><a class="header-anchor" href="#handy-one-line-awk-scripts" aria-hidden="true">#</a> Handy one-line AWK scripts</h3><ul><li>File Spacing:</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code> <span class="token comment"># double space a file</span>
 <span class="token function">awk</span> <span class="token string">&#39;1;{print &quot;&quot;}&#39;</span>
 <span class="token function">awk</span> <span class="token string">&#39;BEGIN{ORS=&quot;\\n\\n&quot;};1&#39;</span>
 <span class="token comment"># double space a file which already has blank lines in it. Output file</span>
 <span class="token comment"># should contain no more than one blank line between lines of text.</span>
 <span class="token comment"># NOTE: On Unix systems, DOS lines which have only CRLF (\\r\\n) are</span>
 <span class="token comment"># often treated as non-blank, and thus &#39;NF&#39; alone will return TRUE.</span>
 <span class="token function">awk</span> <span class="token string">&#39;NF{print $0 &quot;\\n&quot;}&#39;</span>
 <span class="token comment"># triple space a file</span>
 <span class="token function">awk</span> <span class="token string">&#39;1;{print &quot;\\n&quot;}&#39;</span>
</code></pre></div><ul><li>Numbering and Calculations:</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code> <span class="token comment"># precede each line by its line number FOR THAT FILE (left alignment).</span>
 <span class="token comment"># Using a tab (\\t) instead of space will preserve margins.</span>
 <span class="token function">awk</span> <span class="token string">&#39;{print FNR &quot;\\t&quot; $0}&#39;</span> files*
 <span class="token comment"># precede each line by its line number FOR ALL FILES TOGETHER, with tab.</span>
 <span class="token function">awk</span> <span class="token string">&#39;{print NR &quot;\\t&quot; $0}&#39;</span> files*
 <span class="token comment"># number each line of a file (number on left, right-aligned)</span>
 <span class="token comment"># Double the percent signs if typing from the DOS command prompt.</span>
 <span class="token function">awk</span> <span class="token string">&#39;{printf(&quot;%5d : %s\\n&quot;, NR,$0)}&#39;</span>
 <span class="token comment"># number each line of file, but only print numbers if line is not blank</span>
 <span class="token comment"># Remember caveats about Unix treatment of \\r (mentioned above)</span>
 <span class="token function">awk</span> <span class="token string">&#39;NF{$0=++a &quot; :&quot; $0};1&#39;</span>
 <span class="token function">awk</span> <span class="token string">&#39;{print (NF? ++a &quot; :&quot; :&quot;&quot;) $0}&#39;</span>
 <span class="token comment"># count lines (emulates &quot;wc -l&quot;)</span>
 <span class="token function">awk</span> <span class="token string">&#39;END{print NR}&#39;</span>
 <span class="token comment"># print the sums of the fields of every line</span>
 <span class="token function">awk</span> <span class="token string">&#39;{s=0; for (i=1; i&lt;=NF; i++) s=s+$i; print s}&#39;</span>
 <span class="token comment"># add all fields in all lines and print the sum</span>
 <span class="token function">awk</span> <span class="token string">&#39;{for (i=1; i&lt;=NF; i++) s=s+$i}; END{print s}&#39;</span>
 <span class="token comment"># print every line after replacing each field with its absolute value</span>
 <span class="token function">awk</span> <span class="token string">&#39;{for (i=1; i&lt;=NF; i++) if ($i &lt; 0) $i = -$i; print }&#39;</span>
 <span class="token function">awk</span> <span class="token string">&#39;{for (i=1; i&lt;=NF; i++) $i = ($i &lt; 0) ? -$i : $i; print }&#39;</span>
 <span class="token comment"># print the total number of fields (&quot;words&quot;) in all lines</span>
 <span class="token function">awk</span> <span class="token string">&#39;{ total = total + NF }; END {print total}&#39;</span> <span class="token function">file</span>
 <span class="token comment"># print the total number of lines that contain &quot;Beth&quot;</span>
 <span class="token function">awk</span> <span class="token string">&#39;/Beth/{n++}; END {print n+0}&#39;</span> <span class="token function">file</span>
 <span class="token comment"># print the largest first field and the line that contains it</span>
 <span class="token comment"># Intended for finding the longest string in field #1</span>
 <span class="token function">awk</span> <span class="token string">&#39;$1 &gt; max {max=$1; maxline=$0}; END{ print max, maxline}&#39;</span>
 <span class="token comment"># print the number of fields in each line, followed by the line</span>
 <span class="token function">awk</span> <span class="token string">&#39;{ print NF &quot;:&quot; $0 } &#39;</span>
 <span class="token comment"># print the last field of each line</span>
 <span class="token function">awk</span> <span class="token string">&#39;{ print $NF }&#39;</span>
 <span class="token comment"># print the last field of the last line</span>
 <span class="token function">awk</span> <span class="token string">&#39;{ field = $NF }; END{ print field }&#39;</span>
 <span class="token comment"># print every line with more than 4 fields</span>
 <span class="token function">awk</span> <span class="token string">&#39;NF &gt; 4&#39;</span>
 <span class="token comment"># print every line where the value of the last field is &gt; 4</span>
 <span class="token function">awk</span> <span class="token string">&#39;$NF &gt; 4&#39;</span>
</code></pre></div><ul><li>String Creation:</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code> <span class="token comment"># create a string of a specific length (e.g., generate 513 spaces)</span>
 <span class="token function">awk</span> <span class="token string">&#39;BEGIN{while (a++&lt;513) s=s &quot; &quot;; print s}&#39;</span>
 <span class="token comment"># insert a string of specific length at a certain character position</span>
 <span class="token comment"># Example: insert 49 spaces after column #6 of each input line.</span>
 <span class="token function">gawk</span> --re-interval <span class="token string">&#39;BEGIN{while(a++&lt;49)s=s &quot; &quot;};{sub(/^.{6}/,&quot;&amp;&quot; s)};1&#39;</span>
</code></pre></div><ul><li>Array Creation:</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code> <span class="token comment"># These next 2 entries are not one-line scripts, but the technique</span>
 <span class="token comment"># is so handy that it merits inclusion here.</span>

 <span class="token comment"># create an array named &quot;month&quot;, indexed by numbers, so that month[1]</span>
 <span class="token comment"># is &#39;Jan&#39;, month[2] is &#39;Feb&#39;, month[3] is &#39;Mar&#39; and so on.</span>
 split<span class="token punctuation">(</span><span class="token string">&quot;Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec&quot;</span>, month, <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span>
 <span class="token comment"># create an array named &quot;mdigit&quot;, indexed by strings, so that</span>
 <span class="token comment"># mdigit[&quot;Jan&quot;] is 1, mdigit[&quot;Feb&quot;] is 2, etc. Requires &quot;month&quot; array</span>
 <span class="token keyword">for</span> <span class="token punctuation">(</span>i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span><span class="token number">12</span><span class="token punctuation">;</span> i++<span class="token punctuation">)</span> mdigit<span class="token punctuation">[</span>month<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> i
</code></pre></div><ul><li>Text Conversion and Substitution:</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code> <span class="token comment"># IN UNIX ENVIRONMENT: convert DOS newlines (CR/LF) to Unix format</span>
 <span class="token function">awk</span> <span class="token string">&#39;{sub(/\\r$/,&quot;&quot;)};1&#39;</span>   <span class="token comment"># assumes EACH line ends with Ctrl-M</span>
 <span class="token comment"># IN UNIX ENVIRONMENT: convert Unix newlines (LF) to DOS format</span>
 <span class="token function">awk</span> <span class="token string">&#39;{sub(/$/,&quot;\\r&quot;)};1&#39;</span>
 <span class="token comment"># IN DOS ENVIRONMENT: convert Unix newlines (LF) to DOS format</span>
 <span class="token function">awk</span> <span class="token number">1</span>
 <span class="token comment"># IN DOS ENVIRONMENT: convert DOS newlines (CR/LF) to Unix format</span>
 <span class="token comment"># Cannot be done with DOS versions of awk, other than gawk:</span>
 <span class="token function">gawk</span> <span class="token parameter variable">-v</span> <span class="token assign-left variable">BINMODE</span><span class="token operator">=</span><span class="token string">&quot;w&quot;</span> <span class="token string">&#39;1&#39;</span> infile <span class="token operator">&gt;</span>outfile
 <span class="token comment"># Use &quot;tr&quot; instead.</span>
 <span class="token function">tr</span> <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>r <span class="token operator">&lt;</span>infile <span class="token operator">&gt;</span>outfile            <span class="token comment"># GNU tr version 1.22 or higher</span>
 <span class="token comment"># delete leading whitespace (spaces, tabs) from front of each line</span>
 <span class="token comment"># aligns all text flush left</span>
 <span class="token function">awk</span> <span class="token string">&#39;{sub(/^[ \\t]+/, &quot;&quot;)};1&#39;</span>
 <span class="token comment"># delete trailing whitespace (spaces, tabs) from end of each line</span>
 <span class="token function">awk</span> <span class="token string">&#39;{sub(/[ \\t]+$/, &quot;&quot;)};1&#39;</span>
 <span class="token comment"># delete BOTH leading and trailing whitespace from each line</span>
 <span class="token function">awk</span> <span class="token string">&#39;{gsub(/^[ \\t]+|[ \\t]+$/,&quot;&quot;)};1&#39;</span>
 <span class="token function">awk</span> <span class="token string">&#39;{$1=$1};1&#39;</span>           <span class="token comment"># also removes extra space between fields</span>
 <span class="token comment"># insert 5 blank spaces at beginning of each line (make page offset)</span>
 <span class="token function">awk</span> <span class="token string">&#39;{sub(/^/, &quot;     &quot;)};1&#39;</span>
 <span class="token comment"># align all text flush right on a 79-column width</span>
 <span class="token function">awk</span> <span class="token string">&#39;{printf &quot;%79s\\n&quot;, $0}&#39;</span> file*
 <span class="token comment"># center all text on a 79-character width</span>
 <span class="token function">awk</span> <span class="token string">&#39;{l=length();s=int((79-l)/2); printf &quot;%&quot;(s+l)&quot;s\\n&quot;,$0}&#39;</span> file*
 <span class="token comment"># substitute (find and replace) &quot;foo&quot; with &quot;bar&quot; on each line</span>
 <span class="token function">awk</span> <span class="token string">&#39;{sub(/foo/,&quot;bar&quot;)}; 1&#39;</span>           <span class="token comment"># replace only 1st instance</span>
 <span class="token function">gawk</span> <span class="token string">&#39;{$0=gensub(/foo/,&quot;bar&quot;,4)}; 1&#39;</span>  <span class="token comment"># replace only 4th instance</span>
 <span class="token function">awk</span> <span class="token string">&#39;{gsub(/foo/,&quot;bar&quot;)}; 1&#39;</span>          <span class="token comment"># replace ALL instances in a line</span>
 <span class="token comment"># substitute &quot;foo&quot; with &quot;bar&quot; ONLY for lines which contain &quot;baz&quot;</span>
 <span class="token function">awk</span> <span class="token string">&#39;/baz/{gsub(/foo/, &quot;bar&quot;)}; 1&#39;</span>
 <span class="token comment"># substitute &quot;foo&quot; with &quot;bar&quot; EXCEPT for lines which contain &quot;baz&quot;</span>
 <span class="token function">awk</span> <span class="token string">&#39;!/baz/{gsub(/foo/, &quot;bar&quot;)}; 1&#39;</span>
 <span class="token comment"># change &quot;scarlet&quot; or &quot;ruby&quot; or &quot;puce&quot; to &quot;red&quot;</span>
 <span class="token function">awk</span> <span class="token string">&#39;{gsub(/scarlet|ruby|puce/, &quot;red&quot;)}; 1&#39;</span>
 <span class="token comment"># reverse order of lines (emulates &quot;tac&quot;)</span>
 <span class="token function">awk</span> <span class="token string">&#39;{a[i++]=$0} END {for (j=i-1; j&gt;=0;) print a[j--] }&#39;</span> file*
 <span class="token comment"># if a line ends with a backslash, append the next line to it (fails if</span>
 <span class="token comment"># there are multiple lines ending with backslash...)</span>
 <span class="token function">awk</span> <span class="token string">&#39;/\\\\$/ {sub(/\\\\$/,&quot;&quot;); getline t; print $0 t; next}; 1&#39;</span> file*
 <span class="token comment"># print and sort the login names of all users</span>
 <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&quot;:&quot;</span> <span class="token string">&#39;{print $1 | &quot;sort&quot; }&#39;</span> /etc/passwd
 <span class="token comment"># print the first 2 fields, in opposite order, of every line</span>
 <span class="token function">awk</span> <span class="token string">&#39;{print $2, $1}&#39;</span> <span class="token function">file</span>
 <span class="token comment"># switch the first 2 fields of every line</span>
 <span class="token function">awk</span> <span class="token string">&#39;{temp = $1; $1 = $2; $2 = temp}&#39;</span> <span class="token function">file</span>
 <span class="token comment"># print every line, deleting the second field of that line</span>
 <span class="token function">awk</span> <span class="token string">&#39;{ $2 = &quot;&quot;; print }&#39;</span>
 <span class="token comment"># print in reverse order the fields of every line</span>
 <span class="token function">awk</span> <span class="token string">&#39;{for (i=NF; i&gt;0; i--) printf(&quot;%s &quot;,$i);print &quot;&quot;}&#39;</span> <span class="token function">file</span>
 <span class="token comment"># concatenate every 5 lines of input, using a comma separator</span>
 <span class="token comment"># between fields</span>
 <span class="token function">awk</span> <span class="token string">&#39;ORS=NR%5?&quot;,&quot;:&quot;\\n&quot;&#39;</span> <span class="token function">file</span>
</code></pre></div><ul><li>Selective Printing of Certain Lines:</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code> <span class="token comment"># print first 10 lines of file (emulates behaviour of &quot;head&quot;)</span>
 <span class="token function">awk</span> <span class="token string">&#39;NR &lt; 11&#39;</span>
 <span class="token comment"># print first line of file (emulates &quot;head -1&quot;)</span>
 <span class="token function">awk</span> <span class="token string">&#39;NR&gt;1{exit};1&#39;</span>
  <span class="token comment"># print the last 2 lines of a file (emulates &quot;tail -2&quot;)</span>
 <span class="token function">awk</span> <span class="token string">&#39;{y=x &quot;\\n&quot; $0; x=$0};END{print y}&#39;</span>
 <span class="token comment"># print the last line of a file (emulates &quot;tail -1&quot;)</span>
 <span class="token function">awk</span> <span class="token string">&#39;END{print}&#39;</span>
 <span class="token comment"># print only lines which match regular expression (emulates &quot;grep&quot;)</span>
 <span class="token function">awk</span> <span class="token string">&#39;/regex/&#39;</span>
 <span class="token comment"># print only lines which do NOT match regex (emulates &quot;grep -v&quot;)</span>
 <span class="token function">awk</span> <span class="token string">&#39;!/regex/&#39;</span>
 <span class="token comment"># print any line where field #5 is equal to &quot;abc123&quot;</span>
 <span class="token function">awk</span> <span class="token string">&#39;$5 == &quot;abc123&quot;&#39;</span>
 <span class="token comment"># print only those lines where field #5 is NOT equal to &quot;abc123&quot;</span>
 <span class="token comment"># This will also print lines which have less than 5 fields.</span>
 <span class="token function">awk</span> <span class="token string">&#39;$5 != &quot;abc123&quot;&#39;</span>
 <span class="token function">awk</span> <span class="token string">&#39;!($5 == &quot;abc123&quot;)&#39;</span>
 <span class="token comment"># matching a field against a regular expression</span>
 <span class="token function">awk</span> <span class="token string">&#39;$7  ~ /^[a-f]/&#39;</span>    <span class="token comment"># print line if field #7 matches regex</span>
 <span class="token function">awk</span> <span class="token string">&#39;$7 !~ /^[a-f]/&#39;</span>    <span class="token comment"># print line if field #7 does NOT match regex</span>
 <span class="token comment"># print the line immediately before a regex, but not the line</span>
 <span class="token comment"># containing the regex</span>
 <span class="token function">awk</span> <span class="token string">&#39;/regex/{print x};{x=$0}&#39;</span>
 <span class="token function">awk</span> <span class="token string">&#39;/regex/{print (NR==1 ? &quot;match on line 1&quot; : x)};{x=$0}&#39;</span>
 <span class="token comment"># print the line immediately after a regex, but not the line</span>
 <span class="token comment"># containing the regex</span>
 <span class="token function">awk</span> <span class="token string">&#39;/regex/{getline;print}&#39;</span>
 <span class="token comment"># grep for AAA and BBB and CCC (in any order on the same line)</span>
 <span class="token function">awk</span> <span class="token string">&#39;/AAA/ &amp;&amp; /BBB/ &amp;&amp; /CCC/&#39;</span>
 <span class="token comment"># grep for AAA and BBB and CCC (in that order)</span>
 <span class="token function">awk</span> <span class="token string">&#39;/AAA.*BBB.*CCC/&#39;</span>
 <span class="token comment"># print only lines of 65 characters or longer</span>
 <span class="token function">awk</span> <span class="token string">&#39;length &gt; 64&#39;</span>
 <span class="token comment"># print only lines of less than 65 characters</span>
 <span class="token function">awk</span> <span class="token string">&#39;length &lt; 64&#39;</span>
 <span class="token comment"># print section of file from regular expression to end of file</span>
 <span class="token function">awk</span> <span class="token string">&#39;/regex/,0&#39;</span>
 <span class="token function">awk</span> <span class="token string">&#39;/regex/,EOF&#39;</span>
 <span class="token comment"># print section of file based on line numbers (lines 8-12, inclusive)</span>
 <span class="token function">awk</span> <span class="token string">&#39;NR==8,NR==12&#39;</span>
 <span class="token comment"># print line number 52</span>
 <span class="token function">awk</span> <span class="token string">&#39;NR==52&#39;</span>
 <span class="token function">awk</span> <span class="token string">&#39;NR==52 {print;exit}&#39;</span>          <span class="token comment"># more efficient on large files</span>
 <span class="token comment"># print section of file between two regular expressions (inclusive)</span>
 <span class="token function">awk</span> <span class="token string">&#39;/Iowa/,/Montana/&#39;</span>             <span class="token comment"># case sensitive</span>
</code></pre></div><ul><li>Selective Deletion of Certain Lines:</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code> <span class="token comment"># delete ALL blank lines from a file (same as &quot;grep &#39;.&#39; &quot;)</span>
 <span class="token function">awk</span> NF
 <span class="token function">awk</span> <span class="token string">&#39;/./&#39;</span>
 <span class="token comment"># remove duplicate, consecutive lines (emulates &quot;uniq&quot;)</span>
 <span class="token function">awk</span> <span class="token string">&#39;a !~ $0; {a=$0}&#39;</span>
 <span class="token comment"># remove duplicate, non-consecutive lines</span>
 <span class="token function">awk</span> <span class="token string">&#39;!a[$0]++&#39;</span>                     <span class="token comment"># most concise script</span>
 <span class="token function">awk</span> <span class="token string">&#39;!($0 in a){a[$0];print}&#39;</span>      <span class="token comment"># most efficient script</span>
</code></pre></div><h2 id="user-management" tabindex="-1"><a class="header-anchor" href="#user-management" aria-hidden="true">#</a> User Management</h2><table><thead><tr><th>Command</th><th>Description</th></tr></thead><tbody><tr><td><code>sudo adduser username</code></td><td>Create a new user</td></tr><tr><td><code>sudo userdel username</code></td><td>Delete a user</td></tr><tr><td><code>sudo usermod -aG groupname username</code></td><td>Add a user to group</td></tr><tr><td><code>sudo deluser username groupname</code></td><td>Remove a user from a group</td></tr></tbody></table><h2 id="cron" tabindex="-1"><a class="header-anchor" href="#cron" aria-hidden="true">#</a> cron</h2><p>A cron expression is simply a string consisting of six fields that each define a specific unit of time</p><p>Each line of a crontab file represents a job, and looks like this:</p><div class="language-text" data-ext="text"><pre class="language-text"><code># ┌───────────── minute (0 - 59)
# │ ┌───────────── hour (0 - 23)
# │ │ ┌───────────── day of the month (1 - 31)
# │ │ │ ┌───────────── month (1 - 12)
# │ │ │ │ ┌───────────── day of the week (0 - 6) (Sunday to Saturday;
# │ │ │ │ │                                   7 is also Sunday on some systems)
# │ │ │ │ │
# │ │ │ │ │
# * * * * * &lt;command to execute&gt;
</code></pre></div><p>Additionally you can also use the following <strong>special characters to build more advanced expressions</strong>:</p><table><thead><tr><th>Special Character</th><th>Description</th></tr></thead><tbody><tr><td><code>*</code></td><td>Trigger on tick of every time unit</td></tr><tr><td><code>,</code></td><td>List separator</td></tr><tr><td><code>–</code></td><td>Specifies a range</td></tr><tr><td><code>/</code></td><td>Defines an increment</td></tr></tbody></table><p><em>Example:</em></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># executes every minute</span>
<span class="token number">0</span> * * * * *

<span class="token comment"># executes every hour</span>
<span class="token number">0</span> <span class="token number">0</span> * * * *

<span class="token comment"># executes every day</span>
<span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> * * *

<span class="token comment"># executes every month</span>
<span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> * *

<span class="token comment"># executes on first day of jan each year</span>
<span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">1</span> <span class="token number">1</span> *

<span class="token comment"># executes at 08:30pm every saturday</span>
<span class="token number">30</span> <span class="token number">20</span> * * SAT

<span class="token comment"># executes at 08:30pm every saturday</span>
<span class="token number">30</span> <span class="token number">20</span> * * <span class="token number">6</span>

<span class="token comment"># executes every five minutes</span>
<span class="token number">0</span> */5 * * * *

<span class="token comment"># executes every hour between 8am and 10am</span>
<span class="token number">0</span> <span class="token number">0</span> <span class="token number">8</span>-10/1 * * *
</code></pre></div><h2 id="mount" tabindex="-1"><a class="header-anchor" href="#mount" aria-hidden="true">#</a> Mount</h2><p>In Linux, <code>mount</code> is a command in various operating systems. Before a user can access a file on a Unix-like machine, the file system on the device which contains the file needs to be mounted with the mount command. Frequently mount is used for SD card, USB storage, DVD and other removable storage devices</p><ul><li>List mount-points:</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>findmnt <span class="token punctuation">(</span>optional<span class="token punctuation">)</span><span class="token operator">&lt;</span>device/directory<span class="token operator">&gt;</span>
</code></pre></div><ul><li>Unmount:</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">umount</span> <span class="token operator">&lt;</span>device/directory<span class="token operator">&gt;</span>
</code></pre></div><h2 id="iptables" tabindex="-1"><a class="header-anchor" href="#iptables" aria-hidden="true">#</a> iptables</h2><p>Iptables is a user-space utility program that allows a system administrator to configure the IP packet filter rules of the Linux kernel firewall, implemented as different Netfilter modules. The filters are organized in different tables, which contain chains of rules for how to treat network traffic packets. Different kernel modules and programs are currently used for different protocols; iptables applies to IPv4, ip6tables to IPv6, arptables to ARP, and ebtables to Ethernet frames</p><h2 id="ufw-uncomplicated-firewall" tabindex="-1"><a class="header-anchor" href="#ufw-uncomplicated-firewall" aria-hidden="true">#</a> UFW (Uncomplicated Firewall)</h2><p>UFW (uncomplicated firewall) is a firewall configuration tool for Linux that runs on top of <a href="#iptables">iptables</a>, included by default within Ubuntu distributions. It provides a streamlined interface for configuring common firewall use cases via the command line</p><p>Enable UFW</p><ul><li>To check if ufw is enabled, run:</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> ufw status
</code></pre></div><ul><li>To enable UFW on your system, run:</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> ufw <span class="token builtin class-name">enable</span>
</code></pre></div><ul><li>If for some reason you need to disable UFW, you can do so with the following command:</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> ufw disable
</code></pre></div><ul><li>Block an IP Address/Subnet:</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> ufw deny from <span class="token number">203.0</span>.113.0/24
</code></pre></div>`,62),i=[o];function l(c,p){return s(),a("div",null,i)}const u=n(t,[["render",l],["__file","Linux.html.vue"]]);export{u as default};
