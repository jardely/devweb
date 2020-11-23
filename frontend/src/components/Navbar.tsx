import React, { useState } from 'react'
import Link from './Link/Link'

const NavBar = () => {


  return (
    <nav className="flex w-100">
      <div className='w-40 pa3 pl5 '>
        <Link href='/' label='Início'></Link>
        <Link href='/cadastro' label='Cadastrar'></Link>
      </div>

    </nav>
  )
}

export default NavBar