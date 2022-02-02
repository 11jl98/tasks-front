class ProjectService {
  constructor(list = []) {
    this.projects = [...list]
  }

  list() {
    return this.projects
  }
}


export default new ProjectService([
  {
    id: 1,
    title: "Nota Fácil Web",
    description: "Sistema de emissão de notas",
    startDate: new Date().toLocaleDateString(),
    endDate: null,
    members: [
      {
        id: "eriks",
        name: "Eriks"
      },
      {
        id: 'arthur',
        name: "Arthur"
      }
    ]
  },
  {
    id: 2,
    title: "Nota Fácil Web",
    description: "Sistema de emissão de notas",
    startDate: new Date().toLocaleDateString(),
    endDate: null,
    members: [
      {
        id: "andre",
        name: "André"
      }
    ]
  },
  {
    id: 3,
    title: "Nota Fácil Web",
    description: "Sistema de emissão de notas",
    startDate: new Date().toLocaleDateString(),
    endDate: new Date().toLocaleDateString(),
    members: [
      {
        id: 'matheus',
        name: "Matheus"
      },
      {
        id: 'canelao',
        name: "Canelão"
      }
    ]
  }
])