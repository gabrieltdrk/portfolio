import json from '../projects.json'
import { DisplayProject } from './DisplayProject'

export function DisplayProjects({ isHome }) {
  const slicedProjects = isHome ? json.projects.slice(0, 3) : json.projects
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center bg-blue-50 p-6 gap-6">
      <h1 className="text-4xl col-span-full text-center">Últimos projetos</h1>
      {slicedProjects.map((project) => (
        <DisplayProject project={project} key={project.id} />
      ))}
    </div>
  )
}
