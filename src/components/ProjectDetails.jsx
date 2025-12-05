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

  return (
    <div className="min-h-screen bg-dark pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          onClick={onClose}
          className="mb-8 flex items-center gap-2 text-gray-300 hover:text-primary transition-colors duration-300"
          whileHover={{ x: -5 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <span className="text-2xl">←</span>
          <span className="font-medium">Back to Projects</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Header with Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden glass border border-white/10">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = `https://via.placeholder.com/1200x600/06b6d4/FFFFFF?text=${encodeURIComponent(
                  project.name
                )}`;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent"></div>

            {/* Project Title */}
            <div className="absolute bottom-8 left-8 right-8">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                {project.name}
              </h1>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[200px] px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt /> View Live Demo
            </motion.a>
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[200px] px-6 py-3 bg-white/5 border border-white/10 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub /> View Source Code
            </motion.a>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Description */}
            <div className="glass rounded-2xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-primary">📝</span> About the Project
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Main Technologies */}
            <div className="glass rounded-2xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-primary">🛠️</span> Technology Stack
              </h3>
              <div className="space-y-3">
                {Object.entries(project.mainTech).map(([key, value]) => (
                  <div
                    key={key}
                    className="bg-white/5 rounded-lg p-4 border border-white/10"
                  >
                    <h4 className="text-primary font-semibold capitalize mb-1">
                      {key}:
                    </h4>
                    <p className="text-gray-300 text-sm">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="glass rounded-2xl p-6 sm:p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-primary">✨</span> Key Features
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {(project.features || project.Features || []).map(
                (feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="glass rounded-2xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-primary">🎯</span> Challenges Faced
              </h3>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span className="text-primary mt-1">▹</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Future Improvements */}
          {project.improvements && project.improvements.length > 0 && (
            <div className="glass rounded-2xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-primary">🚀</span> Future Improvements
              </h3>
              <ul className="space-y-2">
                {project.improvements.map((improvement, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span className="text-primary mt-1">▹</span>
                    <span>{improvement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;
