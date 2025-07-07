import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code, Eye, Star, GitBranch, Users, Calendar } from 'lucide-react';

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const controls = useAnimation();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution built with React and modern web technologies. Features responsive design, product catalog, and user-friendly interface.',
      longDescription: 'A comprehensive e-commerce platform showcasing frontend development skills with React, responsive design principles, and modern UI/UX patterns. Built as a learning project to demonstrate proficiency in web development.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Responsive Design'],
      githubUrl: '#', // Will be updated later
      liveUrl: '#', // Will be updated later
      stats: { stars: 12, forks: 3, contributors: 1 },
      status: 'In Development',
      year: '2024',
      category: 'Frontend'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects and skills with modern animations and responsive design.',
      longDescription: 'A cutting-edge portfolio website built with React, TypeScript, and Framer Motion. Features advanced animations, responsive design, and modern UI patterns.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: '#',
      liveUrl: '#',
      stats: { stars: 8, forks: 2, contributors: 1 },
      status: 'Live',
      year: '2024',
      category: 'Frontend'
    },
    {
      id: 3,
      title: 'Learning Management System',
      description: 'A web-based learning platform for educational content management and student progress tracking.',
      longDescription: 'Educational platform designed to help students and educators manage learning content effectively. Built with modern web technologies and responsive design.',
      image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Node.js', 'CSS3', 'JavaScript'],
      githubUrl: '#',
      liveUrl: '#',
      stats: { stars: 15, forks: 5, contributors: 1 },
      status: 'Planning',
      year: '2024',
      category: 'Full Stack'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, rotateX: -10 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 8,
      },
    },
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'from-green-500 to-emerald-500';
      case 'In Development': return 'from-yellow-500 to-orange-500';
      case 'Planning': return 'from-blue-500 to-cyan-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="projects" className="py-32 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden" ref={ref}>
      {/* Futuristic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,245,255,0.1),transparent_50%)]" />
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(255,0,128,0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(128,0,255,0.1) 0%, transparent 50%)
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
              Featured Projects
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
              Showcasing my journey in web development and the projects I've built while learning
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -10, scale: 1.02 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                className="relative overflow-hidden glass-morphism-ultra rounded-2xl shadow-2xl quantum-hover"
                whileHover={{
                  boxShadow: "0 25px 50px rgba(0,0,0,0.4), 0 0 30px rgba(0,245,255,0.2)",
                  borderColor: "rgba(0,245,255,0.5)",
                }}
                onClick={() => setSelectedProject(project.id)}
                style={{ cursor: 'pointer' }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-48">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
                  
                  {/* Status Badge */}
                  <motion.div
                    className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${getStatusColor(project.status)} rounded-full text-white text-sm font-semibold`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    {project.status}
                  </motion.div>
                  
                  {/* Action Buttons */}
                  <motion.div
                    className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: -20 }}
                    whileHover={{ y: 0 }}
                  >
                    <motion.a
                      href={project.githubUrl}
                      className="p-2 bg-black/60 backdrop-blur-sm rounded-full text-white hover:bg-black/80 transition-colors duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      className="p-2 bg-black/60 backdrop-blur-sm rounded-full text-white hover:bg-black/80 transition-colors duration-300"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </motion.div>
                  
                  {/* Scan Line Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <motion.h3
                      className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300"
                      layoutId={`title-${project.id}`}
                    >
                      {project.title}
                    </motion.h3>
                    <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <motion.p
                    className="text-gray-300 mb-4 text-sm leading-relaxed"
                    layoutId={`description-${project.id}`}
                  >
                    {project.description}
                  </motion.p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-2 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 text-cyan-300 text-xs rounded-full backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.1 * techIndex }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-full">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                  
                  {/* Stats */}
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3" />
                        <span>{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GitBranch className="w-3 h-3" />
                        <span>{project.stats.forks}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
                
                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  animate={{
                    background: [
                      'linear-gradient(45deg, rgba(0,245,255,0.1), rgba(255,0,128,0.1), rgba(128,0,255,0.1))',
                      'linear-gradient(45deg, rgba(128,0,255,0.1), rgba(0,245,255,0.1), rgba(255,0,128,0.1))',
                      'linear-gradient(45deg, rgba(255,0,128,0.1), rgba(128,0,255,0.1), rgba(0,245,255,0.1))',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          <motion.a
            href="https://github.com/Divyanshu292165"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-gradient-to-r from-cyan-600 to-purple-600 px-8 py-4 rounded-2xl text-white font-bold text-lg shadow-2xl quantum-hover"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Eye className="w-5 h-5" />
              View All Projects on GitHub
            </span>
          </motion.a>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="glass-morphism-ultra rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;
                
                return (
                  <>
                    <motion.h3
                      className="text-3xl font-bold text-white mb-4"
                      layoutId={`title-${project.id}`}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-300 mb-6"
                      layoutId={`description-${project.id}`}
                    >
                      {project.longDescription}
                    </motion.p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <motion.a
                        href={project.githubUrl}
                        className="flex items-center gap-2 px-6 py-3 glass-morphism-ultra hover:bg-gray-600/50 text-white rounded-lg transition-colors quantum-hover"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-5 h-5" />
                        View Code
                      </motion.a>
                      <motion.a
                        href={project.liveUrl}
                        className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition-colors quantum-hover"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </motion.a>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;