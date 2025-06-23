import{_ as i,c as l,a as d,b as e,d as n,e as r,w as t,r as p,o as c}from"./app-lUwYjfZt.js";const v={};function u(h,s){const a=p("RouteLink");return c(),l("div",null,[s[5]||(s[5]=d(`<h1 id="🚀-ai请求优化术" tabindex="-1"><a class="header-anchor" href="#🚀-ai请求优化术"><span>🚀 AI请求优化术</span></a></h1><p><strong>500次请求真的不够用？还是你不会用？</strong></p><p>很多开发者抱怨Cursor的500次对话限制太少，但实际上，掌握正确的使用技巧后，500次请求足够支撑一个月的高效开发。问题不在于次数，而在于<strong>如何用</strong>。</p><h2 id="🎯-核心原则" tabindex="-1"><a class="header-anchor" href="#🎯-核心原则"><span>🎯 核心原则</span></a></h2><h3 id="原则1-批量处理-分散提问" tabindex="-1"><a class="header-anchor" href="#原则1-批量处理-分散提问"><span>原则1：批量处理 &gt; 分散提问</span></a></h3><p>❌ <strong>低效方式</strong>（消耗5次请求）：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">1. &quot;帮我创建一个按钮组件&quot;</span>
<span class="line">2. &quot;给按钮添加点击效果&quot;</span>
<span class="line">3. &quot;让按钮支持不同尺寸&quot;</span>
<span class="line">4. &quot;添加loading状态&quot;</span>
<span class="line">5. &quot;优化按钮的样式&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>✅ <strong>高效方式</strong>（消耗1次请求）：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">创建一个React按钮组件，要求：</span>
<span class="line">- 支持primary、secondary、danger三种类型</span>
<span class="line">- 支持small、medium、large三种尺寸</span>
<span class="line">- 包含loading状态和禁用状态</span>
<span class="line">- 点击时有ripple动画效果</span>
<span class="line">- 使用TypeScript编写</span>
<span class="line">- 遵循Material Design规范</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="原则2-cmd-k-cmd-l" tabindex="-1"><a class="header-anchor" href="#原则2-cmd-k-cmd-l"><span>原则2：Cmd+K &gt; Cmd+L</span></a></h3><p>对于简单的代码生成和修改，优先使用<code>Cmd+K</code>而不是<code>Cmd+L</code>：</p><ul><li><strong>Cmd+K</strong>：直接在代码中生成，不消耗对话次数</li><li><strong>Cmd+L</strong>：进入聊天模式，每次交互都消耗次数</li></ul><h3 id="原则3-上下文复用" tabindex="-1"><a class="header-anchor" href="#原则3-上下文复用"><span>原则3：上下文复用</span></a></h3><p>在同一个对话中尽可能多地完成相关任务：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">我正在开发一个电商项目，请帮我：</span>
<span class="line"></span>
<span class="line">1. 创建商品卡片组件（包含图片、标题、价格、购买按钮）</span>
<span class="line">2. 创建商品列表组件（使用上面的卡片组件）</span>
<span class="line">3. 添加筛选和排序功能</span>
<span class="line">4. 实现分页逻辑</span>
<span class="line">5. 添加购物车功能</span>
<span class="line"></span>
<span class="line">请一步步实现，每个组件都要包含TypeScript类型定义。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🔥-实战技巧" tabindex="-1"><a class="header-anchor" href="#🔥-实战技巧"><span>🔥 实战技巧</span></a></h2><h3 id="技巧1-模板化提问" tabindex="-1"><a class="header-anchor" href="#技巧1-模板化提问"><span>技巧1：模板化提问</span></a></h3><p>准备一套标准的提问模板，提高沟通效率：</p><h4 id="组件创建模板" tabindex="-1"><a class="header-anchor" href="#组件创建模板"><span>组件创建模板</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">创建一个[组件类型]组件，要求：</span>
<span class="line">- 功能：[具体功能描述]</span>
<span class="line">- 属性：[props列表]</span>
<span class="line">- 样式：[样式要求]</span>
<span class="line">- 交互：[交互效果]</span>
<span class="line">- 技术栈：[React/Vue/原生JS等]</span>
<span class="line">- 类型：[TypeScript/JavaScript]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="代码优化模板" tabindex="-1"><a class="header-anchor" href="#代码优化模板"><span>代码优化模板</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">优化以下代码：</span>
<span class="line">[粘贴代码]</span>
<span class="line"></span>
<span class="line">优化方向：</span>
<span class="line">- 性能优化</span>
<span class="line">- 代码可读性</span>
<span class="line">- 错误处理</span>
<span class="line">- 类型安全</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="bug修复模板" tabindex="-1"><a class="header-anchor" href="#bug修复模板"><span>Bug修复模板</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">代码出现问题：</span>
<span class="line">[粘贴代码]</span>
<span class="line"></span>
<span class="line">错误信息：</span>
<span class="line">[粘贴错误信息]</span>
<span class="line"></span>
<span class="line">期望行为：</span>
<span class="line">[描述期望的正确行为]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="技巧2-分层次提问" tabindex="-1"><a class="header-anchor" href="#技巧2-分层次提问"><span>技巧2：分层次提问</span></a></h3><p>对于复杂需求，采用分层次的提问策略：</p><h4 id="第一层-架构设计" tabindex="-1"><a class="header-anchor" href="#第一层-架构设计"><span>第一层：架构设计</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">我要开发一个任务管理应用，请帮我设计：</span>
<span class="line">1. 整体架构（前端技术栈选择）</span>
<span class="line">2. 数据结构设计</span>
<span class="line">3. 主要功能模块划分</span>
<span class="line">4. 状态管理方案</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="第二层-具体实现" tabindex="-1"><a class="header-anchor" href="#第二层-具体实现"><span>第二层：具体实现</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">基于上面的设计，请帮我实现：</span>
<span class="line">1. 任务数据的TypeScript类型定义</span>
<span class="line">2. 任务CRUD操作的API封装</span>
<span class="line">3. 任务列表组件</span>
<span class="line">4. 任务编辑表单组件</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="第三层-优化完善" tabindex="-1"><a class="header-anchor" href="#第三层-优化完善"><span>第三层：优化完善</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">现在帮我完善应用：</span>
<span class="line">1. 添加拖拽排序功能</span>
<span class="line">2. 实现任务搜索和筛选</span>
<span class="line">3. 添加数据持久化</span>
<span class="line">4. 优化移动端体验</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="技巧3-上下文管理" tabindex="-1"><a class="header-anchor" href="#技巧3-上下文管理"><span>技巧3：上下文管理</span></a></h3><h4 id="保持对话连贯性" tabindex="-1"><a class="header-anchor" href="#保持对话连贯性"><span>保持对话连贯性</span></a></h4><p>在一个对话中，AI会记住之前的上下文，充分利用这一点：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"># 第一次提问</span>
<span class="line">创建一个用户管理系统的用户表格组件</span>
<span class="line"></span>
<span class="line"># 第二次提问（在同一对话中）</span>
<span class="line">为上面的表格添加分页功能</span>
<span class="line"></span>
<span class="line"># 第三次提问（在同一对话中）</span>
<span class="line">再添加搜索和筛选功能</span>
<span class="line"></span>
<span class="line"># 第四次提问（在同一对话中）</span>
<span class="line">最后添加批量操作功能</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="及时清理无关上下文" tabindex="-1"><a class="header-anchor" href="#及时清理无关上下文"><span>及时清理无关上下文</span></a></h4><p>当对话内容过多或偏离主题时，主动清理：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">忘记我们之前讨论的内容，现在我需要你帮我创建一个全新的项目...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="📊-效果对比" tabindex="-1"><a class="header-anchor" href="#📊-效果对比"><span>📊 效果对比</span></a></h2><h3 id="传统方式-vs-优化方式" tabindex="-1"><a class="header-anchor" href="#传统方式-vs-优化方式"><span>传统方式 vs 优化方式</span></a></h3><table><thead><tr><th>场景</th><th>传统方式</th><th>优化方式</th><th>节省次数</th></tr></thead><tbody><tr><td>创建完整组件</td><td>5-8次请求</td><td>1-2次请求</td><td>节省70%</td></tr><tr><td>功能迭代</td><td>每个功能1次</td><td>批量处理</td><td>节省60%</td></tr><tr><td>Bug修复</td><td>来回调试3-5次</td><td>一次性提供完整信息</td><td>节省80%</td></tr></tbody></table><h3 id="实际案例" tabindex="-1"><a class="header-anchor" href="#实际案例"><span>实际案例</span></a></h3><p><strong>案例：开发一个博客系统</strong></p><p>❌ <strong>低效方式</strong>（预计消耗50+次请求）：</p><ul><li>分别创建每个组件</li><li>单独处理每个功能</li><li>遇到问题分别提问</li></ul><p>✅ <strong>高效方式</strong>（实际消耗15次请求）：</p><ul><li>第1次：整体架构设计</li><li>第2次：数据结构和API设计</li><li>第3-8次：批量创建核心组件</li><li>第9-12次：功能完善和优化</li><li>第13-15次：Bug修复和调优</li></ul><h2 id="🎯-进阶策略" tabindex="-1"><a class="header-anchor" href="#🎯-进阶策略"><span>🎯 进阶策略</span></a></h2><h3 id="策略1-建立个人知识库" tabindex="-1"><a class="header-anchor" href="#策略1-建立个人知识库"><span>策略1：建立个人知识库</span></a></h3><p>将常用的提问模板、代码片段整理成个人知识库：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"># 我的Cursor提问模板</span>
<span class="line"></span>
<span class="line">## React组件模板</span>
<span class="line">创建一个React [组件名]组件：</span>
<span class="line">- Props: [类型定义]</span>
<span class="line">- 功能: [具体描述]</span>
<span class="line">- 样式: [样式要求]</span>
<span class="line">- 示例: [使用示例]</span>
<span class="line"></span>
<span class="line">## 性能优化模板</span>
<span class="line">优化以下代码的性能：</span>
<span class="line">[代码]</span>
<span class="line">重点关注：[内存使用/渲染性能/网络请求/其他]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="策略2-项目模板化" tabindex="-1"><a class="header-anchor" href="#策略2-项目模板化"><span>策略2：项目模板化</span></a></h3><p>为不同类型的项目准备标准化的提问流程：</p><h4 id="web应用开发流程" tabindex="-1"><a class="header-anchor" href="#web应用开发流程"><span>Web应用开发流程</span></a></h4><ol><li>技术栈选择和项目初始化</li><li>基础组件库搭建</li><li>路由和状态管理</li><li>核心功能实现</li><li>样式和交互优化</li><li>测试和部署</li></ol><h4 id="移动应用开发流程" tabindex="-1"><a class="header-anchor" href="#移动应用开发流程"><span>移动应用开发流程</span></a></h4><ol><li>框架选择和环境配置</li><li>导航和布局组件</li><li>数据管理和API集成</li><li>核心功能页面</li><li>性能优化和适配</li><li>打包和发布</li></ol><h2 id="💡-总结" tabindex="-1"><a class="header-anchor" href="#💡-总结"><span>💡 总结</span></a></h2><p>掌握AI请求优化的核心在于：</p><ol><li><strong>批量思维</strong>：将相关需求合并处理</li><li><strong>模板化</strong>：标准化常用的提问格式</li><li><strong>分层次</strong>：复杂需求分阶段实现</li><li><strong>上下文管理</strong>：充分利用对话连贯性</li></ol><p>记住：<strong>AI是你的编程伙伴，不是简单的代码生成器</strong>。学会与AI高效对话，你会发现500次请求不仅够用，还能让你的开发效率提升3-5倍。</p><hr>`,63)),e("blockquote",null,[e("p",null,[s[1]||(s[1]=n("🚀 ")),s[2]||(s[2]=e("strong",null,"下一步",-1)),s[3]||(s[3]=n("：学习")),r(a,{to:"/practices/design-to-code.html"},{default:t(()=>s[0]||(s[0]=[n("设计稿转代码")])),_:1,__:[0]}),s[4]||(s[4]=n("，掌握从设计到实现的完整流程。"))])])])}const o=i(v,[["render",u]]),b=JSON.parse('{"path":"/practices/ai-requests.html","title":"🚀 AI请求优化术","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"🎯 核心原则","slug":"🎯-核心原则","link":"#🎯-核心原则","children":[{"level":3,"title":"原则1：批量处理 > 分散提问","slug":"原则1-批量处理-分散提问","link":"#原则1-批量处理-分散提问","children":[]},{"level":3,"title":"原则2：Cmd+K > Cmd+L","slug":"原则2-cmd-k-cmd-l","link":"#原则2-cmd-k-cmd-l","children":[]},{"level":3,"title":"原则3：上下文复用","slug":"原则3-上下文复用","link":"#原则3-上下文复用","children":[]}]},{"level":2,"title":"🔥 实战技巧","slug":"🔥-实战技巧","link":"#🔥-实战技巧","children":[{"level":3,"title":"技巧1：模板化提问","slug":"技巧1-模板化提问","link":"#技巧1-模板化提问","children":[]},{"level":3,"title":"技巧2：分层次提问","slug":"技巧2-分层次提问","link":"#技巧2-分层次提问","children":[]},{"level":3,"title":"技巧3：上下文管理","slug":"技巧3-上下文管理","link":"#技巧3-上下文管理","children":[]}]},{"level":2,"title":"📊 效果对比","slug":"📊-效果对比","link":"#📊-效果对比","children":[{"level":3,"title":"传统方式 vs 优化方式","slug":"传统方式-vs-优化方式","link":"#传统方式-vs-优化方式","children":[]},{"level":3,"title":"实际案例","slug":"实际案例","link":"#实际案例","children":[]}]},{"level":2,"title":"🎯 进阶策略","slug":"🎯-进阶策略","link":"#🎯-进阶策略","children":[{"level":3,"title":"策略1：建立个人知识库","slug":"策略1-建立个人知识库","link":"#策略1-建立个人知识库","children":[]},{"level":3,"title":"策略2：项目模板化","slug":"策略2-项目模板化","link":"#策略2-项目模板化","children":[]}]},{"level":2,"title":"💡 总结","slug":"💡-总结","link":"#💡-总结","children":[]}],"git":{},"filePathRelative":"practices/ai-requests.md"}');export{o as comp,b as data};
