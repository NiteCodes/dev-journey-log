import React from 'react'
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const navigate = useNavigate()

    return (
        <div>Home

            <ul>
                <li onClick={() => navigate('/')} >Home</li>
                <li onClick={() => navigate('/wardrobe')} >Wardrobe</li>
                <li onClick={() => navigate('/login')} >Login</li>
            </ul>

        </div>
    )
}

export default Home