import { DisplayProjects } from '../components/DisplayProjects'
import { ViewAllProjects } from '../components/ViewAllProjects'

export function Home() {
  return (
    <main>
      <DisplayProjects isHome />
      <ViewAllProjects />
    </main>
  )
}
