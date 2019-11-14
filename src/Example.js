import React, { useState , createContext, useReducer } from 'react';
import ExampleChild from './ExampleChild'

export const CountContext = createContext()

// function Example(){
//     const [ count , setCount ] = useState(0);
//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={()=>{setCount(count+1)}}>click me</button>

//             <CountContext.Provider value={count}>
//               <ExampleChild />
//             </CountContext.Provider>
//         </div>
//     )
// }

function Example(){

  /* 
    redux中的reducer
  */
  // const defaultState = {}  //默认数据
  // export default (state = defaultState,action)=>{  //就是一个方法函数
  //     return state
  // }

  /* 
    react中的reducer
      state，是上一个state
      action是发过来的指令
      前面数组中的count是返回的值
      dispatch是useReducer中的函数,参数就是发过来的action

      useReducer的第二个参数是初始状态
  */
  const [count, dispatch] = useReducer((state,action) => {
    switch(action){
      case('add'): {
        return state+1
      }
      case('delete'): {
        return state-1
      }

      default:
        return state
    }
  }, 0)
  return (
      <div>
          <p>You clicked {count} times</p>
          <button onClick={()=>{dispatch('add')}}>加法</button>
          <button onClick={()=>{dispatch('delete')}}>减法</button>

          <CountContext.Provider value={count}>
            <ExampleChild />
          </CountContext.Provider>
      </div>
  )
}




export default Example;
