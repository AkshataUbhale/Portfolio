
import React from "react";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Twitter, ChevronDown } from "lucide-react";
import { personalInfo } from "../../data/content";
import { useThemeStore } from "../../store/themeStore";
import ProfileCard from "./ProfileCard";  
import PixelBlast from './PixelBlast';

const Hero = () => {
  const { isDark } = useThemeStore();

  const scrollToAbout = () => {
    document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className={`min-h-screen flex items-center justify-center relative ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
          : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
      }`}
    >

      <div className="container mx-auto px-6 py-20">
        {/* Main Flex Container for two-column layout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Column: Text and Buttons */}
          <div className="md:w-1/2 text-center md:text-left">
            {/* Name and Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <h1
                className={`text-5xl md:text-7xl font-bold mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {personalInfo.name}
              </h1>
              <h2
                className={`text-2xl md:text-3xl font-light mb-2 ${
                  isDark ? "text-blue-300" : "text-blue-600"
                }`}
              >
                {personalInfo.title}
              </h2>
              <p
                className={`text-lg md:text-xl ${
                  isDark ? "text-gray-300" : "text-gray-600"
                } max-w-2xl mx-auto md:mx-0`}
              >
                {personalInfo.subtitle}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-12"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.resumeUrl}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 shadow-lg transition-all duration-200"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .querySelector("#contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className={`px-8 py-4 rounded-lg font-semibold transition-all duration-200 border-2 ${
                  isDark
                    ? "border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                }`}
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center md:justify-start space-x-6 mb-16"
            >
              {/* ... your social link <motion.a> tags go here ... */}
            </motion.div>
          </div>

          {/* Right Column: Profile Card */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
            <div className="md:w-3/4 flex justify-center md:justify-end">
                <ProfileCard />
              </div>
            </motion.div>
          </div>

        </div>

        {/* Scroll Indicator (moved outside the flex container to center it) */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToAbout}
                className={`animate-bounce ${
                isDark
                    ? "text-gray-400 hover:text-gray-200"
                    : "text-gray-500 hover:text-gray-700"
                }`}
            >
                <ChevronDown size={32} />
            </motion.button>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-10 ${
            isDark ? "bg-blue-400" : "bg-blue-200"
          }`}
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-10 ${
            isDark ? "bg-purple-400" : "bg-purple-200"
          }`}
        />
      </div>
    </section>
  );
};

export default Hero;
