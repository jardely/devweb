import React from 'react'
import { COLORS } from '../utils/utils'

interface ButtonProps {
  label: string
  variation: string
  disabled: boolean
}



const Button = ({ label, variation, disabled }: ButtonProps) => {

  const colorStyle = () => {
    if (disabled) {
      return { backgroundColor: COLORS.grey1, borderColor: COLORS.grey2, color: COLORS.grey3 }

    } else if (variation === 'primary') {
      return {
        backgroundColor: COLORS.red2, borderColor: COLORS.red2,
        color: COLORS.branco,
      }
    } else {
      return {
        backgroundColor: 'transparent', borderColor: 'transparet',
        color: COLORS.red2
      }
    }
  }
  return (
    <button className='ttu pa2' name='submit' style={{
      ...colorStyle(),
      outline: 0,
      fontSize: '15px',
      border: 'none',
      borderRadius: '5px'
    }}>{label}</button>

  )
}

export default Button;