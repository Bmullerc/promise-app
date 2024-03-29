export function About() {
  return (
    <aside id="about" className="h-fit py-12 mt-12 px-4 lg:px-20 xl:px-32 2xl:px-72 bg-lime-300 text-purple-900 flex flex-col gap-3">
      <h3 className="text-2xl font-bold">About the project</h3>
      <p className="mt-4">Following the idea of my last learning project <a href="https://hoowks.netlify.app/" className="hover:text-purple-400 font-bold">Hoowks</a>, this is a mix of studying and applying the knowledge that I learn, with a pinch of experimentation and trial and error along the way.</p>
      <p>The main focus of this project is to study <a href="#http" className="hover:text-purple-400 font-bold">HTTP</a> in general, <a href="#async-header" className="hover:text-purple-400 font-bold">Asynchronous Javascript Methods</a> and <a href="#fetch-header" className="hover:text-purple-400 font-bold">API Fetching</a>, but it also includes other related topics.</p>
      <p><strong className="text-purple-900">Information may be wrong or missing critical parts.</strong></p>
    </aside>
  )
}