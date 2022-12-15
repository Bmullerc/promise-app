import { Emphasis as Emp } from '../../reusable/Emphasis'

export const RESTful = () => {
  return (
    <article id="restful" className="my-20 border-b-4 border-purple-200 pb-20 flex flex-col gap-4">
      <h2 className="text-3xl font-bold mb-12 border-l-8 w-fit border-purple-400 pl-2 rounded-md">RESTful</h2>
      <h3 className="text-2xl font-bold">I love to rest aswell.</h3>
      <p>No... <Emp>RESTful (Representational State Transfer)</Emp> is an architectural style based on the principles of the REST used for building distributed systems.</p>

      <div className='mb-4'>
        <p className='mb-2'>These principles are:</p>

        <ul className='flex flex-col gap-2'>
          <li><strong>Client-server architecture</strong> - The client and server are separate and independent components, which means that they can be developed and deployed independently of each other. This also means that the client and server can be implemented using different technologies and programming languages.</li>
          <li><strong>Statelessness</strong> - The server does not store any information about the client between requests. This makes RESTful architectures scalable and easy to maintain, because the server does not have to store any session information or manage state.</li>
          <li><strong>Cacheability</strong> - The responses from the server can be stored by the client or a caching proxy in order to improve performance. This means that the client can reuse the same response data without having to make a new request to the server.</li>
          <li><strong>Uniform interface</strong> - All resources are accessed using the same set of methods and the same URLs. This makes RESTful architectures easy to use and understand, because the client only needs to know the base URL of the web service in order to access all of the resources.</li>
          <li><strong>Layered system</strong> - They can be composed of multiple layers of components that are each responsible for a specific aspect of the service. This makes RESTful architectures flexible and extensible, because new layers can be added or existing layers can be replaced without impacting the other layers.</li>
        </ul>
      </div>



      <p>RESTful use the <Emp>HTTP methods</Emp> to perform actions on the specified resource, and they return data in a format that is easy for other systems to consume (usually JSON or XML). They are designed to be scalable, flexible, and easy to maintain, making them a popular choice for building modern web services and APIs. They are also designed to be simple and lightweight, making it easy to implement and use.</p>
    </article>
  )
}
