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
    siteConfig: { customFields },
  } = useDocusaurusContext();
  if (!files) files = {};

  return (
    <Sandpack
      theme="auto"
      template="react-ts"
      customSetup={{
        dependencies: {
        },
      }}
      files={{
        ...files,
        "/App.tsx": {
          code: children,
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
