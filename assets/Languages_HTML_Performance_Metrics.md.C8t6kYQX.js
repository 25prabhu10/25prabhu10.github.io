import{_ as e,c as t,o as a,a4 as s}from"./chunks/framework.DpC1ZpOZ.js";const m=JSON.parse('{"title":"Performance Metrics","description":"User-Centric Performance Metrics","frontmatter":{"title":"Performance Metrics","description":"User-Centric Performance Metrics"},"headers":[],"relativePath":"Languages/HTML/Performance_Metrics.md","filePath":"Languages/HTML/Performance_Metrics.md","lastUpdated":1667218623000}'),n={name:"Languages/HTML/Performance_Metrics.md"},i=s(`<h1 id="performance-metrics" tabindex="-1">Performance Metrics <a class="header-anchor" href="#performance-metrics" aria-label="Permalink to &quot;Performance Metrics&quot;">​</a></h1><table tabindex="0"><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Is it happening?</td><td>Did the navigation start successfully? Has the server responded?</td></tr><tr><td>Is it useful?</td><td>Has enough content rendered that users can engage with it?</td></tr><tr><td>Is it usable?</td><td>Can users interact with the page, or is it busy?</td></tr><tr><td>Is it delightful?</td><td>Are the interactions smooth and natural, free of lag and jank?</td></tr></tbody></table><h2 id="types-of-metrics" tabindex="-1">Types of Metrics <a class="header-anchor" href="#types-of-metrics" aria-label="Permalink to &quot;Types of Metrics&quot;">​</a></h2><ul><li><p><strong>Perceived load speed</strong>: how quickly a page can load and render all of its visual elements to the screen</p></li><li><p><strong>Load responsiveness</strong>: how quickly a page can load and execute any required JavaScript code in order for components to respond quickly to user interaction</p></li><li><p><strong>Runtime responsiveness</strong>: after page load, how quickly can the page respond to user interaction</p></li><li><p><strong>Visual stability</strong>: do elements on the page shift in ways that users don&#39;t expect and potentially interfere with their interactions?</p></li><li><p><strong>Smoothness</strong>: do transitions and animations render at a consistent frame rate and flow fluidly from one state to the next?</p></li></ul><h2 id="web-vitals" tabindex="-1">Web Vitals <a class="header-anchor" href="#web-vitals" aria-label="Permalink to &quot;Web Vitals&quot;">​</a></h2><p>Representation of web vitals:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes ayu-dark ayu-dark vp-code" tabindex="0"><code><span class="line"><span>Time (seconds)</span></span>
<span class="line"><span>0   1   2   3   4   5   6   7   8   9   10</span></span>
<span class="line"><span>|---|---|---|---|---|---|---|---|---|---|</span></span>
<span class="line"><span>|   |   |   |   |   |   |   |   |   |   |</span></span>
<span class="line"><span>↑   ↑   ↑   ↑       ↑       ↑           ↑</span></span>
<span class="line"><span>TTFB|   |   |       |       |           |</span></span>
<span class="line"><span>    FCP |   |       |       |           |</span></span>
<span class="line"><span>        LCP |       |       |           |</span></span>
<span class="line"><span>            FID     |       |           |</span></span>
<span class="line"><span>                    TTI     |           |</span></span>
<span class="line"><span>                            CLS         INP</span></span>
<span class="line"><span>    |----------------TBT----------------|</span></span>
<span class="line"><span></span></span>
<span class="line"><span>TTFB: Time to First Byte</span></span>
<span class="line"><span>FCP: First Contentful Paint</span></span>
<span class="line"><span>LCP: Largest Contentful Paint</span></span>
<span class="line"><span>FID: First Input Delay</span></span>
<span class="line"><span>TTI: Time to Interactive</span></span>
<span class="line"><span>CLS: Cumulative Layout Shift</span></span>
<span class="line"><span>INP: Interaction to Next Paint</span></span>
<span class="line"><span>TBT: Total Blocking Time</span></span></code></pre></div><ol><li><p><strong>Time-to-First-Byte (TTFB)</strong>: measures the time it takes for the network to respond to a user request with the first byte of a resource</p><ul><li>This metric helps identify when a web server is too slow to respond to requests</li><li><strong>Ideal Value</strong>: Less than 600 milliseconds</li></ul></li><li><p><strong>First-Contentful-Paint (FCP)</strong>: measures the time from when the page starts loading to when any part of the page&#39;s content is rendered on the screen</p><ul><li>The time when request content (header, article, etc.) becomes visible</li><li>FCP measures when the user first navigates to the page and when any part of the page&#39;s content is rendered on the screen</li><li><strong>Ideal Value</strong>: 1.8 seconds or faster</li></ul></li><li><p><strong>Largest-Contentful-Paint (LCP)</strong>: measures the time from when the page starts loading to when the largest text block or image element is rendered on the screen</p><ul><li>It represents how quickly the main content of a web page is loaded</li><li>Specifically, LCP measures the time from when the user initiates loading the page until the largest image or text block is rendered within the viewport</li><li><strong>Ideal Value</strong>: 2.5 seconds or faster</li></ul></li><li><p><strong>First-Input-Delay (FID)</strong>: measures the time from when a user first interacts with your site (i.e. when they click a link, tap a button, or use a custom, JavaScript-powered control) to the time when the browser is actually able to respond to that interaction</p><ul><li><strong>Ideal Value</strong>: Less than 100 milliseconds</li></ul></li><li><p><strong>Cumulative-Layout-Shift (CLS)</strong>: measures the cumulative score of all unexpected layout shifts that occur between when the page starts loading and when its lifecycle state changes to hidden</p><ul><li><strong>Ideal Value</strong>: Less than 0.1</li></ul></li><li><p><strong>Interaction-to-Next-Paint (INP)</strong>: measures the latency of every tap, click, or keyboard interaction made with the page, and-based on the number of interactions-selects the worst interaction latency of the page (or close to the highest) as a single, representative value to describe a page&#39;s overall responsiveness</p></li><li><p><strong>Time-to-Interactive (TTI)</strong>: measures the time from when the page starts loading to when it&#39;s visually rendered, its initial scripts (if any) have loaded, and it&#39;s capable of reliably responding to user input quickly</p></li><li><p><strong>Total-Blocking-Time (TBT)</strong>: measures the total amount of time between FCP and TTI where the main thread was blocked for long enough to prevent input responsiveness</p><ul><li>Calculates how long the main thread is blocked during page load</li><li>The user cannot interact with a page when the main thread is blocked</li></ul></li></ol><p>Visual Timeline Description:</p><ol><li><p>User Initiates Load:</p><ul><li>User clicks a link or enters a URL</li></ul></li><li><p>Time to First Byte (TTFB):</p><ul><li>The browser sends a request to the server and starts receiving the first byte of the response</li></ul></li><li><p>First Contentful Paint (FCP):</p><ul><li>The browser renders the first visible element on the screen</li></ul></li><li><p>Largest Contentful Paint (LCP):</p><ul><li>The largest element in the viewport is rendered, usually a large image or a significant text block</li></ul></li><li><p>First Input Delay (FID):</p><ul><li>The user interacts with the page for the first time, and the browser responds to the interaction</li></ul></li><li><p>Cumulative Layout Shift (CLS):</p><ul><li>Throughout the page load, any unexpected layout shifts are measured and summed up</li></ul></li></ol><p>Other Matrices:</p><ul><li>User Timing API</li><li>Long Tasks API</li><li>Element Timing API</li><li>Navigation Timing API</li><li>Resource Timing API</li><li>Server timing</li></ul><h3 id="core-web-vitals" tabindex="-1">Core Web Vitals <a class="header-anchor" href="#core-web-vitals" aria-label="Permalink to &quot;Core Web Vitals&quot;">​</a></h3><p>A subset of Web Vitals. These are three metrics that tend to have the largest impact on user experience:</p><ol><li>Largest Contentful Paint (LCP): how fast the main content on a website loads</li><li>First Input Delay (FID): how quickly can a visitor start interacting with a site</li><li>Cumulative Layout Shift (CLS): how visually stable is the website layout as content loads</li></ol><h2 id="real-user-monitoring-rum" tabindex="-1">Real User Monitoring (RUM) <a class="header-anchor" href="#real-user-monitoring-rum" aria-label="Permalink to &quot;Real User Monitoring (RUM)&quot;">​</a></h2><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://web.dev/articles/vitals" target="_blank" rel="noreferrer">Web Vitals</a></li></ul><p>Websites to test web page performance:</p><ul><li><p><a href="https://web.dev/measure/" target="_blank" rel="noreferrer">Google Lighthouse</a> - Run tests on your web page online, you can use Chrome dev tools to run lighthouse locally</p></li><li><p><a href="https://www.webpagetest.org/" target="_blank" rel="noreferrer">WEBPAGETEST</a> - Run tests on your web page</p></li><li><p><a href="https://httparchive.org/" target="_blank" rel="noreferrer">httparchive</a> - Test reports of millions of pages</p></li></ul>`,20),r=[i];function l(o,p,c,h,u,d){return a(),t("div",null,r)}const f=e(n,[["render",l]]);export{m as __pageData,f as default};