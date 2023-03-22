
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Donate from './pages/Donate';
import Home from './pages/Home';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <NavBar/>
      <Routes>
        <Route path="/donate" element={<Donate/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
