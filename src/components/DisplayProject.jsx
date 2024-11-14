export function DisplayProject({ project }) {
  return (
    <div>
      <h1>{project.id}</h1>
      <h2>{project.title}</h2>
      <h2>{project.languages}</h2>
    </div>
  )
}
