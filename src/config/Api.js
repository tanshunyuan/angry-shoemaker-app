import axios from 'axios'

export default () => {
    return axios.create({
        baseURL:'http://localhost:3000',
        // baseURL:'https://724c102e.ngrok.io',
    })
}