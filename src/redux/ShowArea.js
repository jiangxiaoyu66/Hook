import React , { useContext } from 'react';
import { ColorContext } from './color';

function ShowArea(){
    // 解释一下为什么不直接在这个文件中写useReducer，主要是为了更直观的展示context的跨级传参
    const {color} = useContext(ColorContext)
    return (
        <div style={{color:color}}>
            字体颜色为{color}
        </div>
    )
}

export default ShowArea