import React from 'react';
import Home from './components/Home/Home'
import CommercesProvider from './context/CommerceContext';

function App() {
  return (
    <CommercesProvider>

      <Home />

    </CommercesProvider>
  )
}

export default App;
