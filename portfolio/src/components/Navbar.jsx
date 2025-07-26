import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-sm text-white z-20 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Harshini Gunturi</h1>
        <ul className="flex space-x-6">
          {["home", "about", "projects", "contact"].map((section) => (
            <li key={section}>
              <Link
                to={section}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="cursor-pointer hover:text-cyan-400 capitalize"
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
