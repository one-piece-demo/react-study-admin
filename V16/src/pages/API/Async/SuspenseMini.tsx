import React from 'react';

export function createFetcher(fn: () => Promise<any>) {
  const fetcher: any = {
    status: 'pedding',
    result: null,
    p: null,
  };
  return (): any => {
    const getDataPromise = fn();
    fetcher.p = getDataPromise;
    getDataPromise.then((result) => {
      /* 成功获取数据 */
      fetcher.result = result;
      fetcher.status = 'resolve';
    });
    if (fetcher.status === 'pedding') {
      /* 第一次执行中断渲染，第二次 */
      throw fetcher;
    }
    /* 第二次执行 */
    if (fetcher.status === 'resolve') return fetcher.result;
  };
}

interface SuspenseMiniProps {
  fallback: React.ReactNode;
}

interface SuspenseMiniState {
  isResolve: boolean;
}

class SuspenseMini extends React.Component<SuspenseMiniProps, SuspenseMiniState> {
  state = {
    isResolve: true,
  };
  componentDidCatch(fetcher: any) {
    const p = fetcher.p;
    this.setState({ isResolve: false });
    // 捕获成功状态
    Promise.resolve(p).then(() => {
      this.setState({ isResolve: true });
    });
  }
  render() {
    const { fallback, children } = this.props;
    const { isResolve } = this.state;
    return isResolve ? children : fallback;
  }
}

export default SuspenseMini;
