import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../../data/content';
import { useThemeStore } from '../../store/themeStore';

const Projects = () => {
  const { isDark } = useThemeStore();

  return (
    <section id="projects" className={`py-20 ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
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
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <h3 className={`text-2xl font-bold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.name}
                  </h3>
                  
                  <div className="flex space-x-2">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg transition-colors ${
                        isDark
                          ? 'hover:bg-gray-700 text-gray-400 hover:text-white'
                          : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>

                <p className={`text-lg mb-6 leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className={`font-semibold mb-3 ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    Key Features:
                  </h4>
                  <ul className={`space-y-1 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-sm font-medium rounded-full ${
                        isDark
                          ? 'bg-gray-700 text-gray-300 border border-gray-600'
                          : 'bg-gray-100 text-gray-700 border border-gray-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;