import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  amazon,
  spotify,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  smtube,
  pharmecy,
  adminPanel,
  figma,
  docker,
  meta,
  firebase,
  starbucks,
  tesla,
  shopify,
  cofynd,
  spacite,
  carrent,
  jobit,
  tripguide,
  threejs,
  wordcounter,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Javascript Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: firebase,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  ,
  {
    title: "Web Developer",
    company_name: "Cofynd",
    icon: cofynd,
    iconBg: "#383E56",
    date: "February 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "Spacite",
    description:
      "Spacite office space platform, allows users to search and book Coworking spaces and Virtual offices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node js",
        color: "green-text-gradient",
      },
      {
        name: "mongo db",
        color: "pink-text-gradient",
      },
    ],
    image: spacite,
    website_url: "https://spacite.com/",
    source_code_link: "#",
  },
  {
    name: "Youtube Clone",
    description:
      "Web-based platform that allows users to search, videos from various categories, providing a convenient and efficient experience to user.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapid api",
        color: "green-text-gradient",
      },
      {
        name: "materialUi",
        color: "pink-text-gradient",
      },
    ],
    image: smtube,
    website_url: "https://smtube.netlify.app/",
    source_code_link: "https://github.com/shivammaheshwari5/youtube-code",
  },
  {
    name: "Admin Dashboard",
    description:
      "Admin dashboard that allows to add the product and delete the product which user can use for their website for changes in proucts",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "chart.js",
        color: "pink-text-gradient",
      },
    ],
    image: adminPanel,
    website_url: "https://shivammaheshwari5.github.io/React-Final-Project/",
    source_code_link:
      "https://github.com/shivammaheshwari5/admin-dashboard-code",
  },
  {
    name: "Pharmecy",
    description:
      "A Pharmecy app which is use for listing the medical products and user can filter the product by specific properties and by expire date and products stock.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: pharmecy,
    website_url: "https://shivammaheshwari5.github.io/react-project/",
    source_code_link: "https://github.com/shivammaheshwari5/pharmecy-code",
  },
  {
    name: "Amazon Clone",
    description:
      "Amazon clone is a web app like amazon here user can register, login and select the product and can buy the products by doing payment through stripe.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: amazon,
    website_url: "https://clone-ed503.web.app/",
    source_code_link: "https://github.com/shivammaheshwari5/amazonclone",
  },
  {
    name: "Spotify",
    description:
      "A Spotify app for listening the music basically it is a clone of spitify app.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: spotify,
    website_url: "https://shivammaheshwari5.github.io/Spotify-clone/",
    source_code_link: "https://github.com/shivammaheshwari5/spotify-code",
  },
  {
    name: "Word Counter",
    description:
      "Word counter can be used for counting, triming, clear and copy the words",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: wordcounter,
    website_url: "https://shivammaheshwari5.github.io/word-counter/",
    source_code_link:
      "https://github.com/shivammaheshwari5/word-counter/blob/main/README.md",
  },
];

export { services, technologies, experiences, projects };
