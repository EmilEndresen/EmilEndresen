import { HashRouter as Router, Route, Routes } from "react-router-dom"
import Pitch from "./components/Pitch.js"
import Projects from "./components/Projects.js"
import Footer from "./components/Footer.js"
import Nav from "./components/Nav.js"
import "./App.css"

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/*" element={<Pitch />}></Route>
          <Route path="/my-projects" element={<Projects />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
