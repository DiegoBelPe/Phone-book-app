import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Prueba from './components/Header';
import NewContact from './components/NewContact';

function App() {
  return (
    <BrowserRouter>
     <Routes>
     <Route path="/" element={<Prueba />} />
     <Route path="/contacto/nuevo" element={<NewContact />} />
     </Routes>
    
    </BrowserRouter>
  );
}

export default App;
