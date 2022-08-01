const { description } = require('../../package')

module.exports = {

  base: '/fakeyou.js/',
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
    docsDir: '/docs/main/',
    sidebarDepth: 0,
    lastUpdated: false,
    editLinks: false,
    logo: '/assets/img/logo.png',
    nav: [
      {
        text: 'Documentation',
        link: '/docs/main/',
      },
      {
        text: 'Support',
        link: 'https://discord.gg/H72KFXm'
      }
    ],
    sidebar: [
      {
        title: 'WELCOME',   // required
        path: '/docs/main/',    // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
      },
      {
        title: 'CLASS',
        path: "",
        collapsable: false,
        children: [
          { title: 'Badges', path: '/docs/main/class/badges.md', collapsable: false, children: [] },
          { title: 'Category', path: '/docs/main/class/category.md', collapsable: false, children: [] },
          { title: 'CategoryManager', path: '/docs/main/class/categorymanager.md', collapsable: false, children: [] },
          { title: 'Client', path: '/docs/main/class/client.md', collapsable: false, children: [] },
          { title: 'ClientUser', path: '/docs/main/class/clientuser.md', collapsable: false, children: [] },
          { title: 'Group', path: '/docs/main/class/group.md', collapsable: false, children: [] },
          { title: 'LeaderBoard', path: '/docs/main/class/leaderboard.md', collapsable: false, children: [] },
          { title: 'Model', path: '/docs/main/class/model.md', collapsable: false, children: [] },
          { title: 'ModelManager', path: '/docs/main/class/modelmanager.md', collapsable: false, children: [] },
          { title: 'ResultManager', path: '/docs/main/class/resultmanager.md', collapsable: false, children: [] },
          { title: 'TTSResult', path: '/docs/main/class/ttsresult.md', collapsable: false, children: [] },
          { title: 'User', path: '/docs/main/class/user.md', collapsable: false, children: [] }
        ]
      },
      {
        title: 'TYPEOF',
        path: "",
        collapsable: false,
        children: [
          { title: 'BadgeInfo', path: '/docs/main/typeof/badgeinfo.md', collapsable: false, children: [] },
          { title: 'BadgeName', path: '/docs/main/typeof/badgename.md', collapsable: false, children: [] },
          { title: 'CategoryFeatures', path: '/docs/main/typeof/categoryfeatures.md', collapsable: false, children: [] },
          { title: 'CategoryResolvable', path: '/docs/main/typeof/categoryresolvable.md', collapsable: false, children: [] },
          { title: 'CategoryToken', path: '/docs/main/typeof/categorytoken.md', collapsable: false, children: [] },
          { title: 'ClientEditOptions', path: '/docs/main/typeof/clienteditoptions.md', collapsable: false, children: [] },
          { title: 'LeaderBoardItem', path: '/docs/main/typeof/leaderboarditem.md', collapsable: false, children: [] },
          { title: 'LinksData', path: '/docs/main/typeof/linksdata.md', collapsable: false, children: [] },
          { title: 'ModelFeatures', path: '/docs/main/typeof/modelfeatures.md', collapsable: false, children: [] },
          { title: 'ModelResolvable', path: '/docs/main/typeof/modelresolvable.md', collapsable: false, children: [] },
          { title: 'ModelToken', path: '/docs/main/typeof/modeltoken.md', collapsable: false, children: [] },
          { title: 'QueueInfo', path: '/docs/main/typeof/queueinfo.md', collapsable: false, children: [] },
          { title: 'ResultResolvable', path: '/docs/main/typeof/resultresolvable.md', collapsable: false, children: [] },{ title: 'LinksData', path: '/docs/main/typeof/linksdata.md', collapsable: false, children: [] },
          { title: 'ResultToken', path: '/docs/main/typeof/resulttoken.md', collapsable: false, children: [] },
          { title: 'Spectrogran', path: '/docs/main/typeof/spectrogram.md', collapsable: false, children: [] },
          { title: 'UserToken', path: '/docs/main/typeof/usertoken.md', collapsable: false, children: [] },
          { title: 'Visibility', path: '/docs/main/typeof/visibility.md', collapsable: false, children: [] },
        ]
      }
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}