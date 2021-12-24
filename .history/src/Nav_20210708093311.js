import { render } from '@testing-library/react'
import {useState}  from 'react'
import {Link} from 'react-router-dom'

const Nav = ({handleLogout}) => {
const [makePost, setMakePost] = useState(false)

render() {

    if(makePost === true){
        return (
            <div>
                <h1>Friendzone</h1>
                <Link to = '/'><button onClick = {handleLogout}>Logout</button></Link>
                <button>Create Post</button>
                
            </div>
        )
    }
}


    
}

export default Nav