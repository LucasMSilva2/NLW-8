import { CloseButton } from "./CloseButton";

const feedbackTypes = {
  Bug: {
    
  }
}

export function WidgetForm() {
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">

      </div>

      <p>Hello World!</p>

      <footer className="text-xs text-neutral-400">
        Feito com carinho por <a className="underline underline-offset-2"href="https://github.com/LucasMSilva2" target="_blank">Lucas Torres</a> - NLW - 8
      </footer>
    </div>
  )
}