import { Link } from "react-router-dom"
import '../styles/banner.css'
import '../styles/error.css'

function Error() {
    return (
        <>
            {
                <div className='error'>
                    <h2>404</h2>
                    <p>Oups! La page que vous demandez n'existe pas.</p>
                    <Link className='error__Link' to='../'>Retourner sur la page d'accueil</Link>
                </div>
            }
        </>
    )
}

export default Error