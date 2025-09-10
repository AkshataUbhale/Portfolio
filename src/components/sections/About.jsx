import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/content';
import { useThemeStore } from '../../store/themeStore';

const About = () => {
  const { isDark } = useThemeStore();

  return (
    <section id="about" className={`py-20 ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-12 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className={`p-8 rounded-2xl ${
                isDark ? 'bg-gray-800' : 'bg-white'
              } shadow-xl`}
            >
              <p className={`text-lg leading-relaxed mb-6 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {personalInfo.bio}
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className={`p-4 rounded-lg ${
                  isDark ? 'bg-gray-700' : 'bg-gray-50'
                }`}>
                  <h3 className={`font-semibold mb-2 ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    Location
                  </h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                    {personalInfo.location}
                  </p>
                </div>
                
                <div className={`p-4 rounded-lg ${
                  isDark ? 'bg-gray-700' : 'bg-gray-50'
                }`}>
                  <h3 className={`font-semibold mb-2 ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    Focus
                  </h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                    Full Stack Development
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className={`p-6 rounded-xl ${
                isDark ? 'bg-blue-900/30 border border-blue-800' : 'bg-blue-50 border border-blue-200'
              }`}>
                <h3 className={`text-xl font-semibold mb-3 ${
                  isDark ? 'text-blue-300' : 'text-blue-700'
                }`}>
                  What I Do
                </h3>
                <ul className={`space-y-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <li>• Full Stack Web Development</li>
                  <li>• Machine Learning & AI Solutions</li>
                  <li>• UI/UX Design & Prototyping</li>
                  <li>• Mobile App Development</li>
                </ul>
              </div>

              <div className={`p-6 rounded-xl ${
                isDark ? 'bg-purple-900/30 border border-purple-800' : 'bg-purple-50 border border-purple-200'
              }`}>
                <h3 className={`text-xl font-semibold mb-3 ${
                  isDark ? 'text-purple-300' : 'text-purple-700'
                }`}>
                  Currently
                </h3>
                <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                  Pursuing B.Tech in Computer Science with specialization in AR/VR, 
                  while actively contributing to innovative tech projects and communities.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;