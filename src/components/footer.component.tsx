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
          <span className="cursor-pointer border-b-2 border-secondary hover:text-secondary">
            <span className="text-secondary">{"> "}</span>
            <Link href={href} value={text as string} />
          </span>
        </>
      ))}
    </footer>
  );
}

export default Footer;
