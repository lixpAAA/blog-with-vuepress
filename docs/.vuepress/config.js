
module.exports = {
  base: '/blog-with-vuepress/docs/dist/', // 资源前缀
  title: '说明文档',
  description: '文档说明，若有不正，请及时指正',
  head: [
    ['link', { rel: 'icon', href: '/my.ico' }]
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
      { text: '链接', link: '/tt', items: [{ text: '文档链接', link: '/' }] }
    ],
    // 纵向导航栏
    sidebar: [
      {
        title: '前端相关',   // required
        // path: '' // optional
        collapsable: true, // optional, defaults to true
        sidebarDepth: 3,    // optional, defaults to 1
        children: [
          {
            title: '微前端初识',   // required
            path: '/content/aboutFont/',
          },
          {
            title: '前端基础',   // required
            // path: '/aboutFont/prototype',
            // collapsable: true, // optional, defaults to true
            children: [
              {
                title: '原型及原型链',
                path: '/content/aboutFont/basicknow/',
              },
              {
                title: '作用域',
                path: '/content/aboutFont/basicknow/scope',
              },
              {
                title: '执行上下文作用域',
                path: '/content/aboutFont/basicknow/exestack',
              }
            ]
          },
          // {
          //   title: '前端优化',   // required
          //   path: '/optimize/',
          // },
          {
            title: '前端测试',   // required
            path: '/content/fontTest/jestVue/',
            children: [
              {
                title: 'vue + jest',
                path: '/content/fontTest/jestVue/'
              }
            ]
          },
          {
            title: 'css',   // required
            path: '/content/cssCollection/',
            children: [
              { 
                title: 'css酷炫操作',
                path: '/content/cssCollection/'
              },
               {
                title: 'css基础篇',
                path: '/content/cssCollection/css/css1'
              }
            ]
          }
        ]
      },
      {
        title: 'Group 2',
        children: [ /* ... */]
      }
    ],
    searchPlaceholder: '搜索内容'
  },
  plugins: [
    '@vuepress/back-to-top',
  ]
} 