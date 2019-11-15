// import React,{useState} from 'react';

// function Index() {
//   const [appleState,setApple] = useState('苹果在树上')
//   const [bananaState,setBanana] = useState('香蕉在树上')
  

//   return (
//     <div>
//       {/* 注意不能直接onClick={setApple('苹果在脑瓜子上')} */}
//       <button onClick={() => setApple('苹果在地上')}>摇晃苹果树</button>
//       <button onClick={() => setBanana('香蕉在地上')}>摇晃香蕉树</button>
//       <Child apple={appleState}>{bananaState}</Child>
//     </div>
//   )
// }

// function Child({apple,children}) {
//   function changeApple(apple){
//     console.log('他来了，他来了，苹果向我们飞来了！')
//     return apple+'向我们飞来了'
//   }
//   return(
//     <div>
//       <button>{changeApple}</button>
//       {children}
//     </div>
//   )
// }

// export default Index

import React , {useState,useMemo} from 'react';


function Index(){
    const [xiaohong , setXiaohong] = useState('小红待客状态')
    const [zhiling , setZhiling] = useState('志玲待客状态')
    return (
        <>
            <button onClick={()=>{setXiaohong((new Date().getTime()))}}>小红</button>
            <button onClick={()=>{setZhiling(new Date().getTime()+',志玲向我们走来了')}}>志玲</button>
            <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
        </>
    )
}

function ChildComponent({name,children}){
  function changeXiaohong(name){
      console.log('她来了，她来了。小红向我们走来了')
      return name+',小红向我们走来了'
  }

  const actionXiaohong = useMemo(() => 
    changeXiaohong(name)
  )

  // const actionXiaohong = changeXiaohong(name)
 
  // const actionXiaohong = useMemo(()=>changeXiaohong(name),[name]) 
  return (
      <>
            {/* 不加useMemo，每次执行志玲都会执行小红的方法 */}
          {/* 小红的状态 */}
          <div>{actionXiaohong}</div>
          {/* 志玲的状态 */}
          <div>{children}</div>
      </>
  )
}

export default Index;

