import { useContext } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { LanguageContext } from "../context/LanguageContext";

import ProjectHeader from "../components/project/ProjectHeader";
import ProjectGallery from "../components/project/ProjectGallery";
import ProjectContent from "../components/project/ProjectContent";
import {
  enProjectDetailsData,
  ptProjectDetailsData,
} from "../data/projectDetails";

const ProjectDetails = () => {
  const { id } = useParams();
  const { language } = useContext(LanguageContext);
  const projectDetailsData =
    language === "en" ? enProjectDetailsData : ptProjectDetailsData;

  const project = projectDetailsData.find((p) => p.id === id);

  if (project) {
    console.log("Found project:", project);
  } else {
    console.log("Project not found");
  }

  return (
    <>
      <ProjectHeader project={project} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="max-width m-auto pb-14 max-lg:pb-32 px-4 sm:px-6 lg:px-8 dark:bg-primaryDarkBackground bg-white"
      >
        <ProjectGallery project={project} />
        <ProjectContent project={project} />
      </motion.div>
    </>
  );
};

export default ProjectDetails;
