import json from '../projects.json'
import { ProjectCard } from './ProjectCard'
import { ButtonLink } from './ButtonLink'

export function DisplayProjects({ isHome }) {
  const slicedProjects = isHome ? json.projects.slice(0, 3) : json.projects
  return (
    <>
      <div className="bg-default-dark text-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center mx-auto p-6 gap-6 w-[65%]">
          <h1 className="text-4xl col-span-full text-center">{isHome ? 'Some Projects' : 'All projects'}</h1>
          {slicedProjects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
        {isHome && <ButtonLink redirect="/projects" />}
      </div>
    </>
  )
}
