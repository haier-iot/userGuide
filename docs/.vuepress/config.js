// const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '文档中心',
  base:'/userGuide/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: '',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'haier-iot/userGuide',
    editLinks: true,
    logo: '/assets/img/logo-fang.png',
    docsRepo: 'haier-iot/userGuide',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinkText: '帮助我们改善此页面！',

    lastUpdated: 'Last Updated',
    nav:require('./nav-zh'),   // 引入导航栏,
    sidebar:require('./sidebar-zh'),  // 引入侧边栏
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/last-updated',
  ]
}
