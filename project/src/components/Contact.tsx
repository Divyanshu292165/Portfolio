import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Mail, MapPin, Send, MessageCircle, CheckCircle, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    opportunity: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { name, email, message } = formData;
      const response = await fetch('https://formspree.io/f/xgvyqzvg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      const responseBody = await response.text();
      console.log('Formspree response status:', response.status);
      console.log('Formspree response body:', responseBody);
      setIsSubmitting(false);
      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', subject: '', message: '', opportunity: '' });
        }, 3000);
      } else {
        alert('There was an error sending your message.');
      }
    } catch (error) {
      setIsSubmitting(false);
      console.error('Formspree error:', error);
      alert('There was an error sending your message.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    { 
      icon: Mail, 
      label: 'Email', 
      value: '2129.divyanshu@gmail.com',
      description: 'Available for opportunities',
      color: 'from-cyan-500 to-blue-500',
      href: 'mailto:2129.divyanshu@gmail.com'
    },
    { 
      icon: MapPin, 
      label: 'Location', 
      value: 'Vadodara, Gujarat',
      description: 'Open to remote work',
      color: 'from-purple-500 to-pink-500',
      maps: 'https://www.google.com/maps/search/?api=1&query=Vadodara%2C+Gujarat'
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      value: 'divyanshu-shukla',
      description: 'Connect with me on LinkedIn',
      color: 'from-blue-500 to-cyan-500',
      href: 'https://www.linkedin.com/in/divyanshu-shukla/'
    },
    { 
      icon: Github, 
      label: 'GitHub', 
      value: 'Divyanshu292165',
      description: 'Check out my projects',
      color: 'from-gray-500 to-gray-700',
      href: 'https://github.com/Divyanshu292165'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
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
    <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden" ref={ref}>
      {/* Futuristic Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(0,245,255,0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(255,0,128,0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, rgba(128,0,255,0.1) 0%, transparent 50%)
            `,
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Quantum particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
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
              className="text-5xl md:text-7xl font-black text-white mb-6 section-title-2025"
              style={{
                background: 'linear-gradient(45deg, #00f5ff, #ff0080, #8000ff, #00f5ff)',
                backgroundSize: '300% 300%',
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
              Let's Connect
            </motion.h2>
            
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-8 rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 128 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              Ready to collaborate on exciting projects? Let's discuss opportunities and create something amazing together.
            </motion.p>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <MessageCircle className="w-8 h-8 text-cyan-400" />
                Get in Touch
              </h3>
            </motion.div>

            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
                whileHover={{ x: 10 }}
              >
                <motion.div
                  className="flex items-start space-x-6 p-6 rounded-2xl glass-morphism-ultra hover:border-cyan-500/50 transition-all duration-300 quantum-hover"
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3), 0 0 20px rgba(0,245,255,0.2)",
                    y: -5,
                  }}
                >
                  <motion.div
                    className={`w-14 h-14 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center shadow-lg`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <info.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <div className="text-gray-400 text-sm font-medium mb-1">{info.label}</div>
                    {info.href ? (
                      <a 
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-white font-bold text-lg mb-1 hover:text-cyan-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-white font-bold text-lg mb-1">{info.value}</div>
                    )}
                    <div className="text-gray-500 text-sm">{info.description}</div>
                    {/* Add Open Maps button for Location */}
                    {info.maps && (
                      <a
                        href={info.maps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 px-3 py-1 bg-cyan-600 text-white rounded-full text-xs font-semibold hover:bg-cyan-700 transition-colors"
                      >
                        Open Maps
                      </a>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* Availability Status */}
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-2xl bg-green-500/10 border border-green-500/30 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  className="w-3 h-3 bg-green-400 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <span className="text-green-400 font-semibold">Available for internships</span>
              </div>
              <p className="text-gray-300 text-sm">
                Actively seeking learning opportunities and exciting projects. Response time: 24 hours.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  className="relative"
                  whileFocus={{ scale: 1.02 }}
                >
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-4 glass-morphism-ultra rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none ultra-smooth"
                    whileFocus={{ 
                      borderColor: "#00f5ff",
                      boxShadow: "0 0 20px rgba(0,245,255,0.3)",
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-cyan-500/10 rounded-xl opacity-0 pointer-events-none"
                    animate={{
                      opacity: focusedField === 'name' ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>

                <motion.div
                  className="relative"
                  whileFocus={{ scale: 1.02 }}
                >
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-4 glass-morphism-ultra rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none ultra-smooth"
                    whileFocus={{ 
                      borderColor: "#00f5ff",
                      boxShadow: "0 0 20px rgba(0,245,255,0.3)",
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-cyan-500/10 rounded-xl opacity-0 pointer-events-none"
                    animate={{
                      opacity: focusedField === 'email' ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              </div>

              {/* Subject and Opportunity Type */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-4 glass-morphism-ultra rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none ultra-smooth"
                  whileFocus={{ 
                    borderColor: "#00f5ff",
                    boxShadow: "0 0 20px rgba(0,245,255,0.3)",
                  }}
                />

                <motion.select
                  name="opportunity"
                  value={formData.opportunity}
                  onChange={handleChange}
                  className="w-full px-4 py-4 glass-morphism-ultra rounded-xl text-white bg-gray-800 border border-gray-700 focus:border-cyan-500 focus:outline-none ultra-smooth"
                  whileFocus={{ 
                    borderColor: "#00f5ff",
                    boxShadow: "0 0 20px rgba(0,245,255,0.3)",
                  }}
                >
                  <option value="" className="bg-gray-800 text-white">Opportunity Type</option>
                  <option value="internship" className="bg-gray-800 text-white">Internship</option>
                  <option value="project" className="bg-gray-800 text-white">Project Collaboration</option>
                  <option value="mentorship" className="bg-gray-800 text-white">Mentorship</option>
                  <option value="other" className="bg-gray-800 text-white">Other</option>
                </motion.select>
              </div>

              {/* Message */}
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Tell me about the opportunity or project..."
                required
                className="w-full px-4 py-4 glass-morphism-ultra rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none ultra-smooth resize-none"
                whileFocus={{ 
                  borderColor: "#00f5ff",
                  boxShadow: "0 0 20px rgba(0,245,255,0.3)",
                }}
              />

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-3 relative overflow-hidden quantum-hover"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting || isSubmitted}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <span className="relative z-10 flex items-center gap-3">
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </span>

                {/* Success particles */}
                {isSubmitted && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                          left: '50%',
                          top: '50%',
                        }}
                        animate={{
                          x: [0, (Math.cos(i * 30 * Math.PI / 180) * 40)],
                          y: [0, (Math.sin(i * 30 * Math.PI / 180) * 40)],
                          opacity: [1, 0],
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 0.8,
                          ease: "easeOut",
                        }}
                      />
                    ))}
                  </motion.div>
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;