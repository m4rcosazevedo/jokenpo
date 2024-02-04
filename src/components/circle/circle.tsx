import { ReactNode } from 'react'
import { tv } from 'tailwind-variants'

interface Props {
  children: ReactNode
  className?: string
  color?: 'blue' | 'yellow' | 'red'
  size?: 'small' | 'medium' | 'large'
  onClick: () => void
  active?: boolean
}

const circle = tv({
  base: 'cursor-pointer opacity-70 hover:opacity-100 p-4 object-cover border-[20px] w-48 h-48 flex rounded-full shadow-[inset_2px_2px_3px_rgb(0_0_0_/_23%)] bg-gray-300 items-center justify-center',
  variants: {
    color: {
      blue: 'border-[#2980b9]',
      yellow: 'border-[#f39c12]',
      red: 'border-[#c0392b]'
    },
    size: {
      small: 'w-24 h-24',
      medium: 'w-48 h-48',
      large: 'w-64 h-64'
    },
    active: {
      true: 'bg-white opacity-100',
      false: ''
    }
  },
  compoundVariants: [
    {
      color: 'blue',
      active: true,
      className: 'border-[#3498db]'
    },
    {
      color: 'yellow',
      active: true,
      className: 'border-[#f1c40f]'
    },
    {
      color: 'red',
      active: true,
      className: 'border-[#e74c3c]'
    }
  ]
})

export default function Circle(props: Props) {
  const { color = 'blue', size = 'medium', active = false, children, className, onClick } = props

  return (
    <div onClick={onClick} className={circle({ color, size, className, active })}>
      {children}
    </div>
  )
}
