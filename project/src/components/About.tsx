import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Code, Coffee, Users, Award, Brain, Rocket, Target, Zap, BookOpen, Cloud, Network } from 'lucide-react';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const stats = [
    { icon: Code, number: 1, label: 'Project Built', suffix: '', color: 'from-cyan-500 to-blue-500' },
    { icon: BookOpen, number: 1, label: 'NPTEL Certification', suffix: '', color: 'from-green-500 to-emerald-500' },
    { icon: Brain, number: 1, label: 'Year Learning', suffix: '', color: 'from-purple-500 to-pink-500' },
    { icon: Cloud, number: 1, label: 'AWS Learning Path', suffix: '', color: 'from-orange-500 to-red-500' },
    { icon: Rocket, number: 2, label: 'In Development', suffix: '', color: 'from-yellow-500 to-orange-500' },
  ];

  const skills = [
    { name: 'Frontend Development', level: 60, icon: Brain, description: 'React, HTML, CSS, JavaScript' },
    { name: 'Backend Learning', level: 47, icon: Rocket, description: 'Node.js, Express, APIs' },
    { name: 'AI & Machine Learning', level: 44, icon: Target, description: 'Python, TensorFlow basics' },
    { name: 'Cloud Computing', level: 41, icon: Cloud, description: 'AWS fundamentals' },
    { name: 'Computer Networks', level: 49, icon: Network, description: 'NPTEL certified' },
    { name: 'Web Design', level: 45, icon: Zap, description: 'UI/UX, Responsive design' },
  ];

  const Counter = ({ number, suffix = '' }: { number: number; suffix?: string }) => {
    const [count, setCount] = React.useState(0);
    
    React.useEffect(() => {
      if (isInView) {
        let start = 0;
        const increment = number / 60;
        const timer = setInterval(() => {
          start += increment;
          setCount(Math.floor(start));
          if (start >= number) {
            setCount(number);
            clearInterval(timer);
          }
        }, 16);
        return () => clearInterval(timer);
      }
    }, [isInView, number]);
    
    return <span>{count}{suffix}</span>;
  };

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
    <section id="about" className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden" ref={ref}>
      {/* Futuristic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Neural network lines */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scaleY: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
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
          <motion.div variants={itemVariants} className="mb-8">
            <motion.h2
              className="text-5xl md:text-7xl font-black text-white mb-6 section-title-2025"
              style={{
                background: 'linear-gradient(45deg, #00f5ff, #ff0080, #8000ff)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              About Me
            </motion.h2>
            
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-8 rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 128 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-4xl mx-auto space-y-6">
            {[
              `I'm Divyanshu Shukla, a passionate and driven Frontend Developer currently pursuing a B.Tech in Computer Science with a specialization in Artificial Intelligence. With a strong interest in creating seamless, user-focused digital experiences, I am actively building my skills in modern web development technologies, including HTML, CSS, JavaScript, React, and Tailwind CSS.`,
              `I have successfully completed NPTEL certification in Computer Networks and Protocols, and I'm currently expanding my knowledge in AWS Cloud Computing and scalable web infrastructure. My academic and project-based learning has given me hands-on experience with responsive design, UI/UX principles, and cross-platform development.`,
              `My journey in tech is shaped by a deep curiosity and a commitment to continuous improvement. I strive to blend creativity with functionality, ensuring that every application I build is intuitive, efficient, and impactful. I am also developing a strong foundation in artificial intelligence, preparing myself to build intelligent, data-driven solutions that can adapt to future demands.`,
              `As an aspiring software developer seeking internship opportunities, I bring a proactive mindset, a collaborative spirit, and a passion for innovation. I am eager to contribute to meaningful projects, learn from real-world challenges, and grow in a dynamic and fast-paced development environment.`
            ].map((text, index) => (
              <motion.p
                key={index}
                className="text-lg text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center group relative quantum-hover"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-300`}
              />
              
              <motion.div
                className={`relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl mb-4 shadow-2xl`}
                whileHover={{ 
                  rotateY: 180,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <stat.icon className="w-8 h-8 text-white relative z-10" />
              </motion.div>
              
              <motion.div
                className="text-4xl font-black text-white mb-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 10,
                  delay: 0.2 * index 
                }}
              >
                <Counter number={stat.number} suffix={stat.suffix} />
              </motion.div>
              
              <motion.div
                className="text-gray-400 font-medium"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 + 0.1 * index }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="max-w-6xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Skills & Learning Journey
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group glass-morphism-ultra p-6 rounded-2xl quantum-hover"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <skill.icon className="w-6 h-6 text-cyan-400" />
                    <div>
                      <span className="text-white font-semibold text-lg">{skill.name}</span>
                      <p className="text-gray-400 text-sm">{skill.description}</p>
                    </div>
                  </div>
                  <span className="text-cyan-400 font-mono text-lg">{skill.level}%</span>
                </div>
                
                <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1.2, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                  />
                  
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-50 blur-sm"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1.2, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          variants={itemVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div
            className="inline-flex items-center gap-4 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-sm border border-cyan-400/30 px-8 py-4 rounded-2xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Rocket className="w-6 h-6 text-cyan-400" />
            <span className="text-white font-semibold text-lg">
              Open to Internship Opportunities
            </span>
            <Brain className="w-6 h-6 text-purple-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;