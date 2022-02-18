import { useState } from 'react';
import './App.css';
import Footer from './layouts/Footer';
import Navbar from './layouts/Navbar';
import Home from './pages/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
