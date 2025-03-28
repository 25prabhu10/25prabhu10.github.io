import{_ as i,c as a,o as e,ag as t}from"./chunks/framework.CTZL_gMF.js";const c=JSON.parse('{"title":"FFmpeg","description":"FFmpeg is a free and open-source software project consisting of a suite of libraries and programs for handling video, audio, and other multimedia files and streams.","frontmatter":{"title":"FFmpeg","description":"FFmpeg is a free and open-source software project consisting of a suite of libraries and programs for handling video, audio, and other multimedia files and streams."},"headers":[],"relativePath":"Collection/FFmpeg.md","filePath":"Collection/FFmpeg.md","lastUpdated":1690829560000}'),h={name:"Collection/FFmpeg.md"};function n(l,s,p,d,k,o){return e(),a("div",null,s[0]||(s[0]=[t(`<h1 id="ffmpeg" tabindex="-1">FFmpeg <a class="header-anchor" href="#ffmpeg" aria-label="Permalink to “FFmpeg”">​</a></h1><p>FFmpeg is a free and open-source software project consisting of a suite of libraries and programs for handling video, audio, and other multimedia files and streams.</p><p>Check streams:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#80A665;">ffprobe</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -v</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> error</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -show_entries</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> stream=index,codec_name,codec_type</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> movie.mkv</span></span></code></pre></div><p>Combine audio and video:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#80A665;">ffmpeg</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> video.mkv</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> audio.mp3</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -map</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> 0:v</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -map</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> 1:a</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -c:v</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> copy</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -shortest</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> movie.mkv</span></span></code></pre></div><p>Audio:</p><ul><li><code>mp3</code>: 128, 144, 160, <em>192</em></li><li><code>vorbis</code>: 128, 144, <em>160</em>, 192 (<code>ogg</code>)</li><li><code>aac</code>: 128, 144, 160, 192 (<code>m4a</code>)</li><li><code>opus</code>: 128, <em>144</em>, 160, 192 (<code>ogg</code>/<code>opus</code>)</li></ul><h2 id="audio" tabindex="-1">Audio <a class="header-anchor" href="#audio" aria-label="Permalink to “Audio”">​</a></h2><p>Audio conversion:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#80A665;">ffmpeg</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> audio.mka</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -acodec</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> libmp3lame</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> audio.mp3</span></span></code></pre></div><p>Extract audio:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#758575DD;"># -map channel</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#80A665;">ffmpeg</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> movie.mkv</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -vn</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -map</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> 0:4</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -acodec</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> copy</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> output.mka</span></span></code></pre></div><h2 id="video" tabindex="-1">Video <a class="header-anchor" href="#video" aria-label="Permalink to “Video”">​</a></h2><p>Extract video:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#80A665;">ffmpeg</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> movie.mkv</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -an</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -map</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> 0:0</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -vcodec</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> copy</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> video.mkv</span></span></code></pre></div><h2 id="x265" tabindex="-1">x265 <a class="header-anchor" href="#x265" aria-label="Permalink to “x265”">​</a></h2><p><a href="https://x265.readthedocs.io/en/master/" target="_blank" rel="noreferrer">x265</a> is a H.265/HEVC encoder.</p><p>An application for encoding video streams into the H.265/MPEG-H HEVC compression format.</p><h3 id="basic-commands" tabindex="-1">Basic Commands <a class="header-anchor" href="#basic-commands" aria-label="Permalink to “Basic Commands”">​</a></h3><ol><li><p>Simple encoding:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#80A665;">x265</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> inputFile.y4u</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> outFile.hevc</span></span></code></pre></div><blockquote><p>Only <em><code>yuv</code></em> or <em><code>y4m</code></em> can be used as input!</p></blockquote></li><li><p>Encoding Statistics:</p><ul><li><p>CLI log:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#80A665;">--log-level</span><span style="--shiki-light:#D73A49;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;">integer</span><span style="--shiki-light:#D73A49;--shiki-dark:#CB7676;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#80A665;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#DBD7CAEE;">&gt;</span></span></code></pre></div><p><em>where</em></p><table tabindex="0"><thead><tr><th>value</th><th>log-level</th></tr></thead><tbody><tr><td>0</td><td>error</td></tr><tr><td>1</td><td>warning</td></tr><tr><td>2</td><td>info (default)</td></tr><tr><td>3</td><td>debug</td></tr><tr><td>4</td><td>full</td></tr><tr><td>-1</td><td>disable</td></tr></tbody></table></li><li><p>Statistics output to file :</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#80A665;">--csv</span><span style="--shiki-light:#D73A49;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;">filenam</span><span style="--shiki-light:#24292E;--shiki-dark:#DBD7CAEE;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#CB7676;">&gt;</span></span></code></pre></div><ul><li>If <strong><code>--csv-log-level</code></strong> is <code>0</code> then <em>one line per run</em>.</li><li>If <em>greater</em> than <code>0</code> then <em>one line per frame</em>.</li></ul></li></ul></li><li><p>Progress:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#80A665;">--no-progress</span></span></code></pre></div><blockquote><p>Disable periodic progress reports from the CLI</p></blockquote></li></ol><h2 id="audio-and-video-recording" tabindex="-1">Audio and Video Recording <a class="header-anchor" href="#audio-and-video-recording" aria-label="Permalink to “Audio and Video Recording”">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#80A665;">ffmpeg</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> alsa</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -ac</span><span style="--shiki-light:#005CC5;--shiki-dark:#4C9A91;"> 2</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> default</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -acodec</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> libopus</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -threads</span><span style="--shiki-light:#005CC5;--shiki-dark:#4C9A91;"> 0</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> output.mka</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#80A665;">ffmpeg</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> x11grab</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -r</span><span style="--shiki-light:#005CC5;--shiki-dark:#4C9A91;"> 20</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> 1920x1080</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> :0.0</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -vcodec</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> libx265</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -preset</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> fast</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -b:v</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> 500k</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -threads</span><span style="--shiki-light:#005CC5;--shiki-dark:#4C9A91;"> 0</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> output.6.mkv</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#80A665;">ffmpeg</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> pulse</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -ac</span><span style="--shiki-light:#005CC5;--shiki-dark:#4C9A91;"> 2</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> default</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> x11grab</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -r</span><span style="--shiki-light:#005CC5;--shiki-dark:#4C9A91;"> 20</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> 1920x1080</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> :0.0</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -acodec</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> aac</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -vcodec</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> libx264</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -preset</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> ultrafast</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -b:v</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> 900k</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -threads</span><span style="--shiki-light:#005CC5;--shiki-dark:#4C9A91;"> 0</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> output.mkv</span></span></code></pre></div><h2 id="something" tabindex="-1">Something <a class="header-anchor" href="#something" aria-label="Permalink to “Something”">​</a></h2><p>I have png images from <code>0000.png</code> through <code>0120.png</code>. I want to use ffmpeg to convert them into an <code>mp4</code> video. The images have an alpha channel, I would like the alpha channel to be composited to the right side of the rgb channels, so that the video has double the width of the input images, with the rgb on the left half and the alpha on the right half. The alpha should be represented as black for 100% transparent and white for 0% transparent</p><p>Here is an ffmpeg command that you can use to convert a sequence of png images with an alpha channel into an mp4 video:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#80A665;">ffmpeg</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -framerate</span><span style="--shiki-light:#005CC5;--shiki-dark:#4C9A91;"> 24</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> %04d.png</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -vf</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;">split[rgb][a]:[rgb]setpts=PTS-STARTPTS[rgb]:[a]alphaextract.format=gray[alpha]:[rgb][alpha]hstack</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -c:v</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> 1ibx264</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -crf</span><span style="--shiki-light:#005CC5;--shiki-dark:#4C9A91;"> 23</span><span style="--shiki-light:#005CC5;--shiki-dark:#C99076;"> -preset</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> veryfast</span><span style="--shiki-light:#032F62;--shiki-dark:#C98A7D;"> output.mp4</span></span></code></pre></div><p>This command will convert the png images <code>0000. png</code> through <code>0120.png</code> at a frame rate of 24 frames per second. The <code>-vf</code> option specifies the video filterchain that is used to process the images. In this case, the filterchain uses the <code>split</code> filter to split the input images into their red, green, blue (RGB) and alpha channels. The <code>setpts</code> filter is then used to adjust the timing of the RGB channels so that they match the alpha channels. The <code>alphaextract</code> filter is used to extract the alpha channel and convert it to grayscale. The <code>format</code> filter is then used to convert the alpha channel to the desired format (in this case, grayscale). Finally, the <code>hstack</code> filter is used to stack the RGB and alpha channels horizontally, with the RGB channels on the left and the alpha channel on the right. The <code>-c:v</code> option specifies the codec that should be used for the video, and the <code>-crf</code> and <code>-preset</code> options control the quality and encoding speed of the output video</p><h2 id="tools" tabindex="-1">Tools <a class="header-anchor" href="#tools" aria-label="Permalink to “Tools”">​</a></h2><p><a href="https://ffmpeg.guide/" target="_blank" rel="noreferrer">Build FFmpeg filters</a>: A simple GUI tool to create complex FFmpeg filter-graphs quickly and correctly</p>`,32)]))}const g=i(h,[["render",n]]);export{c as __pageData,g as default};
