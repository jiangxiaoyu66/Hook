import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home';
import ListPage from './list-page';
import {BrowserRouter, Route, Link} from 'react-router-dom'


/*使用useState*/

/* useState基本使用 */
// function App() {
//   const  [count, addCount] = useState(0);

//   return (
//     <div>
//       <p>你已经点击了{count}次</p>
//       <button onClick={() => addCount(count+1)}>点击</button>
//     </div>
//   );
// }


// class App extends React.Component {
//   constructor(props){
//     super(props)
//     this.state={
//       count: 0,
//     }
//   }

//   addCount() {
//     const {count} = this.state;
//     const newCount = count+1
//     this.setState({
//       count:newCount,
//     })
//   }

//   render(){
//     const { count } = this.state;
//     return (
//       <div>
//         <p>你已经点击了{count}次了！！</p>
//         <button onClick={() => this.addCount()}>点击</button>
//       </div>
//     )
//   }
// }


/* useState和setState的区别 */
// function App() {
//   const  [count, addCount] = useState(0);

//   return (
//     <div>
//       <p>你已经点击了{count}次</p>
//       <button onClick={() => {
//         addCount(count+1)
//         console.log(count)
//       }}>点击</button>
//     </div>
//   );
// }




/*使用useEffect：
  解释一下副作用：对外部变量产生影响的叫做副作用，纯函数没有副作用（https://www.jianshu.com/writer#/notebooks/39505251/notes/56299215/preview）
  抛出自己遇到的问题：
  1.useEffect中文意思是使用副作用，但是只有useEffect时候才会产生副作用吗
  2.和类组件中的有状态组件和无状态组件是一个概念吗（我认为是的）
  一.介绍useEffect的基础用法
  二.介绍useEffect的解绑，实现组件的卸载
*/

function App() {
  const  [count, addCount] = useState(0);

  // 1.简单使用useEffect替代DidMount和DidUpdate
  useEffect(()=>{
    console.log(`useEffect => 你点击了${count}次}`)
    /*
      2.使用返回值的方式替代WillUnmount,清除effect
        useEffect大致的执行顺序：渲染 => （如果上面有执行过effect钩子，则先卸载） => useEffect钩子 
    */ 
    return(()=>{
      console.log('解绑副作用')
    })
  },
  // 3.条件执行解绑方法
    /*
      解绑的各种情况：
      [count]：count发生改变就会解绑
      [count === 3]：count为3时解绑
      []:组件被卸载时解绑（此示例看下面的跳转的例子）
      不加[]：每次都会自动解绑effect
    */
  []
  )


  return (
    <div>
      <p>你已经点击了{count}次</p>
      <button onClick={() => addCount(count+1)}>点击</button>

      <BrowserRouter>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/list-page'>ListPage</Link></li>
        </ul>
        {/* 解绑的组件 */}
        <Route path='/' exact component={Home} />
        {/* 这里是不解绑的组件 */}
        <Route path='/list-page' component={ListPage} />
      </BrowserRouter>

    </div>
  );
}




// class App extends React.Component {
//   constructor(props){
//     super(props)
//     this.state={
//       count: 0,
//     }
//   }

//   componentDidMount() {
//     console.log(`componentDidMount => 你点击了${this.state.count}次`)
//   }

//   componentDidUpdate() {
//     console.log(`componentDidUpdate => 你点击了${this.state.count}次`)
//   }



//   addCount() {
//     const {count} = this.state;
//     const newCount = count+1
//     this.setState({
//       count:newCount,
//     })
//   }

//   render(){
//     const { count } = this.state;
//     return (
//       <div>
//         <p>你已经点击了{count}次了！！</p>
//         <button onClick={() => this.addCount()}>点击</button>
//       </div>
//     )
//   }
// }


export default App;
