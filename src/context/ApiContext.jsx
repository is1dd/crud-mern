import React, { createContext } from 'react'
export const ApiContext = createContext();
const ApiContextProvider = ({children}) => {
      const [auth, setAuth] = React.useState(false);
      const handleSethAuth=()=>{
        setAuth(true);
      }
  return (
    <ApiContext.Provider value={{auth,handleSethAuth}}>
        {children}
    </ApiContext.Provider>
  )
}

export default ApiContextProvider;