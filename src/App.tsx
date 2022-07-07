import { About } from "./components/About";
import { Content } from "./components/Content";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";

export function App() {
  return (
    <>
      <Navbar />
      <About />
      <Content />
      <Contact />
    </>
  )
}
