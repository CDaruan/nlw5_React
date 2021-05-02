import styles from './styles.module.scss';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR'

import { signIn, signOut, useSession } from 'next-auth/client'
export function Header() {
    const [session, loading] = useSession()
    const currentDate = format(new Date(), 'EEEEEE, d MMMM', { locale: ptBR })
    console.log('session:');
    console.log(session)
    
    return (
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="Podcast" />
            <p>O melhor para você ouvir, sempre</p>
            <div>

                {!session && <>
                    <button onClick={() => signIn()}>Logar</button>
                </>}
                {session && <>
                    <button onClick={() => signOut()}>Logado com {session.token} Deslogar</button>

                </>}
                <span>{currentDate}</span>
            </div>
        </header>
    )
}