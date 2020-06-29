module.exports = {
  base: '/blog-with-vuepress/dist/', // 资源前缀
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
    // 横向导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '导航', link: '/guide/' },
      { text: '链接', link: '/', items: [{ text: '文档链接', link: '/' }] }
    ],
    // 纵向导航栏
    sidebar: [
      {
        title: '前端相关',   // required
        // path: '' // optional
        collapsable: true, // optional, defaults to true
        sidebarDepth: 2,    // optional, defaults to 1
        children: [
          {
            title: '微前端初识',   // required
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