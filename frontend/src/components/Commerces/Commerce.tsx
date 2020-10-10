import React from 'react'
import Button from '../Button/Button'
import { COLORS } from '../utils/utils'

export interface CommerceType {
  categoria: string
  comercioId: number
  descricao: string
  endereco: string
  nome: string
  telefone: string
}

interface Props {
  commerce: CommerceType
}

const Commerce = ({ commerce }: Props) => {
  return (
    <div className='pv2'>
      <div
        style={{ boxShadow: '0 3px 9px 0 rgba(61, 62, 64, 0.2)', borderRadius: '5px', backgroundColor: COLORS.branco }} className='grow dsib flex w-100 b2 br2 bg-base c-on-base pa4 ph5'>
        <div className='w-80'>
          <h2 >{commerce.nome}</h2>
          <div className='pv2'><span className='b'>Description: </span>{commerce.descricao}</div>
          <div className='pv2'><span className='b'>Address: </span>{commerce.endereco}</div>
          <div className='pv2'><span className='b'>Contato: </span>{commerce.telefone}</div>
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