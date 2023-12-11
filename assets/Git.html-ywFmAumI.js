import{_ as o,a as i}from"./git-hooks-wHbejHwL.js";import{_ as c,r as l,o as p,c as r,b as a,d as n,a as s,e as t}from"./app-jDLxG9B3.js";const d={},u=t(`<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h1><p>It is a <strong>distributed Version Control System (VCS)</strong>. Version control is a way to save changes over time without overwriting previous versions (Version Control is a system which records the changes made to a file so that you can recall a specific version later).</p><p>It helps in <strong>tracking changes in the project</strong> and <strong>coordinating work</strong> on those files among multiple people.</p><ul><li>VCS also know as Source Code Management (SCM)</li></ul><p>Types of Version Control Systems:</p><ol><li><p><strong>Local</strong>: It allows you to copy files into another directory and rename it (For example, project.1.1). This method is error-prone and introduces redundancy.</p></li><li><p><strong>Centralized</strong>: All version files are present in a single central server. For example, CVS, SVN, and Perforce.</p></li><li><p><strong>Distributed</strong>: All changes are available in the server as well as in local machines. Being distributed means that every developer working with a Git repository has a copy of that entire repository. For example, <em>Git</em> and <em>Mercurial</em>.</p></li></ol><h2 id="history" tabindex="-1"><a class="header-anchor" href="#history" aria-hidden="true">#</a> History</h2><p>Old VCS that predate Git:</p><ul><li>Source Code Control System (SCCS): <ul><li>1972: closed source, free with Unix</li><li>Stored original version and sets of changes</li></ul></li><li>Revision Control System (RCS): <ul><li>1982: open source</li><li>Stored latest version and sets of changes</li></ul></li><li>Concurrent Version System (CVS): <ul><li>1986-1990: open source</li><li>Multiple files, entire project</li><li>Multi-user repositories</li></ul></li><li>Apache Subversion (SVN): <ul><li>2000: open source</li><li>Track text and images</li><li>Track file changes collectively (track directory)</li></ul></li><li>BitKeeper SCM: <ul><li>2000: closed source, proprietary</li><li>Distributed version control</li></ul></li><li>Git: <ul><li>April 2005</li><li>Linus Tovalds</li><li>Distributed version control</li><li>Open source and free software</li><li>Faster than other SCMs (100 times in some cases)</li><li>Better safeguards against data corruption</li></ul></li></ul><h3 id="distributed-version-control" tabindex="-1"><a class="header-anchor" href="#distributed-version-control" aria-hidden="true">#</a> Distributed Version Control</h3><ul><li>Different users maintain their own repositories</li><li>No central repository</li><li>Changes are stored as change sets: <ul><li>Track changes, not versions</li><li>Different from CVS and SVN, which tracked versions</li><li>Change sets can be exchanged between repositories</li><li>&quot;Merge in change sets&quot; or &quot;apply patches&quot;</li></ul></li><li>No single master repository</li><li>Many working copies</li><li>No need to communicate with a central server</li><li>No network access required</li><li>No single failure point</li></ul><h2 id="git-internals" tabindex="-1"><a class="header-anchor" href="#git-internals" aria-hidden="true">#</a> Git Internals</h2><p>Git uses 3 Tree architecture:</p><ul><li>Repository</li><li>Staging Index</li><li>Working</li></ul><p>These 3 stages are:</p><table><thead><tr><th>#</th><th>Stages</th><th>Details</th></tr></thead><tbody><tr><td>1</td><td>Working Directory</td><td>Un-tracked new files and modified directories are found here.</td></tr><tr><td>2</td><td>Staging Area</td><td>Things we want to commit and ignore which we don&#39;t want.</td></tr><tr><td>3</td><td>Remote Repository</td><td><code>.git</code> directory(Repository)</td></tr></tbody></table><p>The <code>.git</code> folder contains different files and folders:</p><ul><li><code>hooks/</code>:</li><li><code>info/</code>:</li><li><code>objects/</code>:</li><li><code>ref/</code>:</li><li><code>config</code>: file contains configurations specific to that repository</li><li><code>description</code>:</li><li><code>HEAD</code>: A link to a point in</li><li><code>logs/</code>: Created after first commit,</li><li><code>index</code>: Created after first commit,</li><li><code>COMMIT_EDITMSG</code>: Created after first commit,</li></ul><p>The <code>objects</code> folder consists of 4 types of objects:</p><ol><li><em>Blob</em> (Binary large object): Copy of contents of the file.</li><li><em>Tree</em></li><li><em>Commit</em>: Creates a snapshot of the project at a given point.</li><li><em>Annotated tag</em></li></ol><ul><li><p><code>git cat-file</code>: Provide content or type and size information for repository objects:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># find the type of object</span>
<span class="token function">git</span> cat-file <span class="token parameter variable">-t</span> <span class="token punctuation">[</span>commitSHA<span class="token punctuation">]</span>
</code></pre></div></li></ul><h3 id="repositories" tabindex="-1"><a class="header-anchor" href="#repositories" aria-hidden="true">#</a> Repositories</h3><p>When working on a Git project most of the time the user will have to deal with two repositories:</p><ul><li><p><em>Remote Repository</em>: They are versions of your project that are hosted on the Internet or network somewhere.</p></li><li><p><em>Local Repository</em>: It is a copy of the remote repository that exists on the user&#39;s workstation. This is the repository where the user works on the project.</p></li></ul><h3 id="head" tabindex="-1"><a class="header-anchor" href="#head" aria-hidden="true">#</a> Head</h3><p><strong>HEAD</strong> is a reference variable that always <strong>points to the tip of your current (working) branch, that is, recent commit of your current branch</strong>.</p><ul><li><p>The <code>HEAD</code> file inside the <code>.git/</code> directory holds the reference value</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> .git/HEAD

<span class="token comment"># output</span>
<span class="token comment"># ref: refs/heads/master</span>

<span class="token function">cat</span> refs/heads/master
<span class="token comment"># returns a SHA value which is the</span>
<span class="token comment"># SHA of a commit to which HEAD currently points to</span>
</code></pre></div></li></ul><p>HEAD can be used with the following symbols to refer to other commits:</p><ul><li><em>Tilde symbol (<code>~</code>)</em>: Used to point to the previous commits from base HEAD</li><li><em>Caret symbol (<code>^</code>)</em>: Used to point to the immediate parent commit from the current referenced commit</li></ul><p>Usage:</p><ul><li><strong>HEAD:</strong> current branch</li><li><strong>HEAD^:</strong> parent of HEAD</li><li><strong>HEAD~4:</strong> the great-great grandparent of HEAD</li></ul><p>The git commands that require commit-hash will default to HEAD if no commit-hash is provided.</p><h3 id="dot-operators" tabindex="-1"><a class="header-anchor" href="#dot-operators" aria-hidden="true">#</a> Dot Operators</h3><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p>Git can be installed on the most common operating systems like Windows, Mac, and Linux.</p>`,35),h={href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"},m=t(`<h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><p>All the Git configurations are stored in a file:</p><ol><li><p>The <strong>configurations specific to the users</strong> resides in home directory as <code>~/.gitconfig</code> or <code>~/.config/git/config</code> file.</p><ul><li>To add configurations to this file we pass <code>--global</code> option in the CLI.</li></ul></li><li><p>The <strong>configurations specific to a repository</strong> resides as <code>.git/config</code> file.</p><ul><li>To add configurations to this file we pass <code>--local</code> option or just <code>git config</code> in the CLI.</li></ul></li><li><p>The <strong>configurations specific to that machine</strong> resides as <code>/etc/gitconfig</code> file.</p><ul><li>To add configurations to this file we pass <code>--system</code> option in the CLI.</li></ul></li></ol><p>The <strong>priority</strong> in which these configuration files are used is: <strong>local</strong> &gt; <strong>global</strong> &gt; <strong>system</strong></p><p>Git config commands:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># list all configurations</span>
<span class="token function">git</span> config <span class="token parameter variable">--list</span>

<span class="token comment"># check specific configuration</span>
<span class="token function">git</span> config <span class="token punctuation">[</span>config name<span class="token punctuation">]</span>
<span class="token function">git</span> config user.name

<span class="token comment"># check in which file a specific configuration resides</span>
<span class="token function">git</span> config --show-origin <span class="token punctuation">[</span>config name<span class="token punctuation">]</span>
<span class="token function">git</span> config --show-origin user.name
</code></pre></div><ul><li><p>For the <strong>initial setup</strong> the user must provide their identity such as full name and email address, this is required as it helps in identifying the person making the commits (saving changes).</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># add username and email</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;First Last&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;myemail@domain.com&quot;</span>

<span class="token comment"># change the core editor</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> core.editor <span class="token punctuation">[</span>editor name<span class="token punctuation">]</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> core.editor <span class="token function">vim</span>

<span class="token comment"># colorize user interface (might be on by default) [true, auto]</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> color.ui <span class="token boolean">true</span>
</code></pre></div></li></ul><p>We can modify configurations from the CLI or by directly modifying the configuration file.</p><ul><li><p>Add this to automatically create a new upstream branch for your local branch</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> push.autoSetupRemote <span class="token boolean">true</span>
</code></pre></div></li></ul><div class="custom-container tip"><p class="custom-container-title">WINDOWS</p><p>In windows Git looks for <code>.gitconfig</code> file in <code>$HOME</code> directory (<code>C:\\Users\\$USER</code>).</p></div><h3 id="ssh" tabindex="-1"><a class="header-anchor" href="#ssh" aria-hidden="true">#</a> SSH</h3><p>Set-up SSH keys for authenticating to a remote repository hosting service:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-b</span> <span class="token number">4096</span> <span class="token parameter variable">-C</span> <span class="token string">&quot;string&quot;</span>
</code></pre></div><h2 id="git-commands" tabindex="-1"><a class="header-anchor" href="#git-commands" aria-hidden="true">#</a> Git Commands</h2><p>Git was initially a <strong>toolkit for a VCS</strong> and hence consists of a number of subcommands divided into:</p><ol><li><p><em>Plumbing</em>: Subcommands that do low-level work and were designed to be chained together UNIX-style or called from scripts.</p></li><li><p><em>Porcelain</em>: More user-friendly commands.</p></li></ol><h3 id="help" tabindex="-1"><a class="header-anchor" href="#help" aria-hidden="true">#</a> Help</h3><p>You can get information about any of the Git commands by:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token builtin class-name">help</span> <span class="token punctuation">[</span>git <span class="token builtin class-name">command</span> name<span class="token punctuation">]</span>
<span class="token function">git</span> <span class="token builtin class-name">help</span> config

<span class="token comment"># or</span>

<span class="token function">git</span> <span class="token punctuation">[</span>git <span class="token builtin class-name">command</span> name<span class="token punctuation">]</span> <span class="token parameter variable">--help</span>
<span class="token function">git</span> config <span class="token parameter variable">--help</span>

<span class="token comment"># or</span>

<span class="token function">man</span> git-<span class="token punctuation">[</span>command name<span class="token punctuation">]</span>
<span class="token function">man</span> git-config
</code></pre></div><h3 id="initialize-git" tabindex="-1"><a class="header-anchor" href="#initialize-git" aria-hidden="true">#</a> Initialize Git</h3><p>This command can be used:</p><ul><li>To create a new project with Git</li><li>Or initializes the current folder to track its changes by Git:</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># transform the current directory into a git repository</span>
<span class="token function">git</span> init

<span class="token comment"># transform a directory in the current path into a git repository</span>
<span class="token function">git</span> init <span class="token punctuation">[</span>directory name<span class="token punctuation">]</span>

<span class="token comment"># create a new bare repository</span>
<span class="token function">git</span> init <span class="token parameter variable">--bare</span>

<span class="token comment"># create shared repository</span>
<span class="token function">git</span> init <span class="token parameter variable">--bare</span> <span class="token parameter variable">--shared</span><span class="token operator">=</span>all
</code></pre></div><p>The above command creates a hidden <code>.git</code> folder. That directory stores all of the <a href="#git-internals">objects and refs</a> that Git uses and creates as a part of your project&#39;s history.</p><p>This hidden <code>.git</code> directory is what separates a regular directory from a Git repository.</p><h3 id="clone-repository" tabindex="-1"><a class="header-anchor" href="#clone-repository" aria-hidden="true">#</a> Clone Repository</h3><p>Git clone gets the complete project from remote to your local machine (used to create a copy of a specific repository or branch within a repository).</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone <span class="token punctuation">[</span>repo https url/ssh link<span class="token punctuation">]</span>

<span class="token comment"># you can also provide your own repo name</span>
<span class="token function">git</span> clone <span class="token punctuation">[</span>repo https url/ssh link<span class="token punctuation">]</span> <span class="token punctuation">[</span>repo name<span class="token punctuation">]</span>

<span class="token comment"># clone a repository but without the ability to edit any of the files</span>
<span class="token function">git</span> clone <span class="token parameter variable">--mirror</span>

<span class="token comment"># clone only a single branch</span>
<span class="token function">git</span> clone --single-branch
</code></pre></div><p><code>git init</code> vs <code>git clone</code>:</p><ul><li><p><code>git init</code>: One Person Starting a New Repository Locally or Initializing Existing Folder</p></li><li><p><code>git clone</code>: The Remote Already Exists</p></li></ul><h3 id="remote-repository" tabindex="-1"><a class="header-anchor" href="#remote-repository" aria-hidden="true">#</a> Remote Repository</h3><p>When we clone a remote repository, a reference of that remote repository will be added to your local repository configuration. This reference is used to communicate changes between the local repository and the remote repository.</p><ul><li>URL can be HTTPS or SSH</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># list all remote connections</span>
<span class="token function">git</span> remote

<span class="token comment"># list all remote connections with URL</span>
<span class="token function">git</span> remote <span class="token parameter variable">-v</span>

<span class="token comment"># add new remote connection</span>
<span class="token function">git</span> remote <span class="token function">add</span> <span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token punctuation">[</span>URL<span class="token punctuation">]</span>

<span class="token comment"># remove a remote connection</span>
<span class="token function">git</span> remote remove <span class="token punctuation">[</span>name<span class="token punctuation">]</span>

<span class="token comment"># change remote connection URL</span>
<span class="token function">git</span> remote set-url <span class="token punctuation">[</span>URL<span class="token punctuation">]</span>

<span class="token comment"># rename a remote connection</span>
<span class="token function">git</span> remote <span class="token function">rename</span> <span class="token punctuation">[</span>old-name<span class="token punctuation">]</span> <span class="token punctuation">[</span>new-name<span class="token punctuation">]</span>
</code></pre></div><p>When a repo is clone a default remote URL is added with the name <code>origin</code>. And if the repository has multiple remotes then typically the new URL is added with the name <code>upstream</code>.</p><h3 id="remove-git-tracking" tabindex="-1"><a class="header-anchor" href="#remove-git-tracking" aria-hidden="true">#</a> Remove Git Tracking</h3><p>To remove Git tracking from the project, just delete the hidden <code>.git</code> folder.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-rf</span> .git
</code></pre></div><div class="custom-container danger"><p class="custom-container-title">NOTE</p><p>If you remove this folder you will permanently loose the project history, unless you have a remote copy.</p></div><h3 id="status" tabindex="-1"><a class="header-anchor" href="#status" aria-hidden="true">#</a> Status</h3><p>Displays the current state of the staging area and the working directory, that is, which files are added/removed/modified in the working directory and which files are staged.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> status

<span class="token comment"># give output in short format</span>
<span class="token function">git</span> status <span class="token parameter variable">-s</span>

<span class="token comment"># &quot;verbose&quot; output</span>
<span class="token function">git</span> status <span class="token parameter variable">-v</span>

<span class="token comment"># get short status with branch name</span>
<span class="token function">git</span> status <span class="token parameter variable">-sb</span>
</code></pre></div><h3 id="add-file" tabindex="-1"><a class="header-anchor" href="#add-file" aria-hidden="true">#</a> Add File</h3><p>Adds new or changed files in your working directory to the Git staging area. If you have added a new file, Git starts tracking that file.</p><ul><li><p>Staging area is like a rough draft space, where files are placed for the next <a href="#commit">commit</a></p></li><li><p>You can select all files, a directory, specific files, or even specific parts of a file for staging and committing.</p></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token punctuation">[</span>filename<span class="token punctuation">]</span>

<span class="token comment"># add the entire directory recursively,</span>
<span class="token comment"># including files whose names begin with a dot</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>

<span class="token comment"># stage modified and deleted files only, not new files</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-u</span>

<span class="token comment"># interactively stage hunks of changes (patch)</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-p</span>
</code></pre></div><p>Add empty directory, as Git ignores empty directories:</p><ul><li>Add a dot file inside the directory: <code>.gitkeep</code></li></ul><h4 id="interactive-staging" tabindex="-1"><a class="header-anchor" href="#interactive-staging" aria-hidden="true">#</a> Interactive Staging</h4><ul><li>Stage changes interactively</li><li>Allows staging portions of changed files</li><li>Helps to make smaller, focused commits</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">--interactive</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-i</span>
</code></pre></div><p>Patch Mode:</p><ul><li>Allows staging portions of a changed file</li><li>&quot;Hunks&quot;: an area where two files differ</li><li>Hunks can be staged, skipped, or split into smaller hunks</li></ul><p>Split a Hunk (automatically):</p><ul><li>Hunks can contain multiple changes</li><li>Tell Git to try to split a hunk further</li><li>Requires one or more unchanged lines between changes</li></ul><p>Edit a Hunk (split manually):</p><ul><li>Hunk can be edited manually</li><li>Most useful when a hunk cannot be split automatically</li><li>Diff-style line prefixes: <code>+</code>, <code>-</code>, <code>#</code>, <code>space</code></li></ul><h3 id="commit" tabindex="-1"><a class="header-anchor" href="#commit" aria-hidden="true">#</a> Commit</h3><p>Create a commit, which is like a snapshot of your repository. These commits are snapshots of your entire repository at specific times.</p><ul><li><p>Make new commits often, based around logical units of change.</p></li><li><p>Over time, commits should tell a story of the history of your repository and how it came to be the way that it currently is.</p></li><li><p>Commits include lots of metadata in addition to the contents and message, like the author, timestamp, and more.</p></li><li><p>Each commit contains an unique hash number.</p></li><li><p>To view the details of a commit including the metadata and the changes made in the commit use the <a href="#show">git show</a> command.</p></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># start commit process</span>
<span class="token function">git</span> commit

<span class="token comment"># include commit message and body at the same time</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token punctuation">[</span>commit message<span class="token punctuation">]</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token punctuation">[</span>commit message<span class="token punctuation">]</span> <span class="token parameter variable">-m</span> <span class="token punctuation">[</span>commit body<span class="token punctuation">]</span>

<span class="token comment"># interactively commit hunks of changes (patch)</span>
<span class="token function">git</span> commit <span class="token parameter variable">-p</span>

<span class="token comment"># replace the most recent commit with a new commit</span>
<span class="token function">git</span> commit <span class="token parameter variable">--amend</span>

<span class="token comment"># amend commit with new message</span>
<span class="token comment"># if no file changes are there this will just update the commit message</span>
<span class="token function">git</span> commit <span class="token parameter variable">--amend</span> <span class="token parameter variable">-m</span> <span class="token string">&quot;NEW MESSAGE&quot;</span>
</code></pre></div><p>Git commit amend should be used only if:</p><ul><li>That commit hasn&#39;t been pushed to the remote yet</li><li>There is a spelling error in the commit message</li><li>It doesn&#39;t contain the changes that you&#39;d like to contain</li></ul><div class="custom-container danger"><p class="custom-container-title">NOTE</p><p>Amending commits is not advisable. It changes the commit-hash and hence changing the history.</p></div><p>Make Atomic commits:</p><ul><li>Small commits</li><li>Only affect a single aspect</li><li>Easier to understand, to work with, and to find bugs</li><li>Improves collaboration</li></ul><p>Commit best practice:</p><ul><li><p>Add the <em>right</em> changes</p></li><li><p>Compose a <em>good commit message</em>:</p><ul><li><p>Subject (50 chars): concise summary of what happened</p></li><li><p>Body (150 chars): mode detailed explanation:</p><ul><li>What is now different than before?</li><li>What&#39;s the reason for the change?</li><li>Is there anything to watch out for/anything particularly remarkable?</li></ul></li></ul></li></ul>`,68),g=a("em",null,"Example:",-1),k={href:"https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit",target:"_blank",rel:"noopener noreferrer"},f=t(`<div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;type&gt;(&lt;scope&gt;): &lt;short summary&gt;
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: animations|bazel|benchpress|common|compiler|compiler-cli|core|
  │                          elements|forms|http|language-service|localize|platform-browser|
  │                          platform-browser-dynamic|platform-server|router|service-worker|
  │                          upgrade|zone.js|packaging|changelog|docs-infra|migrations|ngcc|ve|
  │                          devtools
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
</code></pre></div><p>Types:</p><ul><li><code>build</code>: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)</li><li><code>ci</code>: Changes to our CI configuration files and scripts (examples: CircleCi, SauceLabs)</li><li><code>docs</code>: Documentation only changes</li><li><code>feat</code>: A new feature</li><li><code>fix</code>: A bug fix</li><li><code>perf</code>: A code change that improves performance</li><li><code>refactor</code>: A code change that neither fixes a bug nor adds a feature</li><li><code>test</code>: Adding missing tests or correcting existing tests</li></ul><h3 id="pull" tabindex="-1"><a class="header-anchor" href="#pull" aria-hidden="true">#</a> Pull</h3><p>It updates your current local working branch and all of the remote tracking branches.</p><ul><li><code>git pull</code> is a combination of <code>git fetch</code> + <code>git merge</code>, updates some parts of your local repository with the changes from the remote repository.</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># update local with commits from remote</span>
<span class="token comment"># (merge is used)</span>
<span class="token function">git</span> pull

