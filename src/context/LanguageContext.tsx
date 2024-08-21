import React, { createContext, ReactElement, useState } from "react";

export type Language = "en" | "pt";

interface LanguageContextProps {
  children: ReactElement;
}

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
};

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
});

export const LanguageProvider: React.FC<LanguageContextProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");
  console.log(language);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
