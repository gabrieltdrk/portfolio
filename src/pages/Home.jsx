import { AboutInfo } from '../components/AboutInfo'
import { DisplayProjects } from '../components/DisplayProjects'
import { HeaderBanner } from '../components/HeaderBanner'

export function Home() {
  return (
    <main className="bg-gray-50">
      <HeaderBanner />
      <AboutInfo />
      <DisplayProjects isHome />
    </main>
  )
}
