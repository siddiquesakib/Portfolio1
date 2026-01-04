import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaTimes,
  FaExternalLinkAlt,
  FaGithub,
  FaCheckCircle,
  FaUsers,
  FaUserTie,
  FaStar,
  FaCode,
  FaLightbulb,
  FaRocket,
  FaArrowLeft,
  FaImages,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
} from "react-icons/fa";
import { projects } from "../data/portfolioData";

const ProjectDetails = ({ projectId, onClose }) => {
  const project = projects.find((p) => p.id === projectId);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!project) return null;

  // Get all images - main image + gallery images
  const allImages = [project.image, ...(project.gallery || [])].filter(Boolean);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + allImages.length) % allImages.length
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-dark pt-28 pb-20 relative overflow-hidden">
      {/* Fullscreen Image Modal */}
      {isFullscreen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsFullscreen(false)}
        >
          <motion.button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTimes size={24} />
          </motion.button>
          <img
            src={allImages[currentImageIndex]}
            alt={project.name}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          {allImages.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <FaChevronLeft size={20} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <FaChevronRight size={20} />
              </button>
            </>
          )}
        </motion.div>
      )}

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Button */}
        <motion.button
          onClick={onClose}
          className="mb-8 flex items-center gap-3 text-gray-300 hover:text-primary transition-colors duration-300 group"
          whileHover={{ x: -5 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <span className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
            <FaArrowLeft />
          </span>
          <span className="font-medium">Back to Projects</span>
        </motion.button>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Project Title & Badges - Above Image */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex flex-wrap gap-3">
              {project.isGroupProject && (
                <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm font-bold flex items-center gap-2 shadow-lg">
                  <FaUsers /> Group Project
                </span>
              )}
              {project.featured && (
                <span className="px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-full text-white text-sm font-bold flex items-center gap-2 shadow-lg">
                  <FaStar /> Featured
                </span>
              )}
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/20">
                {project.category}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {project.name}
            </h1>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-primary/20 border border-primary/30 rounded-full text-xs sm:text-sm text-primary backdrop-blur-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Main Image - Full Size */}
          <motion.div
            variants={itemVariants}
            className="relative rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl group"
          >
            <div
              className="relative w-full"
              style={{ minHeight: "400px", maxHeight: "600px" }}
            >
              <img
                src={allImages[currentImageIndex]}
                alt={project.name}
                className="w-full h-auto max-h-[600px] object-contain bg-gray-900/50"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/1200x600/06b6d4/FFFFFF?text=${encodeURIComponent(
                    project.name
                  )}`;
                }}
              />
            </div>

            {/* Image Controls Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* Fullscreen Button */}
              <motion.button
                onClick={() => setIsFullscreen(true)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaExpand />
              </motion.button>

              {/* Navigation Arrows */}
              {allImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  >
                    <FaChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  >
                    <FaChevronRight size={20} />
                  </button>
                </>
              )}

              {/* Image Counter */}
              {allImages.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm">
                  {currentImageIndex + 1} / {allImages.length}
                </div>
              )}
            </div>
          </motion.div>

          {/* Image Thumbnails Gallery */}
          {allImages.length > 1 && (
            <motion.div variants={itemVariants} className="space-y-3">
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <FaImages className="text-primary" /> Project Screenshots
              </h4>
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-primary/50 scrollbar-track-white/5">
                {allImages.map((img, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-32 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      currentImageIndex === index
                        ? "border-primary shadow-lg shadow-primary/30"
                        : "border-white/10 hover:border-white/30"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={img}
                      alt={`${project.name} screenshot ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[200px] px-6 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-3 group"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaExternalLinkAlt className="group-hover:rotate-12 transition-transform" />
              <span>View Live Demo</span>
            </motion.a>
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[200px] px-6 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-semibold hover:bg-white/10 hover:border-primary/50 transition-all duration-300 flex items-center justify-center gap-3 group"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaGithub className="text-xl group-hover:rotate-12 transition-transform" />
              <span>View Source Code</span>
            </motion.a>
          </motion.div>

          {/* Group Project Info */}
          {project.isGroupProject && (
            <motion.div
              variants={itemVariants}
              className="glass rounded-2xl p-6 sm:p-8 border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-pink-500/10"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <FaUsers />
                </span>
                Group Project Details
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.teamSize && (
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-gray-400 text-sm mb-1">Team Size</p>
                    <p className="text-white font-bold text-xl">
                      {project.teamSize} Members
                    </p>
                  </div>
                )}
                {project.myRole && (
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-gray-400 text-sm mb-1">My Role</p>
                    <p className="text-white font-bold text-xl flex items-center gap-2">
                      <FaUserTie className="text-primary" /> {project.myRole}
                    </p>
                  </div>
                )}
              </div>
              {project.myContributions &&
                project.myContributions.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <FaCode className="text-primary" /> My Contributions
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {project.myContributions.map((contribution, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 text-gray-300 bg-white/5 rounded-lg p-3"
                        >
                          <FaCheckCircle className="text-purple-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{contribution}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
            </motion.div>
          )}

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Description */}
            <motion.div
              variants={itemVariants}
              className="glass rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center text-primary">
                  📝
                </span>
                About the Project
              </h3>
              <p className="text-gray-300 leading-relaxed text-base">
                {project.fullDescription}
              </p>
            </motion.div>

            {/* Main Technologies */}
            <motion.div
              variants={itemVariants}
              className="glass rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center text-primary">
                  🛠️
                </span>
                Technology Stack
              </h3>
              <div className="space-y-3">
                {Object.entries(project.mainTech).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-primary/30 transition-all duration-300"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <h4 className="text-primary font-semibold capitalize mb-1 text-sm">
                      {key}
                    </h4>
                    <p className="text-gray-300 text-sm">{value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Features */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-primary/30 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                ✨
              </span>
              Key Features
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {(project.features || project.Features || []).map(
                (feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 text-gray-300 bg-white/5 rounded-xl p-4 border border-white/5 hover:border-green-500/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.05 }}
                  >
                    <FaCheckCircle className="text-green-400 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>

          {/* Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <motion.div
              variants={itemVariants}
              className="glass rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-orange-500/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500/20 to-yellow-500/20 flex items-center justify-center">
                  <FaLightbulb className="text-orange-400" />
                </span>
                Challenges Faced
              </h3>
              <div className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 text-gray-300 bg-white/5 rounded-xl p-4 border border-white/5"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <span className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </span>
                    <span>{challenge}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Future Improvements */}
          {project.improvements && project.improvements.length > 0 && (
            <motion.div
              variants={itemVariants}
              className="glass rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                  <FaRocket className="text-blue-400" />
                </span>
                Future Improvements
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.improvements.map((improvement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 text-gray-300 bg-white/5 rounded-xl p-4 border border-white/5 hover:border-blue-500/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.05 }}
                  >
                    <span className="text-blue-400 mt-0.5">▹</span>
                    <span>{improvement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Footer CTA */}
          <motion.div variants={itemVariants} className="text-center pt-8">
            <p className="text-gray-400 mb-4">Interested in this project?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Try it Live →
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;
