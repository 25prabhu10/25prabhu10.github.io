import{_ as s,c as i,o as a,a4 as e}from"./chunks/framework.DpC1ZpOZ.js";const c=JSON.parse('{"title":"SQLite","description":"A database engine","frontmatter":{"title":"SQLite","description":"A database engine"},"headers":[],"relativePath":"Languages/SQL/Databases/SQLite.md","filePath":"Languages/SQL/Databases/SQLite.md","lastUpdated":1690829560000}'),n={name:"Languages/SQL/Databases/SQLite.md"},t=e(`<h1 id="sqlite" tabindex="-1">SQLite <a class="header-anchor" href="#sqlite" aria-label="Permalink to &quot;SQLite&quot;">​</a></h1><p>SQLite is a SQL database engine</p><p>It is:</p><ul><li><p><strong>Self-contained</strong></p></li><li><p>Zero-configuration</p></li><li><p>Serverless:</p><ul><li>Doesn&#39;t require a separate server process to operate (client/server architecture)</li><li>Embedded into an end program</li></ul></li><li><p>Transactional:</p><ul><li><a href="./RDBMS.html#transactional">ACID</a> compliant</li></ul></li><li><p>Uses dynamic types for tables</p></li><li><p>Allows a single database connection tp access multiple files simultaneously</p></li><li><p>Capable of creating in-memory databases</p></li></ul><h2 id="data-types" tabindex="-1">Data-Types <a class="header-anchor" href="#data-types" aria-label="Permalink to &quot;Data-Types&quot;">​</a></h2><ul><li>SQLite uses dynamic type system</li><li>The data-type of a value is associated with the value itself, not with its container (column)</li></ul><p>Storage classes (5 basic data types):</p><ol><li><p><code>NULL</code>: The value is a NULL value (Missing or unknown info)</p></li><li><p><code>INTEGER</code>: The value is a signed integer, stored in 0, 1, 2, 3, 4, 6, or 8 bytes depending on the magnitude of the value</p></li><li><p><code>REAL</code>: The value is a floating point value, stored as an 8-byte IEEE floating point number</p></li><li><p><code>TEXT</code>: The value is a text string, stored using the database encoding (<code>UTF-8</code>, <code>UTF-16BE</code> or <code>UTF-16LE</code>)</p></li><li><p><code>BLOB</code>: The value is a blob of data, stored exactly as it was input</p></li></ol><p><em>Example:</em></p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes ayu-dark ayu-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">SELECT</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">typeof(</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;">100</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">),</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">typeof(</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;">100</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">.</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;">0</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">),</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">typeof(</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;">&quot;SQLite&quot;</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">),</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">typeof(0x12),</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">typeof(0e5),</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">typeof(x</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;">&#39;1000&#39;</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">),</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">typeof(</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">NULL</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#ACB6BF8C;--shiki-dark:#ACB6BF8C;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">-- integer|real|text|integer|real|blob|null</span></span></code></pre></div><table tabindex="0"><thead><tr><th><code>typeof(100)</code></th><th><code>typeof(100.0)</code></th><th><code>typeof(&quot;SQLite&quot;)</code></th><th><code>typeof(0x12)</code></th><th><code>typeof(0e5)</code></th><th><code>typeof(x&#39;1000&#39;)</code></th><th><code>typeof(NULL)</code></th></tr></thead><tbody><tr><td><code>integer</code></td><td><code>real</code></td><td><code>text</code></td><td><code>integer</code></td><td><code>real</code></td><td><code>blob</code></td><td><code>null</code></td></tr></tbody></table><ul><li><p>Boolean values are stored as integers <code>0</code> (false) and <code>1</code> (true). Keywords <code>TRUE</code> and <code>FALSE</code>, are supported as of V3.23.0 (2018-04-02)</p></li><li><p>The built-in Date And Time Functions of SQLite are capable of storing dates and times as <code>TEXT</code>, <code>REAL</code>, or <code>INTEGER</code> values</p><ul><li><code>TEXT</code> as ISO-8601 strings (&quot;YYYY-MM-DD HH:MM:SS.SSS&quot;)</li><li><code>REAL</code> as Julian day numbers, the number of days since noon in Greenwich on <code>November 24, 4714 B.C.</code> according to the proleptic Gregorian calendar</li><li><code>INTEGER</code> as Unix Time, the number of seconds since <code>1970-01-01 00:00:00 UTC</code></li></ul></li></ul><h2 id="syntax" tabindex="-1">Syntax <a class="header-anchor" href="#syntax" aria-label="Permalink to &quot;Syntax&quot;">​</a></h2><ul><li>Generally follows <a href="./PostgreSQL.html">PostgreSQL</a> syntax. <a href="https://www.sqlite.org/lang.html" target="_blank" rel="noreferrer">SQL as understood by SQLite</a></li><li>Does <strong>not enforce type checking</strong> (one can, for example, insert a <code>string</code> into a column defined as an <code>integer</code>)</li></ul><h3 id="select" tabindex="-1">SELECT <a class="header-anchor" href="#select" aria-label="Permalink to &quot;SELECT&quot;">​</a></h3><ul><li>Simple query:</li></ul><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes ayu-dark ayu-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">SELECT</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 1</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> +</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 1</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">;</span></span>
<span class="line"><span style="--shiki-light:#ACB6BF8C;--shiki-dark:#ACB6BF8C;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">-- 2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">SELECT</span></span>
<span class="line"><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;">   10</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> /</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 5</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">,</span></span>
<span class="line"><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;">   2</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> *</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 4</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">;</span></span>
<span class="line"><span style="--shiki-light:#ACB6BF8C;--shiki-dark:#ACB6BF8C;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">-- 2|8</span></span></code></pre></div><ul><li>Complex query:</li></ul><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes ayu-dark ayu-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">SELECT DISTINCT</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> column_list</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">FROM</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> table_list</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">  JOIN</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;"> table</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;"> ON</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> join_condition</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">WHERE</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> row_filter</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">ORDER BY</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> column</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">LIMIT</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> count OFFSET offset</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">GROUP BY</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> column</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">HAVING</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> group_filter;</span></span></code></pre></div><ul><li>Use <code>DISTINCT</code> clause to query unique rows in a table</li><li>Use <code>WHERE</code> clause to filter rows in the result set</li><li>Use <code>ORDER BY</code> clause to sort the result set</li><li>Use <code>LIMIT</code> OFFSET clauses to constrain the number of rows returned</li><li>Use <code>GROUP BY</code> to get the group rows into groups and apply aggregate function for each group</li><li>Use <code>HAVING</code> clause to filter groups</li><li>Use <code>INNER JOIN</code> or <code>LEFT JOIN</code> to query data from multiple tables using join</li></ul><h3 id="sqlite-constraints" tabindex="-1">SQLite Constraints <a class="header-anchor" href="#sqlite-constraints" aria-label="Permalink to &quot;SQLite Constraints&quot;">​</a></h3><p>Constraints are placed on columns. They limit the data that can be inserted into tables</p><ul><li><code>NOT NULL</code>: Ensures that a column cannot have <code>NULL</code> value</li><li><code>UNIQUE</code>: Ensures that all values in a column are different</li><li><code>PRIMARY KEY</code>: Uniquely identifies each row/record in a database table</li><li><code>FOREIGN KEY</code>: Uniquely identifies a row/record in another table</li><li><code>CHECK</code>: Ensures that all values in a column satisfies certain conditions.</li><li><code>DEFAULT</code>: Provides a default value for a column when none is specified</li></ul><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes ayu-dark ayu-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">CREATE</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;"> TABLE</span><span style="--shiki-light:#FFB454;--shiki-dark:#FFB454;"> COMPANY3</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">   ID </span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">INT</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;"> PRIMARY KEY</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">     NOT NULL</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">,</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">   NAME</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">           TEXT</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">    NOT NULL</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">,</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">   EMAIL          </span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">TEXT</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">    NOT NULL</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;"> UNIQUE</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">,</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">   AGE            </span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">INT</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">     DEFAULT</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 18</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">,</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">   ADDRESS</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">        CHAR</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;">50</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">),</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">   SALARY         </span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">REAL</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">    CHECK</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(SALARY </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">&gt;</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 0</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">)</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">);</span></span></code></pre></div><h3 id="sql-features-that-sqlite-does-not-implement" tabindex="-1">SQL Features That SQLite Does Not Implement <a class="header-anchor" href="#sql-features-that-sqlite-does-not-implement" aria-label="Permalink to &quot;SQL Features That SQLite Does Not Implement&quot;">​</a></h3><ul><li><p>Complete <code>ALTER TABLE</code> support: Only the RENAME TABLE, ADD COLUMN, RENAME COLUMN, and DROP COLUMN variants of the ALTER TABLE command are supported. Other kinds of ALTER TABLE operations such as ALTER COLUMN, ADD CONSTRAINT, and so forth are omitted.</p></li><li><p>Complete trigger support: FOR EACH ROW triggers are supported but not FOR EACH STATEMENT triggers</p></li><li><p>Writing to VIEWs: VIEWs in SQLite are read-only. You may not execute a DELETE, INSERT, or UPDATE statement on a view. But you can create a trigger that fires on an attempt to DELETE, INSERT, or UPDATE a view and do what you need in the body of the trigger</p></li><li><p>GRANT and REVOKE: Since SQLite reads and writes an ordinary disk file, the only access permissions that can be applied are the normal file access permissions of the underlying operating system. The GRANT and REVOKE commands commonly found on client/server RDBMSes are not implemented because they would be meaningless for an embedded database engine</p></li></ul><h2 id="commands" tabindex="-1">Commands <a class="header-anchor" href="#commands" aria-label="Permalink to &quot;Commands&quot;">​</a></h2><ul><li><p>Help: <code>.help</code></p></li><li><p>Connect to database:</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes ayu-dark ayu-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#ACB6BF8C;--shiki-dark:#ACB6BF8C;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">-- open sqlite</span></span>
<span class="line"><span style="--shiki-light:#ACB6BF8C;--shiki-dark:#ACB6BF8C;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">-- use &quot;.open FILENAME&quot; to reopen on a persistent database</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">.</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">open</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;"> album</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">.</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;">db</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#ACB6BF8C;--shiki-dark:#ACB6BF8C;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">-- or open db directly</span></span>
<span class="line"><span style="--shiki-light:#ACB6BF8C;--shiki-dark:#ACB6BF8C;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">-- sqlite3 album.db</span></span></code></pre></div></li><li><p>Exit sqlite:</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes ayu-dark ayu-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">.exit CODE</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">.quit</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">.q</span></span></code></pre></div></li><li><p>List databases in the current database connection:</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes ayu-dark ayu-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">.</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">database</span></span>
<span class="line"><span style="--shiki-light:#ACB6BF8C;--shiki-dark:#ACB6BF8C;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">-- main: album.db r/w</span></span></code></pre></div></li><li><p>List tables in a database:</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes ayu-dark ayu-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">.tables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#ACB6BF8C;--shiki-dark:#ACB6BF8C;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">-- albums employees invoices playlists</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">.</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">table</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;"> &#39;%es&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#ACB6BF8C;--shiki-dark:#ACB6BF8C;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">-- employees invoices</span></span></code></pre></div></li><li><p>Show database schema:</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes ayu-dark ayu-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">.</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">schema</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#ACB6BF8C;--shiki-dark:#ACB6BF8C;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">-- schema and the content of the sqlite_stat tables</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">.fullschema</span></span></code></pre></div></li><li><p>Show table structure:</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes ayu-dark ayu-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">.</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">schema</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> albums</span></span></code></pre></div></li><li><p>List indexes:</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes ayu-dark ayu-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">.indexes</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#ACB6BF8C;--shiki-dark:#ACB6BF8C;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">-- indexes of a specific table</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">.indexes </span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">TABLE</span></span></code></pre></div></li><li><p>Export query:</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes ayu-dark ayu-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">.</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">output</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;"> albums</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">.</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;">txt</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">SELECT</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> title </span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">FROM</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> albums</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">ORDER BY</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> title</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">LIMIT</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 24</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">.quit</span></span></code></pre></div></li><li><p>Export entire database:</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes ayu-dark ayu-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">.</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">output</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> .</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">/</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;">chinook</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">.</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;">sql</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">.</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">dump</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">.quit</span></span></code></pre></div></li><li><p>Export specific table:</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes ayu-dark ayu-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">.</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">output</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> .</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">/</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;">albums</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">.</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;">sql</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">.</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">dump</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> albums</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">.quit</span></span></code></pre></div></li><li><p>Export only the schema:</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes ayu-dark ayu-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">.</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">output</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> .</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">/</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;">chinook_structure</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">.</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;">sql</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">.</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">schema</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">.quit</span></span></code></pre></div></li><li><p>Execute SQL statements from a file:</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes ayu-dark ayu-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">.mode column</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">.header </span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">on</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">.</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">read</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;"> query</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">.</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;">sql</span></span></code></pre></div></li><li><p>Backup current database:</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes ayu-dark ayu-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">.</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">backup</span></span></code></pre></div></li></ul>`,28),l=[t];function p(h,k,d,o,F,B){return a(),i("div",null,l)}const y=s(n,[["render",p]]);export{c as __pageData,y as default};