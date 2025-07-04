/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'figma-purple': '#8B5CF6',
        'figma-blue': '#3B82F6',
        'figma-green': '#10B981',
        'figma-orange': '#F59E0B',
        'figma-red': '#EF4444',
        'figma-gray': {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#030712',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'rotate-in': 'rotateIn 0.6s ease-out',
        'elastic': 'elastic 0.8s ease-out',
        'magnetic': 'magnetic 0.3s ease-out',
        'morphing': 'morphing 4s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease-in-out infinite',
        'text-reveal': 'textReveal 1s ease-out',
        'cursor-blink': 'cursorBlink 1s infinite',
        'particle-float': 'particleFloat 20s linear infinite',
        'blob-morph': 'blobMorph 8s ease-in-out infinite',
        'neon-pulse': 'neonPulse 2s ease-in-out infinite',
        'holographic': 'holographic 3s ease-in-out infinite',
        'glitch': 'glitch 0.3s ease-in-out infinite',
        'typewriter': 'typewriter 4s steps(40) 1s forwards',
        'aurora': 'aurora 20s ease-in-out infinite',
        'liquid': 'liquid 6s ease-in-out infinite',
        'matrix': 'matrix 0.1s linear infinite',
        'cyber-glow': 'cyberGlow 2s ease-in-out infinite alternate',
        'neural-network': 'neuralNetwork 8s linear infinite',
        'quantum': 'quantum 3s ease-in-out infinite',
        'hologram': 'hologram 4s ease-in-out infinite',
        'data-stream': 'dataStream 2s linear infinite',
        'energy-pulse': 'energyPulse 1.5s ease-in-out infinite',
        'void-ripple': 'voidRipple 3s ease-out infinite',
        'cosmic-drift': 'cosmicDrift 15s linear infinite',
        'digital-rain': 'digitalRain 1s linear infinite',
        'plasma-wave': 'plasmaWave 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.6)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        rotateIn: {
          '0%': { transform: 'rotate(-180deg) scale(0)', opacity: '0' },
          '100%': { transform: 'rotate(0deg) scale(1)', opacity: '1' },
        },
        elastic: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
        magnetic: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
          '100%': { transform: 'translateY(0)' },
        },
        morphing: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        textReveal: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        cursorBlink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        particleFloat: {
          '0%': { transform: 'translateY(100vh) rotate(0deg)' },
          '100%': { transform: 'translateY(-100vh) rotate(360deg)' },
        },
        blobMorph: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '33%': { transform: 'scale(1.1) rotate(120deg)' },
          '66%': { transform: 'scale(0.9) rotate(240deg)' },
        },
        neonPulse: {
          '0%, 100%': { 
            textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
            filter: 'brightness(1)'
          },
          '50%': { 
            textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
            filter: 'brightness(1.2)'
          },
        },
        holographic: {
          '0%, 100%': { 
            background: 'linear-gradient(45deg, #ff006e, #8338ec, #3a86ff)',
            filter: 'hue-rotate(0deg)'
          },
          '33%': { filter: 'hue-rotate(120deg)' },
          '66%': { filter: 'hue-rotate(240deg)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        typewriter: {
          '0%': { width: '0ch' },
          '100%': { width: '40ch' },
        },
        aurora: {
          '0%, 100%': { 
            background: 'linear-gradient(45deg, #ff006e, #8338ec, #3a86ff, #06ffa5)',
            backgroundSize: '400% 400%',
            backgroundPosition: '0% 50%'
          },
          '50%': { backgroundPosition: '100% 50%' },
        },
        liquid: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.05) rotate(180deg)' },
        },
        matrix: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        cyberGlow: {
          '0%': { 
            boxShadow: '0 0 5px #00ffff, inset 0 0 5px #00ffff',
            borderColor: '#00ffff'
          },
          '100%': { 
            boxShadow: '0 0 20px #00ffff, 0 0 30px #00ffff, inset 0 0 10px #00ffff',
            borderColor: '#ffffff'
          },
        },
        neuralNetwork: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        quantum: {
          '0%, 100%': { 
            transform: 'scale(1) rotate(0deg)',
            opacity: '1'
          },
          '50%': { 
            transform: 'scale(0.8) rotate(180deg)',
            opacity: '0.7'
          },
        },
        hologram: {
          '0%, 100%': { 
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
            transform: 'translateX(-100%)'
          },
          '50%': { transform: 'translateX(100%)' },
        },
        dataStream: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        energyPulse: {
          '0%, 100%': { 
            transform: 'scale(1)',
            boxShadow: '0 0 0 0 rgba(59, 130, 246, 0.7)'
          },
          '50%': { 
            transform: 'scale(1.05)',
            boxShadow: '0 0 0 10px rgba(59, 130, 246, 0)'
          },
        },
        voidRipple: {
          '0%': { 
            transform: 'scale(0)',
            opacity: '1'
          },
          '100%': { 
            transform: 'scale(4)',
            opacity: '0'
          },
        },
        cosmicDrift: {
          '0%': { transform: 'translateX(-100vw) rotate(0deg)' },
          '100%': { transform: 'translateX(100vw) rotate(360deg)' },
        },
        digitalRain: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        plasmaWave: {
          '0%, 100%': { 
            background: 'radial-gradient(circle, #ff006e 0%, #8338ec 50%, #3a86ff 100%)',
            transform: 'scale(1)'
          },
          '50%': { 
            background: 'radial-gradient(circle, #3a86ff 0%, #ff006e 50%, #8338ec 100%)',
            transform: 'scale(1.1)'
          },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
        'cyber-grid': 'linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)',
        'neural-pattern': 'radial-gradient(circle at 25% 25%, #667eea 0%, transparent 50%), radial-gradient(circle at 75% 75%, #764ba2 0%, transparent 50%)',
      },
      backgroundSize: {
        'cyber-grid': '20px 20px',
      },
    },
  },
  plugins: [],
};