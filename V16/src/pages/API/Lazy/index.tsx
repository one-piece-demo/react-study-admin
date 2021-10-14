import React, { Component } from 'react';
import Demo from '@/components/Demo';
import DocLine from '@/components/DocLine';
import CodeAce from '@/components/CodeAce';

const code = `// 该组件是动态加载的
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    // 显示 <Spinner> 组件直至 OtherComponent 加载完成
    <React.Suspense fallback={<Spinner />}>
      <div>
        <OtherComponent />
      </div>
    </React.Suspense>
  );
}`;

class RClone extends Component<{}, {}> {
  render() {
    return (
      <div>
        <h1>React Lazy</h1>
        <p>
          React.lazy() 允许你定义一个动态加载的组件。这有助于缩减 bundle
          的体积，并延迟加载在初次渲染时未用到的组件
        </p>
        <DocLine>
          <a href="https://react.docschina.org/docs/react-api.html#reactlazy">React.lazy()</a>
        </DocLine>
        <Demo title="React.cloneElement">
          <div>
            <CodeAce code={code}></CodeAce>
          </div>
        </Demo>
        <DocLine type="warn">
          渲染 lazy 组件依赖该组件渲染树上层的 React.Suspense 组件。这是指定加载指示器（loading
          indicator）的方式。
        </DocLine>
        <DocLine type="warn">
          lazy 组件可以位于 Suspense 组件树的深处——它不必包装树中的每一个延迟加载组件。最佳实践是将
          Suspense 置于你想展示加载指示器（loading indicator）的位置，而 lazy() 则可被放置
        </DocLine>
        <DocLine type="warn">使用 React.lazy 的动态引入特性需要 JS 环境支持 Promise</DocLine>
      </div>
    );
  }
}

export default RClone;
