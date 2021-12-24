import { render } from '@testing-library/react'
import {useState}  from 'react'
import {Link} from 'react-router-dom'

const Nav = ({handleLogout}) => {
const [makePost, setMakePost] = useState(false)

function handlePost(){
    if(makePost === true){
        setMakePost(false)
    } else{
        setMakePost(true)
    }
}

return(
    <div>
        <h1>Navigation</h1>
        <button onClick={handleLogout}>Logout</button>
        <button onClick = {handlePost}>Toggle</button>
        <h1>{makePost ? <><input placeholder = "caption" value = {input} onChange={inputChange}></input>
            <button onClick = {() => addPosttoHomepage({key:Math.random(), caption:input.slice(), image: url})}>Add post</button>
            <br/>
            <input type ='file' placeholder="Upload Image" accept="image/*" onChange = {(event) => {setImage(event.target.files[0])}}></input>
            <button onClick = {uploadImage}>Upload</button> </>: ''}</h1>
    </div>
)
}

export default Nav