import React, { Component, useState, useEffect, useContext } from 'react'
import { GlobalContext } from './GlobalState'

const Post = (props) => {
    const {posts, removePostfromHomepage} = useContext(GlobalContext)
   
    console.log(removePostfromHomepage)
    return (
        <div>
            <h1 key = {props.id}>{props.caption}</h1>
            <button onClick = {() => {removePostfromHomepage(props)}}>X</button>
        </div>
    )
}

export default Post