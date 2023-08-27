// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'VRCFaceTracking',
  tagline: '"Trust me it\'s not even that hard"',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  customFields: {
    discord: {
      label: "Discord",
      href: "https://discord.gg/vrcft",
    },
    github: {
      label: "GitHub",
      href: "https://github.com/benaclejames/VRCFaceTracking",
    },
  },

  // Set the production url of your site here
  url: 'https://docs.vrcft.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'VRCFaceTracking', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
              'https://github.com/VRCFaceTracking/docs/edit/master',
          lastVersion: 'current',
          versions: {
            current: {
              label: 'Current (v5.0)',
              path: '',
            },
            'v4.0': {
              label: 'v4.0.0',
              path: 'v4.0',
            },
          },
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
        headTags: [
          {
            tagName: 'script',
            attributes: {
              type: 'application/ld+json',
            },
            innerHTML: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'WebSite',
              name: 'VRCFaceTracking Docs',
              url: 'https://docs.vrcft.io/'
            }),
          },
        ],
        colorMode: {
            defaultMode: 'dark',
            respectPrefersColorScheme: true,
        },
        // Replace with your project's social card
        //image: 'img/docusaurus-social-card.jpg',
        docs: {
          sidebar: {
            hideable: true,
          }
        },
        navbar: {
          title: 'VRCFaceTracking',
          logo: {
            alt: 'VRCFaceTracking Logo',
            src: 'img/logo.svg',
          },
          items: [
            {
              type: 'docsVersionDropdown',
            },
            // {
            //   type: 'doc',
            //   docId: 'intro',
            //   position: 'left',
            //   label: 'Intro',
            // },
            {
              type: 'doc',
              docId: 'intro/getting-started',
              position: 'left',
              label: 'Getting Started'
            },
            {
              type: 'doc',
              docId: '/category/avatar-setup',
              position: 'left',
              label: 'Avatar Setup'
            },
            {
              type: 'search',
              position: 'right',
            },
            {
              href: 'https://discord.com/invite/vrcft',
              position: 'right',
              className: 'header-discord-link',
              'aria-label': 'Discord',
            },
            {
              href: 'https://github.com/benaclejames/VRCFaceTracking',
              position: 'right',
              className: 'header-github-link',
              'aria-label': 'GitHub',
            },
            // {
            //   type: 'html',
            //   position: 'right',
            //   value: '<div style="margin:auto auto; display: flex; justify-content: center; height: 24px"><p> | </p></div>'
            // }
          ],

        },
        algolia: {
          // The application ID provided by Algolia
          appId: 'IG7PS0550Z',

          // Public API key: it is safe to commit it
          apiKey: 'ff142e454687ae4be29e2a6080754a7f',

          indexName: 'vrcft',

          // Optional: see doc section below
          contextualSearch: true,

          // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
          externalUrlRegex: 'external\\.com|domain\\.com',

          // Optional: Algolia search parameters
          searchParameters: {},

          // Optional: path for search page that enabled by default (`false` to disable it)
          searchPagePath: 'search',
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Docs',
              items: [
                {
                  label: 'Getting Started',
                  to: '/docs/intro/getting-started',
                },
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'Discord',
                  href: 'https://discord.com/invite/vrcft',
                },
                {
                  label: 'Twitter',
                  href: 'https://twitter.com/benaclejames',
                },
              ],
            },
            {
              title: 'More',
              items: [
                {
                  label: 'GitHub',
                  href: 'https://github.com/benaclejames/VRCFaceTracking',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} VRCFaceTracking. Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),

  markdown: {
    mermaid: true,
  },
  // themes: ['@docusaurus/theme-mermaid'],
};

module.exports = config;
