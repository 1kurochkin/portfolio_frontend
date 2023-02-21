import { initializeApp } from "firebase/app";
import {
  fetchAndActivate,
  getAll,
  getRemoteConfig,
} from "firebase/remote-config";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./App.css";
import { MH2 } from "./components/h2.component";
import Header from "./components/header.component";
import { MJobCard } from "./components/jobCard.component";
import Link from "./components/link.component";
import { MParagraph } from "./components/paragraph.component";
import firebaseConfig from "./configs/firebase.config.json";
import rcDefault from "./configs/rcDefault.config.json";
import { splitWordToChars } from "./utils/splitWordToChars.util";

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
  work_experience: Array<{
    domain: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  projects: Array<{ name: string; domain: string; description: string }>;
  contacts: {
    subtitle: string;
    email: string;
    linkedin: string;
    github: string;
    resume_link: string;
  };
};

function App() {
  const [loading, setLoading] = useState<Boolean>(true);
  const [viewedSections, setViewedSections] = useState([""]);
  const [contentConfig, setContentConfig] =
    useState<FirebaseRemoteConfigType>();

  const onViewportEnterHandler = (entry: IntersectionObserverEntry | null) => {
    if (entry && !viewedSections.includes(entry.target.id || " ")) {
      setViewedSections((prev) => prev.concat(entry.target.id));
    }
  };

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
      setTimeout(() => setLoading(false), 1000)
    
    })();
  }, []);

  const contactLinks = [
    {
      key: "email",
      href: `mailto:${contentConfig?.contacts.email}`,
      value: contentConfig?.contacts.email,
    },
    {
      key: "linkedin",
      href: `https://www.linkedin.com/in/${contentConfig?.contacts.github}`,
      value: `linkedin.com/in/${contentConfig?.contacts.linkedin}`,
    },
    {
      key: "github",
      href: `https://github.com/${contentConfig?.contacts.github}`,
      value: `github.com/${contentConfig?.contacts.github}`,
    },
  ];

  const TitleWordAnimation = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { delay: 0.5, staggerChildren: 0.08 } },
  };
  const TitleLettersAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const ParagraphAnimation = {
    hidden: (custom: string = "-30%") => ({ opacity: 0, x: custom }),
    visible: { opacity: 1, x: 0, transition: { delay: 0.5 } },
  };

  const splitWordToCharsCallback = (letter: string, custom?: any) => (
    <motion.span custom={custom} variants={TitleLettersAnimation}>
      {letter}
    </motion.span>
  );

  return (
    <div className="App min-h-screen bg-background text-primary font-normal sm:text-lg text-2xl flex justify-center flex-col">
      {loading ? (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={TitleWordAnimation}
          className={
            "overflow-hidden flex justify-center items-center text-4xl text-secondary absolute top-0 left-0 z-20 w-screen h-full opacity-50"
          }
        >
          {splitWordToChars("0 1 0 1 0 1 1 1 0", (letter: string) =>
            splitWordToCharsCallback(letter, Infinity)
          )}
        </motion.div>
      ) : (
        <>
          <Header resumeLink={contentConfig?.contacts.resume_link} />
          <div className="sm:w-10/12 w-9/12 self-center z-20 bg-inherit">
            <motion.section
              onViewportEnter={onViewportEnterHandler}
              id="greeting"
              className="flex items-center -mt-20"
            >
              <div className="self-center w-3/4">
                <motion.h1
                  initial={
                    !viewedSections.includes("greeting") ? "hidden" : false
                  }
                  whileInView="visible"
                  variants={
                    !viewedSections.includes("greeting")
                      ? TitleWordAnimation
                      : undefined
                  }
                  className="text-3xl font-bold mb-2 text-secondary"
                >
                  {splitWordToChars(
                    contentConfig?.welcome.title,
                    splitWordToCharsCallback
                  )}
                </motion.h1>
                <MParagraph
                  initial={
                    !viewedSections.includes("greeting") ? "hidden" : false
                  }
                  whileInView="visible"
                  variants={ParagraphAnimation}
                  value={contentConfig?.welcome.subtitle}
                  className={"mb-10 whitespace-pre-line"}
                />
              </div>
            </motion.section>
            <motion.section
              onViewportEnter={onViewportEnterHandler}
              id="about"
              className="flex flex-col justify-center pb-20 border-b-2 border-dashed"
            >
              <MH2
                initial={!viewedSections.includes("about") ? "hidden" : false}
                whileInView="visible"
                variants={TitleWordAnimation}
                text={splitWordToChars("about", splitWordToCharsCallback)}
              />
              <MParagraph
                before="- "
                initial={!viewedSections.includes("about") ? "hidden" : false}
                whileInView="visible"
                variants={ParagraphAnimation}
                value={contentConfig?.about.summary}
                className={"mb-10 whitespace-pre-line"}
              />
              {Object.entries(contentConfig?.skills || {}).map(
                ([key, value], i) => (
                  <MParagraph
                    initial={
                      !viewedSections.includes("about") ? "hidden" : false
                    }
                    custom={["-30%", "30%"][i % 2]}
                    whileInView="visible"
                    variants={ParagraphAnimation}
                    before={`${key}: [ `}
                    after={" ]"}
                    value={value}
                    className={"mb-5"}
                  />
                )
              )}
            </motion.section>
            <motion.section
              onViewportEnter={onViewportEnterHandler}
              id="work_experience"
              className="flex flex-col justify-center py-20 border-b-2 border-dashed"
            >
              <MH2
                initial={
                  !viewedSections.includes("work_experience") ? "hidden" : false
                }
                whileInView="visible"
                variants={TitleWordAnimation}
                text={splitWordToChars(
                  "work_experience",
                  splitWordToCharsCallback
                )}
              />
              {contentConfig?.work_experience.map((work: any, i) => (
                <MJobCard
                  initial={
                    !viewedSections.includes("work_experience")
                      ? "hidden"
                      : false
                  }
                  custom={["-30%", "30%"][i % 2]}
                  whileInView="visible"
                  variants={ParagraphAnimation}
                  startDate={work.startDate}
                  endDate={work.endDate}
                  position={work.position}
                  description={work.description}
                  domain={work.domain}
                />
              ))}
            </motion.section>
            <motion.section
              onViewportEnter={onViewportEnterHandler}
              id="projects"
              className="flex flex-col justify-center py-20 border-b-2 border-dashed"
            >
              <MH2
                initial={
                  !viewedSections.includes("projects") ? "hidden" : false
                }
                whileInView="visible"
                variants={TitleWordAnimation}
                text={splitWordToChars("projects", splitWordToCharsCallback)}
              />

              {contentConfig?.projects.map((project: any, i) => (
                <MJobCard
                  initial={
                    !viewedSections.includes("projects") ? "hidden" : false
                  }
                  custom={["-30%", "30%"][i % 2]}
                  whileInView="visible"
                  variants={ParagraphAnimation}
                  position={project.name}
                  description={project.description}
                  domain={project.domain}
                />
              ))}
            </motion.section>
            <motion.section
              id="contacts"
              onViewportEnter={onViewportEnterHandler}
              className="flex flex-col justify-center py-20"
            >
              <MH2
                initial={"hidden"}
                whileInView="visible"
                variants={TitleWordAnimation}
                text={splitWordToChars("contacts", splitWordToCharsCallback)}
              />
              <MParagraph
                before="- "
                initial={
                  !viewedSections.includes("contacts") ? "hidden" : false
                }
                whileInView="visible"
                variants={ParagraphAnimation}
                value={contentConfig?.contacts.subtitle}
                className={"mb-10 whitespace-pre-line"}
              />
              {contactLinks.map(({ key, value, href }, i) => (
                <MParagraph
                  initial={
                    !viewedSections.includes("contacts") ? "hidden" : false
                  }
                  custom={["-30%", "30%"][i % 2]}
                  whileInView="visible"
                  variants={ParagraphAnimation}
                  before={`${key}: `}
                  value={<Link href={href} value={value} />}
                  className={"mb-5"}
                />
              ))}
<!--               <Link
                className="p-2 px-5 text-center w-6/12 mt-10 border-2 border-secondary hover:border-solid hover:text-secondary"
                href={contentConfig?.contacts.resume_link}
                value={"resume"}
              /> -->
            </motion.section>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
