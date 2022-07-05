import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Greetings from './components/greetings';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path='*' element={<Greetings />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
