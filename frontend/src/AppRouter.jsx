import { Route, Routes } from "react-router-dom";
import { UserRouter } from "./user/router/UserRouter";
import { AuthRouter } from "./auth/routes/AuthRouter";

export function AppRouter() {
    return (
        <main>
            <Routes>
                <Route
                    path="/*"
                    element={<UserRouter />}
                />
                <Route
                    path="/admin/*"
                    element={<AuthRouter />}
                />
            </Routes>
        </main>
    )
}