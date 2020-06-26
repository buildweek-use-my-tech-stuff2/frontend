import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { UserContext } from '../contexts/UserContext'

class Login extends React.Component {

    state = {
        credentials: {
            username: '',
            password: '',
        }
    }

    changeHandler = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    submitHandler = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/auth/login', this.state.credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            this.props.history.push('/listings')
        })
        .catch(err => {
            console.log(err)

        })
    }

    LogInForm = styled.div`

        // display: flex,
        // flex-direction: column,
        // border: 15px black dashed
        // flex-wrap: no-wrap
        // margin: 0 auto

        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 250px;
        margin: 0 auto;

        `
    // StyledH = styled.h1`
        
        
    //     // font-size: 1.4rem;
    //     // padding: 10px;
    //     // text-align: center;
    //     // color: #38cfb1;

    //     padding: 50px;
    //     margin: 0 auto;
    //     color: white;
    //     font-size: 3rem;
    //     -webkit-text-stroke: 2px #38cfb1;
    // `

    // StyledInput = styled.input`

    // margin-top: 36px;
    // color: #f2a365;
    // border: 3px solid #38cfb1;
    // padding: 10px;
    // width: 300px;
    // background-color: #5b5656;
    // border-radius: 10px;
    


    // `

    TheButton = styled.button`
    
  top: 10px;
  right: 10px;
  font-size: 15px;
  padding: 5px 20px;
  color: #ececec;
  border: 3px solid #4D4646;
  border-radius: 20px;
  width: auto;
  background-color: #38cfb1;
  z-index: 100;
  font-weight: bold;
  margin-top: 36px;
  

  :hover {
    box-shadow: inset 0 0 10px #000000;
    cursor: pointer;
    color: #f2a365;
  }
    
`

    // StyledBackground = styled.div`
    
    //     background-color: grey;

    // `

     StyledLink = styled(Link)`

        font-size: 20px;
        color: #F2A365;
        text-decoration: none;
        font-variant: small-caps;
        font-family: 'Montserrat', sans-serif;
        padding: 15px 0 0 55px;
        

        
        :hover {
            color: #38cfb1;

            
    
    `

    render() {
        return (
            // <this.StyledBackground>
                <this.LogInForm>
                    <h1 >Log In</h1 >
                    <form onSubmit={this.submitHandler}>
                        <input
                            type='text'
                            name='username'
                            value={this.state.credentials.username}
                            onChange={this.changeHandler}
                            placeholder='Username'
                            required />
                        <input
                            type='text'
                            name='password'
                            value={this.state.credentials.password}
                            onChange={this.changeHandler}
                            placeholder='Password'
                            required />
                        <this.TheButton type='submit'>Sign In</this.TheButton>
                    </form>
                    <this.StyledLink to='/signup'>Not a User? Click Here!</this.StyledLink>
                </this.LogInForm>
            // </this.StyledBackground>
        )};
}

export default Login;