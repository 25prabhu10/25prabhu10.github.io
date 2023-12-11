import{_ as o,r as l,o as r,c as i,b as e,d as n,a as t,e as s}from"./app-jDLxG9B3.js";const d={},c=s(`<h1 id="dotnet-cli" tabindex="-1"><a class="header-anchor" href="#dotnet-cli" aria-hidden="true">#</a> dotnet CLI</h1><p><code>dotnet</code> CLI is the .NET command-line interface (CLI) is a cross-platform tool-chain for developing, building, running, and publishing .NET applications</p><ul><li><p>.Net Framework is a development platform that includes <strong>Common Language Runtime (CLR)</strong> which manages the execution of code, and a Base Class Library (BCL), which provides a rich library of classes to build applications from</p></li><li><p>.NET Standard is more of a specification (standard) for a set of APIs that all .NET platforms could implement. .NET Standard cannot be installed the same way HTML cannot be installed</p></li></ul><p>To check what all options are available in <code>dotnet</code> CLI:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Help</span>
dotnet <span class="token builtin class-name">help</span> new

<span class="token comment"># Specific command help</span>
dotnet new console <span class="token parameter variable">-h</span>
</code></pre></div><h2 id="versions" tabindex="-1"><a class="header-anchor" href="#versions" aria-hidden="true">#</a> Versions</h2><table><thead><tr><th>Tech</th><th>Description</th><th>Host OS</th></tr></thead><tbody><tr><td>.NET (Core)</td><td>Modern, C# 8, 9, 10</td><td>Windows, Linux, macOS, Android, iOS</td></tr><tr><td>.NET Framework</td><td>Legacy C# 7</td><td>Windows only</td></tr><tr><td>Xamarin</td><td>Mobile and desktop apps only</td><td>Android, iOS, macOS</td></tr></tbody></table><h2 id="sdk" tabindex="-1"><a class="header-anchor" href="#sdk" aria-hidden="true">#</a> SDK</h2><p>List all the .NET SDK and Runtime installed:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Lists all installed SDKs and runtimes</span>
dotnet <span class="token parameter variable">--info</span>

<span class="token comment"># Lists all installed SDKs</span>
dotnet --list-sdks

<span class="token comment"># Lists all installed runtimes</span>
dotnet --list-runtimes
</code></pre></div><p>To remove SDK:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>dotnet-core-uninstall remove --all-previews-but-latest <span class="token parameter variable">--sdk</span>
</code></pre></div><h2 id="project" tabindex="-1"><a class="header-anchor" href="#project" aria-hidden="true">#</a> Project</h2><p>You can use any tool to write the source code, some of the IDE&#39;s:</p>`,14),p={href:"https://visualstudio.microsoft.com/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.jetbrains.com/rider/",target:"_blank",rel:"noopener noreferrer"},u=s(`<p>You can use the above tools to create a .NET project or use the dotnet CLI:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Create a console application</span>
dotnet new console <span class="token parameter variable">-o</span> MyApp

<span class="token comment"># Run the application</span>
<span class="token builtin class-name">cd</span> MyApp
<span class="token comment"># Build and run</span>
dotnet run

<span class="token comment"># Clean build artefacts</span>
<span class="token comment"># - obj</span>
<span class="token comment"># - bin</span>
dotnet clean
</code></pre></div><ul><li>Solution: <code>dotnet new sln -o solution-name</code></li><li>Web API: <code>dotnet new webapi -o project-name</code></li><li>Class Library: <code>dotnet new classlib -o project-name</code></li></ul><p><em>Example:</em> Creating a Web API solution</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Create a empty solution</span>
dotnet new sln <span class="token parameter variable">-o</span> Library

<span class="token builtin class-name">cd</span> Library

<span class="token comment"># Create project as per requirements</span>
dotnet new webapi <span class="token parameter variable">-o</span> Library.WebAPI
dotnet new classlib <span class="token parameter variable">-o</span> Library.DAL
dotnet new classlib <span class="token parameter variable">-o</span> Library.DTO
dotnet new xunit <span class="token parameter variable">-o</span> Library.UnitTest

<span class="token comment"># Add all the projects to the solution</span>
dotnet sln <span class="token function">add</span> Library.WebAPI/Library.WebAPI.csproj
dotnet sln <span class="token function">add</span> Library.DAL/Library.DAL.csproj
dotnet sln <span class="token function">add</span> Library.DTO/Library.DTO.csproj
dotnet sln <span class="token function">add</span> Library.UnitTest/Library.UnitTest.csproj

<span class="token comment"># Build solution</span>
dotnet build

<span class="token comment"># Run solution</span>
dotnet run <span class="token parameter variable">--project</span> Library.WebAPI/Library.WebAPI.csproj
</code></pre></div><h2 id="commands" tabindex="-1"><a class="header-anchor" href="#commands" aria-hidden="true">#</a> Commands</h2><h3 id="new" tabindex="-1"><a class="header-anchor" href="#new" aria-hidden="true">#</a> <code>new</code></h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># List all installed templates</span>
dotnet new list
</code></pre></div><h3 id="build" tabindex="-1"><a class="header-anchor" href="#build" aria-hidden="true">#</a> <code>build</code></h3><p>Build command results in 2 folders:</p><ul><li><code>obj</code>: Contains one compiled <em>object</em> file for each source code file. These objects haven&#39;t been linked together into a final executable yet</li><li><code>bin</code>: Contains the <em>binary</em> executable for the application or class library</li></ul><p>Build artefacts:</p><ul><li><p><code>.pdb</code>: Program-Debug Data Base</p><ul><li>It is helps in debugging C# code</li><li>Provides stack trace info when an exceptions occurs</li><li>It stores information such as line numbers, where break points are added</li><li>It should be built for release code and stored on symbol server. It can be shipped in production</li></ul></li></ul>`,13);function b(k,f){const a=l("ExternalLinkIcon");return r(),i("div",null,[c,e("ul",null,[e("li",null,[e("a",p,[n("Visual Studio 2022"),t(a)])]),e("li",null,[e("a",h,[n("Visual Studio Code"),t(a)])]),e("li",null,[e("a",m,[n("JetBrains Rider"),t(a)])])]),u])}const L=o(d,[["render",b],["__file","Dotnet_CLI.html.vue"]]);export{L as default};
