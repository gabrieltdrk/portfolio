import { useState } from 'react'
import { ProjectModal } from './ProjectModal'

export function ProjectCard({ project }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleProjectClick() {
    setIsModalOpen(true)
  }

  function handleCloseModal() {
    setIsModalOpen(false)
  }

  return (
    <div>
      <div onClick={handleProjectClick} className="bg-default-white text-gray-950 m-3 justify-center rounded-md hover:cursor-pointer shadow-md">
        <div className="flex flex-col py-3 items-center">
          <h2 className="pt-3">{project.title}</h2>
          <img className="p-6" src={project.image} alt="" />
          <h2 className="">Descrição: {project.languages}</h2>
        </div>
      </div>

      {isModalOpen && <ProjectModal project={project} onClose={handleCloseModal} />}
    </div>
  )
}
