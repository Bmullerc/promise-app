import { Menu, Transition } from '@headlessui/react'
import { CaretCircleDown } from 'phosphor-react'
import { Fragment } from 'react'

export function Navbar() {
  return (
    <nav id="navbar" className="fixed w-screen top-0 md:flex justify-between items-center py-1 px-4 lg:px-20 xl:px-32 2xl:px-72 bg-purple-900 text-lime-400 text-lg shadow-md">
      <h2 className="text-2xl font-bold"><a href="#about" className="hover:text-purple-500 transition-all duration-150 ease-in">Promising Promises</a></h2>
      <ul className="flex md:justify-center gap-4 font-medium">

        <Menu>
          <a href="#intro" className="hover:text-purple-500 hover:-translate-y-1 transition-all duration-150 ease-in">Intro </a>

          <Menu.Button className="-ml-3 hover:text-purple-500 hover:-translate-y-1 transition-all duration-150 ease-in">
            <CaretCircleDown size={24} weight="fill" />
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

            <Menu.Items className="absolute flex flex-col top-[70px] md:right-1/4 md:top-8 lg:right-72 2xl:right-[500px] mt-2 w-52 origin-center bg-lime-300 text-purple-900 divide-y-2 divide-lime-100 divide-dashed rounded-sm px-2 py-1 font-semibold outline-dashed shadow-boxed active:outline-dashed">

              <Menu.Item>
                {({ active }) => (
                  <a href="#xml" className={`${active ? "text-purple-500 transition-all duration-75 ease-in" : "text-inherit"} `}>XML</a>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <a href="#json" className={`${active ? "text-purple-500 transition-all duration-75 ease-in" : "text-inherit"} `}>JSON</a>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <a href="#callback" className={`${active ? "text-purple-500 transition-all duration-75 ease-in" : "text-inherit"} `}>Callback Functions</a>
                )}
              </Menu.Item>

            </Menu.Items>
          </Transition>
        </Menu>

        <Menu>

          <a href="#content" className="inline-block hover:text-purple-500 transition-all duration-150 ease-in hover:-translate-y-1">Content</a>

          <Menu.Button className="-ml-3 hover:text-purple-500 hover:-translate-y-1 transition-all duration-150 ease-in">
            <CaretCircleDown size={24} weight="fill" />
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

            <Menu.Items className="absolute flex flex-col top-[70px] md:top-8 left-20 md:left-auto md:right-20 lg:right-40 2xl:right-80 mt-2 w-52 origin-center bg-lime-300 text-purple-900 divide-y-2 divide-lime-100 divide-dashed rounded-sm px-2 py-1 font-semibold outline-dashed shadow-boxed active:outline-dashed">

              <Menu.Item>
                {({ active }) => (
                  <a href="#promises" className={`${active ? "text-purple-500 transition-all duration-75 ease-in" : "text-inherit"} `}>Promises</a>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <a href="#async" className={`${active ? "text-purple-500 transition-all duration-75 ease-in" : "text-inherit"} `}>Async / Await</a>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <a href="#fetch-header" className={`${active ? "text-purple-500 transition-all duration-75 ease-in" : "text-inherit"} `}>API Fetching</a>
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