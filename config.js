const { description } = require('../../package')

module.exports = {

  base: '/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "fakeyou.js",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', { rel: 'shortcut icon', href: '/assets/img/logo.png'}],
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
    repo: 'leunamcrack/fakeyou.js',
    nextLinks: false,
    searchPlaceholder: 'Search',
    prevLinks: false,
    docsDir: '/docs/',
    sidebarDepth: 0,
    lastUpdated: false,
    editLinks: false,
    logo: '/assets/img/logo.png',
    nav: [
      {
        text: 'Documentation',
        link: '/docs/introduction/welcome.html',
      },
      {
        text: 'Support',
        link: 'https://discord.gg/H72KFXm'
      }
    ],
    sidebar: {
      "/docs/": [
        {
          title: 'INTRODUCTION',  
          path: "",
          collapsable: false,
          children: [
            { title: 'Welcome', path: '/docs/introduction/welcome.md', collapsable: false, children: [] },
            { title: 'Getting Started', path: '/docs/introduction/getting-started.md', collapsable: false, children: [] },
          ]
        },
        {
          title: 'CLASS',
          path: "",
          collapsable: false,
          children: [
            { title: 'Badges', path: '/docs/class/badges.md', collapsable: false, children: [] },
            { title: 'Category', path: '/docs/class/category.md', collapsable: false, children: [] },
            { title: 'CategoryManager', path: '/docs/class/categorymanager.md', collapsable: false, children: [] },
            { title: 'Client', path: '/docs/class/client.md', collapsable: false, children: [] },
            { title: 'ClientUser', path: '/docs/class/clientuser.md', collapsable: false, children: [] },
            { title: 'Group', path: '/docs/class/group.md', collapsable: false, children: [] },
            { title: 'LeaderBoard', path: '/docs/class/leaderboard.md', collapsable: false, children: [] },
            { title: 'Model', path: '/docs/class/model.md', collapsable: false, children: [] },
            { title: 'ModelManager', path: '/docs/class/modelmanager.md', collapsable: false, children: [] },
            { title: 'ResultManager', path: '/docs/class/resultmanager.md', collapsable: false, children: [] },
            { title: 'TTSResult', path: '/docs/class/ttsresult.md', collapsable: false, children: [] },
            { title: 'User', path: '/docs/class/user.md', collapsable: false, children: [] }
          ]
        },
        {
          title: 'TYPEOF',
          path: "",
          collapsable: false,
          children: [
            { title: 'BadgeInfo', path: '/docs/typeof/badgeinfo.md', collapsable: false, children: [] },
            { title: 'BadgeName', path: '/docs/typeof/badgename.md', collapsable: false, children: [] },
            { title: 'CategoryFeatures', path: '/docs/typeof/categoryfeatures.md', collapsable: false, children: [] },
            { title: 'CategoryResolvable', path: '/docs/typeof/categoryresolvable.md', collapsable: false, children: [] },
            { title: 'CategoryToken', path: '/docs/typeof/categorytoken.md', collapsable: false, children: [] },
            { title: 'ClientEditOptions', path: '/docs/typeof/clienteditoptions.md', collapsable: false, children: [] },
            { title: 'ClientOptions', path: '/docs/typeof/clientoptions.md', collapsable: false, children: [] },
            { title: 'LeaderBoardItem', path: '/docs/typeof/leaderboarditem.md', collapsable: false, children: [] },
            { title: 'LinksData', path: '/docs/typeof/linksdata.md', collapsable: false, children: [] },
            { title: 'ModelFeatures', path: '/docs/typeof/modelfeatures.md', collapsable: false, children: [] },
            { title: 'ModelResolvable', path: '/docs/typeof/modelresolvable.md', collapsable: false, children: [] },
            { title: 'ModelToken', path: '/docs/typeof/modeltoken.md', collapsable: false, children: [] },
            { title: 'QueueInfo', path: '/docs/typeof/queueinfo.md', collapsable: false, children: [] },
            { title: 'ResultResolvable', path: '/docs/typeof/resultresolvable.md', collapsable: false, children: [] },
            { title: 'ResultToken', path: '/docs/typeof/resulttoken.md', collapsable: false, children: [] },
            { title: 'Spectrogram', path: '/docs/typeof/spectrogram.md', collapsable: false, children: [] },
            { title: 'UserToken', path: '/docs/typeof/usertoken.md', collapsable: false, children: [] },
            { title: 'Visibility', path: '/docs/typeof/visibility.md', collapsable: false, children: [] },
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
