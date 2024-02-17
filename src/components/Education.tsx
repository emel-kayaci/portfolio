import React from "react";
import { colorSchemeProps } from "@/shared/Interfaces";
import SlidingList from "@/shared/SlidingList";

const Education: React.FC<colorSchemeProps> = ({ currentColorScheme }) => {
  const education = [
    {
      id: 1,
      name: "Ege University (BSc Computer Science)",
      date: "2018 - 2022",
      description: [
        "GPA: 3.84/4.00",
        "Graduated with high honors, ranked among the top students.",
      ],
    },
  ];

  return (
    <SlidingList
      list={education}
      section="education"
      currentColorScheme={currentColorScheme}
    />
  );
};

export default Education;
