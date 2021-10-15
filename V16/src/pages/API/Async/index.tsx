import React from 'react';
import { Row, Col, Spin } from 'antd';
import DocLine from '@/components/DocLine';
import Demo from '@/components/Demo';
import CodeAce from '@/components/CodeAce';
import DidCatch from './DidCatch';
import SuspenseMini, { createFetcher } from './SuspenseMini';

const fetch = createFetcher(function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: '《React进阶实践指南》',
        author: 'alien',
      });
    }, 3000);
  });
});

function Text() {
  const data = fetch();
  return (
    <div>
      name: {data.name}
      author:{data.author}
    </div>
  );
}

function CustomHook() {
  return (
    <div>
      <h2>异步组件原理</h2>
      <p>通过 componentDidCatch 原理，讲解最通俗异步组件原理</p>
      <DocLine>
        <a href="https://zh-hans.reactjs.org/docs/react-component.html#componentdidcatch">
          错误处理 componentDidCatch
        </a>
        <a href="https://zh-hans.reactjs.org/docs/react-api.html#suspense">
          React.Suspense加载组件
        </a>
      </DocLine>
      <DocLine type="warn">
        <CodeAce code={`componentDidCatch(error, info)`}></CodeAce>
        <ul>
          <li>error —— 抛出的错误。</li>
          <li>info —— 带有 componentStack key 的对象，其中包含有关组件引发错误的栈信息</li>
        </ul>
      </DocLine>
      <DocLine type="warn">
        <CodeAce code={`<React.Suspense fallback={<Spin />}>{children}</React.Suspense>`}></CodeAce>
        <ul>
          <li>
            可以指定加载指示器（loading indicator），以防其组件树中的某些子组件尚未具备渲染条件。
          </li>
          <li>懒加载组件 React.lazy 是 {'<React.Suspense>'} 支持的唯一用例</li>
          <li>未来支持其它使用场景，如数据获取等</li>
        </ul>
      </DocLine>
      <Demo title="异步组件示例">
        <Row gutter={16}>
          <Col md={12} xs={24}>
            <DidCatch />
          </Col>
          <Col md={12} xs={24}>
            <SuspenseMini fallback={<Spin>loading...</Spin>}>
              <Text />
            </SuspenseMini>
          </Col>
        </Row>
      </Demo>
    </div>
  );
}

export default CustomHook;
