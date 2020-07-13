import React, { Component } from "react";
import Demo from "@/components/Demo";
import DocLine from "@/components/DocLine";
import CodeAce from "@/components/CodeAce";

const code = `React.cloneElement(
  element,
  [props],
  [...children]
)`;

const code2 = "<element.type {...element.props} {...props}>{children}</element.type>";

class RClone extends Component<{}, {}> {
  render() {
    return (
      <div>
        <h2>cloneElement()</h2>
        <p>
          以 element 元素为样板克隆并返回新的 React 元素。返回元素的 props 是将新的 props
          与原始元素的 props 浅层合并后的结果。新的子元素将取代现有的子元素，而来自原始元素的 key 和
          ref 将被保留。
        </p>
        <DocLine>
          <a href="https://react.docschina.org/docs/react-api.html#cloneelement">
            React.cloneElement()
          </a>
        </DocLine>
        <Demo title="React.cloneElement">
          <div>
            <CodeAce code={code}></CodeAce>
            React.cloneElement() 几乎等同于
            <CodeAce code={code2}></CodeAce>
          </div>
        </Demo>
        <DocLine type="warn">
          这也保留了组件的 ref。这意味着当通过 ref
          获取子节点时，你将不会意外地从你祖先节点上窃取它。相同的 ref 将添加到克隆后的新元素中
        </DocLine>
      </div>
    );
  }
}

export default RClone;
