import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeHero from './pages/HomeHero';
import Workouts from './pages/Workouts';
import Pricing from './pages/Pricing';
import Trainers from './pages/Trainers';
import Contact from './pages/Contact';
import Preloader from './components/Preloader';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Preloader onLoaded={() => setIsLoaded(true)} />
      {isLoaded && (
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomeHero />} />
                <Route path="/workouts" element={<Workouts />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/trainers" element={<Trainers />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;