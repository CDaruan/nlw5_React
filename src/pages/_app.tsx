import '../styles/global.scss'

import { Header } from '../components/Header'
import { Player } from '../components/Player';
import  Auth  from '../components/Auth';
import styles from '../styles/app.module.scss';
import React from 'react';
import { PlayerContextProvider } from '../context/PlayerContext';
import { AuthContextProvider, useAuth } from '../context/AuthContext';

function MyApp({ Component, pageProps }) {
  const { token } = useAuth();
  return (
    <AuthContextProvider>
      { !token ? (
        <PlayerContextProvider>
          <div className={styles.wrapper}>
            <main>
              <Header />
              < Component {...pageProps} />
            </main>
            <Player />
          </div>
        </PlayerContextProvider>
      ) : (
        <Auth />
      )}
    </AuthContextProvider>
  )
}

export default MyApp
