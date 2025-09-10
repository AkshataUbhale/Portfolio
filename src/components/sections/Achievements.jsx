import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Users, Code } from 'lucide-react';
import { achievements } from '../../data/content';
import { useThemeStore } from '../../store/themeStore';

const Achievements = () => {
  const { isDark } = useThemeStore();

  const getIcon = (title) => {
    if (title.toLowerCase().includes('hackathon')) return Trophy;
    if (title.toLowerCase().includes('member')) return Users;
    if (title.toLowerCase().includes('representative')) return Award;
    return Code;
  };

  return (
    <section id="achievements" className={`py-20 ${
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
            Achievements & Extracurriculars
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = getIcon(achievement.title);
              
              return (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 50, rotateY: -10 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className={`p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                    isDark ? 'bg-gray-700' : 'bg-gray-50'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full ${
                      isDark ? 'bg-yellow-900' : 'bg-yellow-100'
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        isDark ? 'text-yellow-400' : 'text-yellow-600'
                      }`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className={`font-bold ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {achievement.title}
                        </h3>
                        <span className={`text-sm px-2 py-1 rounded ${
                          isDark ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700'
                        }`}>
                          {achievement.year}
                        </span>
                      </div>
                      
                      <p className={`text-sm ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <div className={`text-center p-6 rounded-xl ${
              isDark ? 'bg-blue-900/30' : 'bg-blue-50'
            }`}>
              <div className={`text-3xl font-bold mb-2 ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`}>
                4
              </div>
              <div className={`text-sm ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Hackathons Participated
              </div>
            </div>
            
            <div className={`text-center p-6 rounded-xl ${
              isDark ? 'bg-green-900/30' : 'bg-green-50'
            }`}>
              <div className={`text-3xl font-bold mb-2 ${
                isDark ? 'text-green-400' : 'text-green-600'
              }`}>
                1
              </div>
              <div className={`text-sm ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Hackathon Won
              </div>
            </div>
            
            <div className={`text-center p-6 rounded-xl ${
              isDark ? 'bg-purple-900/30' : 'bg-purple-50'
            }`}>
              <div className={`text-3xl font-bold mb-2 ${
                isDark ? 'text-purple-400' : 'text-purple-600'
              }`}>
                3
              </div>
              <div className={`text-sm ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Leadership Roles
              </div>
            </div>
            
            <div className={`text-center p-6 rounded-xl ${
              isDark ? 'bg-orange-900/30' : 'bg-orange-50'
            }`}>
              <div className={`text-3xl font-bold mb-2 ${
                isDark ? 'text-orange-400' : 'text-orange-600'
              }`}>
                8.33
              </div>
              <div className={`text-sm ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Current CGPA
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;