import { Fragment, useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Language, LanguageContext } from "../context/LanguageContext";
import { enHeaderData, ptHeaderData } from "../data/header";

interface LanguageMenuProps {
  imgWidth?: number;
  imgStyle: string;
}

const LanguageMenu: React.FC<LanguageMenuProps> = ({
  imgWidth = 23,
  imgStyle,
}) => {
  const { language, setLanguage } = useContext(LanguageContext);
  const headerData = language === "en" ? enHeaderData : ptHeaderData;

  const handleLanguageChange = (selectedLanguage: Language) => {
    setLanguage(selectedLanguage);
  };

  return (
    <Menu as="div" className="relative flex my-auto  content-center">
      <Menu.Button className="my-auto content-center">
        <img
          src={`https://hatscripts.github.io/circle-flags/flags/${
            language === "pt" ? "br" : "gb"
          }.svg`}
          width={imgWidth}
          alt={
            language === "pt" ? headerData.ptLanguage : headerData.enLanguage
          }
          className={imgStyle}
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="absolute top-8 right-0 mt-2 w-56 origin-top-right z-50
        divide-y divide-gray-100 dark:bg-neutral-700 bg-neutral-50 shadow-lg
        ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="p-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => handleLanguageChange("en")}
                  className={`${
                    active
                      ? "bg-primary text-white dark:bg-primaryDark dark:text-neutral-900"
                      : "dark:text-white text-neutral-900"
                  } group flex w-full items-center px-2 py-2 text-sm`}
                >
                  <img
                    src="https://hatscripts.github.io/circle-flags/flags/gb.svg"
                    width="23"
                    alt={headerData.enLanguage}
                    className="ml-2 cursor-pointer content-center my-auto mr-3 transition ease-out duration-500 rounded-xl"
                  />
                  {headerData.enLanguage}
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => handleLanguageChange("pt")}
                  className={`${
                    active
                      ? "bg-primary text-white dark:bg-primaryDark dark:text-neutral-900"
                      : "dark:text-white text-neutral-900"
                  } group flex w-full items-center px-2 py-2 text-sm`}
                >
                  <img
                    src="https://hatscripts.github.io/circle-flags/flags/br.svg"
                    width="23"
                    alt={headerData.ptLanguage}
                    className="ml-2 cursor-pointer content-center my-auto mr-3 transition ease-out duration-500 rounded-xl"
                  />
                  {headerData.ptLanguage}
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default LanguageMenu;
