import { motion } from "framer-motion";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="text-lg py-2.5 sm:py-3 px-6 shadow-lg duration-500 dark:hover:border-2 border-2 border-primary
      hover:border-primary dark:border-2 dark:border-primaryDark dark:hover:border-primaryDark bg-primary dark:bg-primaryDark
      hover:bg-white text-white dark:text-neutral-900 hover:text-primary dark:hover:text-primaryDark dark:hover:bg-primaryDarkBackground"
    >
      <div className="flex justify-center items-center m-auto">{children}</div>
    </motion.button>
  );
};

export default Button;
