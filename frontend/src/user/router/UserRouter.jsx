import { Route, Routes } from "react-router-dom";
import { AboutUsPage, Home } from "../pages";

export function UserRouter() {
    return (
        <Routes>
            <Route
            path="/"
            element={<Home/>}
            />
            <Route
            path="/about-us"
            element={<AboutUsPage/>}
            />

        </Routes>
    )
}