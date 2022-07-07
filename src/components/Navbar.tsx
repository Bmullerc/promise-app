export function Navbar() {
  return (
    <nav id="navbar" className="fixed w-screen top-0 flex justify-between items-center py-1 px-4 lg:px-20 xl:px-32 bg-purple-900 text-lime-400 text-lg shadow-md">
      <h2 className="text-2xl font-bold"><a href="#about">Logo</a></h2>
      <ul className="flex justify-center gap-4 font-medium">
        <li><a href="#intro">Intro</a></li>
        <li><a href="#content">Content</a></li>
        <li><a href="#extra">Extra</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}