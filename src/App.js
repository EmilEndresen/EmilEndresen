import Logo from "./components/Logo.js"
import Pitch from "./components/Pitch.js"
import Projects from "./components/Projects.js"
import Contact from "./components/Contact.js"
import "./App.css"
import Nav from "./components/Nav.js"

function App() {
  return (
    <div className="wrapper">
      <Nav />
      <Logo />
      <Pitch />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
