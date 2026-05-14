import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export function useCountUp(end, duration = 1.4) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let frame = 0;
    const totalFrames = Math.round(duration * 60);

    // Ease-out cubic
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    const tick = () => {
      frame++;
      const progress = easeOut(frame / totalFrames);
      setCount(Math.round(progress * end));
      if (frame < totalFrames) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, end, duration]);

  return [count, ref];
}
