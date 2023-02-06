import { motion } from "framer-motion";
import { forwardRef } from "react";

type H2PropsTypes = {
  text: string | JSX.Element | Array<JSX.Element> | undefined;
}

const H2 = forwardRef((props: H2PropsTypes, ref: React.LegacyRef<HTMLHeadingElement>) => {
  const {text} = props;
  return (
    <h2 ref={ref} className="sm:text-3xl text-3xl border-b-2 pb-2 border-secondary w-fit mb-10 font-bold ">
      <span className="text-secondary">~/</span>
      {text}
    </h2>
  );
})

const MH2 = motion(H2);

export { H2, MH2 };

