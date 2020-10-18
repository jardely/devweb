import React, { Dispatch, SetStateAction } from 'react'
import Select from 'react-select'
import { COLORS } from '../utils/utils'

const options = [
  'Lanchonete', 'Mercadinho', 'Doceria', 'Frigorifico'
]


interface Props {
  setValue: Dispatch<SetStateAction<string>>
  value: string
  label: string
}

const SelectOption = ({ value, setValue, label }: Props) => {

  const handleInputChange = (newValue: string) => {

    setValue(newValue);
    return newValue;
  }
  console.log(value)
  return (
    <>
      {label && <span className='db mb2 w-100' style={{ color: COLORS.grey4 }}>{label}</span>}
      <select onChange={e => setValue(e.target.value)} className='pa2 pr6' style={{ borderRadius: '5px' }}>
        {options?.map(option => <option value={option}>{option}</option>)}
      </select>
    </>
  )
}

export default SelectOption