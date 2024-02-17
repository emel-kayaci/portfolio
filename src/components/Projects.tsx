import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import thesis from "@/assets/thesis-gif.gif";
import guide from "@/assets/guide.png";
import flashcard from "@/assets/flashcard.gif";
import database from "@/assets/database-image.png";

import { colorSchemeProps } from "@/shared/Interfaces";

const Projects: React.FC<colorSchemeProps> = ({ currentColorScheme }) => {
  const projects = [
    {
      id: 1,
      name: "Natural Language Processing Aided Digital Twin Design in the Field of Medicine",
      imageSrc: thesis,
      description: `Deep learning-based system has been developed that provides an animated visual containing a real face and 
      transfers the trained feedback from the doctor's sentences with facial expressions, lip movements, etc voice.
      Won the 1st place in the education category in the GBYF 2022 Undergraduate Students' Graduation Projects Exhibition between 12 universities in the Aegean region.`,
      githubLink: "https://github.com/emel-kayaci/bot-with-facial-animation",
      demoLink: "",
    },
    {
      id: 2,
      name: "Flashcard Maker",
      imageSrc: flashcard,
      description:
        "A flashcard maker mini app that allows users to upload flashcard data from an Excel file and practice with interactive flip cards.",
      githubLink: "https://github.com/emel-kayaci/flashcard-maker",
      demoLink: "https://flashcard-maker.vercel.app/",
    },
    {
      id: 3,
      name: "CheatSheets",
      imageSrc: guide,
      description:
        "Creating comprehensive quick reference guides spanning Git workflows, Java testing, and software development essentials.",
      githubLink: "https://github.com/emel-kayaci/cheatsheets",
      demoLink: "",
    },
    {
      id: 4,
      name: "Airline Database Prototype",
      imageSrc: database,
      description: `Starting with ER/EER diagrams of the proposed domain, a database prototype was designed and implemented with a passenger reward system. 
        A relational database including airport management and user segmentation was developed using MYSQL. Additionally, an interface was designed using Rest API technology.`,
      githubLink:
        "https://github.com/emel-kayaci/uni-projects/tree/main/Third%20Grade/AirlineDB",
      demoLink: "",
    },
  ];

  return (
    <section
      id="projects"
      className={`py-32 ${
        currentColorScheme === "dark"
          ? "bg-dark-secondary"
          : "bg-light-secondary"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          className={`flex items-center justify-center text-3xl font-semibold ${
            currentColorScheme === "dark"
              ? "text-dark-opposite"
              : "text-light-opposite"
          }`}
        >
          Projects
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`rounded-lg p-4 shadow-md ${
                currentColorScheme === "dark"
                  ? "bg-dark-oDark"
                  : "bg-light-sDark"
              }`}
            >
              <div className="flex h-full flex-col">
                <div className="mb-4 flex items-center justify-center">
                  <img
                    src={project.imageSrc}
                    alt={project.name}
                    className="h-60 w-80 rounded-md object-cover"
                  />
                </div>
                <div className="flex flex-grow flex-col items-center justify-center">
                  <h3 className="mb-2 text-center text-lg font-semibold text-gray-800">
                    {project.name}
                  </h3>
                  <p className="mb-6 text-center text-gray-600">
                    {project.description}
                  </p>
                  <div className="mt-4 flex justify-center space-x-4 sm:mt-0">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center rounded-md bg-dark-primary px-4 py-2 text-white transition-colors duration-300 hover:bg-dark-pLight"
                      >
                        <FaGithub className="mr-1" />
                        GitHub
                      </a>
                    )}
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center rounded-md bg-dark-primary px-4 py-2 text-white transition-colors duration-300 hover:bg-dark-pLight"
                      >
                        <FaExternalLinkAlt className="mr-1" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
