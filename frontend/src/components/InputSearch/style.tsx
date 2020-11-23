import { COLORS } from "../utils/utils";

export const buttonInputStyle = () => {
  return {
    border: 'none',
    height: '35px',
    borderRadius: '0 5px 5px 0',
    width: '60px',
    fontSize: '13px',
    background: COLORS.branco,
    boxShadow: '0 3px 9px 0 rgba(61, 62, 64, 0.2)',
    outline: 0,
    color: COLORS.red2
  }
}

export const inputStyle = () => {
  return {
    boxShadow: '0 3px 9px 0 rgba(61, 62, 64, 0.2)',
    border: 'none',
    paddingLeft: '5px',
    fontSize: '13px',
    height: '36px',
    width: '300px',
    borderRadius: '5px 0 0 5px',
    outline: 0
  }
}