import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { ProjectsContext } from "../../context/ProjectsContext";
import { LanguageContext } from "../../context/LanguageContext";
import ProjectCard from "../ProjectCard";
import ProjectsFilter from "../ProjectsFilter";

import {
  enIntroProjectsData,
  ProjecSchema,
  ptIntroProjectsData,
} from "../../data/projects";

interface ProjectsGridProps {
  home?: boolean;
}

const ProjectsGrid = ({ home }: ProjectsGridProps) => {
  const {
    projects,
    selectProject,
    setSelectProject,
    selectProjectsByCategory,
  } = useContext(ProjectsContext);
  const { language } = useContext(LanguageContext);
  const projectData =
    language === "en" ? enIntroProjectsData : ptIntroProjectsData;
  const navigate = useNavigate();

  const handleProjectClick = (id: string) => {
    navigate(`/project/${id}`);
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
      className="w-full pt-20 pb-12"
    >
      <div className="max-width m-auto text-center">
        <h1 className="section-title">{projectData.title}</h1>
      </div>

      <p className="section-text w-8/12 m-auto text-center">
        {projectData.description}
        {!home && <span className="lg:block">{projectData.filter}</span>}
      </p>

      {!home && (
        <div className="max-width m-auto text-center mt-10">
          <ProjectsFilter setSelectProject={setSelectProject} />
        </div>
      )}

      <div className="max-w-[1200px] w-9/12 m-auto max-sm:mt-12 sm:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
        {home
          ? projects
              ?.slice(0, 6)
              .map((project) => (
                <ProjectCard
                  title={project.title}
                  category={project.category}
                  image={project.image}
                  key={project.id}
                  onClick={() => handleProjectClick(project.id || "")}
                />
              ))
          : selectProject !== "All"
          ? selectProjectsByCategory?.map((project: ProjecSchema) => (
              <ProjectCard
                title={project.title}
                category={project.category}
                image={project.image}
                key={project.id}
                onClick={() => handleProjectClick(project.id || "")}
              />
            ))
          : projects?.map((project) => (
              <ProjectCard
                title={project.title}
                category={project.category}
                image={project.image}
                key={project.id}
                onClick={() => handleProjectClick(project.id || "")}
              />
            ))}
      </div>
    </motion.section>
  );
};

export default ProjectsGrid;
