import React from 'react';
import { Routes, Route } from "react-router-dom";

import Colaboradores from './components/Colaboradores/Colaboradores';



export default function Rotas() {
    return (
        <Routes>
            

            <Route path='/colaboradores' element={<Colaboradores />} />
            

            <Route path="*" to='/' />
        </Routes>
    )
}