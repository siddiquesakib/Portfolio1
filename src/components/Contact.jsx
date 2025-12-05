import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

const Contact = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const contactMethods = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone}`,
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      value: personalInfo.whatsapp,
      link: `https://wa.me/${personalInfo.whatsapp.replace(/[^0-9]/g, "")}`,
      color: "from-green-400 to-green-600",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: personalInfo.location,
      link: null,
      color: "from-red-500 to-pink-500",
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      value: "Connect on LinkedIn",
      link: personalInfo.social.linkedin,
      color: "from-blue-600 to-blue-800",
      external: true,
    },
    {
      icon: FaDiscord,
      title: "Discord",
      value: "Message on Discord",
      link: personalInfo.social.Discord,
      color: "from-indigo-500 to-purple-600",
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-16 bg-dark relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get In{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-6 border border-white/10"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {method.link ? (
                    <a
                      href={method.link}
                      target={
                        method.external || method.title === "WhatsApp"
                          ? "_blank"
                          : "_self"
                      }
                      rel={
                        method.external || method.title === "WhatsApp"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/5 hover:border-primary/30 transition-all duration-300 group"
                    >
                      <div
                        className={`w-10 h-10 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <method.icon className="text-white text-lg" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-400 text-xs">{method.title}</p>
                        <p className="text-white text-sm font-semibold truncate">
                          {method.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/5">
                      <div
                        className={`w-10 h-10 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center`}
                      >
                        <method.icon className="text-white text-lg" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-400 text-xs">{method.title}</p>
                        <p className="text-white text-sm font-semibold truncate">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
