module.exports = [
  {
    text: 'Getting Started',
    link: '/%NAME%/getting-started.html'
  },
  {
    text: 'Book',
    link: '/%NAME%/book/'
  },
  {
    text: 'Others', ariaLabel: 'Further More...',
    items: [
      {
        text: 'Others',
        items: [
          {
            text: 'FAQ',
            link: '/%NAME%/faq.html'
          },
          {
            text: 'Markdown Demo',
            link: '/%NAME%/markdown-demo.html'
          }
        ]
      },
      {
        text: 'Externals',
        items: [
          {
            text: '%NAME% Repo',
            link: 'https://github.com/%USER%/%NAME%'
          },
          {
            text: '%USER% on github.com',
            link: 'https://github.com/%USER%'
          },
        ]
      },
    ],
  },
  // {
  //   text: '插件',
  //   link: '/zh/plugin/'
  // },
  // {
  //   text: '主题',
  //   link: '/zh/theme/'
  // },

  // {
  //   text: '了解更多',
  //   ariaLabel: '了解更多',
  //   items: [
  //     {
  //       text: 'API',
  //       items: [
  //         {
  //           text: 'CLI',
  //           link: '/zh/api/cli.html'
  //         },
  //         {
  //           text: 'Node',
  //           link: '/zh/api/node.html'
  //         }
  //       ]
  //     },
  //     {
  //       text: '开发指南',
  //       items: [
  //         {
  //           text: '本地开发',
  //           link: '/zh/miscellaneous/local-development.html'
  //         },
  //         {
  //           text: '设计理念',
  //           link: '/zh/miscellaneous/design-concepts.html'
  //         },
  //         {
  //           text: 'FAQ',
  //           link: '/zh/faq/'
  //         },
  //         {
  //           text: '术语',
  //           link: '/zh/miscellaneous/glossary.html'
  //         }
  //       ]
  //     },
  //     {
  //       text: '其他',
  //       items: [
  //         {
  //           text: '从 0.x 迁移',
  //           link: '/zh/miscellaneous/migration-guide.html'
  //         },
  //         {
  //           text: 'Changelog',
  //           link: 'https://github.com/vuejs/vuepress/blob/master/CHANGELOG.md'
  //         }
  //       ]
  //     }
  //   ]
  // },

  // {
  //   text: '0.x',
  //   link: 'https://v0.vuepress.vuejs.org/'
  // }
]
