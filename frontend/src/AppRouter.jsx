import { Route, Routes } from "react-router-dom";
import { UserRouter } from "./user/router/UserRouter";

export function AppRouter() {
    return (
        <main>
            <Routes>
                <Route
                    path="/*"
                    element={<UserRouter />}
                />
            </Routes>
        </main>
    )
}