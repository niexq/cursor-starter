<template><div><h1 id="🚀-快速开始" tabindex="-1"><a class="header-anchor" href="#🚀-快速开始"><span>🚀 快速开始</span></a></h1>
<p>欢迎来到Cursor最佳实践的世界！这里不是枯燥的功能介绍，而是让你<strong>立刻上手、马上见效</strong>的实战指南。</p>
<h2 id="🎯-5分钟快速上手" tabindex="-1"><a class="header-anchor" href="#🎯-5分钟快速上手"><span>🎯 5分钟快速上手</span></a></h2>
<h3 id="第一步-下载安装cursor" tabindex="-1"><a class="header-anchor" href="#第一步-下载安装cursor"><span>第一步：下载安装Cursor</span></a></h3>
<p>如果你还没有安装Cursor，请前往 <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer">cursor.sh</a> 下载最新版本。</p>
<h3 id="第二步-掌握核心快捷键" tabindex="-1"><a class="header-anchor" href="#第二步-掌握核心快捷键"><span>第二步：掌握核心快捷键</span></a></h3>
<p>这三个快捷键是你高效使用Cursor的基础：</p>
<table>
<thead>
<tr>
<th>快捷键</th>
<th>功能</th>
<th>使用场景</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>Cmd+K</code> (Mac) / <code v-pre>Ctrl+K</code> (Win)</td>
<td>快速编辑</td>
<td>选中代码后直接生成/修改</td>
</tr>
<tr>
<td><code v-pre>Cmd+L</code> (Mac) / <code v-pre>Ctrl+L</code> (Win)</td>
<td>聊天对话</td>
<td>复杂需求讨论和代码解释</td>
</tr>
<tr>
<td><code v-pre>Tab</code></td>
<td>智能补全</td>
<td>接受AI建议的代码补全</td>
</tr>
</tbody>
</table>
<h3 id="第三步-你的第一次ai对话" tabindex="-1"><a class="header-anchor" href="#第三步-你的第一次ai对话"><span>第三步：你的第一次AI对话</span></a></h3>
<p>让我们从一个简单的例子开始：</p>
<ol>
<li><strong>创建一个新文件</strong> <code v-pre>hello.js</code></li>
<li><strong>按下 <code v-pre>Cmd+K</code></strong>，输入：<code v-pre>创建一个函数，计算两个数的和</code></li>
<li><strong>按Tab接受建议</strong>，看看AI为你生成了什么</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🎉 恭喜！你已经完成了第一次AI代码生成。</p>
<h2 id="💡-立即见效的3个技巧" tabindex="-1"><a class="header-anchor" href="#💡-立即见效的3个技巧"><span>💡 立即见效的3个技巧</span></a></h2>
<h3 id="技巧1-精准描述需求" tabindex="-1"><a class="header-anchor" href="#技巧1-精准描述需求"><span>技巧1：精准描述需求</span></a></h3>
<p>❌ <strong>不好的描述</strong>：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">"帮我写个函数"</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>✅ <strong>好的描述</strong>：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">"创建一个JavaScript函数，接收一个数组参数，返回数组中所有偶数的和，函数名为sumEvenNumbers"</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="技巧2-提供上下文" tabindex="-1"><a class="header-anchor" href="#技巧2-提供上下文"><span>技巧2：提供上下文</span></a></h3>
<p>选中相关代码后再使用<code v-pre>Cmd+K</code>，AI能更好地理解你的意图：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 选中这段代码</span></span>
<span class="line"><span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Alice'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Bob'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 然后按Cmd+K，输入："为这个用户数组添加一个过滤成年用户的函数"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="技巧3-分步骤实现复杂功能" tabindex="-1"><a class="header-anchor" href="#技巧3-分步骤实现复杂功能"><span>技巧3：分步骤实现复杂功能</span></a></h3>
<p>不要一次性要求AI实现整个复杂功能，而是分步骤：</p>
<ol>
<li>先让AI创建基本结构</li>
<li>再添加具体功能</li>
<li>最后优化和美化</li>
</ol>
<h2 id="🔥-解决常见问题" tabindex="-1"><a class="header-anchor" href="#🔥-解决常见问题"><span>🔥 解决常见问题</span></a></h2>
<h3 id="q-500次对话很快就用完了怎么办" tabindex="-1"><a class="header-anchor" href="#q-500次对话很快就用完了怎么办"><span>Q: 500次对话很快就用完了怎么办？</span></a></h3>
<p><strong>A: 学会&quot;批量处理&quot;</strong></p>
<p>❌ 分别问：</p>
<ul>
<li>&quot;帮我写个按钮组件&quot;</li>
<li>&quot;给按钮加个点击效果&quot;</li>
<li>&quot;让按钮支持不同颜色&quot;</li>
</ul>
<p>✅ 一次性问：</p>
<ul>
<li>&quot;创建一个React按钮组件，支持不同颜色主题，包含点击动画效果，props包括color、onClick、children&quot;</li>
</ul>
<h3 id="q-ai生成的代码不符合我的项目风格" tabindex="-1"><a class="header-anchor" href="#q-ai生成的代码不符合我的项目风格"><span>Q: AI生成的代码不符合我的项目风格？</span></a></h3>
<p><strong>A: 提供样式参考</strong></p>
<p>在提问时附上你项目中的代码片段作为参考：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">"参考这个组件的风格：[粘贴你的代码]，帮我创建一个类似的表单组件"</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="q-如何让ai理解我的项目结构" tabindex="-1"><a class="header-anchor" href="#q-如何让ai理解我的项目结构"><span>Q: 如何让AI理解我的项目结构？</span></a></h3>
<p><strong>A: 使用<code v-pre>Cmd+L</code>进行项目讨论</strong></p>
<ol>
<li>按<code v-pre>Cmd+L</code>打开聊天</li>
<li>输入：&quot;这是我的项目结构：[描述或粘贴目录结构]&quot;</li>
<li>然后再提出具体需求</li>
</ol>
<h2 id="🎨-实战案例-5分钟实现一个todo组件" tabindex="-1"><a class="header-anchor" href="#🎨-实战案例-5分钟实现一个todo组件"><span>🎨 实战案例：5分钟实现一个Todo组件</span></a></h2>
<p>让我们用Cursor快速实现一个完整的Todo组件：</p>
<h3 id="步骤1-创建基础结构" tabindex="-1"><a class="header-anchor" href="#步骤1-创建基础结构"><span>步骤1：创建基础结构</span></a></h3>
<p>选择一个空白区域，按<code v-pre>Cmd+K</code>：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">创建一个React Todo组件，包含添加任务、标记完成、删除任务的功能，使用useState管理状态</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="步骤2-美化样式" tabindex="-1"><a class="header-anchor" href="#步骤2-美化样式"><span>步骤2：美化样式</span></a></h3>
<p>选中生成的组件，按<code v-pre>Cmd+K</code>：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">为这个Todo组件添加现代化的CSS样式，使用flexbox布局，包含悬停效果和完成任务的划线效果</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="步骤3-优化体验" tabindex="-1"><a class="header-anchor" href="#步骤3-优化体验"><span>步骤3：优化体验</span></a></h3>
<p>继续选中代码，按<code v-pre>Cmd+K</code>：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">添加输入验证，防止添加空白任务，并在添加任务后清空输入框</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>5分钟内，一个完整的Todo组件就完成了！</strong></p>
<h2 id="🚀-下一步学习路径" tabindex="-1"><a class="header-anchor" href="#🚀-下一步学习路径"><span>🚀 下一步学习路径</span></a></h2>
<p>现在你已经掌握了基础用法，可以深入学习更多技巧：</p>
<ol>
<li><strong><a href="/practices/" target="_blank" rel="noopener noreferrer">核心实践</a></strong> - 学习高级的AI对话技巧</li>
<li><strong><a href="/tips/" target="_blank" rel="noopener noreferrer">实用技巧</a></strong> - 掌握更多快捷键和工作流</li>
<li><strong><a href="/advanced/" target="_blank" rel="noopener noreferrer">进阶技巧</a></strong> - 自定义规则和团队协作</li>
</ol>
<h2 id="💪-每日练习建议" tabindex="-1"><a class="header-anchor" href="#💪-每日练习建议"><span>💪 每日练习建议</span></a></h2>
<ul>
<li><strong>第1周</strong>：熟练掌握<code v-pre>Cmd+K</code>、<code v-pre>Cmd+L</code>、<code v-pre>Tab</code>三个核心快捷键</li>
<li><strong>第2周</strong>：练习编写精准的提示词，提高AI理解准确度</li>
<li><strong>第3周</strong>：学习上下文管理，让AI更好地理解你的项目</li>
<li><strong>第4周</strong>：探索高级功能，建立自己的最佳实践</li>
</ul>
<hr>
<blockquote>
<p>💡 <strong>记住</strong>：Cursor是工具，思维才是核心。掌握了正确的使用方法，你会发现编程变得前所未有的高效和有趣！</p>
</blockquote>
<p><strong>准备好开始你的高效编程之旅了吗？</strong> <a href="/practices/" target="_blank" rel="noopener noreferrer">立即查看核心实践 →</a></p>
</div></template>


