import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "React-Naver-Map",
  tagline: "네이버 지도를 React에서 쉽게 사용하세요",
  favicon: "img/favicon.ico",

  url: "https://ksh5324.github.io",
  baseUrl: "/react-naver-map-context/",

  organizationName: "ksh5324",
  projectName: "react-naver-map-context",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "ko",
    locales: ["ko", "en"],
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

  themeConfig: {
    image: "img/react-naver-map-social-card.jpg",
    navbar: {
      title: "React-Naver-Map",
      logo: {
        alt: "React-Naver-Map Logo",
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
          type: "localeDropdown",
          position: "right",
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
      copyright: `Copyright © ${new Date().getFullYear()} React-Naver-Map. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    customFields: {
      REACT_APP_NAVER_API_KEY: process.env.REACT_APP_NAVER_API_KEY,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
