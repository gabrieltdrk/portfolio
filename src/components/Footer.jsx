import { Link } from 'react-router-dom'
import { XLogo, GithubLogo, LinkedinLogo } from '@phosphor-icons/react';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className={`md:text-2xl p-4 w-full bg-default-dark text-zinc-100 transition-all`}>
        <div className="flex justify-between w-[60%] mx-auto">
          <h1 className="self-center">Gabriel Andrade | © {year} </h1>
          <div className="grid grid-cols-3 items-center gap-4">
            <Link to="https://github.com/gabrieltdrk"><GithubLogo /></Link>
            <Link to="https://www.linkedin.com/in/gabrieltdrk/"><LinkedinLogo /></Link>
            <Link to="https://x.com/gabrieltdrk"><XLogo /></Link>
          </div>
        </div>
      </footer>
    </>
  )
}
