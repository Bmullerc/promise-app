import { Emphasis as Emp } from "../reusable/Emphasis";
import { PreCode } from "../reusable/PreCode";

export function Async() {
  return (
    <article id="async" className="my-20 border-b-4 border-purple-200 pb-20">
      <h2 className="text-2xl font-bold border-l-8 w-fit border-purple-400 pl-2 rounded-md">Async / Await</h2>
      <p className="mt-4">The async function declaration declares an <Emp>async function</Emp> where the <Emp>await</Emp> keyword is permitted within the function body. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains like the example above.</p>

      <PreCode>
        {`async function getData() {
  const response = await fetch('https://my-api.com/data');
  const data = await response.json();
  return data;
}`}
      </PreCode>
    </article>
  )
}