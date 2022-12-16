import { Emphasis as Emp } from "../../reusable/Emphasis";
import { PreCode } from "../../reusable/PreCode";

export function Callbacks() {
  return (
    <article id="callback" className="mt-20 flex flex-col gap-8">
      <div>
        <h2 className="text-3xl font-bold mb-12 border-l-8 w-fit border-purple-400 pl-2 rounded-md">Callback Functions</h2>
        <h2 className="text-2xl font-bold">What are they?</h2>
        <p className="mt-4">A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action. They can either be synchronous or asynchronous.</p>
        <p className="mt-4">Here is a quick example:</p>

        <PreCode>
          {`function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  let name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);`}
        </PreCode>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">What is Synchronous?</h2>
        <p><Emp>Synchronous</Emp> refers to real-time communication where each party receives (and if necessary, processes and replies to) messages instantly (or as near to instantly as possible).</p>
        <p>A human example is the telephone, during a telephone call you tend to respond to another person immediately.
          Many programming commands are also synchronous, for example when you type in a calculation, the environment will return the result to you instantly, unless you program it not to.</p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">What about Asynchronous?</h2>
        <p>The term <Emp>asynchronous</Emp> refers to two or more objects or events <strong>not</strong> existing or happening at the same time (or multiple related things happening without waiting for the previous one to complete). In computing, the word <Emp>asynchronous</Emp> is used in two major contexts.</p>

        <h3 className="text-xl font-bold mt-4">1. Networking and communication</h3>
        <p>Asynchronous communication is a method of exchanging messages between two or more parties in which each party receives and processes messages whenever it's convenient or possible to do so, rather than doing so immediately upon receipt. Additionally, messages may be sent without waiting for acknowledgement, with the understanding that if a problem occurs, the recipient will request corrections or otherwise handle the situation.</p>
        <p>For humans, e-mail is an asynchronous communication method; the sender sends an email and the recipient will read and reply to the message when it's convenient to do so, rather than doing so at once. And both sides can continue to send and receive messages whenever they wish, instead of having to schedule them around each other.</p>
        <p>When software communicates asynchronously, a program may make a request for information from another piece of software (such as a server), and continue to do other things while waiting for a reply. For example, the <a href="#ajax" className="text-purple-500 hover:text-purple-300 font-bold">AJAX (Asynchronous JavaScript and XML)</a> programming technique, even though <a href="#json" className="text-purple-500 hover:text-purple-300 font-bold">JSON</a> is usually used rather than <a href="#xml" className="text-purple-500 hover:text-purple-300 font-bold">XML</a> in modern applications—is a mechanism that requests relatively small amounts of data from the server using <a href="#http" className="text-purple-500 hover:text-purple-300 font-bold">HTTP</a>, with the result being returned when available rather than immediately.</p>

        <h3 className="text-xl font-bold mt-4">2. Software design</h3>
        <p>Asynchronous software design expands upon the concept by building code that allows a program to ask that a task be performed alongside the original task (or tasks), without stopping to wait for the task to complete. When the secondary task is completed, the original task is notified using an agreed-upon mechanism so that it knows the work is done, and that the result, if any, is available.</p>

      </div>

    </article>
  )
}