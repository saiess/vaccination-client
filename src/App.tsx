import { useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './layouts/Footer';
import Navbar from './layouts/Navbar';
import Home from './pages/Home';
import Form from './pages/Form';
import Error from './pages/Error';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" />
          <Route index element={<Home />} />
          <Route path="/form" element={<Form />} />
          {/* catch missing paths */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
