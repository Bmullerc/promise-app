const HTTPstatus = () => {
  return (
    <article id="http-status" className="my-20 border-b-4 border-purple-200 pb-20 flex flex-col gap-4">
      <h2 className="text-3xl font-bold mb-12 border-l-8 w-fit border-purple-400 pl-2 rounded-md">HTTP Status Codes</h2>
      <p>HTTP status codes are standardized codes that are used to communicate the status of a request made to a server. They are divided into five categories:</p>
      <ol className="list-inside list-decimal flex flex-col gap-6">
        <li className="font-medium"><strong>Informational (100-199)</strong>: These codes are used to indicate a provisional response to a request.</li>

        <li className="font-medium"><strong>Success (200-299)</strong>: These codes are used to indicate that a request has been successfully completed, some of them are:
          <ul className="list-inside list-disc marker:text-lime-600 ml-2 flex flex-col gap-5 pt-5 text-lime-800 font-normal">
            <li><strong className="text-lime-600">200 OK</strong>: This code indicates that the request was successful and that the requested information is being returned.</li>
            <li><strong className="text-lime-600">201 Created</strong>: The request succeeded, and a new resource was created as a result. This is typically the response sent after <strong className="text-lime-600">POST</strong> requests, or some <strong className="text-lime-600">PUT</strong> requests.</li>
            <li><strong className="text-lime-600">204 No Content</strong>: This code indicates that the request was successful, but there is no information to be returned.</li>
          </ul>
        </li>

        <li className="font-medium"><strong>Redirection (300-399)</strong>: These codes are used to indicate that the client needs to take additional action in order to complete the request, for example:
          <ul className="list-inside list-disc marker:text-lime-600 ml-2 flex flex-col gap-5 pt-5 text-lime-800 font-normal">
            <li><strong className="text-lime-600">301 Moved Permanently</strong>: This code indicates that the requested resource has been moved permanently to a new location.</li>
            <li><strong className="text-lime-600">302 Found</strong>: This code indicates that the requested resource has been temporarily moved to a new location.</li>
          </ul>
        </li>

        <li className="font-medium"><strong>Client Error (400-499)</strong>: These codes are used to indicate that there was an error on the client side and the request cannot be completed, like:
          <ul className="list-inside list-disc marker:text-lime-600 ml-2 flex flex-col gap-5 pt-5 text-lime-800 font-normal">
            <li><strong className="text-lime-600">400 Bad Request</strong>: This code indicates that the request was invalid or cannot be completed.</li>
            <li><strong className="text-lime-600">401 Unauthorized</strong>: This code indicates that the client must authenticate itself to get the requested response.</li>
            <li><strong className="text-lime-600">403 Forbidden</strong>: This code indicates that the client does not have permission to access the requested resource.</li>
            <li><strong className="text-lime-600">404 Not Found</strong>: The server cannot find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of <strong className="text-lime-600">403 Forbidden</strong> to hide the existence of a resource from an unauthorized client. This response code is probably the most well known due to its frequent occurrence on the web. </li>
          </ul>
        </li>

        <li className="font-medium"><strong>Server Error (500-599)</strong>: These codes are used to indicate that there was an error on the server side and the request cannot be completed. Some common codes in this category include:
          <ul className="list-inside list-disc marker:text-lime-600 ml-2 flex flex-col gap-5 pt-5 text-lime-800 font-normal">
            <li><strong className="text-lime-600">500 Internal Server Error</strong>: This code indicates that an unexpected condition was encountered by the server and no more specific message is suitable.</li>
            <li><strong className="text-lime-600">502 Bad Gateway</strong>: This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.</li>
            <li><strong className="text-lime-600">503 Service Unavailable</strong>: This code indicates that the server is currently unable to handle the request due to a temporary overload or maintenance.</li>
            <li><strong className="text-lime-600">504 Gateweay Timeout</strong>: This error response is given when the server is acting as a gateway and cannot get a response in time.</li>
          </ul>
        </li>
      </ol>

      <p>There are many other HTTP status codes in addition to the ones listed above, and they are used to provide more detailed information about the status of a request.
      </p>
    </article>
  )
}

export default HTTPstatus
