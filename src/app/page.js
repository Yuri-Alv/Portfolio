import TitleCard from "@/components/structure/TitleCard/TitleCard";
import SignupWidget from "@/components/structure/Signup/SignupWidget";
import ArticleCard from "@/components/structure/ArticleCard/ArticleCard";
import WorkWidget from "@/components/structure/WorkWidget/WorkWidget";
import SkillsWidget from "@/components/structure/SkillsWidget/SkillsWidget";

//Icons
import Linkedin from "@/components/ui/icons/linkedin";
import Github from "@/components/ui/icons/github";
import Link from "next/link";

export default function Home() {
  const links = [
    {
      name: "GitHub",
      url: "https://github.com/Yuri-Alv",
      icon: <Github />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/yuri-valentim-1a40602a0/",
      icon: <Linkedin />,
    },
  ];

  const articles = [
    {
      date: "2022",
      title: "Gold medal in the Brazillian Astronomy Olympiad",
      content:
        "In 2022, I achieved a gold medal in the Brazilian Astronomy Olympiad, a prestigious national competition that tests students' knowledge and understanding of astronomy and related sciences.",
    },
    {
      date: "Mar. 25, 2021",
      title: "Participation on the Brazillian Science Olympiad",
      content:
        "In 2021, I participated in the Brazilian Science Olympiad, a national competition that challenges students in various scientific disciplines, including biology, chemistry, physics, and earth sciences.",
    },
  ];

  return (
    <div className="flex h-full flex-col gap-6">
      <div className="flex flex-col gap-6 lg:w-full lg:max-w-3xl">
        <TitleCard
          profile={true}
          title={"Yuri Valentim -Software Engineer and Problem Solver"}
          paragraphs={[
            "Welcome to my portfolio! I'm Yuri Valentim, a passionate software engineer dedicated to being a problem solver. I work with the intention to learn and develop my skills and myself always delivering. I love to tackle complex challenges and turning ideas into reality. Learn more about my journey, skills, and projects as I continue to improve and push the limits of technology.",
          ]}
        />
        <div className="flex gap-3">
          {links.map((link, key) => {
            return (
              <Link key={key} href={link.url} target="_blank">
                {link.icon}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="flex w-fit flex-col gap-10 py-8 lg:w-full lg:max-w-lg">
          {articles.map((article, key) => {
            return (
              <ArticleCard
                key={key}
                date={article.date}
                title={article.title}
                content={article.content}
              />
            );
          })}
        </div>
        <div className="flex flex-col gap-10 py-8 lg:w-full lg:max-w-sm">
          <SignupWidget
            title="Stay up to date"
            content="Get notified when I publish something new, and unsubscribe at any time."
          />
          <WorkWidget />
          <SkillsWidget />
        </div>
      </div>
    </div>
  );
}
