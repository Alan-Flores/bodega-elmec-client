import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AddProductPage, ModifyProductPage, Principal } from '../page'

export const BodegaRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="principal" element={<Principal />} />          
                <Route path="agregar" element={<AddProductPage />} />
                <Route path="modificar" element={<ModifyProductPage />} />
            </Routes>
        </>
    )
}
