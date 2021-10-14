import React, { Component } from 'react';
import Demo from '@/components/Demo';
import DocLine from '@/components/DocLine';
import MyComponent from './CreateRef';
import ForwardRef from './ForwardRef';

class Rref extends Component<{}, {}> {
  render() {
    return (
      <div>
        <h1>React Ref</h1>
        <p>创建Ref，获取React元素实例</p>
        <DocLine>
          <a href="https://react.docschina.org/docs/react-api.html#reactcreateref">React Ref</a>
        </DocLine>
        <Demo title="React Ref">
          <div>
            <h2>React.createRef 创建一个能够通过 ref 属性附加到 React 元素的 ref</h2>
            <MyComponent></MyComponent>
            <h2>
              React.forwardRef 会创建一个React组件，这个组件能够将其接受的 ref
              属性转发到其组件树下的另一个组件中
            </h2>
            <ForwardRef></ForwardRef>
          </div>
        </Demo>
      </div>
    );
  }
}

export default Rref;
