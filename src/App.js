import './index.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Body from './components/Body';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
