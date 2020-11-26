import React, { useState } from 'react'
import NavBar from '../NavBar/Navbar'
import FormAdd from '../FormAddCommerce/FormAdd'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import InputSearch from '../InputSearch/InputSearch'
import { useCommerces } from '../../context/CommerceContext'
import Commerce, { CommerceType } from '../Commerces/Commerce'
import EmptyState from '../EmptyState/EmptyState';
import { HomeStyle, NavbarBackground } from './style';
import About from '../About/About'

const Home = () => {
  const { commerces } = useCommerces()


  const Content = () => {
    const [value, setValue] = useState('')

    const commercesFiltered = commerces.filter((commerce: CommerceType) => commerce.name.toLowerCase().includes(value.toLowerCase()))

    return (
      <div className='ph6 pv3'>
        <div className='pb3 pt1 flex justify-center'>
          <InputSearch placeholder={'Busque por um comércio'} value={value} setValue={setValue} />
        </div>
        {commercesFiltered.length === 0 ? <EmptyState /> :
          <div >
            {commercesFiltered.map((commerce: CommerceType) => <Commerce commerce={commerce} />)}
          </div>
        }
      </div>
    )
  }

  return (
    <>
      <div data-testid='find-it-here' style={HomeStyle()}>
        <div style={NavbarBackground()}>
          <NavBar />
        </div>
        <h1 className='  flex justify-center' style={{ fontSize: '36pt' }}>Ache aqui!</h1>
      </div >
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Content} />
          <Route exact path='/cadastro' component={FormAdd} />
          <Route path='/sobre-nos' component={About} />

        </Switch>
      </BrowserRouter>
    </>
  )
}

export default Home