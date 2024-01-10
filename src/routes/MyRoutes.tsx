// Routes.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Alteração aqui
import Login from '../pages/Login';
import Livros from '../pages/Livros';
import CadastroLivros from '../pages/CadastroLivros';
import PrivateRoutes from './privateRoutes';



const AppRoutes = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<PrivateRoutes/>}>
        <Route path="/livros" element={<Livros/>}/>
        <Route path="/cadastroLivro" element={<CadastroLivros/>}/>
      </Route>
    </Routes>
  );
};

const MyRoutes = () => {
  
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default MyRoutes;
