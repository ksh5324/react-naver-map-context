import React, { forwardRef, useImperativeHandle, useState } from "react";
import { useNaverMap } from "../../contexts/naverMapContext";
import useMapEffect from "../../hooks/useMapEffect";
import type { CustomControlProps } from "./types";
import { mapCustomPositionToNaverPosition } from "./utils";
import { ReactNodeToStaticHTMLElement } from "../../utils/ReactNodeToStaticHTMLElement";

const CustomControl = forwardRef<
  naver.maps.CustomControl | undefined,
  CustomControlProps
>(function CustomControl({ children, position }, ref) {
  const naverMap = useNaverMap();
  const [customControl, setCustomControl] =
    useState<naver.maps.CustomControl>();

  useMapEffect(() => {
    if (!naverMap) return;

    if (customControl) customControl.setMap(null);

    if (!children) {
      console.error("children is required");
      return;
    }

    const childrenHTMLElement = ReactNodeToStaticHTMLElement(children);
    const childrenString = childrenHTMLElement.outerHTML;
    const control = new naver.maps.CustomControl(childrenString, {
      position: mapCustomPositionToNaverPosition(position),
    });
    const events = Object.keys(HTMLElement.prototype).filter((v) =>
      v.startsWith("on")
    );

    const stack = [];
    const controlStack = [];
    stack.push(childrenHTMLElement);
    controlStack.push(control.getElement().lastChild);

    while (stack.length > 0) {
      const element = stack.pop();
      const controlElement: any = controlStack.pop();
      if (element.children.length > 0) {
        for (let i = 0; i < element.children.length; i++) {
          stack.push(element.children[i]);
          controlStack.push(controlElement.children[i]);
        }
      }
      events.forEach((event) => {
        if (element[event] !== null) {
          controlElement[event] = element[event];
        }
      });
    }

    if (!customControl) {
      naver.maps.Event.once(naverMap, "init", () => {
        control.setMap(naverMap);
      });
    } else {
      control.setMap(naverMap);
    }
    setCustomControl(control);
    return () => {
      control.setMap(null);
    };
  }, [naverMap, children, position]);

  useImperativeHandle(ref, () => {
    return customControl;
  }, [customControl]);

  return <></>;
});

export default CustomControl;
