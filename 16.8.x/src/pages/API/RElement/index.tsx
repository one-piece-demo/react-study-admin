import React, { Component } from "react";
import RCreate from "./Create";
import RClone from "./Clone";
import RValid from "./Valid";

class RElement extends Component<{}, {}> {
  render() {
    return (
      <div>
        <h1>React Element</h1>
        <p>React 处理JSX元素</p>
        <RCreate></RCreate>
        <RClone></RClone>
        <RValid></RValid>
      </div>
    );
  }
}

export default RElement;
