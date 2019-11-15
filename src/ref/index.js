import React, { useRef } from "react";

function Index() {
  const inputValue = useRef(null);
  const handleClick = () => {
    console.log(inputValue);
  };
  return (
    <div>
      <input ref={inputValue} type="text" />
      <button onClick={handleClick}>添加内容</button>
    </div>
  );
}

export default Index;
