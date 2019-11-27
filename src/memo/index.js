/*
    useMemo基本使用：
    1.单纯传参给子函数后
    2.证明一下每次点击“刘能”按钮，赵四对应的方法都是执行，浪费了性能
    3.使用useMemo解决问题，就不会每次浪费性能
    总结：在父组件状态变化，子组件没有必要跟着改变状态的时候使用
    4.讲一下useCallback和useMemo的异同点,介绍一下useCallback
    5.讲一下useMemo和useEffect的区别（直接写个例子给大家看，用useEffect看一下效果
    （个人认为useEffect可以实现useMemo的效果，但是还是分开比较好）

*/
import React , {useState,useMemo, useCallback} from 'react';


function Index(){
    const [zhaosi , setZhaosi] = useState('赵四待客状态')
    const [liuneng , setLiuneng] = useState('刘能待客状态')
    return (
        <>
            <button onClick={()=>{setZhaosi((new Date().getTime())+',赵四向我们走来了')}}>赵四</button>
            <button onClick={()=>{setLiuneng(new Date().getTime()+',刘能向我们走来了')}}>刘能</button>
            <ChildComponent name={zhaosi}>{liuneng}</ChildComponent>
        </>
    )
}

// 把"刘能"和"赵四"的状态通过参数和props.children的形式传给子函数
function ChildComponent({name,children}){
//   const changeZhaosi = (name) => {
//       console.log(name,'他来了，他来了。赵四向我们走来了')
//       return name+',赵四向我们走来了'
//   }

//   我犯的错误，这里获取不到返回值，（）=>是一个表达式
//   const actionZhaosi = useMemo(()=>{
//     changeZhaosi(name)
//   })


// const actionZhaosi = useMemo(()=>changeZhaosi(name),[name]) 
//   const actionZhaosi = useCallback(()=>console.log('执行了useCallback钩子'),[name]) 


  return (
      <>
        {/* 不加useMemo，每次执行刘能都会执行赵四的方法 */}
          <div>{name}</div>
          {/* <div>{changeZhaosi(name)}</div> */}
          {/* <div>{actionZhaosi}</div> */}
          <div>{children}</div>
      </>
  )
}







/*
    使用use
*/
// function ChildComponent({name,children}){
//     const changeZhaosi = (name) => {
//         console.log('他来了，他来了。赵四向我们走来了')
//         return name+',赵四向我们走来了'
//     }
  
  
//       /*
//           useMemo和useCallback都会在组件第一次渲染的时候执行，之后会在其依赖的变量发生改变时再次执行；
//           并且这两个hooks都返回缓存的值，useMemo返回缓存的变量，useCallback返回缓存的函数。
//       */   
  
//       // const callback = useCallback(() => {
//       //     console.log(name);
//       // }, [name]);
  
   
//     // const actionZhaosi = useMemo(()=>changeZhaosi(name),[name]) 
//     return (
//         <>
//               {/* 不加useMemo，每次执行刘能都会执行赵四的方法 */}
//             {/* 赵四的状态 */}
//             <div>{changeZhaosi(name)}</div>
//             {/* 刘能的状态 */}
//             <div>{children}</div>
//         </>
//     )
//   }

export default Index;

