import { Emphasis as Emp } from "../reusable/Emphasis";
import { PreCode } from "../reusable/PreCode";

export function Axios() {
  return (
    <article id="axios" className="my-20 border-b-4 border-purple-200 flex flex-col gap-4 pb-10">
      <h2 className="text-2xl font-bold border-l-8 w-fit border-purple-400 pl-2 rounded-md">Axios</h2>
      <p className="mt-4">Axios is a popular promise-based HTTP client that enables JavaScript developers to easily send HTTP requests to back-end APIs and also handle its response.</p>

      <p>To use Axios in React, you can use the <Emp>axios</Emp> package as a third-party library. Here is an example of how to use Axios to make an <strong>HTTP GET</strong> request to fetch data:</p>

      <PreCode>
        {`import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get('https://my-api.com/endpoint')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h1>Data received from the API:</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}
`}
      </PreCode>
    </article>
    
  )
}