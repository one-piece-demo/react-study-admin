import React from 'react';
interface Props {
  style: Record<string, any>;
  toPath: string;
}

const NotFound = (props: Props) => {
  return (
    <div className="bi-404" style={props.style}>
      <div className="bi-404-body-con">
        <div className="bi-404-body-con-bg"></div>
        <div className="bi-404-body-con-message">
          <p className="bi-404-body-con-message-info">此链接无法连线宇航员！</p>
          <p className="bi-404-body-con-message-text">您可换个地址继续尝试哦！</p>
        </div>
        <div className="bi-404-btn-con">
          <a href={props.toPath || '/'}>前往首页</a>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
