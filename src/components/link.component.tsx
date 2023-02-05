import { HTMLAttributeAnchorTarget, ReactElement } from "react";

type LinkPropsTypes = {
  href: string;
  value: string | ReactElement;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
};

function Link(props: LinkPropsTypes) {
  const { value, target = "_blank", href, className } = props;
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target={target}
      className={`cursor-pointer hover:text-secondary ${className}`}
    >
      {value}
    </a>
  );
}

export default Link;
