import { Ajax } from "./content/Ajax";
import { Async } from "./content/Async";
import { Axios } from "./content/Axios";
import { FetchAPI } from "./content/FetchAPI";
import { Intro } from "./Intro";
import { Promises } from "./content/Promises";
import { Extra } from "./content/Extra";

export function Content() {
  return (
    <main className="h-fit py-12 px-4 lg:px-20 xl:px-32 bg-lime-100 text-neutral-800">

      <Intro />

      <div id="content">
        <h2 id="async-header" className="text-3xl font-bold mt-4 border-b-8 w-fit border-purple-400 rounded-md pb-1">Asynchronous Javascript Methods</h2>
        <Promises />
        <Async />

        <h2 id="fetch-header" className="text-3xl font-bold border-b-8 w-fit border-purple-400 rounded-md pb-1">API Fetching</h2>
        <Ajax />
        <FetchAPI />
        <Axios />
      </div>

      <Extra />

    </main>
  )
}