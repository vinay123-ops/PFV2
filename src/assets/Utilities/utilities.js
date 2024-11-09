import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
  } from "react-icons/ai";

const logotext = "VK";

const navItems = [
    { id: 1, title: "Home", href: "#home", icon: AiOutlineHome },
    { id: 2, title: "About", href: "#about", icon: AiOutlineUser },
    { id: 3, title: "Coming-Soon", href: "#projects", icon: AiOutlineFundProjectionScreen },
];

const resume = "https://drive.google.com/uc?export=download&id= Add the ID"


const meta = {
    title: "John Doe",
    description: "I’m John Doe data scientist _ Full stack devloper,currently working in Berlin",
};


const dataabout = {
    title: "A bit about myself",
    aboutme: "Hello! I'm Vinay, a dynamic individual with a strong foundation in physical science(Physics and Mathmatics) and a zest for exploring diverse interests. Also, my academic journey has equipped me with analytical thinking and a problem-solving mindset. Beyond academics, being in the volunatary servies such as NCC has blessed me with discipline, leadership, and a commitment to service. I am also passionate about languages and can communicate in Mandarin and Persian, enhancing my ability to connect with people from different cultures.",
};


//Edit the work-timeline
const worktimeline = [{
    jobtitle: "Designer of week",
    where: "YAdfi",
    date: "2020",
},
{
    jobtitle: "Designer of week",
    where: "Jamalya",
    date: "2019",
},
{
    jobtitle: "Designer of week",
    where: "ALquds",
    date: "2019",
},
];

const skills = [{
    name: "Python",
    value: 50,
},
{
    name: "Djano",
    value: 85,
},
{
    name: "Javascript",
    value: 80,
},
{
    name: "React",
    value: 60,
},
{
    name: "Jquery",
    value: 85,
},
];

const services = [{
    title: "UI & UX Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
},
{
    title: "Mobile Apps",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
},
{
    title: "Wordpress Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
},
];

export {
    meta,
    dataabout,
    skills,
    logotext,
    services,
    navItems,
    worktimeline,
    resume
};