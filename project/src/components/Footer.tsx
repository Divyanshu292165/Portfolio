import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Heart, Code, Coffee, Zap, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Divyanshu292165', label: 'GitHub', color: 'hover:text-gray-300' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/divyanshu-shukla-203731288', label: 'LinkedIn', color: 'hover:text-blue-400' },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(0,245,255,0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(255,0,128,0.1) 0%, transparent 50%)
            `,
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Floating code elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-400/10 font-mono text-xs"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          >
            {['</>', '{}', '[]', '()', '<>', '//', '&&', '||'][i]}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <motion.div
              className="flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Code className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-white">Divyanshu Shukla</h3>
                <p className="text-cyan-400 font-medium">Frontend Developer</p>
              </div>
            </motion.div>
            
            <motion.p
              className="text-gray-300 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Passionate about creating digital experiences that bridge imagination and reality. 
              Specialized in modern web technologies with a focus on learning and growth in the field of development.
            </motion.p>
            
            {/* Tech Stack Icons */}
            <motion.div
              className="flex flex-wrap gap-3"
              variants={containerVariants}
            >
              {['React', 'TypeScript', 'JavaScript', 'CSS3'].map((tech, index) => (
                <motion.div
                  key={tech}
                  variants={itemVariants}
                  className="px-3 py-1 glass-morphism-ultra border border-gray-700/50 rounded-full text-gray-400 text-sm backdrop-blur-sm hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.5 }}
                    />
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Coffee className="w-5 h-5 text-cyan-400" />
              Let's Connect
            </h4>
            <div className="space-y-3 text-gray-400">
              <motion.p
                whileHover={{ x: 5 }}
                className="hover:text-white transition-all duration-300"
              >
                2129.divyanshu@gmail.com
              </motion.p>
              <motion.p
                whileHover={{ x: 5 }}
                className="hover:text-white transition-all duration-300"
              >
                Vadodara, Gujarat
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider with Animation */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {/* Copyright */}
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-2 mb-4 md:mb-0"
          >
            <span className="text-gray-400">Made with</span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-4 h-4 text-red-500" />
            </motion.div>
            <span className="text-gray-400">by Divyanshu Shukla</span>
            <span className="text-gray-500">© 2024</span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-6"
          >
            {socialLinks.map(({ icon: Icon, href, label, color }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`text-gray-400 ${color} transition-all duration-300 relative group`}
                whileHover={{ 
                  scale: 1.2, 
                  y: -3,
                  rotate: 5,
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Icon className="w-6 h-6 relative z-10" />
                
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-current opacity-20 rounded-full blur-lg scale-0 group-hover:scale-150 transition-transform duration-300"
                />
                
                {/* Ripple effect */}
                <motion.div
                  className="absolute inset-0 border border-current rounded-full opacity-0"
                  whileHover={{
                    scale: [1, 2],
                    opacity: [0.5, 0],
                  }}
                  transition={{ duration: 0.6 }}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 z-50"
            whileHover={{ 
              scale: 1.1, 
              y: -2,
              boxShadow: "0 20px 40px rgba(0,245,255,0.3)",
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <ArrowUp className="w-5 h-5" />
            
            {/* Pulse rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 border border-cyan-400/30 rounded-full"
                animate={{
                  scale: [1, 2, 2],
                  opacity: [0.5, 0, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
              />
            ))}
          </motion.button>
        </motion.div>

        {/* Hidden Easter Egg */}
        <motion.div
          className="absolute bottom-4 left-4 text-xs text-gray-600 font-mono opacity-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          transition={{ delay: 2 }}
        >
          // Built with ❤️ and lots of ☕
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;