import React, { Dispatch, SetStateAction } from 'react'
import { LabelStyle, SelectOptionStyle } from './style'

const options = [
  'Lanchonete', 'Mercadinho', 'Doceria', 'Frigorifico'
]

interface Props {
  setValue: Dispatch<SetStateAction<string>>
  value: string
  label: string
}

const SelectOption = ({ value, setValue, label }: Props) => {

  return (
    <>
      {label && <span className='db mb2 w-100' style={LabelStyle()}>{label}</span>}
      <select onChange={e => setValue(e.target.value)} className='pa2 pr6' style={SelectOptionStyle()}>
        {options?.map(option => <option value={option}>{option}</option>)}
      </select>
    </>
  )
}

export default SelectOption