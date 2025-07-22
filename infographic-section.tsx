
'use client';

import { motion } from 'framer-motion';
import { TrendingDown, AlertTriangle, Users, Clock, Target, Brain } from 'lucide-react';

const InfographicSection = () => {
  const dropoutStats = [
    { value: 30.4, label: "שיעור נשירה ממוצע", color: "text-red-500", bgColor: "bg-red-100" },
    { value: 30, label: "נושרים בחודש הראשון", color: "text-orange-500", bgColor: "bg-orange-100" },
    { value: 50, label: "נושרים תוך 3 חודשים", color: "text-amber-500", bgColor: "bg-amber-100" }
  ];

  const cravingFacts = [
    { icon: Brain, value: "70%", label: "חווים קרווינג קבוע", color: "text-blue-500" },
    { icon: Clock, value: "3-15", label: "דקות משך התפרצות", color: "text-green-500" },
    { icon: Target, value: "85%", label: "מהמקרים בטווח זה", color: "text-purple-500" }
  ];

  return (
    <section className="section-container bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">הבעיה</span> הקיימת
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          נתונים מדעיים על נשירה מטיפול וחומרת בעיית הקרווינג במטופלי התמכרויות
        </p>
      </motion.div>

      {/* Dropout Statistics */}
      <div className="mb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center mb-12"
        >
          <AlertTriangle className="text-red-500 ml-4" size={48} />
          <h3 className="text-3xl font-bold text-gray-900">סטטיסטיקות נשירה מטיפול</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dropoutStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-card p-8 text-center hover:shadow-2xl transition-all duration-500">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.bgColor} rounded-full mb-6`}>
                  <TrendingDown className={`${stat.color}`} size={32} />
                </div>
                <div className={`text-5xl md:text-6xl font-bold ${stat.color} mb-4`}>
                  {stat.value}%
                </div>
                <p className="text-gray-700 text-lg font-medium">{stat.label}</p>
                
                {/* Progress bar */}
                <div className="mt-6 bg-gray-200 rounded-full h-3">
                  <motion.div 
                    className={`h-3 rounded-full ${stat.color.replace('text-', 'bg-')}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.value}%` }}
                    transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Craving Facts */}
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 ml-4">עובדות על קרווינג</h3>
          <Brain className="text-blue-500" size={48} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cravingFacts.map((fact, index) => {
            const IconComponent = fact.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="glass-card p-8 hover:shadow-2xl transition-all duration-500 group">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className={`${fact.color}`} size={40} />
                  </div>
                  <div className={`text-4xl md:text-5xl font-bold ${fact.color} mb-4`}>
                    {fact.value}
                  </div>
                  <p className="text-gray-700 text-lg font-medium">{fact.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-3xl p-8 md:p-12 text-center"
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-6">הזמן לפעול הוא עכשיו</h3>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          עם הכלים הנכונים, ניתן להפחית משמעותית את שיעורי הנשירה ולשפר את תוצאות הטיפול
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('main-content')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            למד על הכלים
          </button>
          <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-colors duration-300">
            צור קשר לייעוץ
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default InfographicSection;
