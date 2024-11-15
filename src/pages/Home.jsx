import { DisplayProjects } from '../components/DisplayProjects'
import { ViewAllProjects } from '../components/ViewAllProjects'

export function Home() {
  return (
    <main className="bg-blue-50">
      <div className="w-[65%] mx-auto">
        <DisplayProjects isHome />
        <ViewAllProjects />
      </div>
    </main>
  )
}
