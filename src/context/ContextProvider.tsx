import { ProjectsProvider } from "./ProjectsContext";
import { ThemeContextProvider } from "./ThemeContext";
import { LanguageProvider } from "./LanguageContext";

export const ContextProvider = ({ children }: any) => {
  return (
    <LanguageProvider>
      <ThemeContextProvider>
        <ProjectsProvider>{children}</ProjectsProvider>
      </ThemeContextProvider>
    </LanguageProvider>
  );
};
