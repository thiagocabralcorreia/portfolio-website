import { useContext } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { LanguageContext } from "../../context/LanguageContext";
import { enContactData, ptContactData } from "../../data/contact";
import Hyperlink from "../Hyperlink";

const ContactInfo = () => {
  const { language } = useContext(LanguageContext);
  const contactData = language === "en" ? enContactData : ptContactData;

  return (
    <div className="w-full lg:w-1/2 lg:mr-24">
      <div className="text-left max-lg:text-center">
        <h1 className="section-title">{contactData.hello}</h1>
        <p className="section-text">{contactData.if}</p>
        <p className="section-text">
          {contactData.iAm}{" "}
          <span className="text-primary dark:text-primaryDark">
            {contactData.always}
          </span>
          , {contactData.sharing}
        </p>

        <div className="flex justify-center text-lg lg:block w-52 mt-10 max-lg:mb-20 max-lg:m-auto">
          <Hyperlink
            aria-label="WhasApp"
            href="https://wa.me/5585986206343"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="mr-2 w-5 h-5 duration-100"></FaWhatsapp>
            <span>{contactData.chat}</span>
          </Hyperlink>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
