import { Link } from 'react-router-dom'

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className={`md:text-2xl p-4 w-full bg-default-dark text-zinc-100 transition-all`}>
        <div className="flex flex-col justify-between w-[60%] mx-auto">
          <h1 className="self-center">Gabriel Andrade | © {year} </h1>
          <div className="flex justify-between">
            <p className="self-start">Find me:</p>
            <Link>GitHub</Link>
            <Link>Twitch</Link>
            <Link>Youtube</Link>
            <Link>X / Twitter</Link>
          </div>
        </div>
      </footer>
    </>
  )
}
