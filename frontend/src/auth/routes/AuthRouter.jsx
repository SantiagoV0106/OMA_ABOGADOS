import { Routes, Route } from 'react-router-dom'
import { LoginPage } from '../pages/Login/Login'

export function AuthRouter() {
    return (
        <Routes>
            <Route
                path='/login'
                element={<LoginPage />}
            />
        </Routes>
    )
}