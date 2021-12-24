import {useState}  from 'react'
import {Link} from 'react-router-dom'

const Nav = ({handleLogout}) => {
return (
    <div>
        <h1>Friendzone</h1>
        <Link to = '/'><button onClick = {handleLogout}>Logout</button></Link>
        <button>Create Post</button>
        
    </div>
)

    
}

export default Nav