import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AddProductPage, ModifyProductPage } from '../page'

export const BodegaRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="agregar" element={<AddProductPage />} />
                <Route path="modificar" element={<ModifyProductPage />} />
            </Routes>
        </>
    )
}
