import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home';
import ListPage from './list-page';
import {BrowserRouter, Route, Link} from 'react-router-dom'


/*使用useState*/

// // function App() {
// //   const  [count, addCount] = useState(0);

// //   return (
// //     <div>
// //       <p>你已经点击了{count}次</p>
// //       <button onClick={() => addCount(count+1)}>点击</button>
// //     </div>
// //   );
// // }

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





/*使用useEffect*/

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
        <Route path='/' exact component={Home} />
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
