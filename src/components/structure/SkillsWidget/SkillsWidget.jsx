import Lightning from "@/components/ui/icons/lightning";
import Skills from "./SkillsComponent";

// Skills Icons
import JavascriptComponent from "@/components/ui/icons/javascript";
import HtmlComponent from "@/components/ui/icons/html";
import CssComponent from "@/components/ui/icons/css";
import JavaComponent from "@/components/ui/icons/java";

const SkillsWidget = () => {
  const skills = [
    {
      name: "Java",
      icon: <JavaComponent />,
      progress: 100,
    },
    {
      name: "Javascript",
      icon: <JavascriptComponent />,
      progress: 70,
    },
    {
      name: "CSS",
      icon: <CssComponent />,
      progress: 100,
    },
    {
      name: "HTML",
      icon: <HtmlComponent />,
      progress: 90,
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between">
      <div className="rounded-2xl border border-zinc-100 p-6">
        <div className="flex items-center gap-3">
          <Lightning />
          <h2 className="font-bold text-zinc-900 dark:text-zinc-100">Skills</h2>
        </div>
        <p className="text-sm. mb-4 text-gray-600 dark:text-zinc-400">
          Take a look at my skills and my proficiency at various programming
          languages.
        </p>
        <div className="flex w-full flex-col gap-4 pt-6">
          {skills.map((skill, index) => (
            <Skills
              key={index}
              name={skill.name}
              icon={skill.icon}
              progress={skill.progress}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsWidget;
