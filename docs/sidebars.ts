import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docsSidebar: [
    "introduction",
    {
      type: "category",
      label: "시작하기",
      items: [
        "getting-started/installation",
        "getting-started/typescript-support",
      ],
    },
    {
      type: "category",
      label: "예제",
      link: {
        type: "generated-index",
        title: "예제 모아보기",
        slug: "/category/sample",
        keywords: ["sample"],
      },
      items: [
        {
          type: "category",
          label: "지도",
          link: {
            type: "generated-index",
            title: "지도 예제",
            slug: "/category/sample/map",
            keywords: ["sample", "map"],
          },
          items: [
            "sample/map/basicMap",
            "sample/map/mapOptions",
            "sample/map/mapTypes",
            "sample/map/mapBounds",
          ],
        },
      ],
    },
  ],
  apiSidebar: [
    {
      type: "category",
      label: "API",
      items: [
        {
          type: "category",
          label: "Classes",
          items: [
            "api/classes/map",
            "api/classes/marker",
            "api/classes/polyline",
            "api/classes/polygon",
            "api/classes/circle",
            "api/classes/rectangle",
            "api/classes/ellipse",
            "api/classes/info-window",
            "api/classes/custom-control",
          ],
        },
      ],
    },
  ],
};

export default sidebars;
