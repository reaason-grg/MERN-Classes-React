import React from 'react'
import { useParams } from 'react-router-dom'

const Productdetail = () => {
    const {id}=useParams();
    console.log(id)
  return (
    <div>
      Peoduct Detail
    </div>
  )
}

export default Productdetail
