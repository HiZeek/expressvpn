import React from "react";

const Container = (props: any) => {
  return (
      <div className={`max-w-[1440px] m-auto ${props.className}`}>
        {props.children}
      </div>
  );
};

export default Container;