import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Wardrobe from './Wardrobe'
import Home from './Home'
import Login from './Login'
import Attire from './Attire';




const App = () => {
    const [attireData, setAttireData] = useState([]);
    return (
        <div>App

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/wardrobe' element={<Wardrobe setAttireData={setAttireData} />} />
                    <Route path='/attire/:title' element={<Attire attireData={attireData} />} />
                </Routes>
            </BrowserRouter>

        </div>

    )
}

export default App 