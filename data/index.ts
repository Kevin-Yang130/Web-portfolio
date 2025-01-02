export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience"},
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Currently training ML models to predict the number of applications on LinkedIn job postings.",
    description: "The Inside Scoop",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/curr1.png",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
    {
        id: 2,
        title: "",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
  {
    id: 4,
    title: "\"If at first you don’t succeed, call it version 1.0.\"",
    description: " - Anonymous",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Developer Buzz: What Friends and Peers Are Saying",
    description: "",
    className: "hidden md:block md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];



export const projects = [
  {
    id: 1,
     title: "ML Predictor for LinkedIn Job Posting Applications",
    des: "Ever wonder what makes a LinkedIn Job posting viral? This project leverages machine learning to analyze attributes like job title, industry, location, and more, it predicts application trends and provides actionable insights for recruiters to optimize their postings",
    img: "/test5.png",
    iconLists: ["/py.png", "/pandas.png", "/numpy.png", "/sklearn.png", "/co.png"],
    link: "https://github.com/Kevin-Yang130/ML-LinkedIn-Applications-Predictor/tree/main",
  },
  {
    id: 2,
    title: "[Comming soon] Data pipeline Insights Dashboard with AWS",
    des: " Built a scalable data pipeline and interactive dashboard using AWS services to analyze LinkedIn job posting data, uncovering key insights into application trends and job market dynamics.",
    img: "/aws.png",
    iconLists: ["/py.png", "/aws-lambda.svg", "/s3.png" , "/athene.png", "DynamoDB.png"],
    link: "https://github.com/Kevin-Yang130",
  },
  {
    id: 3,
    title: "BreadBot - Your Tech Internship Companion",
    des: "BreadBot is a Discord bot designed to assist individuals in finding and preparing for tech internships, offering curated internship listings and resources to enhance their career readiness.",
    img: "/p4.png",
    iconLists: ["/py.png", "/replit.png"],
    link: "https://devpost.com/software/breadbot-internship-bot",
  },
  {
    id: 4,
    title: "Taskly - To Do List App",
    des: "Welcome to Taskly, a simple and intuitive to-do list app built with Swift to help you stay organized and productive. With Taskly, you can easily manage tasks, set priorities, and track your progress—all in one place!",
    img: "/todo.png",
    iconLists: ["/swift.png", "/xcode.png", "/firebase.png"],
    link: "https://github.com/Kevin-Yang130/To-Do-List",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer Intern @ UKG",
    desc: "Built a Grafana dashboard to automate client data monitoring across microservices, saving $18,000 annually. Developed an API endpoint with Kotlin that validates credentials to improve error transparency.",  
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "C++ Teaching Assistant @ University of Florida",
    desc: "Earned 96% 'Outstanding Performance' reviews. Guided 27 students in mastering software design while supporting over 670 students through grading, office hours, and curriculum improvements.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "G-SWEP @ Google",
    desc: "Got a taste of Facebook Coding Competitions (Meta Hacker Cup 2016) and enjoyed tackling exciting problems alongside a Senior SWE @ Google.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "L'SPACE Research @ NASA",
    desc: "Implemented more efficient and cost-effective equipment used for managing data, communication, and information systems on the orbiter. This resulted in a 17% cost reduction in equipment.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Kevin-Yang130"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/kevin-yang-li/"
  },
];  