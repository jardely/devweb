import React from 'react'

interface Props {
  href: string
  target?: string
  label?: string
  children?: string
  onClick?: () => {}
}

const Link = ({ href, target, label, onClick }: Props) => {

  return (
    <a onClick={onClick} style={{ outline: 0, }} className="pr5 link white hover-black" href={href} target={target}>{label}</a>

  )
}

export default Link