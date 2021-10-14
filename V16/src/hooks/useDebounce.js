/**
 * 防抖 hooks
 */

import { useEffect, useRef } from 'react';

const useDebounce = (fn, ms = 30, deps = []) => {
  let timeout = useRef();
  useEffect(() => {
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      fn(deps);
    }, ms);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  const cancel = () => {
    clearTimeout(timeout.current);
    timeout = null;
  };

  return [cancel];
};

export default useDebounce;

/**
 * @wxample
 * // ...
import { useDebounce } from 'hooks'
const Home = (props) => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [cancel] = useDebounce(() => {
    setB(a)
  }, 2000, [a])

  const changeIpt = (e) => {
    setA(e.target.value)
  }
  return <div>
    <input type="text" onChange={changeIpt} />
    { b } { a }
  </div>
}

 */
