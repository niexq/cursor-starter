export const siteData = JSON.parse("{\"base\":\"/cursor-starter/\",\"lang\":\"zh-CN\",\"title\":\"Cursor最佳实践\",\"description\":\"持续更新的Cursor开发提效指南，让每一次编码都更高效\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/cursor-starter/images/cursor-logo.svg\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
