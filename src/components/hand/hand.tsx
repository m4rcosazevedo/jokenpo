import { usePlayer } from '@/contexts'
import { selectColor } from '@/utils/contants'
import { Dispatch, SetStateAction } from 'react'
import { Circle, HandsIcon } from '..'

interface Props {
  option: HandOption
  setSelectOption: Dispatch<SetStateAction<boolean>>
  className?: string
}

export default function Hand({ option, setSelectOption, className }: Props) {
  const { setOption, option: currentOption } = usePlayer()

  const handleOption = () => {
    setOption(option)
    setSelectOption(true)
  }

  return (
    <Circle
      onClick={handleOption}
      active={option === currentOption}
      color={selectColor(option)}
      className={className}
    >
      <HandsIcon option={option} />
    </Circle>
  )
}
