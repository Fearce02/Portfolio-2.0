const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 200, suffix: "+", label: "Github Commits" },
  { value: 300, suffix: "+", label: "Hours Spent learning" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Full-Stack Proficiency",
    desc: "Skilled in both frontend and backend development, with hands-on experience in building and maintaining web applications.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communicator",
    desc: "Able to clearly communicate technical concepts, collaborate effectively with teammates, and ask the right questions when needed.",
  },
  {
    imgPath: "/images/time.png",
    title: "Continuous Learner",
    desc: "Driven by curiosity and committed to learning new technologies to stay updated and deliver better solutions.",
  },
];

const Skills = [
  {
    category: "Database, Cache & Queues",
    stack: [
      { name: "MySQL", icon: "/images/TechStacklogos/MySQL.png" },
      { name: "MongoDB", icon: "/images/TechStacklogos/MongoDB.png" },
      { name: "PostgreSQL", icon: "/images/TechStacklogos/PostgreSQL.png" },
      { name: "Redis", icon: "/images/TechStacklogos/redis.png" },
    ],
  },
  {
    category: "Frontend",
    stack: [
      { name: "React", icon: "/images/logos/react.png" },
      { name: "Tailwind CSS", icon: "/images/TechStacklogos/Tailwind.png" },
      { name: "Three.js", icon: "/images/logos/three.png" },
      { name: "HTML5", icon: "/images/TechStacklogos/HTML.png" },
      { name: "CSS3", icon: "/images/TechStacklogos/CSS.png" },
    ],
  },
  {
    category: "Backend",
    stack: [
      { name: "Node.js", icon: "/images/TechStacklogos/NodeJS.png" },
      { name: "Express.js", icon: "/images/TechStacklogos/ExpressJS.png" },
      { name: "FastAPI", icon: "/images/TechStacklogos/FastAPI.png" },
    ],
  },
  {
    category: "Cloud and DevOps",
    stack: [
      { name: "AWS", icon: "/images/TechStacklogos/AWS.png" },
      { name: "Docker", icon: "/images/TechStacklogos/Docker.png" },
      { name: "Kubernetes", icon: "/images/TechStacklogos/Kubernetes.png" },
      { name: "vercel", icon: "/images/TechStacklogos/Vercel.png" },
    ],
  },
  {
    category: "Programming Languages",
    stack: [
      { name: "Python", icon: "/images/TechStacklogos/Python.png" },
      { name: "JavaScript", icon: "/images/TechStacklogos/JS.png" },
      { name: "TypeScript", icon: "/images/TechStacklogos/TS.png" },
      { name: "C++", icon: "/images/TechStacklogos/C++.png" },
      { name: "C#", icon: "/images/TechStacklogos/Chash.png" },
    ],
  },
  {
    category: "Game Development",
    stack: [
      { name: "Unity", icon: "/images/TechStacklogos/Unity.png" },
      {
        name: "Unreal Engine",
        icon: "/images/TechStacklogos/UnrealEngine.png",
      },
    ],
  },
  {
    category: "VCS, Editor and Terminal",
    stack: [
      { name: "GitHub", icon: "/images/TechStacklogos/Github.png" },
      { name: "VSCode", icon: "/images/TechStacklogos/VSCODE.png" },
      { name: "Bash", icon: "/images/TechStacklogos/bash.png" },
      { name: "Postman", icon: "/images/TechStacklogos/Postman.png" },
    ],
  },
];

const techStackIcons = [
  {
    name: "ReactJS",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "NodeJS",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "ThreeJS",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Pranav consistently demonstrated a high level of quality and attention to detail in QA testing for AAA sports titles. His contributions improved game stability and the overall player experience.",
    imgPath: "/images/logos/EAlong.png",
    logoPath: "/images/logos/EAshort.png",
    title: "QA tester 2",
    date: "April 2022 - October 2023",
    responsibilities: [
      "Conducted functionality and stability testing for EA’s flagship sports games, including FIFA 23 and NHL series.",
      "Led stability testing efforts as the Point of Contact, mentoring new testers and creating onboarding resources.",
      "Collaborated with dev and design teams to troubleshoot crashes, analyze system behavior, and optimize game performance.",
      "Executed comprehensive test suites including regression, performance, and edge case testing.",
    ],
  },
  {
    review:
      "Pranav contributed to the successful online performance of F1 2021 through diligent testing and issue resolution. His work helped ensure a seamless multiplayer experience for players.",
    imgPath: "/images/logos/CMlong.png",
    logoPath: "/images/logos/CMshort.png",
    title: "QA tester 1",
    date: "September 2021 - January-2022",
    responsibilities: [
      "Specialized in online stability testing for F1 2021, preventing crashes, disconnections, and data loss in multiplayer.",
      "Monitored real-time gameplay sessions to detect performance issues and reported inconsistencies.",
      "Collaborated with backend and network engineers to address crash reports and enhance server reliability.",
    ],
  },
];

const socialImgs = [
  {
    name: "Github",
    url: "https://github.com/Fearce02",
    imgPath: "/images/TechStacklogos/GithubNew.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/pranavkumbhar02/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  socialImgs,
  techStackIcons,
  navLinks,
  Skills,
};
