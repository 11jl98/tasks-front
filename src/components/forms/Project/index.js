export function FormProject() {
  return (
    <>
      <form className="row">
        <div className="mb-3">
          <label for="titulo" className="form-label">Titulo</label>
          <input type="text" className="form-control form-control-sm" id="titulo" />
          <div className="form-text">Nome do projeto.</div>
        </div>
        <div className="mb-3">
          <label for="description" className="form-label">Descrição</label>
          <textarea className="form-control" id="description" rows="3"></textarea>
        </div>
        <div className="mb-3 col-sm-6">
          <label for="startDate" className="form-label">Data Inicio</label>
          <input type="date" className="form-control form-control-sm" id="startDate" />
        </div>
        <div className="mb-3 col-sm-6">
          <label for="endDate" className="form-label">Data Termino</label>
          <input type="date" className="form-control form-control-sm" id="endDate" />
        </div>
      </form>
      <button type="submit" className="btn btn-primary">Submit</button>
    </>
  )
}