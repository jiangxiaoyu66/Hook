import React, { useReducer, useContext } from "react";
import { ColorContext, updateColor } from "./color";

function Buttons() {
  const { dispatch } = useContext(ColorContext);
  console.log(111)
  console.log(dispatch)
  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: "updateColor",
            color: "red"
          });
        }}
      >
        红色
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "updateColor",
            color: "yelow"
          });
        }}
      >
        黄色
      </button>
    </div>
  );
}

export default Buttons;
