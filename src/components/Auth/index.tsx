
import styles from './styles.module.scss';


export default function Auth() {
    return(
        <div className={styles.container}>
            <div className={styles.form}>
                <div className={styles.logo}>
                    <img src="/ava" alt="Logo ava"/>
                </div>
                <div className={styles.dados}>
                    <div className={styles.inputDiv}>
                        <span>Login</span>
                        <input type="text"/>
                    </div>
                    <div className={styles.inputDiv}>
                        <span>Senha</span>
                        <input type="text"/>
                    </div>
                    <div className={styles.button}>
                        <button type="button">
                            Acessar
                        </button>
                    </div>
                    <div className={styles.forgot}>
                        <a>Esqueci minha senha...</a>
                    </div>
                </div>
            </div>
        </div>
    );
}