export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/nuo/work/xq/cursor-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Cursor最佳实践"} }],
  ["/cursor-basics.html", { loader: () => import(/* webpackChunkName: "cursor-basics.html" */"/Users/nuo/work/xq/cursor-starter/docs/.vuepress/.temp/pages/cursor-basics.html.js"), meta: {"title":"🎯 Cursor 基础教程"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/nuo/work/xq/cursor-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"🚀 快速开始"} }],
  ["/advanced/", { loader: () => import(/* webpackChunkName: "advanced_index.html" */"/Users/nuo/work/xq/cursor-starter/docs/.vuepress/.temp/pages/advanced/index.html.js"), meta: {"title":"🎯 进阶技巧"} }],
  ["/practices/", { loader: () => import(/* webpackChunkName: "practices_index.html" */"/Users/nuo/work/xq/cursor-starter/docs/.vuepress/.temp/pages/practices/index.html.js"), meta: {"title":"🔥 核心实践"} }],
  ["/practices/ai-requests.html", { loader: () => import(/* webpackChunkName: "practices_ai-requests.html" */"/Users/nuo/work/xq/cursor-starter/docs/.vuepress/.temp/pages/practices/ai-requests.html.js"), meta: {"title":"🚀 AI工具对话技巧：从新手到专家的进阶之路"} }],
  ["/tips/", { loader: () => import(/* webpackChunkName: "tips_index.html" */"/Users/nuo/work/xq/cursor-starter/docs/.vuepress/.temp/pages/tips/index.html.js"), meta: {"title":"⚡ 实用技巧"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/nuo/work/xq/cursor-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
