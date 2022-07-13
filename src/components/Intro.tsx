import { Callbacks } from "./content/Callbacks";

export function Intro() {
  return (
    <article id="intro" className="my-20 pb-20 border-b-4 border-purple-200">

      <div>
        <h2 className="text-4xl font-bold border-b-8 w-fit border-purple-400 rounded-md pb-1">Introduction</h2>
        <p className="mt-4 text-lg font-bold">Let's cover a few important to know topics first.</p>
      </div>

      <Callbacks />

      <div className="flex flex-col gap-4">
        <h2 id="xml" className="text-3xl font-bold border-l-8 w-fit border-purple-400 pl-2 rounded-md">XML</h2>
        <p>e<strong className="text-lg">X</strong>tensible <strong className="text-lg">M</strong>arkup <strong className="text-lg">L</strong>anguage (XML) is a generic markup language specified by the W3C (World Wide Web Consortium). The information technology industry uses many languages based on XML as data-description languages.</p>
        <p>XML tags resemble HTML tags, but XML is much more flexible because it lets users define their own tags. In this way XML acts like a meta-language—that is, it can be used to define other languages, such as <a href="#ress" className="text-purple-600 hover:text-purple-300 font-medium">RSS</a>. Moreover, HTML is a presentation language, whereas XML is a data-description language. This means that XML has far broader applications than just the Web. For example, Web services can use XML to exchange requests and responses.</p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 id="json" className="text-3xl font-bold mt-20 border-l-8 w-fit border-purple-400 pl-2 rounded-md">JSON</h2>
        <p><strong className="text-lg">J</strong>ava<strong className="text-lg">S</strong>cript <strong className="text-lg">O</strong>bject <strong>N</strong>otation (JSON) is a data-interchange format. Although not a strict subset, JSON closely resembles a subset of JavaScript syntax. Though many programming languages support JSON, it is especially useful for JavaScript-based apps, including websites and browser extensions.</p>
        <p>JSON can represent numbers, booleans, strings, null, arrays, and objects made up of these values (or of other arrays and objects). JSON does not natively represent more complex data types like functions, regular expressions, dates, and so on. (Date objects by default serialize to a string containing the date in ISO format, so the information isn't completely lost.) If you need JSON to represent additional data types, transform values as they are serialized or before they are deserialized.</p>
      </div>




    </article>
  )
}