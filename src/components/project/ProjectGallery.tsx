import { motion } from "framer-motion";
import { ProjectDetailsSchema, ProjectImage } from "../../data/projectDetails";

interface ProjectGalleryProps {
  project?: ProjectDetailsSchema;
}

const ProjectGallery = ({ project }: ProjectGalleryProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
      {project?.images.map((image: ProjectImage) => {
        return (
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
            className="mb-10 sm:mb-0"
            key={image.id}
          >
            <img
              src={image.src}
              className="shadow-md shadow-neutral-200 dark:shadow-neutral-800"
              alt={image.alt}
              key={image.id}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProjectGallery;
