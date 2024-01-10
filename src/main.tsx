import React from 'react'
import * as ReactDOM from "react-dom/client";
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './context/AuthContext';
import MyRoutes from './routes/MyRoutes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastContainer/>
    <AuthProvider>
      <MyRoutes/>
    </AuthProvider>
  </React.StrictMode>,
)
