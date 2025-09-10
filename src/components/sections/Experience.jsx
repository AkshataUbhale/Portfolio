import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { experience } from '../../data/content';
import { useThemeStore } from '../../store/themeStore';

const Experience = () => {
  const { isDark } = useThemeStore();

  return (
    <section id="experience" className={`py-20 ${
      isDark ? 'bg-gray-800' : 'bg-white'
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
            Experience
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${
              isDark ? 'bg-gray-600' : 'bg-gray-300'
            } md:left-1/2 md:transform md:-translate-x-1/2`} />

            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute w-4 h-4 rounded-full ${
                  isDark ? 'bg-blue-500' : 'bg-blue-600'
                } left-6 top-6 md:left-1/2 md:transform md:-translate-x-1/2`} />

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 p-6 rounded-xl shadow-lg ${
                  isDark ? 'bg-gray-700' : 'bg-white'
                } hover:shadow-xl transition-shadow duration-300`}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className={`text-xl font-bold ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {exp.role}
                      </h3>
                      <p className={`text-lg font-semibold ${
                        isDark ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        {exp.company}
                      </p>
                    </div>
                    
                    <div className={`flex flex-col items-start md:items-end space-y-1 text-sm ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className={`space-y-2 mb-4 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 flex-shrink-0" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          isDark
                            ? 'bg-blue-900 text-blue-300 border border-blue-800'
                            : 'bg-blue-100 text-blue-700 border border-blue-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
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

export default Experience;