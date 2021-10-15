import React, { useState } from 'react';

interface DidCatchState {
  isResolve: boolean;
  childThrowMes: any;
}
interface IndexProps {
  isResolve: boolean; // 判断组件是否加在完成
  data: any;
}

// 无效组件模式, 直接抛出promise对象获取不到，对象包裹一层
function Index({ isResolve = false, data }: IndexProps) {
  const [likeNumber, setLikeNumber] = useState(0);
  if (isResolve) {
    return (
      <div>
        <p> 名称：{data.name} </p>
        <p> star：{likeNumber} </p>
        <button onClick={() => setLikeNumber(likeNumber + 1)}>点赞</button>
      </div>
    );
  } else {
    // eslint-disable-next-line no-throw-literal
    throw {
      current: new Promise((resolve) => {
        // 模拟加载
        setTimeout(() => {
          resolve({ name: '《React进阶实践指南》' });
        }, 1000);
      }),
    };
  }
}

export default class DidCatch extends React.Component<Record<string, unknown>, DidCatchState> {
  state = {
    isResolve: false,
    childThrowMes: {} as any,
  };

  componentDidCatch(e: any) {
    console.log('error:', e);
    const errorPromise = e.current;
    Promise.resolve(errorPromise).then((res) => {
      this.setState({ isResolve: true, childThrowMes: res });
    });
  }
  render() {
    const { isResolve, childThrowMes } = this.state;
    return (
      <div>
        <h3>类 Susponse 的概念</h3>
        hello world , let us learn React!
        {/* {!isResolve ? (
          <Index isResolve={isResolve} data={childThrowMes} />
        ) : (
          <div> {this.state.childThrowMes.name} </div>
        )} */}
        <Index isResolve={isResolve} data={childThrowMes} />
      </div>
    );
  }
}
