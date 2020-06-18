import React from 'react'
import { Link } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'

class Signup extends React.Component {

    state= {
        credentials: {
            username: '',
            password: ''
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
            .post('signup', this.state.credentials)
            .then(() => {
                this.props.history.push('/dashboard')
            })
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <h1>Create an Account</h1>
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

                <button type='submit'>Sign Up Now!</button>
            </form>
        )
    }
}

export default Signup;