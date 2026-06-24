// import { toast } from "react-toastify";
// import axios from "../axios";
import { createContext, useContext,} from "react";


export const AuthContext = createContext();

const AuthProvider = (props) => {








 


  return (
    <AuthContext.Provider
      value={{
       
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

// Export AuthProvider component and hook
export default AuthProvider;
export const useAuthContext = () => useContext(AuthContext);
