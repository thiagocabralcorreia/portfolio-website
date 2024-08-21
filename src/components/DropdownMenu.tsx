import { useContext, useRef } from "react";
import { Transition } from "@headlessui/react";
import { LanguageContext } from "../context/LanguageContext";
import { enSections, ptSections, SectionSchema } from "../data/sections";
import { Link } from "react-scroll";

interface DropdownMenuProps {
  show: boolean;
  onClose: () => void;
}

const DropdownMenu = ({ show, onClose }: DropdownMenuProps) => {
  const ref = useRef(null);
  const { language } = useContext(LanguageContext);

  const sections = language === "en" ? enSections : ptSections;

  return (
    <Transition
      show={show}
      enter="transition ease-out duration-900"
      enterFrom="opacity-0 translate-x-[-100%]"
      enterTo="opacity-100 translate-x-0"
      leave="transition ease-in duration-900"
      leaveFrom="opacity-100 translate-x-0"
      leaveTo="opacity-0 translate-x-[-100%]"
    >
      <nav className="lg:hidden">
        <div ref={ref} className="h-screen overflow-hidden text-center">
          <div className="h-screen pt-2 pb-3 space-y-1 sm:px-3 dark:bg-secondaryDarkBackground bg-secondaryBackground lg:primary-background-colors">
            {sections.map(({ id, section, value }: SectionSchema) => {
              return (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <Link
                  key={id}
                  to={value.toLowerCase()}
                  onClick={onClose}
                  offset={-96}
                  className="header-link block px-3 py-4"
                >
                  {section}
                </Link>
              );
            })}
          </div>
          <div onClick={onClose} className="bg-transparent w-full h-full" />
        </div>
      </nav>
    </Transition>
  );
};

export default DropdownMenu;
