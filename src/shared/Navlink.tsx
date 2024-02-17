import React from "react";
// @ts-ignore
import { Link } from "react-scroll";
import { darkThemeNavbarButton, lightThemeNavbarButton } from "@/design/Colors";
interface NavLinkProps {
  currentColorScheme: string;
  section: string;
}

const Navlink: React.FC<NavLinkProps> = ({ currentColorScheme, section }) => {
  return (
    <Link
      to={section}
      smooth={true}
      duration={500}
      className={
        currentColorScheme === "dark"
          ? darkThemeNavbarButton
          : lightThemeNavbarButton
      }
    >
      {section.charAt(0).toUpperCase() + section.slice(1)}
    </Link>
  );
};

export default Navlink;
