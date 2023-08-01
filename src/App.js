import './App.css';
import BestBook from './components/BestBook';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import About from './components/About';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BestBook />} />
          <Route path='/about' element={<About />} />
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
