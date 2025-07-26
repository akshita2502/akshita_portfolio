import { motion } from "framer-motion";

const timeline = [

    {
    title: "Python Backend Developer",
    org: "Applied Materials, August 2024 –Present",
    desc: "Hands-on experience in building robust, scalable, and efficient backend systems. My core expertise lies in designing and implementing RESTful APIs using modern Python frameworks such as FastAPI and Tornado, enabling rapid development and deployment of backend services.",
  },
  
  {
    title: "Data Science Intern",
    org: "Applied Materials Feb-July 2024 ",
    desc: "Gained hands on Experience with visualization tools like powerBi and TableauGained hands-on experience with data visualization tools, performed ML and NLP tasks, and worked on backend development using Tornado and PostgreSQL, with exposure to Big Data and advanced SQL querying.",
  },
  {
    title: "Bachelor of Computer Science and Engineering",
    org: "Amrita Vishwa Vidyapeetham, 2020–2024",
    desc: "Graduated with a B.Tech degree, holding a solid academic record and a strong foundation in programming, databases, machine learning, and research."
  },
  {
    title: "High School",
    org: "Oxford English School - ICSE",
    desc: "Chose computers for Elective in grade 10th",
  },
//   {
//     title: "Portfolio Development",
//     org: "Self Project, 2025",
//     desc: "Designed and developed this animated portfolio using React, TailwindCSS, and Framer Motion.",
//   },
];

export default function Experience() {
  return (
    <section
      id="journey"
      className="min-h-screen bg-black text-white px-4 md:px-10 py-20"
    >
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">
        My Journey
      </h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Center vertical line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-cyan-400 rounded"></div>

        <div className="space-y-20">
          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                } items-center w-full`}
              >
                <div
                  className={`md:w-1/2 ${
                    isLeft ? "md:pr-10" : "md:pl-10"
                  } text-center md:text-left`}
                >
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-cyan-500">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm text-cyan-300 mb-1">{item.org}</p>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-cyan-400 border-4 border-black z-10" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
