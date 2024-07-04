import React from 'react'
import { useNavigate } from 'react-router-dom'


const About = () => {
    
    const navigate = useNavigate();
  return (
    <div>
        Sono la pagina about

        <div>
            <button className='btn btn-success mt-4' onClick={() => navigate("/profile")}>
                Profili
            </button>
        </div>

    </div>
  )
}

export default About
