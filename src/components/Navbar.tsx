/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-scroll";
import { enSections, ptSections, SectionSchema } from "../data/sections";
import { LanguageContext } from "../context/LanguageContext";

import DropdownMenu from "./DropdownMenu";
import LanguageMenu from "./LanguageMenu";
import Header from "./Header";
import { ThemeToggleButton } from "./ThemeToggleButton";
import Tooltip from "./Tooltip";
import { enHeaderData, ptHeaderData } from "../data/header";

const Navbar = () => {
  const { language } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);

  const sections = language === "en" ? enSections : ptSections;
  const headerData = language === "en" ? enHeaderData : ptHeaderData;

  const closeDropdownMenu = () => {
    if (window.innerWidth >= 1024) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    closeDropdownMenu();
  });
  window.addEventListener("resize", closeDropdownMenu);

  return (
    <Header
      desktopChildren={
        <div className="flex w-full justify-between">
          {sections.map(({ id, section, value }: SectionSchema) => {
            return (
              <Link
                key={id}
                to={value.toLowerCase()}
                offset={-96}
                smooth
                duration={500}
                className="px-6 py-2 header-link"
              >
                {section}
              </Link>
            );
          })}
          <div className="flex ml-8 space-x-3">
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
        <div className="flex space-x-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md primary-font-colors duration-500"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            {!isOpen ? (
              <svg
                className="block h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
          <ThemeToggleButton iconSize={28} />
          <div className="content-center my-auto flex-shrink-0 w-9">
            <LanguageMenu
              imgWidth={24}
              imgStyle="ml-2 cursor-pointer content-center my-auto transition ease-out duration-500
              hover:border-2 hover:border-primary dark:hover:border-primaryDark rounded-xl"
            />
          </div>
        </div>
      }
      dropdownMenu={
        <DropdownMenu show={isOpen} onClose={() => setIsOpen(false)} />
      }
    />
  );
};

export default Navbar;
