/* eslint-disable no-use-before-define */
import { useState, ReactElement, useContext } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';

import axios from 'axios';
import Footer from './layouts/Footer';
import Navbar from './layouts/Navbar';
import Home from './pages/Home';
import Form from './pages/Form';
import Error from './pages/Error';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import User from './components/User';
import Center from './components/Center';
import AuthContext from './Contexts/LoginContext';

function App() {
  // const [showDashboard, setShowDashboard] = useState(false);

  axios.defaults.withCredentials = true;
  return (
    <div className="App">
      <Navbar />
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" />
            <Route index element={<Home />} />
            <Route path="form" element={<Form />} />
            <Route path="login" element={<Login />} />
            <Route
              path="admin"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            >
              <Route path="users" element={<User />} />
              <Route path="centers" element={<Center />} />
            </Route>
            {/* catch missing paths */}
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </AuthProvider>
      <Footer />
    </div>
  );
}

function AuthProvider({ children }: { children: ReactElement }) {
  const [user, setUser] = useState(null);

  async function signIn({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    await axios.post('http://localhost:3001/api/sessions', { email, password });
    const res = await axios.get('http://localhost:3001/api/me');
    setUser(res.data);
  }

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}

function RequireAuth({ children }: { children: ReactElement }) {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default App;
