interface Props {
  code: string;
}

export function PreCode(props: Props) {
  return (
    <pre className='text-sm my-6 bg-lime-300 font-medium text-purple-900 rounded-md md:p-4 p-2 md:w-fit lg:text-base overflow-auto shadow-purple-500 shadow-boxed '>
        <code>
          {props.code}
        </code>
      </pre>
  )
}