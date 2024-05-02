import { Routes, Route } from 'react-router-dom'
import { DashboardPage } from '../pages'
import { PrivateRoute } from '../../auth/routes/PrivateRoute'

export function AdminRouter() {
    return (
        <main>
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
        </main>
    )
}