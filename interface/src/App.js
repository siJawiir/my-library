import React from 'react';
import './styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import {
  Navbar, Sidebar, Main
} from './components'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Main />
    </BrowserRouter>
  );
}

export default App;
