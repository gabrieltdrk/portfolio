import { DisplayProjects } from '../components/DisplayProjects'
import { HeaderBanner } from '../components/HeaderBanner'

export function Home() {
  return (
    <main className="bg-blue-50">
      <HeaderBanner />
      <DisplayProjects isHome />
    </main>
  )
}
