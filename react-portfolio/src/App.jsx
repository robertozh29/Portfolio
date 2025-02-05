import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import Example from './pages/Example'
import Home from './pages/Home'
import Navbar from "./components/Navbar/Navbar.jsx";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import './App.css'

function App() {
  return (
      <Router>
        <Navbar />
        <SocialMedia />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Example title="About"/>} />
          <Route path="/projects" element={<Example title="Projects"/>} />
          <Route path="/contact" element={<Example title="Contact"/>} />
          <Route path="/articles" element={<Example title="Articles" />} />
        </Routes>
      </Router>
  )
}

export default App
