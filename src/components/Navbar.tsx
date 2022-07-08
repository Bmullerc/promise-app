import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export function Navbar() {
  return (
    <nav id="navbar" className="fixed w-screen top-0 flex justify-between items-center py-1 px-4 lg:px-20 xl:px-32 2xl:px-72 bg-purple-900 text-lime-400 text-lg shadow-md">
      <h2 className="text-2xl font-bold"><a href="#about" className="hover:text-purple-500 transition-all duration-150 ease-in">Logo</a></h2>
      <ul className="flex justify-center gap-4 font-medium">

        <Menu>
          <Menu.Button>
            <a href="#intro" className="inline-block hover:text-purple-500 hover:-translate-y-1 transition-all duration-150 ease-in">Intro</a>

          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >

            <Menu.Items className="lg:absolute flex flex-col top-56 md:top-8 right-72 mt-2 w-52 origin-center bg-lime-300 text-purple-900 divide-y-2 divide-lime-100 divide-dashed rounded-sm px-2 py-1 font-semibold outline-dashed shadow-boxed active:outline-dashed">

              <Menu.Item>
                {({ active }) => (
                  <a href="#callback" className={`${active ? "text-purple-500 transition-all duration-75 ease-in" : "text-inherit"} `}>Callback Functions</a>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <a href="#xml" className={`${active ? "text-purple-500 transition-all duration-75 ease-in" : "text-inherit"} `}>XML</a>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <a href="#xml" className={`${active ? "text-purple-500 transition-all duration-75 ease-in" : "text-inherit"} `}>JSON</a>
                )}
              </Menu.Item>

            </Menu.Items>
          </Transition>
        </Menu>

        <Menu>

          <Menu.Button>
            <a href="#content" className="inline-block hover:text-purple-500 transition-all duration-150 ease-in hover:-translate-y-1">Content</a>
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >

            <Menu.Items className="lg:absolute flex flex-col top-56 md:top-8 right-52 mt-2 w-52 origin-center bg-lime-300 text-purple-900 divide-y-2 divide-lime-100 divide-dashed rounded-sm px-2 py-1 font-semibold outline-dashed shadow-boxed">

              <Menu.Item>
                {({ active }) => (
                  <a href="#promises" className={`${active ? "text-purple-500 transition-all duration-75 ease-in" : "text-inherit"} `}>Promises</a>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <a href="#promises" className={`${active ? "text-purple-500 transition-all duration-75 ease-in" : "text-inherit"} `}>Async / Await</a>
                )}
              </Menu.Item>

            </Menu.Items>

          </Transition>
        </Menu>

        <li><a href="#extra" className="inline-block hover:text-purple-500 transition-all duration-150 ease-in hover:-translate-y-1">Extra</a></li>

        <li><a href="#contact" className="inline-block hover:text-purple-500 transition-all duration-150 ease-in hover:-translate-y-1">Contact</a></li>


      </ul>
    </nav>
  )
}