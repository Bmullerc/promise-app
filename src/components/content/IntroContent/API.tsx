import { Emphasis as Emp } from '../../reusable/Emphasis'

export const API = () => {
  return (
    <article id="apis" className="my-20 border-b-4 border-purple-200 pb-20 flex flex-col gap-4">
      <h2 className="text-3xl font-bold mb-12 border-l-8 w-fit border-purple-400 pl-2 rounded-md">APIs</h2>
      <h3 className="text-2xl font-bold">Everyone has one, but what does it mean?</h3>
      <p>API is short for <Emp>Application Programming Interface</Emp> . It is a set of rules and protocols for building and integrating application software. It specifies how software components should interact with each other and defines the interfaces between them.</p>

      <p>They are used in many different contexts, for example, a web-based email service like Gmail provides an API that allows developers to build applications that can send and receive email messages. Similarly, a weather forecasting service like OpenWeatherMap provides an API that allows developers to build applications that can access current and forecasted weather data.</p>

      <p>APIs are typically accessed over a network using the <Emp>Hypertext Transfer Protocol (HTTP)</Emp> , and they can return data in a variety of formats, such as XML, JSON, or CSV. They can be either public or private, and they can be used to enable a wide range of applications and services.</p>
    </article>
  )
}
