import { AboutInfo } from '../components/AboutInfo'
import { DisplayProjects } from '../components/DisplayProjects'
import { HeaderBanner } from '../components/HeaderBanner'

export function Home() {
  return (
    <main>
      <HeaderBanner />
      <AboutInfo isHome />
      <DisplayProjects isHome />
    </main>
  )
}
