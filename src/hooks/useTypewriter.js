import { useEffect, useState } from 'react';

export function useTypewriter(text, { speed = 32, startDelay = 0, enabled = true } = {}) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setDisplayed(text);
      setDone(true);
      return;
    }

    let i = 0;
    let timeoutId;

    const startId = setTimeout(() => {
      const tick = () => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i < text.length) {
          timeoutId = setTimeout(tick, speed);
        } else {
          setDone(true);
        }
      };
      tick();
    }, startDelay);

    return () => {
      clearTimeout(startId);
      clearTimeout(timeoutId);
    };
  }, [text, speed, startDelay, enabled]);

  return { displayed, done };
}
