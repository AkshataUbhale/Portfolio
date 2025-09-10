import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code } from 'lucide-react';
import { personalInfo } from '../../data/content';
import { useThemeStore } from '../../store/themeStore';

const Footer = () => {
  const { isDark } = useThemeStore();

  return (
    <footer className={`py-8 border-t ${
      isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
    }`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          {/* Left side - Name and Year */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${
              isDark ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'
            }`}>
              AU
            </div>
            <span className={`font-semibold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              © 2025 {personalInfo.name}
            </span>
          </div>

          {/* Center - Made with love */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`flex items-center space-x-2 text-sm ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            } mb-4 md:mb-0`}
          >
            <span>Built with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
            </motion.div>
            <span>and</span>
            <Code className="w-4 h-4" />
            <span>using React</span>
          </motion.div>

          {/* Right side - Quick nav */}
          <div className={`text-sm ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <span>All rights reserved</span>
          </div>
        </motion.div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className={`mt-6 pt-6 border-t text-center text-sm ${
            isDark ? 'border-gray-800 text-gray-500' : 'border-gray-200 text-gray-500'
          }`}
        >
          Designed and developed with passion for creating exceptional digital experiences.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;