<span class="token comment"># update from a specific remote branch</span>
<span class="token function">git</span> pull <span class="token parameter variable">--force</span>

<span class="token comment"># fetch all remotes</span>
<span class="token function">git</span> pull <span class="token parameter variable">--all</span>
</code></pre></div><ul><li>Run <code>git pull</code> regularly</li></ul><p>Pull Rebase:</p><ul><li>Fetch from remote, then rebase instead of merging</li><li>Keeps history cleaner by reducing merge commits</li><li>Only use on local commits not shared to a remote</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># update but rewrite history so any local commits occur after all new commits</span>
<span class="token function">git</span> pull <span class="token parameter variable">--rebase</span>

<span class="token function">git</span> pull <span class="token parameter variable">--rebase</span><span class="token operator">=</span>preserve
<span class="token function">git</span> pull <span class="token parameter variable">--rebase</span><span class="token operator">=</span>interactive
</code></pre></div><p>Pull Requests: Not core Git feature, but provided by Git hosting platforms</p><ul><li>communicating about and reviewing code</li><li>appeal request invites reviewers to provide feedback before merging</li><li>contributing code to other repositories, to which you don&#39;t have write access. Contributing to an open source repository</li><li><em>Fork</em> is your personal copy of a GIT repository</li></ul><p>Checking out pull requests locally:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Provide pull request ID</span>
<span class="token function">git</span> fetch origin pull/ID/head:NewLocalBranchName

