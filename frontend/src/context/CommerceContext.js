import React, { createContext, useContext, useEffect, useState } from 'react'
import api from '../service/api';

const CommercesContext = createContext();

export default function CommercesProvider({ children }) {
  const [commerces, setCommerces] = useState([]);
  return (
    <CommercesContext.Provider value={{ commerces, setCommerces }}>
      {children}
    </CommercesContext.Provider>
  )
}

export function useCommerces() {
  const context = useContext(CommercesContext)
  const { commerces, setCommerces } = context

  useEffect(() => {
    api.getAll()
      .then((data) => setCommerces(data.data))
      .catch((error) => console.log(error))
  }, [])

  return { commerces, setCommerces }
}


