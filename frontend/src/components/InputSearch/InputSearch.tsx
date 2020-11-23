import { Button } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import React from 'react'
import { buttonInputStyle, inputStyle } from './style'

interface InputSearchProps {
  placeholder: string
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  onSearch: () => void
}

const InputSearch = ({ placeholder, value, setValue }: InputSearchProps) => {

  return (
    <div data-testid='input-search'>
      <input style={{
        ...inputStyle()
      }}
        id='txtBusca'
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <Button variant='contained' style={{ ...buttonInputStyle() }} disabled={true}><SearchIcon /></Button>
    </div >
  )
}

export default InputSearch