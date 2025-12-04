import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { experience } from "../data/portfolioData";

const Experience = () => {
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
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
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
              Work{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My professional journey and the roles I've taken on
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="max-w-5xl mx-auto">
            {experience.length > 0 ? (
              experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative mb-12 last:mb-0"
                >
                  {/* Timeline Line */}
                  {index < experience.length - 1 && (
                    <div className="absolute left-4 md:left-8 top-16 w-0.5 h-full bg-gradient-to-b from-purple-500 to-pink-600"></div>
                  )}

                  <div className="flex gap-6 md:gap-8">
                    {/* Timeline Icon */}
                    <motion.div
                      className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50 relative z-10"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <FaBriefcase className="text-white text-2xl" />
                    </motion.div>

                    {/* Content Card */}
                    <motion.div
                      className="flex-1 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group"
                      whileHover={{ y: -5, x: 5 }}
                    >
                      <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                            {exp.position}
                          </h3>
                          <p className="text-purple-400 font-semibold text-lg mt-1">
                            {exp.company}
                          </p>
                        </div>
                        <span className="px-4 py-2 bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/30 rounded-full text-sm font-semibold text-purple-300">
                          {exp.type}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex items-center gap-2 text-gray-400">
                          <FaCalendarAlt className="text-purple-400" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <FaMapMarkerAlt className="text-purple-400" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-white font-semibold mb-3">
                          Key Responsibilities:
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((responsibility, idx) => (
                            <motion.li
                              key={idx}
                              className="flex items-start gap-3 text-gray-300"
                              initial={{ opacity: 0, x: -20 }}
                              animate={
                                isInView
                                  ? { opacity: 1, x: 0 }
                                  : { opacity: 0, x: -20 }
                              }
                              transition={{ delay: 0.3 + idx * 0.1 }}
                            >
                              <span className="text-purple-400 mt-1">▹</span>
                              <span>{responsibility}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                variants={itemVariants}
                className="text-center bg-gray-800/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700/50"
              >
                <FaBriefcase className="text-6xl text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  Open to Opportunities
                </h3>
                <p className="text-gray-400 max-w-xl mx-auto">
                  I'm currently seeking new challenges and opportunities to
                  apply my skills. While building my professional experience,
                  I've been focusing on personal projects and continuous
                  learning.
                </p>
              </motion.div>
            )}
          </div>

          {/* Skills Highlight */}
          {experience.length > 0 && (
            <motion.div variants={itemVariants} className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-white mb-6">
                Professional Skills Gained
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Team Collaboration",
                  "Agile Development",
                  "Code Review",
                  "Problem Solving",
                  "Project Management",
                  "Client Communication",
                  "Technical Documentation",
                  "Mentoring",
                ].map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-gray-800/50 border border-purple-500/30 rounded-full text-gray-300 text-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ delay: 0.5 + index * 0.05 }}
                    whileHover={{
                      scale: 1.1,
                      borderColor: "rgb(168, 85, 247)",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
