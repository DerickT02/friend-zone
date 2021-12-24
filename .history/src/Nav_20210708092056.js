import  React  from 'react'
import {Link} from 'react-router-dom'

const Nav = ({handleLogout}) => {
<div>
    <Link to = '/'><button onClick = {handleLogout}>Logout</button></Link>
</div>
    
}

export default Nav