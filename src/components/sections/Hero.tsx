import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { FiArrowDownCircle } from "react-icons/fi";

import { LanguageContext } from "../../context/LanguageContext";
import { enHeroData, ptHeroData } from "../../data/hero";
import Hyperlink from "../Hyperlink";
import photo from "../../assets/photo.png";
import { useTheme } from "../../context/ThemeContext";

const Hero = () => {
  const { language } = useContext(LanguageContext);
  const { theme } = useTheme();
  const heroData = language === "en" ? enHeroData : ptHeroData;

  useEffect(() => {}, [theme]);

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1.2, delay: 0.2 }}
      className="max-width max-w-[1200px] lg:h-screen m-auto px-8 pt-28 lg:pt-24 lg:flex lg:justify-between lg:item-center"
    >
      <div className="flex flex-col max-lg:pt-12 max-lg:pb-16 text-center lg:text-left content-center justify-center">
        <p className="text-neutral-700 dark:text-neutral-300 sm:text-md text-xl mb-3 sm:mb-4 font-inter">
          {heroData.hi}
          <br className="lg:hidden" />
          <span className="text-black dark:text-white font-semibold">
            {" "}
            {heroData.name}
          </span>
        </p>
        <h1
          className={
            (language !== "en" && "max-sm:text-3xl") +
            " text-5xl md:text-7xl text-primary dark:text-primaryDark font-semibold mb-3 sm:mb-5 font-poppins"
          }
        >
          {heroData.frontend}
          <br className="max-md:hidden" />
          <span className="lg:hidden"> </span>
          <span>{heroData.developer}</span>
        </h1>
        <p className="sm:text-md text-xl max-w-xl max-lg:mx-auto text-neutral-700 dark:text-neutral-300">
          {heroData.passionate} {heroData.ui}
        </p>

        <div className="flex justify-center text-lg lg:block w-52 pt-12 max-lg:m-auto ">
          <Hyperlink
            download="CV_Thiago_Correia_dev.pdf"
            href="/files/CV_Thiago_Correia_dev.pdf"
            aria-label="Download Resume"
          >
            <FiArrowDownCircle className="mr-2 w-5 h-5 duration-100"></FiArrowDownCircle>
            <span>Download CV</span>
          </Hyperlink>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1.2, delay: 0.2 }}
        className="flex flex-col my-auto max-lg:mx-auto max-lg:content-center content-end justify-center"
      >
        <img
          src={photo}
          alt="Animated developer guy with laptop"
          className="max-width lg:w-7/12 self-center lg:self-end"
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
