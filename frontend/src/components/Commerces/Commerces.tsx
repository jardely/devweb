import React from 'react'
import Commerce, { CommerceType } from './Commerce'
import EmptyState from './EmptyState'

interface Props {
  commerces: CommerceType[] | undefined
}

const Commerces = ({ commerces }: Props) => {
  const haveCommerces = commerces && commerces.length > 0

  return (

    haveCommerces ? (
      <div >

        { commerces?.map(commerce => <Commerce commerce={commerce} />)}
      </div >
    ) : (
        <EmptyState />
      )
  )
}

export default Commerces