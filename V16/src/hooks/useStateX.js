/**
 * 扩展useState，支持更新后回调
 */

import { useState, useRef, useEffect } from "react";

const useStateX = initState => {
  const [state, setState] = useState(initState);
  const isUpdate = useRef();

  const setStateX = (state, fn) => {
    setState(prev => {
      isUpdate.current = fn;
      return typeof state === "function" ? state(prev) : state;
    });
  };

  useEffect(() => {
    if (isUpdate.current) {
      isUpdate.current();
    }
  });

  return [state, setStateX];
};

export default useStateX;
