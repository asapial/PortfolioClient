import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // close mobile menu
    }
  };

  const navItems = [
    { name: "I Am", path: "home" },
    { name: "Resume", path: "resume" },
    { name: "Projects", path: "projects" },
    { name: "About Me", path: "about" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[#1e2125] text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <img
    src='/public/images/generated_text.png'

    className=" w-30 md:w-40"
  />

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.path)}
              className="text-sm font-medium hover:text-[#f9004d] transition"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#1e2125] px-6 py-4">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.path)}
              className="block py-2 text-sm font-medium text-white hover:text-[#f9004d]"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
