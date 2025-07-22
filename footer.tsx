
'use client';

import { motion } from 'framer-motion';
import { Brain, Mail, Phone, MapPin, ExternalLink, Heart, Award, Users } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'כלים עיקריים', href: '#main-content' },
    { label: 'סטטיסטיקות', href: '#statistics' },
    { label: 'מחקר ראיות', href: '#evidence' },
    { label: 'כלים מעשיים', href: '#tools' }
  ];

  const resources = [
    { label: 'יומן עבודה עצמית', href: '#' },
    { label: 'מפת טריגרים', href: '#' },
    { label: 'שאלון SWCM-Q', href: '#' },
    { label: 'מדריכים למטפלים', href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl">
                  <Brain className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">טיפול בהתמכרות</h3>
                  <p className="text-gray-300 text-sm">פתרונות מבוססי מחקר</p>
                </div>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-300 mb-6 leading-relaxed"
              >
                פלטפורמה מקיפה המציעה כלים מבוססי ראיות למטפלים ומטופלים בתחום ההתמכרויות
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 text-sm text-gray-300"
              >
                <div className="flex items-center gap-2">
                  <Heart className="text-red-400" size={16} />
                  <span>דר' קונסטנטין לריאונוב</span>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-xl font-bold mb-6"
              >
                ניווט מהיר
              </motion.h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <ExternalLink className="group-hover:scale-110 transition-transform duration-300" size={16} />
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-xl font-bold mb-6"
              >
                משאבים
              </motion.h4>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={resource.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <ExternalLink className="group-hover:scale-110 transition-transform duration-300" size={16} />
                      {resource.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact & Stats */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-xl font-bold mb-6"
              >
                יצירת קשר
              </motion.h4>
              
              <div className="space-y-4 mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <Mail className="text-cyan-400" size={18} />
                  <span className="text-sm">info@addiction-treatment.com</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <Phone className="text-cyan-400" size={18} />
                  <span className="text-sm">03-1234567</span>
                </motion.div>
              </div>

              {/* Mini Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4"
              >
                <h5 className="font-semibold mb-3 flex items-center gap-2">
                  <Award className="text-yellow-400" size={18} />
                  השפעה בקהילה
                </h5>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">+10K</div>
                    <div className="text-xs text-gray-300">מטפלים</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">40%+</div>
                    <div className="text-xs text-gray-300">שיפור</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-between items-center gap-4"
            >
              <div className="text-gray-400 text-sm text-center md:text-right">
                © {currentYear} כלים לטיפול בהתמכרות. כל הזכויות שמורות. 
                <span className="mr-2">•</span>
                <span className="text-cyan-400">מבוסס מחקר מדעי</span>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <Users className="text-blue-400" size={16} />
                  פלטפורמה מקצועית
                </span>
                <span className="flex items-center gap-2">
                  <Heart className="text-red-400" size={16} />
                  יוני 2025
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
