import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/page"
import { BodegaRoutes } from "../bodega"
import { AddProductPage, ModifyProductPage } from "../bodega/page"


export const AppRouter = () => {
    return (
        <>
            <Routes>

                <Route path="login" element={<LoginPage />} />
                <Route path="/" element={<Navigate to="/login" />} />                

            </Routes>
        </>
    )
}
