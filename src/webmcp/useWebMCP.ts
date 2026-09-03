import { useEffect, useState } from 'react';
import { registerAllTools } from './tools';
export function useWebMCP() {
  const [available, setAvailable] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const mc = document.modelContext;
    if (!mc) return;
    setAvailable(true);
    const controller = new AbortController();
    (async () => {
      try {
        await registerAllTools(controller.signal);
        setReady(true);
      } catch (err) {
        console.warn('[WebMCP] registration failed:', err);
      }
    })();
    return () => controller.abort();
  }, []);
  return { available, ready };
}
