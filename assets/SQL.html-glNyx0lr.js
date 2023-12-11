import{_ as p,r as c,o as l,c as r,b as a,d as s,a as e,w as t,e as o}from"./app-jDLxG9B3.js";const d={},i=a("h1",{id:"sql",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#sql","aria-hidden":"true"},"#"),s(" SQL")],-1),k=a("p",null,"Structured Query Language",-1),u=a("li",null,"Cascading referential integrity constraint",-1),m=a("li",null,"SQL implementations vary between systems",-1),y=o(`<blockquote><p>Developed by Raymond Boyce and Donald Chamberlin</p></blockquote><p>Sub-Groups of SQL Commands (syntax):</p><ol><li><p>DDL (Data Definition Language):</p><ul><li><p>Commands that can be used to define the database schema</p></li><li><p>A set of statements that allow the user to define or modify data structures and objects, such as tables</p></li><li><p>Some commands:</p><ul><li><a href="#create"><code>CREATE</code></a>: to create entire databases and objects in database</li><li><a href="#alter"><code>ALTER</code></a>: alters the structure of existing objects such as database</li><li><a href="#drop"><code>DROP</code></a>: delete objects from database</li><li><a href="#rename"><code>RENAME</code></a>: rename an objects</li><li><a href="#truncate"><code>TRUNCATE</code></a></li></ul></li></ul></li><li><p>DML (Data Manipulation Language)</p><ul><li><p>Commands that deal with the manipulation of data present in database</p></li><li><p>Statement allow us to manipulation the data in the tables of a database</p></li><li><p>Some commands:</p><ul><li><a href="#select"><code>SELECT</code></a>: retrieve data from the database objects, like tables (DQL (Data Query Language))</li><li><a href="#insert"><code>INSERT</code></a>: insert data into a table</li><li><a href="#update"><code>UPDATE</code></a>: update existing data within a table</li><li><a href="#delete"><code>DELETE</code></a>: deletes all records from a table, space for the records remain</li></ul></li></ul></li><li><p>TCL (Transaction control language)</p><ul><li><p>Commands which mainly deal with the transaction of database</p></li><li><p>Some commands:</p><ul><li><a href="#commit"><code>COMMIT</code></a>: permanently save any transaction into the database</li><li><a href="#rollback"><code>ROLLBACK</code></a>: restores the database to last committed state. It is also used with save-point command to jump to a save-point in a transaction</li><li><code>SAVEPOINT</code>: temporarily save a transaction so that you can rollback to that point whenever necessary</li></ul></li></ul></li><li><p>DCL (Data Control Language)</p><ul><li><p>Commands which deal with the rights, permissions and other controls of the database system</p></li><li><p>Some commands:</p><ul><li><a href="#grant"><code>GRANT</code></a>: allow specified users to perform specified tasks</li><li><a href="#revoke"><code>REVOKE</code></a>: cancel previously granted or denied permissions</li></ul></li></ul></li></ol><p>Queries:</p><ul><li>A query is a set of instructions given to the RDBMS that tell what needs to be done</li></ul><p>Data Type: Different DBMSs support different Data types</p><p>Comments:</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- comment</span>
</code></pre></div><h2 id="create" tabindex="-1"><a class="header-anchor" href="#create" aria-hidden="true">#</a> CREATE</h2><p>The <code>CREATE</code> command is used to establish a new database, table, index, or stored procedure</p><ul><li>DDL statement</li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- CREATE object_type object_name</span>

<span class="token comment">-- CREATE TABLE [table name] ( [column definitions] ) [table parameters]</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> employees <span class="token punctuation">(</span>
    id            <span class="token keyword">INTEGER</span>       <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">,</span>
    first_name    <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>   <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
    last_name     <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">75</span><span class="token punctuation">)</span>   <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
    mid_name      <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>   <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
    dateofbirth   <span class="token keyword">DATE</span>          <span class="token operator">not</span> <span class="token boolean">null</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- create a database user</span>
<span class="token keyword">CREATE</span> <span class="token keyword">USER</span> <span class="token string">&#39;kantara&#39;</span><span class="token variable">@&#39;localhost&#39;</span> IDENTIFIED <span class="token keyword">BY</span> <span class="token string">&#39;some_password&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> SELECT</h2><p><code>SELECT</code> is used to read data from tables</p><ul><li>DML or DQL statement</li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- query for all columns</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> artist<span class="token punctuation">;</span>

<span class="token comment">-- query for select columns</span>
<span class="token keyword">SELECT</span> artist_name<span class="token punctuation">,</span>artist_id <span class="token keyword">FROM</span> artist<span class="token punctuation">;</span>

<span class="token comment">-- calculate value</span>
<span class="token keyword">SELECT</span> name<span class="token punctuation">,</span> <span class="token punctuation">(</span>gdp<span class="token operator">/</span>population<span class="token punctuation">)</span> <span class="token keyword">FROM</span> world<span class="token punctuation">;</span>
</code></pre></div><p><code>HAVING</code> vs <code>WHERE</code>:</p><ul><li><code>WHERE</code> runs before <code>GROUP BY</code>, cannot use aggregate functions</li><li><code>HAVING</code> runs after <code>GROUP BY</code>, hence we can use aggregate functions</li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">COUNT</span><span class="token punctuation">(</span>customerId<span class="token punctuation">)</span><span class="token punctuation">,</span> country
<span class="token keyword">FROM</span> customers
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> country
<span class="token keyword">HAVING</span> <span class="token function">COUNT</span><span class="token punctuation">(</span>customerId<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="union" tabindex="-1"><a class="header-anchor" href="#union" aria-hidden="true">#</a> UNION</h3><p>Combine the result-set of two or more <code>SELECT</code> statements</p><ul><li>Every <code>SELECT</code> statement within <code>UNION</code> must have the <strong>same number of columns</strong></li><li>The columns must also have <strong>similar data types</strong></li><li>The columns in every <code>SELECT</code> statement must also be in the <strong>same order</strong></li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  city
<span class="token keyword">FROM</span> customers
<span class="token keyword">UNION</span>
<span class="token keyword">SELECT</span>
  city
<span class="token keyword">FROM</span> suppliers
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> city<span class="token punctuation">;</span>

<span class="token comment">-- UNION all</span>
<span class="token keyword">SELECT</span>
  city
<span class="token keyword">FROM</span> customers
<span class="token keyword">UNION</span> <span class="token keyword">ALL</span>
<span class="token keyword">SELECT</span>
  city
<span class="token keyword">FROM</span> suppliers
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> city<span class="token punctuation">;</span>
</code></pre></div><ul><li><code>UNION</code> operator selects only distinct values by default</li><li>To allow duplicate values, use <code>UNION ALL</code></li></ul><h3 id="join" tabindex="-1"><a class="header-anchor" href="#join" aria-hidden="true">#</a> JOIN</h3><p>Joins are used to combine rows from two or more tables based on a common field between them</p><p>4 types of joins:</p><ol><li><p><code>LEFT JOIN</code>:</p><ul><li>Select <strong>all records</strong> from the <strong>left table</strong> (<code>table1</code>), and the <strong>matching records</strong> from the <strong>right table</strong> (<code>table2</code>)</li><li>The result is <strong>0 records</strong> from the <strong>right side</strong>, if there is <strong>no match</strong></li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> column_name
<span class="token keyword">FROM</span> table1
<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> table2
  <span class="token keyword">ON</span> table1<span class="token punctuation">.</span>column_name <span class="token operator">=</span> table2<span class="token punctuation">.</span>column_name<span class="token punctuation">;</span>
</code></pre></div></li><li><p><code>RIGHT JOIN</code>:</p><ul><li>Select <strong>all records</strong> from the <strong>right table</strong> (<code>table2</code>), and the <strong>matching records</strong> from the <strong>left table</strong> (<code>table1</code>)</li><li>The result is <strong>0 records</strong> from the <strong>left side</strong>, if there is <strong>no match</strong></li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> column_name
<span class="token keyword">FROM</span> table1
<span class="token keyword">RIGHT</span> <span class="token keyword">JOIN</span> table2
  <span class="token keyword">ON</span> table1<span class="token punctuation">.</span>column_name <span class="token operator">=</span> table2<span class="token punctuation">.</span>column_name<span class="token punctuation">;</span>
</code></pre></div></li><li><p><code>INNER JOIN</code>: just known as <code>JOIN</code></p><ul><li>Select records that have <strong>matching values in both tables</strong></li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> column_name
<span class="token keyword">FROM</span> table1
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> table2
  <span class="token keyword">ON</span> table1<span class="token punctuation">.</span>column_name <span class="token operator">=</span> table2<span class="token punctuation">.</span>column_name<span class="token punctuation">;</span>

<span class="token comment">-- or</span>

<span class="token keyword">SELECT</span> column_name
<span class="token keyword">FROM</span> table1
<span class="token keyword">JOIN</span> table2
  <span class="token keyword">ON</span> table1<span class="token punctuation">.</span>column_name <span class="token operator">=</span> table2<span class="token punctuation">.</span>column_name<span class="token punctuation">;</span>
</code></pre></div></li><li><p><code>OUTER JOIN</code> (<code>FULL OUTER JOIN</code>):</p><ul><li>Select <strong>all records</strong> when there is a <strong>match in left (<code>table1</code>) or right (<code>table2</code>)</strong> table records</li><li>Not supported in MySQL</li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> column_name
<span class="token keyword">FROM</span> table1
<span class="token keyword">FULL</span> <span class="token keyword">OUTER</span> <span class="token keyword">JOIN</span> table2
  <span class="token keyword">ON</span> table1<span class="token punctuation">.</span>column_name <span class="token operator">=</span> table2<span class="token punctuation">.</span>column_name
<span class="token keyword">WHERE</span> condition<span class="token punctuation">;</span>
</code></pre></div></li></ol><ul><li><p>Self <code>JOIN</code>:</p><ul><li>A self join is a regular join, but the table is joined with itself</li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  a<span class="token punctuation">.</span>customerName <span class="token keyword">AS</span> customerName1<span class="token punctuation">,</span>
  b<span class="token punctuation">.</span>customerName <span class="token keyword">AS</span> customerName2<span class="token punctuation">,</span>
  a<span class="token punctuation">.</span>city
<span class="token keyword">FROM</span> customers a<span class="token punctuation">,</span>
    customers b
<span class="token keyword">WHERE</span> a<span class="token punctuation">.</span>customerId <span class="token operator">&lt;&gt;</span> b<span class="token punctuation">.</span>customerId
<span class="token operator">AND</span> a<span class="token punctuation">.</span>city <span class="token operator">=</span> b<span class="token punctuation">.</span>city
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> a<span class="token punctuation">.</span>city<span class="token punctuation">;</span>
</code></pre></div><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  a<span class="token punctuation">.</span>customerName <span class="token keyword">AS</span> customerName1<span class="token punctuation">,</span>
  b<span class="token punctuation">.</span>customerName <span class="token keyword">AS</span> customerName2<span class="token punctuation">,</span>
  a<span class="token punctuation">.</span>city
<span class="token keyword">FROM</span> customers a
<span class="token keyword">JOIN</span> customers b
<span class="token keyword">WHERE</span> a<span class="token punctuation">.</span>customerId <span class="token operator">&lt;&gt;</span> b<span class="token punctuation">.</span>customerId
<span class="token operator">AND</span> a<span class="token punctuation">.</span>city <span class="token operator">=</span> b<span class="token punctuation">.</span>city
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> a<span class="token punctuation">.</span>city<span class="token punctuation">;</span>
</code></pre></div></li></ul><h3 id="sub-query-nested-queries" tabindex="-1"><a class="header-anchor" href="#sub-query-nested-queries" aria-hidden="true">#</a> Sub-Query (Nested Queries)</h3><p>A query within another query</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  a<span class="token punctuation">.</span>studentId<span class="token punctuation">,</span>
  a<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
  b<span class="token punctuation">.</span>total_marks
<span class="token keyword">FROM</span> student a<span class="token punctuation">,</span>
     marks b
<span class="token keyword">WHERE</span> a<span class="token punctuation">.</span>studentId <span class="token operator">=</span> b<span class="token punctuation">.</span>studentId
<span class="token operator">AND</span> b<span class="token punctuation">.</span>total_marks <span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span>
  total_marks
<span class="token keyword">FROM</span> marks
<span class="token keyword">WHERE</span> studentId <span class="token operator">=</span> <span class="token string">&#39;V002&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="where" tabindex="-1"><a class="header-anchor" href="#where" aria-hidden="true">#</a> WHERE</h2><p>Operators:</p><table><thead><tr><th>Operator</th><th>Condition</th><th>SQL Example</th></tr></thead><tbody><tr><td><code>=</code>, <code>!=</code>, <code>&lt;</code>, <code>&lt;=</code>, <code>&gt;</code>, <code>&gt;=</code></td><td>Standard numerical operators</td><td><code>col_name != 4</code></td></tr><tr><td><code>=</code>, <code>!=</code>, <code>&lt;&gt;</code></td><td>Case sensitive exact string comparison</td><td><code>col_name = &quot;abc&quot;</code></td></tr><tr><td><code>LIKE</code></td><td>Case insensitive exact string comparison</td><td><code>col_name LIKE &quot;ABC&quot;</code></td></tr><tr><td><code>%</code></td><td>Match a sequence of zero or more characters</td><td><code>col_name LIKE &quot;%AT%&quot;</code></td></tr><tr><td><code>_</code></td><td>Match a single character</td><td><code>col_name LIKE &quot;AN_&quot;</code></td></tr><tr><td><code>IN (…)</code></td><td>Number/String exists in a list</td><td><code>col_name IN (2, 4, 6)</code></td></tr><tr><td><code>NOT IN (…)</code></td><td>Number/String does not exist in a list</td><td><code>col_name NOT IN (1, 3, 5)</code></td></tr><tr><td><code>BETWEEN … AND …</code></td><td>Number is within range of two values (inclusive)</td><td><code>col_name BETWEEN 1.5 AND 10.5</code></td></tr><tr><td><code>NOT BETWEEN … AND …</code></td><td>Number is not within range of two values (inclusive)</td><td><code>col_name NOT BETWEEN 1 AND 10</code></td></tr></tbody></table><ul><li><code>AND</code></li><li><code>OR</code></li><li><code>XOR</code></li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- query with clause</span>
<span class="token keyword">SELECT</span> <span class="token keyword">column</span><span class="token punctuation">,</span> another_column<span class="token punctuation">,</span> …
<span class="token keyword">FROM</span> myTable
<span class="token keyword">WHERE</span> condition
    <span class="token operator">AND</span><span class="token operator">/</span><span class="token operator">OR</span> another_condition
    <span class="token operator">AND</span><span class="token operator">/</span><span class="token operator">OR</span> …<span class="token punctuation">;</span>

<span class="token keyword">SELECT</span> <span class="token operator">*</span>
<span class="token keyword">FROM</span> artist
<span class="token keyword">WHERE</span> artist_name <span class="token operator">=</span> <span class="token string">&quot;new order&quot;</span><span class="token punctuation">;</span>

<span class="token comment">-- &gt;, &lt;, &lt;=, &gt;=, not equal ( &lt;&gt; or !=)</span>
<span class="token keyword">SELECT</span> artist_name
<span class="token keyword">FROM</span> artist
<span class="token keyword">WHERE</span> artist_id <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span>

<span class="token comment">-- pattern matching</span>
<span class="token keyword">SELECT</span> album_name
<span class="token keyword">FROM</span> album
<span class="token keyword">WHERE</span> album_name <span class="token operator">LIKE</span> <span class="token string">&quot;retro%&quot;</span><span class="token punctuation">;</span>

<span class="token comment">-- 3 letters beginning with &#39;R&#39; and match rest</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span>
<span class="token keyword">FROM</span> track
<span class="token keyword">WHERE</span> track_name <span class="token operator">LIKE</span> <span class="token string">&quot;r__ %&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">SELECT</span> album_name
<span class="token keyword">FROM</span> album
<span class="token keyword">WHERE</span> album_name <span class="token operator">&gt;</span> <span class="token string">&quot;c&quot;</span>
<span class="token operator">AND</span> album_name <span class="token operator">&lt;</span> <span class="token string">&quot;m&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">SELECT</span> name<span class="token punctuation">,</span> population
<span class="token keyword">FROM</span> world
<span class="token keyword">WHERE</span> name <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token string">&#39;Brazil&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Russia&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;India&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;China&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">SELECT</span> name<span class="token punctuation">,</span> area
<span class="token keyword">FROM</span> world
<span class="token keyword">WHERE</span> area <span class="token operator">BETWEEN</span> <span class="token number">250000</span> <span class="token operator">AND</span> <span class="token number">300000</span><span class="token punctuation">;</span>

<span class="token comment">-- find rows with NULL value</span>
<span class="token keyword">SELECT</span> name<span class="token punctuation">,</span> area
<span class="token keyword">FROM</span> world
<span class="token keyword">WHERE</span> area <span class="token operator">IS</span> <span class="token boolean">NULL</span>
<span class="token operator">AND</span> name <span class="token operator">IS</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">;</span>

<span class="token comment">-- XOR</span>
<span class="token keyword">SELECT</span> name<span class="token punctuation">,</span> population<span class="token punctuation">,</span> area
<span class="token keyword">FROM</span> world
<span class="token keyword">WHERE</span> <span class="token punctuation">(</span>population <span class="token operator">&gt;=</span> <span class="token number">250000000</span>
<span class="token operator">AND</span> area <span class="token operator">&lt;</span> <span class="token number">3000000</span><span class="token punctuation">)</span>
<span class="token operator">OR</span> <span class="token punctuation">(</span>population <span class="token operator">&lt;</span> <span class="token number">250000000</span>
<span class="token operator">AND</span> area <span class="token operator">&gt;=</span> <span class="token number">3000000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="distinct" tabindex="-1"><a class="header-anchor" href="#distinct" aria-hidden="true">#</a> DISTINCT</h3><p>Select query with unique results:</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> <span class="token keyword">column</span><span class="token punctuation">,</span> another_column
<span class="token keyword">FROM</span> myTable
<span class="token keyword">WHERE</span> conditions<span class="token punctuation">;</span>
</code></pre></div><h3 id="order-by" tabindex="-1"><a class="header-anchor" href="#order-by" aria-hidden="true">#</a> ORDER BY</h3><p>Query sorted:</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- \`ASC\`: ascending (default)</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> artist <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> artist_name<span class="token punctuation">;</span>

<span class="token comment">-- descending</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> artist <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> artist_name <span class="token keyword">DESC</span><span class="token punctuation">;</span>

<span class="token comment">-- multiple ways to order first by time then track_name</span>
<span class="token keyword">SELECT</span> <span class="token keyword">time</span><span class="token punctuation">,</span> track_name <span class="token keyword">FROM</span> track
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> <span class="token keyword">time</span> <span class="token keyword">DESC</span><span class="token punctuation">,</span> track_name <span class="token keyword">ASC</span><span class="token punctuation">;</span>

<span class="token comment">-- ASCII behaviour</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> artist <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> <span class="token keyword">BINARY</span> artist_name<span class="token punctuation">;</span>

<span class="token comment">-- CAST(), AS</span>
<span class="token keyword">SELECT</span> <span class="token keyword">time</span><span class="token punctuation">,</span> track_name <span class="token keyword">FROM</span> track <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> CAST<span class="token punctuation">(</span><span class="token keyword">time</span> <span class="token keyword">AS</span> <span class="token keyword">CHAR</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Cast as:</p><ul><li><code>AS BINARY</code></li><li><code>AS SIGNED</code>: to sort as a signed integer</li><li><code>AS UNSIGNED</code>: to sort as an unsigned integer</li><li><code>AS CHAR</code>: to sort as a character string</li><li><code>AS DATE</code>: to sort as a date</li><li><code>AS DATETIME</code>: to sort as a date and time</li><li><code>AS TIME</code>: to sort as a time</li></ul><h3 id="limit" tabindex="-1"><a class="header-anchor" href="#limit" aria-hidden="true">#</a> LIMIT</h3><p>Limit the total number of rows returned:</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> track_name <span class="token keyword">FROM</span> track <span class="token keyword">LIMIT</span> <span class="token number">10</span><span class="token punctuation">;</span>

<span class="token comment">-- limit from row 6</span>
<span class="token keyword">SELECT</span> track_name <span class="token keyword">FROM</span> track <span class="token keyword">LIMIT</span> <span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">;</span>

<span class="token comment">-- or</span>

<span class="token keyword">SELECT</span> track_name <span class="token keyword">FROM</span> track <span class="token keyword">LIMIT</span> <span class="token number">5</span> <span class="token keyword">OFFSET</span> <span class="token number">5</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="insert" tabindex="-1"><a class="header-anchor" href="#insert" aria-hidden="true">#</a> INSERT</h2><ul><li>DML statement</li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- INSERT INTO table_name (column_names) VALUES (data)</span>

<span class="token comment">-- insert data into all columns</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> artist
  <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token string">&quot;Barry Adamson&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- insert multiple rows</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> album <span class="token punctuation">(</span>artist_id<span class="token punctuation">,</span> album_id<span class="token punctuation">,</span> album_name<span class="token punctuation">)</span>
  <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;Oedipus Schmoedipus&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;Oedipus Schmoedipus&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;Oedipus Schmoedipus&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- using SELECT</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> artist
  <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token function">MAX</span><span class="token punctuation">(</span>artist_id<span class="token punctuation">)</span> <span class="token keyword">FROM</span> artist<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;Barry Adamson&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li><code>IGNORE</code>: Ignore errors</li><li><code>DEFAULT</code>: Use default value</li></ul><h2 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> UPDATE</h2><ul><li>DML statement</li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- update all rows</span>
<span class="token keyword">UPDATE</span> artist
<span class="token keyword">SET</span> artist_name <span class="token operator">=</span> UPPER<span class="token punctuation">(</span>artist_name<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- update only those rows that meet the conditions</span>
<span class="token keyword">UPDATE</span> sales
<span class="token keyword">SET</span> date_of_purchase <span class="token operator">=</span> <span class="token string">&#39;2017-12-12&#39;</span>
<span class="token keyword">WHERE</span> purchase_number <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="delete" tabindex="-1"><a class="header-anchor" href="#delete" aria-hidden="true">#</a> DELETE</h2><p>Delete a row in a table</p><ul><li>DML statement</li><li>We can rollback data after using delete statement</li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- delete all rows (empty the table)</span>
<span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> played<span class="token punctuation">;</span>

<span class="token comment">-- delete only those rows that meet the conditions</span>
<span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> artist
<span class="token keyword">WHERE</span> artist_id <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="truncate" tabindex="-1"><a class="header-anchor" href="#truncate" aria-hidden="true">#</a> TRUNCATE</h2><p>Faster method to remove all rows in a table</p><p>Instead of deleting an entire table through <code>DROP</code>, we can remove its data and continue to have the table</p><ul><li>It is a DDL statement</li><li>Drops the table</li><li>Creates a new table</li><li>Cannot rollback data</li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- TRUNCATE object_type object_name</span>

<span class="token keyword">TRUNCATE</span> <span class="token keyword">TABLE</span> played<span class="token punctuation">;</span>
</code></pre></div><p>Limitations:</p>`,65),h=a("code",null,"DELETE",-1),E=a("li",null,"It dose not work with locking or transactions",-1),w=o(`<h2 id="drop" tabindex="-1"><a class="header-anchor" href="#drop" aria-hidden="true">#</a> DROP</h2><p>The <code>DROP</code> statement destroys an existing database, table, index, or view</p><ul><li>DDL statement</li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- DROP object_type object_name</span>

<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> employees<span class="token punctuation">;</span>

<span class="token keyword">DROP</span> <span class="token keyword">DATABASE</span> airbnb<span class="token punctuation">;</span>
</code></pre></div><h2 id="alter" tabindex="-1"><a class="header-anchor" href="#alter" aria-hidden="true">#</a> ALTER</h2><p>The ALTER statement modifies an existing database object</p><ul><li><code>ADD</code></li><li><code>REMOVE</code></li><li><code>RENAME</code></li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- ALTER object_type object_name [parameters]</span>

<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> sink <span class="token keyword">ADD</span> bubbles <span class="token keyword">INTEGER</span><span class="token punctuation">;</span>

<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> sink <span class="token keyword">DROP</span> <span class="token keyword">COLUMN</span> bubbles<span class="token punctuation">;</span>
</code></pre></div><h2 id="rename" tabindex="-1"><a class="header-anchor" href="#rename" aria-hidden="true">#</a> RENAME</h2><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- RENAME object_type object_type TO new_object_name</span>

<span class="token keyword">RENAME</span> <span class="token keyword">TABLE</span> customers <span class="token keyword">TO</span> customer_data<span class="token punctuation">;</span>
</code></pre></div><h2 id="grant" tabindex="-1"><a class="header-anchor" href="#grant" aria-hidden="true">#</a> GRANT</h2><p>Give (or grant) certain permissions for the table (and other objects) for specified groups/users of a database</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- GRANT type_of_permission ON database_name.table_name TO &#39;username&#39;@&#39;localhost&#39;</span>

<span class="token keyword">GRANT</span> <span class="token keyword">SELECT</span><span class="token punctuation">,</span><span class="token keyword">INSERT</span><span class="token punctuation">,</span><span class="token keyword">UPDATE</span><span class="token punctuation">,</span><span class="token keyword">DELETE</span> <span class="token keyword">ON</span> employee <span class="token keyword">TO</span> user1<span class="token punctuation">;</span>

<span class="token comment">-- grant all permissions</span>
<span class="token keyword">GRANT</span> <span class="token keyword">ALL</span> <span class="token keyword">ON</span> movies<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">to</span> <span class="token string">&#39;kantara&#39;</span><span class="token variable">@&#39;localhost&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="deny" tabindex="-1"><a class="header-anchor" href="#deny" aria-hidden="true">#</a> DENY</h2><p>Bans certain permissions from groups/users</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DENY</span> <span class="token keyword">UPDATE</span> <span class="token keyword">ON</span> employee <span class="token keyword">TO</span> user1<span class="token punctuation">;</span>
</code></pre></div><h2 id="revoke" tabindex="-1"><a class="header-anchor" href="#revoke" aria-hidden="true">#</a> REVOKE</h2><p>Revoke permissions and privileges of database from groups/users</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- REVOKE type_of_permission ON database_name.table_name FROM &#39;username&#39;@&#39;localhost&#39;</span>

<span class="token keyword">REVOKE</span> <span class="token keyword">INSERT</span> <span class="token keyword">ON</span> employee <span class="token keyword">FROM</span> user1<span class="token punctuation">;</span>
</code></pre></div><h2 id="commit" tabindex="-1"><a class="header-anchor" href="#commit" aria-hidden="true">#</a> COMMIT</h2><p>Not every change made to a database is saved automatically</p><ul><li>This command saves the changes made using <code>INSERT</code>, <code>DELETE</code>, <code>UPDATE</code></li><li>Committed states can accrue</li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- SQL statement that perform some changes on database</span>

<span class="token comment">-- save those changes</span>
<span class="token keyword">COMMIT</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="rollback" tabindex="-1"><a class="header-anchor" href="#rollback" aria-hidden="true">#</a> ROLLBACK</h2><p>Allows you to undo any changes you have made but don&#39;t want to be saved permanently</p><ul><li>Reverts to the last non-committed state</li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- SQL statement that perform some changes on database</span>
<span class="token comment">-- save changes</span>

<span class="token comment">-- undo last saved changes</span>
<span class="token keyword">ROLLBACK</span><span class="token punctuation">;</span>
</code></pre></div>`,27);function g(b,R){const n=c("RouterLink");return l(),r("div",null,[i,k,a("ul",null,[u,m,a("li",null,[s("SQL can mainly be categorised as "),e(n,{to:"/Concepts/Programming_Paradigms/"},{default:t(()=>[s("declarative programming")]),_:1}),s(" (non-procedural)")])]),y,a("ul",null,[a("li",null,[s("In "),e(n,{to:"/Languages/SQL/Databases/MySQL.html"},{default:t(()=>[s("MySQL")]),_:1}),s(" Identical to "),h,s(" if you use InnoDB tables")]),E]),w])}const N=p(d,[["render",g],["__file","SQL.html.vue"]]);export{N as default};
