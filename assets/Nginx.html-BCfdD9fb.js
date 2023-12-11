import{_ as t,r as p,o,c,b as n,d as s,a as e,e as i}from"./app-jDLxG9B3.js";const l={},r=n("h1",{id:"nginx",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nginx","aria-hidden":"true"},"#"),s(" Nginx")],-1),k=n("p",null,"Open source web and application server",-1),d={href:"https://www.nginx.com/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://unit.nginx.org/",target:"_blank",rel:"noopener noreferrer"},g=i(`<h2 id="basic-configuration-arguments-and-examples" tabindex="-1"><a class="header-anchor" href="#basic-configuration-arguments-and-examples" aria-hidden="true">#</a> Basic configuration arguments and examples</h2><p>Logging and debugging:</p><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">error_log</span> &lt;file&gt; &lt;loglevel&gt;
    error_log logs/error.log</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">error_log</span> logs/debug.log debug</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">error_log</span> logs/error.log notice</span><span class="token punctuation">;</span>
</code></pre></div><p>Basic listening ports:</p><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">listen</span> &lt;port&gt; &lt;options&gt;
        listen <span class="token number">80</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">listen</span> <span class="token number">443</span> ssl http2</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">listen</span> <span class="token number">443</span> http3 reuseport</span><span class="token punctuation">;</span> (this is experimental!)
</code></pre></div><p>Header modifications:</p><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">add_header</span> &lt;header&gt; &lt;values&gt;
        add_header Alt-svc <span class="token string">&#39;<span class="token variable">$http3</span>=&quot;:&lt;port&gt;&quot;; ma=&lt;value&gt;&#39;</span></span><span class="token punctuation">;</span> (this <span class="token directive"><span class="token keyword">is</span> experimental!)
ssl_certificate / ssl_certificate_key
        ssl_certificate cert.pem</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">ssl_certificate_key</span> cert.key</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">server_name</span> &lt;domains&gt;
    server_name domain1.com *.domain1.com
root &lt;folder&gt;
    root /var/www/html/domain1</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">index</span> &lt;file&gt;
    index index.php</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">location</span> &lt;url&gt;</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">root</span> index.html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">index</span> index.html index.htm</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.php<span class="token variable">$is_args</span><span class="token variable">$args</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">location</span> ~ \\\\.php$</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">fastcgi_pass</span> 127.0.0.1:9000</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">fastcgi_index</span> index.php</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">fastcgi_param</span>  SCRIPT_FILENAME  /scripts<span class="token variable">$fastcgi_script_name</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">include</span> fastcgi_params</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">location</span> ~ /\\\\.ht</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">deny</span> all</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">location</span> = /favicon.ico</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">log_not_found</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">access_log</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">location</span> = /robots.txt</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">log_not_found</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">access_log</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">allow</span> all</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">location</span> ~* .(css|gif|ico|jpeg|jpg|js|png)$</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">expires</span> max</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">log_not_found</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="reverse-proxy" tabindex="-1"><a class="header-anchor" href="#reverse-proxy" aria-hidden="true">#</a> Reverse Proxy</h2><h3 id="show-client-s-real-ip" tabindex="-1"><a class="header-anchor" href="#show-client-s-real-ip" aria-hidden="true">#</a> Show Client&#39;s real IP</h3><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server_name</span> example.com</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:4000</span><span class="token punctuation">;</span>

        <span class="token comment"># Show clients real IP behind a proxy</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,10);function v(_,x){const a=p("ExternalLinkIcon");return o(),c("div",null,[r,k,n("p",null,[s("Project Homepage: "),n("a",d,[s("Nginx Homepage"),e(a)]),s(" Documentation: "),n("a",u,[s("Nginx Unit Docs"),e(a)])]),g])}const w=t(l,[["render",v],["__file","Nginx.html.vue"]]);export{w as default};
