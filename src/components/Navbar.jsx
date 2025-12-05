import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = ({ onNavigate, isProjectDetailsOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();

    if (isProjectDetailsOpen) {
      onNavigate();
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-4 left-0 right-0 z-50 px-3 sm:px-4"
    >
      <div
        className={`mx-auto w-full md:w-auto max-w-full md:max-w-fit flex flex-col md:flex-row items-center justify-center rounded-2xl px-3 sm:px-5 md:px-8 py-2.5 sm:py-3.5 transition-all duration-300 ${
          scrolled
            ? "glass shadow-2xl border border-white/10"
            : "glass border border-white/5"
        }`}
      >
        {/* Mobile Layout */}
        <div className="md:hidden flex flex-nowrap justify-between gap-1.5 w-full text-xs sm:text-sm">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`flex-1 min-w-0 text-center px-2.5 py-1.5 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? "text-white bg-gradient-to-r from-primary to-secondary shadow-inner"
                    : "text-gray-300 hover:text-primary hover:bg-white/5"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {item.name}
              </motion.a>
            );
          })}
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`transition-colors duration-300 relative group font-medium ${
                  isActive ? "text-primary" : "text-gray-300 hover:text-primary"
                }`}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
