import { HashRouter as Router, Route, Routes } from "react-router-dom"
import Pitch from "./components/Pitch.js"
import Projects from "./components/Projects.js"
import Contact from "./components/Contact.js"
import "./App.css"
import Nav from "./components/Nav.js"

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Nav />
        <Routes>
          <Route path="/*" element={<Pitch />}></Route>
          <Route path="/my-projects" element={<Projects />}></Route>
        </Routes>
        <Contact />
      </Router>
    </div>
  )
}

export default App
