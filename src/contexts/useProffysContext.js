import React, { createContext, useState } from 'react'; 
import { api } from '../services/api';

export const useProffysContext = createContext(); 

const ProffysContextProvider = ({ children }) => {

  const [proffys, setProffys] = useState([]);

  const getProffys = async () => { 
    const { data } = await api.get('/proffys'); 
    setProffys(data); 
  };

  if(!proffys.length > 0) {
    getProffys();
  }

  return (
    <useProffysContext.Provider value={{ proffys, getProffys }}>
      { children }
    </useProffysContext.Provider>
  )
}

export default ProffysContextProvider;