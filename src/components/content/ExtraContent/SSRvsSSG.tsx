import { Emphasis as Emp } from "../../reusable/Emphasis"

function SSRvsSSG() {
  return (
    <article className="flex flex-col gap-4">
      <h2 id="ssg" className="text-3xl font-bold mt-20 border-l-8 w-fit border-purple-400 pl-2 rounded-md">SSR and SSG</h2>
      <p><strong>S</strong>erver-<strong>S</strong>ide <strong>R</strong>endering <Emp>SSR</Emp> refers to the practice of rendering a client-side JavaScript application on the server, before sending the fully rendered page to the client. This can improve the performance of the application, as the client does not need to wait for the JavaScript to load and execute before being able to see the content of the page.</p>

      <p><strong>S</strong>tatic <strong>S</strong>ite <strong>G</strong>eneration <Emp>SSG</Emp> refers to the practice of generating a set of static HTML files from a collection of content and templates. This can be done either at build time or runtime.</p>

      <h2 className="text-2xl font-bold mt-6">What are the differences?</h2>
      <p><Emp>SSR</Emp> involves rendering the content on the server at the time of the request, while <Emp>SSG</Emp> involves generating the content ahead of time and serving pre-rendered pages. This means that <Emp>SSG</Emp> is more suitable for sites that do not require frequent updates or have content that does not change often, while <Emp>SSR</Emp> is better suited for sites that have more dynamic content or need to be updated frequently.</p>
    </article>


  )
}

export default SSRvsSSG
