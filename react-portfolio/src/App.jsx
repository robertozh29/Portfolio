import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import Example from './pages/Example'
import Home from './pages/Home'
import Navbar from "./components/Navbar";
import './App.css'

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Example title="About"/>} />
          <Route path="/projects" element={<Example title="Projects"/>} />
        </Routes>
      </Router>
  )
}

export default App
