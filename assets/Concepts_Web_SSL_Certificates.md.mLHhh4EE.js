import{_ as s,c as i,a2 as e,o as t}from"./chunks/framework.DPuwY6B9.js";const k=JSON.parse('{"title":"SSL Certificates","description":null,"frontmatter":{"title":"SSL Certificates","description":null},"headers":[],"relativePath":"Concepts/Web/SSL_Certificates.md","filePath":"Concepts/Web/SSL_Certificates.md","lastUpdated":1690829560000}'),n={name:"Concepts/Web/SSL_Certificates.md"};function l(r,a,h,p,d,o){return t(),i("div",null,a[0]||(a[0]=[e(`<h1 id="ssl-certificates" tabindex="-1">SSL Certificates <a class="header-anchor" href="#ssl-certificates" aria-label="Permalink to &quot;SSL Certificates&quot;">​</a></h1><p>X.509 is an ITU standard defining the format of public key certificates. X.509 are used in TLS/SSL, which is the basis for HTTPS. An X.509 certificate binds an identity to a public key using a digital signature. A certificate contains an identity (hostname, organization, etc.) and a public key (RSA, DSA, ECDSA, ed25519, etc.), and is either signed by a Certificate Authority or is Self-Signed</p><h2 id="self-signed-certificates" tabindex="-1">Self-Signed Certificates <a class="header-anchor" href="#self-signed-certificates" aria-label="Permalink to &quot;Self-Signed Certificates&quot;">​</a></h2><h3 id="generate-ca" tabindex="-1">Generate CA <a class="header-anchor" href="#generate-ca" aria-label="Permalink to &quot;Generate CA&quot;">​</a></h3><ol><li><p>Generate RSA</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes ayu-dark ayu-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">openssl</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;"> genrsa</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;"> -aes256</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;"> -out</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;"> ca-key.pem</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 4096</span></span></code></pre></div></li><li><p>Generate a public CA Cert</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes ayu-dark ayu-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">openssl</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;"> req</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;"> -new</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;"> -x509</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;"> -sha256</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;"> -days</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 365</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;"> -key</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;"> ca-key.pem</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;"> -out</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;"> ca.pem</span></span></code></pre></div></li></ol><p>Create a self-signed CA creating a ca.key (private-key) and ca.crt (certificate):</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes ayu-dark ayu-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#ACB6BF8C;--shiki-light-font-style:italic;--shiki-dark:#ACB6BF8C;--shiki-dark-font-style:italic;"># ca.key</span></span>
<span class="line"><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">openssl</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;"> genrsa</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;"> -out</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;"> ca.key</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 4096</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#ACB6BF8C;--shiki-light-font-style:italic;--shiki-dark:#ACB6BF8C;--shiki-dark-font-style:italic;"># ca.crt</span></span>
<span class="line"><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">openssl</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;"> req</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;"> -new</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;"> -x509</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;"> -sha256</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;"> -days</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 365</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;"> -key</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;"> ca.key</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;"> -out</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;"> ca.crt</span></span></code></pre></div><ul><li>Convert the files to a one line base64 decoded string (only works on Linux <code>base64</code> tool)</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes ayu-dark ayu-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">cat</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;"> ca.key</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> |</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;"> base64</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;"> -w</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 0</span></span></code></pre></div><h3 id="generate-certificate" tabindex="-1">Generate Certificate <a class="header-anchor" href="#generate-certificate" aria-label="Permalink to &quot;Generate Certificate&quot;">​</a></h3><ol><li><p>Create a RSA key</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes ayu-dark ayu-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">openssl</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;"> genrsa</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;"> -out</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;"> cert-key.pem</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 4096</span></span></code></pre></div></li><li><p>Create a Certificate Signing Request (CSR)</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes ayu-dark ayu-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">openssl</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;"> req</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;"> -new</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;"> -sha256</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;"> -subj</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;"> &quot;/CN=yourcn&quot;</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;"> -key</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;"> cert-key.pem</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;"> -out</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;"> cert.csr</span></span></code></pre></div></li><li><p>Create a <code>extfile</code> with all the alternative names</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes ayu-dark ayu-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#F07178;--shiki-dark:#F07178;">echo</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;"> &quot;subjectAltName=DNS:your-dns.record,IP:257.10.10.1&quot;</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> &gt;&gt;</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;"> extfile.cnf</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes ayu-dark ayu-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#ACB6BF8C;--shiki-light-font-style:italic;--shiki-dark:#ACB6BF8C;--shiki-dark-font-style:italic;"># optional</span></span>
<span class="line"><span style="--shiki-light:#F07178;--shiki-dark:#F07178;">echo</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;"> extendedKeyUsage</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;"> =</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;"> serverAuth</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> &gt;&gt;</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;"> extfile.cnf</span></span></code></pre></div></li><li><p>Create the certificate</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes ayu-dark ayu-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">openssl</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;"> x509</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;"> -req</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;"> -sha256</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;"> -days</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 365</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;"> -in</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;"> cert.csr</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;"> -CA</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;"> ca.pem</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;"> -CAkey</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;"> ca-key.pem</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;"> -out</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;"> cert.pem</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;"> -extfile</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;"> extfile.cnf</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;"> -CAcreateserial</span></span></code></pre></div></li></ol><h2 id="certificate-formats" tabindex="-1">Certificate Formats <a class="header-anchor" href="#certificate-formats" aria-label="Permalink to &quot;Certificate Formats&quot;">​</a></h2><p>X.509 Certificates exist in Base64 Formats <strong>PEM (.pem, .crt, .ca-bundle)</strong>, <strong>PKCS#7 (.p7b, p7s)</strong> and Binary Formats <strong>DER (.der, .cer)</strong>, <strong>PKCS#12 (.pfx, p12)</strong></p><h3 id="convert-certs" tabindex="-1">Convert Certs <a class="header-anchor" href="#convert-certs" aria-label="Permalink to &quot;Convert Certs&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Command</th><th>Conversion</th></tr></thead><tbody><tr><td><code>openssl x509 -outform der -in cert.pem -out cert.der</code></td><td>PEM to DER</td></tr><tr><td><code>openssl x509 -inform der -in cert.der -out cert.pem</code></td><td>DER to PEM</td></tr><tr><td><code>openssl pkcs12 -in cert.pfx -out cert.pem -nodes</code></td><td>PFX to PEM</td></tr></tbody></table><h2 id="verify-certificates" tabindex="-1">Verify Certificates <a class="header-anchor" href="#verify-certificates" aria-label="Permalink to &quot;Verify Certificates&quot;">​</a></h2><p><code>openssl verify -CAfile ca.pem -verbose cert.pem</code></p><h2 id="install-the-ca-cert-as-a-trusted-root-ca" tabindex="-1">Install the CA Cert as a trusted root CA <a class="header-anchor" href="#install-the-ca-cert-as-a-trusted-root-ca" aria-label="Permalink to &quot;Install the CA Cert as a trusted root CA&quot;">​</a></h2><h3 id="on-debian-derivatives" tabindex="-1">On Debian &amp; Derivatives <a class="header-anchor" href="#on-debian-derivatives" aria-label="Permalink to &quot;On Debian &amp; Derivatives&quot;">​</a></h3><ul><li><p>Move the CA certificate (<code>ca.pem</code>) into <code>/usr/local/share/ca-certificates/ca.crt</code></p></li><li><p>Update the Cert Store with:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes ayu-dark ayu-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">sudo</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;"> update-ca-certificates</span></span></code></pre></div></li></ul><p>Refer the documentation <a href="https://wiki.debian.org/Self-Signed_Certificate" target="_blank" rel="noreferrer">here</a> and <a href="https://manpages.debian.org/buster/ca-certificates/update-ca-certificates.8.en.html" target="_blank" rel="noreferrer">here.</a></p><h3 id="on-fedora" tabindex="-1">On Fedora <a class="header-anchor" href="#on-fedora" aria-label="Permalink to &quot;On Fedora&quot;">​</a></h3><ul><li><p>Move the CA certificate (<code>ca.pem</code>) to <code>/etc/pki/ca-trust/source/anchors/ca.pem</code> or <code>/usr/share/pki/ca-trust-source/anchors/ca.pem</code></p></li><li><p>Now run (with sudo if necessary):</p></li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes ayu-dark ayu-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">update-ca-trust</span></span></code></pre></div><p>Refer the documentation <a href="https://docs.fedoraproject.org/en-US/quick-docs/using-shared-system-certificates/" target="_blank" rel="noreferrer">here.</a></p><h3 id="on-arch" tabindex="-1">On Arch <a class="header-anchor" href="#on-arch" aria-label="Permalink to &quot;On Arch&quot;">​</a></h3><p>System-wide - Arch(p11-kit) (From arch wiki)</p><ul><li><p>Run (As root)</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes ayu-dark ayu-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">trust</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;"> anchor</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;"> --store</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;"> myCA.crt</span></span></code></pre></div></li><li><p>The certificate will be written to /etc/ca-certificates/trust-source/myCA.p11-kit and the &quot;legacy&quot; directories automatically updated</p></li><li><p>If you get &quot;no configured writeable location&quot; or a similar error, import the CA manually:</p></li><li><p>Copy the certificate to the /etc/ca-certificates/trust-source/anchors directory</p></li><li><p>and then</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes ayu-dark ayu-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">update-ca-trust</span></span></code></pre></div></li></ul><p>wiki page <a href="https://wiki.archlinux.org/title/User:Grawity/Adding_a_trusted_CA_certificate" target="_blank" rel="noreferrer">here</a></p><h3 id="on-windows" tabindex="-1">On Windows <a class="header-anchor" href="#on-windows" aria-label="Permalink to &quot;On Windows&quot;">​</a></h3><p>Assuming the path to your generated CA certificate as <code>C:\\ca.pem</code>, run:</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes ayu-dark ayu-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#F07178;--shiki-dark:#F07178;">Import-Certificate</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> -</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">FilePath </span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;">&quot;C:\\ca.pem&quot;</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> -</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">CertStoreLocation Cert:\\LocalMachine\\Root</span></span></code></pre></div><ul><li>Set <code>-CertStoreLocation</code> to <code>Cert:\\CurrentUser\\Root</code> in case you want to trust certificates only for the logged in user</li></ul><p>OR</p><p>In Command Prompt, run:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes ayu-dark ayu-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">certutil.exe</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;"> -addstore</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;"> root</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;"> C:</span><span style="--shiki-light:#95E6CB;--shiki-dark:#95E6CB;">\\c</span><span style="--shiki-light:#AAD94C;--shiki-dark:#AAD94C;">a.pem</span></span></code></pre></div><ul><li><code>certutil.exe</code> is a built-in tool (classic <code>System32</code> one) and adds a system-wide trust anchor</li></ul><h3 id="on-android" tabindex="-1">On Android <a class="header-anchor" href="#on-android" aria-label="Permalink to &quot;On Android&quot;">​</a></h3><p>The exact steps vary device-to-device, but here is a generalised guide:</p><ol><li>Open Phone Settings</li><li>Locate <code>Encryption and Credentials</code> section. It is generally found under <code>Settings &gt; Security &gt; Encryption and Credentials</code></li><li>Choose <code>Install a certificate</code></li><li>Choose <code>CA Certificate</code></li><li>Locate the certificate file <code>ca.pem</code> on your SD Card/Internal Storage using the file manager.</li><li>Select to load it.</li><li>Done!</li></ol><h2 id="ssl-security" tabindex="-1">SSL Security <a class="header-anchor" href="#ssl-security" aria-label="Permalink to &quot;SSL Security&quot;">​</a></h2><h3 id="tls-version-and-ciphers" tabindex="-1">TLS Version and Ciphers <a class="header-anchor" href="#tls-version-and-ciphers" aria-label="Permalink to &quot;TLS Version and Ciphers&quot;">​</a></h3><p>Scanning for TLS Version and supported Ciphers: <code>nmap --script ssl-enum-ciphers &lt;target&gt;</code></p><ul><li><a href="https://www.ssllabs.com/projects/index.html" target="_blank" rel="noreferrer">Qualys SSL Labs</a> SSL Security Tools by Qualys</li></ul>`,44)]))}const C=s(n,[["render",l]]);export{k as __pageData,C as default};