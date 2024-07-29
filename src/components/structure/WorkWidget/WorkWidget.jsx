import Workcard from "../WorkCard/WorkCard";
// Components imports
import WorkComponent from "@/components/ui/icons/work";
import EmailComponent from "@/components/ui/icons/email";
import Image from "next/image";

const WorkWidget = () => {
  const workExperience = [
    {
      company: "Excel",
      title: "Excel Associate",
      yearStart: "2024",
      image: "/excel.png",
    },

    {
      company: "Hybrid Server administration",
      title: "Hybrid Server Pro| Core",
      yearStart: "2024",
      image: "/hybrid-server.png",
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6">
      <div>
        <div className="flex items-center gap-3">
          <WorkComponent />
          <h2 className="font-bold text-zinc-900 dark:text-zinc-100">
            Certifications
          </h2>
        </div>
        <div className="pt-2 text-sm dark:text-zinc-400">
          Here are my certifications that I achieved in college.
        </div>
      </div>
      <div className="flex w-full flex-col gap-4 pt-6">
        {workExperience.map((company, key) => {
          return (
            <Workcard
              key={key}
              image={company.image}
              company={company.company}
              title={company.title}
              yearStart={company.yearStart}
              yearEnd={company.yearEnd}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkWidget;
