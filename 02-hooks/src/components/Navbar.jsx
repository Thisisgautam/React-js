import React from 'react'
import { useEffect } from 'react'
const Navbar = ({ color }) => {
    //Case 1 : This runs on every render of the component
    useEffect(() => {
        alert("I will run on every render of Navbar")
    },)
    //Case 2 : This runs on first render of the component only
    useEffect(() => {
        alert("I will run only on first render of Navbar")
    },[])
    //Case 3 : This runs when color is changed
    useEffect(() => {
        alert("I will run when color is changed")
    }, [color])

    //Example of cleanup function
    // to test this try commenting the Navbar component in App.jsx
    useEffect(() => {
        return () => {
            alert("I will run on every unmount")
        }
    }, [])

    return (
        <div className='Navbar'>
            <ul><li>Home</li>
                <li>Contact</li>
                <li>About Us</li></ul>
            I have a color of {color}
        </div>
    )
}

export default Navbar
