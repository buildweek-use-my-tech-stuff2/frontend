import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const NavBar = props => {

    const logout= () => {
        localStorage.clear()
    }

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
                    <NavLink to='/listings'>Listings</NavLink>
                    <NavLink to='/dashboard'>Dashboard</NavLink>
                
            </NavBarLinks>

        </div>

    )
}