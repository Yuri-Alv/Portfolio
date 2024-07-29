import TitleCard from "@/components/structure/TitleCard/TitleCard";
import Image from "next/image";
import Link from "next/link";

// Icons
import Linkedin from "@/components/ui/icons/linkedin";
import Github from "@/components/ui/icons/github";
import EmailComponent from "@/components/ui/icons/email";

export default function About() {
  const socials = [
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

  return (
    <div className="row-auto flex flex-col justify-center gap-4 xl:grid xl:grid-cols-2 xl:gap-6 xl:gap-x-16">
      <div className="order-2 col-start-1 row-span-3 xl:order-1">
        <TitleCard
          profile={false}
          title="Behind the Code: My Story."
          paragraphs={[
            "I was born in São Paulo, Brazil, on September 23, 2004. Growing up in a city known for its tall buildings, fast-paced life, and thriving industries, I was exposed to a dynamic environment that shaped my career and personal development. São Paulo is one of the world's largest cities, and living there provided me with various opportunities to explore different fields and interests. From an early age, I was fascinated by technology and how it influences our daily lives. This curiosity led me to discover programming when I was 13, and I took my first course, diving into the world of software development. The ability to turn ideas into reality through coding captivated me, and I knew then that this was the career path I wanted to pursue. My early experiences in São Paulo gave me a unique perspective on the impact of technology and the endless possibilities it offers.",
            "After finishing high school, I was determined to broaden my horizons and gain exposure to global technological advancements. I believed that studying abroad would provide me with the best opportunities to learn from leading experts and immerse myself in cutting-edge technologies. This led me to Ensign College, where I am currently a freshman, studying software engineering. My journey at Ensign College has been both challenging and rewarding, as I continuously seek to expand my knowledge and skills in various programming languages and technologies. I've been actively participating in workshops, hackathons, and study groups, which have helped me gain practical experience and connect with like-minded peers. My goal is to become a versatile software engineer, capable of adapting to new technologies and solving complex problems. I am committed to making the most of my time at Ensign College and laying a strong foundation for my future career.",
            "At 19, I am at the beginning of my career journey, but I am ambitious and eager to grow both personally and professionally. I aspire to work on innovative projects that challenge me and push the boundaries of what is possible with technology. In addition to my academic pursuits, I am passionate about contributing to open-source projects and collaborating with others in the tech community. I plan to obtain industry-recognized certifications to validate my skills and demonstrate my commitment to continuous learning. I also enjoy attending tech conferences and meetups, where I can learn from experts and network with other professionals. My long-term goal is to pursue advanced studies and specialize in areas such as artificial intelligence, data science, or cybersecurity. I am dedicated to developing a career that not only fulfills me professionally but also allows me to make a positive impact on the world through technology.",
          ]}
        />
      </div>
      <div className="order-1 flex h-fit justify-center bg-teal-500 lg:col-start-2 lg:row-start-1 lg:bg-transparent xl:order-3 xl:justify-start">
        <Image
          src="/Sao-Paulo.png"
          alt="Origin"
          width={700}
          height={700}
          className="size-[464px] h-[452px] object-cover object-center 2xl:h-max 2xl:w-max"
        />
      </div>
      <div className="order-3 flex flex-col justify-around gap-1 p-1 text-zinc-800 dark:text-zinc-300 lg:order-4 lg:col-start-2 lg:row-start-2">
        {socials.map((social, key) => {
          return (
            <div key={key} className="flex ">
              <Link
                href={social.url}
                target="_blank"
                className="flex items-center gap-2 py-2"
              >
                {social.icon}
                <p className="">Follow me on {social.name}</p>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="order-4 flex w-fit border-t border-zinc-100 px-1 py-8 text-zinc-800 dark:border-zinc-600 dark:text-zinc-300 lg:order-4 lg:col-start-2 lg:row-start-3">
        <Link
          href="mailto:yalves183@gmail.com"
          className="flex items-center gap-2 px-2 "
          target="_blank"
        >
          <EmailComponent />
          <p>yalves183@gmail.com</p>
        </Link>
      </div>
    </div>
  );
}
