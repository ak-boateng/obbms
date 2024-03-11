
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Slider from './components/Slider';
import Donate from './pages/Donate';
import Home from './pages/Home';
import Request from './pages/Request';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <NavBar/>
      <Routes>
        <Route path="/" element={<Slider/>}/>
        <Route path="/donate" element={<Donate/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/request" element={<Request/>}/>
        <Route path="/donorlogin" element={<LoginPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
