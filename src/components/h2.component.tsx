import React from "react";
type H2PropsTypes = {
  text: string;
}

function H2(props: H2PropsTypes) {
  const {text} = props;
  return (
    <h2 className="text-3xl border-b-2 pb-2 border-green-500 w-fit mb-10 font-bold">
      <span className="text-green-500">~/</span>
      {text}
    </h2>
  );
}

export default H2;
