import React, { useEffect } from 'react';

function Home(){
  useEffect(()=>{
    console.log('来啦，老弟！这里是Home组件')
    return(()=> {
      console.log('走啦，老弟！这里是Home组件')
    })
  },[])
  return (
    <h1>这里是home页面</h1>
  )
}
export default Home;