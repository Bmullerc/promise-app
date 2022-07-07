export function Navbar() {
  return (
    <nav id="navbar" className="fixed w-screen top-0 flex justify-between items-center py-3 px-4 lg:px-20 bg-purple-900 text-lime-400 text-lg shadow-md">
      <h2 className="text-2xl font-bold">Logo</h2>
      <ul className="flex justify-center gap-4 font-medium">
        <li><a href="#about">About</a></li>
        <li><a href="#intro">Intro</a></li>
        <li><a href="#content">Content</a></li>
        <li><a href="#extra">Extra</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}