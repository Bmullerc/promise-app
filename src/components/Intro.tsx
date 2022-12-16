import { API } from "./content/IntroContent/API";
import { Callbacks } from "./content/IntroContent/Callbacks";
import { HTTP } from "./content/IntroContent/HTTP";
import HTTPstatus from "./content/IntroContent/HTTPstatus";
import { RESTful } from "./content/IntroContent/RESTful";
import XML from "./content/IntroContent/XML";
import JSON from "./content/IntroContent/JSON";

export function Intro() {
  return (
    <article id="intro" className="my-20 pb-20 border-b-4 border-purple-200">

      <header>
        <h2 className="text-4xl font-bold border-b-8 w-fit border-purple-400 rounded-md pb-1">Let's Begin</h2>
        <p className="mt-4 text-lg font-bold">But first, we must cover a few very important topics to know.</p>
      </header>

      <HTTP />
      <HTTPstatus />
      <API />
      <RESTful />
      <XML />
      <JSON />
      <Callbacks />

    </article>
  )
}