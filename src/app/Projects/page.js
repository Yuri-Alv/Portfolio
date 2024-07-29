import React from "react";
import ProjectCard from "../../components/structure/ProjectCard/ProjectCardComponent.jsx";
import TitleCard from "@/components/structure/TitleCard/TitleCard.jsx";

export default function Projects() {
  const projects = [
    {
      logo: "/ensignlogo.png",
      name: "Portfolio",
      content:
        "This portfolio serves as a comprehensive showcase of my work and development as a software engineer.",
      link: "https://yuri-alv.github.io/portfolio/About",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <TitleCard
        title="Projects: A Journey of Development"
        paragraphs={[
          "Welcome to my Projects page! Here, you'll find a curated selection of my work, showcasing the diverse range of skills and creativity I bring to software development. Each project represents a step in my journey to turn complex challenges into innovative solutions. I invite you to explore my portfolio and see how my passion for technology translates into impactful results.",
        ]}
      />
      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
