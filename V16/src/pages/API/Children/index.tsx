import { Component } from 'react';
import Demo from '@/components/Demo';
import DocLine from '@/components/DocLine';
import CodeAce from '@/components/CodeAce';

const code = 'React.Children.map(children, function[(thisArg)])';
const code2 = 'React.Children.forEach(children, function[(thisArg)])';
const code3 = 'React.Children.count(children)';
const code4 = 'React.Children.only(children)';
const code5 = 'React.Children.toArray(children)';

class Children extends Component<Record<string, unknown>, Record<string, unknown>> {
  render() {
    return (
      <div>
        <h1>React.Children</h1>
        <p>React.Children 提供了用于处理 this.props.children 不透明数据结构的实用方法</p>
        <DocLine>
          <a href="https://react.docschina.org/docs/react-api.html#reactchildren">React.Children</a>
        </DocLine>
        <Demo title="React.Children">
          <div>
            <h2>类数组遍历</h2>
            <p>map遍历</p>
            <CodeAce code={code}></CodeAce>
            <p>forEach遍历</p>
            <CodeAce code={code2}></CodeAce>
            <h2>基本判断</h2>
            <p>组件总数量</p>
            <CodeAce code={code3}></CodeAce>
            <p>是否只有一个子节点（一个 React 元素）</p>
            <CodeAce code={code4}></CodeAce>
            <p>杂的数据结构以数组的方式扁平展开并返回</p>
            <CodeAce code={code5}></CodeAce>
          </div>
        </Demo>
        <DocLine type="warn">
          如果 children 是一个 Fragment 对象，它将被视为单一子节点的情况处理，而不会被遍历。
        </DocLine>
        <DocLine type="warn">
          React.Children.toArray() 在拉平展开子节点列表时，更改 key
          值以保留嵌套数组的语义。也就是说，toArray 会为返回数组中的每个 key
          添加前缀，以使得每个元素 key 的范围都限定在此函数入参数组的对象内。
        </DocLine>
      </div>
    );
  }
}

export default Children;
