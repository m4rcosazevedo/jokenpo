import { ReactNode } from 'react'
import { tv } from 'tailwind-variants'

interface Props {
  children: ReactNode
  className?: string
  color?: 'blue' | 'yellow' | 'red'
  size?: 'small' | 'medium' | 'large'
}

const circle = tv({
  base: 'p-4 object-cover border-[20px] w-48 h-48 flex rounded-full shadow-[inset_2px_2px_3px_rgb(0_0_0_/_23%)] bg-gray-300 items-center justify-center',
  variants: {
    color: {
      blue: 'border-[#3498db]',
      yellow: 'border-[#f1c40f]',
      red: 'border-[#e74c3c]'
    },
    size: {
      small: 'w-24 h-24',
      medium: 'w-48 h-48',
      large: 'w-64 h-64'
    }
  }
})

export default function Circle({ children, color = 'blue', size = 'medium', className }: Props) {
  return <div className={circle({ color, size, className })}>{children}</div>
}
