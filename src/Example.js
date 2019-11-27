import React, { useState , createContext, useReducer } from 'react';
import ExampleChild from './ExampleChild'

export const CountContext = createContext()


/* 
  使用useContext传参：
  1.创建Context并导出
  2.使用provider发送，用consumer(标签)或者useContext(函数)接收
*/

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










/* 
  使用useReducer处理数据：
  1.回顾redux中redux如何实现的
  2. 对比一下redux中，参数意义基本上是一致的
*/

function Example(){
  /* 
    redux中的reducer
  */
  // const defaultState = {}  //默认数据
  // export default (state = defaultState,action)=>{  //就是一个方法函数
  //     return state
  // }

  /* 
    Hooks中的useReducer
      state，是上一个state
      action是发过来的指令
      前面数组中的count是返回的值
      dispatch是useReducer中的函数,参数就是发过来的action
      最后的参数是state的默认值

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
      // 这边其实扮演的是view层，上面的useReducer扮演的是reducer层
      <div>
          <p>You clicked {count} times</p>
          <button onClick={()=>{dispatch('add')}}>加法</button>
          <button onClick={()=>{dispatch('delete')}}>减法</button>
          {/* context传值 */}
          <CountContext.Provider value={count}>
            <ExampleChild />
          </CountContext.Provider>
      </div>
  )
}




export default Example;
