import { ReactNode } from "react";

export const ReactNodeToStaticHTMLElement = (children: ReactNode) => {
  const visited: any[] = [];
  const stack: { parent: any; node: any }[] = [
    { parent: null, node: children },
  ];
  let nodeRoot: any = null;

  while (stack.length > 0) {
    const { node, parent }: any = stack.pop();
    if (!visited.includes(node)) {
      visited.push(node);
      const { type, props } = node;
      if (typeof type === "function") {
        stack.push({ parent: node, node: type(props) });
      } else {
        if (typeof node !== "object") {
          parent.innerHTML = node;
          continue;
        }
        const elementType =
          node.type === Symbol.for("react.fragment") ? "div" : node.type;
        const el = document.createElement(elementType);
        const keys = Object.keys(props);
        keys.forEach((key) => {
          if (key === "children") return;
          if (key.startsWith("on")) {
            el[key.toLocaleLowerCase()] = props[key];
          } else {
            el[key] = props[key];
          }
        });
        if (nodeRoot === null) {
          nodeRoot = el;
        } else {
          parent.prepend(el);
        }
        stack.push({ parent: el, node });
        if (props?.children) {
          if (Array.isArray(props?.children)) {
            props?.children.forEach((node: any) => {
              stack.push({ parent: el, node });
            });
          } else if (typeof node === "object") {
            stack.push({
              parent: el,
              node: props?.children,
            });
          }
        }
      }
    }
  }

  return nodeRoot;
};
