<template><div><h1 id="🎯-cursor-基础教程" tabindex="-1"><a class="header-anchor" href="#🎯-cursor-基础教程"><span>🎯 Cursor 基础教程</span></a></h1>
<blockquote>
<p>基于<a href="https://docs.cursor.com/welcome/" target="_blank" rel="noopener noreferrer">Cursor官方文档</a>整理的完整基础教程</p>
</blockquote>
<p>Cursor是一款被数百万工程师使用的AI代码编辑器，由一系列定制模型驱动，生成的代码量几乎超过了世界上任何LLM。</p>
<h2 id="🚀-快速入门" tabindex="-1"><a class="header-anchor" href="#🚀-快速入门"><span>🚀 快速入门</span></a></h2>
<h3 id="什么是cursor" tabindex="-1"><a class="header-anchor" href="#什么是cursor"><span>什么是Cursor？</span></a></h3>
<p>Cursor是下一代AI代码编辑器，它不仅仅是一个普通的代码编辑器，而是你的AI编程伙伴。它能够：</p>
<ul>
<li>🔮 <strong>预测你的下一步编辑</strong>：通过先进的Tab补全功能</li>
<li>🤖 <strong>理解你的代码库</strong>：通过代码库索引和上下文管理</li>
<li>⚡ <strong>快速生成代码</strong>：通过Cmd+K内联编辑</li>
<li>🧠 <strong>执行复杂的代码变更</strong>：通过AI Agent功能</li>
</ul>
<p><img src="/images/cursor-basics.svg" alt="Cursor基础功能"></p>
<h2 id="🎮-核心功能详解" tabindex="-1"><a class="header-anchor" href="#🎮-核心功能详解"><span>🎮 核心功能详解</span></a></h2>
<h3 id="_1-tab补全-智能预测编辑" tabindex="-1"><a class="header-anchor" href="#_1-tab补全-智能预测编辑"><span>1. Tab补全 - 智能预测编辑</span></a></h3>
<p><strong>Tab补全</strong>是Cursor最核心的功能之一，由最先进的模型系列驱动。</p>
<h4 id="工作原理" tabindex="-1"><a class="header-anchor" href="#工作原理"><span>工作原理</span></a></h4>
<ul>
<li>🔍 <strong>上下文分析</strong>：分析你当前的代码上下文</li>
<li>🎯 <strong>意图预测</strong>：预测你接下来要写的代码</li>
<li>⚡ <strong>即时建议</strong>：提供精准的代码建议</li>
</ul>
<h4 id="使用技巧" tabindex="-1"><a class="header-anchor" href="#使用技巧"><span>使用技巧</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 当你开始输入时，Tab会自动建议补全</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">calculateTax</span><span class="token punctuation">(</span><span class="token parameter">income</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 按Tab接受建议</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>income <span class="token operator">&lt;=</span> <span class="token number">10000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> income <span class="token operator">*</span> <span class="token number">0.1</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token comment">// 继续输入，Tab会持续预测</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/images/tab-completion.svg" alt="Tab补全工作流"></p>
<h3 id="_2-ai-agent-你的编程伙伴" tabindex="-1"><a class="header-anchor" href="#_2-ai-agent-你的编程伙伴"><span>2. AI Agent - 你的编程伙伴</span></a></h3>
<p><strong>AI Agent</strong>是处理复杂代码更改的强大工具。</p>
<h4 id="核心能力" tabindex="-1"><a class="header-anchor" href="#核心能力"><span>核心能力</span></a></h4>
<ul>
<li>🏗️ <strong>大规模编辑</strong>：一次性修改多个文件</li>
<li>🎛️ <strong>上下文控制</strong>：精确控制AI的理解范围</li>
<li>🔧 <strong>自动修复</strong>：自动处理代码中的问题</li>
</ul>
<h4 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景</span></a></h4>
<ul>
<li>重构整个模块</li>
<li>添加新功能到现有代码库</li>
<li>修复跨文件的bug</li>
<li>实现复杂的业务逻辑</li>
</ul>
<p><img src="/images/ai-agent-workflow.svg" alt="AI Agent工作流"></p>
<h3 id="_3-cmd-k-内联快速编辑" tabindex="-1"><a class="header-anchor" href="#_3-cmd-k-内联快速编辑"><span>3. Cmd+K - 内联快速编辑</span></a></h3>
<p><strong>Cmd+K</strong>是最常用的快速编辑功能，完美适合精确修改。</p>
<h4 id="特点" tabindex="-1"><a class="header-anchor" href="#特点"><span>特点</span></a></h4>
<ul>
<li>⚡ <strong>即时响应</strong>：不打断你的编码流程</li>
<li>🎯 <strong>精确编辑</strong>：针对特定代码片段的修改</li>
<li>🔄 <strong>无缝集成</strong>：直接在代码中生成和修改</li>
</ul>
<h4 id="实用示例" tabindex="-1"><a class="header-anchor" href="#实用示例"><span>实用示例</span></a></h4>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code><span class="line"><span class="token comment"># 选中这个函数，按Cmd+K</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">process_data</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># 输入："添加错误处理和日志记录"</span></span>
<span class="line">    <span class="token keyword">pass</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🧠-上下文管理" tabindex="-1"><a class="header-anchor" href="#🧠-上下文管理"><span>🧠 上下文管理</span></a></h2>
<h3 id="代码库索引" tabindex="-1"><a class="header-anchor" href="#代码库索引"><span>代码库索引</span></a></h3>
<p>Cursor会自动索引你的代码库，理解：</p>
<ul>
<li>📁 <strong>项目结构</strong>：文件和目录关系</li>
<li>🔗 <strong>代码依赖</strong>：函数和类的调用关系</li>
<li>📝 <strong>注释和文档</strong>：代码的意图和说明</li>
</ul>
<h3 id="符号-精确引用" tabindex="-1"><a class="header-anchor" href="#符号-精确引用"><span>@ 符号 - 精确引用</span></a></h3>
<p>使用<code v-pre>@</code>符号可以精确引用特定的代码元素：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">@filename.js - 引用特定文件</span>
<span class="line">@function_name - 引用特定函数</span>
<span class="line">@ClassName - 引用特定类</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/images/context-management.svg" alt="上下文管理"></p>
<h2 id="🎛️-高级功能" tabindex="-1"><a class="header-anchor" href="#🎛️-高级功能"><span>🎛️ 高级功能</span></a></h2>
<h3 id="rules-自定义规则" tabindex="-1"><a class="header-anchor" href="#rules-自定义规则"><span>Rules - 自定义规则</span></a></h3>
<p>通过Rules功能，你可以：</p>
<ul>
<li>📋 <strong>定义编码规范</strong>：统一团队的代码风格</li>
<li>🎯 <strong>设置项目偏好</strong>：指定使用的框架和库</li>
<li>🔧 <strong>自定义行为</strong>：让AI按照你的方式工作</li>
</ul>
<h3 id="忽略文件" tabindex="-1"><a class="header-anchor" href="#忽略文件"><span>忽略文件</span></a></h3>
<p>类似<code v-pre>.gitignore</code>，你可以创建<code v-pre>.cursorignore</code>文件来：</p>
<ul>
<li>🚫 <strong>排除不相关文件</strong>：避免AI分析无关代码</li>
<li>⚡ <strong>提升性能</strong>：减少索引时间</li>
<li>🎯 <strong>聚焦重点</strong>：让AI专注于核心代码</li>
</ul>
<h2 id="🚀-开始使用指南" tabindex="-1"><a class="header-anchor" href="#🚀-开始使用指南"><span>🚀 开始使用指南</span></a></h2>
<h3 id="第一步-安装cursor" tabindex="-1"><a class="header-anchor" href="#第一步-安装cursor"><span>第一步：安装Cursor</span></a></h3>
<ol>
<li>访问<a href="https://cursor.com" target="_blank" rel="noopener noreferrer">Cursor官网</a>下载适合你平台的版本</li>
<li>安装完成后，可以一键导入VS Code的扩展和设置</li>
<li>享受14天免费试用Pro计划</li>
</ol>
<h3 id="第二步-熟悉快捷键" tabindex="-1"><a class="header-anchor" href="#第二步-熟悉快捷键"><span>第二步：熟悉快捷键</span></a></h3>
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
<td><code v-pre>Tab</code></td>
<td>智能补全</td>
<td>接受AI建议的代码</td>
</tr>
<tr>
<td><code v-pre>Cmd+K</code> (Mac) / <code v-pre>Ctrl+K</code> (Win)</td>
<td>内联编辑</td>
<td>快速修改选中代码</td>
</tr>
<tr>
<td><code v-pre>Cmd+L</code> (Mac) / <code v-pre>Ctrl+L</code> (Win)</td>
<td>聊天对话</td>
<td>复杂问题讨论</td>
</tr>
<tr>
<td><code v-pre>Cmd+I</code> (Mac) / <code v-pre>Ctrl+I</code> (Win)</td>
<td>AI Agent</td>
<td>大规模代码变更</td>
</tr>
</tbody>
</table>
<h3 id="第三步-配置你的工作环境" tabindex="-1"><a class="header-anchor" href="#第三步-配置你的工作环境"><span>第三步：配置你的工作环境</span></a></h3>
<ol>
<li><strong>设置Rules</strong>：定义你的编码偏好</li>
<li><strong>配置忽略文件</strong>：排除不需要的文件</li>
<li><strong>选择合适的模型</strong>：根据需求选择AI模型</li>
</ol>
<p><img src="/images/cursor-setup.svg" alt="Cursor设置指南"></p>
<h2 id="💡-最佳实践" tabindex="-1"><a class="header-anchor" href="#💡-最佳实践"><span>💡 最佳实践</span></a></h2>
<h3 id="_1-有效使用tab补全" tabindex="-1"><a class="header-anchor" href="#_1-有效使用tab补全"><span>1. 有效使用Tab补全</span></a></h3>
<ul>
<li>✅ <strong>保持代码整洁</strong>：清晰的代码结构有助于AI理解</li>
<li>✅ <strong>提供足够上下文</strong>：让AI了解你的意图</li>
<li>✅ <strong>及时按Tab</strong>：不要让建议消失</li>
</ul>
<h3 id="_2-优化ai-agent使用" tabindex="-1"><a class="header-anchor" href="#_2-优化ai-agent使用"><span>2. 优化AI Agent使用</span></a></h3>
<ul>
<li>✅ <strong>明确描述需求</strong>：详细说明要实现的功能</li>
<li>✅ <strong>分步骤执行</strong>：复杂任务分解为小步骤</li>
<li>✅ <strong>审查生成的代码</strong>：确保代码质量</li>
</ul>
<h3 id="_3-管理上下文" tabindex="-1"><a class="header-anchor" href="#_3-管理上下文"><span>3. 管理上下文</span></a></h3>
<ul>
<li>✅ <strong>使用@符号</strong>：精确引用相关代码</li>
<li>✅ <strong>定期清理</strong>：删除不相关的上下文</li>
<li>✅ <strong>合理分组</strong>：将相关文件放在一起</li>
</ul>
<h2 id="🎯-进阶技巧" tabindex="-1"><a class="header-anchor" href="#🎯-进阶技巧"><span>🎯 进阶技巧</span></a></h2>
<h3 id="_1-自定义模型配置" tabindex="-1"><a class="header-anchor" href="#_1-自定义模型配置"><span>1. 自定义模型配置</span></a></h3>
<p>Cursor支持多种AI模型，每种模型都有其独特的优势和适用场景。选择合适的模型对提升开发效率至关重要。</p>
<p><img src="/images/ai-models.svg" alt="AI模型选择指南"></p>
<h4 id="模型特性对比" tabindex="-1"><a class="header-anchor" href="#模型特性对比"><span>模型特性对比</span></a></h4>
<p><strong>GPT-4系列</strong></p>
<ul>
<li>逻辑推理能力突出，适合复杂算法设计</li>
<li>多语言支持全面，技术栈覆盖广泛</li>
<li>架构设计和系统规划表现优秀</li>
<li>适用场景：系统设计、算法实现、技术选型</li>
</ul>
<p><strong>Claude系列</strong></p>
<ul>
<li>代码审查和重构能力强</li>
<li>安全意识和最佳实践把控严格</li>
<li>性能优化建议精准</li>
<li>适用场景：代码重构、性能优化、安全审计</li>
</ul>
<p><strong>Cursor专有模型</strong></p>
<ul>
<li>专为编程场景优化，响应速度快</li>
<li>上下文理解能力强，代码补全精准</li>
<li>资源消耗低，适合频繁调用</li>
<li>适用场景：日常编码、快速原型、代码补全</li>
</ul>
<h4 id="模型选择策略" tabindex="-1"><a class="header-anchor" href="#模型选择策略"><span>模型选择策略</span></a></h4>
<ol>
<li><strong>任务复杂度匹配</strong>：简单任务使用轻量模型，复杂任务使用强力模型</li>
<li><strong>成本效益平衡</strong>：合理分配免费额度，避免过度消耗</li>
<li><strong>响应速度考虑</strong>：紧急任务优先选择响应快的模型</li>
<li><strong>质量要求权衡</strong>：生产代码使用高质量模型，实验代码可用轻量模型</li>
</ol>
<h3 id="_2-团队协作" tabindex="-1"><a class="header-anchor" href="#_2-团队协作"><span>2. 团队协作</span></a></h3>
<ul>
<li>📋 <strong>共享Rules配置</strong>：统一团队编码规范</li>
<li>🔄 <strong>代码审查集成</strong>：结合AI进行代码审查</li>
<li>📚 <strong>知识库建设</strong>：积累团队的最佳实践</li>
</ul>
<h3 id="_3-性能优化" tabindex="-1"><a class="header-anchor" href="#_3-性能优化"><span>3. 性能优化</span></a></h3>
<ul>
<li>⚡ <strong>合理使用缓存</strong>：避免重复索引</li>
<li>🎯 <strong>精确配置忽略文件</strong>：排除无关文件</li>
<li>📊 <strong>监控使用情况</strong>：优化AI调用频率</li>
</ul>
<h2 id="🔧-故障排除与优化" tabindex="-1"><a class="header-anchor" href="#🔧-故障排除与优化"><span>🔧 故障排除与优化</span></a></h2>
<h3 id="常见问题诊断" tabindex="-1"><a class="header-anchor" href="#常见问题诊断"><span>常见问题诊断</span></a></h3>
<h4 id="_1-tab补全相关问题" tabindex="-1"><a class="header-anchor" href="#_1-tab补全相关问题"><span>1. Tab补全相关问题</span></a></h4>
<p><strong>问题现象</strong>：Tab补全不响应或建议质量差
<strong>诊断步骤</strong>：</p>
<ol>
<li>检查网络连接状态</li>
<li>验证Cursor账户状态和API配额</li>
<li>重启Cursor编辑器</li>
<li>清除编辑器缓存</li>
<li>检查项目索引状态</li>
</ol>
<p><strong>解决方案</strong>：</p>
<ul>
<li>确保稳定的网络环境</li>
<li>升级到Pro计划获得更多配额</li>
<li>优化项目结构，减少无关文件</li>
<li>使用<code v-pre>.cursorignore</code>排除大型文件</li>
</ul>
<h4 id="_2-ai响应性能问题" tabindex="-1"><a class="header-anchor" href="#_2-ai响应性能问题"><span>2. AI响应性能问题</span></a></h4>
<p><strong>问题现象</strong>：AI响应缓慢或超时
<strong>性能优化策略</strong>：</p>
<ol>
<li><strong>上下文管理</strong>：精确控制上下文大小，避免包含过多无关信息</li>
<li><strong>文件索引优化</strong>：定期清理索引，确保索引文件是最新的</li>
<li><strong>模型选择</strong>：根据任务复杂度选择合适的模型</li>
<li><strong>网络优化</strong>：使用稳定的网络环境，考虑使用代理</li>
</ol>
<h4 id="_3-代码质量问题" tabindex="-1"><a class="header-anchor" href="#_3-代码质量问题"><span>3. 代码质量问题</span></a></h4>
<p><strong>问题现象</strong>：生成的代码不符合预期或质量不高
<strong>质量提升方法</strong>：</p>
<ol>
<li><strong>提示词优化</strong>：使用清晰、具体的描述</li>
<li><strong>上下文丰富</strong>：提供足够的代码上下文</li>
<li><strong>模型适配</strong>：选择适合当前任务的AI模型</li>
<li><strong>迭代改进</strong>：通过多轮对话逐步完善代码</li>
</ol>
<h3 id="性能监控与优化" tabindex="-1"><a class="header-anchor" href="#性能监控与优化"><span>性能监控与优化</span></a></h3>
<h4 id="使用情况监控" tabindex="-1"><a class="header-anchor" href="#使用情况监控"><span>使用情况监控</span></a></h4>
<ul>
<li>定期检查API使用统计</li>
<li>监控响应时间和成功率</li>
<li>分析最耗费资源的操作</li>
</ul>
<h4 id="优化建议" tabindex="-1"><a class="header-anchor" href="#优化建议"><span>优化建议</span></a></h4>
<ol>
<li><strong>批量操作</strong>：将多个小请求合并为一个大请求</li>
<li><strong>缓存利用</strong>：充分利用Cursor的本地缓存</li>
<li><strong>智能筛选</strong>：只对关键代码使用高级模型</li>
<li><strong>定期维护</strong>：清理项目文件，更新依赖</li>
</ol>
<h2 id="🎉-总结" tabindex="-1"><a class="header-anchor" href="#🎉-总结"><span>🎉 总结</span></a></h2>
<p>Cursor不仅仅是一个代码编辑器，它是你的AI编程伙伴。通过合理使用其核心功能：</p>
<ul>
<li>🔮 <strong>Tab补全</strong>：提升编码速度</li>
<li>🤖 <strong>AI Agent</strong>：处理复杂任务</li>
<li>⚡ <strong>Cmd+K</strong>：快速精确编辑</li>
<li>🧠 <strong>上下文管理</strong>：让AI更懂你的代码</li>
</ul>
<p>你将体验到前所未有的编程效率提升。</p>
<hr>
<blockquote>
<p>💡 <strong>提示</strong>：这只是Cursor功能的冰山一角。随着你使用经验的积累，你会发现更多提升效率的技巧。</p>
<p>🚀 <strong>下一步</strong>：尝试在你的项目中应用这些基础功能，然后学习更多<a href="/advanced/" target="_blank" rel="noopener noreferrer">高级技巧</a>。</p>
</blockquote>
</div></template>


