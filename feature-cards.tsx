
'use client';

import { motion } from 'framer-motion';
import { Brain, Target, ClipboardCheck, Shield, ArrowLeft } from 'lucide-react';
import { mainFeatures } from '@/data/content';
import { useState } from 'react';
import Image from 'next/image';

const iconMap = {
  Brain,
  Target, 
  ClipboardCheck,
  Shield
};

interface FeatureModalProps {
  feature: typeof mainFeatures[0];
  isOpen: boolean;
  onClose: () => void;
}

const FeatureModal = ({ feature, isOpen, onClose }: FeatureModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="relative">
          {/* Header with image */}
          <div className="relative h-64 bg-gradient-to-br from-blue-600 to-purple-700 rounded-t-3xl overflow-hidden">
            <div className="absolute inset-0 bg-black/30"></div>
            <Image 
              src={feature.image} 
              alt={feature.title}
              fill
              className="object-cover"
              priority
            />
            <button 
              onClick={onClose}
              className="absolute top-4 left-4 bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/30 transition-colors"
            >
              <ArrowLeft size={24} />
            </button>
            <div className="absolute bottom-6 right-6 text-white">
              <h2 className="text-4xl font-bold mb-2">{feature.title}</h2>
              <p className="text-xl text-gray-200">{feature.description}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">סקירה כללית</h3>
              <p className="text-lg text-gray-700 leading-relaxed">{feature.details.overview}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">נקודות מפתח</h4>
                <ul className="space-y-3">
                  {feature.details.keyPoints?.map?.((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Special content based on feature type */}
              {feature.id === 'craving-work' && feature.details.stages && (
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">8 שלבי העבודה העצמית</h4>
                  <div className="space-y-4">
                    {feature.details.stages.slice(0, 4).map((stage) => (
                      <div key={stage.id} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {stage.id}
                          </div>
                          <h5 className="font-semibold text-gray-900">{stage.title}</h5>
                        </div>
                        <p className="text-sm text-gray-600 mr-11">{stage.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {feature.id === 'swcm-assessment' && feature.details.blocks && (
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">בלוקי השאלון</h4>
                  <div className="space-y-3">
                    {feature.details.blocks.map((block) => (
                      <div key={block.id} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                            {block.id}
                          </div>
                          <h5 className="font-semibold text-gray-900">{block.title}</h5>
                        </div>
                        <p className="text-sm text-gray-600 mr-11">{block.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Full stages for craving work */}
            {feature.id === 'craving-work' && feature.details.stages && (
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-6">השלבים המלאים</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {feature.details.stages.map((stage) => (
                    <div key={stage.id} className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-5 rounded-xl">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                          {stage.id}
                        </div>
                        <h5 className="font-bold text-gray-900 text-lg">{stage.title}</h5>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{stage.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Interpretation for SWCM */}
            {feature.id === 'swcm-assessment' && feature.details.interpretation && (
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-6">פרשנות התוצאות</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {feature.details.interpretation.map((item, index) => (
                    <div key={index} className="bg-gray-50 border-r-4 border-r-gray-400 p-4 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-bold text-lg">{item.range}</span>
                        <span className={`font-semibold ${item.color}`}>{item.level}</span>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function FeatureCards() {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  return (
    <section id="main-content" className="section-container bg-gradient-to-br from-gray-50 to-blue-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          כלים מבוססי <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">מחקר</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          ארבעה כלים עיקריים לטיפול יעיל בהתמכרות, מניעת נשירה ושיפור תוצאות הטיפול
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {mainFeatures?.map?.((feature, index) => {
          const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
          
          return (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              onClick={() => setSelectedFeature(index)}
              className="feature-card relative overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-lg`}>
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                </div>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {feature.description}
                </p>
                
                {/* Preview image */}
                <div className="relative h-48 bg-gray-100 rounded-xl overflow-hidden mb-6 group">
                  <Image 
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 font-medium">לחץ לפרטים נוספים</span>
                  <ArrowLeft className="text-gray-400 group-hover:text-blue-600 group-hover:-translate-x-2 transition-all duration-300" size={20} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal */}
      {selectedFeature !== null && (
        <FeatureModal 
          feature={mainFeatures[selectedFeature]}
          isOpen={true}
          onClose={() => setSelectedFeature(null)}
        />
      )}
    </section>
  );
}
