import './App.css';
import './styles/Global.css'; // Ensure the global styles are loaded
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getSharedBackgroundColor, setSharedBackgroundColor } from './Theme';
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Get the color from global.css and apply it
const initialColor = getSharedBackgroundColor();
setSharedBackgroundColor(initialColor);

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
