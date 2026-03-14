
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    // {
    //   title: "Backend Developer",
    //   icon: backend,
    // },
    {
      title: "Mobile Application Developer",
      icon: creator,
    },
    {
      title: "Desktop Application Developer",
      icon: backend,
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
    {
      name: "MongoDB",
      icon: mongodb,
    },
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
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "Sage Systems Private Limited",
      icon: meta,
      iconBg: "#ff0000ff",
      date: "Feb 2026 - Present",
      points: [
        "Developing and maintaining enterprise-level web applications and modules using React.js, Node.js, C#, and .NET.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to deliver scalable and high-quality software solutions.",
        "Implementing responsive designs, ensuring cross-browser compatibility, and integrating front-end with backend services and databases.",
        "Participating in code reviews, mentoring junior developers, and providing constructive feedback to maintain code quality.",
        "Implemented modules currently used by 3 international shipyards, improving operational efficiency and deployment across UAE and Philippine clients.",
      ],
    },
    {
      title: "Associate Software Engineer",
      company_name: "Sage Systems Private Limited",
      icon: meta,
      iconBg: "#ff0000ff",
      date: "Feb 2025 - Jan 2026",
      points: [
        "Assisted in developing and enhancing the Integrated Shipyard Commercial and Production Management System (ISCPM) using C#, .NET, DevExpress, and SQL.",
        "Integrated front-end components with backend APIs to ensure smooth functionality across web and mobile platforms.",
        "Collaborated with team members to build modules and maintain existing features for international shipyards.",
        "Contributed to mobile and web applications connected with ISCPM, supporting deployment for multiple international clients.",
        "Participated in code reviews, debugging, and testing to improve software quality and reliability.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Sage Systems Private Limited",
      icon: meta,
      iconBg: "#ff0000ff",
      date: "Nov 2024 - Feb 2025",
      points: [
        "Collaborated on the development of the Integrated Shipyard Commercial and Production Management System (ISCPM) using C#, .NET, DevExpress, and SQL.",
        "Supported the development of mobile and web applications integrated with ISCPM for easier access and operations.",
        "Assisted in deploying the system for a shipyard in the Philippines and contributed to projects for two shipyards in the UAE.",
        "Learned best practices in code quality, version control, and agile workflow.",
        "Participated in team meetings, debugging, and testing tasks to gain hands-on experience in enterprise software development.",
      ],
    },
    {
      title: "BSc(Hons) in Software Engineering - First Class",
      company_name: "NSBM Green University",
      icon: tesla,
      iconBg: "#ffffff",
      date: "2022 - 2026",
      points: [
        "Graduated with First Class Honours in Software Engineering.",
        "Developed practical skills in programming languages including Java, C#, JavaScript, and Dart.",
        "Completed a 4-year program covering full-stack development, mobile application development, databases, and software engineering principles.",
        "Gained experience in software development methodologies, version control, and collaborative team projects.",
        "Built multiple academic projects including portfolio websites, mobile applications, and web applications.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  