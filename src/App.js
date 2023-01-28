import './App.css';
import { Route , Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExcersizeDetail from './pages/ExcersizeDetail';

function App() {
  return (
    <Box width="400px" sx={{width:{xl:"1448px"}}} m ="auto">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/excersize/:id' element={<ExcersizeDetail />} />
        </Routes>
        <Footer />
    </Box>
    
  );
}

export default App;
