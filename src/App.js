import './App.css';

import ResponsiveAppBar from './components/ResponsiveAppBar'

import Home from './pages/Home'
import Docs from './pages/Docs'
import Contact from './pages/Contact'
import Footer from './components/Footer'

import { Route, Routes } from 'react-router-dom';
import Applications from './pages/Applications';
import CreateApplication from './components/CreateApplication';
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <div className="App">
      <div>
        <ResponsiveAppBar />
      </div>
      <Routes>
        <Route exact path="/" element={< Home />} />
        <Route exact path="/docs" element={< Docs />} />
        <Route exact path="/applications" element={<Applications />} />
        <Route exact path="/contact" element={< Contact />} />
        <Route exact path="/applications/create" element={<CreateApplication />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

