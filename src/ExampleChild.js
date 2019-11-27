import React,{useContext, createContext} from 'react';
import {CountContext} from './Example'

function ExampleChild() {
  // const countContext = useContext(CountContext)
  
  return(
    <div>
      <CountContext.Consumer>
        {/* 注意这里的格式，不是直接单写一个value，第一个value是参数 */}
        {value => `这里是接收过来的值：${value}`}
      </CountContext.Consumer>
    </div>
  )
}

export default ExampleChild;