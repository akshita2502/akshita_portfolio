import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileIcon from "../assets/images/profileicon.png";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white px-6 py-20 flex justify-center items-center"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image */}
        <motion.img
          src={profileIcon} // ✅ Replace with your image path
          alt="Profile"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-2 border-cyan-500 shadow-lg"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        />

        {/* About Text */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-2xl font-bold mb-6 leading-relaxed text-white relative">
          <p className="ml-44">I'm <span className="text-cyan-400">Akshita Gunturi</span>, a backend developer</p>
          <p className="ml-44">passionate about building RESTful APIs.</p>
          {/* <p className="text-center">applications.</p> */}
          </div>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I am a passionate and dedicated <strong className="text-white">Backend Developer</strong>  with a degree in <strong className="text-white">Computer Science Engineering </strong> and <strong className="text-white">1 year</strong> of hands-on experience in building robust, scalable, and efficient backend systems. My core expertise lies in designing and implementing <strong className="text-white">RESTful APIs</strong> using modern Python frameworks such as FastAPI and Tornado, enabling rapid development and deployment of backend services.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Over the past year, I have gained practical experience with <strong className="text-white">CI/CD pipelines</strong> working with tools like <strong className="text-white">Jenkins</strong>  to streamline software delivery. I have deployed and managed applications using <strong className="text-white">Red Hat OpenShift on Azure and AWS cloud platforms.</strong> 
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
           In addition to backend development, I have a keen interest in<strong className="text-white">Full Stack Development, Generative AI (GenAI), and Machine Learning (ML).</strong> I am always looking to explore innovative technologies and incorporate them into practical solutions.
          </p>
         
          {/* Social Icons */}
          <div className="flex gap-6 text-2xl text-white">
            <a
              href="https://github.com/akshita2502"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/akshita-gunturi-135487269/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:akshitagunturi@gmail.com"
              className="hover:text-cyan-400"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}