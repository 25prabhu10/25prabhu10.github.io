import{_ as l,r as p,o as r,c,b as a,d as s,a as e,w as i,e as n}from"./app-jDLxG9B3.js";const d={},h=n(`<h1 id="bash-snippets" tabindex="-1"><a class="header-anchor" href="#bash-snippets" aria-hidden="true">#</a> Bash Snippets</h1><h2 id="general" tabindex="-1"><a class="header-anchor" href="#general" aria-hidden="true">#</a> General</h2><ol><li><p>Find difference in output of two shell commands:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">diff</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token function">ls</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span>ll<span class="token punctuation">)</span>

<span class="token comment"># or to see all the difference similar to (n)vim -d (diff)</span>
nvim <span class="token operator">&lt;</span><span class="token punctuation">(</span>pacman <span class="token parameter variable">-Qi</span> nvim<span class="token punctuation">)</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span>pacman <span class="token parameter variable">-Si</span> nvim<span class="token punctuation">)</span>
</code></pre></div></li><li><p>Upload files and share for free (limit 10GB):</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> --upload-file ./hello.txt https://transfer.sh/hello.txt
</code></pre></div></li><li><p>Translate or delete charaters:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token environment constant">$PATH</span>
<span class="token comment"># /home/prabhu/.local/bin:/usr/local/sbin</span>

<span class="token builtin class-name">echo</span> <span class="token environment constant">$PATH</span> <span class="token operator">|</span> <span class="token function">tr</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;\\n&#39;</span>
<span class="token comment"># /home/prabhu/.local/bin</span>
<span class="token comment"># /usr/local/sbin</span>
</code></pre></div></li><li><p>Columnate lists:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">mount</span> <span class="token operator">|</span> <span class="token function">column</span> <span class="token parameter variable">-t</span>
</code></pre></div></li></ol>`,3),m={href:"https://wiki.archlinux.org/title/webcam_setup",target:"_blank",rel:"noopener noreferrer"},u=a("h2",{id:"images",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#images","aria-hidden":"true"},"#"),s(" Images")],-1),k=n(`<li><p>Compress image:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>magick <span class="token parameter variable">-format</span> jpg <span class="token parameter variable">-quality</span> <span class="token number">50</span> /path/to/image.svg /path/to/image.jpg

<span class="token comment"># or</span>

mogrify <span class="token parameter variable">-compress</span> JPEG <span class="token parameter variable">-quality</span> <span class="token number">50</span> /path/to/image.jpg

<span class="token comment"># or</span>

convert <span class="token parameter variable">-strip</span> <span class="token parameter variable">-interlace</span> Plane -gaussian-blur <span class="token number">0.05</span> <span class="token parameter variable">-quality</span> <span class="token number">85</span>% /path/to/source/image.jpg /path/to/result/image.jpg

<span class="token comment"># or</span>

jpegoptim <span class="token parameter variable">--size</span><span class="token operator">=</span>512k /path/to/image.jpg
</code></pre></div></li>`,1),g={href:"https://imagemagick.org/script/compare.php",target:"_blank",rel:"noopener noreferrer"},b=a("div",{class:"language-bash","data-ext":"sh"},[a("pre",{class:"language-bash"},[a("code",null,`magick compare image1.jpg image2.jpg diff.png
`)])],-1),v=n(`<h2 id="_7z" tabindex="-1"><a class="header-anchor" href="#_7z" aria-hidden="true">#</a> 7z</h2><ul><li><p>7z with ultra compression:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>7z a <span class="token parameter variable">-t7z</span> <span class="token parameter variable">-m0</span><span class="token operator">=</span>lzma <span class="token parameter variable">-mx</span><span class="token operator">=</span><span class="token number">9</span> <span class="token parameter variable">-mfb</span><span class="token operator">=</span><span class="token number">64</span> <span class="token parameter variable">-md</span><span class="token operator">=</span>32m <span class="token parameter variable">-ms</span><span class="token operator">=</span>on archive.7z dir1
</code></pre></div></li></ul><h2 id="pdf" tabindex="-1"><a class="header-anchor" href="#pdf" aria-hidden="true">#</a> PDF</h2><ul><li><p>PDF to image:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># pdftoppm &lt;image_format&gt; &lt;input_pdf&gt; &lt;image_output&gt;</span>

pdftoppm <span class="token parameter variable">-png</span> resume.pdf resume.png

<span class="token comment"># by default it will output 100 DPI, which can be increased</span>
pdftoppm <span class="token parameter variable">-png</span> <span class="token parameter variable">-rx</span> <span class="token number">300</span> <span class="token parameter variable">-ry</span> <span class="token number">300</span> resume.pdf resume.png
</code></pre></div></li></ul><h2 id="ffmpeg" tabindex="-1"><a class="header-anchor" href="#ffmpeg" aria-hidden="true">#</a> ffmpeg</h2><ul><li><p>Simple conversion of videos:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>ffmpeg <span class="token parameter variable">-i</span> input.mp4 output.mp4
</code></pre></div></li></ul>`,6),f=n(`<h2 id="mpv" tabindex="-1"><a class="header-anchor" href="#mpv" aria-hidden="true">#</a> mpv</h2><p>Use mpv to take snapshots from webcam:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>mpv av://v4l2:/dev/video0 <span class="token parameter variable">--profile</span><span class="token operator">=</span>low-latency <span class="token parameter variable">--untimed</span>
</code></pre></div><p>To use MJPEG as the pixelformat instead of the default, which in most cases is YUYV, you can run the following instead:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>mpv --demuxer-lavf-format<span class="token operator">=</span>video4linux2 --demuxer-lavf-o-set<span class="token operator">=</span>input_format<span class="token operator">=</span>mjpeg av://v4l2:/dev/video0
</code></pre></div>`,5),x=a("em",null,"5 FPS",-1),_=a("em",null,"30 FPS",-1),y={href:"https://github.com/mpv-player/mpv/wiki/Video4Linux2-Input",target:"_blank",rel:"noopener noreferrer"},w=n(`<h2 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h2><h3 id="pip" tabindex="-1"><a class="header-anchor" href="#pip" aria-hidden="true">#</a> pip</h3><ul><li><p>pip batch update:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> <span class="token parameter variable">-U</span> <span class="token variable"><span class="token variable">\`</span>pip list <span class="token parameter variable">--outdated</span> <span class="token operator">|</span> <span class="token function">tail</span> <span class="token parameter variable">-n</span> +3 <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">\`</span></span>
</code></pre></div></li></ul><h2 id="manjaro" tabindex="-1"><a class="header-anchor" href="#manjaro" aria-hidden="true">#</a> Manjaro</h2><h3 id="pacman" tabindex="-1"><a class="header-anchor" href="#pacman" aria-hidden="true">#</a> Pacman</h3><ul><li><p>List all installed packages sorted by size:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>pacman <span class="token parameter variable">-Qi</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;/^Name/{name=$3} /^Installed Size/{print $4$5, name}&#39;</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-h</span>
</code></pre></div></li><li><p>Clear <em>pacman</em> cache</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># get total cached packages</span>
<span class="token function">sudo</span> <span class="token function">ls</span> /var/cache/pacman/pkg/ <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>

<span class="token comment"># get total cache size</span>
<span class="token function">du</span> <span class="token parameter variable">-sh</span> /var/cache/pacman/pkg/

<span class="token comment"># clean all packages, expect the 3 most recent versions</span>
<span class="token function">sudo</span> paccache <span class="token parameter variable">-r</span>

<span class="token comment"># clean all packages, expect the n most recent versions</span>
<span class="token function">sudo</span> paccache <span class="token parameter variable">-rk</span> n

<span class="token comment"># remove all uninstalled packages</span>
<span class="token function">sudo</span> paccache <span class="token parameter variable">-ruk0</span>

<span class="token comment"># OR</span>
<span class="token function">sudo</span> pacman <span class="token parameter variable">-Sc</span>

<span class="token comment"># remove all installed and uninstalled package cache</span>
<span class="token function">sudo</span> pacman <span class="token parameter variable">-Scc</span>
</code></pre></div></li><li><p>Alternative create a hook to auto clean cache</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vi</span> /etc/pacman.d/hooks/clean_package_cache.hook
</code></pre></div><div class="language-text" data-ext="text"><pre class="language-text"><code>[Trigger]
Operation = Upgrade
Operation = Install
Operation = Remove
Type = Package
Target = *
[Action]
Description = Cleaning pacman cache...
When = PostTransaction
Exec = /usr/bin/paccache -r
</code></pre></div></li></ul>`,6),S={href:"https://ostechnix.com/recommended-way-clean-package-cache-arch-linux/",target:"_blank",rel:"noopener noreferrer"},z=a("h2",{id:"starship-prompt",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#starship-prompt","aria-hidden":"true"},"#"),s(" Starship Prompt")],-1),P={href:"https://starship.rs/",target:"_blank",rel:"noopener noreferrer"},I=n(`<h3 id="installation-linux" tabindex="-1"><a class="header-anchor" href="#installation-linux" aria-hidden="true">#</a> Installation Linux</h3><ol><li><p>Install/Update the latest version:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-sS</span> https://starship.rs/install.sh <span class="token operator">|</span> <span class="token function">sh</span>
</code></pre></div></li><li><p>Add the following to the end of <code>~/.bashrc</code> or <code>~/.zshrc</code>:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">eval</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>starship init <span class="token function">bash</span><span class="token variable">)</span></span>&quot;</span>
<span class="token comment"># -- or --</span>
<span class="token builtin class-name">eval</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>starship init <span class="token function">zsh</span><span class="token variable">)</span></span>&quot;</span>
</code></pre></div></li></ol><h2 id="openssh" tabindex="-1"><a class="header-anchor" href="#openssh" aria-hidden="true">#</a> OpenSSH</h2><p>Known Hosts</p><ul><li>Remove Entry from the Known-Hosts File:</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-R</span> <span class="token function">hostname</span>
</code></pre></div><p>Using the SSH Config File</p><p>If you are regularly connecting to multiple remote systems over SSH, you can configure your remote servers with the <code>.ssh/config</code> file</p><p><em>Example:</em></p><div class="language-ini" data-ext="ini"><pre class="language-ini"><code>Host dev
    HostName dev.your-domain
    User xcad
  Port 7654
    IdentityFile ~/.ssh/targaryen.key
Host *
    User root
    Compression yes
</code></pre></div><p>Connect to a host (like <code>dev</code> , eg.) with <code>ssh dev</code></p><h2 id="openssl" tabindex="-1"><a class="header-anchor" href="#openssl" aria-hidden="true">#</a> OpenSSL</h2><ul><li>Generate a DKIM private and public keypair:</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>openssl genrsa <span class="token parameter variable">-out</span> dkim_private.pem <span class="token number">2048</span>

openssl rsa <span class="token parameter variable">-in</span> dkim_private.pem <span class="token parameter variable">-pubout</span> <span class="token parameter variable">-outform</span> der <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null <span class="token operator">|</span> openssl base64 <span class="token parameter variable">-A</span>
</code></pre></div><h2 id="kde" tabindex="-1"><a class="header-anchor" href="#kde" aria-hidden="true">#</a> KDE</h2><h3 id="baloo-file-indexer" tabindex="-1"><a class="header-anchor" href="#baloo-file-indexer" aria-hidden="true">#</a> Baloo File Indexer</h3><ul><li><p>Disable it</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>balooctl <span class="token function">suspend</span>
balooctl disable
</code></pre></div></li></ul>`,17);function j(C,F){const t=p("ExternalLinkIcon"),o=p("RouterLink");return r(),c("div",null,[h,a("p",null,[a("a",m,[s("Arch Webcam Setup"),e(t)])]),u,a("ul",null,[k,a("li",null,[a("p",null,[s("Compare images: using "),a("a",g,[s("Image magick compare"),e(t)])]),b])]),v,a("p",null,[e(o,{to:"/Collection/FFmpeg.html"},{default:i(()=>[s("ffmpeg documentation")]),_:1})]),f,a("p",null,[s("In some cases this can lead to drastic improvements in quality and performance ("),x,s(" -> "),_,s(" for example), "),a("a",y,[s("see the mpv documentation"),e(t)])]),w,a("blockquote",null,[a("p",null,[s("Refer: "),a("a",S,[s("Recommended ways to clean cache"),e(t)])])]),z,a("p",null,[a("a",P,[s("Starship"),e(t)]),s(" is a minimal, blazing-fast, and infinitely customizable cross-shell prompt for any shell")]),I])}const q=l(d,[["render",j],["__file","Bash-Snippets.html.vue"]]);export{q as default};
