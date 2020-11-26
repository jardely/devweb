import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { CommerceType } from '../Commerces/Commerce'
import { COLORS } from '../utils/utils'
import Input from '../Input/Input'
import api from '../../service/api'

interface Props {
  commerce: CommerceType
  onClose: React.Dispatch<React.SetStateAction<boolean>>
}

const Comment = ({ commerce, onClose }: Props) => {

  const haveComments = commerce.comments !== undefined
  const [comments, setComments] = useState([])
  const [addComment, setAddComment] = useState(false)
  const [newComment, setNewComment] = useState('')


  useEffect(() => {
    api.getComments(commerce.id)
      .then((data) => setComments(data.data))
  }, [])

  const onSave = () => {
    const comment = JSON.stringify({
      comment: newComment
    })
    api.addComment(commerce.id, comment)
      .then((data) => {
        console.log(data.data + 'não')
      })
    onClose(false)
  }

  return (
    <div>

      <div
        style={{ boxShadow: '0 3px 9px 0 rgba(61, 62, 64, 0.2)', borderRadius: '5px', backgroundColor: COLORS.branco }}
        className=' dsib  b2 br2 bg-base c-on-base pa4 ph5'>
        <h2>{commerce.name}</h2>
        {haveComments && comments.map(comment => {
          return (
            <div className='pa1'>
              <li>{comment}</li>
            </div>
          )
        })}
        {!haveComments && <span>Nenhum comentário foi registrado!</span>}
        {addComment ?
          <div className='pt3'>
            <div className='pb2'>
              <Input value={newComment} handleChange={e => setNewComment(e.target.value)} label='Adicione um novo comentário' />
            </div>
            <Button onClick={onSave} variant='contained' color='secondary'>Adicionar</Button>

          </div>
          :
          <span className='pt3 flex justify-end'>
            <Button onClick={() => setAddComment(true)} variant='contained' color='secondary'>Adicionar</Button>
          </span>
        }
      </div>
    </div>
  )
}

export default Comment