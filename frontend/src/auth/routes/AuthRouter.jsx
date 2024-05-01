import { Routes, Route } from 'react-router-dom'
import { LoginPage } from '../pages'

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