import { Title } from '@/components'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex flex-col text-center justify-center gap-8">
      <Title>Página não encontrada 😭</Title>
      <Link className="text-gray-500 bg-white px-4 py-2 rounded-md uppercase text-sm" to="/">
        Voltar para a home
      </Link>
    </div>
  )
}
