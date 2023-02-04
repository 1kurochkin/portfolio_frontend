import Link from "./link.component";
import Paragraph from "./paragraph.component";
type JobCardPropsTypes = {
  domain: string;
  startDate?: string;
  endDate?: string;
  position?: string;
  description: string;
};

function JobCard(props: JobCardPropsTypes) {
  const { domain, startDate, endDate, position, description } = props;
  return (
    <div className="flex mb-10">
      <div className="">
        <div className="font-bold flex justify-between items-center">
          <p className="text-secondary">
            <Link className="hover:text-primary" value={domain} href={`https://${domain}`} />
            {position && ` | ${position}`}
          </p>
          {startDate && (
            <span className="text-secondary">{`${startDate} - ${endDate}`}</span>
          )}
        </div>
        <p className="mt-2 pl-3 whitespace-pre-line">
          {description
            .split("\n")
            .map((text) =>
              text.length ? <Paragraph value={text} className={"mb-5"} /> : null
            )}
        </p>
      </div>
    </div>
  );
}

export default JobCard;
