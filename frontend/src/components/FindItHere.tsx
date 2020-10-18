import React, { useEffect, useState } from 'react'
import { CommerceType } from './Commerces/Commerce'
import Commerces from './Commerces/Commerces'
import NavBar from './Navbar'
import { COLORS } from './utils/utils'

const FindItHere = () => {

  const [commmerces, setCommerces] = useState<CommerceType[] | undefined>()
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

  return (
    <>
      <div data-testid='find-it-here' style={{ backgroundColor: '#f0efed', height: '100%', fontFamily: 'Arial, Helvetica, sans-serif', }}>
        <div style={{ backgroundColor: COLORS.red2 }}>
          <NavBar />
        </div>
        <div className='ph6 pv4'>
          <h1 className='flex justify-center'>Ache Aqui</h1>
          <div >

            <Commerces commerces={commmerces}></Commerces>
          </div>
        </div>
      </div >
    </>
  )
}

export default FindItHere