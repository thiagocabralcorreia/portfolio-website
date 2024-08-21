import { useContext, Fragment, useState } from "react";
import { HiChevronUpDown } from "react-icons/hi2";
import { Listbox, Transition } from "@headlessui/react";

import { LanguageContext } from "../context/LanguageContext";

const options = [
  { value: "All", name: "All" },
  { value: "All", name: "All" },
  { value: "Web", name: "Web" },
  { value: "Mobile", name: "Mobile" },
];

interface OptionSchema {
  value: string;
  name: string;
}

const ProjectsFilter = ({ setSelectProject }: any) => {
  const { language } = useContext(LanguageContext);
  const [selected, setSelected] = useState<OptionSchema>(options[0]);

  const translate = (option: string) => {
    if (option === "All") {
      if (language === "pt") {
        return "Todos";
      }
    }
    return option;
  };

  const onSelect = (option: OptionSchema) => {
    setSelected(option);
    setSelectProject(option.value);
  };

  return (
    <Listbox value={selected} onChange={onSelect}>
      <div className="relative flex m-auto justify-center z-50">
        <Listbox.Button
          className="h-11 w-40 flex justify-between content-center appearance-none relative
          py-2 pl-5 pr-3 bg-primary dark:bg-primaryDark text-white dark:text-neutral-900 border border-none text-md text-center
          focus:outline-none cursor-default transition duration-150 ease-out hover:ease-in"
        >
          <span className="content-center my-auto">
            {translate(selected.name)}
          </span>
          <HiChevronUpDown
            className="h-7 w-6 text-white dark:text-neutral-900"
            aria-hidden="true"
          />
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100 hidden"
          leaveFrom="opacity-100 relative"
          leaveTo="hidden relative"
        >
          <Listbox.Options
            className="absolute top-12 w-40 overflow-auto bg-white dark:bg-neutral-800
            shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-md"
          >
            {options.map(
              (option: OptionSchema) =>
                option !== options[0] && (
                  <Listbox.Option
                    key={option.name}
                    className={({ active }) =>
                      `cursor-default text-left select-none pl-5 py-2 pr-4  ${
                        active
                          ? "bg-primary dark:bg-primaryDark text-white dark:text-neutral-900"
                          : "text-gray-900 dark:text-white"
                      }`
                    }
                    value={option}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`text-mb ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {translate(option.name)}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-900"></span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                )
            )}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default ProjectsFilter;
