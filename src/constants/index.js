import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  project9,
  project10,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "UX/UI Designer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Blockchain Developer",
    icon: mobile,
  },
  {
    title: "Content Creator",
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
  {
    name: "TypeScript",
    icon: typescript,
  },
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
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Code Capsules",
    icon: starbucks,
    iconBg: "#383E56",
    date: "September 2022 - October 2022",
    points: [
      "Developing a web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Deploying the web application with hosting.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "UX/UI Designer",
    company_name: "Polymorph Systems",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Jan 2023",
    points: [
      "Design the concept for the internal dashboard, using Figma .",
      "Collaborating with a cross-functional team including designers, product managers, and other developers to create high-quality products.",
      "Implementing the features needed to solve the company's problem.",
      "Identify the right type of technology and the steps to developing and executing an effective blockchain project ",
      "Participating in class reviews and providing constructive feedback to other team members.",
    ],
  },
  {
    title: "Blockchain Developer",
    company_name: "Brainnest",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2023 - Feb 2023",
    points: [
      " Identify the core concepts of Blockchain and get technical background on some of the biggest projects like HyperLedger, Factom and Ripple",
      "Created & Deployed solidity smart contract and interacted with them on the frontend ",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "UX/UI Designer",
    company_name: "Tilata",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Present",
    points: [
      "Ideating and creating dashboard designs for concept design.",
      "Collaborating with cross-functional teams including contributors, management, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in design reviews and receive constructive feedback to further improve the product",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Having design and development knowledge, Luca bridges the gap between designers and developers with ease. A pleasure to work with.",
    name: "Shaun Mbolompo",
    designation: "Computer Science Student",
    company: "University of Cape Town",
    image: "https://i.ibb.co/0Dwf3Zj/shaun.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' needing a digital prescence like Luca does.",
    name: "Joshua Van Breda",
    designation: "Game Developer",
    company: "Mezmerize Studios",
    image: "https://i.ibb.co/yg80p3J/self.jpg",
  },
  {
    testimonial:
      "After Luca optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Portfolio Website",
    description:
      "Web-based application that allows for the client to showcase their portfolio and brand",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/lucaliebenberg/moses-wesbite",
  },
  {
    name: "Wedding Website",
    description:
      "Web-based application that allows for the client to share their wedding invitation with those who were invited",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "sass",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/lucaliebenberg/wedding-website",
  },
  {
    name: "Catering Webiste",
    description:
      "Web-based application that allows users to browse the catering list and the relevant price list. This was for a catering company that wanted to have a digital prescene.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/lucaliebenberg/bossboys-website",
  },
  {
    name: "Crypto eLearning",
    description:
      "A Design System project for a eLearning Crypto app concept, with a modular Design System that displays the brand and concepts",
    tags: [
      {
        name: "ux design",
        color: "blue-text-gradient",
      },
      {
        name: "ui design",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: project9,
    source_code_link:
      "https://www.behance.net/gallery/157871107/ID200-04-Design-System",
  },
  {
    name: "Travel Website",
    description:
      "Web-based application that allows for the user to view travel desinations and destination information",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: project10,
    source_code_link: "https://github.com/lucaliebenberg/travel-wesbite",
  },
];

export { services, technologies, experiences, testimonials, projects };
