import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link mr-2" to='/signup'>Sign Up</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="mr-2 nav-link" to='/signin'>Sign In</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="mr-2 nav-link" to='/editor'>Editor</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="mr-2 nav-link" to='/appointment'>Appointment Form</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar