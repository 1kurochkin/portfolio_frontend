import { motion } from "framer-motion";
import { ReactElement, forwardRef } from "react";

type ParagraphPropsTypes = {
  before?: string;
  after?: string;
  value?: string | ReactElement;
  className?: string;
};

const Paragraph = forwardRef((props: ParagraphPropsTypes, ref?: React.LegacyRef<HTMLParagraphElement>) => {
  const { before, after = "", value = "", className } = props;
  return (
    <p ref={ref} className={`mb-5 ${className} inline-block`}>
      <span className="font-bold text-secondary">{before}</span>
      {value}
      {after && <span className="font-bold text-secondary">{after}</span>}
    </p>
  );
})

const MParagraph = motion(Paragraph);
export {Paragraph, MParagraph};
