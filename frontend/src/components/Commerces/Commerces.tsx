import React from 'react'
import Commerce, { Commerce as CommerceType } from './Commerce'
import EmptyState from './EmptyState'


interface Props {
  commerces: CommerceType[]
}

const Commerces = ({ commerces }: Props) => {
  const haveCommerces = commerces.length > 0

  return (

    haveCommerces ? (
      <div >

        { commerces.map(commerce => <Commerce commerce={commerce} />)}
      </div >
    ) : (
        <EmptyState />
      )
  )
}

export default Commerces