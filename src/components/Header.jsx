import { NavLink } from 'react-router-dom'
export function Header() {
  const linkActive = ({ isActive }) => (isActive ? 'rounded-md underline underline-offset-2 hover:text-zinc-400' : 'hover:text-zinc-400')
  return (
    <>
      <header className={`flex sticky top-0 md:text-2xl justify-between p-4 w-full bg-blue-950 text-zinc-100 h-16 transition-all`}>
        <h1>@gabrieltdrk</h1>
        <nav>
          <ul className="flex gap-8">
            <NavLink to="/" className={linkActive}>
              Página Inicial
            </NavLink>
            <NavLink to="/projects" className={linkActive}>
              Projetos
            </NavLink>
          </ul>
        </nav>
      </header>
    </>
  )
}
