import JSON from "./content/ExtraContent/JSON";
import XML from "./content/ExtraContent/XML";

export function Extra() {
  return (
    <article id="extra" className="my-20">
      <h2 className="text-3xl font-bold border-b-8 w-fit border-purple-400 rounded-md pb-1 mb-10">A little Extra</h2>
      <XML />
      <JSON />
    </article>
  )
}