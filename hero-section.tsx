
'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Play, Book, Users, TrendingUp } from 'lucide-react';
import { heroContent } from '@/data/content';
import { useState, useEffect } from 'react';

const AnimatedCounter = ({ 
  target, 
  suffix = "", 
  duration = 2000,
  className = ""
}: { 
  target: number; 
  suffix?: string; 
  duration?: number;
  className?: string;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(target * easeOut));
      
      if (progress >= 1) {
        clearInterval(timer);
        setCount(target);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span className={className}>
      {count}{suffix}
    </span>
  );
};

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const backgroundImageUrl = "https://wallpapers.com/images/hd/calm-background-tpys4mpri3kvfyyo.jpg";

  return (
    <div className="hero-section relative">
      {/* Background with parallax effect */}
      <div className="hero-bg"></div>
      <div 
        className="parallax-bg opacity-20"
        style={{
          backgroundImage: `url("${backgroundImageUrl}")`
        }}
      ></div>
      <div className="hero-overlay"></div>
      
      {/* Content */}
      <div className="relative z-10 section-container text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-300 to-yellow-400 bg-clip-text text-transparent">
              {heroContent.title}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            {heroContent.subtitle}
          </p>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-5xl mx-auto">
            {heroContent.description}
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {heroContent.stats?.map?.((stat, index) => (
            <div key={index} className="glass-card p-6 text-center">
              <div className={`animated-counter ${stat.color} mb-2`}>
                {isVisible && (
                  <AnimatedCounter 
                    target={stat.number} 
                    suffix="%" 
                    duration={2500 + index * 200}
                  />
                )}
              </div>
              <p className="text-gray-700 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <button 
            onClick={() => document.getElementById('main-content')?.scrollIntoView({ behavior: 'smooth' })}
            className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-3 hover:scale-105 shadow-2xl hover:shadow-cyan-500/25"
          >
            <Book size={24} />
            התחל ללמוד עכשיו
            <ChevronDown className="group-hover:translate-y-1 transition-transform duration-300" size={20} />
          </button>
          
          <button className="group bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-3 hover:bg-white/20">
            <Play size={24} />
            סרטון הדרכה
          </button>
        </motion.div>

        {/* Quick Stats Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-wrap justify-center items-center gap-8 text-gray-300"
        >
          <div className="flex items-center gap-2">
            <Users size={20} className="text-cyan-400" />
            <span className="text-sm">+10,000 מטפלים משתמשים</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp size={20} className="text-green-400" />
            <span className="text-sm">יעילות מוכחת בקליניקה</span>
          </div>
          <div className="flex items-center gap-2">
            <Book size={20} className="text-yellow-400" />
            <span className="text-sm">מבוסס מחקר מדעי</span>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="text-white/70 w-8 h-8" />
        </motion.div>
      </div>
    </div>
  );
}
