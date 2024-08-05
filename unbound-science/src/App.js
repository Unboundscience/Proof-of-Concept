import React from 'react';
import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import SignUpPage from './components/signuppage';
import Footer from './components/Footer'; 


function App() {
  return (
    <div className="app-container"> 
      <header className="app-header">
      <Header />
      </header>

      <div className="content-wrapper">
        <Sidebar className="app-sidebar" /> 
        <main className="main-content">
          <SignUpPage />
        </main>
        <Footer />
      </div>
    </div>
  );
}


export default App;