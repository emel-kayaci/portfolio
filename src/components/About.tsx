import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import ProfilePicture from "@/assets/profile-picture.jpg";
import ContactIcon from "@/shared/ContactIcon";
import { colorSchemeProps } from "@/shared/Interfaces";

const About: React.FC<colorSchemeProps> = ({ currentColorScheme }) => {
  return (
    <section
      id="about"
      className={`flex min-h-screen items-center justify-center py-16 ${
        currentColorScheme === "dark"
          ? "bg-dark-secondary"
          : "bg-light-secondary"
      }`}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className={`mx-auto h-48 w-48 overflow-hidden rounded-full border-4 ${
              currentColorScheme === "dark"
                ? "border-dark-opposite"
                : "border-light-opposite"
            }`}
          >
            <img
              className="h-full w-full object-cover object-center"
              src={ProfilePicture}
              alt="profile"
            />
          </div>
          <h2
            className={`mt-4 text-3xl font-semibold ${
              currentColorScheme === "dark"
                ? "text-dark-opposite"
                : "text-light-opposite"
            }`}
          >
            Emel Kayacı
          </h2>
          <p
            className={`mt-2 ${
              currentColorScheme === "dark"
                ? "text-dark-oDark"
                : "text-light-oLight"
            }`}
          >
            Software Developer
          </p>
          <p
            className={`mt-4 ${
              currentColorScheme === "dark"
                ? "text-dark-opposite"
                : "text-light-opposite"
            }`}
          >
            Dedicated to continuous learning, innovation and producing clean,
            maintainable code for optimal software performance and reliability.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <ContactIcon
              currentColorScheme={currentColorScheme}
              href="https://github.com/emel-kayaci"
              Icon={FaGithub}
            />
            <ContactIcon
              currentColorScheme={currentColorScheme}
              href="https://www.linkedin.com/in/emel-kayaci/"
              Icon={FaLinkedin}
            />
            <ContactIcon
              currentColorScheme={currentColorScheme}
              href="mailto:kayaciemel18@gmail.com"
              Icon={FaEnvelope}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
