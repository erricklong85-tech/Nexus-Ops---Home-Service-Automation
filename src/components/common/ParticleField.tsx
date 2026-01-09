import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ParticleField() {
  const [particles, setParticles] = useState<{ x: number; y: number; size: number }[]>([]);

  useEffect(() => {
    const p = Array.from({ length: 20 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
    }));
    setParticles(p);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          className="absolute bg-white rounded-full opacity-20"
        />
      ))}
    </div>
  );
}
