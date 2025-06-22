"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Gavel, Briefcase, GraduationCap, Award } from 'lucide-react';

// List of icons to cycle through
const icons = [Gavel, Briefcase, GraduationCap, Award];
const colorClasses = ['text-primary', 'text-accent'];

type ParticleProps = {
  id: number;
  x: number;
  y: number;
  IconComponent: React.ElementType;
  color: string;
};

export function ClickEffect() {
  const [particles, setParticles] = useState<ParticleProps[]>([]);

  const addParticle = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;

    // Prevent the effect on interactive elements
    if (target.closest('a, button, input, [role="button"], [role="dialog"], [role="menuitem"]')) {
      return;
    }
    
    const randomColor = colorClasses[Math.floor(Math.random() * colorClasses.length)];
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];

    const newParticle = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
      IconComponent: randomIcon,
      color: randomColor,
    };

    setParticles(currentParticles => [...currentParticles, newParticle]);

    // Schedule removal of the particle after the animation ends
    setTimeout(() => {
      setParticles(currentParticles =>
        currentParticles.filter(p => p.id !== newParticle.id)
      );
    }, 1000); // Should match the animation duration
  }, []);

  useEffect(() => {
    document.addEventListener('click', addParticle);
    return () => {
      document.removeEventListener('click', addParticle);
    };
  }, [addParticle]);

  return (
    <>
      {particles.map(({ id, x, y, IconComponent, color }) => (
        <IconComponent
          key={id}
          className={`pointer-events-none absolute h-6 w-6 animate-fall-and-fade ${color}`}
          style={{
            position: 'fixed',
            left: `${x}px`,
            top: `${y}px`,
            zIndex: 9999,
          }}
        />
      ))}
    </>
  );
}
