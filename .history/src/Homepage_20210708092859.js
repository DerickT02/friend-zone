import React, { Component, useState, useEffect, useContext } from 'react'
import { GlobalContext } from './GlobalState'
import {Link} from 'react-router-dom'
import Nav from './Nav'
import Axios from 'axios'
import storage from './fire'

const Homepage = ({handleLogout}) => {
    const {posts, addPosttoHomepage, removePostfromHomepage} = useContext(GlobalContext)
    const [input, setInput] =  useState('')
    const [image, setImage] = useState('')
    const [url, setUrl] = useState('') 
    
    const inputChange = (e) => {
        setInput(e.target.value)
    }


    const uploadImage = () => {
        
        const formData = new FormData()
        formData.append('file', image)
        formData.append('upload_preset', 'image_upload')
        
        Axios.post('https://api.cloudinary.com/v1_1/friendzone-/image/upload',formData).then((res) => {setUrl(res.data.url)})
        
    console.log(url)
        
        
    }

 


    return (
        <div>
            
            
            <Link to ='/'><button onClick = {handleLogout}>Logout</button></Link>
            <input placeholder = "caption" value = {input} onChange={inputChange}></input>
            <button onClick = {() => addPosttoHomepage({key:Math.random(), caption:input.slice(), image: url})}>Add post</button>
            <br/>
            <input type ='file' placeholder="Upload Image" accept="image/*" onChange = {(event) => {setImage(event.target.files[0])}}></input>
            <button onClick = {uploadImage}>Upload</button>
            

            {posts.map((post) => {
                return (
                    <div>
                    <h1 key = {post.key}>{post.caption}</h1>
                    <img alt ='' src = {post.image} style = {{width : '300px'}}/>
                    <button onClick = {() => removePostfromHomepage(post.key)}>X</button>
                    </div>
                )
            })}
        </div>
    )
}
export default Homepage