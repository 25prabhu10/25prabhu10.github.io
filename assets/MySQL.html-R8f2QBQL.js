import{_ as p,r as n,o as l,c,b as s,d as a,a as e,w as d,e as r}from"./app-jDLxG9B3.js";const i={},k=s("h1",{id:"mysql",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#mysql","aria-hidden":"true"},"#"),a(" MySQL")],-1),u=s("ul",null,[s("li",null,"MySQL InnoDB Storage Engine")],-1),E={href:"https://dev.mysql.com/downloads/",target:"_blank",rel:"noopener noreferrer"},y=r(`<p>Features:</p><ul><li><p>Web App</p></li><li><p>Ease of use</p></li><li><p>Speed</p></li><li><p>Scalability</p></li><li><p><code>count(*)</code> is fast and good to be used</p><ul><li>Smallest secondary non-null index</li></ul></li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">EXPLAIN</span> <span class="token keyword">SELECT</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> todos<span class="token punctuation">;</span>
</code></pre></div><h2 id="data-types" tabindex="-1"><a class="header-anchor" href="#data-types" aria-hidden="true">#</a> Data Types</h2><ul><li><code>CHAR</code>: It can only store strings of fixed length <code>CHAR(10)</code> can only store 10 characters</li></ul><table><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>INT</code></td><td>Whole numbers</td></tr><tr><td><code>DECIMAL(M,N)</code></td><td>Decimal numbers (exact value) (number of digits M, precision N)</td></tr><tr><td><code>FLOAT</code></td><td></td></tr><tr><td><code>VARCHAR(L)</code></td><td>String of length L (for small strings)</td></tr><tr><td><code>TEXT</code></td><td>for longer strings</td></tr><tr><td><code>BLOB</code></td><td>Binary Large Object, Stores large data</td></tr><tr><td><code>DATE</code></td><td>&#39;YYYY-MM-DD&#39;</td></tr><tr><td><code>TIMESTAMP</code></td><td>&#39;YYYY-MM-DD HH:MM:SS&#39;</td></tr></tbody></table><h2 id="database-queries" tabindex="-1"><a class="header-anchor" href="#database-queries" aria-hidden="true">#</a> Database Queries</h2><p>Collation and Character Set:</p><ul><li>Default <code>latin1_swedish_ci</code> and <code>latin1</code></li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span><span class="token punctuation">;</span>
<span class="token keyword">SHOW</span> COLLATION<span class="token punctuation">;</span>

<span class="token keyword">SHOW</span> VARIABLES <span class="token operator">LIKE</span> <span class="token string">&#39;c%&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> rose <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> latin1 <span class="token keyword">COLLATE</span> latin1_swedish_cs<span class="token punctuation">;</span>
</code></pre></div><h3 id="db-info" tabindex="-1"><a class="header-anchor" href="#db-info" aria-hidden="true">#</a> DB Info</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- list databases</span>
<span class="token keyword">SHOW</span> <span class="token keyword">DATABASES</span><span class="token punctuation">;</span>

<span class="token comment">-- list tables</span>
<span class="token keyword">SHOW</span> <span class="token keyword">TABLES</span><span class="token punctuation">;</span>
<span class="token keyword">SHOW</span> <span class="token keyword">TABLES</span> <span class="token keyword">FROM</span> music<span class="token punctuation">;</span>

<span class="token comment">-- list columns</span>
<span class="token keyword">SHOW</span> <span class="token keyword">COLUMNS</span> <span class="token keyword">FROM</span> track<span class="token punctuation">;</span>

<span class="token comment">-- list triggers</span>
<span class="token keyword">SHOW</span> TRIGGERS<span class="token punctuation">;</span>

<span class="token comment">-- show statement used to create database, table</span>
<span class="token keyword">SHOW</span> <span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> music<span class="token punctuation">;</span>
<span class="token keyword">SHOW</span> <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> track<span class="token punctuation">;</span>

<span class="token comment">-- show table schema</span>
<span class="token keyword">DESCRIBE</span> student<span class="token punctuation">;</span>

</code></pre></div><h2 id="database" tabindex="-1"><a class="header-anchor" href="#database" aria-hidden="true">#</a> Database</h2><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> lucy<span class="token punctuation">;</span>

<span class="token comment">-- avoid errors</span>
<span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> lucy<span class="token punctuation">;</span>

<span class="token keyword">USE</span> lucy<span class="token punctuation">;</span>
</code></pre></div><h2 id="table" tabindex="-1"><a class="header-anchor" href="#table" aria-hidden="true">#</a> Table</h2><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span>
<span class="token keyword">FROM</span> customers
<span class="token keyword">WHERE</span> last_name <span class="token operator">REGEXP</span> <span class="token string">&#39;^field&#39;</span>
</code></pre></div><p>Column Constraints:</p><ul><li><p><code>UNIQUE</code></p></li><li><p><code>NOT NULL</code></p></li><li><p><code>PRIMARY KEY</code>: entry for this column should be unique and cannot be <code>NULL</code></p></li><li><p><code>DEFAULT value</code>: set default value</p></li><li><p><code>ENUM</code></p></li><li><p><code>AUTO_INCREMENT</code>: Add unique number to each row</p></li><li><p><code>CHECK</code></p></li></ul><p><em>Example:</em></p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- Users table</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> Users <span class="token punctuation">(</span>
  id <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
  email <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">UNIQUE</span><span class="token punctuation">,</span>
  bio <span class="token keyword">TEXT</span><span class="token punctuation">,</span>
  country <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- Rooms table</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> Rooms <span class="token punctuation">(</span>
  id <span class="token keyword">SMALLINT</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token number">0</span><span class="token punctuation">,</span>
  street <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  owner_id <span class="token keyword">INT</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>owner_id<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> Users<span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">SET</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li><p><code>ON DELETE SET NULL</code>: set value as <code>NULL</code> when the foreign key entry is delete from the other table</p></li><li><p><code>ON DELETE SET CASCADE</code>: delete entry when the foreign key entry is delete from the other table</p></li></ul><p>Create temporary tables which will be deleted once the monitor connection is closed:</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TEMPORARY</span> <span class="token keyword">TABLE</span>
</code></pre></div><ul><li>Show table:</li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> todos<span class="token punctuation">;</span>
</code></pre></div><h3 id="column-types" tabindex="-1"><a class="header-anchor" href="#column-types" aria-hidden="true">#</a> Column Types</h3><ol><li><p><code>INT[(width)] [UNSIGNED] [ZEROFILL]</code>:</p><ul><li><p><code>UNSIGNED</code> can be used</p></li><li><p><code>width</code>: Not the max number of digits but the min number of digits, like <code>INT(4)</code> will save 33 as 0033.</p></li><li><p><code>width</code> and <code>ZEROFILL</code> arguments to left-pad the values with 0&#39;s.</p></li></ul></li></ol><h2 id="index" tabindex="-1"><a class="header-anchor" href="#index" aria-hidden="true">#</a> Index</h2><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">INDEX</span> email_index <span class="token keyword">on</span> Users<span class="token punctuation">(</span>email<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="triggers" tabindex="-1"><a class="header-anchor" href="#triggers" aria-hidden="true">#</a> Triggers</h2><p>A trigger is a stored program invoked automatically in response to an event such as <code>INSERT</code>, <code>UPDATE</code>, or <code>DELETE</code> that occurs in the associated table</p><ul><li>You can define a trigger that is invoked automatically before a new row is inserted into a table</li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> before_employee_update BEFORE
<span class="token keyword">UPDATE</span>
  <span class="token keyword">ON</span> employees <span class="token keyword">FOR EACH ROW</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span>
  employees_audit
<span class="token keyword">SET</span>
  <span class="token keyword">action</span> <span class="token operator">=</span> <span class="token string">&#39;update&#39;</span><span class="token punctuation">,</span>
  employeeNumber <span class="token operator">=</span> OLD<span class="token punctuation">.</span>employeeNumber<span class="token punctuation">,</span>
  lastName <span class="token operator">=</span> OLD<span class="token punctuation">.</span>lastName<span class="token punctuation">,</span>
  changeDate <span class="token operator">=</span> <span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>Default delimiter is <code>;</code></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> delimiter //
mysql<span class="token operator">&gt;</span> CREATE TRIGGER upd_check BEFORE UPDATE ON account
       FOR EACH ROW
       BEGIN
           IF NEW.amount <span class="token operator">&lt;</span> <span class="token number">0</span> THEN
               SET NEW.amount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
           ELSEIF NEW.amount <span class="token operator">&gt;</span> <span class="token number">100</span> THEN
               SET NEW.amount <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
           END IF<span class="token punctuation">;</span>
       END<span class="token punctuation">;</span>//
mysql<span class="token operator">&gt;</span> delimiter <span class="token punctuation">;</span>
</code></pre></div><h2 id="locks" tabindex="-1"><a class="header-anchor" href="#locks" aria-hidden="true">#</a> Locks</h2><p><code>show session variables like &#39;%isolation%&#39;;</code></p><p>Add Table lock:</p><p><code>lock table PRODUCTS write;</code></p><h2 id="settings" tabindex="-1"><a class="header-anchor" href="#settings" aria-hidden="true">#</a> Settings</h2><ul><li><code>set autocommit=0;</code>: Disable auto-commit (default: ON)</li><li><code>set session transaction isolation level read commited;</code>: Good for OLTP Databases (default: repeatable-read)</li></ul>`,41);function h(m,w){const t=n("RouterLink"),o=n("ExternalLinkIcon");return l(),c("div",null,[k,s("p",null,[a("MySQL is an open-source "),e(t,{to:"/Languages/SQL/Databases/#relational-database-management-system-rdbms"},{default:d(()=>[a("RDBMS")]),_:1}),a(" created in 1995")]),u,s("p",null,[a("Setup: Install the MySQL Community Server from this "),s("a",E,[a("link"),e(o)])]),y])}const g=p(i,[["render",h],["__file","MySQL.html.vue"]]);export{g as default};
