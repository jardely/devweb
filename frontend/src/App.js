import React from 'react';
import Home from './components/Home'
import CommercesProvider from './context/Commerce';

function App() {
  return (
    <CommercesProvider>
      <Home />
    </CommercesProvider>
  )
}

export default App;
