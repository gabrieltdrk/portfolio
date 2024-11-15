import { X } from '@phosphor-icons/react';

export function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
      <div className="bg-white p-6 rounded-md w-[90%] h-[90%] relative overflow-y-auto max-w-[1000px]">
        <X className="absolute top-4 right-4 text-xl hover:cursor-pointer size-8 md:size-6" onClick={onClose} />
        
        <div className="p-6">
          <h1 className="py-3 break-words text-2xl md:text-xl font-bold">{project.title}</h1>
          <img className="w-full rounded-md mb-4" src={project.image} alt={project.title} />
          <p className="mb-4">{project.description}</p>
          <img className="w-full rounded-md mb-4" src={project.image} alt={project.title} />
        </div>
      </div>
    </div>
  );
}
