import React from 'react';
import { Routes, Route } from "react-router-dom";

import Main from './components/Home/Main';
import Colaboradores from './components/Colaboradores/Colaboradores';





export default function Rotas() {
    return (
        <Routes>
            <Route exact path='/'element={<Main/>}/>

            <Route path='/colaboradores' element={<Colaboradores />} />
            

            <Route path="*" to='/' />
        </Routes>
    )
}