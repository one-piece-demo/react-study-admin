import React, { Component } from 'react';
import Demo from '@/components/Demo';
import DocLine from '@/components/DocLine';
import CodeAce from '@/components/CodeAce';

const code = `React.createElement(
  type,
  [props],
  [...children]
)`;

class RCreate extends Component<Record<string, unknown>, Record<string, unknown>> {
  render() {
    return (
      <div>
        <h2>createElement()</h2>
        <p>
          创建并返回指定类型的新 React 元素。其中的类型参数既可以是标签名字符串（如 'div' 或
          'span'），也可以是 React 组件 类型 （class 组件或函数组件），或是 React fragment 类型
        </p>
        <DocLine>
          <a href="https://react.docschina.org/docs/react-api.html#createelement">
            React.createElement()
          </a>
        </DocLine>
        <Demo title="React.createElement">
          <div>
            <CodeAce code={code}></CodeAce>
          </div>
        </Demo>
      </div>
    );
  }
}

export default RCreate;
