import React, {createContext, useReducer, useEffect, useState} from 'react'
import Appreducer from './Appreducer'

const initialState = {
    posts: localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')) : [],
    error: null
    
    
}
console.log(initialState.posts)

export const GlobalContext  = createContext(initialState)

export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(Appreducer, initialState)

    const addPosttoHomepage = (post) => {
        dispatch({'type':'ADD_POST_TO_HOMEPAGE', payload: post})
    }

    const removePostfromHomepage = (caption) => {
        dispatch({'type':'REMOVE_POST_FROM_HOMEPAGE', payload: caption})
    }

    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(state.posts))
    }, [state])


    return (
        <GlobalContext.Provider value = {{posts: state.posts, addPosttoHomepage, removePostfromHomepage}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider