'use client';

import { useEffect, useRef } from 'react';

const codeSnippets = [
  'const AI = new ChatBot();',
  'function optimize() { }',
  'if (future) { innovate(); }',
  'let intelligence = true;',
  'return response.json();',
  'async function process() {}',
  'export default AILab;',
  'interface Bot { learn() }',
  'class Neural extends AI {}',
  'await fetch("/api/chat")',
  'console.log("AI Ready");',
  'import { Brain } from "ai";',
];

export default function CodeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create code lines
    const lines: HTMLDivElement[] = [];
    for (let i = 0; i < 60; i++) {
      const line = document.createElement('div');
      line.className = 'code-line';
      line.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      line.style.top = `${Math.random() * 100}%`;
      line.style.left = `${Math.random() * 100}%`;
      line.style.opacity = String(0.3 + Math.random() * 0.4);
      container.appendChild(line);
      lines.push(line);
    }

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    // Scroll handler
    const handleScroll = () => {
      const scrollY = window.scrollY;
      lines.forEach((line, index) => {
        const speed = 0.1 + (index % 3) * 0.05;
        line.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    // Animation loop
    const animate = () => {
      lines.forEach((line) => {
        const rect = line.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = (mousePos.current.x - centerX) * 0.02;
        const deltaY = (mousePos.current.y - centerY) * 0.02;
        
        const currentTransform = line.style.transform || '';
        const scrollMatch = currentTransform.match(/translateY\(([^)]+)\)/);
        const scrollY = scrollMatch ? scrollMatch[1] : '0px';
        
        line.style.transform = `translate(${deltaX}px, calc(${scrollY} + ${deltaY}px))`;
      });
      
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      lines.forEach(line => line.remove());
    };
  }, []);

  return <div ref={containerRef} className="code-background" />;
}