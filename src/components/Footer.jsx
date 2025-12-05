import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";
import { SiLinktree } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, url: personalInfo.social.github, label: "GitHub" },
    { icon: FaLinkedin, url: personalInfo.social.linkedin, label: "LinkedIn" },
    {
      icon: FaInstagram,
      url: personalInfo.social.Instagram,
      label: "Instagram",
    },
    { icon: SiLinktree, url: personalInfo.social.Linktree, label: "Linktree" },
    {
      icon: FaWhatsapp,
      url: `https://wa.me/${personalInfo.whatsapp.replace(/[^0-9]/g, "")}`,
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="bg-dark border-t border-white/5 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center gap-6">
        {/* Social Links */}
        <div className="flex gap-8">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              title={social.label}
            >
              <social.icon size={28} />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-center text-sm">
          © {currentYear} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
