module.exports = {
  base: '/dist/',
  title: '说明文档',
  description: '文档说明，若有不正，请及时指正',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  host: '0.0.0.0',
  port: 8080,
  dest: 'docs/dist',
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'zh-CN' // this will be set as the lang attribute on <html>'
    }
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '导航', link: '/guide/' },
      { text: '测试', link: '/test', ariaLabel: 'Language Menu', items: [{ text: '测试1', link: '/' }] }
    ],
    sidebar: [
      {
        title: '标题 1',   // required
        path: '/',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 2,    // optional, defaults to 1
        children: [
          {
            title: '测试首页',   // required
            path: '/test/',
          },
          {
            title: '测试2',   // required
            path: '/test/one',
          }

        ]
      },
      {
        title: 'Group 2',
        children: [ /* ... */]
      }
    ],
    searchPlaceholder: '搜索内容'
  }
}