import { ButtonLink } from './ButtonLink.jsx'

export function AboutInfo({ isHome }) {
  const birthDate = new Date('1999-09-19') // Data inicial
  const today = new Date() // Data atual
  const age = today.getFullYear() - birthDate.getFullYear()
  const hasBirthdayPassed = today.getMonth() > birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate())
  const ageFinal = hasBirthdayPassed ? age : age - 1

  return (
    <>
      <div className="bg-default-dark text-gray-200 py-6 px-3">
        <div className="w-[60%] mx-auto flex justify-around gap-6">
          <div className="flex flex-col items-center justify-center gap-3">
            <h1 className="text-4xl self-start">Most known as Gab</h1>
            <p className="text-justify">I'm {ageFinal} years old and my name has a special meaning, inspired by the song "Pais e Filhos" by the legendary brazilian band called Legião Urbana. There's a line in the song that says, "Meu filho vai ter nome de santo", which means, "My child will have a saint's name." And, don't ask me why, my dad decided to name me this way. </p>

            <p>From a young age, I have always been passionate about video games in general. Some of my favorites include 'Transformice', 'DDTank', 'Grand Chase' and countless others that have sparked my imagination and kept my adventurous spirit alive. </p>

            <p>
              {isHome
                ? "My story is one of curiosity, growth, and passion for technology and creativity..."
                : "My story is one of curiosity, growth, and passion for technology and creativity. I'm always eager to learn, evolve, and find ways to merge my love for games and tech into meaningful work and projects."
              }
            </p>

            {isHome && <ButtonLink redirect="/about" />}

            {!isHome && <p>My story is one of curiosity, growth, and passion for technology and creativity. I'm always eager to learn, evolve, and find ways to merge my love for games and tech into meaningful work and projects.</p>}
          </div>

          <img className="rounded-md self-center" src="https://github.com/gabrieltdrk.png" />
        </div>
      </div>
    </>
  )
}
