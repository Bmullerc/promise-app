import { Emphasis as Emp } from "../reusable/Emphasis";
import { PreCode } from "../reusable/PreCode";

export function Ajax() {
  return (
    <article id="ajax" className="my-20 border-b-4 border-purple-200 pb-20">
      <h2 className="text-3xl font-bold mb-12 border-l-8 w-fit border-purple-400 pl-2 rounded-md">AJAX</h2>
      <h3 className="text-2xl font-bold mb-4">What is it?</h3>
      <p className="mt-4">AJAX stands for <strong>A</strong>synchronous <strong>J</strong>avaScript <strong>A</strong>nd <strong>X</strong>ML. In a nutshell, it is the use of the <Emp>XMLHttpRequest</Emp> object to communicate with servers. It can send and receive information in various formats, including JSON, XML, HTML, and text files. AJAX's most appealing characteristic is its <Emp>asynchronous</Emp> nature, which as we learnt, means it can communicate with the server, exchange data, and update the page without having to refresh the page.</p>

      <p className="mt-8">Here's an example of how you can use <Emp>XMLHttpRequest</Emp> to make an <strong>HTTP GET</strong> request to retrieve data from a server:</p>

      <PreCode>
        {`const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.example.com/api/data');
xhr.onload = function() {
  if (xhr.status === 200) {
    // Request successful, do something with the data
    const data = JSON.parse(xhr.responseText);
    console.log(data);
  } else {
    // Request failed, handle the error
    console.error(xhr.statusText);
  }
};
xhr.onerror = function() {
  // Request failed, handle the error
  console.error(xhr.statusText);
};
xhr.send();`}
      </PreCode>
    </article>
  )
}