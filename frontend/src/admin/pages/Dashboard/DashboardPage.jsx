// Components
import './dashboard.css'

// CustomHooks
import { useAuth } from '../../../auth/hooks/useAuth'

// Styles
import { Button } from '../../../ui'

export function DashboardPage() {

    const { handleLogOut } = useAuth()
    return (
        <>
            <h1>Hola desde dashboardPage</h1>
            <Button
                onClick={handleLogOut}
                className='primary-btn'
                type='button'
                name='Cerrar Sesión' />
        </>

    )
}