import React from 'react';
import './styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import {
  Navbar, Sidebar
} from './components'
import StickyBox from 'react-sticky-box'
import { Route, Routes } from 'react-router-dom';
import { Dashboard, Book } from './pages';

function App() {
  return (
    <BrowserRouter>
      <StickyBox>
        <Sidebar />
        <Navbar />
      </StickyBox>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      <Routes>
        <Route path='/books' element={<Book/>}/>
      </Routes>
      {/* <Main /> */}
    </BrowserRouter>
  );
}

export default App;
