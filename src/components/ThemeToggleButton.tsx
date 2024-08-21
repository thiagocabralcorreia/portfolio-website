import { Moon, SunDim } from "phosphor-react";
import { useTheme } from "../context/ThemeContext";

interface ThemeToggleButtonProps {
  iconSize?: number;
  extraStyle?: string;
}

export function ThemeToggleButton({
  iconSize = 28,
  extraStyle,
}: ThemeToggleButtonProps) {
  const { theme, setTheme } = useTheme();

  function handleToggleTheme() {
    //reverse the theme value every time that "handleToggleTheme" is called
    setTheme(!theme);
  }

  return (
    <div className={`content-center my-auto header-link ${extraStyle}`}>
      {theme ? (
        <Moon
          size={iconSize}
          className="cursor-pointer"
          onClick={handleToggleTheme}
        />
      ) : (
        <SunDim
          size={iconSize}
          className="cursor-pointer"
          onClick={handleToggleTheme}
        />
      )}
    </div>
  );
}
