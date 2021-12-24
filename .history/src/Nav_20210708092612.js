import  React  from 'react'
import {Link} from 'react-router-dom'

const Nav = ({handleLogout}) => {
return (
    <div>
        <Link to = '/'><button onClick = {handleLogout}>Logout</button></Link>
        <button>Create Post</button>
    </div>
)

    
}

export default Nav