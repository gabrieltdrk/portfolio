import { NavLink } from 'react-router-dom'
export function Header() {
  const linkActive = ({ isActive }) => (isActive ? 'rounded-md underline underline-offset-2 decoration-1 hover:text-zinc-400 transition-all' : 'transition-all hover:text-zinc-400')
  return (
    <>
      <header className={`sticky top-0 md:text-2xl p-4 w-full bg-default text-zinc-100 h-16 transition-all`}>
        <div className="flex justify-between w-[60%] mx-auto">
          <h1 className="animate-pulse">@gabrieltdrk</h1>
          <nav>
            <ul className="flex gap-8">
              <NavLink to="/" className={linkActive}>
                Home Page
              </NavLink>
              <NavLink to="/projects" className={linkActive}>
                Projects
              </NavLink>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
