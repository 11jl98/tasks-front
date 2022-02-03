import './index.css'
import { FormProject } from "../../components/forms/Project"
import { Card } from '../../components/Card'
import React, { useState, useEffect } from 'react';
import usersService from '../../services/UsersService'
import ProjectService from '../../services/ProjectService'
import { toast } from 'react-toastify';
export function Project() {

    useEffect(() => {
        getUsers()
    }, [])

    const projectEntity = {
        "id":"",
        "title": "",
        "description": "",
        "start_date": "",
        "end_date": null,
        "members": []
    }
    const [usersGestao, setUsersGestao] = useState([])
    const [usersProject, setUsersProject] = useState([])
    const [usersProjectTable, setUsersTable] = useState([])
    const [project, setProject] = useState(projectEntity)


    const getUsers = async () => {
        try {
            const data = await usersService.getUsers()
            setUsersGestao(data)
            console.log(data)

        } catch (error) {

        }
    }

    const addUsersProject = async (user) => {
        setUsersProject([...usersProject, { user_id: user.id }])
        const indexUser = usersGestao.findIndex(users => users.id === user.id)
        usersGestao.splice(indexUser, 1)
        setUsersGestao(usersGestao)
        setUsersTable([...usersProjectTable, user])
        setProject({...project, members: [...usersProject, { user_id: user.id }]})
    }

    const saveProject = async() => {
        try {
            console.log(project)
            const data = await ProjectService.save(project)
            setProject({...project, id: data.id})
            toast.success("Projeto criado!")
        } catch (error) {
            toast.danger("Erro ao criar projeto")

        }
    }

    const destroyUsersProject = (user) =>{
        const indexUser = usersProjectTable.findIndex(users => users.id === user.id)
        usersProjectTable.splice(indexUser, 1)
        setUsersTable([...usersProjectTable])
        setProject({...project, members: [...usersProject, { user_id: user.id }]})
        setUsersGestao([...usersGestao, user])
    }

    return (
        <Card title={"Novo Projeto"} classNames="shadow mt-3">
            <FormProject>
                <div className="p-3 " style={{ width: '70%', borderRight: '1px solid rgba(0,0,0,.125)', marginRight: '15px' }}>
                    <form className="row">
                        <div className="mb-3">
                            <label htmlFor="titulo" className="form-label">Titulo</label>
                            <input value={project.title || ""} onChange={(e) => setProject({...project, title: e.target.value})} type="text" className="form-control form-control-sm" id="titulo" />
                            <div className="form-text">Nome do projeto.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Descrição</label>
                            <textarea value={project.description ||""} onChange={(e) => setProject({...project, description: e.target.value})} className="form-control" id="description" rows="8"></textarea>

                        </div>
                        <div className="mb-3 col-sm-6">
                            <label htmlFor="startDate" className="form-label">Data Inicio</label>
                            <input value={project.start_date ||""} onChange={(e) => setProject({...project, start_date: e.target.value})} type="date" className="form-control form-control-sm" id="startDate" />
                        </div>
                        <div className="mb-3 col-sm-6">
                            <label htmlFor="endDate" className="form-label">Data Término</label>
                            <input value={project.end_date ||""} onChange={(e) => setProject({...project, end_date: e.target.value})} type="date" className="form-control form-control-sm" id="endDate" />
                        </div>
                    </form>
                        <button onClick={saveProject} className="btn btn-primary">Salvar</button>
                </div>
                <Card title="Quadro de membros " classNames="ml-1">
                    <div className=" mb-5 col-sm-12" style={{ height: '150px', overflow: 'auto' }}>
                        <table className="table table-responsive" >
                            <thead className="table-light">
                                <tr>
                                    <th scope="col">Adicionar Membros</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {usersGestao.map((user) => {
                                    return (
                                        <tr key={user.id}>
                                            <td>{user.username}</td>
                                            <td><button onClick={() => addUsersProject(user)} className="btn btn-success btn-sm">Adicionar</button></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>

                    </div>
                    <div className=" mb-5 col-sm-12" style={{ height: '150px', overflow: 'auto' }}>
                        <table className="table table-responsive">
                            <thead className="table-light">
                                <tr>
                                    <th scope="col">Membros Adicionados</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {usersProjectTable.map((user) => {
                                    return (
                                        <tr key={user.id}>
                                            <td>{user.username}</td>
                                            <td><button onClick={()=> destroyUsersProject(user)} className="btn btn-danger btn-sm">Remover</button></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>

                </Card>
            </FormProject>
        </Card>
    )
}