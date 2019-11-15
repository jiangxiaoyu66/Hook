import React, { createContext,useReducer, useEffect } from 'react';

export const ColorContext = createContext({})

const reducer = ( state, action) => {
    console.log(action)
    switch (action.type) {
        case 'updateColor':{
            return action.color
        }
        default:
            return state
    }
}

export const Color = props=>{
    const [color, dispatch] = useReducer(reducer, "blue");
    return (
        <ColorContext.Provider value={{color,dispatch}}>
            {props.children}
        </ColorContext.Provider>
    )
}