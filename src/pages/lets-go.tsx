import { Button, Circle, HandsIcon } from '@/components'
import { usePlayer, useScore } from '@/contexts'
import { ResultWhoWin, selectColor } from '@/utils/contants'
import { selectAnOption, whoWin } from '@/utils/helpers'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function LetsGo() {
  const { option, setOption } = usePlayer()
  const { inc, dec } = useScore()
  const navigate = useNavigate()
  const [playerTwo, setPlayerTwo] = useState<HandOption>()
  const [result, setResult] = useState('')

  useEffect(() => {
    if (!option) return

    const playerTwo = selectAnOption()
    const result = whoWin(option, playerTwo)

    setResult(result)
    setPlayerTwo(playerTwo)
  }, [option])

  useEffect(() => {
    if (result === ResultWhoWin.WIN) inc()
    if (result === ResultWhoWin.LOSE) dec()
  }, [dec, inc, result])

  console.log({ playerTwo, option })

  const playAgain = () => {
    setOption(null)
    navigate('/')
  }

  if (!option) return <Navigate to="/" />

  if (!playerTwo) return <h1>Esperando...</h1>

  return (
    <div className="flex justify-between items-center gap-2">
      <Circle active color={selectColor(option)}>
        <HandsIcon option={option} />
      </Circle>

      <div className="flex flex-col items-center">
        <h1 className="text-2xl text-white font-semibold mb-2 uppercase">{result}</h1>
        <Button onClick={playAgain}>Jogar novamente</Button>
      </div>

      <Circle active color={selectColor(playerTwo)}>
        <HandsIcon option={playerTwo} />
      </Circle>
    </div>
  )
}
