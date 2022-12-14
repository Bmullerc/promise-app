interface PreCodeProps {
  children: string
}

export function PreCode({children}: PreCodeProps) {
  return (
    <pre className='text-sm my-8 bg-lime-300 font-medium text-purple-900 rounded-md md:p-4 p-2 md:w-fit lg:text-base overflow-auto shadow-purple-500 shadow-boxed'>
        <code>
          {children}
        </code>
      </pre>
  )
}