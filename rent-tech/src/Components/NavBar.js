import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'


const NavBarLinks = styled.div`
        max-width: 100%;
        display: flex;
        justify-content: space-evenly
        

        // padding: 40px;
        // font-size: 20px;
        // color: #F2A365;
        // text-decoration: none;
        // font-variant: small-caps;
        // font-family: 'Montserrat', sans-serif;

        // :hover {
        //     color: #38cfb1;

        
    `;


    const StyledLink = styled(Link)`

        // padding: 40px;
        font-size: 20px;
        color: #F2A365;
        text-decoration: none;
        font-variant: small-caps;
        font-family: 'Montserrat', sans-serif;
       
        
        :hover {
            color: #38cfb1;

            
    
    `

    const StyledNavLink = styled(NavLink)`

        // padding: 40px;
        font-size: 20px;
        color: #F2A365;
        text-decoration: none;
        font-variant: small-caps;
        font-family: 'Montserrat', sans-serif;
        

        :hover {
            color: #38cfb1;
    
    `

    // const StyledNavDiv = styled.div`

    //     box-shadow: 0px 7px 20px 0px rgba(0, 0, 0, 0.75);
    //     background: linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%), radial-gradient(at top center, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0.4) 120%) #989898;
    //     background-blend-mode: multiply,multiply;
        

    // `

export const NavBar = props => {

    const logout= () => {
        localStorage.clear()
    }

    

    return(
        <div className='navigation'>
        
        

            {/* <h3>USE MY TECH STUFF</h3> */}
            {/* <StyledNavDiv> */}
                <NavBarLinks>
                
                        <StyledLink to='/'>Login</StyledLink>
                        <StyledLink to='/'onClick={logout}>Logout</StyledLink>
                        <StyledNavLink to='/listings'>Listings</StyledNavLink>
                        <StyledNavLink to='/dashboard'>Dashboard</StyledNavLink>
                        <StyledLink to='/rentals'>Products for Rent</StyledLink>
                    
                </NavBarLinks>
            {/* </StyledNavDiv> */}
        </div>

    )
}