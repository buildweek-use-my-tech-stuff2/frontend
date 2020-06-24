import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import styled from 'styled-components'

class Signup extends React.Component {

    state= {
        credentials: {
            username: '',
            password: '',
            role: 2
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
    checkboxHandler = e => {
        if(e.target.checked === true) {
            this.setState({
                credentials: {
                    ...this.state.credentials,
                    role: 1,
                }
            })
        } else {
            this.setState({
                credentials: {
                    ...this.state.credentials,
                    role: 2,
                }
            })
        }
    }

    submitHandler = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/auth/register', this.state.credentials)
            .then((res) => {
                localStorage.setItem('token', res.data.token);
                this.props.history.push('/login')
            })
    }

    SignupForm = styled.form`
    max-width: 20%,
    display: flex,
    margin: 0 auto,
    text-align: left,
    border: 15px dashed black;
    
    `

    render() {
        return (
            
            <this.SignupForm onSubmit={this.submitHandler}>
                <h1>Create an Account</h1>
                <input 
                    type='text' 
                    name='username'
                    value={this.state.credentials.username}
                    onChange={this.changeHandler}
                    placeholder='New Username'
                    required />
                    <br />
                <input 
                    type='text'
                    name='password'
                    value={this.state.credentials.password}
                    onChange={this.changeHandler}
                    placeholder='New Password'
                    required />
                    <br />
                    <label>Are you a renter? Check here if you are!</label>
                <input 
                    type='checkbox'
                    name='role'
                    value={this.state.credentials.role}
                    onChange={this.checkboxHandler}
                    id='roles'
                    placeholder='Are you a lender? Check if yes'
                    />
                
                <br />
                <button type='submit'>Sign Up Now!</button>
            </this.SignupForm>
            
        )
    }
}

export default Signup;