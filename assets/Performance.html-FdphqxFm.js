import{_ as s,r as t,o as r,c as o,b as e,d as a,a as l,e as i}from"./app-jDLxG9B3.js";const c={},p=i(`<h1 id="performance" tabindex="-1"><a class="header-anchor" href="#performance" aria-hidden="true">#</a> Performance</h1><p>Strategies for analyzing Performance problems:</p><ul><li><p>When it&#39;s slow, what is it doing?</p></li><li><p>What is the WHOLE PROGRAM trying to do?</p></li></ul><p>Micro-optimizations such as:</p><ul><li>It always produces the same result: <strong>cache it!</strong></li><li>It is not even required: <strong>remove!</strong></li><li>Best optimization is not to run a certain line at all</li></ul><p>You need the call stack:</p><ul><li>You want to see a stack trace when it runs slow</li><li>What initiated the slow code?</li><li>And why?</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>python <span class="token parameter variable">-m</span> cProfile app.py

<span class="token comment"># or</span>

pip <span class="token function">install</span> pytest-profiling

pytest --profile-svg <span class="token parameter variable">-k</span> <span class="token operator">&lt;</span>keyword<span class="token operator">&gt;</span>


<span class="token comment"># or</span>

py-spy record <span class="token parameter variable">-o</span> profile-svg <span class="token parameter variable">--pid</span> <span class="token number">7</span> <span class="token parameter variable">--subprocesses</span>
</code></pre></div><h2 id="references" tabindex="-1"><a class="header-anchor" href="#references" aria-hidden="true">#</a> References</h2>`,9),h={href:"https://www.youtube.com/watch?v=RRCGywYTsxI",target:"_blank",rel:"noopener noreferrer"};function d(m,u){const n=t("ExternalLinkIcon");return r(),o("div",null,[p,e("ul",null,[e("li",null,[e("a",h,[a("Why is it Slow? Strategies for Solving Performance Issues"),l(n)]),a(": Caleb Hattingh at Kapiche")])])])}const g=s(c,[["render",d],["__file","Performance.html.vue"]]);export{g as default};