<span class="token comment"># Switch to the newly created branch</span>
<span class="token function">git</span> checkout <span class="token punctuation">[</span>branch name<span class="token punctuation">]</span>
</code></pre></div><h3 id="merge" tabindex="-1"><a class="header-anchor" href="#merge" aria-hidden="true">#</a> Merge</h3><p>Git Merge dose not provide a dry run option, so we can do this:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># pass --no-commit to stop auto commit</span>
<span class="token comment"># and also stopping fast-forward with --no-ff</span>

<span class="token function">git</span> merge --no-commit --no-ff <span class="token variable">$BRANCH</span>

<span class="token comment"># to examine the staged changes</span>
<span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--cached</span>

<span class="token comment"># and you can undo the merge, even if it is a fast-forward merge</span>
<span class="token function">git</span> merge <span class="token parameter variable">--abort</span>
</code></pre></div><p>Merge Conflicts occur when contradictory changes happen:</p><ul><li><code>git merge</code></li><li><code>git rebase</code></li><li><code>git pull</code></li><li><code>git stash apply</code></li><li><code>git cherry-pick</code></li></ul><h3 id="push" tabindex="-1"><a class="header-anchor" href="#push" aria-hidden="true">#</a> Push</h3><p>It uploads all local branch commits to the corresponding remote branch.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push

<span class="token comment"># pushing new branch, this creates an upstream tracking branch</span>
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>

<span class="token comment"># push all branches</span>
<span class="token function">git</span> push <span class="token parameter variable">--all</span>

