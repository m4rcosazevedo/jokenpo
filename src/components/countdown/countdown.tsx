import { useEffect, useState } from 'react'

interface Props {
  onFinish: () => void
}

export default function Countdown({ onFinish }: Props) {
  const [count, setCount] = useState(3)

  useEffect(() => {
    const interval = setInterval(() => {
      if (count === 1) onFinish()

      setCount(prev => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [count, onFinish])

  if (count <= 0) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-black opacity-35 absolute inset-0" />
      <div className="text-9xl font-bold text-white z-10 animate-bounce">{count}</div>
    </div>
  )
}
