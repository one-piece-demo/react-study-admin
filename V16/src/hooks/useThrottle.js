/**
 * 节流
 */
import { useEffect, useRef, useState } from 'react';

const useThrottle = (fn, ms = 30, deps = []) => {
  const previous = useRef(0);
  const [time, setTime] = useState(ms);
  useEffect(() => {
    const now = Date.now();
    if (now - previous.current > time) {
      fn(deps);
      previous.current = now;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  const cancel = () => {
    setTime(0);
  };

  return [cancel];
};

export default useThrottle;
