# 🚀 快速开始

欢迎来到Cursor最佳实践的世界！这里不是枯燥的功能介绍，而是让你**立刻上手、马上见效**的实战指南。

## 🎯 5分钟快速上手

### 第一步：下载安装Cursor

如果你还没有安装Cursor，请前往 [cursor.sh](https://cursor.sh) 下载最新版本。

### 第二步：掌握核心快捷键

这三个快捷键是你高效使用Cursor的基础：

| 快捷键 | 功能 | 使用场景 |
|--------|------|----------|
| `Cmd+K` (Mac) / `Ctrl+K` (Win) | 快速编辑 | 选中代码后直接生成/修改 |
| `Cmd+L` (Mac) / `Ctrl+L` (Win) | 聊天对话 | 复杂需求讨论和代码解释 |
| `Tab` | 智能补全 | 接受AI建议的代码补全 |

### 第三步：你的第一次AI对话

让我们从一个简单的例子开始：

1. **创建一个新文件** `hello.js`
2. **按下 `Cmd+K`**，输入：`创建一个函数，计算两个数的和`
3. **按Tab接受建议**，看看AI为你生成了什么

```javascript
function add(a, b) {
    return a + b;
}
```

🎉 恭喜！你已经完成了第一次AI代码生成。

## 💡 立即见效的3个技巧

### 技巧1：精准描述需求

❌ **不好的描述**：
```
"帮我写个函数"
```

✅ **好的描述**：
```
"创建一个JavaScript函数，接收一个数组参数，返回数组中所有偶数的和，函数名为sumEvenNumbers"
```

### 技巧2：提供上下文

选中相关代码后再使用`Cmd+K`，AI能更好地理解你的意图：

```javascript
// 选中这段代码
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 }
];

// 然后按Cmd+K，输入："为这个用户数组添加一个过滤成年用户的函数"
```

### 技巧3：分步骤实现复杂功能

不要一次性要求AI实现整个复杂功能，而是分步骤：

1. 先让AI创建基本结构
2. 再添加具体功能
3. 最后优化和美化

## 🔥 解决常见问题

### Q: 500次对话很快就用完了怎么办？

**A: 学会"批量处理"**

❌ 分别问：
- "帮我写个按钮组件"
- "给按钮加个点击效果"  
- "让按钮支持不同颜色"

✅ 一次性问：
- "创建一个React按钮组件，支持不同颜色主题，包含点击动画效果，props包括color、onClick、children"

### Q: AI生成的代码不符合我的项目风格？

**A: 提供样式参考**

在提问时附上你项目中的代码片段作为参考：

```
"参考这个组件的风格：[粘贴你的代码]，帮我创建一个类似的表单组件"
```

### Q: 如何让AI理解我的项目结构？

**A: 使用`Cmd+L`进行项目讨论**

1. 按`Cmd+L`打开聊天
2. 输入："这是我的项目结构：[描述或粘贴目录结构]"
3. 然后再提出具体需求

## 🎨 实战案例：5分钟实现一个Todo组件

让我们用Cursor快速实现一个完整的Todo组件：

### 步骤1：创建基础结构
选择一个空白区域，按`Cmd+K`：
```
创建一个React Todo组件，包含添加任务、标记完成、删除任务的功能，使用useState管理状态
```

### 步骤2：美化样式
选中生成的组件，按`Cmd+K`：
```
为这个Todo组件添加现代化的CSS样式，使用flexbox布局，包含悬停效果和完成任务的划线效果
```

### 步骤3：优化体验
继续选中代码，按`Cmd+K`：
```
添加输入验证，防止添加空白任务，并在添加任务后清空输入框
```

**5分钟内，一个完整的Todo组件就完成了！**

## 🚀 下一步学习路径

现在你已经掌握了基础用法，可以深入学习更多技巧：

1. **[核心实践](/practices/)** - 学习高级的AI对话技巧
2. **[实用技巧](/tips/)** - 掌握更多快捷键和工作流
3. **[进阶技巧](/advanced/)** - 自定义规则和团队协作

## 💪 每日练习建议

- **第1周**：熟练掌握`Cmd+K`、`Cmd+L`、`Tab`三个核心快捷键
- **第2周**：练习编写精准的提示词，提高AI理解准确度
- **第3周**：学习上下文管理，让AI更好地理解你的项目
- **第4周**：探索高级功能，建立自己的最佳实践

---

> 💡 **记住**：Cursor是工具，思维才是核心。掌握了正确的使用方法，你会发现编程变得前所未有的高效和有趣！

**准备好开始你的高效编程之旅了吗？** [立即查看核心实践 →](/practices/)
