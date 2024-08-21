import { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AiFillCaretLeft } from "react-icons/ai";

import { LanguageContext } from "../context/LanguageContext";
import Header from "../components/Header";
import LanguageMenu from "../components/LanguageMenu";
import { ThemeToggleButton } from "../components/ThemeToggleButton";

import { enHeaderData, ptHeaderData } from "../data/header";

const NotFound = () => {
  const { language } = useContext(LanguageContext);
  const headerData = language === "en" ? enHeaderData : ptHeaderData;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="max-width m-auto pb-14 max-lg:pb-32 px-4 sm:px-6 lg:px-8"
    >
      <Header
        desktopChildren={
          <>
            <Link
              to={"/"}
              className="flex content-center justify-center header-link"
            >
              <AiFillCaretLeft className="mr-2 self-center text-primary dark:text-primaryDark"></AiFillCaretLeft>
              {headerData.goBack}
            </Link>
            <ThemeToggleButton />
            <LanguageMenu
              imgStyle="ml-2 cursor-pointer content-center my-auto transition ease-out duration-500
        hover:border-2 hover:border-primary dark:hover:border-primaryDark rounded-xl"
            />
          </>
        }
        mobileChildren={
          <>
            <Link
              to={"/"}
              className="flex content-center justify-center header-link"
            >
              <AiFillCaretLeft className="mr-1 self-center text-primary dark:text-primaryDark"></AiFillCaretLeft>
              {headerData.smGoBack}
            </Link>
            <ThemeToggleButton extraStyle="pl-4" />
            <LanguageMenu
              imgWidth={22}
              imgStyle="ml-2 cursor-pointer content-center my-auto transition ease-out duration-500
        hover:border-2 hover:border-primary dark:hover:border-primaryDark rounded-xl"
            />
          </>
        }
      />
      <div className="flex flex-col content-center justify-center max-sm:py-72 py-56 mx-auto text-center dark:bg-primaryDarkBackground bg-white">
        <h1
          className="font-bold text-[154px] md:text-[200px] leading-[160px] md:leading-[210px] font-poppins 
        dark:text-white text-neutral-800"
        >
          404
        </h1>
        <h2 className="font-bold text-[28px] md:text-[36px] text-primary dark:text-primaryDark">
          {language === "en" ? "Page Not Found" : "Página Não Encontrada"}
        </h2>
      </div>
    </motion.div>
  );
};

export default NotFound;
