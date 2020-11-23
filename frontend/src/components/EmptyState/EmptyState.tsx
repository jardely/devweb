import React from 'react'
import { EmptyStateStyle } from './style'

const EmptyState = () => {

  return (
    <div className='pv2' data-testid='empty-state'>
      <div
        style={EmptyStateStyle()} className='grow dib flex b2 br2 bg-base c-on-base pa4 ph5'>
        <div className='center'>
          <h3 > Comércio não encontrado! </h3>

          <p>{`O termo pelo qual você buscou não consta na nossa base de dados. Por favor, tente por outro termo.`}</p>
        </div>
      </div>
    </div>)

}

export default EmptyState