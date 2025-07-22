
'use client';

import { motion } from 'framer-motion';
import { Download, FileText, Video, Smartphone, BookOpen, Users, Clock, Target } from 'lucide-react';
import Image from 'next/image';

const PracticalTools = () => {
  const tools = [
    {
      title: "יומן עבודה עצמית",
      description: "טופס מובנה לתיעוד יומי של דחפים והתמודדות",
      icon: FileText,
      color: "from-blue-500 to-cyan-500",
      image: "https://cdn.pixabay.com/photo/2024/06/10/21/32/journal-8821428_1280.jpg",
      features: ["תיעוד דחפים", "מעקב עוצמה", "רישום פעולות", "הערכת תוצאות"],
      action: "הורד טופס"
    },
    {
      title: "אפליקציית תזכורות",
      description: "כלי דיגיטלי לתזכורות יומיות ומעקב התקדמות",
      icon: Smartphone,
      color: "from-green-500 to-emerald-500", 
      image: "https://img.freepik.com/premium-photo/person-holding-smartphone-enjoying-social-media_931022-4867.jpg",
      features: ["תזכורות יומיות", "מעקב סטטיסטיקות", "טיפים מהירים", "חיבור לתמיכה"],
      action: "הורד אפליקציה"
    },
    {
      title: "סרטוני הדרכה",
      description: "מדריכים חזותיים לכל אחד מ-8 השלבים",
      icon: Video,
      color: "from-purple-500 to-pink-500",
      image: "https://www.mattersofmymind.com/wp-content/uploads/2024/03/Deep-breathing-exercises.jpg", 
      features: ["הדרכה חזותית", "תרגולים מעשיים", "דוגמאות אמיתיות", "עדכונים שוטפים"],
      action: "צפה בסרטונים"
    },
    {
      title: "קהילת תמיכה",
      description: "פלטפורמה לחיבור עם מטופלים ומטפלים אחרים",
      icon: Users,
      color: "from-orange-500 to-red-500",
      image: "https://thumbs.dreamstime.com/b/diverse-happy-people-sitting-trust-circle-therapy-session-psychological-support-group-discussing-their-achievement-recovery-311509187.jpg",
      features: ["קבוצות תמיכה", "פורומים מקצועיים", "שיתוף חוויות", "ייעוץ עמיתים"],
      action: "הצטרף לקהילה"
    }
  ];

  const quickTips = [
    {
      icon: Clock,
      title: "טכניקת 3-5-7",
      description: "נשום פנימה 3 שניות, החזק 5 שניות, נשוף החוצה 7 שניות",
      color: "text-blue-500"
    },
    {
      icon: Target,
      title: "הערכה מהירה",
      description: "דרג את עוצמת הדחף מ-0 עד 10 לפני ואחרי כל טכניקה",
      color: "text-green-500"
    },
    {
      icon: BookOpen,
      title: "ביטויים חיוביים",
      description: "הכן 5 משפטים מחזקים מראש לשימוש ברגעי דחף",
      color: "text-purple-500"
    }
  ];

  return (
    <section className="section-container bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          כלים <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">מעשיים</span> ליישום
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          משאבים דיגיטליים וכלים פרקטיים להטמעת השיטות בחיי היומיום
        </p>
      </motion.div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {tools.map((tool, index) => {
          const IconComponent = tool.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden relative"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${tool.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{tool.title}</h3>
                    <p className="text-gray-600">{tool.description}</p>
                  </div>
                </div>

                {/* Image */}
                <div className="relative h-48 bg-gray-100 rounded-xl overflow-hidden mb-6">
                  <Image 
                    src={tool.image}
                    alt={tool.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {tool.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <button className={`w-full bg-gradient-to-r ${tool.color} text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 group-hover:scale-105`}>
                  <Download size={20} />
                  {tool.action}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Quick Tips */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
      >
        <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
          טיפים <span className="text-blue-600">מהירים</span> לשימוש יומיומי
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quickTips.map((tip, index) => {
            const IconComponent = tip.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4 group-hover:bg-gray-200 transition-colors duration-300`}>
                  <IconComponent className={`${tip.color}`} size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{tip.title}</h4>
                <p className="text-gray-600 leading-relaxed">{tip.description}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default PracticalTools;
