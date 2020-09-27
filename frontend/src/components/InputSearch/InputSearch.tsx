import React, { useState } from 'react'
import { COLORS } from '../utils/utils'

interface InputSearchProps {
  placeholder: string
}

const InputSearch = ({ placeholder }: InputSearchProps) => {

  const [valueInput, setValueInput] = useState('')

  return (
    <div className='flex justify-center'>

      <input style={{
        float: 'left',
        backgroundColor: COLORS.blue0,
        border: `solid 1px ${COLORS.blue3}`,
        paddingLeft: '5px',
        fontSize: '13px',
        height: '30px',
        width: '200px',
        borderRadius: '5px 0 0 5px',
        outline: 0
      }}
        id='txtBusca'
        type='text'
        placeholder={placeholder}
        value={valueInput}
        onChange={e => setValueInput(e.target.value)}
      />
      <button className='pa1' name='submit' style={{
        border: `solid 1px ${COLORS.blue3}`,
        height: '30px',
        borderRadius: '0 5px 5px 0',
        width: '50px',
        fontWeight: 'normal',
        fontSize: '13px',
        background: COLORS.blue1,
        outline: 0,
        color: COLORS.branco
      }} > Buscar </button>

    </div >
  )
}

export default InputSearch