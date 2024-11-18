import { useEffect } from 'react'
import { X } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
      <div className="bg-white p-6 rounded-md w-[90%] h-[80%] relative overflow-y-auto max-w-[1000px]" onClick={(e) => e.stopPropagation()}>
        <X className="absolute top-4 right-4 text-xl hover:cursor-pointer size-8 md:size-6" onClick={onClose} />
        <div className="p-6 flex flex-col gap-4 divide-y-4 divide-blue-950">
          <div className="flex justify-between">
            <h1 className="break-words text-2xl md:text-xl font-bold">{project.title}</h1>
            <Link className="hover:underline text-blue-900" to={project.url}>
              Go to project
            </Link>
          </div>

          <h2 className="py-3 break-words text-lg md:text-sm italic">Description: {project.description}</h2>
          <img className="w-1/2 mx-auto rounded-md mb-4" src={project.image} alt={project.title} />
        </div>
      </div>
    </div>
  )
}
