import { motion } from "framer-motion";
import {
  FaTimes,
  FaExternalLinkAlt,
  FaGithub,
  FaCheckCircle,
} from "react-icons/fa";
import { projects } from "../data/portfolioData";

const ProjectDetails = ({ projectId, onClose }) => {
  const project = projects.find((p) => p.id === projectId);

  if (!project) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-gray-900 rounded-2xl max-w-4xl w-full my-8 border border-gray-700 shadow-2xl"
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Image */}
        <div className="relative h-64 rounded-t-2xl overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = `https://via.placeholder.com/800x400/9333EA/FFFFFF?text=${encodeURIComponent(
                project.name
              )}`;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>

          {/* Close Button */}
          <motion.button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTimes size={20} />
          </motion.button>

          {/* Project Title */}
          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              {project.name}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-purple-900/50 border border-purple-500/30 rounded-full text-xs text-purple-300 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <motion.div
          className="p-6 sm:p-8 space-y-8 max-h-[60vh] overflow-y-auto custom-scrollbar"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Description */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-purple-400">📝</span> About the Project
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {project.fullDescription}
            </p>
          </motion.div>

          {/* Main Technologies */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-purple-400">🛠️</span> Technology Stack
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {Object.entries(project.mainTech).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50"
                >
                  <h4 className="text-purple-400 font-semibold capitalize mb-1">
                    {key}:
                  </h4>
                  <p className="text-gray-300 text-sm">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-purple-400">✨</span> Key Features
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Challenges */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-purple-400">🎯</span> Challenges Faced
            </h3>
            <ul className="space-y-2">
              {project.challenges.map((challenge, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Future Improvements */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-purple-400">🚀</span> Future Improvements
            </h3>
            <ul className="space-y-2">
              {project.improvements.map((improvement, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>{improvement}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-4"
          >
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[200px] px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt /> View Live Demo
            </motion.a>
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[200px] px-6 py-3 bg-gray-800 border border-purple-500/30 text-white rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub /> View Source Code
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetails;
