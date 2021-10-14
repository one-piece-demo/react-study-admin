/**
 * 监听元素 scroll
 */

import { useState, useEffect } from 'react';

// scrollRef 为 useRef对象
const useScroll = (scrollRef) => {
  const [pos, setPos] = useState([0, 0]);

  useEffect(() => {
    function handleScroll() {
      setPos([scrollRef.current.scrollLeft, scrollRef.current.scrollTop]);
    }
    scrollRef.current.addEventListener('scroll', handleScroll, false);
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      scrollRef.current.removeEventListener('scroll', handleScroll, false);
    };
  }, [scrollRef]);

  return pos;
};

export default useScroll;
