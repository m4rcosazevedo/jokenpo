import paper from '@/assets/images/paper.svg'
import rock from '@/assets/images/rock.svg'
import scissors from '@/assets/images/scissors.svg'
import { HANDS } from '@/utils/contants'

interface Props {
  option: HandOption
}

export default function HandsIcon({ option }: Props) {
  if (option === HANDS.ROCK) return <img src={rock} alt="Mão fechada, em formato de uma pedra" />

  if (option === HANDS.PAPER) return <img src={paper} alt="Mão aberta, representando papel" />

  return <img src={scissors} alt="Mão apontando dois dedos, representando uma tesoura" />
}
