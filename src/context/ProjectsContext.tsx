import React, { useState, createContext } from "react";
import { ProjecSchema, projectsData } from "../data/projects";

interface ProjectsContextProps {
  projects?: ProjecSchema[];
  setProjects?: (value: ProjecSchema[]) => void;
  selectProject?: string;
  setSelectProject?: (value: string) => void;
  selectProjectsByCategory?: React.SetStateAction<any>;
  children?: React.ReactNode;
}

export const ProjectsContext = createContext<ProjectsContextProps>(
  {} as ProjectsContextProps
);

export const ProjectsProvider = (props: ProjectsContextProps) => {
  const [projects, setProjects] = useState<ProjecSchema[]>(projectsData);
  const [selectProject, setSelectProject] = useState<string>("All");

  const selectProjectsByCategory = projects.filter((item) => {
    let category =
      item.category.charAt(0).toUpperCase() + item.category.slice(1);
    return category.includes(selectProject);
  });

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        setProjects,
        selectProject,
        setSelectProject,
        selectProjectsByCategory,
      }}
    >
      {props.children}
    </ProjectsContext.Provider>
  );
};
