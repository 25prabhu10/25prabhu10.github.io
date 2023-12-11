import{_ as p,r as o,o as e,c,b as n,d as s,a as t,e as u}from"./app-jDLxG9B3.js";const l={},r=n("h1",{id:"axios",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#axios","aria-hidden":"true"},"#"),s(" Axios")],-1),i={href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"},k=n("a",{href:"../Node.js"},"node.js",-1),d=u(`<p>On the server-side it uses the native node.js <code>http</code> module, while on the client (browser) it uses <code>XMLHttpRequests</code>.</p><p>Features:</p><ul><li>Make <code>XMLHttpRequests</code> from the browser</li><li>Make <code>http</code> requests from node.js</li><li>Supports the <em>Promise</em> API</li><li>Intercept request and response</li><li>Transform request and response data</li><li>Cancel requests</li><li>Automatic transforms for JSON data</li><li>Client side support for protecting against <em>CSRF</em></li></ul><p>Advantages of <code>fetch</code> over axios:</p><ul><li>Less API to learn</li><li>Smaller bundle size</li><li>Reduced trouble when updating packages/managing breaking changes</li><li>Immediate bug fixes/releases</li><li>Conceptually simpler</li></ul><h2 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> Setup</h2><p>Install axios package:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> axios

<span class="token comment"># or</span>

<span class="token function">yarn</span> <span class="token function">install</span> axios
</code></pre></div><p><em>Example:</em> Using axios with <a href="../React">React</a></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> client <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&quot;https://jsonplaceholder.typicode.com/posts&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>post<span class="token punctuation">,</span> setPost<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>error<span class="token punctuation">,</span> setError<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  React<span class="token punctuation">.</span><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    axios
      <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>baseURL<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">setPost</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">setError</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Async version</span>
  React<span class="token punctuation">.</span><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getPost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> client<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">setPost</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setError</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">getPost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Error: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>error<span class="token punctuation">.</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>post<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&quot;No post!&quot;</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>body<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Checkout <code>npm install use-axios-client</code> for axios based custom hook</p><h2 id="response" tabindex="-1"><a class="header-anchor" href="#response" aria-hidden="true">#</a> Response</h2><p>The response schema:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token comment">// \`data\` is the response that was provided by the server</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`status\` is the HTTP status code from the server response</span>
  <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>

  <span class="token comment">// \`statusText\` is the HTTP status message from the server response</span>
  <span class="token comment">// As of HTTP/2 status text is blank or unsupported.</span>
  <span class="token comment">// (HTTP/2 RFC: https://www.rfc-editor.org/rfc/rfc7540#section-8.1.2.4)</span>
  <span class="token literal-property property">statusText</span><span class="token operator">:</span> <span class="token string">&#39;OK&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// \`headers\` the HTTP headers that the server responded with</span>
  <span class="token comment">// All header names are lower cased and can be accessed using the bracket notation.</span>
  <span class="token comment">// Example: \`response.headers[&#39;content-type&#39;]\`</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`config\` is the config that was provided to \`axios\` for the request</span>
  <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`request\` is the request that generated this response</span>
  <span class="token comment">// It is the last ClientRequest instance in node.js (in redirects)</span>
  <span class="token comment">// and an XMLHttpRequest instance in the browser</span>
  <span class="token literal-property property">request</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="concurrent-requests" tabindex="-1"><a class="header-anchor" href="#concurrent-requests" aria-hidden="true">#</a> Concurrent Requests</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> todos <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> posts <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;https://jsonplaceholder.typicode.com/todos&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;https://jsonplaceholder.typicode.com/posts&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="interceptors" tabindex="-1"><a class="header-anchor" href="#interceptors" aria-hidden="true">#</a> Interceptors</h2><p>You can intercept requests or responses before they are handled by <code>then</code> or <code>catch</code>.</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Add a request interceptor</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Do something before request is sent</span>
    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Do something with request error</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Add a response interceptor</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Any status code that lie within the range of 2xx cause this function to trigger</span>
    <span class="token comment">// Do something with response data</span>
    <span class="token keyword">return</span> response<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Any status codes that falls outside the range of 2xx cause this function to trigger</span>
    <span class="token comment">// Do something with response error</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li><p>If you need to remove an interceptor later you can.</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> myInterceptor <span class="token operator">=</span> axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/*...*/</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">eject</span><span class="token punctuation">(</span>myInterceptor<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></li><li><p>You can add interceptors to a custom instance of axios.</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/*...*/</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></li></ul><h2 id="transform-request-and-response" tabindex="-1"><a class="header-anchor" href="#transform-request-and-response" aria-hidden="true">#</a> Transform Request and Response</h2><p>Transform Request and Response:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&quot;api-url.com&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \`transformRequest\` allows changes to the request data before it is sent to the server</span>
  <span class="token comment">// This is only applicable for request methods &#39;PUT&#39;, &#39;POST&#39;, &#39;PATCH&#39; and &#39;DELETE&#39;</span>
  <span class="token comment">// The last function in the array must return a string or an instance of Buffer, ArrayBuffer,</span>
  <span class="token comment">// FormData or Stream</span>
  <span class="token comment">// You may modify the headers object.</span>
  <span class="token literal-property property">transformRequest</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> headers</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> encryptedString <span class="token operator">=</span> <span class="token function">encryptPayload</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      data <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">SecretStuff</span><span class="token operator">:</span> encryptedString<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>

      <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// \`transformResponse\` allows changes to the response data to be made before</span>
  <span class="token comment">// it is passed to then/catch</span>
  <span class="token literal-property property">transformResponse</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Do whatever you want to transform the data</span>

      <span class="token keyword">return</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><em>Example:</em></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Provide only response json part</span>
<span class="token comment">// =&gt; Chuk other metadata provided by axios</span>
<span class="token keyword">const</span> <span class="token function-variable function">responseSuccessHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> response<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Log &amp; Sanitize errors response</span>
<span class="token comment">// =&gt; The errors given by server will not be always consistent so we</span>
<span class="token comment">//    could sanitize the response and return proper error to the client.</span>
<span class="token keyword">const</span> <span class="token function-variable function">responseErrorHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> errors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Something went wrong, please try again!&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>errors<span class="token punctuation">)</span> errors <span class="token operator">=</span> error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>errors<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>error<span class="token punctuation">)</span> errors <span class="token operator">=</span> <span class="token punctuation">[</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>error<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">401</span><span class="token punctuation">)</span> <span class="token function">forceLogoutUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Error&quot;</span><span class="token punctuation">,</span> error<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">status</span><span class="token operator">:</span> error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>status<span class="token punctuation">,</span>
    <span class="token literal-property property">errors</span><span class="token operator">:</span> errors<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">responseSuccessHandler</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">responseErrorHandler</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="request-cancellation" tabindex="-1"><a class="header-anchor" href="#request-cancellation" aria-hidden="true">#</a> Request Cancellation</h2><p>Axios supports <code>AbortController</code> to cancel requests in fetch API way:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> controller <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AbortController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

axios
  <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/foo/bar&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">signal</span><span class="token operator">:</span> controller<span class="token punctuation">.</span>signal<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//...</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// cancel the request</span>

controller<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="axios-instance" tabindex="-1"><a class="header-anchor" href="#axios-instance" aria-hidden="true">#</a> Axios Instance</h2><p>You can create a new instance of axios with a custom config.</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getCSRFToken <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;components/utils&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> axiosInstance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&quot;https://some-domain.com/api/&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;X-Custom-Header&quot;</span><span class="token operator">:</span> <span class="token string">&quot;foobar&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;X-CSRF-Token&quot;</span><span class="token operator">:</span> <span class="token function">getCSRFToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> axiosInstance<span class="token punctuation">;</span>
</code></pre></div><h2 id="custom-fetch-client" tabindex="-1"><a class="header-anchor" href="#custom-fetch-client" aria-hidden="true">#</a> Custom Fetch Client</h2><p>Create a custom <code>fetch</code> client with some of the features of axios:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> localStorageKey <span class="token operator">=</span> <span class="token string">&quot;__bookshelf_token__&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">client</span><span class="token punctuation">(</span><span class="token parameter">endpoint<span class="token punctuation">,</span> <span class="token punctuation">{</span> body<span class="token punctuation">,</span> <span class="token operator">...</span>customConfig <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> token <span class="token operator">=</span> window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>localStorageKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> headers <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;content-type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;application/json&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    headers<span class="token punctuation">.</span>Authorization <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Bearer </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>token<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> body <span class="token operator">?</span> <span class="token string">&quot;POST&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>customConfig<span class="token punctuation">,</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>headers<span class="token punctuation">,</span>
      <span class="token operator">...</span>customConfig<span class="token punctuation">.</span>headers<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>body<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> window
    <span class="token punctuation">.</span><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">REACT_APP_API_URL</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>endpoint<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> config<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">401</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        window<span class="token punctuation">.</span>location<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>location<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> errorMessage <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>errorMessage<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span>localStorageKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Usage:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> client <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./api-client&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token parameter">listItemData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">client</span><span class="token punctuation">(</span><span class="token string">&quot;list-items&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">body</span><span class="token operator">:</span> listItemData <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">client</span><span class="token punctuation">(</span><span class="token string">&quot;list-items&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">listItemId<span class="token punctuation">,</span> updates</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">client</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">list-items/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>listItemId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&quot;PUT&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> updates<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token parameter">listItemId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">client</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">list-items/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>listItemId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&quot;DELETE&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> create<span class="token punctuation">,</span> read<span class="token punctuation">,</span> remove<span class="token punctuation">,</span> update <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,37),m={href:"https://github.com/axios/axios/tree/master/examples",target:"_blank",rel:"noopener noreferrer"},f={href:"https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper",target:"_blank",rel:"noopener noreferrer"};function g(h,y){const a=o("ExternalLinkIcon");return e(),c("div",null,[r,n("p",null,[n("a",i,[s("Axios"),t(a)]),s(" is a promise-based HTTP Client for "),k,s(" and the browser.")]),d,n("ul",null,[n("li",null,[n("a",m,[s("Axios examples"),t(a)])]),n("li",null,[n("a",f,[s("Replace axios with a fetch wrapper"),t(a)])])])])}const x=p(l,[["render",g],["__file","Axios.html.vue"]]);export{x as default};