<span class="token comment"># force push</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span>
</code></pre></div><p>Reasons to force push:</p><ul><li>Local version is better than the remote version</li><li>Remote version went wrong and needs repair</li><li>Versions have diverged and merging is undesirable</li></ul><div class="custom-container danger"><p class="custom-container-title">NOTE</p><p>Use force push with extreme caution. Disruptive for others using the remote branch. Commits disappear. Subsequent local commits are orphaned for others.</p></div><h3 id="rename-file" tabindex="-1"><a class="header-anchor" href="#rename-file" aria-hidden="true">#</a> Rename File</h3><p>Change file name or file path and prepare it for commit.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">mv</span> <span class="token punctuation">[</span>original filename<span class="token punctuation">]</span> <span class="token punctuation">[</span>new filename<span class="token punctuation">]</span>
</code></pre></div><h3 id="delete-files" tabindex="-1"><a class="header-anchor" href="#delete-files" aria-hidden="true">#</a> Delete Files</h3><p>Delete the file from the <em>working area</em> or <em>staging area</em> and add the deletion to the <em>staging area</em>.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">rm</span> <span class="token punctuation">[</span>filename<span class="token punctuation">]</span>
</code></pre></div><p>Remove (untrack) a file from version control but preserve the file locally:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">--cached</span> <span class="token punctuation">[</span>filename<span class="token punctuation">]</span>
</code></pre></div><h3 id="patch" tabindex="-1"><a class="header-anchor" href="#patch" aria-hidden="true">#</a> Patch</h3><p>Create Diff Patches:</p><ul><li>Share changes via files</li><li>Useful when changes are not ready for a public branch</li><li>Useful when collaborators do not share a remote</li><li>Discussion, review, approval process</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># direct output to a file</span>
<span class="token function">git</span> <span class="token function">diff</span> <span class="token punctuation">[</span>from-commit<span class="token punctuation">]</span> <span class="token punctuation">[</span>to-commit<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token punctuation">[</span>output-name<span class="token punctuation">]</span>.diff
</code></pre></div><p>Apply Diff Patches:</p><ul><li>Apply changes in a diff patch file to the working directory</li><li>Makes changes, but not commits</li><li>No commit history transferred</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> apply <span class="token punctuation">[</span>filename<span class="token punctuation">]</span>.diff
</code></pre></div><p>Create Formatted Patches:</p><ul><li>Export each commit in Unix mailbox format</li><li>Useful for email distribution of changes</li><li>Includes commit messages</li><li>One commit per file by default</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># export all commits in the range</span>
<span class="token function">git</span> format-patch <span class="token punctuation">[</span>start-commitSHA<span class="token punctuation">]</span><span class="token punctuation">..</span><span class="token punctuation">[</span>end-commitSHA<span class="token punctuation">]</span>

<span class="token comment"># export all commits on current branch</span>
<span class="token comment"># which are not in master branch</span>
<span class="token function">git</span> format-patch master

<span class="token comment"># export a single commit</span>
<span class="token function">git</span> format-patch <span class="token parameter variable">-1</span> <span class="token punctuation">[</span>commitSHA<span class="token punctuation">]</span>

<span class="token comment"># put patch files into a directory</span>
<span class="token function">git</span> format-patch master <span class="token parameter variable">-o</span> <span class="token punctuation">[</span>directory-name<span class="token punctuation">]</span>

<span class="token comment"># output patches as a single file</span>
<span class="token function">git</span> format-patch master <span class="token parameter variable">--stdout</span> <span class="token operator">&gt;</span> <span class="token punctuation">[</span>filename<span class="token punctuation">]</span>.patch
</code></pre></div><p>Apply Formatted Patches:</p><ul><li>Extract author, commit message, and changes from a mailbox message and apply them to the current branch</li><li>Similar to cherry-picking: same changes, different SHAs</li><li><strong>Commit history is transferred</strong></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># apply single patch</span>
<span class="token function">git</span> am <span class="token punctuation">[</span>directory-name<span class="token punctuation">]</span>/<span class="token punctuation">[</span>patch-filename<span class="token punctuation">]</span>.patch

<span class="token comment"># apply all patches in a directory</span>
<span class="token function">git</span> am <span class="token punctuation">[</span>directory-name<span class="token punctuation">]</span>/*.patch
</code></pre></div><h3 id="git-clean" tabindex="-1"><a class="header-anchor" href="#git-clean" aria-hidden="true">#</a> Git Clean</h3><p>Git clean undoes files from the repository. It <strong>primarily focuses on untracked files</strong></p><ul><li>Remove untracked files</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># do a dry run</span>
<span class="token function">git</span> clean <span class="token parameter variable">-n</span>

<span class="token comment"># remove untracked files</span>
<span class="token function">git</span> clean <span class="token parameter variable">-f</span>

<span class="token comment"># remove untracked directories</span>
<span class="token function">git</span> clean <span class="token parameter variable">-fd</span>
</code></pre></div><h3 id="restore-file" tabindex="-1"><a class="header-anchor" href="#restore-file" aria-hidden="true">#</a> Restore File</h3><p>Restore a deleted file which was tracked by git.</p><ul><li><p>Find the commit where the file was deleted:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> rev-list <span class="token parameter variable">-n</span> <span class="token number">1</span> HEAD -- <span class="token punctuation">[</span>filename<span class="token punctuation">]</span>
</code></pre></div></li><li><p>Checkout to that commit to get the file back:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout <span class="token punctuation">[</span>commitSHA<span class="token punctuation">]</span>^ -- <span class="token punctuation">[</span>filename<span class="token punctuation">]</span>
</code></pre></div></li></ul><h3 id="ignoring-file" tabindex="-1"><a class="header-anchor" href="#ignoring-file" aria-hidden="true">#</a> Ignoring File</h3><p>Untracked files or folders can be ignored so that Git dose not track them. For that create a file named <code>.gitignore</code> and add all the file or folder listing patterns.</p><p>We can use:</p><ul><li><p>Pattern matching (basic regular expressions):</p><ul><li><code>*?[aeiou][0-9]</code></li><li><code>logs/*.txt</code></li></ul></li><li><p>Negative expressions:</p><ul><li><code>*.php</code></li><li><code>!index.php</code></li></ul></li><li><p>Add comments using <code>#</code></p></li><li><p>Blank lines are skipped</p></li></ul><p>Example:</p><div class="language-gitignore" data-ext="gitignore"><pre class="language-gitignore"><code><span class="token comment"># ignore all .a files</span>
<span class="token entry string"><span class="token operator">*</span>.a</span>

<span class="token comment"># but do track lib.a, even though you&#39;re ignoring .a files above</span>
<span class="token entry string"><span class="token operator">!</span>lib.a</span>

<span class="token comment"># only ignore the TODO file in the current directory, not sub-dir/TODO</span>
<span class="token entry string"><span class="token punctuation">/</span>TODO</span>

<span class="token comment"># ignore all files in a directory named build</span>
<span class="token comment"># add a trailing slash</span>
<span class="token entry string">build<span class="token punctuation">/</span></span>

<span class="token comment"># ignore doc/notes.txt, but not doc/server/arch.txt</span>
<span class="token entry string">doc<span class="token punctuation">/</span><span class="token operator">*</span>.txt</span>

<span class="token comment"># ignore all .pdf files in the doc/ directory and any of its subdirectories</span>
<span class="token entry string">doc<span class="token punctuation">/</span><span class="token operator">**</span><span class="token punctuation">/</span><span class="token operator">*</span>.pdf</span>
</code></pre></div><ul><li><p>Lists all ignored files in this project</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> ls-files <span class="token parameter variable">--other</span> <span class="token parameter variable">--ignored</span> --exclude-standard
</code></pre></div></li></ul><p>Ideas on what to ignore:</p>`,62),b=a("li",null,"Compiled source code",-1),v=a("li",null,"Packages and compressed files",-1),y=a("li",null,"Logs and databases",-1),w=a("li",null,"OS generated files",-1),x={href:"https://github.com/github/gitignore",target:"_blank",rel:"noopener noreferrer"},S=t(`<p>Globally ignore files:</p><ul><li>Ignore files in all repositories</li><li>Settings are not tracked in repo</li><li>User specific instead of repository specific</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> core.excludesfile ~/.gitignore_global
</code></pre></div><h3 id="log" tabindex="-1"><a class="header-anchor" href="#log" aria-hidden="true">#</a> Log</h3><ul><li>Log is the primary interface to Git</li><li>Log has many options</li><li>Sorting, filtering, output formatting</li></ul><p>List version history for the current branch:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log

<span class="token comment"># useful for visualizing branches</span>
<span class="token function">git</span> log <span class="token parameter variable">--graph</span> <span class="token parameter variable">--all</span> <span class="token parameter variable">--decorate</span> <span class="token parameter variable">--oneline</span>

<span class="token comment"># list commits as patches (diffs)</span>
<span class="token function">git</span> log <span class="token parameter variable">--patch</span>

<span class="token comment"># list edits to lines 100-150 in filename.txt</span>
<span class="token function">git</span> log <span class="token parameter variable">-L</span> <span class="token number">100,150</span>:filename.txt
</code></pre></div><p>List version history for a file, including renames:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">--follow</span> <span class="token punctuation">[</span>filename<span class="token punctuation">]</span>
</code></pre></div><h3 id="branch" tabindex="-1"><a class="header-anchor" href="#branch" aria-hidden="true">#</a> Branch</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># create new branch</span>
<span class="token function">git</span> branch <span class="token punctuation">[</span>branch name<span class="token punctuation">]</span>

<span class="token comment"># list all branches</span>
<span class="token function">git</span> branch <span class="token parameter variable">-a</span>

<span class="token comment"># rename branch</span>
<span class="token function">git</span> branch <span class="token parameter variable">-m</span> <span class="token punctuation">[</span>name<span class="token punctuation">]</span>

<span class="token comment"># delete a branch</span>
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> <span class="token punctuation">[</span>branch name<span class="token punctuation">]</span>
<span class="token function">git</span> branch <span class="token parameter variable">-D</span> <span class="token punctuation">[</span>branch name<span class="token punctuation">]</span>

<span class="token comment"># delete branch from remote repo</span>
<span class="token function">git</span> push origin <span class="token parameter variable">-d</span> <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token punctuation">[</span>branch name<span class="token punctuation">]</span>           <span class="token comment"># git v2.8.0+</span>
<span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token punctuation">[</span>branch name<span class="token punctuation">]</span>     <span class="token comment"># git v1.7.0+</span>
<span class="token function">git</span> push origin :<span class="token punctuation">[</span>remote branch name<span class="token punctuation">]</span>               <span class="token comment"># old way</span>

<span class="token comment"># see all the merged branches</span>
<span class="token function">git</span> branch <span class="token parameter variable">--merged</span>

<span class="token comment"># merge branch (from the branch to merge into)</span>
<span class="token function">git</span> merge <span class="token punctuation">[</span>other branch<span class="token punctuation">]</span>
</code></pre></div><ul><li>To delete a branch, current must be on a different branch</li><li>To delete a branch hows commits are not merged use <code>-D</code> flag</li></ul><p>Identify merge branches:</p><ul><li>List branches that have been merged into a branch</li><li>Useful for knowing what features have been incorporated</li><li>Useful for clean-up after merging many features</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># list branches merged into the current branch</span>
<span class="token function">git</span> branch <span class="token parameter variable">--merged</span>

<span class="token comment"># list branches not merged into the current branch</span>
<span class="token comment"># branches that have commits that are not merged</span>
<span class="token comment"># into current branch</span>
<span class="token function">git</span> branch --no-merged

<span class="token comment"># list remote branches merged into the current branch</span>
<span class="token function">git</span> branch <span class="token parameter variable">-r</span> <span class="token parameter variable">--merged</span>
</code></pre></div><p>Checkout <a href="#branching-strategies">Branching Strategies</a></p><h4 id="prune-stale-branches" tabindex="-1"><a class="header-anchor" href="#prune-stale-branches" aria-hidden="true">#</a> Prune Stale Branches</h4><ul><li>Delete all stale remote-tracking branches</li><li>Remote-tracking branches, not remote branches</li><li>Stale branch: a remote-tracking branch that no longer tracks anything because the actual branch in the remote repository has been deleted</li></ul><p>Remote branches:</p><ol><li>Branch on the remote repository (bugfix)</li><li>Local snapshot of the remote branch (origin/bugfix)</li><li>Local branch, tracking the remote branch (bugfix)</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># delete stale remote-tracking branches</span>
<span class="token function">git</span> remote prune origin
<span class="token function">git</span> remote prune origin --dry-run


<span class="token comment"># prune while fetching</span>
<span class="token comment"># prune, then fetch</span>
<span class="token function">git</span> fetch <span class="token parameter variable">--prune</span>


<span class="token comment"># always prune before fetch</span>
<span class="token comment"># destructive</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> fetch.prune <span class="token boolean">true</span>
</code></pre></div><h3 id="reset" tabindex="-1"><a class="header-anchor" href="#reset" aria-hidden="true">#</a> Reset</h3><p>Git reset as the name suggests resets things. Reset the working area to a specific commit.</p><p>It can <strong>undo the changes that are already committed</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># reset local working directory to</span>
<span class="token comment"># remote branch head</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> origin/master

<span class="token comment"># un-stages the file, but preserve its contents</span>
<span class="token comment"># move file from staging area back to working directory</span>
<span class="token function">git</span> reset <span class="token punctuation">[</span>filename<span class="token punctuation">]</span>
<span class="token comment"># or</span>
<span class="token function">git</span> reset HEAD <span class="token punctuation">[</span>filename<span class="token punctuation">]</span>

<span class="token comment"># discard changes</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span>

<span class="token comment"># reset everything to the latest snapshot</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD

<span class="token comment"># undoes all commits after [commit], preserving changes locally</span>
<span class="token function">git</span> reset <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># discards all history and changes back to the specified commit</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># interactively reset hunks of changes (patch)</span>
<span class="token function">git</span> reset <span class="token parameter variable">-p</span>
</code></pre></div><p>Reset commit with the following options:</p><ul><li><p><code>--soft</code>: <strong>Moves the commit changes into staging area</strong> and does not affect the current working area.</p></li><li><p><code>--hard</code>: <strong>Deletes all the commit changes. Be cautious with this flag</strong>. Might lose all changes from both staging and working area to match the commit.</p></li><li><p><code>--mixed</code>: Default operation. Moves commit changes to the <em>working area</em>.</p></li></ul><p>Apply reset command on:</p><ul><li>Staged files</li><li>Commits</li></ul><h4 id="reset-last-rebase-or-merge" tabindex="-1"><a class="header-anchor" href="#reset-last-rebase-or-merge" aria-hidden="true">#</a> Reset last Rebase or Merge</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># undo, unless ORIG_HEAD has changed again</span>
<span class="token comment"># (rebase, reset, merge change ORIG_HEAD)</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> ORIG_HEAD
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">NOTE</p><p>Use revert whenever possible</p></div><h3 id="revert" tabindex="-1"><a class="header-anchor" href="#revert" aria-hidden="true">#</a> Revert</h3><p>Undo changes made in a commit (revert a commit).</p><p>Git revert is similar to reset however, <strong><code>git revert</code> inverses the changes from that old commit and creates a new revert commit</strong>.</p><ul><li>A new commit is made which contains the changes needed to revert a commit.</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> revert <span class="token punctuation">[</span>commitSHA<span class="token punctuation">]</span>
</code></pre></div><h3 id="diff" tabindex="-1"><a class="header-anchor" href="#diff" aria-hidden="true">#</a> Diff</h3><p>Compares contents of the working directory with the staging area.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">diff</span>

<span class="token comment"># show words that changed</span>
<span class="token function">git</span> <span class="token function">diff</span> --color-words
</code></pre></div><p>Compare staging to the HEAD of the branch of the repository:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--cached</span>

<span class="token comment"># or use its alias</span>

<span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--staged</span>
</code></pre></div><p>Compare changes of a file between current state and last commit:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">diff</span> <span class="token punctuation">[</span>filename<span class="token punctuation">]</span>

<span class="token comment"># using tags</span>
<span class="token function">git</span> <span class="token function">diff</span> <span class="token punctuation">[</span>tag-name-1<span class="token punctuation">]</span><span class="token punctuation">..</span>.<span class="token punctuation">[</span>tag-name-2<span class="token punctuation">]</span>
</code></pre></div><p>Compare two branches:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">diff</span> <span class="token punctuation">[</span>first branch<span class="token punctuation">]</span><span class="token punctuation">..</span>.<span class="token punctuation">[</span>second branch<span class="token punctuation">]</span>
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TOOL</p><p>We can use a GUI tool or an external diff viewing program.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> difftool
</code></pre></div><p>To get help and add your preferred tool:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> difftool --tool-help

<span class="token comment"># ADD A TOOL</span>
<span class="token function">git</span> difftool <span class="token parameter variable">--tool</span><span class="token operator">=</span><span class="token punctuation">[</span>tool<span class="token punctuation">]</span>
</code></pre></div></div><h3 id="checkout" tabindex="-1"><a class="header-anchor" href="#checkout" aria-hidden="true">#</a> Checkout</h3><p>Git checkout is <strong>used to switch</strong>. Switch between <em>branches</em>, <em>commits</em>, and <em>files</em>.</p><p>Go back to the head:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout master

<span class="token comment"># discard changes of a file in working area</span>
<span class="token function">git</span> checkout -- <span class="token punctuation">[</span>filename<span class="token punctuation">]</span>
</code></pre></div><p>Go to a specific snapshot (commit).</p><ul><li>This command <strong>creates a detached head</strong>, meaning, this will <strong>give a temporary branch to work and debug</strong>. Line being on an unnamed branch.</li><li><strong>Do not commit in this temporary branch</strong>. As new commits will not belong to any branch</li><li>Detached commits will be garbage collected (~2 weeks)</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout <span class="token punctuation">[</span>commitSHA<span class="token punctuation">]</span>
</code></pre></div><ul><li>To preserve commits made in detached head state:</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># tag the commit (HEAD detached)</span>
<span class="token function">git</span> tag <span class="token punctuation">[</span>tag name<span class="token punctuation">]</span>

<span class="token comment"># create a branch (HEAD detached)</span>
<span class="token comment"># but the detached HEAD needs to be reattached</span>
<span class="token comment"># to this new branch</span>
<span class="token function">git</span> branch <span class="token punctuation">[</span>new branch name<span class="token punctuation">]</span>

<span class="token comment"># better option is to create a branch and reattach HEAD</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token punctuation">[</span>new branch name<span class="token punctuation">]</span>
</code></pre></div><p>Undo or revise old changes: You can pull a snapshot of a file from old commit and work on it with the intent to commit the new changes:</p><ul><li>The file will be put into staging area</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout <span class="token punctuation">[</span>commitSHA<span class="token punctuation">]</span> -- <span class="token punctuation">[</span>filename<span class="token punctuation">]</span>
</code></pre></div><p>You can apply checkout command on:</p><ul><li>Working file</li><li>Commit</li></ul><h3 id="fetch-file" tabindex="-1"><a class="header-anchor" href="#fetch-file" aria-hidden="true">#</a> Fetch File</h3><p>Fetch all:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># fetch commits and tags</span>
<span class="token function">git</span> fetch

<span class="token comment"># fetch only tags (with necessary commits)</span>
<span class="token function">git</span> fetch <span class="token parameter variable">--tags</span>

<span class="token comment"># fetch all</span>
<span class="token function">git</span> fetch <span class="token parameter variable">--progress</span> <span class="token parameter variable">--all</span>

<span class="token comment"># prune, then fetch</span>
<span class="token function">git</span> fetch <span class="token parameter variable">--prune</span>
</code></pre></div><h3 id="rebase-commits" tabindex="-1"><a class="header-anchor" href="#rebase-commits" aria-hidden="true">#</a> Rebase Commits</h3><ul><li>Take commits from a branch and replay them at the end of another branch</li><li>Useful to integrate recent commits without merging</li><li>Maintains a cleaner, more linear project history</li><li>Ensures topic branch commits apply cleanly</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># rebase current branch to tip of master</span>
<span class="token function">git</span> rebase master

<span class="token comment"># rebase new_feature to tip of master</span>
<span class="token function">git</span> rebase master new_feature

<span class="token comment"># return commit where topic branch diverges</span>
<span class="token function">git</span> merge-base master new_feature
</code></pre></div><p>The Golden Rule of Rebasing:</p><ul><li><strong>Thou shalt not rebase a public branch</strong></li><li>Rebase abandons existing, shared commits and creates new, similar commits instead</li><li>Collaborators would see the project history vanish</li><li>Getting all collaborators back in sync can be a nightmare</li></ul><h4 id="merging-vs-rebasing" tabindex="-1"><a class="header-anchor" href="#merging-vs-rebasing" aria-hidden="true">#</a> Merging vs. Rebasing</h4><ul><li>2 ways to incorporate changes from one branch into another branch</li><li>Similar ends, but the means are different</li></ul><table><thead><tr><th>Merging</th><th>Rebasing</th></tr></thead><tbody><tr><td>Adds a merge commit</td><td>No additional merge commit</td></tr><tr><td>Non-destructive</td><td>Destructive: SHA changes, commits are rewritten</td></tr><tr><td>Complete record of what happened and when</td><td>No longer a complete record of what happened and when</td></tr><tr><td>Easy to undo</td><td>Tricky to undo</td></tr><tr><td>Logs can become cluttered, non-linear</td><td>Logs are cleaner, more linear</td></tr></tbody></table><p>How to choose?</p><ul><li><strong>Merge</strong> to allow commits to stand out or to be clearly grouped</li><li><strong>Merge</strong> to bring large topic branches back into master</li><li><strong>Merge anytime the topic branch is already public</strong> and being used by others (The Golden Rule of Rebasing)</li><li><strong>Rebase</strong> to add minor commits in master to a topic branch</li><li><strong>Rebase</strong> to move commits from one branch to another</li></ul><h4 id="handle-rebase-conflicts" tabindex="-1"><a class="header-anchor" href="#handle-rebase-conflicts" aria-hidden="true">#</a> Handle Rebase Conflicts</h4><ul><li>Rebasing creates new commits on existing code</li><li>May conflict with existing code</li><li>Git pauses rebase before each conflicting commit</li><li>Similar to resolving merge conflicts</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># after resolving the conflict use</span>
<span class="token comment"># --continue to commit and proceed to next commit</span>
<span class="token function">git</span> rebase <span class="token parameter variable">--continue</span>

<span class="token comment"># skipping a commit</span>
<span class="token function">git</span> rebase <span class="token parameter variable">--skip</span>

<span class="token comment"># abort rebase</span>
<span class="token function">git</span> rebase <span class="token parameter variable">--abort</span>
</code></pre></div><h4 id="rebase-onto-other-branches" tabindex="-1"><a class="header-anchor" href="#rebase-onto-other-branches" aria-hidden="true">#</a> Rebase onto other branches</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> rebase <span class="token parameter variable">--onto</span> <span class="token punctuation">[</span>new-base<span class="token punctuation">]</span> <span class="token punctuation">[</span>upstream-branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>
</code></pre></div><h4 id="undo-rebase" tabindex="-1"><a class="header-anchor" href="#undo-rebase" aria-hidden="true">#</a> Undo Rebase</h4><ul><li>Can undo simple rebases</li><li>Rebase is destructive</li><li>Undoing complex rebases may lose data</li><li>Use <a href="#reset-last-rebase-or-merge">git reset</a></li></ul><p>Or rebase back to former merge-base SHA:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># undo by rebasing to former merge-base SHA</span>
<span class="token function">git</span> rebase <span class="token parameter variable">--onto</span> <span class="token punctuation">[</span>merge-base-SHA<span class="token punctuation">]</span> <span class="token punctuation">[</span>merge-base<span class="token punctuation">]</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>
</code></pre></div><h4 id="interactive-rebasing" tabindex="-1"><a class="header-anchor" href="#interactive-rebasing" aria-hidden="true">#</a> Interactive Rebasing</h4><ul><li>Chance to modify commit as they are being replayed</li><li>Opens the <code>git-rebase-todo</code> file for editing</li><li>Can reorder or skip commits</li><li>Can edit commit contents</li></ul><p>Options:</p><ul><li><code>pick</code>, <code>drop</code></li><li><code>reword</code>, <code>edit</code></li><li><code>squash</code>, <code>fixup</code></li><li><code>exec</code></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># interactive rebase</span>
<span class="token function">git</span> rebase <span class="token parameter variable">-i</span> master new_feature

<span class="token comment"># rebase last 3 commits onto the same branch</span>
<span class="token comment"># but with the opportunity to modify them</span>
<span class="token function">git</span> rebase <span class="token parameter variable">-i</span> HEAD~3
</code></pre></div><p>Squash Commits:</p><ul><li>Fold two or more commits into one</li><li><code>squash</code>: combine change sets, concatenate messages</li><li><code>fixup</code>: combine change sets, discard this message</li><li>Uses first author in the commit series</li></ul><h3 id="cherry-pick" tabindex="-1"><a class="header-anchor" href="#cherry-pick" aria-hidden="true">#</a> Cherry-Pick</h3><ul><li>Apply the changes from one or more existing commits</li><li>Can be used to apply commit from one branch to another</li><li>Each existing commit is recorded as a new commit on the current branch</li><li>Conceptually similar to copy-paste</li><li>New commits have different SHAs</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> cherry-pick <span class="token punctuation">[</span>commitSHA<span class="token punctuation">]</span>

<span class="token comment"># cherry-pick range of commits</span>
<span class="token function">git</span> cherry-pick <span class="token punctuation">[</span>commitSHA-of-3<span class="token punctuation">]</span><span class="token punctuation">..</span><span class="token punctuation">[</span>commitSHA-of-5<span class="token punctuation">]</span>

<span class="token comment"># edit the commit message</span>
<span class="token function">git</span> cherry-pick <span class="token punctuation">[</span>commitSHA<span class="token punctuation">]</span> <span class="token parameter variable">--edit</span>
</code></pre></div><ul><li><p>Cannot cherry pick a merge commit as merge commits have two parents</p></li><li><p>Use <code>-m</code> flag to specify the parent if cherry-picking merge commit</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> cherry-pick <span class="token punctuation">[</span>commitSHA<span class="token punctuation">]</span> <span class="token parameter variable">-m</span> <span class="token punctuation">[</span>parent-number<span class="token punctuation">]</span>
</code></pre></div></li><li><p>Can result in conflicts which must be resolved (same as merge conflicts)</p></li></ul><h3 id="stash" tabindex="-1"><a class="header-anchor" href="#stash" aria-hidden="true">#</a> Stash</h3><p>Git stash temporarily saves the changes made in working directory and work on some other changes.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># save current changes</span>
<span class="token function">git</span> stash

<span class="token comment"># save with a message</span>
<span class="token function">git</span> stash save <span class="token punctuation">[</span>message<span class="token punctuation">]</span>

<span class="token comment"># retrieve the saved changes (it will not remove the stash from the list)</span>
<span class="token function">git</span> stash apply <span class="token punctuation">[</span>stash@<span class="token punctuation">{</span>id<span class="token punctuation">}</span><span class="token punctuation">]</span>

<span class="token comment"># get the list of all stashes</span>
<span class="token function">git</span> stash list

<span class="token comment"># get the latest stash and apply it in the working area</span>
<span class="token function">git</span> stash pop <span class="token punctuation">[</span>stash@<span class="token punctuation">{</span>id<span class="token punctuation">}</span><span class="token punctuation">]</span>

<span class="token comment"># delete a stash</span>
<span class="token function">git</span> stash drop <span class="token punctuation">[</span>stash@<span class="token punctuation">{</span>id<span class="token punctuation">}</span><span class="token punctuation">]</span>

<span class="token comment"># interactively stash hunks of changes (patch)</span>
<span class="token function">git</span> stash <span class="token parameter variable">-p</span>
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">NOTE</p><p>Git stash is branch agnostic. All branches use the same stash list. This is helpful when moving the changes from one branch to another branch.</p></div><div class="custom-container warning"><p class="custom-container-title">UNTRACKED FILES</p><p>By default, Git will not stash changes made to untracked or ignored files</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># TO STASH UNTRACKED FILES</span>
<span class="token function">git</span> stash <span class="token parameter variable">-u</span> or --include-untracked <span class="token punctuation">[</span>filename<span class="token punctuation">]</span>
</code></pre></div></div><h3 id="show" tabindex="-1"><a class="header-anchor" href="#show" aria-hidden="true">#</a> Show</h3><p>Outputs metadata and content changes of the specified commit.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> show <span class="token punctuation">[</span>commitSHA<span class="token punctuation">]</span>

<span class="token comment"># using tags</span>
<span class="token function">git</span> show <span class="token punctuation">[</span>tag-name<span class="token punctuation">]</span>
</code></pre></div><p>Allows us to see git objects details:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> show <span class="token punctuation">[</span>object-sha<span class="token punctuation">]</span>

<span class="token function">git</span> show <span class="token parameter variable">--pretty</span><span class="token operator">=</span>raw <span class="token punctuation">[</span>object-sha<span class="token punctuation">]</span>
</code></pre></div><h3 id="ls-tree" tabindex="-1"><a class="header-anchor" href="#ls-tree" aria-hidden="true">#</a> ls-tree</h3><p>Show the object details:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> ls-tree <span class="token punctuation">[</span>object-tree-sha<span class="token punctuation">]</span>
</code></pre></div><p>Output:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>FILE PERMISSIONS / TYPE OF FILE / objectSHA / FILE NAME
100644 blob e69de29bb2d1d6434b8b29ae775ad8c2e48c5391    README.md
</code></pre></div><h3 id="reflog" tabindex="-1"><a class="header-anchor" href="#reflog" aria-hidden="true">#</a> Reflog</h3><ul><li><p>Git reflog has the superpower to <strong>track the head</strong>.</p></li><li><p>The difference between log and reflog is that:</p><ul><li><code>git log</code> will track every commit that you make and record it as a snapshot at a particular time, whereas <code>git reflog</code> will keep track of commits that are made as well as the commits that are discarded.</li></ul></li><li><p>This is provided in a rolling buffer for 30 days</p></li><li><p>The <code>git reflog</code> command will list down the logs whenever the HEAD changes like the branch was created, cloned, checked-out, renamed, or any commits made on the branch.</p></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reflog
</code></pre></div><h3 id="blame" tabindex="-1"><a class="header-anchor" href="#blame" aria-hidden="true">#</a> Blame</h3><p>Shows what revision and author last modified each line of a file.</p><ul><li>Browse annotated file</li><li>Determine who changed which lines in a file and why</li><li>Useful for probing the history behind a file&#39;s contents</li><li>Useful for identifying which commits introduced a bug</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># annotate file with commit details</span>
<span class="token function">git</span> blame <span class="token punctuation">[</span>filename<span class="token punctuation">]</span>

<span class="token comment"># ignore whitespace</span>
<span class="token function">git</span> blame <span class="token parameter variable">-w</span> <span class="token punctuation">[</span>filename<span class="token punctuation">]</span>

<span class="token comment"># annotate lines 100-105</span>
<span class="token function">git</span> blame <span class="token parameter variable">-L</span> <span class="token number">100,105</span> <span class="token punctuation">[</span>filename<span class="token punctuation">]</span>
<span class="token function">git</span> blame <span class="token parameter variable">-L</span> <span class="token number">100</span>,+5 <span class="token punctuation">[</span>filename<span class="token punctuation">]</span>

<span class="token comment"># annotate file at revision commitSHA</span>
<span class="token function">git</span> blame <span class="token punctuation">[</span>commitSHA<span class="token punctuation">]</span> <span class="token punctuation">[</span>filename<span class="token punctuation">]</span>
<span class="token function">git</span> blame <span class="token punctuation">[</span>commitSHA<span class="token punctuation">]</span> -- <span class="token punctuation">[</span>filename<span class="token punctuation">]</span>

<span class="token comment"># similar to blame, different output format</span>
<span class="token function">git</span> annotate <span class="token punctuation">[</span>filename<span class="token punctuation">]</span>
</code></pre></div><p>Options:</p><ul><li><code>-s</code>: to suppress the author&#39;s name and time stamp from the output.</li><li><code>-e</code>: to show the author&#39;s email instead of the author&#39;s name.</li><li><code>-f</code>: to show the filename in the original commit.</li><li><code>-n</code>: to show the line number in the original commit.</li></ul><h3 id="bisect" tabindex="-1"><a class="header-anchor" href="#bisect" aria-hidden="true">#</a> Bisect</h3><ul><li>Find the commit that introduced a bug or regression</li><li>Mark last good revision and first bad revision</li><li>Resets code to mid-point</li><li>Mark as good or bad revision</li><li>Repeat</li></ul><p>Git bisect will:</p><ol><li>Perform a binary search in the commits.</li><li>Allow us to check it manually.</li><li>Allow us to declare its status as good or bad.</li></ol><p>Start bisecting:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># start bisect session</span>
<span class="token function">git</span> bisect start
</code></pre></div><p>Provide a commit/branch/tag to start from:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> bisect good <span class="token punctuation">[</span>treeish<span class="token punctuation">]</span>
</code></pre></div><p>Now add the current commit as bad, Git will go through all the commits between the start commit and the current bad commit.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> bisect bad

or

<span class="token function">git</span> bisect bad <span class="token punctuation">[</span>treeish<span class="token punctuation">]</span>
</code></pre></div><p>From now check the application and verify if the application has the bug or not, if the commit dose not have bug then mark it as good and if you find the commit that has the bug then mark it as bad. Repeat this process till the tool narrows down to the commit that introduced the bug.</p><ul><li><code>git bisect log</code>: To find the flow of Git Bisect, that is, to see what has been done so far.</li><li><code>git bisect reset</code>: To reset if something went wrong.</li></ul><h3 id="prune" tabindex="-1"><a class="header-anchor" href="#prune" aria-hidden="true">#</a> Prune</h3><p>Prune all unreachable objects</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># do not need to use!</span>
<span class="token function">git</span> prune

<span class="token comment"># part of garbage collection</span>
<span class="token function">git</span> gc
</code></pre></div><h2 id="branching-strategies" tabindex="-1"><a class="header-anchor" href="#branching-strategies" aria-hidden="true">#</a> Branching Strategies</h2><p>Agree on a Branching Workflow in your team:</p><ul><li><p>GIT allows you to create branches but it doesn&#39;t tell you how to use them</p></li><li><p>you need a written best practice of how work is ideally structure in your team - to avoid mistakes and collisions</p></li><li><p>it is highly depends on your team / team size on your project and how you handle releases -it helps to onboard new team members (&quot;this is how we work here&quot;)</p></li></ul><p>Integrating changes and structuring releases:</p><ol><li><p>mainline development (&quot;Always Be Integrating&quot;):</p><ul><li>few branches</li><li>relatively small commits</li><li>high quality testing and QA standards</li></ul></li><li><p>Stale, release and feature branches:</p><ul><li>different types of branches</li><li>fulfil different types of jobs</li></ul></li></ol><p><strong>GIT Flow vs Trunk based dev</strong>:</p><ol><li><p>GitHub Flow: very simple, very lean:</p><ul><li>only one long-running branch (<em>&quot;main&quot;</em>) + feature branches</li></ul></li><li><p>GitFlow: more structure, more rules,</p><ul><li>long-running branches: <em>&quot;main&quot;</em>, <em>&quot;development&quot;</em></li><li>short-lived branches: <em>&quot;features&quot;</em>, <em>&quot;releases&quot;</em>, <em>&quot;hotfixes&quot;</em></li></ul><table><thead><tr><th>Branch Name</th><th>Create from</th><th>Merge back into</th></tr></thead><tbody><tr><td>develop</td><td>master</td><td>-</td></tr><tr><td>feature</td><td>develop</td><td>develop</td></tr><tr><td>release</td><td>develop</td><td>master and develop</td></tr><tr><td>hotfix</td><td>master or develop</td><td>master and develop</td></tr></tbody></table><p><img src="`+o+`" alt="GitFlow"></p></li></ol><h2 id="tagging" tabindex="-1"><a class="header-anchor" href="#tagging" aria-hidden="true">#</a> Tagging</h2><ul><li><p>Tag allows you to capture a reference point in your project history, such as release versions.</p></li><li><p>Tags allow making points in history as important</p></li><li><p>A <strong>named reference</strong> to a commit</p></li><li><p>An <strong>annotated tag</strong> (most common) contains additional information such as name, message, and email of the person who created the tag.</p></li><li><p>A <strong>lightweight tag</strong> points to just a commit hash.</p></li><li><p>Create a tag (lightweight):</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># add lightweight tag</span>
<span class="token function">git</span> tag <span class="token punctuation">[</span>tag name<span class="token punctuation">]</span>

<span class="token comment"># create a tag for older commit</span>
<span class="token function">git</span> tag <span class="token punctuation">[</span>tag name<span class="token punctuation">]</span> <span class="token punctuation">[</span>commitSHA<span class="token punctuation">]</span>
</code></pre></div></li><li><p>Annotated tags:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> tag <span class="token parameter variable">-a</span> <span class="token punctuation">[</span>tag name<span class="token punctuation">]</span> <span class="token parameter variable">-m</span> <span class="token punctuation">[</span>message<span class="token punctuation">]</span> <span class="token punctuation">[</span>commitSHA<span class="token punctuation">]</span>
</code></pre></div></li><li><p>List tags:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># list tags</span>
<span class="token function">git</span> tag
<span class="token function">git</span> tag <span class="token parameter variable">--list</span>
<span class="token function">git</span> tag <span class="token parameter variable">-l</span>

<span class="token comment"># list tags with annotations</span>
<span class="token function">git</span> tag <span class="token parameter variable">-l</span> <span class="token parameter variable">-n</span>
<span class="token function">git</span> tag <span class="token parameter variable">-l</span> <span class="token parameter variable">-n</span> <span class="token punctuation">[</span>number of lines from the annotation<span class="token punctuation">]</span>

<span class="token comment"># filter tags</span>
<span class="token comment"># list tags beginning with &quot;v2&quot;</span>
<span class="token function">git</span> tag <span class="token parameter variable">-l</span> <span class="token string">&quot;v2*&quot;</span>
</code></pre></div></li><li><p>Push tags to remote repository:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push origin <span class="token punctuation">[</span>tag name<span class="token punctuation">]</span>

<span class="token comment"># push all tags</span>
<span class="token function">git</span> push origin <span class="token parameter variable">--tags</span>

<span class="token function">git</span> push <span class="token parameter variable">--tags</span>
</code></pre></div></li><li><p><code>git fetch</code> automatically retrieves shared tags</p></li><li><p>To delete the tag:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> tag <span class="token parameter variable">-d</span> or <span class="token parameter variable">--delete</span> <span class="token punctuation">[</span>tag name<span class="token punctuation">]</span>

<span class="token comment"># delete remote tags like remote branches</span>
<span class="token function">git</span> push origin :<span class="token punctuation">[</span>tag name<span class="token punctuation">]</span>
<span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> <span class="token punctuation">[</span>tag name<span class="token punctuation">]</span>
<span class="token function">git</span> push origin <span class="token parameter variable">-d</span> <span class="token punctuation">[</span>tag name<span class="token punctuation">]</span>
</code></pre></div></li></ul><h3 id="checking-out-tags" tabindex="-1"><a class="header-anchor" href="#checking-out-tags" aria-hidden="true">#</a> Checking Out Tags</h3><ul><li>Tags are not branches</li><li>Tags can be checked out, just like any commit</li><li><code>git checkout -b [new branch name] [tag name]</code></li><li><code>git checkout [tag name]</code>: same as checking a commit</li></ul><h2 id="git-submodule" tabindex="-1"><a class="header-anchor" href="#git-submodule" aria-hidden="true">#</a> Git Submodule</h2><p>It often happens that while working on one project, you need to use another project from within it. Git addresses this issue using submodules.</p><p>Submodules allow you to keep a Git repository as a subdirectory of another Git repository. This lets you clone another repository into your project and keep your commits separate.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> submodule <span class="token function">add</span> <span class="token punctuation">[</span>url of repo<span class="token punctuation">]</span>

<span class="token comment"># view status (working, staging, or indexed files) of all the submodules.</span>
<span class="token function">git</span> submodule status

<span class="token comment"># updates submodules after switching branches.</span>
<span class="token function">git</span> submodule update

<span class="token comment"># after cloning a new repo, if you need to add submodules to it from .gitmodules file, use this command.</span>
<span class="token function">git</span> submodule update <span class="token parameter variable">--init</span>

<span class="token comment"># if the submodules inside a newly cloned repo are nested, then use this.</span>
<span class="token function">git</span> submodule update <span class="token parameter variable">--init</span> <span class="token parameter variable">--recursive</span>

<span class="token comment"># pulls all changes in the submodules.</span>
<span class="token function">git</span> submodule update <span class="token parameter variable">--remote</span>
</code></pre></div><p>A <code>.gitmodules</code> file is created when we add a submodule to the project. This is a configuration file that stores the mapping between the project&#39;s URL and the local subdirectory you&#39;ve pulled it into:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>[submodule &quot;DbConnector&quot;]
    path = DbConnector
    url = https://github.com/chaconinc/DbConnector
</code></pre></div><h2 id="git-hooks" tabindex="-1"><a class="header-anchor" href="#git-hooks" aria-hidden="true">#</a> Git Hooks</h2><p>Git Hooks are shell scripts that get triggered when we perform a specific action in Git</p><ul><li>Git hooks reside in the <code>[project-dir]/.git/hooks/</code> directory</li></ul><p><img src="`+i+'" alt="Git hooks"></p><p>Based on the git operation, any one of the following <code>git hooks</code> will be triggered.</p><ol><li><p><strong>Client-side</strong>:</p><ul><li><p>Committing workflow hooks:</p><ul><li>pre-commit</li><li>prepare-commit-msg</li><li>commit-msg</li><li>post-commit</li></ul></li><li><p>Email workflow hooks</p><ul><li>applypatch-msg</li><li>pre-applypatch</li><li>post-applypatch</li></ul></li><li><p>Other client hooks</p><ul><li>pre-rebase</li><li>post-rewrite</li><li>post-checkout</li><li>post-merge</li></ul></li></ul></li><li><p><strong>Server-side</strong>:</p><ul><li>update</li><li>pre-receive</li><li>post-receive</li></ul></li></ol><ul><li>Hooks are simple text files.</li><li>Hooks can be written in any <em>scripting language</em> like python, Ruby, and so on.</li><li>The script <strong>filename should match the hooks&#39; name</strong>. For <code>post-commit</code> hook the script filename should be <code>post-commit</code>.</li></ul><h2 id="github-folder" tabindex="-1"><a class="header-anchor" href="#github-folder" aria-hidden="true">#</a> Github Folder</h2><p>The below mentioned files can be created in the <code>.github</code> folder:</p><ul><li><p><code>CODE_OF_CONDUCT.md</code>: Defines standards for how to engage in a community.</p></li><li><p><code>CONTRIBUTING.md</code>: Communicates how people should contribute to your project. (making pull request, setting development environment...)</p></li><li><p><code>FUNDING.yml</code>: Displays a sponsor button in your repository to increase the visibility of funding options for your open source project.</p></li><li><p><code>ISSUE_TEMPLATE</code>: Folder that contains a templates of possible issues user can use to open issue (such as if issue is related to documentation, if it&#39;s a bug, if user wants new feature etc)</p><ul><li><code>config.yml</code>: Customize the issue template chooser that people see when creating a new issue in your repository by adding a <code>config.yml</code> file to the .<code>github/ISSUE_TEMPLATE</code> folder.</li></ul></li><li><p><code>PULL_REQUEST_TEMPLATE.md</code>: How to make a pull request to project</p></li><li><p><code>stale.yml</code>: Probot configuration to close stale issues. There are many other apps on Github Marketplace that place their configurations inside .github folder because they are related to GitHub specifically.</p></li><li><p><code>SECURITY.md</code>: Gives instructions for how to report a security vulnerability in your project</p></li><li><p><code>SUPPORT.md</code>: Lets people know about ways to get help with your project. For more information</p></li><li><p><code>workflows</code>: Configuration folder containing yaml files for GitHub Actions</p></li><li><p><code>CODEOWNERS</code>: Pull request reviewer rules. More info here.</p></li><li><p><code>dependabot.yml</code>: Configuration options for dependency updates. More info here.</p></li></ul><h2 id="references-and-guides" tabindex="-1"><a class="header-anchor" href="#references-and-guides" aria-hidden="true">#</a> References and Guides</h2>',161),A={href:"https://git-scm.com/book/en/v2",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/git-guides/",target:"_blank",rel:"noopener noreferrer"},T={href:"https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud",target:"_blank",rel:"noopener noreferrer"},G={href:"https://git-school.github.io/visualizing-git",target:"_blank",rel:"noopener noreferrer"};function H(R,E){const e=l("ExternalLinkIcon");return p(),r("div",null,[u,a("p",null,[n("Download Git from this "),a("a",h,[n("link"),s(e)]),n(" and install it")]),m,a("p",null,[g,n(),a("a",k,[n("Angular commit convention"),s(e)])]),f,a("ul",null,[b,v,y,w,a("li",null,[a("a",x,[n("Useful .gitignore templates"),s(e)])])]),S,a("ul",null,[a("li",null,[a("a",A,[n("git book"),s(e)])]),a("li",null,[a("a",C,[n("GitHub: git-guides"),s(e)])]),a("li",null,[a("a",T,[n("Bitbucket: learn git"),s(e)])]),a("li",null,[a("a",G,[n("Practice Git online"),s(e)])])])])}const I=c(d,[["render",H],["__file","Git.html.vue"]]);export{I as default};
