import api from '../utils/api'

const getLabels = async () => {
  const { data } = await api.get('labels')
  return data
}

const saveLabelsTask = async (dataLabelsTask) =>{
  const data = api.post('labelsTasks', dataLabelsTask)
  return data
}

export default {getLabels, saveLabelsTask}