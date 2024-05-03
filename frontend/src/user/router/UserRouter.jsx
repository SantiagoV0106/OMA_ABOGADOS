import { Route, Routes } from "react-router-dom";
import { AboutUsPage, Home, StatisticsPage, ServicePage, NoticiasPage, DocumentosPage } from "../pages";

export function UserRouter() {
    return (
        <Routes>
            <Route
                path="/"
                element={<Home />}
            />
            <Route
                path="/sobre-nosotros"
                element={<AboutUsPage />}
            />
            <Route
                path="/estadisticas"
                element={<StatisticsPage />}
            />
            <Route
                path="/servicios/:servicio"
                element={<ServicePage />}
            />
            <Route
                path="/boletines/documentos"
                element={<DocumentosPage />}
            />
            <Route
                path="/boletines/noticias"
                element={<NoticiasPage />}
            />

        </Routes>
    )
}