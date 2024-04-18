import { Route, Routes } from "react-router-dom";
import { AboutUsPage, Home, StatisticsPage, ServicePage } from "../pages";

export function UserRouter() {
    return (
        <Routes>
            <Route
            path="/"
            element={<Home/>}
            />
            <Route
            path="/sobre-nosotros"
            element={<AboutUsPage/>}
            />
            <Route
            path="/estadisticas"
            element={<StatisticsPage/>}
            />
            <Route
            path="/servicios/:servicio"
            element={<ServicePage/>}
            />

        </Routes>
    )
}