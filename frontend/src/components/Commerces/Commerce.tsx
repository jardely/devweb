import React from 'react'
import Button from '../Button/Button'
import { COLORS } from '../utils/utils'

export interface Commerce {
  name: string
  description: string
  address: string
  phone: string
}

interface Props {
  commerce: Commerce
}

const Commerce = ({ commerce }: Props) => {
  return (
    <div className='pv2'>
      <div
        style={{ boxShadow: '0 3px 9px 0 rgba(61, 62, 64, 0.2)', borderRadius: '5px', backgroundColor: COLORS.branco }} className='grow dib flex w-100 b2 br2 bg-base c-on-base pa4 ph5'>
        <div className='w-80'>
          <h2 >{commerce.name}</h2>
          <div className='pv2'><span className='b'>Description: </span>{commerce.description}</div>
          <div className='pv2'><span className='b'>Address: </span>{commerce.address}</div>
          <div className='pv2'><span className='b'>Contato: </span>{commerce.phone}</div>
          <Button label='Editar' variation='secondary' disabled={false} />
        </div>
        <div className='w-20 h3 pa2 flex justify-end items-center pt5'>


          <Button label='Comentários' variation='primary' disabled={false} />

        </div>
      </div>
    </div>
  )
}

export default Commerce