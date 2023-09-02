import{_ as l,E as n,o as c,c as i,k as e,a as s,J as a,S as o}from"./chunks/framework.d3cbbba7.js";const fe=JSON.parse('{"title":"原版问题","description":"","frontmatter":{},"headers":[],"relativePath":"client/vanilla.md","filePath":"client/vanilla.md","lastUpdated":1693666548000}'),d={name:"client/vanilla.md"},p=o('<h1 id="原版问题" tabindex="-1">原版问题 <a class="header-anchor" href="#原版问题" aria-label="Permalink to &quot;原版问题&quot;">​</a></h1><p><code>Minecraft</code> 原版游戏中本身也存在许多问题，这里列出部分常见问题及解决方案。</p><blockquote><p>该板块内容也适用于安装了 Mod 加载器或 Mod 的游戏实例。</p></blockquote><blockquote><p>以下的原版游戏皆指 <strong>未安装 OptiFine 或者 Mod 加载器等修改原版核心工具</strong> 的 Minecraft 游戏实例。</p></blockquote><p>在处理原版崩溃之前，需要注意的是 Mojang 几乎完全没有可能写一个 100% 会爆炸的东西出来然后推送到正式版。因此 99.99% 的原版崩溃问题都来自外界。</p><p>首先请确保已经打开了启动器的 <strong>自动决定 Java</strong> 功能，否则可能会因为使用的 Java 版本错误而导致启动失败。</p><p>如果你是在安装一个新的 MC 版本之后发生了崩溃，那么请确保你的网络连接良好，然后前往启动器内使用 <strong>补全文件</strong> 功能。</p>',7),_={class:"details custom-block"},r=e("summary",null,"常见的第三方启动器补全功能位置",-1),h=e("code",null,"核心列表",-1),u=e("code",null,"点击核心",-1),b=e("code",null,"高级核心管理",-1),m=e("code",null,"恢复 / 删除",-1),g=e("code",null,"重置此核心",-1),v=e("code",null,"实例名称",-1),y=e("code",null,"管理",-1),k=e("code",null,"更新游戏资源文件",-1),f=e("code",null,"版本设置",-1),x=e("code",null,"补全文件",-1),C=e("strong",null,"含有 OpenGL 字样",-1),T=e("code",null,"游戏特定设置",-1),P=e("code",null,"高级设置",-1),M=e("code",null,"渲染器",-1),A=o(`<p>如果你正在游玩 1.16.5 或以下版本，请 <a href="https://cdn.crashmc.com/https://github.com/frekele/oracle-java/releases/download/8u51-b16/jre-8u51-windows-x64.exe" target="_blank" rel="noreferrer">下载 Java 8u51</a> 并安装，然后使用该 Java 启动游戏。</p><h2 id="存档损坏" tabindex="-1">存档损坏 <a class="header-anchor" href="#存档损坏" aria-label="Permalink to &quot;存档损坏&quot;">​</a></h2><p>关键词</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">Exception reading *\\level.dat</span></span>
<span class="line"><span style="color:#babed8;">Caused by: java.util.zip.ZipException: invalid distance too far back</span></span>
<span class="line"><span style="color:#babed8;">net.minecraft.util.crash.CrashException: Loading NBT data</span></span></code></pre></div><p>解决方案：</p><p>尝试打开存档目录，然后删除 <code>level.dat</code>，并将 <code>level.dat_old</code> 重命名为 <code>level.dat</code>。</p><p>对于专业玩家，您也可以使用 NBT 编辑器。</p><h2 id="资源包过大" tabindex="-1">资源包过大 <a class="header-anchor" href="#资源包过大" aria-label="Permalink to &quot;资源包过大&quot;">​</a></h2><p>解释：由于资源包过大，或是你的显卡配置不足，导致游戏不能正常运行。</p><p>解决方案：使用更低分辨率的资源包，或者换个更好的显卡？</p><p>关键词：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">Maybe try a lower resolution resourcepack?</span></span></code></pre></div><h2 id="文件校验失败" tabindex="-1">文件校验失败 <a class="header-anchor" href="#文件校验失败" aria-label="Permalink to &quot;文件校验失败&quot;">​</a></h2><p>解释：由于部分游戏文件或资源校验失败，游戏无法正常启动。</p><p>解决方案：使用启动器补全文件，抑或是重新下载游戏。</p>`,15),D={class:"details custom-block"},B=e("summary",null,"常见的第三方启动器补全功能位置",-1),S=e("code",null,"核心列表",-1),J=e("code",null,"点击核心",-1),L=e("code",null,"高级核心管理",-1),I=e("code",null,"恢复 / 删除",-1),q=e("code",null,"重置此核心",-1),N=e("code",null,"实例名称",-1),E=e("code",null,"管理",-1),V=e("code",null,"更新游戏资源文件",-1),w=e("code",null,"版本设置",-1),F=e("code",null,"补全文件",-1),O=o('<p>关键词：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">signer information does not match signer information of other classes in the same package</span></span></code></pre></div><h2 id="显存-内存问题" tabindex="-1">显存 / 内存问题 <a class="header-anchor" href="#显存-内存问题" aria-label="Permalink to &quot;显存 / 内存问题&quot;">​</a></h2><p>解释：显存溢出，或者内存分配过多导致问题。</p><p>解决方案：请逐个尝试以下方案。</p><ol><li>在桌面右键 <code>此电脑</code>，依次点击 <code>属性</code> -- <code>高级系统设置</code>，按下图顺序改成 <code>自动管理所有驱动器分页文件大小</code>，改完后点三个 <code>确定</code>（<strong>不要</strong>点右上角的叉），然后重启计算机。</li></ol><p><img src="https://img.kookapp.cn/assets/2023-03/bGbLMNRnws1020j1.png" alt="显存溢出解决方案"></p><ol start="2"><li>将内存分配量手动调低，再次尝试启动游戏。</li><li>关闭光影。</li></ol><p>关键词：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">message=&#39;GL_OUT_OF_MEMORY error generated. Failed to allocate memory for buffer data.&#39;</span></span></code></pre></div><h2 id="防火墙-防病毒安全软件-网络环境问题" tabindex="-1">防火墙 / 防病毒安全软件 / 网络环境问题 <a class="header-anchor" href="#防火墙-防病毒安全软件-网络环境问题" aria-label="Permalink to &quot;防火墙 / 防病毒安全软件 / 网络环境问题&quot;">​</a></h2><p>关键词：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">java.lang.IllegalStateException: failed to create a child event loop</span></span></code></pre></div><p>解决方案：请逐个尝试以下方案。</p><ol><li>如您安装了 Avast，尝试重新安装并重启 Avast。</li><li>如您安装了 McAfee（及其衍生产品）或 Outpost Security，尝试卸载该软件并再次重新启动游戏。</li><li>如您没有防病毒安全软件，尝试在 Microsoft Defender 中的 “防火墙和网络保护” 中关闭 “专用网络保护”。</li><li>关闭您的加速器或 VPN。</li><li>前往 Oracle 官网下载最新版 Java，并将该 Java 设置为游戏 Java。</li></ol>',15),j={class:"details custom-block"},R=e("summary",null,"常见的第三方启动器设置版本 Java 功能位置",-1),H=e("code",null,"核心列表",-1),X=e("code",null,"点击核心",-1),$=e("code",null,"高级核心管理",-1),G=e("code",null,"Java 虚拟机与内存",-1),W=e("code",null,"为此核心启用单独的 Java 虚拟机设定",-1),U=e("code",null,"开",-1),z=e("code",null,"实例名称",-1),K=e("code",null,"Java 路径",-1),Y=e("code",null,"版本设置",-1),Z=e("code",null,"设置",-1),Q=e("code",null,"游戏 Java",-1),ee=o(`<ol start="6"><li>更新显卡驱动程序。</li><li>如您正在使用 NVIDIA，请在 NVIDIA 控制面板的 “管理 3D 设置” 中对 Minecraft 恢复默认设置。</li><li>对于 Windows 操作系统，使用 Win+S 打开搜索框，搜索 “cmd”，点击搜索结果中右侧 “以管理员身份运行” 选项以使用管理员身份打开 cmd.exe，<strong>依次</strong>输入以下命令后重启计算机：</li></ol><div class="warning custom-block"><p class="custom-block-title">警告</p><p>以下命令将重置您的 WINSOCK、IPv4、IPv6 网络。</p></div><div class="language-bat"><button title="Copy Code" class="copy"></button><span class="lang">bat</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">netsh</span><span style="color:#BABED8;"> winsock reset </span></span>
<span class="line"><span style="color:#89DDFF;">netsh</span><span style="color:#BABED8;"> winsock reset catalog </span></span>
<span class="line"><span style="color:#89DDFF;">netsh</span><span style="color:#BABED8;"> int ipv4 reset reset.log </span></span>
<span class="line"><span style="color:#89DDFF;">netsh</span><span style="color:#BABED8;"> int ipv6 reset reset.log</span></span></code></pre></div><p>如以上方案仍无法解决崩溃问题，请尝试以下的<strong>临时解决方案</strong>：</p><div class="warning custom-block"><p class="custom-block-title">警告</p><p>请注意，以下解决方案均是临时的，无法彻底解决崩溃问题，多次使用后可能导致存档加载困难甚至进一步导致存档损坏，请结合自身情况适当进行采用。</p></div><p>方法一：</p><ol><li>关闭所有游戏实例。</li><li>打开版本所在的 Minecraft 游戏文件夹，删除以下名称的文件夹（如未找到则无需操作）：assets、bin、libraries、versions、webcache、config、defaultconfigs、usercache.json、usernamecache.json。</li></ol>`,7),se={class:"details custom-block"},te=e("summary",null,"常见的第三方启动器打开当前游戏文件夹位置",-1),ae=e("code",null,"本体设置",-1),oe=e("code",null,"游戏目录",-1),le=e("code",null,"可读写的 Minecraft 实例目录",-1),ne=e("code",null,"版本选择",-1),ce=e("code",null,"打开",-1),ie=e("ol",{start:"3"},[e("li",null,"重新下载并安装 Minecraft。"),e("li",null,"关闭所有 Minecraft 启动器。"),e("li",null,"重新启动游戏。")],-1),de=e("p",null,"通常，在进行上述操作后，游戏会成功启动一至两次，而后问题会再次出现。",-1),pe=e("p",null,"方法二：",-1),_e=e("div",{class:"warning custom-block"},[e("p",{class:"custom-block-title"},"警告"),e("p",null,"请注意，重复此办法打开存档数次后，存档将愈加难以成功进入。")],-1),re=e("p",null,"进入游戏后，重复尝试进入存档，通常会有很大概率在第二次成功打开存档。",-1);function he(ue,be,me,ge,ve,ye){const t=n("LauncherBadge");return c(),i("div",null,[p,e("details",_,[r,e("p",null,[s("重置核心 "),a(t,{type:"bakaxl",text:"BakaXL"}),s("："),h,s(" -> "),u,s(" -> "),b,s(" -> "),m,s(" -> "),g]),e("p",null,[s("更新游戏资源文件 "),a(t,{type:"hmcl",text:"HMCL"}),s("：点击左边的 "),v,s(" -> "),y,s(" -> "),k]),e("p",null,[s("补全文件 "),a(t,{type:"pcl",text:"PCL2"}),s("："),f,s(" -> "),x])]),e("p",null,[s("如果你在启动游戏时弹出了 "),C,s(" 的英文弹窗，请前往你使用的显卡官网下载对应你显卡的最新驱动并安装。如果你使用的是 3 代及以前的 Intel 核显，则理论上无法游玩任何需要 Java 17 的版本。你也可以尝试使用软渲染器"),a(t,{type:"hmcl",text:"仅 HMCL"}),s("（在 "),T,s(" -> "),P,s(" -> "),M,s(" 里修改），但这可能会严重降低游戏性能。")]),A,e("details",D,[B,e("p",null,[s("重置核心 "),a(t,{type:"bakaxl",text:"BakaXL"}),s("："),S,s(" -> "),J,s(" -> "),L,s(" -> "),I,s(" -> "),q]),e("p",null,[s("更新游戏资源文件 "),a(t,{type:"hmcl",text:"HMCL"}),s("：点击左边的 "),N,s(" -> "),E,s(" -> "),V]),e("p",null,[s("补全文件 "),a(t,{type:"pcl",text:"PCL2"}),s("："),w,s(" -> "),F])]),O,e("details",j,[R,e("p",null,[s("Java 虚拟机 "),a(t,{type:"bakaxl",text:"BakaXL"}),s("："),H,s(" -> "),X,s(" -> "),$,s(" -> "),G,s(" -> "),W,s(" 设置为 "),U]),e("p",null,[s("Java 路径 "),a(t,{type:"hmcl",text:"HMCL"}),s("：点击左边的 "),z,s(" -> "),K]),e("p",null,[s("游戏 Java "),a(t,{type:"pcl",text:"PCL2"}),s("："),Y,s(" -> "),Z,s(" -> "),Q])]),ee,e("details",se,[te,a(t,{type:"bakaxl",text:"BakaXL"}),s("：切换至下方页面 -> "),ae,s(" -> "),oe,s(" -> "),le,s(" -> 当前版本所在的游戏文件夹右侧的定位按钮"),a(t,{type:"pcl",text:"PCL2"}),s("："),ne,s(" -> 鼠标悬浮于当前处在的游戏文件夹上方 -> 左边栏右侧出现的齿轮按钮 -> "),ce]),ie,de,pe,_e,re])}const xe=l(d,[["render",he]]);export{fe as __pageData,xe as default};
