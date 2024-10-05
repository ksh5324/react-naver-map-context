import React, { MouseEventHandler, useRef } from "react";

const TestComponent = ({
  classname,
  onClick,
}: {
  classname: string;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
}) => {
  return (
    <>
      <div className={classname}>
        <div onClick={onClick}></div>
        <span>
          <div></div>
          <p>
            <ul>
              <li>1</li>
              <li>2</li>
            </ul>
          </p>
        </span>
      </div>
    </>
  );
};

export default TestComponent;
