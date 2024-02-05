import { Countdown, Hand } from '@/components'
import { HANDS } from '@/utils/contants'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const [selectOption, setSelectOption] = useState(false)
  const navigate = useNavigate()

  return (
    <>
      <div className="grid grid-cols-2 justify-center gap-4 place-items-center">
        <Hand option={HANDS.ROCK} setSelectOption={setSelectOption} />
        <Hand option={HANDS.PAPER} setSelectOption={setSelectOption} />
        <Hand option={HANDS.SCISSORS} setSelectOption={setSelectOption} className="col-[span_2]" />
      </div>
      {selectOption && <Countdown onFinish={() => navigate('/lets-go')} />}
    </>
  )
}
