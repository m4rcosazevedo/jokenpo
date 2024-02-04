import paper from '@/assets/images/paper.svg'
import rock from '@/assets/images/rock.svg'
import scissors from '@/assets/images/scissors.svg'
import { Circle } from '@/components'

export default function Home() {
  return (
    <div className="grid grid-cols-2 justify-center gap-4 place-items-center">
      <Circle>
        <img src={rock} alt="Mão fechada, em formato de uma pedra" />
      </Circle>
      <Circle color="yellow">
        <img src={paper} alt="Mão aberta, representando papel" />
      </Circle>
      <Circle color="red" className="col-[span_2]">
        <img src={scissors} alt="Mão apontando dois dedos, representando uma tesoura" />
      </Circle>
    </div>
  )
}
