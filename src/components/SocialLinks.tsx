import { motion } from "framer-motion";
import { links, LinkSchema } from "../data/socialLinks";

const SocialLinks = () => {
  return (
    <motion.div
      initial={{ x: -180 }}
      animate={{ x: 0 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="absolute hidden md:flex flex-col top-[60%] lg:top-[45%] left-0"
    >
      <ul>
        {links.map(({ id, child, href }: LinkSchema) => (
          <li
            key={id}
            className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-20px]
            duration-300 bg-secondaryBackground dark:bg-secondaryDarkBackground"
          >
            <a
              href={href}
              className="flex justify-between items-center w-full dark:text-white text-black"
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SocialLinks;
