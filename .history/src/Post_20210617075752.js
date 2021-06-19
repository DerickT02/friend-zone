import React, { Component, useState, useEffect, useContext } from 'react'
import { GlobalContext } from './GlobalState'

const Post = (props) => {
    const {posts} = useContext(GlobalContext)
    const deletePost = (id) => {
        posts.filter(post => post.id !== id)
    }

    return (
        <div>
            <h1 key = {props.id}>{props.caption}</h1>
            <button onClick = {deletePost(props.id)}>X</button>
        </div>
    )
}

export default Post