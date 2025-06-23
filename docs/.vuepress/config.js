import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'Cursor最佳实践',
  description: '持续更新的Cursor开发提效指南，让每一次编码都更高效',

  theme: defaultTheme({
    logo: '/images/cursor-logo.svg',

    navbar: [
      '/',
      '/get-started',
      '/cursor-basics',
      '/practices/',
      '/tips/',
      '/advanced/'
    ],

    sidebar: {
      '/practices/': [
        {
          text: '核心实践',
          children: [
            '/practices/README.md',
            '/practices/ai-requests.md',
            '/practices/design-to-code.md',
            '/practices/code-generation.md'
          ]
        }
      ],
      '/tips/': [
        {
          text: '实用技巧',
          children: [
            '/tips/README.md',
            '/tips/shortcuts.md',
            '/tips/prompts.md'
          ]
        }
      ],
      '/advanced/': [
        {
          text: '进阶技巧',
          children: [
            '/advanced/README.md',
            '/advanced/custom-rules.md',
            '/advanced/workflow.md'
          ]
        }
      ]
    }
  }),

  bundler: viteBundler(),
})
