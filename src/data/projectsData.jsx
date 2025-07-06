import noPhoto from "../assets/noPhoto.png";
import daggit from "../assets/daggit_demo.png";
import mernstack from "../assets/mernstack.png";
import jigsawtechie from "../assets/jigsawtechie.com_.png";

console.log("Image imports loaded:", {
  noPhoto,
  daggit,
  mernstack,
  jigsawtechie,
});

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "This is my personal developer portfolio, built from scratch using React. The site showcases my skills, projects, and technical capabilities, and is hosted on a custom domain (toddwilliams.dev). It uses responsive design principles with custom CSS and utility-first styling to ensure compatibility across various screen sizes. The project helped solidify my understanding of React components, routing with `react-router-dom`, and state management for UI responsiveness. I also configured deployment pipelines through GitHub Pages, and use this site as the foundation for showcasing all my future work.",
    img: null,
    imgIFrame: "https://www.toddwilliams.dev/",
    tech: ["HTML", "CSS", "React", "VS Code", "ReactLibraries"],
    category: "frontend", // Options: "frontend", "backend", "fullstack"
    git1: ["https://github.com/DaGearz/portfolio-", "FrontEnd Code"],
    git2: [null, null],
    website: "https://www.toddwilliams.dev/",
    usePortfolio: true,
    useFeatured: false,
  },
  {
    id: 2,
    title: "Language Game",
    description:
      "The Language Game is a fun React-based web app that translates user input into Pig Latin in real-time. It was built as a lightweight tool to explore how React handles controlled components and input change events. The project emphasizes string manipulation and showcases how to build interactive, real-time UIs in React. Through this app, I also practiced deploying static web apps using GitHub Pages and gained confidence in working with event-driven UI updates and reusable components.",
    img: null,
    imgIFrame: "https://dagearz.github.io/language_game/",
    tech: ["HTML", "CSS", "React", "VS Code", "ReactLibraries"],
    category: "frontend", // Options: "frontend", "backend", "fullstack"
    git1: ["https://github.com/DaGearz/language_game", "FrontEnd Code"],
    git2: [null, null],
    website: "https://dagearz.github.io/language_game/",
    usePortfolio: true,
    useFeatured: true,
  },
  {
    id: 3,
    title: "KMZ to GMaps",
    description:
      "This project integrates Google Maps into a React app and provides a UI where users can visualize `.kmz` data directly on an embedded map. The core idea was to understand how third-party APIs like Google Maps can be consumed within a React environment. While the API key is disabled for public deployment due to the lack of a secure backend, the codebase demonstrates loading and rendering map layers, handling API keys, and setting up environmental variables during development. This was a critical learning step in understanding how frontends interact with external APIs and what backend protections are required.",
    img: null,
    imgIFrame: "https://dagearz.github.io/kmz_toGoogleMaps/",
    tech: ["HTML", "CSS", "React", "VS Code", "GoogleAPI", "ReactLibraries"],
    category: "frontend", // Options: "frontend", "backend", "fullstack"
    git1: ["https://github.com/DaGearz/kmz_toGoogleMaps", "FrontEnd Code"],
    git2: [null, null],
    website: "https://dagearz.github.io/kmz_toGoogleMaps/",
    usePortfolio: true,
    useFeatured: false,
  },
  {
    id: 4,
    title: "MERN Stack Tutorial",
    description:
      "This project is the result of working through a comprehensive tutorial that walks through building a full MERN (MongoDB, Express, React, Node.js) stack application. I built a simple note-taking web app for a fictional company, which covers frontend and backend development, API creation, and data persistence. This experience introduced me to RESTful routing, middleware, Express server logic, MongoDB document models, and React-to-backend API communication using Axios. I hosted the frontend and backend separately on GitHub, giving me experience in repo structuring and modular project development.",
    img: mernstack,
    imgIFrame: null,
    tech: ["HTML", "CSS", "Node.js", "React", "express", "NPM", "MongoDB"],
    category: "fullstack", // Options: "frontend", "backend", "fullstack"
    git1: ["https://github.com/DaGearz/mern_tutorial_FE", "FrontEnd Code"],
    git2: ["https://github.com/DaGearz/mern_tutorial", "BackendEnd Code"],
    website: null,
    usePortfolio: true,
    useFeatured: false,
  },
  {
    id: 5,
    title: "Custom Made GIT",
    description:
      "This is an ongoing personal challenge to recreate the basic functionality of Git using Python. The project, called 'daggit', involves building a command-line interface that can initialize a repository, track files, compute file hashes, and commit changes. It has taught me fundamental concepts like hashing with SHA-1, managing a virtual file store, and understanding how Git stores object data. I'm building it to reinforce how version control systems work under the hood, and to gain deeper knowledge of file I/O, directory management, and Python’s standard library.",
    img: daggit,
    imgIFrame: null,
    tech: ["Python"],
    category: "backend", // Options: "frontend", "backend", "fullstack"
    git1: ["https://github.com/DaGearz/custom_cli_git", "Code"],
    git2: [null],
    website: null,
    usePortfolio: true,
    useFeatured: true,
  },
  {
    id: 6,
    title: "My First Company",
    description:
      "This project marks my first full-stack production deployment and the launch of my tech company, Jigsaw Techie. The business initially focuses on delivering fast-turnaround web development services. As I continue to grow my skills—especially in Python—I plan to expand into additional service offerings. I navigated the full business formation process, starting as a sole proprietorship and later transitioning into an LLC. This project highlights my ability to quickly learn and apply both new technologies and business processes.",
    img: jigsawtechie,
    imgIFrame: null, // Note: May not display due to X-Frame-Options
    tech: ["Next.js", "Tailwind", "Vercel", "Suppabase", "Bussiness-Formation"],
    category: "fullstack", // Options: "frontend", "backend", "fullstack"
    git1: ["https://github.com/DaGearz/JigSawTechie", "Code"],
    git2: [null],
    website: "https://jigsawtechie.com/",
    usePortfolio: true,
    useFeatured: true,
  },
  {
    id: 7,
    title: "Banking System",
    description: "A small python project demonstrating class inheritance.",
    img: noPhoto,
    imgIFrame: null,
    tech: ["Python"],
    category: "backend", // Options: "frontend", "backend", "fullstack"
    git1: ["https://github.com/DaGearz/python_banking_system", "Code"],
    git2: [null],
    website: null,
    usePortfolio: true,
    useFeatured: false,
  },
  {
    id: 8,
    title: "Note Taking App",
    description:
      "A small note taking app in python. The site is deployed through render. It demonstraits authentication and database connection. I followed  a tutorial from Tech with Tim for the code. I deployed the project through render.",
    img: null,
    imgIFrame: "https://flask-notes-app-p6jb.onrender.com/",
    tech: ["Python", "Render", "Flask", "SQLAlchemy"],
    category: "fullstacll", // Options: "frontend", "backend", "fullstack"
    git1: ["https://github.com/DaGearz/Flask_Tutorial_1", "Code"],
    git2: [null],
    website: "https://flask-notes-app-p6jb.onrender.com/",
    usePortfolio: true,
    useFeatured: false,
  },
];

export default projectsData;
