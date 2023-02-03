import React, { ReactEventHandler } from "react";
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
      {/* <span className="border-2 border-dashed w-3/6">{domain[0]}</span> */}
      <div className="">
        <div className="font-bold flex justify-between items-center">
          <p>
            <span className="border-b-2 cursor-pointer">{domain}</span>
            {position && ` | ${position}`}
          </p>
          {startDate && <p>{`${startDate} - ${endDate}`}</p>}
        </div>
        <p className="mt-2 pl-3">{description}</p>
      </div>
    </div>
  );
}

export default JobCard;
