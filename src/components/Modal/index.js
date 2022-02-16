import { useEffect, useState } from "react"
import MDEditor from '@uiw/react-md-editor';
import { Comment } from "../Comment";
import { useContext } from "react";
import TaskContext from "../../context/myContext";
import TasksService from '../../services/TasksService';
import CommentsService from '../../services/CommentsService';
import LabelsService from "../../services/LabelsService";
import moment from "moment";

export function Modal() {
  moment.locale('pt-br')

  const { idTaskContext } = useContext(TaskContext)

  const [updating, setUpdating] = useState(false)
  const [commenting, setCommenting] = useState(false)
  const [comments, setComment] = useState({
    task_id: "",
    comment: "",
    user_id: "04734224-f2c4-4c55-892c-781ba4e91155"
  })
  const [task, setTask] = useState({
    id: idTaskContext,
    title: '',
    description: '',
    start_date: null,
    end_date: null,
    labels: [],
    comments: []
  })
  const [labels, setLabels] = useState([])
  const [labelsTask, setLabelsTask] = useState({
    task_id: "",
    label_id: ""
  })

  useEffect(() => {
    if (!idTaskContext) {
      return
    }
    getTask()
    getLabels()
  }, [idTaskContext])

  const getTask = async () => {
    try {
      const data = await TasksService.getTask(idTaskContext)
      console.log(data.id)
      setComment({ ...comments, task_id: data.id })
      setTask(data)
    } catch (error) {
      console.log(error)
    }
  }

  const saveComment = async () => {
    try {
      await CommentsService.save(comments)
      getTask()
    } catch (error) {
      console.log(error)
    }
  }

  const updateTask = async () => {
    setUpdating(true)
  }

  const getLabels = async () => {
    try {
      const data = await LabelsService.getLabels()
      setLabels(data)
    } catch (error) {
      console.log(error)
    }
  }
  const saveLabelsOfTaks = async () => {
    try {
      await LabelsService.saveLabelsTask(labelsTask)
      getTask()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="modal fade h-100" id="modal-task" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-fullscreen row">
        <div className="modal-content" >
          <div className="modal-header">
            <h5 className="modal-title">{task.title || 'Default task'}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div style={{ maxHeight: '400px', }} className="overflow-auto" >
              {updating && (
                <MDEditor
                  value={task.description}
                  onChange={(value) => setTask({ ...task, description: value })}
                  height={150}
                />
              )}
              {updating && (
                <div className="mt-3 mb-3">
                  <label>Adicionar Status</label>
                  <div className="col-sm-6">
                    <div class="input-group mb-3">
                      <select className="form-select form-select-sm" aria-label="Default select example" onChange={(e) => setLabelsTask({ task_id: idTaskContext, label_id: e.target.value })}>
                        <option>Selecione...</option>
                        {labels.map((label, index) => {
                          return (
                            <option key={index} value={label.id}>{label.name}</option>
                          )
                        })}
                      </select>
                      <button class="btn btn-sm btn-success" onClick={saveLabelsOfTaks} type="button" id="button-addon2">Adicionar</button>
                    </div>
                  </div>

                </div>
              )}

              {!updating && (
                <MDEditor.Markdown source={task.description} />
              )}
            </div>
            <div className="float-end">
              {updating && <button type="button" className="btn btn-sm btn-dark" onClick={updateTask}>Salvar alterações</button>}
              {!updating && <button type="button" className="btn btn-sm btn-dark" onClick={updateTask}>Editar</button>}
            </div>
            <div>
              {task.labels?.length === 0 &&
                <span className="badge bg-secondary">Aguardando</span>
              }
              {task.labels?.map((label) =>
                <span key={label.id} className={`badge ${label.color}`} style={{ marginRight: 10 }}>{label.name}</span>
              )}
            </div>

            <hr />
            <h5>Comentários</h5>
            {!updating && (
              <>
                <div className="col-sm-12" style={{ margin: '0 auto' }}>
                  <div style={{ maxHeight: '400px', }} className="overflow-auto">
                    {task?.comments?.map((comment, index) => {
                      return (
                        <Comment
                          key={index}
                          name={comment?.user?.username}
                          dateComment={moment(comment.created_at).format('LLLL')}
                          source={comment.comment}
                        />
                      )
                    })}
                  </div>
                </div>

                <br />
                <div style={{ margin: '0 auto', maxHeight: '150px', borderTop: '2px solid #dbdcdc' }} className="col-sm-12">
                  {commenting && (
                    <MDEditor
                      value={comments.comment}
                      onChange={(value) => setComment({ ...comments, comment: value })}
                      height={100}
                    />
                  )}
                  {commenting && (
                    <button type="button" className="btn btn-sm btn-dark mt-2" onClick={saveComment}>Salvar</button>
                  )}
                  <button className="btn btn-sm btn-dark mb-2 mt-2 float-end" onClick={() => setCommenting(!commenting)}>Comentar</button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}