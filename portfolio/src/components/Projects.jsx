import ProjectCard from "./ProjectCard";
import myportfolioImage from "../assets/images/portfoliosc.png";

const projects = [
  // {
  //   image: empImage,
  //   title: "CRUD operations - Employee Management System",
  //   description:
  //     "Allows admins to add, update, delete, and view employee details like name, department, salary, and designation.",
  //   tech: ["React", "FastAPI", "Python", "SQLAlchemy", "HTML", "CSS"],
  //   demoLink: "https://readme-gen-demo-link.com",
  //   githubLink: "https://github.com/harshini0804/CRUD-Project.git",
  // },
  {
    // image: mylandingImage,
    title: "TaskPilot - Personal Task Manager",
    description:
      "A full-featured task management system supporting user registration/login, task creation, update, deletion, filtering, and status management. Tasks can be marked as completed or archived, with dynamic tables and modal-based task creation.",
    tech: ["FastAPI","ReactJS", "HTML", "CSS", "JavaScript", "PostgreSQL", "SQLAlchemy"],
    // demoLink: "https://ats-checker-demo.com",
    // githubLink: "https://github.com/harshini0804/Project-1.git",
  },

  {
    // image: myportfolioImage,
    title: "My Portfolio",
    description:
      "A curated collection of my full stack development projects built with modern technologies like React, FastAPI, and Tailwind CSS. Each project showcases my skills in designing, developing, and deploying scalable applications from scratch.",
    tech: ["FastAPI", "ReactJS", "JavaScript","TailWindCSS"],
    demoLink: "https://ats-checker-demo.com",
    githubLink: "https://github.com/harshini0804/Project-1.git",
  },
  {
    image: myportfolioImage,
    title: "ContentCrafter - AI-Powered Content Generator",
    description:
      " AI-powered app that generates real-time course content using transformer models with a React preview/save interface, automating manual content creation, reducing content preparation time, and improving content organization.",
    tech: ["FastAPI","ReactJS", "CSS", "JavaScript", "PostgreSQL", "HuggingFace"],
    demoLink: "https://ats-checker-demo.com",
    githubLink: "https://github.com/harshini0804/Project-1.git",
  },
  {
    image: myportfolioImage,
    title: "SpendWise - Expense Tracker",
    description:
      "Finance tracker with recurring transactions, categorization, and interactive dashboards for real-time insights, enhancing personal finance visibility, reducing manual tracking and improving budgeting accuracy.",
    tech: ["FastAPI", "ReactJS", "CSS", "JavaScript","TailWindCSS", "PostgreSQL"],
    demoLink: "https://ats-checker-demo.com",
    githubLink: "https://github.com/harshini0804/Project-1.git",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white py-20 px-6 flex flex-col items-center relative"
    >
      {/* ✅ Background animation inside section */}
      {/* <ParticleBackground /> */}

      <h2 className="text-4xl font-bold text-cyan-400 mb-12 z-10 relative">Projects</h2>

      <div className="flex flex-col items-center gap-10 md:flex-row md:flex-wrap md:justify-center md:items-stretch">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
}
