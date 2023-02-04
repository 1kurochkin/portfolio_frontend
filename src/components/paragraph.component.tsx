type ParagraphPropsTypes = {
  before?: string;
  after?: string;
  value?: string;
  className?: string;
};

function Paragraph(props: ParagraphPropsTypes) {
  const { before = "- ", after = "", value = "", className } = props;
  return (
    <p className={`mb-5 ${className}`}>
      <span className="font-bold text-secondary">{before}</span>
      {value}
      {after && <span className="font-bold text-secondary">{after}</span>}
    </p>
  );
}

export default Paragraph;
