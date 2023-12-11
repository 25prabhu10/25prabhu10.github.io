import{_ as n,o as s,c as a,e}from"./app-jDLxG9B3.js";const t={},o=e(`<h1 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h1><p>Redis is an in-memory data structure store, used as a distributed, in-memory key–value database, cache and message broker, with optional durability</p><p>Redis is a key-value store that let us store some data, the value, inside a key. It offers ultra-fast performance to satisfy demanding real-time applications</p><ul><li><p>Port (default): <code>6379</code></p></li><li><p>Case insensitive</p></li><li><p>By default all values are of type string</p></li></ul><h2 id="commands" tabindex="-1"><a class="header-anchor" href="#commands" aria-hidden="true">#</a> Commands</h2><ul><li><p><code>redis-server</code>: starts Redis Server</p></li><li><p><code>redis-cli</code>: CLI utility to interact with Redis(connect to Redis)</p></li><li><p><code>redis-sentinel</code>: runs Redis Sentinel, a tool for monitoring and failover</p></li><li><p><code>redis-benchmark</code>: checks Redis performance</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>redis-benchmark <span class="token parameter variable">-n</span> <span class="token number">1000</span> <span class="token parameter variable">-d</span> <span class="token number">1000000</span> <span class="token parameter variable">-c</span> <span class="token number">200</span>
</code></pre></div></li><li><p><code>redis-check-aof</code> &amp; <code>redis-check-dump</code>: used for the rare cases when there are corrupted data files</p></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># checking if redis is working</span>
redis-cli <span class="token function">ping</span>
</code></pre></div><h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h2><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- SET key value [expiration EX seconds | PX milliseconds] [NX|XX]</span>
<span class="token keyword">SET</span> name mort
<span class="token comment">-- OK</span>

<span class="token comment">-- update the value of a key</span>
<span class="token keyword">SET</span> name kyle

<span class="token comment">-- GET key</span>
GET name
<span class="token comment">-- &quot;kyle&quot;</span>

<span class="token comment">-- DEL key</span>
DEL name
<span class="token comment">-- (integer) 1</span>

GET name
<span class="token comment">-- (nil)</span>

<span class="token keyword">EXISTS</span> name
<span class="token comment">-- (integer) 0 [not exists]</span>
<span class="token comment">-- (integer) 1 [exists]</span>

<span class="token keyword">KEYS</span> <span class="token operator">*</span>
<span class="token comment">-- 1) &quot;name&quot;</span>
<span class="token comment">-- list all keys that match the pattern</span>

<span class="token comment">-- FLUSHALL [ASYNC | SYNC]</span>
FLUSHALL
<span class="token comment">-- OK</span>
<span class="token comment">-- delete all the keys of all the existing databases</span>

<span class="token keyword">KEYS</span> <span class="token operator">*</span>
<span class="token comment">-- (empty list or set)</span>
</code></pre></div><ul><li><p>Non-destructive write:</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- we want to set value for the key &quot;services&quot;</span>
<span class="token keyword">SET</span> service <span class="token string">&quot;heroku aws&quot;</span>
<span class="token comment">-- we misspelled &quot;services&quot; and now</span>
<span class="token comment">-- the value of key &quot;service&quot; will be overwritten</span>

<span class="token comment">-- to prevent this we can use</span>
SETNX <span class="token keyword">key</span> <span class="token keyword">value</span>
<span class="token comment">-- creates a key in memory if and only if the key</span>
<span class="token comment">-- dose not exist already</span>
<span class="token comment">-- SET if Not eXists</span>

SETNX service <span class="token string">&quot;heroku aws&quot;</span>
<span class="token comment">-- (integer) 0</span>

SETNX services <span class="token string">&quot;heroku aws&quot;</span>
<span class="token comment">-- (integer) 1</span>
</code></pre></div></li><li><p>Expire keys:</p><ul><li>Timeout can be rest by using <code>SET</code> with the key again</li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>EXPIRE <span class="token keyword">key</span> seconds

TTL name
<span class="token comment">-- (integer) -1</span>

EXPIRE name <span class="token number">30</span>

TTL name
<span class="token comment">-- (integer) 27</span>

<span class="token comment">-- after 30 seconds</span>
TTL name
<span class="token comment">-- (integer) -2</span>

<span class="token comment">-- TTL returns:</span>
<span class="token comment">-- 1. timeout left in seconds</span>
<span class="token comment">-- 2. \`-2\` if the key doesn&#39;t exist</span>
<span class="token comment">-- 3. \`-1\` if the key exists but has no expiry set</span>
</code></pre></div></li></ul><h2 id="data-types" tabindex="-1"><a class="header-anchor" href="#data-types" aria-hidden="true">#</a> Data Types</h2><p>Redis is a data structure server</p><h3 id="core" tabindex="-1"><a class="header-anchor" href="#core" aria-hidden="true">#</a> Core</h3><ol><li><p>Strings: Redis strings are the most basic Redis data type, representing a sequence of bytes</p><ul><li><p>Binary-safe Strings</p></li><li><p>&quot;binary-safe&quot; means that the string can contain any type of data represented as a string: PNG images or serialized objects, for example.</p></li></ul></li><li><p>Lists: Redis lists are lists of strings sorted by insertion order</p><ul><li><p>Like linked lists</p></li><li><p><code>RPUSH</code>: inserts a new element at the end of the List</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- RPUSH key value [value ...]</span>
<span class="token comment">-- returns length of list after insertion</span>

RPUSH engineers <span class="token string">&quot;Alice&quot;</span>
<span class="token comment">-- 1</span>
RPUSH engineers <span class="token string">&quot;Bob&quot;</span>
<span class="token comment">-- 2</span>
RPUSH engineers <span class="token string">&quot;Carmen&quot;</span>
<span class="token comment">-- 3</span>

<span class="token comment">-- multiple element insertions</span>
RPUSH engineers <span class="token string">&quot;Eve&quot;</span> <span class="token string">&quot;Francis&quot;</span> <span class="token string">&quot;Gary&quot;</span>
</code></pre></div></li><li><p><code>LPUSH</code>: behaves the same as <code>RPUSH</code> except that it inserts the element at the front of the List</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- LPUSH key value [value ...]</span>
</code></pre></div></li><li><p><code>LRANGE</code>: returns a subset of the List based on a specified start and stop index</p><ul><li><code>0</code>: first element</li><li><code>-1</code>: last element</li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- LRANGE key start stop</span>

LRANGE engineers <span class="token number">0</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token comment">-- 1) &quot;Alice&quot;</span>
<span class="token comment">-- 2) &quot;Bob&quot;</span>
<span class="token comment">-- 3) &quot;Carmen&quot;</span>
</code></pre></div></li><li><p><code>LLEN</code>: length of a List at any time</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- LLEN key</span>
LLEN engineers
<span class="token comment">-- (integer) 3</span>
</code></pre></div></li><li><p><code>LPOP</code>: <strong>removes</strong> and returns the <strong>first element</strong> of the List</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- LPOP key</span>
LPOP engineers
</code></pre></div></li><li><p><code>RPOP</code>: <strong>removes</strong> and returns the <strong>last element</strong> of the List</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- RPOP key</span>
RPOP engineers
</code></pre></div></li></ul></li><li><p>Sets: Redis sets are <strong>unordered</strong> collections of <strong>unique strings</strong> that act like the sets (Java HashSets, Python sets). With a Redis set, you can add, remove, and test for existence <code>O(1)</code> time (in other words, regardless of the number of set elements)</p><ul><li><p><code>SADD</code>: create a Set</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- SADD key member [member ...]</span>
<span class="token comment">-- returns the number of members that were added</span>

SADD languages <span class="token string">&quot;english&quot;</span>
<span class="token comment">-- 1</span>
SADD languages <span class="token string">&quot;spanish&quot;</span>
<span class="token comment">-- 1</span>
SADD languages <span class="token string">&quot;french&quot;</span>
<span class="token comment">-- 1</span>

<span class="token comment">-- multiple insertions</span>
SADD languages <span class="token string">&quot;chinese&quot;</span> <span class="token string">&quot;japanese&quot;</span> <span class="token string">&quot;german&quot;</span>

SADD languages <span class="token string">&quot;english&quot;</span>
<span class="token comment">-- 0</span>
<span class="token comment">-- as it is already present</span>
</code></pre></div></li><li><p><code>SREM</code>: remove members from a Set</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- SREM key member [member ...]</span>
SREM languages <span class="token string">&quot;english&quot;</span> <span class="token string">&quot;french&quot;</span>
<span class="token comment">-- 2</span>

SREM languages <span class="token string">&quot;english&quot;</span>
<span class="token comment">-- 0</span>
</code></pre></div></li><li><p><code>SISMEMBER</code>: verify that a member is part of a Set</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- SISMEMBER key member</span>

SISMEMBER languages <span class="token string">&quot;spanish&quot;</span>
<span class="token comment">-- 1</span>

SISMEMBER languages <span class="token string">&quot;hindi&quot;</span>
<span class="token comment">-- 0</span>
</code></pre></div></li><li><p><code>SMEMBERS</code>: show all the members that exist in a Set</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- SMEMBERS key</span>
SMEMBERS languages
</code></pre></div></li><li><p><code>SUNION</code>: combine Sets</p><ul><li>If we pass to <code>SUNION</code> a key that doesn&#39;t exist, it considers that key to be an empty set (a set that has nothing in it).</li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- SUNION key [key ...]</span>
SADD ancient<span class="token operator">-</span>languages <span class="token string">&quot;greek&quot;</span>
SADD ancient<span class="token operator">-</span>languages <span class="token string">&quot;latin&quot;</span>

SUNION languages ancient<span class="token operator">-</span>languages
</code></pre></div></li></ul></li><li><p>Hashes: Redis hashes are record types modelled as collections of field-value pairs (Python dictionaries, Java HashMaps, and Ruby hashes)</p><ul><li><p><code>HSET</code>: sets <code>field</code> in the Hash to <code>value</code></p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- HSET key field value</span>
<span class="token comment">-- returns:</span>
<span class="token comment">-- 1 if field is a new field in the hash and value was set</span>
<span class="token comment">-- 0 if field already exists in the hash and the value was updated</span>

HSET computer name <span class="token string">&quot;MacBook Pro&quot;</span>
<span class="token comment">-- 1</span>
HSET computer <span class="token keyword">disk</span> <span class="token number">512</span>
<span class="token comment">-- 1</span>
HSET computer ram <span class="token number">16</span>
<span class="token comment">-- 1</span>
HSET computer <span class="token keyword">year</span> <span class="token number">2015</span>
<span class="token comment">-- 1</span>

HSET computer <span class="token keyword">year</span> <span class="token number">2018</span>
<span class="token comment">-- 0</span>
</code></pre></div></li><li><p><code>HGET</code>: returns the value associated with field in a Hash</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- HGET key field</span>

HGET computer <span class="token keyword">year</span>
</code></pre></div></li><li><p><code>HGETALL</code>: get all the fields with their values from the hash is to use</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- HGETALL key</span>
HGETALL computer
</code></pre></div></li><li><p><code>HMSET</code>: set multiple fields at once</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- HMSET key field value [field value ...]</span>

HMSET tablet name <span class="token string">&quot;iPad&quot;</span> <span class="token keyword">year</span> <span class="token number">2016</span> <span class="token keyword">disk</span> <span class="token number">64</span> ram <span class="token number">4</span>
</code></pre></div></li><li><p><code>HMGET</code>: specify from which fields in the hash we want to get a value</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- HMGET key field [field ...]</span>
HMGET tablet <span class="token keyword">disk</span> ram
</code></pre></div></li></ul></li><li><p>Sorted sets: Redis (<em>v1.2</em>) <strong>sorted</strong> sets are collections of <strong>unique strings</strong> that maintain order by each string&#39;s associated score</p><ul><li><p><code>ZADD</code>: adds all the specified members with specified scores to the Sorted Set</p><ul><li><p><code>ZADD</code> option arguments (Redis <em>v3.0.2</em>):</p><ul><li><p><code>XX</code>: Only update members that already exist. Never add members</p></li><li><p><code>NX</code>: Don&#39;t update already existing members. Always add new members</p></li><li><p><code>CH</code>: Modify the return value from the number of new members added, to the total number of members changed (<code>CH</code> is an abbreviation of <em>changed</em>). Changed members are new members added and members already existing for which the score was updated. So members specified in the command line having the same score as they had in the past are not counted</p></li><li><p><code>INCR</code>: When this option is specified <code>ZADD</code> acts like <code>ZINCRBY</code>. Only one score-members pair can be specified in this mode</p></li></ul></li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- ZADD key [NX|XX] [CH] [INCR] score member [score member ...]</span>
</code></pre></div></li><li><p><code>ZRANGE</code>: returns the specified range of members in the Sorted Set</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- ZRANGE key start stop [WITHSCORES]</span>

ZRANGE tickets <span class="token number">0</span> <span class="token operator">-</span><span class="token number">1</span>

ZRANGE tickets <span class="token number">0</span> <span class="token operator">-</span><span class="token number">1</span> WITHSCORES
</code></pre></div></li></ul></li><li><p>Streams: A Redis stream is a data structure that acts like an append-only log. Streams help record events in the order they occur and then syndicate them for processing</p></li><li><p>Geospatial indexes: Redis geospatial indexes are useful for finding locations within a given geographic radius or bounding box</p></li><li><p>Bitmaps: Redis bitmaps let you perform bitwise operations on strings</p></li><li><p>Bitfields: Redis bitfields efficiently encode multiple counters in a string value. Bitfields provide atomic get, set, and increment operations and support different overflow policies</p></li><li><p>HyperLogLog: The Redis HyperLogLog data structures provide probabilistic estimates of the cardinality (i.e., number of elements) of large sets</p></li></ol><h2 id="node-js" tabindex="-1"><a class="header-anchor" href="#node-js" aria-hidden="true">#</a> Node.js</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> axios <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;axios&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> cors <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;cors&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> Redis <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;redis&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">DEFAULT_EXPIRATION</span> <span class="token operator">=</span> <span class="token number">3600</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> redisClient <span class="token operator">=</span> Redis<span class="token punctuation">.</span><span class="token function">createClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">urlencoded</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">extended</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">cors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">getOrSetCache</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    redisClient<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">const</span> freshData <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      redisClient<span class="token punctuation">.</span><span class="token function">setex</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token constant">DEFAULT_EXPIRATION</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>freshData<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token function">resolve</span><span class="token punctuation">(</span>freshData<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/photos&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> albumId <span class="token operator">=</span> req<span class="token punctuation">.</span>query<span class="token punctuation">.</span>albumId<span class="token punctuation">;</span>

  <span class="token keyword">const</span> photos <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getOrSetCache</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">photos?albumId=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>albumId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>
      <span class="token string">&quot;https://jsonplaceholder.typicode.com/photos&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> albumId <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>photos<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;photos/:id&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> photo <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getOrSetCache</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">photos:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>req<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">https://jsonplaceholder.typicode.com/photos/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>req<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> albumId <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>photo<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="certification" tabindex="-1"><a class="header-anchor" href="#certification" aria-hidden="true">#</a> Certification</h2><ul><li>RU102JS (Redis University): Redis for .NET Developers</li></ul>`,18),p=[o];function c(l,i){return s(),a("div",null,p)}const r=n(t,[["render",c],["__file","Redis.html.vue"]]);export{r as default};
