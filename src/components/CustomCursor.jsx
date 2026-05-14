import { useEffect, useRef, useState } from 'react';

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    // Only show on devices that have a fine pointer (mouse)
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.1;
      ring.current.y += (pos.current.y - ring.current.y) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const onDown = () => {
      if (ringRef.current) ringRef.current.style.scale = '0.75';
      if (dotRef.current) dotRef.current.style.scale = '1.5';
    };
    const onUp = () => {
      if (ringRef.current) ringRef.current.style.scale = '1';
      if (dotRef.current) dotRef.current.style.scale = '1';
    };

    window.addEventListener('mousemove', onMove);
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [visible]);

  return (
    <>
      {/* Dot — snaps directly to cursor */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: 'rgb(245 181 68)',
          pointerEvents: 'none',
          zIndex: 99999,
          willChange: 'transform',
          translate: '-50% -50%',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s, scale 0.15s',
          mixBlendMode: 'normal',
        }}
      />
      {/* Ring — lags behind cursor */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: '1.5px solid rgba(245, 181, 68, 0.45)',
          pointerEvents: 'none',
          zIndex: 99998,
          willChange: 'transform',
          translate: '-50% -50%',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s, scale 0.2s',
        }}
      />
    </>
  );
}

export default CustomCursor;
