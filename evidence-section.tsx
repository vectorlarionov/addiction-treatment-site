
'use client';

import { motion } from 'framer-motion';
import { Microscope, Pill, Brain, CheckCircle, Star, Award } from 'lucide-react';
import { evidenceBasedInterventions, keyTakeaways } from '@/data/content';
import Image from 'next/image';

const EvidenceSection = () => {
  return (
    <section className="section-container bg-gradient-to-br from-slate-50 to-indigo-50">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center mb-6">
          <Microscope className="text-blue-600 ml-4" size={48} />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            התערבויות <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">מבוססות ראיות</span>
          </h2>
        </div>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          גישות טיפוליות מוכחות מדעית המשלבות כלים פסיכולוגיים ותרופתיים לטיפול יעיל בהתמכרויות
        </p>
      </motion.div>

      {/* Evidence-Based Interventions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {evidenceBasedInterventions?.map?.((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, x: categoryIndex === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-8">
              {categoryIndex === 0 ? (
                <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl">
                  <Brain className="text-white" size={32} />
                </div>
              ) : (
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl">
                  <Pill className="text-white" size={32} />
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
            </div>

            <div className="space-y-6">
              {category.interventions?.map?.((intervention, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-6 border-r-4 border-r-blue-500 hover:shadow-md transition-shadow duration-300"
                >
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{intervention.name}</h4>
                  <p className="text-gray-600 leading-relaxed">{intervention.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Success Stories Visualization */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl p-8 md:p-12 text-white mb-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <Image 
            src="https://thumbs.dreamstime.com/b/diverse-happy-people-sitting-trust-circle-therapy-session-psychological-support-group-discussing-their-achievement-recovery-311509187.jpg"
            alt="Success story background"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="relative z-10 text-center">
          <div className="flex items-center justify-center mb-6">
            <Award className="ml-4" size={48} />
            <h3 className="text-3xl md:text-4xl font-bold">תוצאות מוכחות</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">+40%</div>
              <p className="text-lg opacity-90">שיפור בהישארות בטיפול</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">65%</div>
              <p className="text-lg opacity-90">הפחתה בעוצמת קרווינג</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">+10K</div>
              <p className="text-lg opacity-90">מטפלים משתמשים</p>
            </div>
          </div>
          
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            מחקרים קליניים מראים שילוב הכלים מוביל לשיפור משמעותי בתוצאות הטיפול ואיכות החיים של המטופלים
          </p>
        </div>
      </motion.div>

      {/* Key Takeaways */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          נקודות מפתח <span className="text-blue-600">לזכירה</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyTakeaways?.map?.((takeaway, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="text-white" size={20} />
                </div>
                <p className="text-gray-700 leading-relaxed font-medium">{takeaway}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EvidenceSection;
