import React from 'react'
import { COLORS } from '../utils/utils'

const About = () => {

  return (
    <div>
      <div
        style={{ boxShadow: '0 3px 9px 0 rgba(61, 62, 64, 0.2)', borderRadius: '5px', backgroundColor: COLORS.branco }}
        className=' dsib b2 br2 bg-base c-on-base pa4 pl5 ma4 mh6'>
        <h1> Sobre nós</h1>
        <span>
          <p>
            Devido a pandemia, o comércio local de Pedra Lavrada se intensificou e o sistema de delivery ganhou força. Surgiram novos empreendimentos e o canal de divulgação ficou por conta das redes sociais.
            </p>
          <p>
            O problema é que nem todos acabam vendo essa divulgação. Daí, surge a necessidade de ter um local que concentre essa informações dando assim, opções de escolha para usuários clientes e divulgação para os comerciantes.
            </p>
          <p>
            O Ache Aqui é um site de busca de comércios locais que, a príncipio, vai ser dedicado à cidade de Pedra Lavrada.
            </p>
            Comerciantes que queiram divulgação no site, irão se cadastrar informando dados básicos como a categoria do comércio, nome, descrição, endereço e o contato. Os usuários poderão consultar todos os comércios cadastrados, filtrar e, futuramente, filtrar por localização. Depois, poderá avaliar o comércio.
        </span>
      </div>
    </div>
  )
}

export default About