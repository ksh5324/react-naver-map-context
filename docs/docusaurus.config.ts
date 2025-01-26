import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import 'dotenv/config';

const config: Config = {
  title: "react-naver-map-sdk",
  tagline:"네이버 지도를 React에서 쉽게 사용하세요",
  favicon: "img/favicon.ico",

  url: "https://ksh5324.github.io",
  baseUrl: "/react-naver-map-context/",

  organizationName: "ksh5324",
  projectName: "react-naver-map-context",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "ko",
    locales: ["ko"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/ksh5324/react-naver-map-context",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  
  customFields: {
    REACT_APP_NAVER_API_KEY: process.env.REACT_APP_NAVER_API_KEY,
  },

  themeConfig: {
    image: "img/react-naver-map-social-card.jpg",
    navbar: {
      title: "react-naver-map-sdk",
      logo: {
        alt: "react-naver-map-sdk Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Docs",
        },
        {
          type: "docSidebar",
          sidebarId: "apiSidebar",
          position: "left",
          label: "API",
        },
        {
          href: "https://github.com/ksh5324/react-naver-map-context",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/docs/introduction",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/ksh5324/react-naver-map-context",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} react-naver-map-sdk. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

  } satisfies Preset.ThemeConfig,
};

export default config;
