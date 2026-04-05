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
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
