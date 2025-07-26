import ProjectCard from "./ProjectCard";
import empImage from "../assets/images/empmanager.png";
import mylandingImage from "../assets/images/landingpage.png";
import myportfolioImage from "../assets/images/portfoliosc.png";
import ParticleBackground from "./ParticleBackground";

const projects = [
  {
    image: empImage,
    title: "CRUD operations - Employee Management System",
    description:
      "Allows admins to add, update, delete, and view employee details like name, department, salary, and designation.",
    tech: ["React", "FastAPI", "Python", "SQLAlchemy", "HTML", "CSS"],
    demoLink: "https://readme-gen-demo-link.com",
    githubLink: "https://github.com/harshini0804/CRUD-Project.git",
  },
  {
    image: mylandingImage,
    title: "Task Pilot - Personal Task Manager",
    description:
      "A full-featured task management system supporting user registration/login, task creation, update, deletion, filtering, and status management. Tasks can be marked as completed or archived, with dynamic tables and modal-based task creation.",
    tech: ["FastAPI", "HTML", "CSS", "JavaScript", "SQLAlchemy"],
    demoLink: "https://ats-checker-demo.com",
    githubLink: "https://github.com/harshini0804/Project-1.git",
  },

  {
    image: myportfolioImage,
    title: "My Portfolio",
    description:
      "A curated collection of my full stack development projects built with modern technologies like React, FastAPI, and Tailwind CSS.Each project showcases my skills in designing, developing, and deploying scalable applications from scratch.",
    tech: ["FastAPI", "HTML", "CSS", "JavaScript","TailWindCSS"],
    demoLink: "https://ats-checker-demo.com",
    githubLink: "https://github.com/harshini0804/Project-1.git",
  },
  {
    image: myportfolioImage,
    title: "My Portfolio",
    description:
      "A curated collection of my full stack development projects built with modern technologies like React, FastAPI, and Tailwind CSS.Each project showcases my skills in designing, developing, and deploying scalable applications from scratch.",
    tech: ["FastAPI", "HTML", "CSS", "JavaScript","TailWindCSS"],
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

      <div className="flex flex-wrap gap-10 justify-center z-10 relative">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
}
