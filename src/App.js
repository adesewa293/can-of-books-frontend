import './App.css';
import BestBook from './components/BestBook';
import {Route,BrowserRouter,Routes} from 'react-router-dom'
import About from './components/about';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/About" element={<About/>} />
                    <Route path="/BestBook" element={<BestBook/>} />
                </Routes>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
