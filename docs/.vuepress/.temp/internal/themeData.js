export const themeData = JSON.parse("{\"logo\":\"/images/cursor-logo.svg\",\"navbar\":[\"/\",\"/get-started\",\"/cursor-basics\",\"/practices/\",\"/tips/\",\"/advanced/\"],\"sidebar\":{\"/practices/\":[{\"text\":\"核心实践\",\"children\":[\"/practices/README.md\",\"/practices/ai-requests.md\",\"/practices/design-to-code.md\",\"/practices/code-generation.md\"]}],\"/tips/\":[{\"text\":\"实用技巧\",\"children\":[\"/tips/README.md\",\"/tips/shortcuts.md\",\"/tips/prompts.md\"]}],\"/advanced/\":[{\"text\":\"进阶技巧\",\"children\":[\"/advanced/README.md\",\"/advanced/custom-rules.md\",\"/advanced/workflow.md\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
