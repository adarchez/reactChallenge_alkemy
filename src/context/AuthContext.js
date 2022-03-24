import { createContext } from "react";
import { useState } from "react/cjs/react.development";

const AuthContext = createContext();

const initialAuth = localStorage.getItem("tokenAuth") || false;

const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState(initialAuth);

  const handleAuth = (e) => {
    if (auth){
      setAuth(null);
    }
    else{
      setAuth(true);
    }
  }

  const data = { auth, handleAuth };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
};

export { AuthProvider };
export default AuthContext;