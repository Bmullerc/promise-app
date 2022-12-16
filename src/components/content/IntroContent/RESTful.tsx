import { Emphasis as Emp } from '../../reusable/Emphasis'

export const RESTful = () => {
  return (
    <article id="restful" className="my-20 border-b-4 border-purple-200 pb-20 flex flex-col gap-4">
      <h2 className="text-3xl font-bold mb-12 border-l-8 w-fit border-purple-400 pl-2 rounded-md">RESTful architecture</h2>
      <h3 className="text-2xl font-bold">I love to rest aswell.</h3>
      <p>No... <Emp>RESTful (Representational State Transfer)</Emp> is an architectural style based on the principles of <Emp>REST</Emp> , used for building distributed systems.</p>

      <div className='mb-4'>
        <p className='mb-2'>These principles are:</p>

        <ul className='flex flex-col gap-6 mt-6 list-inside list-disc even:marker:text-purple-500 marker:text-lime-600'>
          <li><strong className='text-lime-600'>Client-server architecture</strong> - The client and server are separate and independent components, which means that they can be developed and deployed independently of each other. This also means that the client and server can be implemented using different technologies and programming languages.</li>

          <li><strong>Statelessness</strong> - The server does not store any information about the client between requests. The server does not have to store any session information or manage state.</li>

          <li><strong className='text-lime-600'>Cacheability</strong> - The responses from the server can be stored by the client or a caching proxy in order to improve performance. This means that the client can reuse the same response data without having to make a new request to the server.</li>

          <li><strong>Uniform interface</strong> - All resources are accessed using the same set of methods and the same URLs. This makes RESTful architectures easy to use and understand, because the client only needs to know the base URL of the web service in order to access all of the resources.</li>

          <li><strong className='text-lime-600'>Layered system</strong> - They can be composed of multiple layers of components that are each responsible for a specific aspect of the service. This makes RESTful architectures flexible and extensible, because new layers can be added or existing layers can be replaced without impacting the other layers.</li>
        </ul>
      </div>

      <p>By following these principles, RESTful architectures enable the development of web services and APIs that are scalable, flexible and easy to use.</p>

    </article>
  )
}
