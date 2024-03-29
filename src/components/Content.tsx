import { Ajax } from "./content/Ajax";
import { Async } from "./content/Async";
import { Axios } from "./content/Axios";
import { FetchAPI } from "./content/FetchAPI";
import { Intro } from "./Intro";
import { Promises } from "./content/Promises";
import { Extra } from "./Extra";

export function Content() {
  return (
    <main className="h-fit py-12 px-4 lg:px-20 xl:px-32 2xl:px-72 bg-lime-100 text-neutral-800">

      <Intro />

      <section>
        <h2 id="content" className="text-4xl font-bold border-b-8 w-fit border-purple-400 rounded-md pb-1">The Real Stuff</h2>
        <p className="mt-4 text-lg font-bold">Also very important to know 🤔 ?</p>
        <h2 id="async-header" className="text-4xl font-bold mt-12">Asynchronous Javascript Methods</h2>
        <Promises />
        <Async />
      </section>

      <section>
        <h2 id="fetch-header" className="text-4xl font-bold border-b-8 w-fit border-purple-400 rounded-md pb-1">API Fetching</h2>
        <Ajax />
        <FetchAPI />
        <Axios />
      </section>

      <Extra />

    </main>
  )
}