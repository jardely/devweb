import React from 'react'
import Button from '@material-ui/core/Button'
import EmptyState from '../EmptyState/EmptyState'
import { CommerceStyle } from './style'

export interface CommerceType {
  category: string
  description: string
  address: string
  name: string
  phone: string
}

interface Props {
  commerce: CommerceType
}

const Commerce = ({ commerce }: Props) => {

  return (
    <div className='pv2' data-testid='commerce'>
      {!commerce ? <EmptyState /> : <div
        style={CommerceStyle()} className='grow dsib flex w-100 b2 br2 bg-base c-on-base pa4 ph5'>
        <div className='w-80'>
          <h2 >{commerce.name}</h2>
          <div className='pv2'><span className='b'>Descrição: </span>{commerce.description}</div>
          <div className='pv2'><span className='b'>Endereço: </span>{commerce.address}</div>
          <div className='pv2'><span className='b'>Contato: </span>{commerce.phone}</div>
        </div>
        <div className='w-30 h3 pa2 flex justify-end items-center pt5'>
          <Button variant='contained' color='secondary' disabled={false}> COMENTÁRIOS </Button>
        </div>
      </div>}

    </div>
  )
}

export default Commerce