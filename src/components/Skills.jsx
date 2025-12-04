import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "../data/portfolioData";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const SkillBar = ({ skill, index }) => (
    <motion.div variants={itemVariants} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-gray-300 font-semibold">{skill.name}</span>
        <span className="text-purple-400 font-semibold">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );

  const skillCategories = [
    { title: "Frontend Development", skills: skills.frontend, icon: "🎨" },
    { title: "Backend Development", skills: skills.backend, icon: "⚙️" },
    { title: "Tools & Technologies", skills: skills.tools, icon: "🛠️" },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
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
              My{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Here are some of the technologies and tools I work with to bring
              ideas to life
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{category.icon}</span>
                  <h3 className="text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>
                <div>
                  {category.skills.map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      index={categoryIndex * 6 + index}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Tech Stack Icons */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-8">
              Technologies I've Worked With
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "React",
                "Node.js",
                "MongoDB",
                "Express",
                "JavaScript",
                "TypeScript",
                "HTML5",
                "CSS3",
                "Tailwind",
                "Git",
                "Firebase",
                "Next.js",
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-full text-gray-300 font-semibold"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ delay: 0.5 + index * 0.05 }}
                  whileHover={{ scale: 1.1, borderColor: "rgb(168, 85, 247)" }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
