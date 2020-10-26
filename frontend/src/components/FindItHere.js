import React from 'react'
import Commerces from './Commerces/Commerces'
import NavBar from './Navbar'
import { COLORS } from './utils/utils'
import useCommerces from '../context/Commerce'

const FindItHere = () => {

  const { commerces } = useCommerces


  return (
    <>
      <div data-testid='find-it-here' style={{ backgroundColor: '#f0efed', height: '100%', fontFamily: 'Arial, Helvetica, sans-serif', }}>
        <div style={{ backgroundColor: COLORS.red2 }}>
          <NavBar />
        </div>
        <div className='ph6 pv4'>
          <h1 className='flex justify-center'>Ache Aqui</h1>
          <div >

            <Commerces commerces={commerces}></Commerces>
          </div>
        </div>
      </div >
    </>
  )
}

export default FindItHere