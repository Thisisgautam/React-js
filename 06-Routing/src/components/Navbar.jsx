import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <nav>
                <NavLink className={(e)=>{ return e.isActive?"red":""}} to={'/home'}><li>Home</li></NavLink>
                <NavLink className={(e)=>{ return e.isActive?"red":""}} to={'/about'}><li>About</li></NavLink>
                <NavLink className={(e)=>{ return e.isActive?"red":""}} to={`/user/:username`}><li>User</li></NavLink>
            </nav>
        </div>
    )
}

export default Navbar
