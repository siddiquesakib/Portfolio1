import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { education } from "../data/portfolioData";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="education"
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(45deg, white 25%, transparent 25%, transparent 75%, white 75%, white), linear-gradient(45deg, white 25%, transparent 25%, transparent 75%, white 75%, white)",
            backgroundSize: "60px 60px",
            backgroundPosition: "0 0, 30px 30px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Educational{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Background
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My academic journey and qualifications
            </p>
          </motion.div>

          {/* Education Timeline */}
          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                className="relative mb-12 last:mb-0"
              >
                {/* Timeline Line */}
                {index < education.length - 1 && (
                  <div className="absolute left-4 md:left-1/2 top-16 w-0.5 h-full bg-gradient-to-b from-purple-500 to-pink-600 transform md:-translate-x-1/2"></div>
                )}

                <div
                  className={`flex flex-col md:flex-row gap-8 items-start md:items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <motion.div
                    className="flex-1 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                          {edu.degree}
                        </h3>
                        <p className="text-purple-400 font-semibold mt-2">
                          {edu.institution}
                        </p>
                      </div>
                      <span className="px-4 py-2 bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/30 rounded-full text-sm font-semibold text-purple-300">
                        {edu.grade}
                      </span>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-gray-400">
                        <FaCalendarAlt className="text-purple-400" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <FaMapMarkerAlt className="text-purple-400" />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                      {edu.description}
                    </p>
                  </motion.div>

                  {/* Timeline Icon */}
                  <motion.div
                    className="hidden md:flex w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full items-center justify-center shadow-lg shadow-purple-500/50 flex-shrink-0"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FaGraduationCap className="text-white text-2xl" />
                  </motion.div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Certifications Section (Optional) */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">
              Certifications & Courses
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "React Developer Certification",
                "Full Stack Web Development",
                "JavaScript ES6+",
                "MongoDB University",
              ].map((cert, index) => (
                <motion.div
                  key={cert}
                  className="px-6 py-3 bg-gray-800/50 border border-purple-500/30 rounded-lg text-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, borderColor: "rgb(168, 85, 247)" }}
                >
                  {cert}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
