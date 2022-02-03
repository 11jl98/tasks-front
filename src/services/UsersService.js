import api from '../utils/api'


const getUsers = async() => {
    const {data} = await api.get('users')
    return data
}


export default {getUsers}