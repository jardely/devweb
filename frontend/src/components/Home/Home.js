import React, { useState } from 'react'
import NavBar from '../NavBar/Navbar'
import FormAdd from '../FormAddCommerce/FormAdd'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import InputSearch from '../InputSearch/InputSearch'
import { useCommerces } from '../../context/Commerce'
import Commerce from '../Commerces/Commerce'
import EmptyState from '../EmptyState/EmptyState';
import { HomeStyle, NavbarBackground } from './style';

const Content = () => {
  const { commerces } = useCommerces()
  const [value, setValue] = useState('')

  const commercesFiltered = commerces.filter((commerce) => commerce.name.toLowerCase().includes(value.toLowerCase()))

  return (
    <div className='ph6 pv4'>
      <h2 className='flex justify-center'>Ache aqui!</h2>
      <div className='pb3 pt2 flex justify-center'>
        <InputSearch placeholder='Busque por um comércio' value={value} setValue={setValue} />
      </div>
      {commercesFiltered.length === 0 ? <EmptyState /> :
        <div >
          {commercesFiltered.map(commerce => <Commerce commerce={commerce} />)}
        </div>
      }
    </div>
  )
}

const Home = () => {
  return (
    <>
      <div data-testid='find-it-here' style={HomeStyle()}>
        <div style={NavbarBackground()}>
          <NavBar />
        </div>
      </div >
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Content} />
          <Route exact path='/cadastro' component={FormAdd} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default Home