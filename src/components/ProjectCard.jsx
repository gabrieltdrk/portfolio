import { useState } from 'react'
import { ProjectModal } from './ProjectModal'

export function ProjectCard({ project }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const statusProject = project.status == 'finished' ? 'text-green-700' : 'text-red-700'

  function handleProjectClick() {
    setIsModalOpen(true)
  }
  function handleCloseModal() {
    setIsModalOpen(false)
  }

  // Função para gerar o badge URL baseado na linguagem
  function generateBadgeUrl(language) {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${language}/${language}-original.svg`
  }

  return (
    <div>
      <div onClick={handleProjectClick} className="text-gray-950 m-3 justify-center hover:cursor-pointer border-2 border-gray-300">
        <div className="flex flex-col py-3 items-center">
          <h2 className="pt-3 font-bold">{project.title}</h2>
          <img className="p-6" src={project.image} alt="" />
          <div className="flex flex-col items-center">
            <h2 className="">Coded with:</h2>
            <div className="flex items-center gap-3">
              {project.languages.map((language) => (
                <img key={language} className="w-10 m-1" src={generateBadgeUrl(language)} alt={`Icon for ${language}`} />
              ))}
            </div>
            <div>
            <h3 className={`py-3 font-bold ${statusProject}`}>Status: {project.status}</h3>
            </div>
            
          </div>
        </div>
      </div>

      {isModalOpen && <ProjectModal project={project} onClose={handleCloseModal} />}
    </div>
  )
}
