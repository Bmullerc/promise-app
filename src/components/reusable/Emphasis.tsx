interface EmphasisProps {
  children: string
}

export const Emphasis = ({ children }: EmphasisProps) => {
  return (
    <code className='break-words p-1 mr-[.5px] bg-lime-300 shadow-purple-500 shadow-boxed-very-small rounded-sm'>
      {children}
    </code>
  )
}