import { useAuth } from '../../..//auth/hooks/useAuth'
import { Button } from '../../../ui'
import { Noticias, Processes } from '../../components'

// Styles
import './dashboard.css'

export function DashboardPage() {

    const { handleLogOut } = useAuth()



    return (
        <>
            <header className='dashboard-header'>
                <img src="/oma-gold.png" alt="oma-logo" />
                <Button
                    onClick={handleLogOut}
                    className='primary-btn'
                    type='button'
                    name='Cerrar Sesión' />
            </header>
            <Processes />
            <Noticias />
        </>

    )
}