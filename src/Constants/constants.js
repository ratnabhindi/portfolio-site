import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  csharpIcon,
  jqueryIcon,
  typescriptIcon,
  financeApp,
  fitnessApp,
  concertApp,
  googleMapApp,
  incomeExpenseApp,
  todoApp,
  avatar,
} from "../assets";

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  csharpIcon,
  jqueryIcon,
  typescriptIcon,
  avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Hello there, I'm so happy you are here! :)",
    "My name is Ratna Bhindi, a seasoned .NET Developer based in Macquarie Park, NSW. With a strong background in full-stack development, I've contributed to innovative solutions in the banking, energy, and financial sectors.",
    "Beyond my professional life, I enjoy exploring new technologies, mentoring, and continuous learning. I’m passionate about creating efficient, reliable systems and collaborating with like-minded professionals.",
    "Your visit to my portfolio is deeply appreciated!",

    "You can download my resume here.",
  ],
};

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  // {
  //   id: 'contact',
  //   title: 'Contact',
  // },
];

const projects = [
  {
    name: "Finance App",
    description:
      "Financial Transaction Management and Analysis app to categorize and visualize financial transactions data in OFX. Made with React + Typescript + d3. It enables users to upload, categorize, filter, and visualize financial transactions from OFX files.",
    image: financeApp,
    source_code_link: "https://github.com/ratnabhindi/finances-app",
    demo_link: "https://ratnabhindi.github.io/finances-app/",
  },
  {
    name: "ReactJS & Tailwind",
    description:
      "This web application, created using ReactJS and styled with Tailwind CSS, showcases a collection of mini-applications that demonstrate various functionalities and visualizations. The application is designed to provide an interactive and visually appealing user experience.",
    image: todoApp,
    source_code_link: "https://github.com/ratnabhindi/react-tailwind-demo",
    demo_link: "https://ratnabhindi.github.io/react-tailwind-demo/",
  },
  {
    name: "Fitness WebApi",
    description:
      "The Fitness WebAPI is a robust ASP.NET Core Web API application designed to manage and track fitness activities and workouts. This API allows users to create, read, update, and delete (CRUD) fitness exercises and workout plans. It supports authentication and authorization using JWT tokens and is configured to support API versioning and documentation via Swagger",
    image: fitnessApp,
    source_code_link: "https://github.com/ratnabhindi/Fitness",
    demo_link: "https://github.com/ratnabhindi/Fitness",
  },
  {
    name: "Concert Booking",
    description:
      "The Concert Booking System leverages Clean Architecture principles to ensure a scalable, maintainable, and testable codebase. This application is ideal for event organizers and music venues looking to streamline their booking and management processes.",
    image: concertApp,
    source_code_link: "https://github.com/ratnabhindi/ConcertBooking",
    demo_link: "https://github.com/ratnabhindi/ConcertBooking",
  },

  {
    name: "Google Maps",
    description:
      "This web application is a Google Maps clone built using Mapbox GL JS, providing users with an interactive map interface that includes navigation controls and route directions. The application leverages geolocation to center the map on the user's current location, offering a dynamic and user-centric mapping experience.",
    image: googleMapApp,
    source_code_link: "https://github.com/ratnabhindi/google-maps-clone",
    demo_link: "https://github.com/ratnabhindi/google-maps-clone",
  },
  {
    name: "Income Expense Tracker",
    description:
      "The Income Expense Tracker app leverages the power of React to provide a dynamic and user-friendly platform for managing personal finances. By combining automatic calculations with insightful data visualizations, the app helps users stay on top of their financial health and make better financial decisions",
    image: incomeExpenseApp,
    source_code_link:
      "https://github.com/ratnabhindi/income-expense-tracker-with-speech",
    demo_link:
      "https://github.com/ratnabhindi/income-expense-tracker-with-speech",
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: "csharp",
    title: "C#",
    icon: csharpIcon,
    description:
      "I have extensive experience with C#, utilizing it for various applications in .NET development, including full-stack development and API integrations.",
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: jsIcon,
    description:
      "I possess substantial experience in JavaScript (ES6), employing it to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.",
  },
  {
    id: "typescript",
    title: "TypeScript",
    icon: typescriptIcon,
    description:
      "I am proficient in TypeScript, leveraging its strong typing system to build robust and scalable web applications.",
  },
  {
    id: "python",
    title: "Python",
    icon: pyIcon,
    description:
      "With 2 years of experience, I am adept at coding functions and performing data analysis.",
  },
  {
    id: "html",
    title: "HTML",
    icon: htmlIcon,
    description:
      "I have a strong command of HTML for organizing web pages and generating meaningful content accessible to all users.",
  },
  {
    id: "css",
    title: "CSS",
    icon: cssIcon,
    description:
      "I possess expertise in utilizing CSS and frameworks like Tailwind CSS and Bootstrap to design web pages and craft visually captivating layouts.",
  },
  {
    id: "react",
    title: "React",
    icon: reactIcon,
    description:
      "I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.",
  },
  {
    id: "jquery",
    title: "jQuery",
    icon: jqueryIcon,
    description:
      "I have experience using jQuery for DOM manipulation, event handling, and creating interactive web elements.",
  },
  {
    id: "dotnet",
    title: ".NET Framework",
    //icon: dotnetIcon,
    description:
      "I am skilled in using .NET Framework for building and maintaining enterprise-level applications, with a strong focus on performance and security.",
  },
  {
    id: "dotnetcore",
    title: ".NET Core",
    //   icon: dotnetcoreIcon,
    description:
      "I am proficient in .NET Core, utilizing its cross-platform capabilities to develop scalable and high-performance applications.",
  },
  {
    id: "aspnetmvc",
    title: "ASP.NET MVC",
    //icon: aspnetmvcIcon,
    description:
      "I have extensive experience with ASP.NET MVC, building web applications with a focus on the Model-View-Controller architecture.",
  },
  {
    id: "entityframework",
    title: "Entity Framework",
    //  icon: efIcon,
    description:
      "I am experienced in using Entity Framework for database access and management, ensuring efficient data handling in applications.",
  },
  {
    id: "sql",
    title: "Microsoft SQL Server",
    //  icon: sqlIcon,
    description:
      "I have a strong command of Microsoft SQL Server, encompassing database design, query optimization, and reporting.",
  },
  {
    id: "git",
    title: "Git",
    icon: gitIcon,
    description:
      "I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.",
  },
  {
    id: "github",
    title: "GitHub",
    icon: githubIcon,
    description:
      "I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking.",
  },
  {
    id: "visualstudio",
    title: "Visual Studio",
    // icon: vsIcon,
    description:
      "I use Visual Studio as my primary development environment for .NET applications, benefiting from its powerful debugging and productivity features.",
  },
  {
    id: "vscode",
    title: "Visual Studio Code",
    // icon: vscodeIcon,
    description:
      "I utilize Visual Studio Code for front-end development and lightweight coding tasks, taking advantage of its extensibility and performance.",
  },
  {
    id: "ssms",
    title: "SQL Server Management Studio",
    //   icon: ssmsIcon,
    description:
      "I use SQL Server Management Studio for database management, query writing, and performance tuning in SQL Server.",
  },
  {
    id: "aws",
    title: "AWS",
    //   icon: awsIcon,
    description:
      "I am currently progressing towards AWS certification, leveraging its cloud computing services for scalable and reliable infrastructure.",
  },
  {
    id: "azuredevops",
    title: "Azure DevOps",
    //  icon: azuredevopsIcon,
    description:
      "I am skilled in using Azure DevOps for CI/CD pipelines, project management, and collaboration.",
  },
  {
    id: "jenkins",
    title: "Jenkins",
    //  icon: jenkinsIcon,
    description:
      "I have experience with Jenkins for automating builds and deployments, ensuring continuous integration and delivery.",
  },
  {
    id: "jira",
    title: "Jira",
    //   icon: jiraIcon,
    description:
      "I use Jira for project management and issue tracking, enhancing communication and workflow efficiency.",
  },
  {
    id: "confluence",
    title: "Confluence",
    //  icon: confluenceIcon,
    description:
      "I leverage Confluence for knowledge management and documentation, improving collaboration and information sharing.",
  },
  {
    id: "oop",
    title: "OOPS",
    // icon: oopIcon,
    description:
      "I have a solid grasp of Object-Oriented Programming (OOP) principles, promoting efficiency, legibility, testability, and maintainability in my code.",
  },
  {
    id: "data-structures",
    title: "Data Structures",
    //  icon: datastructuresIcon,
    description:
      "I am proficient in various data structures, essential for building efficient and optimized applications.",
  },
  {
    id: "agile",
    title: "Agile Methodologies",
    //  icon: agileIcon,
    description:
      "I am experienced in Agile methodologies, facilitating iterative development, continuous feedback, and collaboration.",
  },
];

