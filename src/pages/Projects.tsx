import Header from "../components/Header";
import { LanguageContext } from "../context/LanguageContext";
import { AiFillCaretLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProjectsGrid from "../components/sections/ProjectsGrid";
import { ThemeToggleButton } from "../components/ThemeToggleButton";
import LanguageMenu from "../components/LanguageMenu";
import { enHeaderData, ptHeaderData } from "../data/header";
import { useContext } from "react";
import Tooltip from "../components/Tooltip";

const Projects = () => {
  const { language } = useContext(LanguageContext);
  const headerData = language === "en" ? enHeaderData : ptHeaderData;

  return (
    <>
      <Header
        desktopChildren={
          <div className="flex content-center items-center px-auto">
            <Link
              to={"/"}
              className="flex px-6 py-2 content-center justify-center header-link"
            >
              <AiFillCaretLeft className="mr-2 px-auto self-center text-primary dark:text-primaryDark"></AiFillCaretLeft>
              {headerData.goBack}
            </Link>
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
              to={"/"}
              className="flex content-center justify-center header-link py-2"
            >
              <AiFillCaretLeft className="mr-1 self-center text-primary dark:text-primaryDark"></AiFillCaretLeft>
              {headerData.smGoBack}
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="bg-primaryDarkBackground"
      >
        <div className="relative w-full pt-[96px] max-lg:mb-32 dark:bg-primaryDarkBackground bg-white">
          <ProjectsGrid />
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
