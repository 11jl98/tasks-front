import './index.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProjectService from '../../services/ProjectService'
import TaskService from '../../services/TasksService'
import { CardMembers } from '../../components/CardTasksMembers'
import { Card } from '../../components/Card'
import { Modal } from '../../components/Modal'
import myContext from "../../context/myContext";

export function ViewProject() {
  const taskEntity = {
    title: "",
    branch: "",
    description: "",
    user_id: "",
    project_id: "",
    start_date: "",
    end_date: "",
    user: {},
    labels: []
  }
  const { id } = useParams()
  const [project, setProject] = useState({})
  const [users, setUsers] = useState([])
  const [tasks, setTasks] = useState([])
  const [TaskContext, setTaskContext] = useState(taskEntity)
  useEffect(() => {
    getProjects()
    getTasksProject()
  }, [])



  const getProjects = async () => {
    try {
      const data = await ProjectService.getProjectById(id)
      setProject(data)
      setUsers(data.users)
    } catch (error) {
      console.log(error)
    }
  }

  const getTasksProject = async () => {
    try {
      const data = await TaskService.getTasksProject(id)
      console.log(data)
      setTasks(data)

    } catch (error) {

    }
  }
  const addTaskUsers = async (member, task) => {
    try {
      await TaskService.update({ ...task, user_id: member.id })
      getTasksProject()
    } catch (error) {
      console.log(error)
    }
  }
  const showModal = (task) => {
    const exampleModal = new window.bootstrap.Modal(document.getElementById('modalTasks'), {
      keyboard: false
    })
    exampleModal.show()
    setTaskContext(task)
  }

  return (
    <myContext.Provider value={{ TaskContext, setTaskContext }}>
      <div className="d-flex mt-3">
        <div className="wrapper">
          {users.map((user) =>
            <div key={user.id} className="divUsers" >
              <Card title={user.username.toUpperCase()}>
                {tasks.filter((task) => (task.user_id === user.id))
                  .map((task) => {
                    return (
                      <CardMembers handle={() => showModal(task)} key={task.id} classNames="mb-3" labels={task.labels}>
                        <a>{task.title}</a>
                      </CardMembers>
                    )
                  })}
              </Card>
            </div>
          )}
        </div>
        <div className="tasks">
          <Card title={`Tarefas ${project.title}`}>
            {tasks.filter((task) => (task.user_id === null)).map((task) =>
              <CardMembers key={task.id} classNames="mb-3 shadow" labels={task.labels}>
                  <a href>{task.title}</a>
                  <hr />
                  <select class="form-select form-select-sm" aria-label="Default select example">
                  <option>Selecione...</option>
                      {users.map((user) => {
                        return (
                          <option>{user.username}</option>
                        )
                      })}
                    </select>
              </CardMembers>
            )}
          </Card>
        </div>
        <Modal />
      </div>
    </myContext.Provider>
  )
}