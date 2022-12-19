import { Emphasis as Emp } from "../../reusable/Emphasis"
import { JuicyTip } from "../../reusable/Juicytip"
import { PreCode } from "../../reusable/PreCode"

export const HTTP = () => {
  return (
    <article id="http" className="my-20 border-b-4 border-purple-200 pb-20 flex flex-col gap-4">
      <h2 className="text-3xl font-bold mb-12 border-l-8 w-fit border-purple-400 pl-2 rounded-md">HTTP or Hypertext Transfer Protocol</h2>
      <h3 className="text-2xl font-bold">I see this everywhere, what is it?</h3>
      <p>It is a set of rules and protocols that are used for communication on the <Emp>World Wide Web</Emp> . It is also the foundation of data communication on the internet, and it is the underlying protocol that enables the exchange of information between web browsers and web servers.</p>

      <p>In general, the HTTP protocol defines how messages are formatted and transmitted, and what actions web servers and clients should take in response to various commands. When a user enters a web address into their web browser, the browser sends an <Emp>HTTP request</Emp> message to the web server that hosts the website, and the server responds with an <Emp>HTTP response</Emp> message that contains the requested webpage or other information.</p>

      <p>It is a stateless, client-server protocol, which means that each request message is independent of any previous request, and that the server does not store any information about the client between requests. HTTP is also a textual protocol, which means that the messages are formatted as text, and can be read and written by humans as well as machines.</p>

      <JuicyTip text={<p><strong>HTTPS</strong> stands for <strong >HTTP Secure</strong> and is a secure version of <strong>HTTP</strong>. It uses a secure SSL/TLS (Secure Sockets Layer/Transport Layer Security) connection to encrypt data transmitted between the web server and the client. This makes it more difficult for hackers to intercept and steal sensitive information, such as passwords or credit card numbers, during transmission.</p>}/>

      <h3 className="text-2xl font-bold mt-8">HTTP methods</h3>

      <p>HTTP methods, also known as HTTP verbs, are the commands that a client uses to tell a server what it wants to do with a particular resource. The most common HTTP methods are <Emp>GET, POST, PUT, and DELETE</Emp> , and they correspond to the four most common <Emp>CRUD (create, read, update, delete)</Emp> operations that are used in database management systems.</p>

      <p>Here is a brief overview of each of the HTTP methods and how they are typically used:</p>

      <ul className="list-disc list-inside flex flex-col gap-2 marker:text-purple-500">
        <li>
        <strong>GET</strong> - Used to retrieve a resource from the server like data from an API or web service. It is the most commonly used HTTP method.
        </li>
        <li>
        <strong>POST</strong> - Used to submit data to the server, usually for the purpose of creating a new resource  such as when a user fills out a form on a website.
        </li>
        <li>
        <strong>PUT</strong> - Used to update an existing resource on the server, like when a client wants to replace an existing resource with a new version.
        </li>
        <li>
        <strong>DELETE</strong> - Used to delete a resource from the server.
        </li>
      </ul>

      <p>These HTTP methods are used to specify the desired action that the client wants the server to take on the specified resource. The server will then respond with an HTTP response message that indicates whether the request was successful or not, and it will include the requested data or an error message in the response body.</p>

      <h3 className="text-2xl font-bold mt-8">HTTP headers</h3>

      <p>HTTP headers are the name-value pairs that are included in the header section of an HTTP request or response message. They are used to provide additional information about the request or response, such as the content type and length of the message body, the allowed methods for the request, and the status code of the response.</p>

      <p>They are a fundamental part of the HTTP protocol, and are used to convey a wide range of information about the request or response. For example, the <Emp>Content-Type</Emp> header is used to specify the media type of the request or response body, while the <Emp>Content-Length</Emp> header is used to specify the length of the body in bytes.</p>

      <h3 className="text-2xl font-bold mt-8">Ok, show me.</h3>

      <p className="-mb-4">Here is an example of an HTTP request message that a web browser might send to a web server to request a webpage:</p>

      <PreCode>
        {`GET /index.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Accept-Language: en-US,en;q=0.9
Connection: keep-alive
Upgrade-Insecure-Requests: 1
`}
      </PreCode>

      <p>In this example, the request is a <Emp>GET</Emp> request that is asking the server to send the <Emp>index.html</Emp> file from the root directory of the <Emp>www.example.com</Emp> website. The request also includes a number of <Emp>HTTP headers</Emp> that provide additional information about the request, such as the type of browser that is making the request, the preferred languages and content types, and the connection type.</p>

      <p>When the server receives this request, it will respond with an <Emp>HTTP response</Emp> message that contains the requested webpage or an error message, if the requested resource is not found. The response message will also include its own set of HTTP headers.</p>
    </article>
  )
}
