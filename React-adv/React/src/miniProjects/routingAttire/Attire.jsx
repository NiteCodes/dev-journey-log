import React from 'react'
import { useNavigate } from 'react-router-dom'

const Attire = ({ attireData }) => {
    console.log(attireData, 'attireData');
    const navigate = useNavigate()

  return (
        <>
            <div>Attire</div>
            <ul>
                <li onClick={() => navigate('/')}>Back to Home</li>
               
            </ul>
        </>
    )
}

export default Attire