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
      <div className="w-full">
        <div className="font-bold flex basis-full justify-between items-center flex-wrap text-secondary">
          <div className="flex flex-wrap">
            <Link
              className={`hover:text-primary xl:basis-full`}
              value={domain}
              href={`https://${domain}`}
            />
            <span className="mx-2 xl:hidden">{" | "}</span>
            <p>{position && `${position}`}</p>
          </div>

          {startDate && (
            <span className="text-secondary xl:basis-8/12">{`${startDate} - ${endDate}`}</span>
          )}
        </div>
        <p className="mt-2 whitespace-pre-line">
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
