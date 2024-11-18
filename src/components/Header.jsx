import { NavLink } from 'react-router-dom'
export function Header() {
  const linkActive = ({ isActive }) => (isActive ? 'rounded-md underline underline-offset-2 decoration-1 hover:text-gray-200 transition-all hover:animate-pulse decoration-indigo-500 hover:decoration-indigo-400' : 'hover:animate-pulse transition-all hover:text-gray-400')
  return (
    <>
      <header className={`sticky top-0 md:text-md p-4 w-full bg-default-dark text-zinc-100 z-10 transition-all`}>
        <div className="flex justify-between w-[60%] mx-auto">
          <h1 className="animate-pulse">@gabrieltdrk</h1>
          <nav>
            <ul className="flex gap-8">
              <NavLink to="/" className={linkActive}>
                /home
              </NavLink>
              <NavLink to="/projects" className={linkActive}>
                /projects
              </NavLink>
              <NavLink to="/about" className={linkActive}>
                /about
              </NavLink>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
