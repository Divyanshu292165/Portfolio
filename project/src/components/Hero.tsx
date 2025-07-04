import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useMotionValue, useTransform, useScroll } from 'framer-motion';
import { Download, Mail, Github, Linkedin, Zap, Code2, Sparkles, Brain, Rocket } from 'lucide-react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullTexts = [
    "Hello, I'm Divyanshu Shukla",
    "Frontend Developer",
    "AI Enthusiast", 
    "Future Innovator"
  ];
  
  const controls = useAnimation();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Profile image transforms based on scroll
  const profileScale = useTransform(scrollY, [0, 300], [1, 0.6]);
  const profileY = useTransform(scrollY, [0, 300], [0, -50]);
  const profileOpacity = useTransform(scrollY, [0, 200], [1, 0.8]);

  useEffect(() => {
    let index = 0;
    const currentText = fullTexts[currentIndex];
    
    const timer = setInterval(() => {
      setText(currentText.slice(0, index));
      index++;
      
      if (index > currentText.length) {
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % fullTexts.length);
          setText('');
          index = 0;
        }, 1500);
      }
    }, 80);
    
    return () => clearInterval(timer);
  }, [currentIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 8,
      },
    },
  };

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Ultra-futuristic background */}
      <div className="absolute inset-0">
        {/* Quantum particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`quantum-${i}`}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Energy streams */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`stream-${i}`}
            className="absolute w-px h-32 bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-60"
            style={{
              left: `${10 + i * 12}%`,
              top: '-10%',
            }}
            animate={{
              y: ['0vh', '120vh'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 1.5,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear",
            }}
          />
        ))}

        {/* Holographic grid */}
        <motion.div
          className="absolute inset-0 neural-grid opacity-20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <motion.div
        className="container mx-auto px-6 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Large Stable Profile Picture */}
        <motion.div
          className="relative mx-auto mb-8"
          variants={itemVariants}
          style={{
            scale: profileScale,
            y: profileY,
            opacity: profileOpacity,
          }}
        >
          <motion.div
            className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-1 mx-auto"
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-black">
              <img 
                src="/profile.jpg" 
                alt="Divyanshu Shukla"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center"><svg class="w-20 h-20 text-cyan-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>';
                }}
              />
            </div>
          </motion.div>
          
          {/* Orbital rings */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 border border-cyan-400/30 rounded-full"
              style={{
                width: `${120 + i * 25}%`,
                height: `${120 + i * 25}%`,
                left: `${-10 - i * 12.5}%`,
                top: `${-10 - i * 12.5}%`,
              }}
              animate={{
                rotate: i % 2 === 0 ? 360 : -360,
              }}
              transition={{
                duration: 8 + i * 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </motion.div>

        {/* Glassmorphic Name Container */}
        <motion.div 
          variants={itemVariants} 
          className="mb-8 relative"
        >
          <motion.div
            className="glass-morphism-ultra rounded-3xl p-8 mb-6 backdrop-blur-xl border border-white/20 shadow-2xl"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            }}
            whileHover={{
              scale: 1.02,
              boxShadow: '0 12px 40px rgba(0, 245, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-black text-white hero-text-2025"
              style={{
                background: 'linear-gradient(45deg, #00f5ff, #ff0080, #8000ff, #00f5ff)',
                backgroundSize: '300% 300%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 30px rgba(0, 245, 255, 0.3)',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {text}
              <motion.span
                className="inline-block w-1 h-12 bg-cyan-400 ml-2"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                style={{
                  boxShadow: '0 0 10px #00f5ff',
                }}
              />
            </motion.h1>
            
            {/* Glassmorphic glow effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl opacity-0"
              style={{
                background: 'linear-gradient(45deg, rgba(0,245,255,0.1), rgba(255,0,128,0.1), rgba(128,0,255,0.1))',
              }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>

        {/* Subtitle */}
        <motion.div variants={itemVariants} className="mb-12">
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-4 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            BTech CSE with AI Specialization
          </motion.p>
          <motion.div
            className="flex items-center justify-center gap-4 text-lg md:text-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, type: "spring", stiffness: 100 }}
          >
            <Brain className="w-6 h-6 text-purple-400 animate-pulse" />
            <span className="text-gradient-cyber font-semibold">Learning & Growing</span>
            <Rocket className="w-6 h-6 text-cyan-400 animate-bounce" />
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
        >
          <motion.a
            href="/resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-2xl text-white font-semibold text-lg shadow-2xl quantum-hover"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Download Resume
            </span>
          </motion.a>
          
          <motion.a
            href="mailto:2129.divyanshu@gmail.com"
            className="group relative border-2 border-cyan-400/50 px-8 py-4 rounded-2xl text-white font-semibold text-lg backdrop-blur-sm hover:border-cyan-400 transition-all duration-300 quantum-hover"
            whileHover={{ 
              scale: 1.05, 
              y: -3,
              boxShadow: "0 0 30px rgba(0, 245, 255, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
            />
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Contact Me
            </span>
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-8"
        >
          <motion.a
            href="https://github.com/Divyanshu292165"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-all duration-300 relative quantum-hover"
            whileHover={{ 
              scale: 1.3, 
              rotate: 5,
              y: -5,
            }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="absolute inset-0 bg-cyan-400 opacity-20 rounded-full blur-xl"
              initial={{ scale: 0 }}
              whileHover={{ scale: 2 }}
              transition={{ duration: 0.3 }}
            />
            <Github className="w-7 h-7 relative z-10" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/divyanshu-shukla-203731288"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-all duration-300 relative quantum-hover"
            whileHover={{ 
              scale: 1.3, 
              rotate: -5,
              y: -5,
            }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="absolute inset-0 bg-blue-400 opacity-20 rounded-full blur-xl"
              initial={{ scale: 0 }}
              whileHover={{ scale: 2 }}
              transition={{ duration: 0.3 }}
            />
            <Linkedin className="w-7 h-7 relative z-10" />
          </motion.a>
        </motion.div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center relative overflow-hidden"
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
        
        <motion.p
          className="text-cyan-400/70 text-sm mt-2 font-light"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Explore Journey
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;