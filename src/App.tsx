import { initializeApp } from "firebase/app";
import {
  fetchAndActivate,
  getAll,
  getRemoteConfig,
} from "firebase/remote-config";
import { useEffect, useState } from "react";
import "./App.css";
import H2 from "./components/h2.component";
import Header from "./components/header.component";
import JobCard from "./components/jobCard.component";
import firebaseConfig from "./configs/firebase.config.json";
import rcDefault from "./configs/rcDefault.config.json";
import Footer from "./components/footer.component";

type FirebaseRemoteConfigType = {
  resume_link: string;
  welcome: { title: string; subtitle: string };
  about: { summary: string };
  skills: {
    programmer_languages: string;
    frontend: string;
    backend: string;
    databases: string;
  };
  work_expirience: Array<{
    domain: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  projects: Array<{ name: string; domain: string; description: string }>;
  contacts: {
    email: string;
    linkedin: string;
    github: string;
    resume_link: string;
  };
};

function App() {
  const [loading, setLoading] = useState<Boolean>(true);
  const [contentConfig, setContentConfig] =
    useState<FirebaseRemoteConfigType>();

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const remoteConfig = getRemoteConfig(app);
    remoteConfig.defaultConfig = rcDefault;
    remoteConfig.settings.minimumFetchIntervalMillis = 15000;
    (async () => {
      await fetchAndActivate(remoteConfig);
      const remoteConfigValues = getAll(remoteConfig);
      console.log(remoteConfigValues);
      for (const key in remoteConfigValues) {
        setContentConfig((prevState: any) => ({
          ...prevState,
          [key]: JSON.parse(remoteConfigValues[key].asString()),
        }));
      }
      setLoading(false);
    })();
  }, []);

  const contactLinks = [
    {
      href: `mailto:${contentConfig?.contacts.email}`,
      text: contentConfig?.contacts.email,
    },
    {
      href: `https://www.linkedin.com/in/${contentConfig?.contacts.github}`,
      text: `linkedin.com/in/${contentConfig?.contacts.linkedin}`,
    },
    {
      href: `https://github.com/${contentConfig?.contacts.github}`,
      text: `github.com/${contentConfig?.contacts.github}`,
    },
  ];

  return (
    <div className="App min-h-screen bg-gray-800 text-white flex justify-center flex-col text-xl">
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          <Header />
          <div className="container w-9/12 self-center">
            <section className="flex items-center">
              <div className="self-center w-3/4">
                <h1 className="text-3xl font-bold mb-2 text-green-500">
                  {contentConfig?.welcome.title}
                </h1>
                <p className="">{contentConfig?.welcome.subtitle}</p>
              </div>
            </section>
            <section id="about" className="flex flex-col justify-center pb-20 border-b-2 border-dashed">
              <H2 text={"about"} />
              <p className="mb-1">{contentConfig?.about.summary}</p>
            </section>
            <section id="skills" className="flex flex-col justify-center py-20 border-b-2 border-dashed">
              <H2 text={"skills"} />
              {Object.entries(contentConfig?.skills || {}).map(
                ([key, value]) => (
                  <p className="mb-5">
                    <span className="font-bold text-green-500 pb-1">{`${key}:`}</span>
                    <span className="">{value}</span>
                  </p>
                )
              )}
            </section>
            <section id="work_expirience"  className="flex flex-col justify-center py-20 border-b-2 border-dashed">
              <H2 text={"work_expirience"} />
              {contentConfig?.work_expirience.map((work: any) => (
                <JobCard
                  startDate={work.startDate}
                  endDate={work.endDate}
                  position={work.position}
                  description={work.description}
                  domain={work.domain}
                />
              ))}
            </section>
            <section id="projects" className="flex flex-col justify-center py-20">
              <H2 text={"projects"} />
              {contentConfig?.projects.map((project: any) => (
                <JobCard
                  position={project.name}
                  description={project.description}
                  domain={project.domain}
                />
              ))}
            </section>
          </div>

        </>
      )}
    </div>
  );
}

export default App;
