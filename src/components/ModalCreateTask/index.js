import MDEditor from '@uiw/react-md-editor';
import { useState } from 'react';
import TasksService from '../../services/TasksService'
import { toast } from 'react-toastify';

export function ModalCreateTask({ idProject, setProps }) {
  const [task, setTask] = useState({
    title: "",
    branch: "",
    description: "",
    project_id: idProject,
    start_date: "",
  })

  const saveTask = async () => {
    try {
      await TasksService.save(task)
      setProps(true)
      toast.success("Tarefa criada!")
    } catch (error) {
      toast.error("Não foi possível criar a tarefa")
    }
  }

  return (
    <div className="modal fade" id="modal-create-task" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg  overflow-auto row">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Criar nova tarefa</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form className="row">
              <div className="mb-3 col-sm-6">
                <label htmlFor="titulo" className="form-label form-label-sm">Titulo</label>
                <input type="text" className="form-control form-control-sm" id="titulo" placeholder="Titulo" value={task.title || ""} onChange={(e) => setTask({ ...task, title: e.target.value })} />
                <div className="form-text">Nome da tarefa.</div>
              </div>
              <div className="mb-3 col-sm-6" >
                <label htmlFor="titulo" className="form-label form-label-sm">Branch</label>
                <input type="text" className="form-control form-control-sm" id="Branch" placeholder="Branch" value={task.branch || ""} onChange={(e) => setTask({ ...task, branch: e.target.value })} />
              </div>
              <label htmlFor="titulo" className="form-label form-label-sm">Descrição</label>

              <MDEditor
                value={task.description || ""}
                onChange={(e) => setTask({ ...task, description: e })}
                height={150}
              />
              <MDEditor.Markdown />

              <div className="mb-3 mt-3 col-sm-6" >
                <label htmlFor="titulo" className="form-label form-label-sm">data De Inicio</label>
                <input type="date" className="form-control form-control-sm" id="dtInicio" placeholder="Titulo" value={task.start_date || ""} onChange={(e) => setTask({ ...task, start_date: e.target.value })} />
              </div>
            </form>
              <div className="mb-3 mt-5 col-sm-2" >
                <button className="btn btn-primary btn-sm" onClick={saveTask}> Salvar</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}