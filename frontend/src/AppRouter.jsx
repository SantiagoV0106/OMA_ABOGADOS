import { Route, Routes } from "react-router-dom";
import { UserRouter } from "./user/router/UserRouter";
import { AuthRouter } from "./auth/routes/AuthRouter";
import { AdminRouter } from "./admin/routes/AdminRouter";
import { AuthContextProvider } from "./auth/context/AuthContextProvider";

export function AppRouter() {
    return (
        <main>
            <AuthContextProvider>
                <Routes>
                    <Route
                        path="/*"
                        element={<UserRouter />}
                    />
                    <Route
                        path="/oma/*"
                        element={<AuthRouter />}
                    />
                    <Route
                        path="/admin/*"
                        element={<AdminRouter />}
                    />
                </Routes>
            </AuthContextProvider>
        </main>
    )
}