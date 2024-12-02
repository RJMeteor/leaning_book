import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,a as t,o as a}from"./app-BT4JESbz.js";const l="/leaning_book/github/setting_ssh1.png",n="/leaning_book/github/setting_ssh2.png",h="/leaning_book/github/setting_ssh3.png",r={mounted(){this.redirectToOtherPage()},methods:{redirectToOtherPage(){this.$route.query.from==="specificPage"&&this.$router.push("/other/page")}}};function d(o,i,p,c,g,k){return a(),e("div",null,i[0]||(i[0]=[t('<h2 id="免密提交和拉取代码" tabindex="-1"><a class="header-anchor" href="#免密提交和拉取代码"><span><strong>免密提交和拉取代码</strong></span></a></h2><h3 id="_1-windows-linux-生成密钥对" tabindex="-1"><a class="header-anchor" href="#_1-windows-linux-生成密钥对"><span>1. windows/linux 生成密钥对</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ssh-keygen</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rsa</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -C</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;your_email@example.com&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><code>your_email@example.com</code>为注册github账号（可选）、<code>rsa</code>为加密算法</p><p>找到<code>.ssh</code>下的公钥文件<code>id_rsa.pub</code>复制里面的内容。</p><h3 id="_2-登录github账号-进入设置面板-添加ssh授权" tabindex="-1"><a class="header-anchor" href="#_2-登录github账号-进入设置面板-添加ssh授权"><span>2. 登录github账号，进入设置面板，添加SSH授权</span></a></h3><p><span style="display:flex;justify-content:center;"><img src="'+l+'" alt="feiji.svg" loading="lazy"></span></p><p><span style="display:flex;justify-content:center;"><img src="'+n+'" alt="feiji.svg" loading="lazy"></span></p><p><span style="display:flex;justify-content:center;"><img src="'+h+'" alt="feiji.svg" loading="lazy"></span></p><h3 id="_3-用ssh地址拉去代码" tabindex="-1"><a class="header-anchor" href="#_3-用ssh地址拉去代码"><span>3. 用SSH地址拉去代码</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clone</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git@github.com:RJMeteor/handwriting_rpc.git</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><template></template>',12)]))}const b=s(r,[["render",d],["__file","index.html.vue"]]),_=JSON.parse('{"path":"/others/bgt18a3c/","title":"GitHub","lang":"zh-CN","frontmatter":{"title":"GitHub","author":"RJMeteor","createTime":"2024/11/08 10:12:41","permalink":"/others/bgt18a3c/"},"headers":[{"level":2,"title":"免密提交和拉取代码","slug":"免密提交和拉取代码","link":"#免密提交和拉取代码","children":[{"level":3,"title":"1. windows/linux 生成密钥对","slug":"_1-windows-linux-生成密钥对","link":"#_1-windows-linux-生成密钥对","children":[]},{"level":3,"title":"2. 登录github账号，进入设置面板，添加SSH授权","slug":"_2-登录github账号-进入设置面板-添加ssh授权","link":"#_2-登录github账号-进入设置面板-添加ssh授权","children":[]},{"level":3,"title":"3. 用SSH地址拉去代码","slug":"_3-用ssh地址拉去代码","link":"#_3-用ssh地址拉去代码","children":[]}]}],"git":{"createdTime":1731089128000,"updatedTime":1733138330000,"contributors":[{"name":"RJMeteor","email":"3029364473@qq,com","commits":2},{"name":"RJMeteor","email":"3029364473@qq.com","commits":1}]},"readingTime":{"minutes":0.65,"words":194},"filePathRelative":"pages/others/github.md","localizedDate":"2024年11月8日","excerpt":"<h2><strong>免密提交和拉取代码</strong></h2>\\n<h3>1. windows/linux 生成密钥对</h3>\\n<div class=\\"language-shell line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"shell\\" data-title=\\"shell\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">ssh-keygen</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -t</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> rsa</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -C</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> \\"your_email@example.com\\"</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>"}');export{b as comp,_ as data};