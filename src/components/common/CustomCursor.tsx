"use client";

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState<'default' | 'pointer'>('default');
  const [isVisible, setIsVisible] = useState(false);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  // Spring configurations for clean lag movement
  const springConfig = { damping: 32, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Hide custom cursor on mobile devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 12);
      mouseY.set(e.clientY - 12);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.cursor-pointer') ||
        target.classList.contains('cursor-pointer');
      
      setCursorType(isInteractive ? 'pointer' : 'default');
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    // Hide browser default cursor
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.style.cursor = 'auto';
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Spring Follower Ring - Pure minimalist thin border */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          width: cursorType === 'pointer' ? 36 : 24,
          height: cursorType === 'pointer' ? 36 : 24,
          borderColor: cursorType === 'pointer' ? 'rgba(14, 165, 233, 0.8)' : 'rgba(156, 163, 175, 0.4)',
        }}
        transition={{ type: 'spring', stiffness: 450, damping: 32 }}
        className="fixed top-0 left-0 rounded-full border border-gray-400 pointer-events-none z-[9999] hidden lg:block"
      />

      {/* Inner Immediate Follower Dot - Sleek and subtle */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
        }}
        animate={{
          scale: cursorType === 'pointer' ? 0.5 : 1,
          backgroundColor: cursorType === 'pointer' ? '#0ea5e9' : '#9ca3af',
        }}
        transition={{ type: 'spring', stiffness: 600, damping: 35 }}
        className="fixed top-[9px] left-[9px] w-1.5 h-1.5 rounded-full pointer-events-none z-[99999] hidden lg:block"
      />
    </>
  );
}

