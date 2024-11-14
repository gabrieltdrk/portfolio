import { useNavigate } from 'react-router-dom'

export function DisplayProject({ project }) {
  const navigate = useNavigate()

  function handleProjectClick() {
    navigate(`/projects/${project.id}`)
  }
  return (
    <div onClick={handleProjectClick} className="bg-slate-100 justify-center rounded-md m-3 hover:cursor-pointer">
      <div className="flex flex-col gap-6 p-6 items-center">
        <h2>{project.title}</h2>
        <h2>{project.languages}</h2>
      </div>
    </div>
  )
}
