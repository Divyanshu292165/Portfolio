import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const TechStack: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const technologies = [
    { 
      name: 'React', 
      color: 'from-blue-400 to-cyan-400',
      category: 'Frontend',
      proficiency: 58,
      icon: '⚛️'
    },
    { 
      name: 'TypeScript', 
      color: 'from-blue-600 to-blue-800',
      category: 'Language',
      proficiency: 44,
      icon: '📘'
    },
    { 
      name: 'Node.js', 
      color: 'from-green-400 to-green-600',
      category: 'Backend',
      proficiency: 53,
      icon: '🟢'
    },
    { 
      name: 'Python', 
      color: 'from-yellow-400 to-yellow-600',
      category: 'Language',
      proficiency: 49,
      icon: '🐍'
    },
    { 
      name: 'MongoDB', 
      color: 'from-green-500 to-green-700',
      category: 'Database',
      proficiency: 41,
      icon: '🍃'
    },
    { 
      name: 'PostgreSQL', 
      color: 'from-blue-500 to-blue-700',
      category: 'Database',
      proficiency: 60,
      icon: '🐘'
    },
    { 
      name: 'AWS', 
      color: 'from-orange-400 to-orange-600',
      category: 'Cloud',
      proficiency: 46,
      icon: '☁️'
    },
    { 
      name: 'Tailwind CSS', 
      color: 'from-teal-400 to-teal-600',
      category: 'Styling',
      proficiency: 55,
      icon: '🎨'
    },
  ];

  const categories = [...new Set(technologies.map(tech => tech.category))];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      rotateY: -30,
      opacity: 0,
    },
    visible: {
      rotateY: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="py-32 bg-gradient-to-b from-gray-800 via-gray-900 to-black relative overflow-hidden" ref={ref}>
      {/* Animated Background Grid */}
      <div className="absolute inset-0 data-grid opacity-5" />
      
      {/* Floating Orbs */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, ${
                ['rgba(59,130,246,0.1)', 'rgba(139,92,246,0.1)', 'rgba(236,72,153,0.1)'][i % 3]
              } 0%, transparent 70%)`,
              left: `${20 + (i % 3) * 30}%`,
              top: `${10 + (i % 2) * 70}%`,
            }}
            animate={{
              x: [0, 50, -30, 0],
              y: [0, -30, 40, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants}>
            <motion.h2
              className="text-5xl md:text-7xl font-black text-white mb-6 section-title"
              style={{
                background: 'linear-gradient(45deg, #06b6d4, #8b5cf6, #ec4899)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Tech Arsenal
            </motion.h2>
            
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-8 rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 128 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            />
            
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              Cutting-edge technologies and frameworks I use to build exceptional digital experiences
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Category Filters */}
        <div
          className="flex gap-4 mb-16 z-20 relative overflow-x-auto whitespace-nowrap scroll-smooth no-scrollbar justify-start md:justify-center"
        >
          {categories.map((category, index) => (
            <div
              key={category}
              className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300 cursor-pointer"
            >
              {category}
            </div>
          ))}
        </div>

        {/* Tech Grid with 3D Cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 min-h-[500px] mt-10 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          style={{ perspective: '1200px' }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={cardVariants}
              className="group relative"
              whileHover={{ 
                y: -10,
                rotateY: 8,
                rotateX: 4,
                scale: 1.05,
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Card Background with Holographic Effect */}
              <motion.div
                className={`relative overflow-hidden bg-gradient-to-br ${tech.color} p-6 rounded-2xl shadow-2xl backdrop-blur-sm border border-white/10`}
                whileHover={{
                  boxShadow: "0 25px 50px rgba(0,0,0,0.3), 0 0 30px rgba(255,255,255,0.1)",
                }}
              >
                {/* Holographic scan line */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Tech Icon */}
                <motion.div
                  className="text-4xl mb-4 text-center"
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {tech.icon}
                </motion.div>
                
                {/* Tech Name */}
                <motion.h3
                  className="text-white font-bold text-lg text-center mb-3"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  {tech.name}
                </motion.h3>
                
                {/* Proficiency Bar */}
                <div className="relative">
                  <div className="flex justify-between text-sm text-white/80 mb-2">
                    <span>{tech.category}</span>
                    <span>{tech.proficiency}%</span>
                  </div>
                  
                  <div className="h-2 bg-black/20 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-white/80 rounded-full relative"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${tech.proficiency}%` } : {}}
                      transition={{ 
                        duration: 1.5, 
                        delay: 0.5 + index * 0.1,
                        ease: "easeOut" 
                      }}
                    >
                      {/* Animated glow */}
                      <motion.div
                        className="absolute inset-0 bg-white rounded-full opacity-60 blur-sm"
                        animate={{
                          opacity: [0.6, 1, 0.6],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
                
                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white/60 rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${20 + i * 10}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.6, 1, 0.6],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </motion.div>
              
              {/* 3D Shadow */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-2xl blur-xl opacity-30 -z-10`}
                style={{ transform: 'translateZ(-20px) scale(0.95)' }}
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Code Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`floating-code-${i}`}
              className="absolute text-blue-400/20 font-mono text-sm"
              style={{
                left: `${10 + i * 12}%`,
                top: `${15 + (i % 4) * 25}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 6 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            >
              {['<div>', 'function()', '{ }', 'const', 'return', 'async', 'await', 'export'][i]}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;