import api from '../utils/api'


const getTasksProject = async(idProject) => {
    const {data} = await api.get(`tasks?projectId=${idProject}`)
    return data
}

const update = async (dataTask) => {
    await api.put(`tasks/${dataTask.id}`, dataTask)
}

export default {getTasksProject, update}