import api from '../utils/api'

const getLabels = async () => {
  const { data } = await api.get('labels')
  return data
}

export default {getLabels}