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
        
    </div>
)
}

export default Nav