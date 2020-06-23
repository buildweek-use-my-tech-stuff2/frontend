import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const NavBar = props => {

    const logout= () => {
        localStorage.clear()
    }
    let user = localStorage.getItem('username')

    const NavBarLinks = styled.div`
        max-width: 100%;
        display: flex;
        justify-content: space-evenly
        
    `;
    return(
        <div className='navigation'>

            <h3>USE MY TECH STUFF</h3>

            <NavBarLinks>
                
                    <Link to='/'>Login</Link>
                    <Link to='/'onClick={logout}>Logout</Link>
                    <NavLink to='/dashboard'>Dashboard</NavLink>
                    <NavLink to='listings'>Listings</NavLink>
                
            </NavBarLinks>

        </div>

    )
}