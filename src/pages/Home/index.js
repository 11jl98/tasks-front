import ProjectService from "../../services/ProjectService";

export function Home() {
  return (
    <>
      <div className="row">
        <div className="col-sm-9">
          <div className="d-flex justify-content-end mt-2">
            <span className="badge bg-success me-2">Finalizado</span>
            <span className="badge bg-warning">Em desenvolvimento</span>
          </div>

          <div className="row mt-3 d-flex align-items-center">
            {ProjectService.list().map((project) => {
              const finished = project.endDate ? "bg-success" : "bg-warning"
              return (
                <div className="col-sm-4" key={project.id}>
                  <div className="card">
                    <div className="card-header">
                      {project.title}
                      <span className={`position-absolute top-0 start-100 translate-middle p-2 ${finished} rounded-circle`} />
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        {String(project.description).substring(0, 30).concat("...")}
                      </p>
                    </div>
                    <div className="card-body">
                      {project.members.map(({ name, id }) => {
                        return (
                          <span key={id} className="badge bg-success" style={{ marginRight: 10 }}>
                            {name}
                          </span>
                        )
                      })}
                      <hr />
                      <div className="text-center">
                        <a href="/" className="card-link">Editar</a>
                        <a href="/" className="card-link">Criar Tarefa</a>
                      </div>
                    </div>
                    <div className="card-footer text-right">
                      {
                        project.endDate ? "Finalizado" : 'Em desenvolvimento'
                      }
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="col-sm-3">
          
        </div>
      </div>
    </>

  )
}