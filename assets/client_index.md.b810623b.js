import{_ as s,o as a,c as n,S as l}from"./chunks/framework.d3cbbba7.js";const f=JSON.parse('{"title":"客户端介绍","description":"","frontmatter":{},"headers":[],"relativePath":"client/index.md","filePath":"client/index.md","lastUpdated":1693666548000}'),p={name:"client/index.md"},e=l(`<h1 id="客户端介绍" tabindex="-1">客户端介绍 <a class="header-anchor" href="#客户端介绍" aria-label="Permalink to &quot;客户端介绍&quot;">​</a></h1><h2 id="基础知识" tabindex="-1">基础知识 <a class="header-anchor" href="#基础知识" aria-label="Permalink to &quot;基础知识&quot;">​</a></h2><p>Minecraft 客户端，是 Minecraft 游戏本身一大组成部分。通俗来说，玩家游玩的 Minecraft 游戏本身就是客户端。</p><p>客户端需要使用 <code>启动器</code> 启动。有关启动器，可以参考<a href="https://crashmc.com/basis.html" target="_blank" rel="noreferrer">基础知识</a>。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果您对 Minecraft 有较详细的理解，那么您不必完整阅读。</p></div><h2 id="游戏文件-日志" tabindex="-1">游戏文件 &amp; 日志 <a class="header-anchor" href="#游戏文件-日志" aria-label="Permalink to &quot;游戏文件 &amp; 日志&quot;">​</a></h2><p>游戏的文件目录一般如下所示。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">.minecraft</span></span>
<span class="line"><span style="color:#babed8;">├─assets</span></span>
<span class="line"><span style="color:#babed8;">│  ├─indexes</span></span>
<span class="line"><span style="color:#babed8;">│  ├─objects</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─00</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─01</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─02</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─03</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─04</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─05</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─06</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─07</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─08</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─09</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─0a</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─0b</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─0c</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─0d</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─0e</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─0f</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─10</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─11</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─12</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─...</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─fe</span></span>
<span class="line"><span style="color:#babed8;">│  │  └─ff</span></span>
<span class="line"><span style="color:#babed8;">│  ├─skins</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─00</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─01</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─02</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─03</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─04</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─05</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─06</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─07</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─08</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─09</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─0a</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─0b</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─0c</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─0d</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─0e</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─0f</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─10</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─11</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─12</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─...</span></span>
<span class="line"><span style="color:#babed8;">│  │  ├─fe</span></span>
<span class="line"><span style="color:#babed8;">│  │  └─ff</span></span>
<span class="line"><span style="color:#babed8;">│  └─virtual</span></span>
<span class="line"><span style="color:#babed8;">│      └─legacy</span></span>
<span class="line"><span style="color:#babed8;">│          ├─...</span></span>
<span class="line"><span style="color:#babed8;">├─libraries</span></span>
<span class="line"><span style="color:#babed8;">│  ├─...</span></span>
<span class="line"><span style="color:#babed8;">└─versions</span></span>
<span class="line"><span style="color:#babed8;">    ├─[版本名]</span></span>
<span class="line"><span style="color:#babed8;">    │  ├─[版本名]-natives</span></span>
<span class="line"><span style="color:#babed8;">    │  ├─crash-reports</span></span>
<span class="line"><span style="color:#babed8;">    │  ├─logs</span></span>
<span class="line"><span style="color:#babed8;">    │  ├─mods</span></span>
<span class="line"><span style="color:#babed8;">    │  ├─resourcepacks</span></span>
<span class="line"><span style="color:#babed8;">    │  ├─saves</span></span>
<span class="line"><span style="color:#babed8;">    │  │  └─[存档名]</span></span>
<span class="line"><span style="color:#babed8;">    │  │      ├─advancements</span></span>
<span class="line"><span style="color:#babed8;">    │  │      ├─data</span></span>
<span class="line"><span style="color:#babed8;">    │  │      ├─datapacks</span></span>
<span class="line"><span style="color:#babed8;">    │  │      ├─DIM-1</span></span>
<span class="line"><span style="color:#babed8;">    │  │      │  └─data</span></span>
<span class="line"><span style="color:#babed8;">    │  │      ├─DIM1</span></span>
<span class="line"><span style="color:#babed8;">    │  │      │  └─data</span></span>
<span class="line"><span style="color:#babed8;">    │  │      ├─entities</span></span>
<span class="line"><span style="color:#babed8;">    │  │      ├─playerdata</span></span>
<span class="line"><span style="color:#babed8;">    │  │      ├─poi</span></span>
<span class="line"><span style="color:#babed8;">    │  │      ├─region</span></span>
<span class="line"><span style="color:#babed8;">    │  │      ├─serverconfig</span></span>
<span class="line"><span style="color:#babed8;">    │  │      └─stats</span></span>
<span class="line"><span style="color:#babed8;">    │  └─screenshots</span></span></code></pre></div><p>这其中，我们要寻找的日志如下。部分启动器也支持导出错误报告，此时可以在错误报告中直接寻找。</p><ul><li><p>关闭版本隔离：<code>.minecraft\\crash-reports\\crash-***.txt</code></p></li><li><p>开启版本隔离：<code>.minecraft\\versions\\***\\crash-reports\\crash-***.txt</code></p></li></ul><h2 id="处理崩溃" tabindex="-1">处理崩溃 <a class="header-anchor" href="#处理崩溃" aria-label="Permalink to &quot;处理崩溃&quot;">​</a></h2><p>得到了崩溃日志，就可以处理崩溃了。在接下来的文档中，有针对于 Mod 问题、系统问题、原版问题的解决方案，您可以对照日志自行参考解决。</p><p>最后，希望我们能帮助您成功解决问题，祝您游玩愉快！</p>`,13),c=[e];function o(t,b,r,i,d,y){return a(),n("div",null,c)}const _=s(p,[["render",o]]);export{f as __pageData,_ as default};
