import React, { useState } from 'react'
import { buttonInputStyle, inputStyle } from './style'

interface InputSearchProps {
  placeholder: string
}

const InputSearch = ({ placeholder }: InputSearchProps) => {

  const [valueInput, setValueInput] = useState('')

  return (
    <div className=''>

      <input style={{
        ...inputStyle()
      }}
        id='txtBusca'
        type='text'
        placeholder={placeholder}
        value={valueInput}
        onChange={e => setValueInput(e.target.value)}
      />
      <button id='inputButton' className='pa1' name='submit' style={{ ...buttonInputStyle() }} > Buscar </button>
    </div >
  )
}

export default InputSearch