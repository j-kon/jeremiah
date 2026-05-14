import { useEffect, useState } from 'react';

export function useBitcoinBlockHeight() {
  const [height, setHeight] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const res = await fetch('https://mempool.space/api/blocks/tip/height');
        if (!res.ok) return;
        const text = await res.text();
        const parsed = parseInt(text.trim(), 10);
        if (!cancelled && !isNaN(parsed)) setHeight(parsed);
      } catch {
        // network failures are silent — widget just stays hidden
      }
    };

    load();
    const id = setInterval(load, 10 * 60 * 1000);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  return height;
}
