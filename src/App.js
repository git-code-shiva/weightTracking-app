import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import LandingPage from './components/landingPage/landingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Result from './components/result/result';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/showData' element={<Result/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
