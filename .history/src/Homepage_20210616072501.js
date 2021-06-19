import React, { Component, useState, useEffect, useContext } from 'react'
import { GlobalContext } from './GlobalState'
import {Link} from 'react-router-dom'

const Homepage = ({handleLogout}) => {
    const {posts, addPosttoHomepage, removePostfromHomepage} = useContext(GlobalContext)
    const [input, setInput] =  useState('')

    const inputChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <div>
            <h1>Friendzone</h1>
            <Link to ='/'><button onClick = {handleLogout}>Logout</button></Link>
            <input placeholder = "caption" value = {input} onChange={inputChange}></input>
            <button onClick = {() => addPosttoHomepage({id: posts.length, caption: input.slice()})}>Add post</button>
            <br/>
            <input type ='file'></input>
            

            {posts.map((post) => {
                return (
                    <div>
                    <h1 key = {post.id}>{post.caption}</h1>
                    <button onClick = {() => {removePostfromHomepage(post.caption)}}>X</button>
                    </div>
                )
            })}
        </div>
    )
}
export default Homepage