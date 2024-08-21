import { ProjecSchema } from "../data/projects";

const ProjectCard = ({ title, category, image, onClick }: ProjecSchema) => {
  return (
    <div className="relative overflow-hidden">
      <div onClick={onClick} className="cursor-pointer mb-10 sm:mb-0">
        <div className="relative h-0" style={{ paddingTop: "56.25%" }}>
          <div
            className="absolute inset-0 bg-center bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url('${image}')`,
              transformOrigin: "center",
              transition: "transform 0.3s ease-in-out",
            }}
          ></div>
        </div>
        <div className="px-8 py-8 dark:bg-secondaryDarkBackground bg-secondaryBackground">
          <p className="text-lg dark:text-neutral-300 text-neutral-700 font-bold font-poppins">
            {title}
          </p>
          <span className="text-md dark:text-neutral-300 text-neutral-700">
            {category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
