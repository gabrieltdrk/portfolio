import json from '../projects.json'
import { DisplayProject } from './DisplayProject'

export function DisplayProjects({ isHome }) {
  const slicedProjects = isHome ? json.projects.slice(0, 3) : json.projects
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center bg-slate-300 p-6">
      {slicedProjects.map((project) => (
        <DisplayProject project={project} key={project.id} />
      ))}
    </div>
  )
}
