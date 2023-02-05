type H2PropsTypes = {
  text: string;
}

function H2(props: H2PropsTypes) {
  const {text} = props;
  return (
    <h2 className="sm:text-3xl text-3xl border-b-2 pb-2 border-secondary w-fit mb-10 font-bold ">
      <span className="text-secondary">~/</span>
      {text}
    </h2>
  );
}

export default H2;
