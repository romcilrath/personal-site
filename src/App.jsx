import './App.scss';
import './styles/_variables.scss';
import './styles/Global.scss';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <hr className="section-divider" />
      <Experience />
      <hr className="section-divider" />
      <div className="projects-footer-wrap">
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
