import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import EmptyState from '../EmptyState/EmptyState'
import { CommerceStyle } from './style'
import { Dialog } from '@material-ui/core'
import Comment from '../Comment/Comment'
import Input from '../Input/Input'

export interface CommerceType {
  id: number
  name: string
  description: string
  phone: string
  address: string
  category: string
  comments: string[]
}

interface Props {
  commerce: CommerceType
}

const Commerce = ({ commerce }: Props) => {
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

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
          <Button onClick={handleOpenModal} variant='contained' color='secondary' disabled={false}> COMENTÁRIOS </Button>
        </div>
        <Dialog open={openModal} onClose={handleCloseModal}>
          <Comment commerce={commerce} onClose={setOpenModal} />
        </Dialog>
      </div>}

    </div>
  )
}

export default Commerce