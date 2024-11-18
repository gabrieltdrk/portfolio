export function HeaderBanner() {
  const randomNum = Math.floor(Math.random() * 4) // Gera um número inteiro de 0 a 3
  const quotes = ['Weapons are not meant for the taking of lives. They’re meant for saving them.', 'To bring back loved ones; That’s what everyone wants.', "What's important is to trust those you love, and never give up. We must never give up hope!", "Machines aren't capable of evil. Humans make them that way.", 'The future is always changing. We’re all part of it.', 'Even if I die, I’ll always have been alive at one time. Time to leave the nest and see the world through my own eyes!']

  return (
    <div className="flex flex-col mx-auto justify-center p-3 text-2xl bg-gray-200 min-h-[350px] items-center">
      <div class="font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-gray-900 text-center md:text-left">
        Gabriel Andrade <span className="hidden sm:inline"> | </span> {' '}
        <span class="text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
          <ul class="block animate-text-slide-5 leading-tight [&_li]:block text-center md:text-left">
            <li>Front-end Developer</li>
            <li>Back-end Developer</li>
            <li>React is better.</li>
            <li>Fullstack Developer</li>
            <li>Eat. Sleep. Coffe. Repeat.</li>
            <li aria-hidden="true">Front-end Developer</li>
          </ul>
        </span>
      </div>

      <h1 className="font-bold duration-100 transition-all m-3 text-base">{quotes[randomNum]}</h1>
      <h2 className="italic"> - Chrono Trigger (1995)</h2>
    </div>
  )
}
