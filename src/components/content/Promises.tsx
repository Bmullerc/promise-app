import { Emphasis as Emp } from "../reusable/Emphasis";
import { JuicyTip } from "../reusable/Juicytip";
import { PreCode } from "../reusable/PreCode";

export function Promises() {
  return (
    <article id="promises" className="my-20 pb-20 border-b-4 border-purple-200">
      <h2 className="text-2xl font-bold border-l-8 w-fit border-purple-400 pl-2 rounded-md">Promises</h2>
      <p className="mt-4">The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It contains both the producing code and calls to the consuming code:</p>

      <PreCode>
        {`let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);`}
      </PreCode>

      <p className="mt-8">When the producing code obtains the res ult, it should call one of the two callbacks:</p>
      <ul className="list-inside list-disc mt-4 marker:text-purple-700">
        <li className="font-medium"><strong>Success</strong> -&gt;  myResolve(result value)</li>
        <li className="font-medium"><strong>Error</strong> -&gt; myReject(error object)</li>
      </ul>

      <h3 className="text-xl font-bold mt-12 mb-4">A Fancier Description</h3>
      <p>A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.</p>

      <h3 className="text-xl font-bold mt-12 mb-4">Promise Object Properties</h3>
      <p>The Promise object supports two properties, <Emp>state</Emp> and <Emp>result</Emp>.</p>
      <p>The <strong>state</strong> and <strong className="text-lime-500">result</strong> can be:</p>

      <ul className="list-inside list-disc mt-4 flex flex-col gap-4">
        <li><strong>Pending</strong>: initial state, neither fullfilled nor rejected. Result is <strong className="text-lime-600">Undefined</strong>.</li>
        <li><strong>Fulfilled</strong>: meaning that the operation was completed successfully. Result is a <strong className="text-lime-600">Value</strong>.</li>
        <li><strong>Rejected</strong>: meaning that the operation failed. Result is an <strong className="text-lime-600">Error Object</strong>.</li>
      </ul>

      <JuicyTip text={<p>You cannot access the Promise properties <strong>state</strong> and <strong>result</strong>. You must use a Promise <strong>method</strong> to handle promises.</p>} />

    </article>
  )
}