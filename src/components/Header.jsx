import { NavLink } from 'react-router-dom'
import { List } from '@phosphor-icons/react'
import { useState } from 'react'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const linkActive = ({ isActive }) => (isActive ? 'rounded-md underline underline-offset-2 decoration-1 hover:text-gray-200 transition-all hover:animate-pulse decoration-indigo-500 hover:decoration-indigo-400' : 'hover:animate-pulse transition-all hover:text-gray-400')

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <header className="sticky top-0 md:text-md p-4 w-full bg-default-dark text-zinc-100 z-10 transition-all">
        <div className="flex justify-between w-[90%] sm:w-[60%] mx-auto items-center">
          <h1 className="animate-pulse">@gabrieltdrk</h1>

          <nav className="hidden sm:block">
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

          <div className="sm:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              <List size={28} weight="bold" className="hover:text-indigo-500 transition-all" />
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="block sm:hidden bg-default-dark text-zinc-100 mt-2 p-4 shadow-lg rounded-md">
            <ul className="flex flex-col gap-4">
              <NavLink to="/" className={linkActive} onClick={toggleMenu}>
                /home
              </NavLink>
              <NavLink to="/projects" className={linkActive} onClick={toggleMenu}>
                /projects
              </NavLink>
              <NavLink to="/about" className={linkActive} onClick={toggleMenu}>
                /about
              </NavLink>
            </ul>
          </nav>
        )}
      </header>
    </>
  )
}
