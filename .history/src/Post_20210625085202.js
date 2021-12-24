import React, { Component, useState, useEffect, useContext } from 'react'
import { GlobalContext } from './GlobalState'

const Post = (props) => {
    const {posts, removePostfromHomepage} = useContext(GlobalContext)
   
    console.log(removePostfromHomepage)
    return (
        <div>
            <img src = {props.image}></img>
            <h3>{props.caption}</h3>
            
        </div>
    )
}

export default Post