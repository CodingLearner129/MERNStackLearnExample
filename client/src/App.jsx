import { Container } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { decryptData } from './helpers/ecrypt_decrypt.js';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import Auth from './components/Auth/Auth.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';

function App() {
  const user = localStorage.getItem('profile') ? JSON.parse(decryptData(localStorage.getItem('profile'))) : null;
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path='/' element={<Navigate to="/posts" />} />
          <Route path='/posts' element={<Home />} />
          <Route path='/posts/search' element={<Home />} />
          <Route path='/posts/:id' element={<PostDetails />} />
          <Route path='/auth' element={!user ? <Auth /> : <Navigate to="/posts" />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
