function JSON() {
  return (
    <div className="flex flex-col gap-4">
        <h2 id="json" className="text-3xl font-bold mt-20 border-l-8 w-fit border-purple-400 pl-2 rounded-md">JSON</h2>
        <p><strong className="text-lg">J</strong>ava<strong className="text-lg">S</strong>cript <strong className="text-lg">O</strong>bject <strong>N</strong>otation (JSON) is a data-interchange format. Although not a strict subset, JSON closely resembles a subset of JavaScript syntax. Though many programming languages support JSON, it is especially useful for JavaScript-based apps, including websites and browser extensions.</p>
        <p>JSON can represent numbers, booleans, strings, null, arrays, and objects made up of these values (or of other arrays and objects). JSON does not natively represent more complex data types like functions, regular expressions, dates, and so on. (Date objects by default serialize to a string containing the date in ISO format, so the information isn't completely lost.) If you need JSON to represent additional data types, transform values as they are serialized or before they are deserialized.</p>
      </div>
  )
}

export default JSON
