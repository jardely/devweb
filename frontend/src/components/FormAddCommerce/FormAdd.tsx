import React, { useState } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import SelectOption from '../SelectOption/SelectOption'
import useAddCommerce from './useAddCommerce'
import { COLORS } from '../utils/utils'
import Link from '../Link/Link'

const FormAdd = () => {
  const Field = () => {
    return (
      <div className='pt2' />
    )
  }

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const errorName = name === ''

  const [response, setResponse] = useState()

  const onSave = () => {
    fetch(
      'http://localhost:3000/commerces',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          endereco: address,
          telefone: phone,
          category: category,
          descricao: description
        })
      }
    )
      .then(res => res.json())
      .then(response => {
        console.log(response)
        setResponse(response)
      })
  }

  console.log(name)
  return (
    < div className='pa5 flex justify-center' >
      <div
        style={{ boxShadow: '0 3px 9px 0 rgba(61, 62, 64, 0.2)', borderRadius: '5px', backgroundColor: COLORS.branco }} className=' dsib  b2 br2 bg-base c-on-base pa4 ph5'>
        <h1 style={{ color: COLORS.red2 }}>Cadastrar comércio</h1>
        <Input value={name} error={errorName} errorMessage={'O nome é obrigatório'} handleChange={e => setName(e.target.value)}
          label='Nome do comércio:' />
        <Field />
        <span className='db mb2 w-100' style={{ color: COLORS.grey4 }}>{'Descrição:'}</span>
        <textarea className='br2 pa3 pr6 ' value={description} onChange={e => setDescription(e.target.value)} />

        <Field />
        <Input value={address} handleChange={e => setAddress(e.target.value)} label='Endereço:' helpText='Rua, número. CEP, Cidade-UF.' />
        <Field />
        <Input value={phone} handleChange={e => setPhone(e.target.value)} label='Telefone:' helpText='(83) 987654748' />
        <Field />
        <SelectOption value={category} setValue={setCategory} label='Categoria:' />

        <div className='pv4 pl7'>

          <Button onClick={onSave} label='Cadastrar' variation='primary' disabled={false} />

        </div>
      </div>
    </div >
  )
}

export default FormAdd