import { useContext, useEffect } from 'react'
import MyContext from "../../context/myContext"
import MDEditor from '@uiw/react-md-editor';

export function Modal() {

  const { TaskContext } = useContext(MyContext)

  return (
    <div className="modal  modalTasks fade" id="modalTasks" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">{TaskContext.title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">

            <div className="d-flex algin-items-center justify-content-between">
              <div>
                <h5 className="modal-title mb-1" id="exampleModalLabel">Membro</h5>
                <span className="badge bg-primary mb-3">{TaskContext.user.username}</span>

              </div>
              <div>
                <h5 className="modal-title mb-1" id="exampleModalLabel">Status</h5>

                {TaskContext.labels.length === 0 && <span className="badge bg-secondary mb-3">Aguardando</span>}
                {TaskContext.labels.map((label) =>
                  <span key={label.id} className={`badge ${label.color}`}>{label.name}</span>
                )}
              </div>
            </div>
            <MDEditor
              value={TaskContext.description}
            />
            <MDEditor.Markdown />
            <div>
              <hr />
              <h5 className="mt-3">Comentários</h5>
              <hr />
              <div className="input-group input-group-sm mb-3 mt-3">
                <input type="text" className="form-control " placeholder="Escreva aqui..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <span className="input-group-text" id="basic-addon2">Comentar</span>
              </div>

            </div>

          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">fechar</button>
          </div>
        </div>
      </div>
    </div>
  )
}