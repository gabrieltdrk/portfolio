import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <header className={`flex sticky top-0 md:text-2xl justify-between p-4 w-full bg-slate-600 h-16 transition-all`}>
      <h1>@gabrieltdrk</h1>
      <nav>
        <ul className="flex gap-4">
          <NavLink to="/"> Página Inicial</NavLink>
          <li> Projetos </li>
          <li> Página Inicial3 </li>
        </ul>
      </nav>
    </header>
  )
}
