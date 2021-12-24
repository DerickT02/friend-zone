import { render } from '@testing-library/react'
import {useState}  from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'
const Nav = ({handleLogout}) => {
const [makePost, setMakePost] = useState(false)




return(
    <div className = 'Nav'>
        <h1>Navigation</h1>
        <button onClick={handleLogout}>Logout</button>
        
    </div>
)
}

export default Nav