import { PreCode } from "../reusable/PreCode";

export function Promises() {
  return (
    <article id="promises" className="my-20 border-b-4 border-purple-200">
      <h2 className="text-2xl font-bold border-l-8 w-fit border-purple-400 pl-2 rounded-md">Promises</h2>
      <p className="mt-4">The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It contains both the producing code and calls to the consuming code:</p>

      <PreCode
        code={`let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);`} />

    </article>
  )
}