interface Props {
  children: string
}

export default function Title({ children }: Props) {
  return (
    <h1 className="text-2xl text-center text-white font-semibold mb-2 uppercase">{children}</h1>
  )
}
