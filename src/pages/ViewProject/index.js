import './index.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProjectService from '../../services/ProjectService'
import TaskService from '../../services/TasksService'
import { CardMembers } from '../../components/CardTasksMembers'
import { Card } from '../../components/Card'
import { Modal } from '../../components/Modal'
import { ModalCreateTask } from '../../components/ModalCreateTask'
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
  const [updateTasks, setUpdateTasks] = useState(taskEntity)
  const [idTaskContext, setTaskContext] = useState("")
  const [newTask, setNewTask] = useState(false)
  useEffect(() => {
    getProjects()
    getTasksProject()
  }, [])

  useEffect(() => {
    if (!newTask) {
      return
    }
    getTasksProject()
  }, [newTask])

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
      setTasks(data)

    } catch (error) {

    }
  }
  const addTaskUsers = async () => {
    try {
      await TaskService.update(updateTasks)
      getTasksProject()
    } catch (error) {
      console.log(error)
    }
  }
  const showModal = (task) => {
    const exampleModal = new window.bootstrap.Modal(document.getElementById('modal-task'), {
      keyboard: false
    })
    exampleModal.show()
    setTaskContext(task.id)
  }

  const showModalCreateTask = (task) => {
    const exampleModal = new window.bootstrap.Modal(document.getElementById('modal-create-task'), {
      keyboard: false
    })
    exampleModal.show()
    setTaskContext(task.id)
  }

  return (
    <myContext.Provider value={{ idTaskContext, setTaskContext }}>
      <div className="d-flex mt-3" >
        <div className="wrapper" >
          {users.map((user) =>
            <div key={user.id} className="divUsers" >
              <Card title={user.username.toUpperCase()}>
                {tasks.filter((task) => (task.user_id === user.id))
                  .map((task) => {
                    return (
                      <CardMembers handle={() => showModal(task)} key={task.id} classNames="mb-3" labels={task.labels}>
                        <span>{task.title}</span>
                      </CardMembers>
                    )
                  })}
              </Card>
            </div>
          )}
        </div>
        <div className="tasks">
          <Card title={`Tarefas ${project.title}`}>
            <div className="mb-2">
              <span className="m-2">Criar task</span>
              <button className="btn btn-sm btn-secondary ml-2" onClick={showModalCreateTask}>+</button>
            </div>
            {tasks.filter((task) => (task.user_id === null)).map((task) =>
              <CardMembers key={task.id} classNames="mb-3 shadow" labels={task.labels}>
                <a >{task.title}</a>
                <hr />
                <div className="row">
                  <div className="col-sm-8">
                    <select className="form-select form-select-sm " aria-label="Default select example" onChange={(e) => setUpdateTasks({ ...task, user_id: e.target.value, start_date: task.start_date.split('T')[0] })}>
                      <option>Selecione...</option>
                      {users.map((user) => {
                        return (
                          <option key={user.id} value={user.id}>{user.username}</option>
                        )
                      })}
                    </select>
                  </div>
                  <div className="col-sm-4">
                    <button className="btn btn-sm btn-success" onClick={addTaskUsers}>Adicionar</button>
                  </div>
                </div>
              </CardMembers>
            )}
          </Card>
        </div>
        <Modal />
        <ModalCreateTask idProject={id} setProps={setNewTask} />
      </div>
    </myContext.Provider>
  )
}