import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Navbar';   
import ScientistPage from './ScientistPage';
import CommunityPage from './CommunityPage';
import SignUpPage from './components/signuppage';
import DonorPage from './DonorPage';
import HomePage from './HomePage';
import ScientistMyProjectsPage from './ScientistMyProjects';
import MyProjectsPage from './scientistPages/MyProjectsPage';



// {currentPage === 'donor' && <DonorPage />}
// {currentPage === 'community' && <CommunityPage />}

function App() {
  const [currentPage, setCurrentPage] = useState('signup'); // Start with signup page

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <Header onNavigate={navigateTo} />
      <div className="container">
        <Sidebar onNavigate={navigateTo} /> 
        {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
        {currentPage === 'signup' && <SignUpPage onNavigate={navigateTo} />}
        {currentPage === 'scientist' && <ScientistPage  onNavigate={navigateTo} />}
        {currentPage === 'donor' && <DonorPage  onNavigate={navigateTo} />}
        {currentPage === 'community' && <CommunityPage onNavigate={navigateTo} />}
        {currentPage === 'my-projects' && <ScientistMyProjectsPage onNavigate={navigateTo} />}
        {currentPage === 'projects' && <MyProjectsPage onNavigate={navigateTo} />}
      </div>
    </div>
  );
}

export default App;