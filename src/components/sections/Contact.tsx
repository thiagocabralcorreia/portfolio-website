import { motion } from "framer-motion";
import ContactForm from "../contact/ContactForm";
import ContactInfo from "../contact/ContactInfo";

const Contact = () => {
  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
        delay: 0.1,
      }}
      className="max-width flex max-lg:flex-col m-auto py-20 px-4 sm:px-6 lg:px-8"
    >
      <ContactInfo />
      <ContactForm />
    </motion.div>
  );
};

export default Contact;
