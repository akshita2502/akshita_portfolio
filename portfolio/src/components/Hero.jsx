import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex flex-col justify-center items-center text-white text-center px-4"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I'm Akshita Gunturi
      </h1>
      <h2 className="text-2xl md:text-3xl text-cyan-400 font-semibold mb-6">
        Backend Developer
      </h2>
      <p className="text-lg md:text-xl max-w-xl mb-8">
        Passionate about building scalable web and desktop applications with expertise in FastAPI, and modern tech. I love turning ideas into real products.
      </p>
      <div className="flex gap-6">
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded-md font-medium cursor-pointer transition"
        >
          View Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="border border-white hover:bg-white hover:text-black px-6 py-2 rounded-md font-medium cursor-pointer transition"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}