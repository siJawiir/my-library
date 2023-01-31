import React from 'react';
import './styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import {
  Navbar, Sidebar
} from './components'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
    </BrowserRouter>
  );
}

export default App;
