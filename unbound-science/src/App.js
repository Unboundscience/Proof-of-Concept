import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Navbar';
import SignUpPage from './components/signuppage';

function App() {
  return (
      <div className="App">
        <header>
          <Header />
        </header>
        <div className="container">
          <Sidebar />
          
           <SignUpPage />
          
        </div>
      </div>
    
  );
}

export default App;