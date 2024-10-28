import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import Main from './components/Main';

import HomePage from './pages/HomePage';
import Details from './pages/Details';
import NotFound from './pages/NotFound';

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <Router basename="/country-app">  {}
      <>
        <Header />
        <Main>
          <Routes>
            <Route 
              path="/" 
              element={<HomePage countries={countries} setCountries={setCountries} />} 
            />
            <Route 
              path="/country/:name" 
              element={<Details />} 
            />
            <Route 
              path="*" 
              element={<NotFound />} 
            />
          </Routes>
        </Main>
      </>
    </Router>
  );
}

export default App; 
