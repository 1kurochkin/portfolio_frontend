import { ReactElement } from "react";

type LinkPropsTypes = {
  href: string;
  value: string | ReactElement;
  className?: string;
};

function Link(props: LinkPropsTypes) {
  const { value, href, className } = props;
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className={`cursor-pointer hover:text-secondary ${className}`}
    >
      {value}
    </a>
  );
}

export default Link;
