import React, { Component } from "react";
import Demo from "@/components/Demo";
import DocLine from "@/components/DocLine";
import CodeAce from "@/components/CodeAce";

const code = "React.isValidElement(object)";

class RValid extends Component<{}, {}> {
  render() {
    return (
      <div>
        <h2>isValidElement()</h2>
        <p>验证对象是否为 React 元素，返回值为 true 或 false</p>
        <DocLine>
          <a href="https://react.docschina.org/docs/react-api.html#isvalidelement">
            React.isValidElement()
          </a>
        </DocLine>
        <Demo title="React.isValidElement">
          <div>
            <CodeAce code={code}></CodeAce>
          </div>
        </Demo>
      </div>
    );
  }
}

export default RValid;
