import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState([]);
  const [isPointer, setIsPointer] = useState(false);
  const trailRef = useRef([]);
  const frameRef = useRef(null);

  useEffect(() => {
    const MAX_TRAIL = 8;

    const onMove = (e) => {
      const { clientX: x, clientY: y } = e;
      setPos({ x, y });

      trailRef.current = [{ x, y, id: Date.now() }, ...trailRef.current].slice(0, MAX_TRAIL);
      setTrail([...trailRef.current]);

      const el = document.elementFromPoint(x, y);
      setIsPointer(el && getComputedStyle(el).cursor === 'pointer');
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <>
      {/* Trail dots */}
      {trail.map((point, i) => (
        <motion.div
          key={point.id}
          className="fixed pointer-events-none z-[9998] rounded-full"
          style={{
            left: point.x,
            top: point.y,
            width: Math.max(4, 12 - i * 1.2),
            height: Math.max(4, 12 - i * 1.2),
            x: '-50%',
            y: '-50%',
            background: `rgba(79, 142, 247, ${Math.max(0.05, 0.35 - i * 0.04)})`,
          }}
          initial={{ scale: 1 }}
          animate={{ scale: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      ))}

      {/* Main cursor dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          left: pos.x,
          top: pos.y,
          x: '-50%',
          y: '-50%',
        }}
        animate={{
          width: isPointer ? 40 : 10,
          height: isPointer ? 40 : 10,
          background: isPointer
            ? 'rgba(79, 142, 247, 0.15)'
            : 'rgba(79, 142, 247, 0.9)',
          border: isPointer ? '1.5px solid rgba(79, 142, 247, 0.8)' : 'none',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />

      {/* Outer glow ring */}
      <motion.div
        className="fixed pointer-events-none z-[9997] rounded-full"
        style={{
          left: pos.x,
          top: pos.y,
          x: '-50%',
          y: '-50%',
          width: 40,
          height: 40,
          border: '1px solid rgba(79, 142, 247, 0.25)',
        }}
        animate={{ left: pos.x, top: pos.y }}
        transition={{ type: 'spring', stiffness: 80, damping: 20, mass: 0.5 }}
      />
    </>
  );
}
