import React, { Component, useState, useEffect, useContext } from 'react'
import { GlobalContext } from './GlobalState'

const Post = (props) => {
    const {posts, removePostfromHomepage} = useContext(GlobalContext)
   
    console.log(removePostfromHomepage)
    return (
        <div>
            <h1>{props.caption}</h1>
            <img src = {props.image}></img>
        </div>
    )
}

export default Post