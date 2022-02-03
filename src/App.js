import './App.css';

import ResponsiveAppBar from './components/ResponsiveAppBar'

import Home from './pages/Home'
import Docs from './pages/Docs'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom';
import Apis from './pages/Apis';

function App() {
  return (
    <div className="App">
      <div>
        <ResponsiveAppBar />
      </div>
      <Routes>
        <Route exact path="/" element={< Home />} />
        <Route exact path="/docs" element={< Docs />} />
        <Route exact path="/apis" element={<Apis />} />
        <Route exact path="/contact" element={< Contact />} />
      </Routes>
    </div>
  );
}

export default App;

