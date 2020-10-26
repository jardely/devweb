import React, { createContext, useContext, useEffect, useState } from 'react'

const CommercesContext = createContext(null);


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
    fetch(
      'http://localhost:3000/commerces',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
      .then(res => res.json())
      .then(response => {

        setCommerces(response)
      })
  }, [])

  return { commerces, setCommerces }
}


