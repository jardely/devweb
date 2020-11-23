import React from 'react'
import { InputErrorStyle, InputHelpStyle, InputLabelStyle, InputStyle } from './style'

interface Props {
  disabled?: boolean
  error?: boolean
  type?: string
  errorMessage?: string
  helpText?: string
  testId?: string
  label?: string
  maxLenght?: number
  minLenght?: number
  placeholder?: string
  readonly?: boolean
  handleChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined
  handleKeyDown?: () => {}
  value?: string
}

const Input = ({ disabled,
  error,
  errorMessage,
  helpText,
  testId,
  label,
  maxLenght,
  minLenght,
  placeholder,
  readonly,
  value,
  type,
  handleChange,
  handleKeyDown }: Props) => {


  return (
    <div>
      <label data-testid={testId}>
        {label && <span className='db mb2 w-100' style={InputLabelStyle()}>{label}</span>}
        <input className='pa2 pr6' style={InputStyle()} value={value} disabled={disabled} type={type} maxLength={maxLenght} minLength={minLenght} placeholder={placeholder} readOnly={readonly} onChange={handleChange} onKeyDown={handleKeyDown}
        />

        {error && errorMessage && <div className='mt1 lh-title' style={InputErrorStyle()}>{errorMessage}</div>}

        {!error && helpText && <div className='mt1 lh-title' style={InputHelpStyle()}>{helpText}</div>}
      </label>
    </div>
  )
}

export default Input