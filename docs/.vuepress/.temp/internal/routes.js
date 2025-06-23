export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/nuo/work/xq/cursor-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Cursor最佳实践"} }],
  ["/cursor-basics.html", { loader: () => import(/* webpackChunkName: "cursor-basics.html" */"/Users/nuo/work/xq/cursor-starter/docs/.vuepress/.temp/pages/cursor-basics.html.js"), meta: {"title":"🎯 Cursor 基础教程"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/nuo/work/xq/cursor-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"🚀 快速开始"} }],
  ["/practices/", { loader: () => import(/* webpackChunkName: "practices_index.html" */"/Users/nuo/work/xq/cursor-starter/docs/.vuepress/.temp/pages/practices/index.html.js"), meta: {"title":"🔥 核心实践"} }],
  ["/practices/ai-requests.html", { loader: () => import(/* webpackChunkName: "practices_ai-requests.html" */"/Users/nuo/work/xq/cursor-starter/docs/.vuepress/.temp/pages/practices/ai-requests.html.js"), meta: {"title":"🚀 AI请求优化术"} }],
  ["/advanced/", { loader: () => import(/* webpackChunkName: "advanced_index.html" */"/Users/nuo/work/xq/cursor-starter/docs/.vuepress/.temp/pages/advanced/index.html.js"), meta: {"title":"🎯 进阶技巧"} }],
  ["/tips/", { loader: () => import(/* webpackChunkName: "tips_index.html" */"/Users/nuo/work/xq/cursor-starter/docs/.vuepress/.temp/pages/tips/index.html.js"), meta: {"title":"⚡ 实用技巧"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/nuo/work/xq/cursor-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
