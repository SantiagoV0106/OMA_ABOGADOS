import { Routes, Route } from 'react-router-dom'
import { DashboardPage } from '../pages'
import { PrivateRoute } from '../../auth/routes/PrivateRoute'

export function AdminRouter() {
    return (
        <Routes>
            <Route
                path='/dashboard'
                element={
                    <PrivateRoute>
                        <DashboardPage />
                    </PrivateRoute>
                }
            />
        </Routes>
    )
}