interface EmphasisProps {
  children: string
}

export const Emphasis = ({ children }: EmphasisProps) => {
  return (
    <code className='break-words p-1 py-[2px] mr-[2px] bg-purple-700 shadow-lime-300 text-lime-300 shadow-boxed-very-small rounded-sm'>
      {children}
    </code>
  )
}