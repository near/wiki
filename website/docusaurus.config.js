// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NEAR Wiki',
  tagline: 'NEAR Wiki',
  url: 'https://wiki.near.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'near', // Usually your GitHub org/user name.
  projectName: 'wiki', // Usually your repo name.
  scripts: [
    "/js/hotjar.js",
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          routeBasePath: '/',
          "path": "../wiki",
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/near/wiki/edit/master/website',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Wiki',
        logo: {
          alt: 'NEAR Logo',
          src: 'img/near_logo.svg',
          srcDark: 'img/near_logo_white.svg',
        },
        items: [
          {
            href: '/ecosystem',
            position: 'left',
            label: 'Ecosystem',
          },
          {
            href: '/technology',
            position: 'left',
            label: 'Technology',
          },
          {
            href: '/validators',
            position: 'left',
            label: 'Validators',
          },
          {
            href: '/community',
            position: 'left',
            label: 'Community',
          },
          {
            href: '/governance',
            position: 'left',
            label: 'Governance',
          },
          {
            href: '/resources',
            position: 'left',
            label: 'Resources',
          },
          {
            href: 'https://github.com/near/wiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Wiki',
                to: '/',
              },
              {
                label: 'Dev Docs',
                to: 'https://docs.near.org',
              },
              {
                label: 'Specifications',
                to: 'https://nomicon.io',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/nearprotocol',
              },
              {
                label: 'Discord',
                href: 'https://near.chat',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/NEARProtocol',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'SDK Docs',
                to: 'https://near-sdk.io/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/near/wiki',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://near.org">NEAR Protocol</a> | All rights reserved | hello@near.org`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
          // The application ID provided by Algolia
          appId: 'J7VARGY7RM',
          // Public API key: it is safe to commit it
          apiKey: '4723f2a6e5ef0c7f5c6d17feb6362b19',
          indexName: 'wiki-near',
          // Optional: see doc section below
          contextualSearch: true,
          // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
          externalUrlRegex: 'near\\.org|nomicon\\.io',
          // Optional: Algolia search parameters
          searchParameters: {},
          //... other Algolia params
      },
    }),
};

module.exports = config;
