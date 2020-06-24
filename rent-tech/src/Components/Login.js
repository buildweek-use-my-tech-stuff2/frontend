import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { axiosWithAuth } from '../utils/axiosWithAuth'

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
        display: flex,
        flex-direction: column,
        border: 15px black dashed
        flex-wrap: no-wrap
        margin: 0 auto
        `
    
    render() {
        return (
            <this.LogInForm>
                <h1>Log In</h1>
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
                    <button type='submit'>Sign In</button>
                </form>
                <Link to='/signup'>Not a User? Click Here!</Link>
            </this.LogInForm>
        )
    }
}

export default Login;