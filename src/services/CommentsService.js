import api from '../utils/api'

const save = async (dataComments) => {
 await api.post('/comments', dataComments)
}

export default {save}