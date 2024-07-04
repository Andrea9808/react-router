import React from 'react'

// importo useParams per recuperare i parametri passati nell'url
import { useParams } from 'react-router-dom'

const SingleProfile = () => {

    const params = useParams()
    console.log(params)

  return (
    <div>
        Sono la pagina del profilo singolo con id {params.id}
    </div>
  )
}

export default SingleProfile
