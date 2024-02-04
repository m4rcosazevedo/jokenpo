import paper from '@/assets/images/paper.svg'
import rock from '@/assets/images/rock.svg'
import scissors from '@/assets/images/scissors.svg'
import { Circle, Countdown } from '@/components'
import { usePlayer } from '@/contexts/player'
import { HANDS } from '@/utils/contants'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const [selectOption, setSelectOption] = useState(false)
  const navigate = useNavigate()
  const { setOption, option } = usePlayer()

  const isActive = (hand: HandOption) => {
    return hand === option
  }

  const handleOption = (hand: HandOption) => {
    setOption(hand)
    setSelectOption(true)
  }

  return (
    <>
      <div className="grid grid-cols-2 justify-center gap-4 place-items-center">
        <Circle onClick={() => handleOption(HANDS.ROCK)} active={isActive(HANDS.ROCK)}>
          <img src={rock} alt="Mão fechada, em formato de uma pedra" />
        </Circle>
        <Circle
          onClick={() => handleOption(HANDS.PAPER)}
          color="yellow"
          active={isActive(HANDS.PAPER)}
        >
          <img src={paper} alt="Mão aberta, representando papel" />
        </Circle>
        <Circle
          onClick={() => handleOption(HANDS.SCISSORS)}
          color="red"
          active={isActive(HANDS.SCISSORS)}
          className="col-[span_2]"
        >
          <img src={scissors} alt="Mão apontando dois dedos, representando uma tesoura" />
        </Circle>
      </div>
      {selectOption && <Countdown onFinish={() => navigate('/lets-go')} />}
    </>
  )
}
