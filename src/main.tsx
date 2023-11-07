import React from 'react'
import * as ReactDOM from "react-dom/client";
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Livros from './pages/Livros'
import CadastroLivros from './pages/CadastroLivros';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Livros/>,
  },
  {
    path: "/cadastroLivro/:id?",
    element: <CadastroLivros/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastContainer/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
