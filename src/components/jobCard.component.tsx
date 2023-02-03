import React, { ReactEventHandler } from "react";
import Link from "./link.component";
type JobCardPropsTypes = {
  domain: string;
  startDate?: string;
  endDate?: string;
  position?: string;
  description: string;
};

function JobCard(props: JobCardPropsTypes) {
  const { domain, startDate, endDate, position, description } = props;
  const onClickHandler = () => {
    console.log(`https://${domain}`);
  };
  return (
    <div className="flex mb-10">
      <div className="">
        <div className="font-bold flex justify-between items-center">
          <p className="text-green-500">
            <Link text={domain} href={`https://${domain}`}/>
            {position && ` | ${position}`}
          </p>
          {startDate && <span className="text-green-500">{`${startDate} - ${endDate}`}</span>}
        </div>
        <p className="mt-2 pl-3">{description}</p>
      </div>
    </div>
  );
}

export default JobCard;
