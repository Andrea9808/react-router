import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Profile = () => {

    const navigate = useNavigate();
  return (
    <div>
        <nav className='d-flex felx-row justify-content-center mx-auto gap-2 mb-4'>
            <Link to='me'>Il mio profilo</Link>
            <Link to='/profile/2'>Profilo 2</Link>
        </nav>
        <h1>Sono la pagina del profilo</h1>
      
      {/* <button className='btn btn-success mt-4' onClick={() => navigate("/")}>
        Ritorna alla home
      </button> */}
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default Profile
