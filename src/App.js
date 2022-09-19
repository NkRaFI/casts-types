import './App.css';
import HeroBanner from './components/heroBanner/HeroBanner';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
        <section className='relative'>
          <div className="absolute top-0 w-full">
            <Navbar />
          </div>
          <HeroBanner />
        </section>
    </div>
  );
}

export default App;
