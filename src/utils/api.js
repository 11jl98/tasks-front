import axios from 'axios';

let headers = {}
const api = axios.create({
    baseURL: 'http://192.168.5.102:3000/',
    headers

})


export default api