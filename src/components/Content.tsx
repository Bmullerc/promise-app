import { Ajax } from "./content/Ajax";
import { Async } from "./content/Async";
import { Axios } from "./content/Axios";
import { Callbacks } from "./content/Callbacks";
import { FetchAPI } from "./content/FetchAPI";
import { Intro } from "./Intro";
import { Promises } from "./content/Promises";

export function Content() {
  return (
    <main className="h-fit py-12 px-4 lg:px-20 bg-lime-100 text-neutral-800">

      <Intro />

      <div id="content">
        <Callbacks />

        <h2 className="text-3xl font-bold mt-4">Asynchronous Javascript Methods</h2>
        <Promises />
        <Async />

        <h2 className="text-3xl font-bold">API Fetching</h2>
        <Ajax />
        <FetchAPI />
        <Axios />
      </div>

    </main>
  )
}