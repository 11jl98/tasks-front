function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Tasks</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

          <form className="d-flex">
            <input className="form-control form-control-sm me-2" type="search" placeholder="Pesquisa" aria-label="Pesquisa" />
            <button className="btn btn-light btn-sm" type="submit">Pesquisa</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export { NavBar }