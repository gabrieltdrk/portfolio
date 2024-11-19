import { Link } from 'react-router-dom'

export function ButtonLink({ redirect }) {
  const labelIndication = redirect == '/projects' ? 'See all projects' : 'See more'
  return (
    <section className="pt-1 py-6 flex justify-center">
      <Link to={redirect}>
        <button className="rounded-md px-16 md:px-36 py-3 bg-default-white text-zinc-950 shadow-md">{labelIndication}</button>
      </Link>
    </section>
  )
}
