import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { education } from '../../data/content';
import { useThemeStore } from '../../store/themeStore';

const Education = () => {
  const { isDark } = useThemeStore();

  return (
    <section id="education" className={`py-20 ${
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
            Education
          </h2>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-start space-x-4 mb-4 md:mb-0">
                    <div className={`p-3 rounded-full ${
                      isDark ? 'bg-blue-900' : 'bg-blue-100'
                    }`}>
                      <GraduationCap className={`w-6 h-6 ${
                        isDark ? 'text-blue-400' : 'text-blue-600'
                      }`} />
                    </div>
                    
                    <div>
                      <h3 className={`text-xl font-bold ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {edu.degree}
                      </h3>
                      {edu.specialization && (
                        <p className={`text-lg ${
                          isDark ? 'text-blue-400' : 'text-blue-600'
                        }`}>
                          {edu.specialization}
                        </p>
                      )}
                      <p className={`text-lg font-medium ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-start md:items-end space-y-2">
                    <div className={`flex items-center space-x-2 text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      <Calendar size={16} />
                      <span>{edu.duration}</span>
                    </div>
                    
                    <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      isDark ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-700'
                    }`}>
                      {edu.grade}
                    </div>
                    
                    {edu.status && (
                      <div className={`px-3 py-1 rounded-full text-xs ${
                        isDark ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {edu.status}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;