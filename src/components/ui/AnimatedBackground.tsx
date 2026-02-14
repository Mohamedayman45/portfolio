'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

export default function AnimatedBackground() {
  const particles = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => {
      const x = Math.random() * 100;
      // Avoid center area (40-60%)
      const adjustedX = x < 40 ? x * 0.8 : x > 60 ? 20 + (x * 0.8) : x < 50 ? x - 15 : x + 15;
      return {
        id: i,
        size: Math.random() * 4 + 2,
        x: adjustedX,
        y: Math.random() * 100,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
      };
    });
  }, []);

  const floatingShapes = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => {
      const x = Math.random() * 100;
      // Avoid center area (35-65%)
      const adjustedX = x < 35 ? x * 0.9 : x > 65 ? 35 + (x * 0.65) : x < 50 ? x - 20 : x + 20;
      return {
        id: i,
        size: Math.random() * 80 + 40,
        x: adjustedX,
        y: Math.random() * 100,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 3,
        rotation: Math.random() * 360,
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
      </div>

      {/* Floating Particles - random positioning */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/30"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* 3D-like Floating Geometric Shapes - random positioning */}
      {floatingShapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            rotate: [shape.rotation, shape.rotation + 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        >
          {shape.id % 3 === 0 ? (
            // Triangle
            <div
              className="border-2 border-primary/20"
              style={{
                width: 0,
                height: 0,
                borderLeft: `${shape.size / 2}px solid transparent`,
                borderRight: `${shape.size / 2}px solid transparent`,
                borderBottom: `${shape.size}px solid rgba(59, 130, 246, 0.1)`,
              }}
            />
          ) : shape.id % 3 === 1 ? (
            // Square
            <div
              className="border-2 border-accent/20 bg-accent/5 backdrop-blur-sm"
              style={{
                width: shape.size,
                height: shape.size,
                transform: 'rotate(45deg)',
              }}
            />
          ) : (
            // Circle
            <div
              className="rounded-full border-2 border-primary/20 bg-primary/5 backdrop-blur-sm"
              style={{
                width: shape.size,
                height: shape.size,
              }}
            />
          )}
        </motion.div>
      ))}

      {/* Grid Pattern Overlay */}
      <motion.div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Animated Light Beams */}
      <motion.div
        className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent"
        animate={{
          opacity: [0, 0.5, 0],
          scaleY: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent"
        animate={{
          opacity: [0, 0.5, 0],
          scaleY: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Floating Code Snippets Effect */}
      <motion.div
        className="absolute top-1/4 left-10 text-primary/10 font-mono text-xs"
        animate={{
          y: [0, -100],
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {'{ code: "art" }'}
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 right-20 text-accent/10 font-mono text-xs"
        animate={{
          y: [0, -100],
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
          delay: 3,
        }}
      >
        {'<Frontend />'}
      </motion.div>
    </div>
  );
}
