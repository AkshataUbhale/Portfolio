import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { personalInfo } from '../../data/content';
import { useThemeStore } from '../../store/themeStore';

const Contact = () => {
  const { isDark } = useThemeStore();

  const contactInfo = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: personalInfo.social.github },
    { icon: Linkedin, label: 'LinkedIn', href: personalInfo.social.linkedin },
    { icon: Twitter, label: 'Twitter', href: personalInfo.social.twitter }
  ];

  return (
    <section id="contact" className={`py-20 ${
      isDark ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' 
             : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Get In Touch
          </h2>
          
          <p className={`text-xl mb-12 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            I'm always open to discussing new opportunities, interesting projects, 
           and collaborations. Feel free to reach out!
          </p>

          {/* Contact Information */}
          <div className="grid md:grid-cols-1 gap-8 mb-12">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              const content = (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className={`p-6 rounded-2xl transition-all duration-300 ${
                    isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
                  } shadow-lg hover:shadow-xl`}
                >
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    isDark ? 'bg-blue-600' : 'bg-blue-100'
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      isDark ? 'text-white' : 'text-blue-600'
                    }`} />
                  </div>
                  
                  <h3 className={`font-semibold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {contact.label}
                  </h3>
                  
                  <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                    {contact.value}
                  </p>
                </motion.div>
              );

              return contact.href ? (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="block"
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {content}
                </a>
              ) : (
                <div key={contact.label}>
                  {content}
                </div>
              );
            })}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6 mb-12"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-full transition-all duration-300 ${
                    isDark
                      ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white'
                      : 'bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900'
                  } shadow-lg hover:shadow-xl`}
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className={`p-8 rounded-2xl ${
              isDark ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-gray-600' 
                     : 'bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200'
            }`}
          >
            <h3 className={`text-2xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Let's Build Something Amazing Together
            </h3>
            
            <p className={`mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Whether you have a project in mind or just want to connect, 
              I'd love to hear from you!
            </p>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg"
            >
              <Mail size={20} />
              <span>Send me an email</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
