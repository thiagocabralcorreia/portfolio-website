import { Link } from "react-router-dom";
import { ProjectDetailsSchema } from "../../data/projectDetails";
import { AiFillCalendar, AiFillCaretLeft, AiFillTag } from "react-icons/ai";
import { LanguageContext } from "../../context/LanguageContext";

import Header from "../Header";
import { motion } from "framer-motion";
import { ThemeToggleButton } from "../ThemeToggleButton";
import LanguageMenu from "../LanguageMenu";
import { useContext } from "react";
import { enHeaderData, ptHeaderData } from "../../data/header";
import Tooltip from "../Tooltip";

interface ProjectHeaderProps {
  project?: ProjectDetailsSchema;
}

const ProjectHeader = ({ project }: ProjectHeaderProps) => {
  const { language } = useContext(LanguageContext);
  const headerData = language === "en" ? enHeaderData : ptHeaderData;

  return (
    <>
      <Header
        desktopChildren={
          <div className="flex content-center items-center px-auto">
            <Link
              to={"/"}
              className="flex content-center justify-center header-link px-6 py-2"
            >
              {headerData.home}
            </Link>
            <Link
              to={"/projects"}
              className="flex content-center justify-center header-link px-6 py-2"
            >
              {headerData.projects}
            </Link>{" "}
            <div className="flex ml-12 space-x-3">
              <Tooltip
                text={headerData.toggleTheme}
                customStyle="top-10 right-[-36px] w-24"
              >
                <ThemeToggleButton />
              </Tooltip>
              <LanguageMenu
                imgStyle="ml-2 cursor-pointer content-center my-auto transition ease-out duration-500
              hover:border-2 hover:border-primary dark:hover:border-primaryDark rounded-xl"
              />
            </div>
          </div>
        }
        mobileChildren={
          <>
            <Link
              to={"/projects"}
              className="flex content-center justify-center header-link py-2"
            >
              <AiFillCaretLeft className="mr-1 self-center text-primary dark:text-primaryDark"></AiFillCaretLeft>
              {headerData.projects}
            </Link>
            <div className="ml-5 flex flex-col content-center justify-center">
              <ThemeToggleButton iconSize={28} />
            </div>
            <div className="ml-4 content-center my-auto flex-shrink-0 w-9">
              <LanguageMenu
                imgWidth={24}
                imgStyle="cursor-pointer transition ease-out duration-500
            hover:border-2 hover:border-primary dark:hover:border-primaryDark rounded-xl"
              />
            </div>
          </>
        }
      />

      <motion.div
        id="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="pt-36 max-width m-auto px-4 sm:px-6 lg:px-8 bg:neutral-900"
      >
        <p className="section-title text-primary dark:text-primaryDark">
          {project?.name}
        </p>
        <div className="flex max-sm:flex-col mt-[-14px] lg:mt-[-24px]">
          <div className="flex items-center max-sm:mb-5 mr-10">
            <AiFillCalendar className="text-lg dark:text-neutral-300 text-neutral-700" />
            <span className="ml-2 leading-none dark:text-neutral-300 text-neutral-700">
              {project?.date}
            </span>
          </div>
          <div className="flex items-center">
            <AiFillTag className="text-lg dark:text-neutral-300 text-neutral-700" />
            <span className="ml-2 leading-none dark:text-neutral-300 text-neutral-700">
              {project?.type}
            </span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectHeader;
