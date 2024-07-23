import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Completed education",
        location: "Pune, India",
        description:
            "Commenced my professional journey by securing intership. After couple of months employed in the same organization as a Web developer.",
        icon: React.createElement(LuGraduationCap),
        date: "2019",
    },
    {
        title: "Front-End Developer",
        location: "Pune, India",
        description:
            "Absorbed new technologies and tools, worked on different projects and domains. Which assisted me in staying up to date with the latest trends and advancements in the field.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2024",
    },
    {
        title: "React Developer",
        location: "Pune, India",
        description:
            "At the moment, I'm performing a React Developer role for a Globant. My stack includes React, Next.js, TypeScript, Bootstrap and Node.js. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2024 - Present",
    },
] as const;

export const projectsData = [
    {
        title: "Netflix Clone",
        description:
            "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
        tags: ["React", "Redux", "Axios", "Stripe", "Firebase"],
        imageUrl: corpcommentImg,
    },
    {
        title: "Audiophile",
        description:
            "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
        tags: ["React", "Next", "TypeScript", "Context API"],
        imageUrl: rmtdevImg,
    },
    {
        title: "React Dashboard",
        description:
            "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
        tags: ["React", "Next.js"],
        imageUrl: wordanalyticsImg,
    },
] as const;

export const skillsData = [
    "React",
    "Angular",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Redux",
    "ES6",
    "HTML5",
    "SCSS",
    "Bootstrap",
    "Figma",
    "Git/Bitbucket",
    "VS Code"
] as const;