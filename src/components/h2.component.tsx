import React from "react";
type H2PropsTypes = {
  text: string;
}

function H2(props: H2PropsTypes) {
  const {text} = props;
  return (
    <h2 className="border-b-2 pb-1 border-dashed w-fit mb-5 text-lg font-bold">
      {text}
    </h2>
  );
}

export default H2;
