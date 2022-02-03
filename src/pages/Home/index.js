import './index.css'
import ProjectService from "../../services/ProjectService";
import { Card } from '../../components/Card'
import { toast } from 'react-toastify';
import React, { useState, useEffect } from 'react';

export function Home() {

  useEffect(() => {
    getProjects()
  }, [])

  const [projects, setProjects] = useState([])


  const getProjects = async () => {
    try {
      const data = await ProjectService.getProjects();
      setProjects(data)

      console.log(data)
    } catch (error) {
      toast.warning("Não foi possível carregar projetos!")
    }
  }

  return (
    <>
      <div className="row">
        <div className="col-sm-9">
          <div className="d-flex justify-content-end mt-2">
            <span className="badge bg-success me-2">Finalizado</span>
            <span className="badge bg-warning">Em desenvolvimento</span>
          </div>

          <div className="row mt-3 d-flex align-items-center">
            {projects.map((e, index) => {
              const finished = e.endDate ? "bg-success" : "bg-warning"
              return (
                <div className={"col-sm-4"} key={index}>
                  <Card classNames="card text-dark bg-light mb-3" title={e.title}>
                    <span className={`position-absolute top-0 start-100 translate-middle p-2 ${finished} rounded-circle`} />
                    <div className="card-body">
                      <p className="card-text">
                        {String(e.description).substring(0, 20).concat("...")}
                      </p>
                    </div>
                    <div className="card-body">
                      <div style={{maxHeight:'50px', whiteSpace:'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                        {e.members.map((e) => {
                          return (
                            <span className="badge bg-primary" style={{ marginRight: 10 }}>
                              {e.username}
                            </span>
                          )
                        })}
                      </div>

                      <hr />
                      <div className="d-flex justify-content-around">
                      <button type="button" class="btn btn-light btn-sm" >Abrir projeto</button>
                      <button type="button" class="btn btn-light btn-sm">criar tarefa</button>
                      </div>
                    </div>
                  </Card>
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