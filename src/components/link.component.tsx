import React from "react";
type LinkPropsTypes = {
  href: string;
  text: string;
};

function Link(props: LinkPropsTypes) {
  const { text, href } = props;
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className="cursor-pointer hover:text-green-500"
    >
      {text}
    </a>
  );
}

export default Link;
