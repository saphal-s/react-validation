import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <ul>
                <a href=""></a>
                <Link to='/about' >About</Link>
                <li>home</li>
                <li>about</li>
                <li>contact</li>
            </ul>
        </div>
    )
}

export default Header