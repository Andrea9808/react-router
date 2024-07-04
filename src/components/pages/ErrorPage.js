import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
    const navigate = useNavigate()
  return (
    <div>
      <h4>Page not found 404</h4>

      <button className='btn btn-success mt-4' onClick={() => navigate("/")}>
        Ritorna alla home
      </button>
    </div>
  )
}

export default ErrorPage