// const skills = [
//   {
//     id: "html",
//     title: "HTML",
//     icon: htmlIcon,
//     description:
//       "I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.",
//   },
//   {
//     id: "css",
//     title: "CSS",
//     icon: cssIcon,
//     description:
//       "I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.",
//   },
//   {
//     id: "javascript",
//     title: "JavaScript",
//     icon: jsIcon,
//     description:
//       "I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.",
//   },
//   {
//     id: "react",
//     title: "React",
//     icon: reactIcon,
//     description:
//       "I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.",
//   },
//   {
//     id: "java",
//     title: "Java",
//     icon: javaIcon,
//     description:
//       "I have extensive experience utilizing Java for object-oriented programming (OOP) and implementing data structures.",
//   },
//   {
//     id: "aws",
//     title: "Amazon Web Services",
//     icon: awsIcon,
//     description:
//       "I am certified in AWS and proficient in working with EC2 and RDS instances, leveraging the power of cloud computing for scalable and reliable infrastructure.",
//   },
//   {
//     id: "figma",
//     title: "Figma",
//     icon: figmaIcon,
//     description:
//       "In my Figma skills, I unleash creativity, designing captivating user interfaces and collaborating seamlessly with designers and developers.",
//   },
//   {
//     id: "git",
//     title: "Git",
//     icon: gitIcon,
//     description:
//       "I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.",
//   },
//   {
//     id: "github",
//     title: "GitHub",
//     icon: githubIcon,
//     description:
//       "I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.",
//   },
//   {
//     id: "psql",
//     title: "Postgresql",
//     icon: psqlIcon,
//     description:
//       "I have a strong command of PostgreSQL, encompassing a wide range of skills such as database normalization, triggers, front-end connectivity, and data analysis using software like Power BI.",
//   },
//   {
//     id: "vite",
//     title: "Vite",
//     icon: viteIcon,
//     description:
//       "I have gained considerable experience working with Vite for approximately six months, leveraging its capabilities to build React websites and seamlessly deploy them on platforms like Netlify.",
//   },
//   {
//     id: "py",
//     title: "Python",
//     icon: pyIcon,
//     description:
//       "With 3 years of Python experience, I am adept at coding functions and creating graphic interfaces using Tkinter.",
//   },
//   {
//     id: "node",
//     title: "Node",
//     icon: nodeIcon,
//     description:
//       "When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.",
//   },
//   {
//     id: "neo",
//     title: "Neo4j",
//     icon: neoIcon,
//     description:
//       "I am knowledgeable in Neo4j, the graph database management system. I have expertise in utilizing GraphOS to build robust recommendation systems, leveraging the strength of graph-based data modeling.",
//   },
//   {
//     id: "raspi",
//     title: "Raspberry Pi",
//     icon: raspIcon,
//     description:
//       "I have hands-on experience with Raspberry Pi, where I utilized a virtual Linux machine to execute programs written in assembly language. This allowed me to explore low-level computing and develop efficient code for the Raspberry Pi platform.",
//   },
//   {
//     id: "eslint",
//     title: "Eslint",
//     icon: eslintIcon,
//     description:
//       "I utilize ESLint to identify and resolve code issues, as well as standardize the structure of my projects. With ESLint, I ensure code quality and consistency throughout my development process.",
//   },
// ];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export { media, introduction, projects, memoji, skills, markerSvg, icons };
