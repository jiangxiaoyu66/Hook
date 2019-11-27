import React, { useState ,useEffect ,useCallback } from 'react';

function useWinSize(){
  const [ size , setSize] = useState({
      width:document.documentElement.clientWidth,
      height:document.documentElement.clientHeight
  })

  const onResize = useCallback(()=>{
      setSize({
          width: document.documentElement.clientWidth,
          height: document.documentElement.clientHeight
      })
  },[]) 
  useEffect(()=>{
    // 动态宽高计算
      window.addEventListener('resize',onResize)
      return ()=>{
          window.removeEventListener('resize',onResize)
      }
  },[])

  return size;

}

function Custom(){

  const size = useWinSize()
  return (
      <div>页面Size:{size.width}x{size.height}</div>
  )
}

export default Custom 