import { motion } from "framer-motion";

export default function ProjectCard({ image, title, description, tech, demoLink, githubLink }) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg w-[550px] h-[550px] flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Top: Project Image */}
      <motion.img
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded-t-xl"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      />

      {/* Bottom: Content */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, idx) => (
            <span
              key={idx}
              className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Live Demo
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}
