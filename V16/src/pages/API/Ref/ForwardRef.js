import React, { useEffect } from 'react';

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

const ForwardRef = () => {
  // You can now get a ref directly to the DOM button:
  const ref = React.createRef();

  useEffect(() => {
    console.log(ref.current);
  });

  return <FancyButton ref={ref}>Click me!</FancyButton>;
};

export default ForwardRef;
