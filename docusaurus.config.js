const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '浙江亿得新材料股份有限公司',
  tagline: '为生活增添一分色彩',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '浙江亿得',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: '产品',
        },
        {to: '/blog', label: '新闻', position: 'left'},
        //{
        //  href: 'https://github.com/facebook/docusaurus',
        //  label: 'GitHub',
        //  position: 'right',
        //},
        {to: '/contact', label: '联系我们', position: 'left'}
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {},
        {
         title: '产品',
          items: [
            {
              label: '活性染料',
              to: '/docs/intro',
            },
            {
              label: '酸性染料',
              to: '/docs/intro',
            },
            {
              label: '分散染料',
              to: '/docs/intro',
            }
          ],
        },
        {
          title: '联系方式',
          items: [
            {
              label: '微信',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: '钉钉',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: '其他',
          items: [
            {
              label: '新闻',
              to: '/blog',
            },
            {
              label: '投资者信息',
              to: '/contact',
            },
          ],
        },
      ],

      copyright: `Copyright © ${new Date().getFullYear()} 浙江亿得新材料股份有限公司`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
