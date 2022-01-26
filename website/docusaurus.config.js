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
    }),
};

module.exports = config;
