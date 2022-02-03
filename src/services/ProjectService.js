import api from '../utils/api'

const save = async (dataProject) => {
  const { data } = await api.post('/projects',dataProject)
  return data
}

const getProjects = async () =>{
  const { data } = await api.get('/projects')
  return data
}


 

export default {save, getProjects}
