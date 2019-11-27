import React, { useRef } from "react";

function Index() {
  // useRef就相当于类组件中的createRef()
  const inputValue = useRef('xiaoxiao');
  const handleClick = () => {
    console.log(inputValue);
    console.log(inputValue.current.focus);
    console.log(inputValue.current.defaultValue);
    console.log(inputValue.current.value);
  };
  return (
    <div>
      <input ref={inputValue} type="text" />
      <button onClick={handleClick}>添加内容</button>
    </div>
  );
}

export default Index;
