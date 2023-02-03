import React from "react";
import Link from "./link.component";

type FooterPropsTypes = {
  contactLinks: Array<{ href: string; text: string | undefined }>;
};

function Footer({ contactLinks }: FooterPropsTypes) {
  return (
    <footer className="bg-inherit border-t-2 border-double px-2 py-5 flex justify-around items-center text-lg font-bold">
      {contactLinks.map(({ text, href }, index) => (
        <>
          {index !== 0 && <span>|</span>}
          <span className="cursor-pointer border-b-2 border-green-500 hover:text-green-500">
            <span className="text-green-500">{"> "}</span>
            <Link href={href} text={text as string} />
          </span>
        </>
      ))}
    </footer>
  );
}

export default Footer;
