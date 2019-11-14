import React,{useContext, createContext} from 'react';
import {CountContext} from './Example'

function ExampleChild() {
  const countContext = useContext(CountContext)
  
  return(
    <div>
      {countContext}
    </div>
  )
}

export default ExampleChild;