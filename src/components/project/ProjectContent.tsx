import { useContext } from "react";
import { FaGlobe, FaApple, FaGooglePlay, FaGithub } from "react-icons/fa";
import { LanguageContext } from "../../context/LanguageContext";

import {
  enIntroProjectDetailsData,
  ProjectDetailsSchema,
  ptIntroProjectDetailsData,
} from "../../data/projectDetails";

interface ProjectContentProps {
  project?: ProjectDetailsSchema;
}

const ProjectContent = ({ project }: ProjectContentProps) => {
  const { language } = useContext(LanguageContext);
  const projectIntroDetailsData =
    language === "en" ? enIntroProjectDetailsData : ptIntroProjectDetailsData;

  return (
    <div className="block sm:flex gap-0 sm:gap-10 sm:mt-14">
      <div className="w-full sm:w-1/3 text-left">
        <div className="mb-7">
          <p className="text-3xl font-semibold text-black dark:text-white font-poppins  mb-7">
            {projectIntroDetailsData.skills}
          </p>
          <div className="flex flex-wrap">
            {project?.skills.map((skill, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-center items-center my-1 md:my-2 mr-2 lg:mr-4 text-lg p-2 sm:p-3
                bg-tertiaryBackground dark:bg-tertiaryDarkBackground text-neutral-900 dark:text-white"
                >
                  <p className="text-sm">{skill}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-7">
          <p className="text-3xl font-semibold text-black dark:text-white font-poppins  mb-7">
            Links
          </p>
          {project?.website && (
            <a
              href={project?.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full section-text mb-5
              hover:text-primary dark:hover:text-primaryDark duration-300"
            >
              <FaGlobe size={28} />
              <p className="ml-4">{projectIntroDetailsData.website}</p>
            </a>
          )}
          {project?.appleStore && (
            <a
              href={project?.appleStore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full section-text mb-5
              hover:text-primary dark:hover:text-primaryDark duration-300"
            >
              <FaApple size={28} />
              <p className="ml-4">{projectIntroDetailsData.apple}</p>
            </a>
          )}
          {project?.playStore && (
            <a
              href={project?.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full section-text mb-5
              hover:text-primary dark:hover:text-primaryDark duration-300"
            >
              <FaGooglePlay size={28} />
              <p className="ml-4">{projectIntroDetailsData.play}</p>
            </a>
          )}
          {project?.github && (
            <a
              href={project?.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full section-text mb-5
              hover:text-primary dark:hover:text-primaryDark duration-300"
            >
              <FaGithub size={28} />
              <p className="ml-4">{projectIntroDetailsData.code}</p>
            </a>
          )}
        </div>
      </div>

      <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
        <p className="text-3xl font-semibold text-black dark:text-white font-poppins  mb-7">
          {projectIntroDetailsData.overview}
        </p>
        {project?.about.map(({ id, text }) => (
          <p key={id} className="section-text">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProjectContent;
