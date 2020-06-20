import axios from 'axios'

export const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://bw-rent-tech.herokuapp.com/',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}
