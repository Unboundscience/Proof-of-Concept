import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Navbar';   
import ScientistPage from './ScientistPage';

import SignUpPage from './components/signuppage';



// {currentPage === 'donor' && <DonorPage />}
// {currentPage === 'community' && <CommunityPage />}

function App() {
  const [currentPage, setCurrentPage] = useState('signup'); // Start with signup page

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Sidebar onNavigate={navigateTo} /> 
        {currentPage === 'signup' && <SignUpPage onNavigate={navigateTo} />}
        {currentPage === 'scientist' && <ScientistPage />}
      </div>
    </div>
  );
}

export default App;