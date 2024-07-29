import React from "react";
import UsesSection from "../../components/structure/Uses Card/UsesSection";
import TitleCard from "@/components/structure/TitleCard/TitleCard";

const Page = () => {
  const items = [
    {
      groupName: "WorkStation",
      items: [
        {
          title: "IdeaPad 5i",
          description:
            "The IdeaPad 5i keeps me efficient whether I'm at my desk or on the go. With its powerful performance and high-resolution display, it helps me tackle development tasks and design work seamlessly, no matter where I am.",
        },
      ],
    },
    {
      groupName: "Development Tools",
      items: [
        {
          title: "Vscode with WSL",
          description:
            "Using VSCode with WSL, I can code effortlessly in a Linux environment while still working from Windows. This setup ensures smooth development workflows, making it easy to manage projects, debug code, and run various tools directly from my IDE.",
        },
        {
          title: "GitHub Desktop",
          description:
            "GitHub Desktop integrates seamlessly with my workflow, providing a straightforward way to manage repositories and version control. It simplifies committing changes, branching, and merging, so I can focus on coding rather than Git commands.",
        },
      ],
    },
    {
      groupName: "Design",
      items: [
        {
          title: "Whimsical",
          description:
            "Whimsical is an intuitive tool that excels at creating both low-fidelity and high-fidelity wireframes. Its easy-to-use interface allows me to quickly sketch out ideas and refine them into detailed designs.",
        },
        {
          title: "Figma",
          description:
            "Figma lets me design and prototype with ease, whether I’m at my desk or collaborating remotely. Its real-time collaboration features ensure that I can work on UI/UX designs and share updates instantly with my team, keeping everyone aligned.",
        },
      ],
    },
    {
      groupName: "Productivity",
      items: [
        {
          title: "Notion",
          description:
            "Notion keeps my projects and tasks organized, syncing across all my devices. Whether I’m working on a detailed project plan or jotting down quick notes, I can stay productive and keep track of everything no matter where I am.",
        },
        {
          title: "Google calendar",
          description:
            "Connected with both my phone and computer the google calendar permits me to stay on top of deadlines independly if I am on my computer or away at a park.",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6 lg:w-full lg:max-w-3xl">
        {" "}
        <TitleCard
          title={"Setup I use, gadgets I love, and other things I recommend."}
          paragraphs={[
            "Welcome to the section where I share the tools and gadgets that play a significant role in my daily workflow. In this page, you'll find a curated list of software and hardware that I rely on to enhance my productivity and overall efficiency. From essential development tools and design software to the my setup that I work on everyday, I believe these recommendations offer valuable insights into how I achieve my best work.",
          ]}
        />
      </div>

      <UsesSection className="mt-6" items={items} />
    </div>
  );
};

export default Page;
