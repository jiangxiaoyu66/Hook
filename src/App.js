import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   const  [count, addCount] = useState(0);

//   return (
//     <div>
//       <p>你已经点击了{count}次</p>
//       <button onClick={() => addCount(count+1)}>点击</button>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      count: 0,
    }
  }

  addCount() {
    const {count} = this.state;
    const newCount = count+1
    this.setState({
      count:newCount,
    })
  }

  render(){
    const { count } = this.state;
    return (
      <div>
        <p>你已经点击了{count}次了！！</p>
        <button onClick={() => this.addCount()}>点击</button>
      </div>
    )
  }
}

export default App;
