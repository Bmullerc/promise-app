import { Emphasis as Emp } from "../reusable/Emphasis";
import { PreCode } from "../reusable/PreCode";

export function FetchAPI() {
  return (
    <article id="fetch" className="my-20 border-b-4 border-purple-200">
      <h2 className="text-2xl font-bold border-l-8 mb-12  w-fit border-purple-400 pl-2 rounded-md">FetchAPI</h2>

      <h3 className="text-2xl font-bold mb-4">So, what it means?</h3>

      <p className="mb-4">The <Emp>fetch()</Emp> API is a modern way to make network requests in JavaScript. It provides a more powerful and flexible way to send HTTP requests than the older <Emp>XMLHttpRequest</Emp> object. </p>

      <p>It is available in most modern browsers, and it allows you to make HTTP requests to a server and receive a response. It returns a promise, which means you can use the <Emp>then()</Emp> method to specify what should happen when the request is successful, and the <Emp>catch()</Emp> method to handle any errors that occur.</p>

      <PreCode>
        {`fetch('https://www.example.com/api/data')
  .then(response => response.json())
  .then(data => {
    // Do something with the data
    console.log(data);
  })
  .catch(error => {
    // Handle the error
    console.error(error);
  });`}
      </PreCode>

      <p>Overall, the <Emp>fetch()</Emp> API provides a more modern and convenient way to make HTTP requests in JavaScript, and it is often used in web applications to retrieve data from a server.</p>
    </article>
  )
}