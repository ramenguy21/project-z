import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <Link className="mr-2" to='/signup'>Sign Up</Link>
                    <Link className="mr-2" to='/signin'>Sign In</Link>
                    <Link className="mr-2" to='/editor'>Editor</Link>
                    <Link className="mr-2" to='/appointment'>Appointment Form</Link>
                </ul>
            </div>
        )
    }
}

export default NavBar