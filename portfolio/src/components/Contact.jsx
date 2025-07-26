import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      form.reset();
      setStatus("SUCCESS");
    } else {
      setStatus("ERROR");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white px-6 py-20 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-8">Contact Me</h2>
      <p className="text-gray-300 text-center max-w-xl mb-12">
        Have a question or want to work together? Feel free to drop a message!
      </p>

      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-gray-900 p-8 rounded-lg border border-gray-700 shadow-md space-y-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <label className="block mb-2 text-sm">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
        <button
          type="submit"
          className="bg-cyan-500 text-black px-6 py-2 rounded hover:bg-cyan-400 transition"
        >
          Send Message
        </button>
        {status === "SUCCESS" && (
          <p className="text-green-400 mt-2">Message sent successfully!</p>
        )}
        {status === "ERROR" && (
          <p className="text-red-400 mt-2">Something went wrong. Please try again.</p>
        )}
      </motion.form>

      <div className="flex gap-6 mt-12 text-2xl">
        <a href="https://github.com/harshini0804" target="_blank" rel="noreferrer">
          <FaGithub className="hover:text-cyan-400" />
        </a>
        <a href="https://www.linkedin.com/in/harshini-gunturi-225098304/" target="_blank" rel="noreferrer">
          <FaLinkedin className="hover:text-cyan-400" />
        </a>
        <a href="mailto:youremail@example.com">
          <FaEnvelope className="hover:text-cyan-400" />
        </a>
      </div>
    </section>
  );
}
