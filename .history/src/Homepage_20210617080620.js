import React, { Component, useState, useEffect, useContext } from 'react'
import { GlobalContext } from './GlobalState'
import {Link} from 'react-router-dom'
import Post from './Post'

const Homepage = ({handleLogout}) => {
    const {posts, addPosttoHomepage} = useContext(GlobalContext)
    const [input, setInput] =  useState('')

    const inputChange = (e) => {
        setInput(e.target.value)
    }

    function deletePost(id){
        posts.filter(post => post.id !== id)
    }

    return (
        <div>
            <h1>Friendzone</h1>
            <Link to ='/'><button onClick = {handleLogout}>Logout</button></Link>
            <input placeholder = "caption" value = {input} onChange={inputChange}></input>
            <button onClick = {() => addPosttoHomepage({caption:input.slice()})}>Add post</button>
            <br/>
            <input type ='file'></input>
            

            {posts.map((post) => {
                return (
                    <div>
                    <Post key = {Math.random} caption = {post.caption}/>
                    
                    </div>
                )
            })}
        </div>
    )
}
export default Homepage