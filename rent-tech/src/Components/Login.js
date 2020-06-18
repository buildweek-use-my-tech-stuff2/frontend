import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Login extends React.Component {

    state = {
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
        axios
        .post('credentials', this.state.credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            this.props.history.push('/dashboard')
        })
        .catch(err => {
            console.log(err)

        })
    }

    render() {
        return (
            <div>
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
                        name='username'
                        value={this.state.credentials.password}
                        onChange={this.changeHandler}
                        placeholder='Password'
                        required />
                    <button type='submit'>Sign In</button>
                </form>
                <Link to='/signup'>Not a User? Click Here!</Link>
            </div>
        )
    }
}

export default Login;