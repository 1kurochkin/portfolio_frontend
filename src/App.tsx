import React from "react";
import "./App.css";
import Header from "./components/header";
import H2 from "./components/h2";
import JobCard from "./components/jobCard";

function App() {
  const jobCards = [
    {
      startDate: "Jul 2021",
      endDate: "Apr 2022",
      position: "Backend JavaScript Developer",
      description:
        "One of the European IT service providers with 25 employees helped 500+ companies from the whole world to open a legal entity in the Eurozone and take care of tasks of accounting, invoicing, documentation and hr management.",
      domain: "enty.io",
    },
    {
      startDate: "Jul 2021",
      endDate: "Apr 2022",
      position: "Backend JavaScript Developer",
      description:
        "One of the European IT service providers with 25 employees helped 500+ companies from the whole world to open a legal entity in the Eurozone and take care of tasks of accounting, invoicing, documentation and hr management.",
      domain: "enty.io",
    },
    {
      startDate: "Jul 2021",
      endDate: "Apr 2022",
      position: "Backend JavaScript Developer",
      description:
        "One of the European IT service providers with 25 employees helped 500+ companies from the whole world to open a legal entity in the Eurozone and take care of tasks of accounting, invoicing, documentation and hr management.",
      domain: "enty.io",
    },
  ];
  return (
    <div className="App min-h-screen bg-gray-800 text-white flex justify-center flex-col">
      <Header />
      <div className="container w-9/12 self-center">
        <section className="min-h-screen flex items-center">
          <div className="self-center w-6/12">
            <h1 className="text-xl font-bold">
              Hello World! I'm Ivan Kurochkin
            </h1>
            <p className="">
              And in this second my code is helping people solve their problems,
              and the owners of that are making money.
            </p>
          </div>
        </section>
        <section className="flex flex-col justify-center pb-20 border-b-4 border-double">
          <H2 text={"ABOUT"} />
          <p className="mb-1">
            A Middle Full-Stack JavaScript Developer with 2.5 years of
            experience working in startups, specializing in creating massive and
            scalable web apps, mobile apps and server apps from scratch or with
            an existing codebase.
          </p>
          <p className="mb-5">
            Frontend Development is my destiny, and I'm seeking to develop in
            this direction.
          </p>
        </section>
        <section className="flex flex-col justify-center py-20 border-b-4 border-double">
          <H2 text={"SKILLS"} />
          <p className="mb-2">
            <span className="font-bold border-b">Programmer Languages:</span>
            {" JavaScript, TypeScript, SQL, Solidity."}
          </p>
          <p className="mb-2">
            <span className="font-bold border-b">Frontend:</span>
            {
              " React, React Native, Redux, RTK, GraphQL, HTML, CSS, SCCS, AntDesign, TailWind, Web3.js."
            }
          </p>
          <p className="mb-2">
            <span className="font-bold border-b">Backend:</span>
            {" Node.js, NestJS, Express.js, TypeORM, GraphQL."}
          </p>
          <p className="mb-5">
            <span className="font-bold border-b">Databases:</span>
            {" PostgreSQL, MongoDB."}
          </p>
          <p className="mb-5">
            I am always open to new knowledge and challenges.
          </p>
        </section>
        <section className="flex flex-col justify-center py-20 border-b-4 border-double">
          <H2 text={"WORK EXPIRIENCE"} />
          {jobCards.map((jobCard) => (
            <JobCard
              startDate={jobCard.startDate}
              endDate={jobCard.endDate}
              position={jobCard.position}
              description={jobCard.description}
              domain={jobCard.domain}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
