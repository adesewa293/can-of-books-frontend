import { HelmetProvider } from 'react-helmet-async';
import BestBook from './components/BestBook';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div className='App'>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<BestBook />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </div>
  );
}

export default App;
