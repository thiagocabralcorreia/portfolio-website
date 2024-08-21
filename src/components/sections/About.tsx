import { motion } from "framer-motion";
import { useContext } from "react";
import { Link } from "react-scroll";
import { LanguageContext } from "../../context/LanguageContext";
import { enAboutData, ptAboutData } from "../../data/about";

import { skills, SkillSchema } from "../../data/skills";

const About = () => {
  const { language } = useContext(LanguageContext);
  const aboutData = language === "en" ? enAboutData : ptAboutData;

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="dark:bg-secondaryDarkBackground bg-secondaryBackground py-20"
    >
      <div className="flex max-lg:flex-col max-width lg:px-4 mx-auto lg:mb-10 max-lg:text-center content-center justify-between">
        <div className="px-5 lg:mr-24 max-lg:mb-20">
          <h1 className="section-title">{aboutData.niceToMeet}</h1>
          <p className="section-text">
            {aboutData.iAm}{" "}
            <span className="font-bold dark:font-normal text-primary dark:text-primaryDark">
              {aboutData.frontend}
            </span>{" "}
            {aboutData.exp}{" "}
            <span className="font-bold dark:font-normal text-primary dark:text-primaryDark">
              {aboutData.companies}
            </span>
            , {aboutData.work}.{" "}
          </p>
          <p className="section-text">
            {aboutData.iAmUiUx}{" "}
            <span className="font-bold dark:font-normal text-primary dark:text-primaryDark">
              {aboutData.uiUx}
            </span>
            , {aboutData.detailOriented}
            <span className="font-bold dark:font-normal text-primary dark:text-primaryDark">
              {" "}
              {aboutData.designSystem}
            </span>
            , {aboutData.library}
          </p>
          <p className="section-text mx-auto dark:text-neutral-300 text-neutral-800">
            {aboutData.learn}{" "}
            <span className="font-bold dark:font-normal text-primary dark:text-primaryDark">
              {aboutData.feelFree}{" "}
              <Link
                to={"contact"}
                offset={-96}
                smooth
                duration={500}
                className="underline underline-offset-4 cursor-pointer"
              >
                {aboutData.contact}
              </Link>{" "}
              {aboutData.me}
            </span>
            .
          </p>
        </div>

        <div>
          <h1 className="section-title">{aboutData.skills}</h1>
          <p className="section-text">{aboutData.someSkills}</p>
          <div className="flex flex-wrap max-lg:justify-center">
            {skills.map(({ id, skill }: SkillSchema) => {
              return (
                <div
                  key={id}
                  className="flex justify-center items-center my-1 md:my-2 mr-2 lg:mr-4 text-lg p-2 sm:p-3
                  bg-tertiaryBackground dark:bg-tertiaryDarkBackground text-neutral-900 dark:text-white"
                >
                  <p className="text-sm">{skill}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
