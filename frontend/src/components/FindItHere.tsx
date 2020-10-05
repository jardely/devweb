import React from 'react'
import Commerces from './Commerces/Commerces'
import InputSearch from './InputSearch/InputSearch'
import NavBar from './Navbar'
import { COLORS } from './utils/utils'

const commerces = [{ name: 'Lanchonete 3', description: 'Salgados, doces, tudo.', address: 'Rua da Paixão, 15, próximo à Viação Progresso. Pedra Lavrada-PB.', phone: '(83) 997846565' }, { name: 'Lanchonete 3', description: 'Salgados, doces, tudo.', address: 'Rua da Paixão, 15, próximo à Viação Progresso. Pedra Lavrada-PB.', phone: '(83) 997846565' }, { name: 'Lanchonete 3', description: 'Salgados, doces, tudo.', address: 'Rua da Paixão, 15, próximo à Viação Progresso. Pedra Lavrada-PB.', phone: '(83) 997846565' }]

const FindItHere = () => {
  return (
    <>

      <div style={{ backgroundColor: '#f0efed', height: '100%', fontFamily: 'Arial, Helvetica, sans-serif', }}>
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