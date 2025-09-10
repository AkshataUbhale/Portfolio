import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/content';
import { useThemeStore } from '../../store/themeStore';

const Skills = () => {
  const { isDark } = useThemeStore();

  const skillCategories = [
    { title: 'Languages', items: skills.languages, color: 'blue' },
    { title: 'Frontend', items: skills.frontend, color: 'green' },
    { title: 'Backend', items: skills.backend, color: 'purple' },
    { title: 'Databases', items: skills.databases, color: 'orange' },
    { title: 'Tools', items: skills.tools, color: 'pink' },
    { title: 'Specializations', items: skills.specializations, color: 'teal' }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: isDark 
        ? 'bg-blue-900/30 text-blue-300 border-blue-800' 
        : 'bg-blue-100 text-blue-700 border-blue-200',
      green: isDark 
        ? 'bg-green-900/30 text-green-300 border-green-800' 
        : 'bg-green-100 text-green-700 border-green-200',
      purple: isDark 
        ? 'bg-purple-900/30 text-purple-300 border-purple-800' 
        : 'bg-purple-100 text-purple-700 border-purple-200',
      orange: isDark 
        ? 'bg-orange-900/30 text-orange-300 border-orange-800' 
        : 'bg-orange-100 text-orange-700 border-orange-200',
      pink: isDark 
        ? 'bg-pink-900/30 text-pink-300 border-pink-800' 
        : 'bg-pink-100 text-pink-700 border-pink-200',
      teal: isDark 
        ? 'bg-teal-900/30 text-teal-300 border-teal-800' 
        : 'bg-teal-100 text-teal-700 border-teal-200'
    };
    return colors[color];
  };

  return (
    <section id="skills" className={`py-20 ${
      isDark ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-12 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl ${
                  isDark ? 'bg-gray-700' : 'bg-gray-50'
                } hover:shadow-lg transition-shadow duration-300`}
              >
                <h3 className={`text-xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: (categoryIndex * 0.1) + (skillIndex * 0.05) 
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 py-2 text-sm font-medium rounded-lg border ${
                        getColorClasses(category.color)
                      } transition-transform duration-200`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className={`mt-12 p-8 rounded-2xl text-center ${
              isDark ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-gray-600' 
                     : 'bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200'
            }`}
          >
            <p className={`text-lg ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Passionate about learning new technologies and building scalable, 
              user-friendly applications that solve real-world problems.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;