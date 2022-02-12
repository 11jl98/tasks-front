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
      <div className="row container">
        <div className="col-sm-9">
          <div className="d-flex justify-content-end mt-2">
            <span className="badge bg-success me-2">Finalizado</span>
            <span className="badge bg-warning">Em desenvolvimento</span>
          </div>

          <div className="row mt-3 d-flex align-items-center">
            {projects.map((e, index) => {
              const finished = e.endDate ? "bg-success" : "bg-warning"
              return (
                <div className={"col-sm-4"} style={{cursor:"pointer"}} key={index} onClick={()=>window.location.href = `/view/Projetos/${e.id}`}>
                  <Card classNames="card text-dark bg-light mb-3 shadow-sm  bg-body rounded" title={e.title}>
                    <span className={`position-absolute top-0 start-100 translate-middle p-2 ${finished} rounded-circle`} />

                    <div className="card-body">
                      <div style={{ maxHeight: '50px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {e.users.map((e) => {
                          return (
                            <span key={e.id} className="badge bg-dark" style={{ marginRight: 10 }}>
                              {e.username}
                            </span>
                          )
                        })}
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