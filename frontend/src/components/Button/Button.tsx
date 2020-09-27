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
        backgroundColor: COLORS.blue1, borderColor: COLORS.blue1,
        color: COLORS.branco,
      }
    } else {
      return {
        backgroundColor: COLORS.blue0, borderColor: COLORS.blue0,
        color: COLORS.blue3
      }
    }
  }
  return (
    <button className='ttu pa2' name='submit' style={{
      ...colorStyle(),
      outline: 0,
      fontSize: '15px',
      border: 'none'
    }}>{label}</button>

  )
}

export default Button;