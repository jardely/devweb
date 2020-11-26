import React from 'react'
import Link from '../Link/Link'

const NavBar = () => {


  return (
    <nav className="flex w-100">
      <div className='pa3 pl5 '>
        <Link href='/' label='Início'></Link>
        <Link href='/cadastro' label='Cadastrar'></Link>
        <Link href='/sobre-nos' label='Sobre nós'></Link>
      </div>

    </nav>
  )
}

export default NavBar