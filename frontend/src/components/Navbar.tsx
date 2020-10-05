import React from 'react'
import InputSearch from './InputSearch/InputSearch'
import Link from './Link/Link'

const NavBar = () => {

  return (
    <nav className="flex w-100">
      <div className='w-40 pa3 pl5 '>
        <Link href='' label='Saiba mais'></Link>
        <Link href='' label='Cadastrar'></Link>
      </div>
      <div className='pr3 pb3 pt2 flex justify-end w-60'>
        <InputSearch placeholder='Busque por um comércio' />
      </div>
    </nav>
  )
}

export default NavBar