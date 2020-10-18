import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import EmptyState from './components/Commerces/EmptyState';
import FindItHere from './components/FindItHere';
import FormAdd from './components/FormAddCommerce/FormAdd';

function App() {
  return (
    // <>

    // <FormAdd />
    // </>
    <BrowserRouter>

      <Switch>
        <Route exact path='/' component={FindItHere} />
        <Route exact path='/cadastro' component={FormAdd} />
      </Switch>


    </BrowserRouter>
  )
}

export default App;
