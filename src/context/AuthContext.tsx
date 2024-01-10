// authContext.js
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { validaToken } from '../services/chamadasAPI';


interface AuthContextProps {
  token: string | null;
  loginContext: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));

  const loginContext = () => {
    setToken(localStorage.getItem("token"));
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };
  
  useEffect (()=>{
    const checkToken = async () => {
      const result = await validaToken()
      if(!result){
        logout()
      }
    }
    if(token)
    checkToken()
  }, [token]);
  

  return (
    <AuthContext.Provider value={{ token, loginContext, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
