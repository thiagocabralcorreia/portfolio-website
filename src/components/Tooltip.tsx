import React from "react";

interface TooltipProps {
  children: React.ReactNode;
  text: string;
  customStyle?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, text, customStyle }) => {
  return (
    <div className="relative group justify-center content-center m-auto">
      {children}
      <span
        className={`absolute scale-0 p-2 text-xs dark:text-white text-black
        bg-tertiaryBackground dark:bg-tertiaryDarkBackground 
        group-hover:scale-100 text-center ${customStyle}`}
      >
        {text}
      </span>
    </div>
  );
};

export default Tooltip;
