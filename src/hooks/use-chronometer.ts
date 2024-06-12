import { useState, useEffect, useImperativeHandle, useRef, useCallback, ForwardedRef } from 'react';

export const useChronometer = (isRunning: boolean, ref: ForwardedRef<unknown>) => {
  const [centiseconds, setCentiseconds] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const reset = useCallback(() => {
    setCentiseconds(0);
    startTimeRef.current = null;
  }, []);

  const animate = useCallback((time: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = time;
    }
    const elapsed = time - startTimeRef.current;
    setCentiseconds(Math.floor(elapsed / 10));
    intervalRef.current = requestAnimationFrame(animate);
  }, []);

  useImperativeHandle(ref, () => ({
    reset,
  }), [reset]);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = requestAnimationFrame(animate);
    } else if (intervalRef.current) {
      cancelAnimationFrame(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) {
        cancelAnimationFrame(intervalRef.current);
      }
    };
  }, [isRunning, animate]);

  return centiseconds;
};
