import React, {useEffect} from 'react';

function ListPage(){
  useEffect(()=>{
    console.log('来啦，老弟！这里是ListPage组件')
  })
  return (
    <h1>这里是list-page页面</h1>
  )
}
export default ListPage;