import React from "react";
import { colorSchemeProps } from "@/shared/Interfaces";
import SlidingList from "@/shared/SlidingList";

const Experience: React.FC<colorSchemeProps> = ({ currentColorScheme }) => {
  const experiences = [
    {
      id: 1,
      name: "Yapı Kredi Teknoloji - Software Engineer",
      date: "Sep 2022 - Current",
      technologies:
        "Java 17, React JS, Spring Boot, Microservices, TDD, Maven, SDLC, Git, Queue Technologies (RabbitMQ, ActiveMQ), Sonarlint, Oracle DB",
      description: [],
    },
    {
      id: 2,
      name: "FruPro - Data Scientist Intern",
      date: "Mar 2022 - Jun 2022",
      description: [
        "Examined databses such as MongoDB, Google Big Query, and Rockset.",
        "By orchestrating connections and building visualisations with Power BI and Apache Superset, data flowed seamlessly in accurate formats.",
      ],
    },
    {
      id: 3,
      name: "HAVELSAN - Software Engineer Intern",
      date: "Aug 2021",
      description: [
        "Created protocol dissector in Wireshark using the Lua and C++ languages for the ARINC 429 protocol.",
        "Gained knowledge about data transfer standards for aircraft avionics.",
      ],
    },
  ];

  return (
    <SlidingList
      list={experiences}
      section="experience"
      currentColorScheme={currentColorScheme}
    />
  );
};

export default Experience;
