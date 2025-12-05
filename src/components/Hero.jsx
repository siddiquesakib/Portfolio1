import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";
import { TypeAnimation } from "react-type-animation";
import { SiLinktree } from "react-icons/si";

const Hero = () => {
  const socialIcons = {
    github: FaGithub,
    linkedin: FaLinkedin,
    Instagram: FaInstagram,
    Linktree: SiLinktree,
    Discord: FaDiscord,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="text-left space-y-6">
            <motion.div variants={itemVariants}>
              <h2 className="text-lg sm:text-xl text-primary font-semibold tracking-wide uppercase">
                Hello, I'm
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mt-2 tracking-tight">
                {personalInfo.name}
              </h1>
              <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary mt-6 rounded-full"></div>
            </motion.div>

            <motion.h3
              variants={itemVariants}
              className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-primary via-secondary to-pink-500 bg-clip-text text-transparent"
            >
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  "MERN Stack Developer",
                  1000,
                  "Web Developer",
                  1000,
                  "Frontend Developer",
                  1000,
                ]}
                speed={20}
                style={{ fontSize: "2rem" }}
                repeat={Infinity}
                omitDeletionAnimation={true}
              ></TypeAnimation>
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg max-w-xl leading-relaxed"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                href={personalInfo.resumeUrl}
                download
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-bold flex items-center gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload /> Download Resume
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 border border-gray-700 bg-gray-800/50 backdrop-blur-sm text-white rounded-full font-bold hover:bg-gray-800 hover:border-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4 pt-6">
              {Object.entries(personalInfo.social).map(([platform, url]) => {
                const Icon = socialIcons[platform];
                return (
                  <motion.a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all duration-300 border border-gray-700 hover:border-transparent"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center relative"
          >
            <motion.div
              className="relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-gray-800/50 shadow-2xl shadow-primary/20">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x400/06b6d4/FFFFFF?text=Your+Photo";
                  }}
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-24 h-24 bg-primary/10 backdrop-blur-md rounded-2xl border border-primary/20 flex items-center justify-center animate-float"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-4xl">💻</span>
              </motion.div>
              <motion.div
                className="absolute -bottom-8 -left-8 w-20 h-20 bg-secondary/10 backdrop-blur-md rounded-full border border-secondary/20 flex items-center justify-center animate-float"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              >
                <span className="text-3xl">🚀</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
          <motion.div
            className="w-1.5 h-3 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
