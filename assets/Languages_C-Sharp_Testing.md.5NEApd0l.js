import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.DpC1ZpOZ.js";const y=JSON.parse('{"title":"Testing","description":".NET Testing","frontmatter":{"title":"Testing","description":".NET Testing"},"headers":[],"relativePath":"Languages/C-Sharp/Testing.md","filePath":"Languages/C-Sharp/Testing.md","lastUpdated":1690829560000}'),h={name:"Languages/C-Sharp/Testing.md"},t=n(`<h1 id="testing" tabindex="-1">Testing <a class="header-anchor" href="#testing" aria-label="Permalink to &quot;Testing&quot;">​</a></h1><p>For more details checkout <a href="./../../Concepts/Testing/">Testing</a></p><h2 id="unit-testing" tabindex="-1">Unit Testing <a class="header-anchor" href="#unit-testing" aria-label="Permalink to &quot;Unit Testing&quot;">​</a></h2><p>Unit Testing Frameworks:</p><ul><li><a href="https://nunit.org/" target="_blank" rel="noreferrer">NUnit</a></li><li><a href="https://xunit.net/" target="_blank" rel="noreferrer">xUnit</a></li><li>MSTest</li></ul><p>Mocking Libraries: Handle indirect outputs of SUT</p><ul><li><a href="https://github.com/moq/moq4" target="_blank" rel="noreferrer">Moq</a></li><li>NSubsititue</li><li>FakeItEasy</li><li>Microsoft Fakes</li></ul><p>Assertion Libraries:</p><ul><li><a href="https://fluentassertions.com/introduction" target="_blank" rel="noreferrer">Fluent Assertions</a></li></ul><h3 id="nunit" tabindex="-1">NUnit <a class="header-anchor" href="#nunit" aria-label="Permalink to &quot;NUnit&quot;">​</a></h3><ul><li><p>Setup:</p><div class="language-cs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cs</span><pre class="shiki shiki-themes ayu-dark ayu-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">class</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;"> SomethingTests</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">{</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">    [</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">SetUp</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">]</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">    public</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;"> void</span><span style="--shiki-light:#FFB454;--shiki-dark:#FFB454;"> SetUp</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">()</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">    {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">    }</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">}</span></span></code></pre></div></li><li><p>Test:</p><div class="language-cs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cs</span><pre class="shiki shiki-themes ayu-dark ayu-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">[</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">Test</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">]</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">public</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;"> void</span><span style="--shiki-light:#FFB454;--shiki-dark:#FFB454;"> ShouldReturnSomething</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">()</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">{</span></span>
<span class="line"><span style="--shiki-light:#ACB6BF8C;--shiki-dark:#ACB6BF8C;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // Arrange</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#ACB6BF8C;--shiki-dark:#ACB6BF8C;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // Act</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#ACB6BF8C;--shiki-dark:#ACB6BF8C;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // Assert</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">}</span></span></code></pre></div></li></ul><h3 id="xunit" tabindex="-1">XUnit <a class="header-anchor" href="#xunit" aria-label="Permalink to &quot;XUnit&quot;">​</a></h3><ul><li>Written by the developers of <a href="#nunit">NUnit</a></li><li>Intuitive terminology</li><li>Excellent extensibility</li></ul><p>Elements</p><ul><li><code>[Fact]</code>: is always true</li><li><code>[Theory]</code>: is true with the right data</li><li><code>[InlineData]</code>, <code>[MemberData]</code>, <code>[ClassData]</code>: passing data to a unit test</li><li>Constructor should be used for Set Up</li></ul><p>Parametrized tests: Using <code>[Theory]</code>: represents a suite of tests that execute the same code but have different input arguments.</p><ul><li><code>[InlineData]</code>: Pass data inline</li><li><code>[MemberData]</code>: Fetch data from a static property or method</li><li><code>[ClassData]</code>:</li></ul><p><em>Example:</em></p><div class="language-cs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cs</span><pre class="shiki shiki-themes ayu-dark ayu-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">[</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">Theory</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">]</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">[</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">InlineData</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;">1</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 2</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 1</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">)]</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">[</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">InlineData</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;">1</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 3</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 2</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">)]</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">public</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;"> void</span><span style="--shiki-light:#FFB454;--shiki-dark:#FFB454;"> DiffTest</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">int</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;"> x</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;"> int</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;"> y</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;"> int</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;"> expectedValue</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">)</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">{</span></span>
<span class="line"><span style="--shiki-light:#ACB6BF8C;--shiki-dark:#ACB6BF8C;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // Arrange</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">    var</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;"> calculator</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> =</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> new</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;"> MathFormulas</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">()</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#ACB6BF8C;--shiki-dark:#ACB6BF8C;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // Act</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">    var</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;"> result</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> =</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> calculator</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">.</span><span style="--shiki-light:#FFB454;--shiki-dark:#FFB454;">Diff</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(x</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> y)</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#ACB6BF8C;--shiki-dark:#ACB6BF8C;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // Assert</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">    Assert</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">.</span><span style="--shiki-light:#FFB454;--shiki-dark:#FFB454;">Equal</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(expectedValue</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> result)</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">}</span></span></code></pre></div><div class="language-cs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cs</span><pre class="shiki shiki-themes ayu-dark ayu-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#ACB6BF8C;--shiki-dark:#ACB6BF8C;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// Create test data</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">public</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;"> static</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> IEnumerable</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">&lt;</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">object</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">[]</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">&gt;</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;"> Data</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> =&gt;</span></span>
<span class="line"><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">        new</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;"> List</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">&lt;</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">object</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">[]&gt;</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">        {</span></span>
<span class="line"><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">            new</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;"> object</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">[] { </span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;">1</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 2</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 3</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">}</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span></span>
<span class="line"><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">            new</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;"> object</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">[] { </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">-</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;">4</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> -</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;">6</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> -</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;">10</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">}</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span></span>
<span class="line"><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">            new</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;"> object</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">[] { </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">-</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;">2</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 2</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 0</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">}</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span></span>
<span class="line"><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">            new</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;"> object</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">[] { </span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">int</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">.</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">MinValue</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> -</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;">1</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;"> int</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">.</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">MacValue}</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">        }</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">[</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">Theory</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">]</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">[</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">MemberData</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">nameof</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(MathFormulas</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">.</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">Data)</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;"> MemberType</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> =</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> nameof</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(MathFormulas))]</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">public</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;"> void</span><span style="--shiki-light:#FFB454;--shiki-dark:#FFB454;"> AddTest</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">int</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;"> x</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;"> int</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;"> y</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;"> int</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;"> expectedValue</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">)</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">{</span></span>
<span class="line"><span style="--shiki-light:#ACB6BF8C;--shiki-dark:#ACB6BF8C;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // Arrange</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">    var</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;"> calculator</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> =</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> new</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;"> MathFormulas</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">()</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#ACB6BF8C;--shiki-dark:#ACB6BF8C;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // Act</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">    var</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;"> result</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> =</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> calculator</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">.</span><span style="--shiki-light:#FFB454;--shiki-dark:#FFB454;">Add</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(x</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> y)</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#ACB6BF8C;--shiki-dark:#ACB6BF8C;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // Assert</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">    Assert</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">.</span><span style="--shiki-light:#FFB454;--shiki-dark:#FFB454;">Equal</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(expectedValue</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> result)</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">}</span></span></code></pre></div><div class="language-cs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cs</span><pre class="shiki shiki-themes ayu-dark ayu-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#ACB6BF8C;--shiki-dark:#ACB6BF8C;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// Create test data</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">public</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;"> IEnumerator</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">&lt;</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">object</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">[]&gt; </span><span style="--shiki-light:#FFB454;--shiki-dark:#FFB454;">GetEnumerator</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">()</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">{</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">    yield</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;"> return</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> new</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;"> object</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">[] { </span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;">1</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 2</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 3</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">}</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">    yield</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;"> return</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> new</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;"> object</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">[] { </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">-</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;">4</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> -</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;">6</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> -</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;">10</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">}</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">    yield</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;"> return</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> new</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;"> object</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">[] { </span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">-</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;">2</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 2</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;"> 0</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">}</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">    yield</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;"> return</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> new</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;"> object</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">[] { </span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">int</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">.</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">MinValue</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> -</span><span style="--shiki-light:#D2A6FF;--shiki-dark:#D2A6FF;">1</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;"> int</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">.</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">MacValue}</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">IEnumerator IEnumerable</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">.</span><span style="--shiki-light:#FFB454;--shiki-dark:#FFB454;">GetEnumerator</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">() =</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">&gt;</span><span style="--shiki-light:#FFB454;--shiki-dark:#FFB454;"> GetEnumerator</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">()</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">[</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">Theory</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">]</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">[</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;">ClassData</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">nameof</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(MathFormulas))]</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">public</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;"> void</span><span style="--shiki-light:#FFB454;--shiki-dark:#FFB454;"> AddTest</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">int</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;"> x</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;"> int</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;"> y</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;"> int</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;"> expectedValue</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">)</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">{</span></span>
<span class="line"><span style="--shiki-light:#ACB6BF8C;--shiki-dark:#ACB6BF8C;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // Arrange</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">    var</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;"> calculator</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> =</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> new</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;"> MathFormulas</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">()</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#ACB6BF8C;--shiki-dark:#ACB6BF8C;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // Act</span></span>
<span class="line"><span style="--shiki-light:#FF8F40;--shiki-dark:#FF8F40;">    var</span><span style="--shiki-light:#59C2FF;--shiki-dark:#59C2FF;"> result</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;"> =</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> calculator</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">.</span><span style="--shiki-light:#FFB454;--shiki-dark:#FFB454;">Add</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(x</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> y)</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#ACB6BF8C;--shiki-dark:#ACB6BF8C;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // Assert</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">    Assert</span><span style="--shiki-light:#F29668;--shiki-dark:#F29668;">.</span><span style="--shiki-light:#FFB454;--shiki-dark:#FFB454;">Equal</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">(expectedValue</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">,</span><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;"> result)</span><span style="--shiki-light:#BFBDB6B3;--shiki-dark:#BFBDB6B3;">;</span></span>
<span class="line"><span style="--shiki-light:#BFBDB6;--shiki-dark:#BFBDB6;">}</span></span></code></pre></div><p>Skip Tests:</p><ul><li><code>[Fact(Skip = &quot;the reason&quot;)]</code></li><li><code>[Theory(Skip = &quot;the reason&quot;)]</code></li></ul>`,23),l=[t];function k(B,F,p,e,r,d){return a(),i("div",null,l)}const D=s(h,[["render",k]]);export{y as __pageData,D as default};