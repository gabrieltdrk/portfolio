import { ButtonLink } from './ButtonLink.jsx'

export function AboutInfo({ isHome }) {
  const birthDate = new Date('1999-09-19') // Data inicial
  const today = new Date() // Data atual
  const age = today.getFullYear() - birthDate.getFullYear()
  const hasBirthdayPassed = today.getMonth() > birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate())
  const ageFinal = hasBirthdayPassed ? age : age - 1

  const infoFullscreen = !isHome ? 'h-full' : ''
  return (
    <>
      <div className={`bg-default-dark text-gray-200 py-6 px-3 ${infoFullscreen}`}>
        <div className="lg:w-[60%] mx-auto flex flex-col lg:flex-row justify-around gap-6">
          <div className="flex flex-col lg:items-center lg:justify-center gap-3">
            <h1 className="text-4xl lg:self-start">Most known as Gab</h1>
            <img className="block lg:hidden rounded-md self-center" src="https://github.com/gabrieltdrk.png" />
            <p className="text-justify">I'm {ageFinal} years old and my name has a special meaning, inspired by the song "Pais e Filhos" by the legendary brazilian band called Legião Urbana. There's a line in the song that says, "Meu filho vai ter nome de santo", which means, "My child will have a saint's name." And, don't ask me why, my dad decided to name me this way. </p>

            <p>From a young age, I have always been passionate about video games in general. Some of my favorites include 'Transformice', 'DDTank', 'Grand Chase' and countless others that have sparked my imagination and kept my adventurous spirit alive. </p>

            <p className="w-full">{isHome ? 'My story is one of curiosity, growth, and passion for technology and creativity...' : "My story is one of curiosity, growth, and passion for technology and creativity. I'm always eager to learn, evolve, and find ways to merge my love for games and tech into meaningful work and projects."}</p>

            {isHome && <ButtonLink redirect="/about" />}

            {!isHome && (
              <>
                <p>My story is one of curiosity, growth, and passion for technology and creativity. I'm always eager to learn, evolve, and find ways to merge my love for games and tech into meaningful work and projects.</p>

                <p>In October 2024, my team won the first hackathon at Universidade Santa Cecília. It was an incredible experience filled with valuable learning and growth. We faced many challenges, but we worked together, pushed our limits, and gained insights that will help us in future projects. The event not only allowed us to showcase our skills but also provided an opportunity to connect with other talented individuals and collaborate in a dynamic environment.</p>
              </>
            )}
          </div>

          <img className="hidden sm:block rounded-md self-center" src="https://github.com/gabrieltdrk.png" />
        </div>
      </div>
    </>
  )
}
