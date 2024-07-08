"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs,SiRedux,SiTypescript,SiSass,SiJquery } from "react-icons/si";


// experience data
const experince = {
  icon: "",
  title: "My experience",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum distinctio nesciunt labore debitis? Modi culpa beatae est repellat eveniet possimus!",
  items: [
    {
      company: "SoftWhere Company.",
      position: "Frontend Developer",
      duration: "2023.05.01 - 2024.05.05",
    },
    {
      company: "National Bank Of Uzbekistan",
      position: "Frontend Developer",
      duration: "2024.05.05 - Present",
    },
  
  ],
};
// education data
const education = {
  icon: "",
  title: "My Education",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum odit fuga ea impedit recusandae, officia labore omnis non quod! Autem!",
  items: [
    {
      institution: "Bukhara Institute of Engineering Technology",
      degree: "Engineer-Programmer",
      duration: "2016 - 2020",
    },
    {
      institution: "Rise Academy center of modern languages",
      degree: "English language Course",
      duration: "2021 - 2022",
    },
    {
      institution: "SoffStudy modern vocational training center",
      degree: "Frontend Programming Cource",
      duration: "2022 - 2023",
    },
  ],
};
// skills data
const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sint eligendi asperiores dolores ipsam maiores obcaecati dolore velit, quas tempora!",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <SiRedux />,
      name: "redux",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <SiSass />,
      name: "sass",
    },
    {
      icon: <SiJquery />,
      name: "jquery",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};
// about data
const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ea modi ad libero illum veniam delectus in iste earum magni.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ogabek Otakhonov",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+998) 94 125 99 77",
    },
    {
      fieldName: "Experience",
      fieldValue: "2 years",
    },
    {
      fieldName: "Skype",
      fieldValue: "ogabek.2102",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Uzbek",
    },
    {
      fieldName: "Email",
      fieldValue: "otaxonovo22222@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English,Uzbek",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px] "
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 ">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full ">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold ">{experince.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experince.description}
                </p>
                <ScrollArea className="h-[400px] ">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experince.items.map((item,index) => {
                    return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 ">
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                      <div className="flex items-center gap-3 ">
                        {/* dot */}
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/60 ">{item.company}</p>
                      </div>
                    </li>
                  })}
                </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold ">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px] ">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item,index) => {
                    return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 ">
                      <span className="text-accent">{item.degree}</span>
                      <h3 className="text-xl max-w-[270px] min-h-[50px] text-center lg:text-left">{item.duration}</h3>
                      <div className="flex items-center gap-3 ">
                        {/* dot */}
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/60 ">{item.institution}</p>
                      </div>
                    </li>
                  })}
                </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold ">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">{skills.description}</p>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">
                    {skills.skillList.map((skill,index) => {
                      return <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    })}
                  </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] ">
                <h3 className="text-4xl font-bold ">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">{about.description}</p>
                <ul className="grid grid-cols-1 ">
                  {about.info.map((item,index) => {
                    return <li key={index} >
                      <span>{item.fieldName}</span>
                      <span>{item.fieldValue}</span>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
