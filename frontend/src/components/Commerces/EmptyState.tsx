import React from 'react'
import { COLORS } from '../utils/utils'

const EmptyState = () => {

  return (
    <div className='pv2'>
      <div
        style={{ boxShadow: '0 3px 9px 0 rgba(61, 62, 64, 0.2)', borderRadius: '5px', backgroundColor: COLORS.branco }} className='grow dib flex b2 br2 bg-base c-on-base pa4 ph5'>
        <div className='center'>
          <h3 > Comércio não encontrado! </h3>

          <p>{`O termo pelo qual você buscou não consta na nossa base de dados. Por favor, tente por outro termo.`}</p>
        </div>
      </div>
    </div>)

}

export default EmptyState