import { useScore } from '@/contexts'

export default function Header() {
  const { score } = useScore()

  return (
    <header className="border-2 border-blue-500 rounded flex p-4 justify-between items-center mb-8">
      <div className="text-white font-light leading-none text-lg">
        <h3>PEDRA</h3>
        <h3>PAPEL</h3>
        <h3>TESOURA</h3>
      </div>
      <div className="bg-white p-2 rounded items-center flex flex-col">
        <h4 className="text-sm text-gray-700">Pontos</h4>
        <h3 className="text-2xl font-bold text-gray-700">{score}</h3>
      </div>
    </header>
  )
}
