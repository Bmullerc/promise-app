interface Props {
  text: JSX.Element;
}

export function JuicyTip(props: Props) {
  return (
    <div className='bg-lime-300 p-2 mt-6 rounded-md border-l-4 2xl:w-2/3 border-lime-500'>
      <h3 className='text-purple-500 font-bold'>🧃 JUICY TIP:</h3>
      {props.text}
    </div>
  )
}