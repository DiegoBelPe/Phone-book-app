import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Inicio from './pages/Home';
import NewContact from './pages/NewContact' 
import EditContact from './pages/EditContact'; 
import ViewContact from './pages/ViewContact.jsx';


function App() {
  return (
    <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Inicio />} />
                  <Route path="contactos/nuevo" element={<NewContact />} />
                  <Route path="contactos/editar/:id" element={<EditContact />} />
                  <Route path=":id" element={<ViewContact />} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
