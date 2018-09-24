import axios from 'axios'

let dyanamicBaseUrl

if(process.env.NODE_ENV === 'development') {
    dyanamicBaseUrl = 'http://localhost:3000/api'
} else if(process.env.NODE_ENV === 'production') {
    dyanamicBaseUrl = 'https://artze.xyz/api'
}

const instance = axios.create({
    baseURL: dyanamicBaseUrl
})

export default instance
