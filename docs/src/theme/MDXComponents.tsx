import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import MDXComponents from "@theme-original/MDXComponents";
import { Sandpack, SandpackFiles } from "@codesandbox/sandpack-react";

const LiveEditor = ({
  children,
  files,
}: {
  children: React.ReactNode;
  files: SandpackFiles;
}) => {
  const {
    siteConfig: { customFields, title },
  } = useDocusaurusContext();
  if (!files) files = {};

  return (
    <Sandpack
      theme="auto"
      template="react-ts"
      customSetup={{
        dependencies: {
          "react-naver-map-sdk": "latest",
        },
      }}
      files={{
        ...files,
        "/App.tsx": {
          code: children,
        },
        "/NaverMapLoadProvider.tsx": {
          code: `
import React from "react";
import {NaverMapProvider} from "react-naver-map-sdk";
          
export default function NaverMapLoadProvider({children}: {children: React.ReactNode}) {
  return (
    <NaverMapProvider client={"${customFields.REACT_APP_NAVER_API_KEY}"}>
      {children}
    </NaverMapProvider>
    );
  }
`,
},
      }}
      options={{
        showLineNumbers: true,
        showInlineErrors: true,
        wrapContent: true,
        editorHeight: 480,
        editorWidthPercentage: 40,
      }}
    />
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...MDXComponents,
  LiveEditor,
};
