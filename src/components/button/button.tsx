import { twMerge } from 'tailwind-merge'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export default function Button({ children, className, ...props }: Props) {
  return (
    <button
      {...props}
      className={twMerge(
        'text-gray-500 bg-white px-4 py-2 rounded-md uppercase text-sm',
        className
      )}
    >
      {children}
    </button>
  )
}
