import React, { useState, useEffect } from "react";
import { Button } from "antd";
import useAlertHook from "./AlertHook";

function Counter() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setCount(count + 1);
  //   }, 1000);
  //   return () => clearInterval(id);
  // }, [count]); // 如果去除依赖，则会每次更新都一样 0 + 1， 但每次都会创建定时器，清除定时器

  // 优化, 只调用一次， 移除依赖，并且没有对React撒谎; 但也不完美，如果需要依赖某个props去计算state
  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <h1>{count}</h1>;
}

function CountDemo() {
  // 声明一个叫 “count” 的 state 变量, 初始值 0
  const [count, setCount] = useState(0);
  const AlertHookNode = useAlertHook({ title: "点击次数统计" });

  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    const title = `Effect Hook:  You clicked ${count} times`;
    const countP = document.getElementById("countTitle");
    countP && (countP.innerHTML = title);
  });

  return (
    <div>
      {AlertHookNode}
      <p>State Hook: You clicked {count} times</p>
      <p id="countTitle"></p>
      <Counter></Counter>
      <Button onClick={() => setCount(count + 1)} icon="plus" type="primary">
        add count
      </Button>
    </div>
  );
}

export default CountDemo;
