import api from '../utils/api'


const getTasksProject = async(idProject) => {
    const {data} = await api.get(`tasks?projectId=${idProject}`)
    return data
}

const update = async (dataTask) => {
    await api.put(`tasks/${dataTask.id}`, dataTask)
}
const getTask = async (idTask) => {
   const { data } = await api.get(`tasks/${idTask}`)
   return data
}
const save = async (dataTask)=> {
    await api.post('tasks', dataTask)
}

export default {getTasksProject, update, getTask, save}