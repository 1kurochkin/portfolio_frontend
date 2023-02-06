import Link from "./link.component";
import {Paragraph} from "./paragraph.component";

type FooterPropsTypes = {
  contactLinks: Array<{ href: string; text: string | undefined }>;
  sectionId?: string;
};

function Footer({ contactLinks, sectionId }: FooterPropsTypes) {
  return (
    <footer id={sectionId} className="flex bg-inherit border-t-2 border-double px-2 py-5 font-bold">
      <ul className="flex justify-around items-center flex-wrap w-full">
        {contactLinks.map(({ text, href }, index) => (
          <li className="flex justify-center xl:basis-full">
            <Link
              href={href}
              value={
                <Paragraph
                  className="border-b-2 border-secondary"
                  before=">> "
                  after=" <<"
                  value={text as string}
                />
              }
            />
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
